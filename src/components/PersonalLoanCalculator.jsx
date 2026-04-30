
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator } from 'lucide-react';

const PersonalLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('15000');
  const [interestRate, setInterestRate] = useState('9.47');
  const [loanTerm, setLoanTerm] = useState('36');
  const [termUnit, setTermUnit] = useState('months');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const term = parseFloat(loanTerm);

    if (isNaN(amount) || amount <= 0) {
      newErrors.loanAmount = 'Please enter a valid loan amount';
    }
    if (isNaN(rate) || rate <= 0 || rate > 50) {
      newErrors.interestRate = 'Please enter a valid interest rate (0-50%)';
    }
    if (isNaN(term) || term <= 0) {
      newErrors.loanTerm = 'Please enter a valid loan term';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLoan = () => {
    if (!validateInputs()) return;

    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = termUnit === 'months' ? parseFloat(loanTerm) : parseFloat(loanTerm) * 12;

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterest = totalPaid - principal;

    setResults({
      monthlyPayment: monthlyPayment,
      totalInterest: totalInterest,
      totalCost: totalPaid,
      principal: principal
    });
  };

  useEffect(() => {
    if (loanAmount && interestRate && loanTerm) {
      calculateLoan();
    }
  }, [loanAmount, interestRate, loanTerm, termUnit]);

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
            Enter your personal loan details to calculate monthly payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan amount</Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="text-foreground"
              placeholder="15000"
            />
            {errors.loanAmount && (
              <p className="text-sm text-destructive">{errors.loanAmount}</p>
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
              placeholder="9.47"
            />
            {errors.interestRate && (
              <p className="text-sm text-destructive">{errors.interestRate}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanTerm">Loan term</Label>
            <div className="flex gap-2">
              <Input
                id="loanTerm"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="text-foreground flex-1"
                placeholder="36"
              />
              <Tabs value={termUnit} onValueChange={setTermUnit} className="w-auto">
                <TabsList>
                  <TabsTrigger value="months" className="transition-all duration-200">Months</TabsTrigger>
                  <TabsTrigger value="years" className="transition-all duration-200">Years</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            {errors.loanTerm && (
              <p className="text-sm text-destructive">{errors.loanTerm}</p>
            )}
          </div>

          <Button 
            onClick={calculateLoan} 
            className="w-full transition-all duration-200 active:scale-[0.98]"
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

export default PersonalLoanCalculator;
