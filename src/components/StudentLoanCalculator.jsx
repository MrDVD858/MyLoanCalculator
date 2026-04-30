
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const StudentLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('28750');
  const [interestRate, setInterestRate] = useState('4.53');
  const [loanTerm, setLoanTerm] = useState('10');
  const [repaymentPlan, setRepaymentPlan] = useState('standard');
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
    if (isNaN(rate) || rate < 0 || rate > 20) {
      newErrors.interestRate = 'Please enter a valid interest rate (0-20%)';
    }
    if (isNaN(term) || term <= 0 || term > 30) {
      newErrors.loanTerm = 'Please enter a valid loan term (1-30 years)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateStudentLoan = () => {
    if (!validateInputs()) return;

    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (repaymentPlan === 'standard') {
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPaid = monthlyPayment * numberOfPayments;
      const totalInterest = totalPaid - principal;

      setResults({
        monthlyPayment: monthlyPayment,
        totalInterest: totalInterest,
        totalCost: totalPaid,
        principal: principal,
        isIncomeDriven: false
      });
    } else {
      // Income-driven simplified example
      const estimatedMonthlyPayment = principal * 0.015; // Simplified 1.5% of principal
      const estimatedTotalPaid = estimatedMonthlyPayment * numberOfPayments;
      const estimatedInterest = estimatedTotalPaid - principal;

      setResults({
        monthlyPayment: estimatedMonthlyPayment,
        totalInterest: estimatedInterest,
        totalCost: estimatedTotalPaid,
        principal: principal,
        isIncomeDriven: true
      });
    }
  };

  useEffect(() => {
    if (loanAmount && interestRate && loanTerm) {
      calculateStudentLoan();
    }
  }, [loanAmount, interestRate, loanTerm, repaymentPlan]);

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
            Enter your student loan details to calculate monthly payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Total loan amount</Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="text-foreground"
              placeholder="28750"
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
              placeholder="4.53"
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
              placeholder="10"
            />
            {errors.loanTerm && (
              <p className="text-sm text-destructive">{errors.loanTerm}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="repaymentPlan">Repayment plan</Label>
            <Select value={repaymentPlan} onValueChange={setRepaymentPlan}>
              <SelectTrigger id="repaymentPlan" className="text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard repayment</SelectItem>
                <SelectItem value="income-driven">Income-driven repayment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {repaymentPlan === 'income-driven' && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm">
                Income-driven plans calculate payments based on your discretionary income. This is a simplified estimate.
              </AlertDescription>
            </Alert>
          )}

          <Button 
            onClick={calculateStudentLoan} 
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
                <p className="text-sm font-medium text-muted-foreground">
                  {results.isIncomeDriven ? 'Estimated monthly payment' : 'Monthly payment'}
                </p>
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

              {results.isIncomeDriven && (
                <Alert className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Actual income-driven payments vary based on your income, family size, and loan type. Contact your loan servicer for exact calculations.
                  </AlertDescription>
                </Alert>
              )}
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

export default StudentLoanCalculator;
