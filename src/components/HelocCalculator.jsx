
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const HelocCalculator = () => {
  const [homeValue, setHomeValue] = useState('400000');
  const [mortgageBalance, setMortgageBalance] = useState('200000');
  const [creditLimit, setCreditLimit] = useState('85');
  const [rate, setRate] = useState('7.5');
  const [drawPeriod, setDrawPeriod] = useState('10');
  const [repaymentPeriod, setRepaymentPeriod] = useState('15');
  const [drawAmount, setDrawAmount] = useState('50000');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    const hv = parseFloat(homeValue);
    const mb = parseFloat(mortgageBalance);
    const cl = parseFloat(creditLimit);
    const r = parseFloat(rate);
    const dp = parseFloat(drawPeriod);
    const rp = parseFloat(repaymentPeriod);
    const da = parseFloat(drawAmount);

    if (isNaN(hv) || hv <= 0) newErrors.homeValue = 'Enter valid home value';
    if (isNaN(mb) || mb < 0) newErrors.mortgageBalance = 'Enter valid mortgage balance';
    if (isNaN(cl) || cl <= 0 || cl > 100) newErrors.creditLimit = 'Enter valid limit %';
    if (isNaN(r) || r < 0 || r > 30) newErrors.rate = 'Enter valid rate';
    if (isNaN(dp) || dp <= 0) newErrors.drawPeriod = 'Enter valid draw period';
    if (isNaN(rp) || rp <= 0) newErrors.repaymentPeriod = 'Enter valid repayment period';
    if (isNaN(da) || da < 0) newErrors.drawAmount = 'Enter valid draw amount';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateHeloc = () => {
    if (!validateInputs()) return;

    const hv = parseFloat(homeValue);
    const mb = parseFloat(mortgageBalance);
    const cl = parseFloat(creditLimit);
    const r = parseFloat(rate) / 100;
    const rp = parseFloat(repaymentPeriod) * 12; // months
    let da = parseFloat(drawAmount);

    // Max limit based on home value and credit limit %
    const maxEquity = (hv * (cl / 100)) - mb;
    const availableLine = Math.max(0, maxEquity);

    // If draw amount exceeds available line, we'll still calculate but user should know
    if (da > availableLine) {
      setErrors({ drawAmount: 'Draw amount exceeds available credit line' });
    }

    // Interest-only payment (during draw period)
    const interestOnlyPayment = da * (r / 12);

    // P+I payment (during repayment period)
    const monthlyRate = r / 12;
    const amortizedPayment = (da * monthlyRate * Math.pow(1 + monthlyRate, rp)) / (Math.pow(1 + monthlyRate, rp) - 1);

    setResults({
      availableLine,
      interestOnlyPayment: da === 0 ? 0 : interestOnlyPayment,
      amortizedPayment: da === 0 ? 0 : amortizedPayment
    });
  };

  useEffect(() => {
    if (homeValue && mortgageBalance && creditLimit && rate && drawPeriod && repaymentPeriod && drawAmount) {
      calculateHeloc();
    }
  }, [homeValue, mortgageBalance, creditLimit, rate, drawPeriod, repaymentPeriod, drawAmount]);

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
            HELOC Details
          </CardTitle>
          <CardDescription>
            Calculate your available equity and payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="homeValue">Home value ($)</Label>
                <Input
                  id="homeValue"
                  type="number"
                  value={homeValue}
                  onChange={(e) => setHomeValue(e.target.value)}
                  className="text-foreground"
                />
                {errors.homeValue && <p className="text-sm text-destructive">{errors.homeValue}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="mortgageBalance">Mortgage balance ($)</Label>
                <Input
                  id="mortgageBalance"
                  type="number"
                  value={mortgageBalance}
                  onChange={(e) => setMortgageBalance(e.target.value)}
                  className="text-foreground"
                />
                {errors.mortgageBalance && <p className="text-sm text-destructive">{errors.mortgageBalance}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="creditLimit">Credit limit (%)</Label>
                <Input
                  id="creditLimit"
                  type="number"
                  value={creditLimit}
                  onChange={(e) => setCreditLimit(e.target.value)}
                  className="text-foreground"
                />
                {errors.creditLimit && <p className="text-sm text-destructive">{errors.creditLimit}</p>}
              </div>
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="drawPeriod">Draw period (years)</Label>
                <Input
                  id="drawPeriod"
                  type="number"
                  value={drawPeriod}
                  onChange={(e) => setDrawPeriod(e.target.value)}
                  className="text-foreground"
                />
                {errors.drawPeriod && <p className="text-sm text-destructive">{errors.drawPeriod}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="repaymentPeriod">Repayment period (years)</Label>
                <Input
                  id="repaymentPeriod"
                  type="number"
                  value={repaymentPeriod}
                  onChange={(e) => setRepaymentPeriod(e.target.value)}
                  className="text-foreground"
                />
                {errors.repaymentPeriod && <p className="text-sm text-destructive">{errors.repaymentPeriod}</p>}
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <Label htmlFor="drawAmount" className="font-medium text-primary">Expected draw amount ($)</Label>
              <Input
                id="drawAmount"
                type="number"
                value={drawAmount}
                onChange={(e) => setDrawAmount(e.target.value)}
                className="text-foreground"
              />
              {errors.drawAmount && <p className="text-sm text-destructive">{errors.drawAmount}</p>}
            </div>
          </div>

          <Button 
            onClick={calculateHeloc} 
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-lg px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate HELOC
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 h-full flex flex-col">
        <CardHeader>
          <CardTitle>Your Results</CardTitle>
          <CardDescription>Estimated availability and payments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 flex-1 flex flex-col">
          {results ? (
            <>
              <div className="space-y-2 pb-4 border-b">
                <p className="text-sm font-medium text-muted-foreground">Available Credit Line</p>
                <p className="text-4xl font-bold text-primary" style={{fontVariantNumeric: 'tabular-nums'}}>
                  {formatCurrency(results.availableLine)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Based on {creditLimit}% LTV minus mortgage balance</p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Draw Period ({drawPeriod} years)</p>
                  <div className="bg-card p-4 rounded-xl border shadow-sm">
                    <p className="text-sm text-muted-foreground mb-1">Interest-Only Monthly Payment</p>
                    <p className="text-2xl font-bold" style={{fontVariantNumeric: 'tabular-nums'}}>
                      {formatCurrency(results.interestOnlyPayment)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Repayment Period ({repaymentPeriod} years)</p>
                  <div className="bg-card p-4 rounded-xl border shadow-sm">
                    <p className="text-sm text-muted-foreground mb-1">Principal + Interest Monthly Payment</p>
                    <p className="text-2xl font-bold text-[hsl(var(--purple-primary))]" style={{fontVariantNumeric: 'tabular-nums'}}>
                      {formatCurrency(results.amortizedPayment)}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground m-auto">
              <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Enter your home and loan details to see your HELOC options</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HelocCalculator;
