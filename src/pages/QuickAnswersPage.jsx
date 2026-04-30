
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const QuickAnswersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Quick Percentage Answers – Common Calculations | MyPCT</title>
        <meta name="description" content="Browse instant answers to the most common percentage questions — tips, discounts, test scores and more." />
        <link rel="canonical" href="https://mypctcalculator.com/quick-answers" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Quick Percentage Answers</h1>
        <p className="text-muted-foreground">Common percentage calculations and answers.</p>
      </main>
      <Footer />
    </div>
  );
};

export default QuickAnswersPage;
