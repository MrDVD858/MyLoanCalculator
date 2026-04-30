
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsLoanTermPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is a Loan Term? | Loan Calculator</title>
        <meta name="description" content="Learn about loan terms, how they affect your monthly payments and total interest, and how to choose the right term for you." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is a Loan Term?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              A loan term is the agreed-upon length of time you have to repay borrowed money. It dictates the schedule and size of your payments until the debt is fully satisfied. Terms can vary widely depending on the type of loan—from just a few months for short-term personal loans up to 30 years or more for a mortgage.
            </p>
            <p className="mb-4">
              The length of your loan term directly impacts both your monthly cash flow and your total borrowing costs. A longer loan term stretches out the repayment schedule, which lowers your monthly payments. However, because you are holding the debt longer, you will accumulate and pay significantly more in total interest.
            </p>
            <p>
              Conversely, a shorter loan term compresses the repayment schedule. This means your monthly payments will be higher, but you will pay far less in total interest and you will own your asset free and clear much sooner. Selecting the right term requires balancing your immediate budget constraints with your long-term financial goals.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>Definition:</strong> A loan term is the total length of time you have to repay the borrowed money, typically ranging from a few years to 30 years depending on the loan type.</li>
              <li><strong>Longer Terms:</strong> Choosing a longer loan term results in lower monthly payments but means you'll pay significantly more in total interest over the life of the loan.</li>
              <li><strong>Shorter Terms:</strong> A shorter loan term means higher monthly payments but you'll pay less total interest and own your asset free and clear sooner.</li>
              <li><strong>Making a Choice:</strong> The right loan term depends on your budget, financial goals, and how long you plan to keep the asset (home, car, etc.).</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              to="/mortgage-calculator" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Calculate Your Mortgage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsLoanTermPage;
