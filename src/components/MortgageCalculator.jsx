
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState('350000');
  const [downPayment, setDownPayment] = useState('70000');
  const [interestRate, setInterestRate] = useState('6.87');
  const [loanTerm, setLoanTerm] = useState('30');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate);
    const term = parseFloat(loanTerm);

    if (isNaN(price) || price <= 0) {
      newErrors.homePrice = 'Please enter a valid home price';
    }
    if (isNaN(down) || down < 0) {
      newErrors.downPayment = 'Please enter a valid down payment';
    }
    if (down >= price) {
      newErrors.downPayment = 'Down payment must be less than home price';
    }
    if (isNaN(rate) || rate <= 0 || rate > 30) {
      newErrors.interestRate = 'Please enter a valid interest rate (0-30%)';
    }
    if (isNaN(term) || term <= 0 || term > 50) {
      newErrors.loanTerm = 'Please enter a valid loan term (1-50 years)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMortgage = () => {
    if (!validateInputs()) return;

    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterest = totalPaid - principal;

    setResults({
      monthlyPayment: monthlyPayment,
      totalInterest: totalInterest,
      totalCost: totalPaid + parseFloat(downPayment),
      principal: principal
    });
  };

  useEffect(() => {
    if (homePrice && downPayment && interestRate && loanTerm) {
      calculateMortgage();
    }
  }, [homePrice, downPayment, interestRate, loanTerm]);

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
            Calculator inputs
          </CardTitle>
          <CardDescription>
            Enter your mortgage details to calculate monthly payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="homePrice">Home price</Label>
            <Input
              id="homePrice"
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="text-foreground"
              placeholder="350000"
            />
            {errors.homePrice && (
              <p className="text-sm text-destructive">{errors.homePrice}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="downPayment">Down payment</Label>
            <Input
              id="downPayment"
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="text-foreground"
              placeholder="70000"
            />
            {errors.downPayment && (
              <p className="text-sm text-destructive">{errors.downPayment}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="text-foreground"
              placeholder="6.87"
            />
            {errors.interestRate && (
              <p className="text-sm text-destructive">{errors.interestRate}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanTerm">Loan term (years)</Label>
            <Input
              id="loanTerm"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="text-foreground"
              placeholder="30"
            />
            {errors.loanTerm && (
              <p className="text-sm text-destructive">{errors.loanTerm}</p>
            )}
          </div>

          <Button 
            onClick={calculateMortgage} 
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-lg px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Calculate payment
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle>Your results</CardTitle>
          <CardDescription>
            Based on your inputs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {results ? (
            <>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Monthly payment</p>
                <p className="text-3xl font-bold text-primary" style={{fontVariantNumeric: 'tabular-nums'}}>
                  {formatCurrency(results.monthlyPayment)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Principal</p>
                  <p className="text-lg font-semibold" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.principal)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total interest</p>
                  <p className="text-lg font-semibold" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.totalInterest)}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <p className="text-sm font-medium text-muted-foreground">Total cost of loan</p>
                <p className="text-2xl font-bold" style={{fontVariantNumeric: 'tabular-nums'}}>
                  {formatCurrency(results.totalCost)}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Enter your details to see results</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MortgageCalculator;
