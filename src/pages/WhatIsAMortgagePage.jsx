
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsAMortgagePage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is a Mortgage? Home Loan Explained</title>
        <meta name="description" content="Learn what a mortgage is, how mortgages work, collateral requirements, and common mortgage terms and rates." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is a Mortgage?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              A mortgage is a type of loan specifically used to purchase or maintain real estate. In a mortgage agreement, the borrower agrees to pay the lender over time, typically in a series of regular payments that are divided into principal and interest.
            </p>
            <p className="mb-4">
              What makes a mortgage unique is that the property itself serves as collateral for the loan. This means that if the borrower stops making payments and defaults on the loan, the lender has the legal right to take possession of the property through a process known as foreclosure.
            </p>
            <p>
              Mortgages are usually long-term commitments. The most common terms in the United States are 15-year and 30-year loans. The length of the term, along with the interest rate and the size of the down payment, determines the monthly payment amount and the total cost of the home.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>Collateral:</strong> The home you purchase acts as security for the loan. If you fail to repay, the lender can seize the property.</li>
              <li><strong>Common Terms:</strong> 30-year mortgages offer lower monthly payments but cost more in total interest, while 15-year mortgages have higher payments but build equity faster.</li>
              <li><strong>Fixed vs. Variable:</strong> Fixed-rate mortgages keep the same interest rate for the entire term. Adjustable-rate mortgages (ARMs) have rates that can change over time.</li>
              <li><strong>Down Payments:</strong> While 20% is traditionally recommended to avoid private mortgage insurance (PMI), many programs allow down payments as low as 3% to 5%.</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              to="/mortgage-calculator" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Calculate Mortgage Payment
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsAMortgagePage;
