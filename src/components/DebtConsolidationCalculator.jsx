
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, Plus, Trash2 } from 'lucide-react';

const DebtConsolidationCalculator = () => {
  const [debts, setDebts] = useState([
    { id: 1, name: 'Credit Card 1', balance: '5000', rate: '22.99', payment: '150' },
    { id: 2, name: 'Personal Loan', balance: '12000', rate: '14.5', payment: '350' }
  ]);
  const [consolidationRate, setConsolidationRate] = useState('10.5');
  const [consolidationTerm, setConsolidationTerm] = useState('60'); // Months
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const addDebt = () => {
    if (debts.length >= 5) return;
    setDebts([...debts, { id: Date.now(), name: `Debt ${debts.length + 1}`, balance: '', rate: '', payment: '' }]);
  };

  const removeDebt = (id) => {
    if (debts.length <= 1) return;
    setDebts(debts.filter(d => d.id !== id));
  };

  const updateDebt = (id, field, value) => {
    setDebts(debts.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  const calculatePMT = (principal, annualRate, months) => {
    if (annualRate === 0) return principal / months;
    const r = annualRate / 100 / 12;
    return principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  };

  const calculateNPER = (principal, annualRate, pmt) => {
    if (annualRate === 0) return principal / pmt;
    const r = annualRate / 100 / 12;
    if (pmt <= principal * r) return Infinity; // Payment doesn't cover interest
    return -Math.log(1 - (principal * r) / pmt) / Math.log(1 + r);
  };

  const validateInputs = () => {
    const newErrors = {};
    let valid = true;

    debts.forEach((debt, index) => {
      const b = parseFloat(debt.balance);
      const r = parseFloat(debt.rate);
      const p = parseFloat(debt.payment);

      if (isNaN(b) || b < 0) { valid = false; newErrors[`balance_${index}`] = true; }
      if (isNaN(r) || r < 0) { valid = false; newErrors[`rate_${index}`] = true; }
      if (isNaN(p) || p <= 0) { valid = false; newErrors[`payment_${index}`] = true; }
      
      // Ensure payment covers at least the interest
      if (!isNaN(b) && !isNaN(r) && !isNaN(p) && p <= b * (r / 100 / 12)) {
        valid = false;
        newErrors[`payment_min_${index}`] = 'Payment must exceed interest';
      }
    });

    const cr = parseFloat(consolidationRate);
    const ct = parseFloat(consolidationTerm);
    
    if (isNaN(cr) || cr < 0) { valid = false; newErrors.consolidationRate = 'Invalid rate'; }
    if (isNaN(ct) || ct <= 0) { valid = false; newErrors.consolidationTerm = 'Invalid term'; }

    setErrors(newErrors);
    return valid;
  };

  const calculateConsolidation = () => {
    if (!validateInputs()) return;

    let totalBalance = 0;
    let currentTotalMonthly = 0;
    let currentTotalInterest = 0;

    debts.forEach(debt => {
      const b = parseFloat(debt.balance);
      const r = parseFloat(debt.rate);
      const p = parseFloat(debt.payment);

      totalBalance += b;
      currentTotalMonthly += p;

      const monthsToPayoff = calculateNPER(b, r, p);
      if (monthsToPayoff !== Infinity) {
        currentTotalInterest += (monthsToPayoff * p) - b;
      } else {
        // If they are making minimum payments that barely cover interest, assume max penalty
        currentTotalInterest += b * 2; // Arbitrary high penalty for infinite payoff for visual effect
      }
    });

    const cr = parseFloat(consolidationRate);
    const ct = parseFloat(consolidationTerm);

    const newMonthly = calculatePMT(totalBalance, cr, ct);
    const newTotalInterest = (newMonthly * ct) - totalBalance;

    setResults({
      totalBalance,
      currentTotalMonthly,
      newMonthly,
      monthlySavings: currentTotalMonthly - newMonthly,
      currentTotalInterest,
      newTotalInterest,
      interestSavings: currentTotalInterest - newTotalInterest
    });
  };

  useEffect(() => {
    // Only calculate automatically if debts are fully filled out
    const isDebtsFilled = debts.every(d => d.balance && d.rate && d.payment);
    if (isDebtsFilled && consolidationRate && consolidationTerm) {
      calculateConsolidation();
    }
  }, [debts, consolidationRate, consolidationTerm]);

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
            Your Debts & New Loan
          </CardTitle>
          <CardDescription>
            Enter your current debts and proposed consolidation loan terms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Current Debts</h3>
              {debts.length < 5 && (
                <Button variant="outline" size="sm" onClick={addDebt} className="h-8 gap-1">
                  <Plus className="h-4 w-4" /> Add Debt
                </Button>
              )}
            </div>
            
            {debts.map((debt, index) => (
              <div key={debt.id} className="p-4 bg-muted/50 rounded-xl relative border border-border/50">
                {debts.length > 1 && (
                  <button 
                    onClick={() => removeDebt(debt.id)}
                    className="absolute top-3 right-3 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove debt"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
                <div className="grid grid-cols-3 gap-3 mb-2 pr-6">
                  <div className="space-y-1">
                    <Label className="text-xs">Balance ($)</Label>
                    <Input
                      type="number"
                      value={debt.balance}
                      onChange={(e) => updateDebt(debt.id, 'balance', e.target.value)}
                      className={`h-9 ${errors[`balance_${index}`] ? 'border-destructive' : ''}`}
                      placeholder="5000"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Rate (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={debt.rate}
                      onChange={(e) => updateDebt(debt.id, 'rate', e.target.value)}
                      className={`h-9 ${errors[`rate_${index}`] ? 'border-destructive' : ''}`}
                      placeholder="20"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Payment/mo</Label>
                    <Input
                      type="number"
                      value={debt.payment}
                      onChange={(e) => updateDebt(debt.id, 'payment', e.target.value)}
                      className={`h-9 ${errors[`payment_${index}`] ? 'border-destructive' : ''}`}
                      placeholder="150"
                    />
                  </div>
                </div>
                {errors[`payment_min_${index}`] && (
                  <p className="text-xs text-destructive mt-1">{errors[`payment_min_${index}`]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Consolidation Loan</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="consolidationRate">New Rate (%)</Label>
                <Input
                  id="consolidationRate"
                  type="number"
                  step="0.1"
                  value={consolidationRate}
                  onChange={(e) => setConsolidationRate(e.target.value)}
                  className={`text-foreground ${errors.consolidationRate ? 'border-destructive' : ''}`}
                  placeholder="10.5"
                />
                {errors.consolidationRate && <p className="text-sm text-destructive">{errors.consolidationRate}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="consolidationTerm">New Term (months)</Label>
                <Input
                  id="consolidationTerm"
                  type="number"
                  value={consolidationTerm}
                  onChange={(e) => setConsolidationTerm(e.target.value)}
                  className={`text-foreground ${errors.consolidationTerm ? 'border-destructive' : ''}`}
                  placeholder="60"
                />
                {errors.consolidationTerm && <p className="text-sm text-destructive">{errors.consolidationTerm}</p>}
              </div>
            </div>
          </div>

          <Button 
            onClick={calculateConsolidation} 
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-lg px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate Savings
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 h-full flex flex-col">
        <CardHeader>
          <CardTitle>Consolidation Results</CardTitle>
          <CardDescription>
            See if combining your debts makes sense
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 flex-1 flex flex-col">
          {results ? (
            <>
              <div className="space-y-2 pb-4 border-b">
                <p className="text-sm font-medium text-muted-foreground">Total Debt Combined</p>
                <p className="text-2xl font-semibold" style={{fontVariantNumeric: 'tabular-nums'}}>
                  {formatCurrency(results.totalBalance)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Current payments</p>
                  <p className="text-xl font-semibold" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.currentTotalMonthly)}<span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">New payment</p>
                  <p className="text-xl font-bold text-primary" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.newMonthly)}<span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 pb-4 border-b">
                <p className="text-sm font-medium text-muted-foreground">Monthly Cash Flow Impact</p>
                <p className={`text-3xl font-bold ${results.monthlySavings > 0 ? 'text-green-600 dark:text-green-500' : 'text-destructive'}`} style={{fontVariantNumeric: 'tabular-nums'}}>
                  {results.monthlySavings > 0 ? '+' : ''}{formatCurrency(results.monthlySavings)} / mo
                </p>
              </div>

              <div className="space-y-4 pt-4 mt-auto">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Lifetime Interest Comparison</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current total interest</span>
                  <span className="font-semibold">{formatCurrency(results.currentTotalInterest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">New total interest</span>
                  <span className="font-semibold">{formatCurrency(results.newTotalInterest)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border/50">
                  <span className="font-medium">Total interest saved</span>
                  <span className={`font-bold ${results.interestSavings > 0 ? 'text-green-600 dark:text-green-500' : 'text-destructive'}`}>
                    {formatCurrency(results.interestSavings)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground m-auto">
              <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Add your debts to see how much you could save by consolidating</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DebtConsolidationCalculator;
