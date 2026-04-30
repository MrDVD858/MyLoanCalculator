
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import EarlyPayoffCalculator from '@/components/EarlyPayoffCalculator.jsx';

const EarlyPayoffCalculatorPage = () => {
  const howItWorks = (
    <div className="space-y-4">
      <p>
        The early payoff calculator illustrates the powerful effect of applying additional principal payments toward your debt. Even small, consistent extra payments can drastically reduce the amount of time it takes to become debt-free.
      </p>
      <p>
        <strong>How Interest is Calculated:</strong> Lenders typically calculate interest on a monthly basis against your remaining principal balance. By paying extra, you directly shrink the principal balance faster than the standard amortization schedule. Because the principal is smaller in the next month, less interest accrues, meaning more of your standard payment goes toward principal—creating a compounding effect of debt reduction.
      </p>
      <p>
        <strong>Types of Extra Payments:</strong> You can achieve early payoff by adding a fixed amount to your monthly payment, making one large lump-sum payment annually (like using a tax refund), or switching to bi-weekly payments. Always ensure your lender applies the extra funds directly to the "principal balance" rather than prepaying future standard payments.
      </p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Early Payoff Calculator | Calculate Extra Payment Savings</title>
        <meta name="description" content="See how extra payments can help you pay off your loan faster and save on interest. Calculate your new debt-free date and total savings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/early-payoff-calculator" />
      </Helmet>
      
      <CalculatorLayout
        title="Early Payoff Calculator"
        description="See how extra payments can help you pay off your loan faster and save on interest."
        howItWorks={howItWorks}
      >
        <EarlyPayoffCalculator />
      </CalculatorLayout>
    </>
  );
};

export default EarlyPayoffCalculatorPage;
