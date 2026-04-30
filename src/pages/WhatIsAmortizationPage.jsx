
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsAmortizationPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is Loan Amortization? How Payments Work</title>
        <meta name="description" content="Understand loan amortization, how payments are split between principal and interest, and how amortization schedules work." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is Loan Amortization?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Loan amortization is the process of spreading out a loan into a series of fixed payments over time. While your monthly payment amount remains the same, the way that payment is split between paying down the principal balance and paying interest changes as the loan matures.
            </p>
            <p className="mb-4">
              In the early years of an amortized loan, a large portion of your monthly payment goes toward paying interest, with only a small fraction reducing the principal. As the principal balance gradually decreases, the interest calculated on that balance also decreases.
            </p>
            <p>
              By the end of the loan term, the ratio flips: the vast majority of your payment goes toward the principal, and very little goes toward interest. This structured schedule ensures the loan is completely paid off by the end of its term.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>Amortization Schedule:</strong> A complete table of periodic loan payments, showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off.</li>
              <li><strong>Principal vs. Interest:</strong> Principal is the original amount borrowed; interest is the cost charged by the lender for borrowing that money.</li>
              <li><strong>Changing Split:</strong> Early payments are heavily weighted toward interest, while later payments primarily reduce the principal balance.</li>
              <li><strong>Total Interest Paid:</strong> Longer amortization periods (like a 30-year mortgage) result in lower monthly payments but significantly more total interest paid over the life of the loan.</li>
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

export default WhatIsAmortizationPage;
