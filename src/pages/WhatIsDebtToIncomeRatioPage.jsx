
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsDebtToIncomeRatioPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://yoursite.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is Debt-to-Income Ratio (DTI)? | Loan Calculator</title>
        <meta name="description" content="Learn how debt-to-income ratio is calculated, why lenders care about it, and how it affects loan approval." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight text-balance">
            What Is Debt-to-Income Ratio (DTI)?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Your debt-to-income ratio (DTI) is a personal finance measure that compares your total monthly debt payments to your gross monthly income. Lenders use this metric extensively to determine how well you manage your existing debt and whether you have enough financial breathing room to take on additional obligations.
            </p>
            <p className="mb-4">
              To calculate DTI, you add up all your monthly debt obligations—such as rent or mortgage payments, student loans, auto loans, and minimum credit card payments—and divide that number by your gross monthly income (your income before taxes). The result is expressed as a percentage.
            </p>
            <p>
              An ideal DTI ratio is generally under 36%. Lenders view borrowers with lower DTIs as less risky. Conversely, if your DTI rises above 43%, it typically becomes much more difficult to get approved for a mortgage or a new loan, as it indicates your budget may be stretched too thin.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>How It's Calculated:</strong> Total monthly debt payments divided by gross (pre-tax) monthly income.</li>
              <li><strong>Ideal Ranges:</strong> A DTI of 36% or lower is widely considered ideal by lenders and signifies a healthy balance of debt and income.</li>
              <li><strong>Lender Thresholds:</strong> For most conventional mortgages, 43% is the absolute maximum DTI ratio allowed, though some exceptions apply.</li>
              <li><strong>Impact on Approvals:</strong> A lower DTI heavily improves your odds of loan approval and can qualify you for lower interest rates.</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              to="/personal-loan-calculator" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Personal Loan Calculator
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsDebtToIncomeRatioPage;
