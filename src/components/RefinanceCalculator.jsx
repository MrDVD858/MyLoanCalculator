
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const RefinanceCalculator = () => {
  const [balance, setBalance] = useState('250000');
  const [oldRate, setOldRate] = useState('6.5');
  const [oldTerm, setOldTerm] = useState('240'); // Remaining term in months
  const [newRate, setNewRate] = useState('5.0');
  const [newTerm, setNewTerm] = useState('180'); // New term in months
  const [closingCosts, setClosingCosts] = useState('3000');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    const p = parseFloat(balance);
    const or = parseFloat(oldRate);
    const ot = parseFloat(oldTerm);
    const nr = parseFloat(newRate);
    const nt = parseFloat(newTerm);
    const cc = parseFloat(closingCosts);

    if (isNaN(p) || p <= 0) newErrors.balance = 'Enter a valid loan balance';
    if (isNaN(or) || or < 0 || or > 30) newErrors.oldRate = 'Enter a valid interest rate (0-30%)';
    if (isNaN(ot) || ot <= 0) newErrors.oldTerm = 'Enter remaining term in months';
    if (isNaN(nr) || nr < 0 || nr > 30) newErrors.newRate = 'Enter a valid interest rate (0-30%)';
    if (isNaN(nt) || nt <= 0) newErrors.newTerm = 'Enter new term in months';
    if (isNaN(cc) || cc < 0) newErrors.closingCosts = 'Enter valid closing costs';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePMT = (principal, annualRate, months) => {
    if (annualRate === 0) return principal / months;
    const r = annualRate / 100 / 12;
    return principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  };

  const calculateRefinance = () => {
    if (!validateInputs()) return;

    const p = parseFloat(balance);
    const cc = parseFloat(closingCosts);
    const oldMonthly = calculatePMT(p, parseFloat(oldRate), parseFloat(oldTerm));
    const newMonthly = calculatePMT(p, parseFloat(newRate), parseFloat(newTerm)); // Assuming closing costs paid upfront
    
    const monthlySavings = oldMonthly - newMonthly;
    const breakEven = monthlySavings > 0 ? cc / monthlySavings : null;

    const oldTotalInterest = (oldMonthly * parseFloat(oldTerm)) - p;
    const newTotalInterest = (newMonthly * parseFloat(newTerm)) - p;
    const interestSaved = oldTotalInterest - newTotalInterest;

    setResults({
      oldMonthly,
      newMonthly,
      monthlySavings,
      breakEven: breakEven > 0 ? breakEven : null,
      interestSaved,
      totalCostDifference: interestSaved - cc
    });
  };

  useEffect(() => {
    if (balance && oldRate && oldTerm && newRate && newTerm && closingCosts) {
      calculateRefinance();
    }
  }, [balance, oldRate, oldTerm, newRate, newTerm, closingCosts]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Current & New Loan Details
          </CardTitle>
          <CardDescription>
            Compare your existing loan with a potential refinance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Current Loan</h3>
            <div className="space-y-2">
              <Label htmlFor="balance">Current loan balance ($)</Label>
              <Input
                id="balance"
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="text-foreground"
                placeholder="250000"
              />
              {errors.balance && <p className="text-sm text-destructive">{errors.balance}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="oldRate">Current rate (%)</Label>
                <Input
                  id="oldRate"
                  type="number"
                  step="0.1"
                  value={oldRate}
                  onChange={(e) => setOldRate(e.target.value)}
                  className="text-foreground"
                  placeholder="6.5"
                />
                {errors.oldRate && <p className="text-sm text-destructive">{errors.oldRate}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="oldTerm">Remaining months</Label>
                <Input
                  id="oldTerm"
                  type="number"
                  value={oldTerm}
                  onChange={(e) => setOldTerm(e.target.value)}
                  className="text-foreground"
                  placeholder="240"
                />
                {errors.oldTerm && <p className="text-sm text-destructive">{errors.oldTerm}</p>}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">New Refinance Loan</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="newRate">New rate (%)</Label>
                <Input
                  id="newRate"
                  type="number"
                  step="0.1"
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                  className="text-foreground"
                  placeholder="5.0"
                />
                {errors.newRate && <p className="text-sm text-destructive">{errors.newRate}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="newTerm">New term (months)</Label>
                <Input
                  id="newTerm"
                  type="number"
                  value={newTerm}
                  onChange={(e) => setNewTerm(e.target.value)}
                  className="text-foreground"
                  placeholder="180"
                />
                {errors.newTerm && <p className="text-sm text-destructive">{errors.newTerm}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="closingCosts">Closing costs ($)</Label>
              <Input
                id="closingCosts"
                type="number"
                value={closingCosts}
                onChange={(e) => setClosingCosts(e.target.value)}
                className="text-foreground"
                placeholder="3000"
              />
              {errors.closingCosts && <p className="text-sm text-destructive">{errors.closingCosts}</p>}
            </div>
          </div>

          <Button 
            onClick={calculateRefinance} 
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-lg px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate savings
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 h-full flex flex-col">
        <CardHeader>
          <CardTitle>Refinance Results</CardTitle>
          <CardDescription>
            See how your new loan compares
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 flex-1 flex flex-col">
          {results ? (
            <>
              <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Old Payment</p>
                  <p className="text-xl font-semibold" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.oldMonthly)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">New Payment</p>
                  <p className="text-xl font-bold text-primary" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.newMonthly)}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-sm font-medium text-muted-foreground">Monthly Payment Difference</p>
                <p className={`text-3xl font-bold ${results.monthlySavings > 0 ? 'text-green-600 dark:text-green-500' : 'text-destructive'}`} style={{fontVariantNumeric: 'tabular-nums'}}>
                  {results.monthlySavings > 0 ? '+' : ''}{formatCurrency(results.monthlySavings)} / mo
                </p>
                <p className="text-sm text-muted-foreground">
                  {results.monthlySavings > 0 ? 'You will save on your monthly payment.' : 'Your monthly payment will increase.'}
                </p>
              </div>

              <div className="space-y-4 pt-4 mt-auto border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Break-even point</span>
                  <span className="font-semibold">
                    {results.breakEven ? `${Math.ceil(results.breakEven)} months` : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Total interest saved</span>
                  <span className={`font-semibold ${results.interestSaved > 0 ? 'text-green-600 dark:text-green-500' : 'text-destructive'}`}>
                    {formatCurrency(results.interestSaved)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Net lifetime savings (after fees)</span>
                  <span className={`font-bold ${results.totalCostDifference > 0 ? 'text-green-600 dark:text-green-500' : 'text-destructive'}`}>
                    {formatCurrency(results.totalCostDifference)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground m-auto">
              <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Enter your loan details to see if refinancing makes sense for you</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RefinanceCalculator;
