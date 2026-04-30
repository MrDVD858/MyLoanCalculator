
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import LoanComparisonCalculator from '@/components/LoanComparisonCalculator.jsx';

const LoanComparisonCalculatorPage = () => {
  const howItWorks = (
    <div className="space-y-4">
      <p>
        When shopping for an auto loan, personal loan, or mortgage, lenders will present you with different terms, interest rates, and loan amounts. It can be difficult to tell at a glance which offer is actually the better deal.
      </p>
      <p>
        <strong>The Trade-off:</strong> Often, a loan with a longer term will have a more attractive, lower monthly payment. However, stretching the loan out over more years means you accrue interest for a longer period of time, which usually makes the total cost of the loan much higher.
      </p>
      <p>
        <strong>How to use this tool:</strong> Enter the details of two competing loan offers side-by-side. The calculator will break down the monthly payment, total interest, and total overall cost for each option, highlighting exactly which loan saves you the most money in the long run.
      </p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Loan Comparison Calculator - Compare Loan Options</title>
        <meta name="description" content="Compare two loan options side by side to see which one is the better financial choice. Analyze monthly payments and total interest costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/loan-comparison-calculator" />
      </Helmet>
      
      <CalculatorLayout
        title="Loan Comparison Calculator"
        description="Compare two loan options side by side to see which one is the better financial choice."
        howItWorks={howItWorks}
      >
        <LoanComparisonCalculator />
      </CalculatorLayout>
    </>
  );
};

export default LoanComparisonCalculatorPage;
