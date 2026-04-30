
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About MyLoanCalcs — Free Loan Calculators</title>
        <meta name="description" content="MyLoanCalcs provides free, accurate loan calculators for mortgages, auto loans, personal loans, and student loans." />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About MyLoanCalcs</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p className="text-xl leading-relaxed text-foreground mb-6">
            MyLoanCalcs is dedicated to providing fast, free, and accurate loan calculations to help you make informed financial decisions.
          </p>
          <p className="mb-6">
            Whether you are buying a new home, financing a vehicle, consolidating debt, or managing student loans, understanding your monthly payments and total interest costs is crucial. Our suite of calculators uses standard amortization formulas to give you precise estimates instantly.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe that financial transparency should be accessible to everyone. That's why we built MyLoanCalcs — to strip away the complexity of loan math and provide clear, actionable insights without requiring sign-ups or personal information.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
