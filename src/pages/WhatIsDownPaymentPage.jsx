
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsDownPaymentPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://yoursite.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is a Down Payment? | Loan Calculator</title>
        <meta name="description" content="Learn about down payments, how they affect your loan, and why they matter for mortgages and auto loans." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is a Down Payment?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              A down payment is the upfront cash you pay when making a large purchase, such as buying a home or a car. It represents your initial equity or ownership stake in the asset. The remainder of the purchase price is what you borrow and pay back over time through a loan.
            </p>
            <p className="mb-4">
              Making a larger down payment reduces the total amount you need to borrow. Consequently, this lowers your monthly payments and decreases the total interest you will pay over the life of the loan. A substantial down payment also demonstrates financial stability to lenders, which can help you secure a lower interest rate.
            </p>
            <p>
              In the context of a mortgage, putting down 20% or more of the home's purchase price carries a significant advantage: it usually allows you to avoid paying Private Mortgage Insurance (PMI). This can save you hundreds of dollars each month on top of the savings from borrowing less overall.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>Percentage of Purchase Price:</strong> Down payments are typically expressed as a percentage of the total purchase price (e.g., 20% down on a $300,000 home equals $60,000).</li>
              <li><strong>Impact on Loan Amount:</strong> The down payment is directly subtracted from the purchase price to determine your total loan amount.</li>
              <li><strong>Effect on Monthly Payments:</strong> Because you are borrowing less, a larger down payment results in significantly lower monthly principal and interest payments.</li>
              <li><strong>Avoiding PMI:</strong> On conventional mortgages, reaching the 20% down payment threshold allows you to avoid costly Private Mortgage Insurance (PMI).</li>
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

export default WhatIsDownPaymentPage;
