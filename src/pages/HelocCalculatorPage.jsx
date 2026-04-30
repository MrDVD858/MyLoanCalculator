
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import HelocCalculator from '@/components/HelocCalculator.jsx';

const HelocCalculatorPage = () => {
  const howItWorks = (
    <div className="space-y-4">
      <p>
        A Home Equity Line of Credit (HELOC) allows you to borrow against the equity you've built in your home. The calculator helps you determine your maximum available line of credit and estimates your monthly payments.
      </p>
      <p>
        <strong>Available Credit Line:</strong> Lenders typically allow you to borrow up to a certain percentage of your home's appraised value (often 80% to 85%), minus your outstanding mortgage balance.
      </p>
      <p>
        <strong>Draw Period:</strong> During this time (usually 5 to 10 years), you can withdraw funds as needed. Most HELOCs require only interest payments on the amount you've actually drawn, keeping payments low.
      </p>
      <p>
        <strong>Repayment Period:</strong> Once the draw period ends, the repayment period begins (usually 10 to 20 years). You can no longer withdraw funds, and your monthly payment will increase to include both principal and interest to pay off the balance by the end of the term.
      </p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>HELOC Calculator - Calculate Your Home Equity Line of Credit</title>
        <meta name="description" content="Calculate your home equity line of credit availability and payment amounts during draw and repayment periods." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/heloc-calculator" />
      </Helmet>
      
      <CalculatorLayout
        title="HELOC Calculator"
        description="Calculate your home equity line of credit availability and payment amounts during draw and repayment periods."
        howItWorks={howItWorks}
      >
        <HelocCalculator />
      </CalculatorLayout>
    </>
  );
};

export default HelocCalculatorPage;
