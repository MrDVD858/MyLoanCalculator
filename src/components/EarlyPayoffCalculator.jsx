
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { addMonths, format } from 'date-fns';

const EarlyPayoffCalculator = () => {
  const [balance, setBalance] = useState('200000');
  const [rate, setRate] = useState('6.0');
  const [term, setTerm] = useState('360'); // Remaining months
  const [extraPayment, setExtraPayment] = useState('300');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    const p = parseFloat(balance);
    const r = parseFloat(rate);
    const t = parseFloat(term);
    const ext = parseFloat(extraPayment);

    if (isNaN(p) || p <= 0) newErrors.balance = 'Enter a valid loan balance';
    if (isNaN(r) || r < 0 || r > 30) newErrors.rate = 'Enter a valid interest rate';
    if (isNaN(t) || t <= 0) newErrors.term = 'Enter remaining term in months';
    if (isNaN(ext) || ext < 0) newErrors.extraPayment = 'Enter a valid extra payment amount';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePMT = (principal, annualRate, months) => {
    if (annualRate === 0) return principal / months;
    const monthlyRate = annualRate / 100 / 12;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  };

  const calculateNPER = (principal, annualRate, pmt) => {
    if (annualRate === 0) return principal / pmt;
    const monthlyRate = annualRate / 100 / 12;
    if (pmt <= principal * monthlyRate) return Infinity; // Payment doesn't cover interest
    return -Math.log(1 - (principal * monthlyRate) / pmt) / Math.log(1 + monthlyRate);
  };

  const calculateEarlyPayoff = () => {
    if (!validateInputs()) return;

    const p = parseFloat(balance);
    const annualRate = parseFloat(rate);
    const originalTermMonths = parseFloat(term);
    const extra = parseFloat(extraPayment);

    const baseMonthlyPayment = calculatePMT(p, annualRate, originalTermMonths);
    const originalTotalInterest = (baseMonthlyPayment * originalTermMonths) - p;

    if (extra <= 0) {
      setResults({
        baseMonthlyPayment,
        newMonthlyPayment: baseMonthlyPayment,
        originalMonths: originalTermMonths,
        newMonths: originalTermMonths,
        monthsSaved: 0,
        originalTotalInterest,
        newTotalInterest: originalTotalInterest,
        interestSaved: 0
      });
      return;
    }

    const newMonthlyPayment = baseMonthlyPayment + extra;
    const newTermMonths = Math.ceil(calculateNPER(p, annualRate, newMonthlyPayment));
    
    // If Infinity, they aren't paying enough, though basic PMT covers it unless extra is negative
    if (newTermMonths === Infinity) return;

    const newTotalInterest = (newMonthlyPayment * newTermMonths) - p;
    const monthsSaved = originalTermMonths - newTermMonths;
    const interestSaved = originalTotalInterest - newTotalInterest;

    setResults({
      baseMonthlyPayment,
      newMonthlyPayment,
      originalMonths: originalTermMonths,
      newMonths: newTermMonths,
      monthsSaved,
      originalTotalInterest,
      newTotalInterest: Math.max(0, newTotalInterest),
      interestSaved: Math.max(0, interestSaved)
    });
  };

  useEffect(() => {
    if (balance && rate && term && extraPayment) {
      calculateEarlyPayoff();
    }
  }, [balance, rate, term, extraPayment]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const getFutureDate = (monthsToAdd) => {
    return format(addMonths(new Date(), monthsToAdd), 'MMM yyyy');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Loan Details
          </CardTitle>
          <CardDescription>
            Enter your loan balance and how much extra you want to pay
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="balance">Current loan balance ($)</Label>
            <Input
              id="balance"
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="text-foreground"
              placeholder="200000"
            />
            {errors.balance && <p className="text-sm text-destructive">{errors.balance}</p>}
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
                placeholder="6.0"
              />
              {errors.rate && <p className="text-sm text-destructive">{errors.rate}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="term">Remaining months</Label>
              <Input
                id="term"
                type="number"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="text-foreground"
                placeholder="360"
              />
              {errors.term && <p className="text-sm text-destructive">{errors.term}</p>}
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t">
            <Label htmlFor="extraPayment" className="text-[hsl(var(--purple-primary))] font-semibold">Extra monthly payment ($)</Label>
            <Input
              id="extraPayment"
              type="number"
              value={extraPayment}
              onChange={(e) => setExtraPayment(e.target.value)}
              className="text-foreground border-[hsl(var(--purple-primary))]/30 focus-visible:ring-[hsl(var(--purple-primary))]"
              placeholder="300"
            />
            {errors.extraPayment && <p className="text-sm text-destructive">{errors.extraPayment}</p>}
          </div>

          <Button 
            onClick={calculateEarlyPayoff} 
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-lg px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate impact
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 h-full flex flex-col">
        <CardHeader>
          <CardTitle>Early Payoff Results</CardTitle>
          <CardDescription>
            See how much time and money you save
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 flex-1 flex flex-col">
          {results ? (
            <>
              <div className="space-y-2 pb-4 border-b">
                <p className="text-sm font-medium text-muted-foreground">Interest Saved</p>
                <p className="text-4xl font-bold text-green-600 dark:text-green-500" style={{fontVariantNumeric: 'tabular-nums'}}>
                  {formatCurrency(results.interestSaved)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Original Payoff</p>
                  <p className="text-lg font-semibold">{getFutureDate(results.originalMonths)}</p>
                  <p className="text-sm text-muted-foreground">{results.originalMonths} months</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">New Payoff</p>
                  <p className="text-lg font-bold text-primary">{getFutureDate(results.newMonths)}</p>
                  <p className="text-sm font-medium text-green-600 dark:text-green-500">
                    {results.monthsSaved} months earlier!
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 mt-auto border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Original monthly payment</span>
                  <span className="font-semibold">{formatCurrency(results.baseMonthlyPayment)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">New total payment</span>
                  <span className="font-bold">{formatCurrency(results.newMonthlyPayment)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Total interest (standard)</span>
                  <span className="font-semibold">{formatCurrency(results.originalTotalInterest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Total interest (with extra)</span>
                  <span className="font-semibold">{formatCurrency(results.newTotalInterest)}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground m-auto">
              <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Enter your loan details to see the impact of extra payments</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EarlyPayoffCalculator;
