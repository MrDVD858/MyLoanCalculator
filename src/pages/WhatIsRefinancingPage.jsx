
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsRefinancingPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://yoursite.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is Refinancing? | Loan Calculator</title>
        <meta name="description" content="Understand refinancing, when it makes sense, potential savings, and how to calculate your break-even point." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is Refinancing?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Refinancing is the process of replacing an existing loan with a new loan that pays off the debt of the first one. Borrowers generally choose to refinance to secure a lower interest rate, change the loan term, or tap into the equity they have built up in their asset.
            </p>
            <p className="mb-4">
              When interest rates drop, refinancing can significantly lower your monthly payments and reduce the total amount of interest paid over the life of the loan. Alternatively, some borrowers refinance from a 30-year to a 15-year mortgage to pay off the debt faster, or execute a "cash-out" refinance to consolidate debt or fund home improvements.
            </p>
            <p>
              However, refinancing isn't free. Just like an original mortgage, a refinanced loan comes with closing costs and fees. Therefore, it is crucial to calculate your break-even point—the amount of time it will take for your monthly savings to surpass the upfront costs of refinancing.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>Common Reasons:</strong> People typically refinance to lower their interest rate, shorten the term of their loan, or access cash equity.</li>
              <li><strong>Potential Savings:</strong> Lowering your interest rate by even 0.5% to 1% can save thousands of dollars over the lifetime of a large loan.</li>
              <li><strong>Closing Costs:</strong> Expect to pay 2% to 5% of the loan principal in origination fees, appraisal fees, and other closing costs.</li>
              <li><strong>Break-Even Point:</strong> Divide your total closing costs by your monthly savings to find how many months it takes for the refinance to pay off.</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              to="/mortgage-calculator" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Mortgage Calculator
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsRefinancingPage;
