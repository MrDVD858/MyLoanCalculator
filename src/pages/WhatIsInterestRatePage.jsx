
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsInterestRatePage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is an Interest Rate? How Rates Work</title>
        <meta name="description" content="Understand interest rates, the difference between fixed and variable rates, and how rates affect your total loan cost." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is an Interest Rate?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              An interest rate is the amount a lender charges a borrower for the use of assets, expressed as a percentage of the principal (the original amount borrowed). It is essentially the cost of borrowing money, typically noted on an annual basis known as the annual percentage rate (APR).
            </p>
            <p className="mb-4">
              Interest rates can be either fixed or variable. A fixed interest rate remains the same for the entire life of the loan, providing predictable, stable monthly payments. A variable (or adjustable) rate fluctuates over time based on an underlying benchmark interest rate or index, meaning your payments can go up or down.
            </p>
            <p>
              The interest rate you are offered depends on several factors, including macroeconomic conditions set by central banks, the type of loan, and your personal credit score. Generally, a lower interest rate means a lower total cost for the loan over its lifetime.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>Fixed vs. Variable:</strong> Fixed rates offer stability and predictability, while variable rates might start lower but carry the risk of increasing over time.</li>
              <li><strong>How They Are Determined:</strong> Rates are influenced by the Federal Reserve, market conditions, inflation, and the borrower's individual creditworthiness.</li>
              <li><strong>Impact on Total Cost:</strong> Even a fraction of a percent difference in an interest rate can save or cost you thousands of dollars over the life of a large loan like a mortgage.</li>
              <li><strong>Typical Ranges:</strong> Rates vary significantly by product. Credit cards often have rates between 15-25%, while secured loans like mortgages typically have much lower rates.</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              to="/personal-loan-calculator" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Compare Loan Rates
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsInterestRatePage;
