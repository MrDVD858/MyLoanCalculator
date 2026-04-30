
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import BiWeeklyPaymentCalculator from '@/components/BiWeeklyPaymentCalculator.jsx';

const BiWeeklyPaymentCalculatorPage = () => {
  const howItWorks = (
    <div className="space-y-4">
      <p>
        Switching from a standard monthly payment to a bi-weekly payment schedule is one of the easiest ways to pay off your mortgage or auto loan faster and save thousands of dollars in interest.
      </p>
      <p>
        <strong>The Math Behind It:</strong> There are 12 months in a year, but 52 weeks (or 26 bi-weekly periods). If you pay half your monthly payment every two weeks, you end up making 26 half-payments. This equals exactly 13 full monthly payments per year instead of 12.
      </p>
      <p>
        <strong>The Benefit:</strong> That "extra" 13th payment is applied entirely to your principal balance. By reducing your principal faster, you accrue less interest over the life of the loan, dropping years off your repayment schedule.
      </p>
      <p className="text-muted-foreground italic mt-4">
        *Note: Before starting a bi-weekly payment plan, check with your lender to ensure they accept partial payments and apply extra funds directly to the principal rather than holding them in suspense.
      </p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Bi-Weekly Payment Calculator - Save on Interest</title>
        <meta name="description" content="See how switching to bi-weekly payments can help you pay off your loan faster and save on interest." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/bi-weekly-payment-calculator" />
      </Helmet>
      
      <CalculatorLayout
        title="Bi-Weekly Payment Calculator"
        description="See how switching to bi-weekly payments can help you pay off your loan faster and save on interest."
        howItWorks={howItWorks}
      >
        <BiWeeklyPaymentCalculator />
      </CalculatorLayout>
    </>
  );
};

export default BiWeeklyPaymentCalculatorPage;
