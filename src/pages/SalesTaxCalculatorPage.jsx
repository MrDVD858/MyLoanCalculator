
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const SalesTaxCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sales Tax Calculator | MyPCT</title>
        <meta name="description" content="Calculate sales tax and total prices with our free sales tax calculator." />
        <link rel="canonical" href="https://mypctcalculator.com/sales-tax-calculator" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Sales Tax Calculator</h1>
        <p className="text-muted-foreground">Sales tax calculator content goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default SalesTaxCalculatorPage;
