
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PercentageChangeCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Percentage Change Calculator | MyPCT</title>
        <meta name="description" content="Calculate percentage increase or decrease with our free percentage change calculator." />
        <link rel="canonical" href="https://mypctcalculator.com/percentage-change-calculator" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Percentage Change Calculator</h1>
        <p className="text-muted-foreground">Percentage change calculator content goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default PercentageChangeCalculatorPage;
