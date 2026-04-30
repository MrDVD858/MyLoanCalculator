
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

const LoanComparisonCalculator = () => {
  const [loanA, setLoanA] = useState({ amount: '30000', rate: '7.5', term: '5' });
  const [loanB, setLoanB] = useState({ amount: '30000', rate: '6.0', term: '6' });
  const [results, setResults] = useState(null);

  const calculatePMT = (principal, annualRate, years) => {
    const p = parseFloat(principal);
    const r = parseFloat(annualRate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (r === 0) return p / n;
    return p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const calculateComparison = () => {
    // Validate
    if (!loanA.amount || !loanA.rate || !loanA.term || !loanB.amount || !loanB.rate || !loanB.term) return;

    const pmtA = calculatePMT(loanA.amount, loanA.rate, loanA.term);
    const totalA = pmtA * parseFloat(loanA.term) * 12;
    const interestA = totalA - parseFloat(loanA.amount);

    const pmtB = calculatePMT(loanB.amount, loanB.rate, loanB.term);
    const totalB = pmtB * parseFloat(loanB.term) * 12;
    const interestB = totalB - parseFloat(loanB.amount);

    let winner = 'tie';
    let savings = 0;
    if (totalA < totalB) {
      winner = 'A';
      savings = totalB - totalA;
    } else if (totalB < totalA) {
      winner = 'B';
      savings = totalA - totalB;
    }

    setResults({
      A: { pmt: pmtA, total: totalA, interest: interestA },
      B: { pmt: pmtB, total: totalB, interest: interestB },
      winner,
      savings
    });
  };

  useEffect(() => {
    calculateComparison();
  }, [loanA, loanB]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="space-y-8">
      {/* Inputs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-md border-t-4 border-t-blue-500">
          <CardHeader className="pb-4">
            <CardTitle>Loan Option A</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Loan amount ($)</Label>
              <Input
                type="number"
                value={loanA.amount}
                onChange={(e) => setLoanA({ ...loanA, amount: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Rate (%)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={loanA.rate}
                  onChange={(e) => setLoanA({ ...loanA, rate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Term (years)</Label>
                <Input
                  type="number"
                  value={loanA.term}
                  onChange={(e) => setLoanA({ ...loanA, term: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-t-4 border-t-[hsl(var(--purple-primary))]">
          <CardHeader className="pb-4">
            <CardTitle>Loan Option B</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Loan amount ($)</Label>
              <Input
                type="number"
                value={loanB.amount}
                onChange={(e) => setLoanB({ ...loanB, amount: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Rate (%)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={loanB.rate}
                  onChange={(e) => setLoanB({ ...loanB, rate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Term (years)</Label>
                <Input
                  type="number"
                  value={loanB.term}
                  onChange={(e) => setLoanB({ ...loanB, term: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Section */}
      {results && (
        <Card className="shadow-lg border-none bg-card">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl">Comparison Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b text-muted-foreground font-medium">Metric</th>
                    <th className="p-4 border-b font-semibold text-blue-600 dark:text-blue-400">Option A</th>
                    <th className="p-4 border-b font-semibold text-[hsl(var(--purple-primary))]">Option B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr>
                    <td className="p-4 font-medium">Monthly Payment</td>
                    <td className="p-4 text-lg" style={{fontVariantNumeric: 'tabular-nums'}}>{formatCurrency(results.A.pmt)}</td>
                    <td className="p-4 text-lg" style={{fontVariantNumeric: 'tabular-nums'}}>{formatCurrency(results.B.pmt)}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Total Interest Paid</td>
                    <td className="p-4 text-lg text-muted-foreground" style={{fontVariantNumeric: 'tabular-nums'}}>{formatCurrency(results.A.interest)}</td>
                    <td className="p-4 text-lg text-muted-foreground" style={{fontVariantNumeric: 'tabular-nums'}}>{formatCurrency(results.B.interest)}</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4 font-bold text-foreground">Total Cost of Loan</td>
                    <td className={`p-4 text-xl font-bold ${results.winner === 'A' ? 'text-green-600 dark:text-green-500' : ''}`} style={{fontVariantNumeric: 'tabular-nums'}}>
                      {formatCurrency(results.A.total)}
                    </td>
                    <td className={`p-4 text-xl font-bold ${results.winner === 'B' ? 'text-green-600 dark:text-green-500' : ''}`} style={{fontVariantNumeric: 'tabular-nums'}}>
                      {formatCurrency(results.B.total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-accent rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {results.winner !== 'tie' ? (
                  <>
                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-500" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">The Verdict</p>
                      <p className="text-xl font-bold">Option {results.winner} is cheaper</p>
                    </div>
                  </>
                ) : (
                  <div>
                    <p className="text-xl font-bold">Both loans cost exactly the same</p>
                  </div>
                )}
              </div>
              
              {results.winner !== 'tie' && (
                <div className="text-center md:text-right">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Savings</p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-500" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {formatCurrency(results.savings)}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LoanComparisonCalculator;
