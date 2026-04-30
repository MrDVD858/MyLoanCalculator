
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsCompoundInterestPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is Compound Interest? | Loan Calculator</title>
        <meta name="description" content="Understand compound interest, how it affects your savings and debt, and why compounding frequency matters." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is Compound Interest?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Compound interest is interest calculated on the initial principal of a deposit or loan, plus all of the accumulated interest from previous periods. In simpler terms, it's "interest on interest," causing wealth (or debt) to snowball over time.
            </p>
            <p className="mb-4">
              When it comes to your savings or investments, compound interest works powerfully in your favor. As your money earns interest, that new larger balance earns even more interest in the next period. Over long time horizons, this compounding effect can generate significant wealth growth.
            </p>
            <p>
              However, with loans and credit cards, compound interest works against you. If you leave a balance unpaid, the interest charges are added to your principal, meaning you'll pay interest on your interest in subsequent billing cycles. The more frequently interest compounds (such as daily versus annually), the faster the balance grows.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>The Mechanics:</strong> Compound interest is calculated on both your original principal and any interest that has already been earned or charged.</li>
              <li><strong>The Benefit:</strong> In savings accounts and investments, compound interest works in your favor, helping your money grow exponentially over time.</li>
              <li><strong>The Cost:</strong> In loans and credit cards, compound interest works against you, increasing the total amount you owe beyond the original principal.</li>
              <li><strong>Frequency Matters:</strong> The frequency of compounding (daily, monthly, annually) significantly impacts the final amount, with more frequent compounding resulting in greater growth or cost.</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              to="/personal-loan-calculator" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Calculate Your Personal Loan
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsCompoundInterestPage;
