
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const DiscountCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Discount Calculator | MyPCT</title>
        <meta name="description" content="Calculate discounts and final prices with our free discount calculator." />
        <link rel="canonical" href="https://mypctcalculator.com/discount-calculator" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Discount Calculator</h1>
        <p className="text-muted-foreground">Discount calculator content goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default DiscountCalculatorPage;
