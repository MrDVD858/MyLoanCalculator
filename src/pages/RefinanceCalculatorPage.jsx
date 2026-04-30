
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import RefinanceCalculator from '@/components/RefinanceCalculator.jsx';

const RefinanceCalculatorPage = () => {
  const howItWorks = (
    <div className="space-y-4">
      <p>
        The refinance calculator compares the costs of your current loan with a new proposed loan to determine if refinancing is a financially sound decision. It takes into account your remaining balance, the new interest rate, the new term length, and any closing costs associated with securing the new loan.
      </p>
      <p>
        <strong>Break-Even Point:</strong> A crucial part of the refinance decision is understanding how long it will take to recoup your closing costs. The calculator divides your total closing costs by your monthly savings. If you plan to sell the asset or move before reaching this break-even point in months, refinancing may actually cost you money rather than saving it.
      </p>
      <p>
        <strong>Total Interest Saved:</strong> By securing a lower interest rate or shortening your loan term, you can often save tens of thousands of dollars in interest over the lifetime of the loan. The calculator computes the total interest you would pay on your current path versus the new path, showing you the long-term net benefit.
      </p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Refinance Calculator | Compare Loan Options & Savings</title>
        <meta name="description" content="Compare your current loan to a refinance option and see potential savings, new monthly payments, and calculate your break-even point." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/refinance-calculator" />
      </Helmet>
      
      <CalculatorLayout
        title="Refinance Calculator"
        description="Compare your current loan to a refinance option and see potential savings."
        howItWorks={howItWorks}
      >
        <RefinanceCalculator />
      </CalculatorLayout>
    </>
  );
};

export default RefinanceCalculatorPage;
