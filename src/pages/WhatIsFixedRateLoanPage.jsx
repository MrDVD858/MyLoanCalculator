
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsFixedRateLoanPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is a Fixed-Rate Loan? | Loan Calculator</title>
        <meta name="description" content="Learn about fixed-rate loans, how they work, and when they're the best choice for your borrowing needs." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is a Fixed-Rate Loan?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              A fixed-rate loan is a type of loan where the interest rate stays exactly the same for the entire duration of the loan term. Unlike variable-rate loans, which can fluctuate based on market conditions, a fixed-rate loan provides a stable and consistent interest charge from your very first payment to your last.
            </p>
            <p className="mb-4">
              Because the interest rate doesn't change, your monthly payments are highly predictable. This predictability makes it much easier to budget your finances long-term, as you know exactly how much you need to allocate toward your debt each month without worrying about sudden spikes in your payment amount.
            </p>
            <p>
              Fixed-rate loans are generally considered the best choice when market interest rates are low and you want to lock in that favorable rate. They are also ideal for borrowers who value payment stability over the potential (but risky) savings that might come from a variable-rate loan if rates were to drop.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>Consistent Rates:</strong> Your interest rate remains constant throughout the entire loan term, providing certainty in your borrowing costs.</li>
              <li><strong>Predictable Budgeting:</strong> Monthly payments stay the same from the first payment to the last, making budgeting easier and more predictable.</li>
              <li><strong>Rate Protection:</strong> You are protected from interest rate increases, which is valuable when rates are rising in the market.</li>
              <li><strong>When to Choose:</strong> Fixed-rate loans are ideal when current rates are low or when you prioritize payment stability over potential savings.</li>
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

export default WhatIsFixedRateLoanPage;
