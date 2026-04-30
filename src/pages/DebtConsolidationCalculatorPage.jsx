
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import DebtConsolidationCalculator from '@/components/DebtConsolidationCalculator.jsx';

const DebtConsolidationCalculatorPage = () => {
  const howItWorks = (
    <div className="space-y-4">
      <p>
        The debt consolidation calculator helps you evaluate whether taking out a single new loan to pay off multiple existing debts is a smart financial move. You start by entering the balances, interest rates, and current monthly payments for each of your outstanding debts (such as credit cards or personal loans).
      </p>
      <p>
        <strong>Simplifying Payments:</strong> Consolidation combines multiple high-interest debts into one predictable monthly payment. This drastically reduces the likelihood of missing a due date and simplifies your monthly budgeting process. 
      </p>
      <p>
        <strong>Analyzing The Savings:</strong> The calculator compares your current total monthly outlay and expected lifetime interest against the new consolidation loan. Even if a consolidation loan offers a lower monthly payment, extending the loan term for too long can sometimes result in paying more total interest over time. This tool calculates both the short-term monthly cash flow relief and the long-term total interest cost to give you a complete picture.
      </p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Debt Consolidation Calculator | Combine Loans & Save</title>
        <meta name="description" content="Combine multiple debts into one loan and see if you can save money and simplify payments. Compare interest rates and monthly costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/debt-consolidation-calculator" />
      </Helmet>
      
      <CalculatorLayout
        title="Debt Consolidation Calculator"
        description="Combine multiple debts into one loan and see if you can save money and simplify payments."
        howItWorks={howItWorks}
      >
        <DebtConsolidationCalculator />
      </CalculatorLayout>
    </>
  );
};

export default DebtConsolidationCalculatorPage;
