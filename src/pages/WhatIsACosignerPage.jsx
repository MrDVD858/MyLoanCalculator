
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsACosignerPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is a Loan Cosigner? | Loan Calculator</title>
        <meta name="description" content="Understand what a loan cosigner is, how they help borrowers, and the risks and responsibilities involved." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is a Loan Cosigner?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              A loan cosigner is an individual who legally agrees to take on the responsibility of repaying a debt if the primary borrower is unable to make the payments. Essentially, a cosigner serves as a safety net for the lender, backing up the loan application with their own financial credibility.
            </p>
            <p className="mb-4">
              Having a cosigner is highly beneficial for individuals with poor credit, thin credit histories, or low incomes who might otherwise be denied a loan. Lenders rely on the strong credit profile and income of the cosigner to approve the loan. Furthermore, a highly qualified cosigner can often help secure a much lower interest rate, potentially saving the borrower thousands of dollars over the life of the loan.
            </p>
            <p>
              While acting as a cosigner is a generous act to help a friend or family member, it comes with immense responsibility. The cosigner assumes full financial risk for the debt. The loan will appear on the cosigner's credit report, impacting their debt-to-income ratio and potentially affecting their ability to secure their own credit in the future.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>The Role:</strong> A cosigner is a person who agrees to take on legal responsibility for repaying the loan if the primary borrower fails to make payments.</li>
              <li><strong>Approval Odds:</strong> Having a cosigner with good credit can help borrowers with poor or limited credit history get approved for a loan they might not qualify for alone.</li>
              <li><strong>Financial Benefits:</strong> A cosigner's strong credit profile can help secure a lower interest rate, potentially saving thousands of dollars over the life of the loan.</li>
              <li><strong>Cosigner Risks:</strong> The cosigner assumes full financial risk and the debt appears on their credit report, potentially affecting their ability to borrow money themselves.</li>
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

export default WhatIsACosignerPage;
