
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsPmiPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://yoursite.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is PMI (Private Mortgage Insurance)? | Loan Calculator</title>
        <meta name="description" content="Understand PMI, when it is required, how much it costs, and how to remove it from your mortgage." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is PMI (Private Mortgage Insurance)?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Private Mortgage Insurance (PMI) is a type of supplemental insurance policy that you might be required to pay for if you take out a conventional mortgage with a down payment of less than 20%. The primary purpose of PMI is to protect the lender—not you—in case you default on your loan payments.
            </p>
            <p className="mb-4">
              PMI is typically added to your monthly mortgage payment as a recurring premium. On average, the cost of PMI ranges from 0.5% to 1.5% of the original loan amount per year. The exact cost depends on several factors, including your credit score and the size of your down payment.
            </p>
            <p>
              The good news is that PMI is not permanent. Once you have built up enough equity in your home—usually when your loan-to-value (LTV) ratio reaches 80% (meaning you have 20% equity)—you can request your lender to remove the PMI, which instantly reduces your monthly housing costs.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>When It's Required:</strong> Lenders almost universally require PMI when your down payment on a conventional loan is less than 20% of the home's purchase price.</li>
              <li><strong>Cost Range:</strong> Expect to pay an annual premium of 0.5% to 1.5% of your loan amount, divided into your monthly mortgage payments.</li>
              <li><strong>Who It Protects:</strong> PMI safeguards the lender's financial interests against borrower default, though the borrower pays the premiums.</li>
              <li><strong>How to Remove It:</strong> You can request PMI cancellation when your equity reaches 20%. It is usually automatically terminated when equity reaches 22%.</li>
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

export default WhatIsPmiPage;
