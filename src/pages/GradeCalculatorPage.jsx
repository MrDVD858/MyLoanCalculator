
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const GradeCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Grade Calculator | MyPCT</title>
        <meta name="description" content="Calculate your grades and GPA with our free grade calculator." />
        <link rel="canonical" href="https://mypctcalculator.com/grade-calculator" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Grade Calculator</h1>
        <p className="text-muted-foreground">Grade calculator content goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default GradeCalculatorPage;
