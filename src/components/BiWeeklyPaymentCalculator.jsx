
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const BiWeeklyPaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('250000');
  const [rate, setRate] = useState('6.5');
  const [term, setTerm] = useState('30');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    const p = parseFloat(loanAmount);
    const r = parseFloat(rate);
    const t = parseFloat(term);

    if (isNaN(p) || p <= 0) newErrors.loanAmount = 'Enter valid loan amount';
    if (isNaN(r) || r < 0 || r > 30) newErrors.rate = 'Enter valid rate';
    if (isNaN(t) || t <= 0 || t > 50) newErrors.term = 'Enter valid term (years)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBiWeekly = () => {
    if (!validateInputs()) return;

    const p = parseFloat(loanAmount);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(term);
    const monthlyRate = r / 12;
    const totalMonths = t * 12;

    // Standard Monthly Payment
    const monthlyPayment = p * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const standardTotalInterest = (monthlyPayment * totalMonths) - p;

    // Bi-Weekly Payment is exactly half of the monthly payment
    const biWeeklyPayment = monthlyPayment / 2;

    // To find the exact number of bi-weekly periods to pay it off, use NPER with the bi-weekly interest rate
    // Note: Mortgages usually compound monthly, but for a standard approximation, we use effective bi-weekly rate
    const biWeeklyRate = r / 26;
    const totalBiWeeklyPeriods = -Math.log(1 - (p * biWeeklyRate) / biWeeklyPayment) / Math.log(1 + biWeeklyRate);
    
    const biWeeklyTotalInterest = (biWeeklyPayment * totalBiWeeklyPeriods) - p;
    const yearsToPayoff = totalBiWeeklyPeriods / 26;
    const yearsSaved = t - yearsToPayoff;
    const interestSaved = standardTotalInterest - biWeeklyTotalInterest;

    setResults({
      monthlyPayment,
      biWeeklyPayment,
      standardTotalInterest,
      biWeeklyTotalInterest,
      yearsToPayoff,
      yearsSaved: Math.max(0, yearsSaved),
      interestSaved: Math.max(0, interestSaved)
    });
  };

  useEffect(() => {
    if (loanAmount && rate && term) {
      calculateBiWeekly();
    }
  }, [loanAmount, rate, term]);

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
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Loan Details
          </CardTitle>
          <CardDescription>
            See how much you save with bi-weekly payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan amount ($)</Label>
              <Input
                id="loanAmount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="text-foreground"
              />
              {errors.loanAmount && <p className="text-sm text-destructive">{errors.loanAmount}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rate">Interest rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="text-foreground"
                />
                {errors.rate && <p className="text-sm text-destructive">{errors.rate}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="term">Loan term (years)</Label>
                <Input
                  id="term"
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="text-foreground"
                />
                {errors.term && <p className="text-sm text-destructive">{errors.term}</p>}
              </div>
            </div>
          </div>

          <Button 
            onClick={calculateBiWeekly} 
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-lg px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate Savings
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 h-full flex flex-col">
        <CardHeader>
          <CardTitle>Bi-Weekly Impact</CardTitle>
          <CardDescription>Your accelerated payoff plan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 flex-1 flex flex-col">
          {results ? (
            <>
              <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Standard Monthly</p>
                  <p className="text-xl font-semibold" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.monthlyPayment)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-primary">Bi-Weekly Payment</p>
                  <p className="text-xl font-bold text-primary" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.biWeeklyPayment)}
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-2">
                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-xl shadow-sm">
                  <p className="text-sm font-medium text-green-800 dark:text-green-400 mb-1">Interest Saved</p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-500" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.interestSaved)}
                  </p>
                </div>
                
                <div className="bg-[hsl(var(--purple-light))] dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 p-4 rounded-xl shadow-sm">
                  <p className="text-sm font-medium text-[hsl(var(--purple-primary))] mb-1">Time Saved</p>
                  <p className="text-3xl font-bold text-[hsl(var(--purple-primary))]">
                    {results.yearsSaved.toFixed(1)} years
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Pays off in {results.yearsToPayoff.toFixed(1)} years instead of {term}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Interest (Monthly):</span>
                  <span className="font-medium">{formatCurrency(results.standardTotalInterest)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Interest (Bi-Weekly):</span>
                  <span className="font-medium">{formatCurrency(results.biWeeklyTotalInterest)}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground m-auto">
              <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Enter your loan details to see how much you could save</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BiWeeklyPaymentCalculator;
