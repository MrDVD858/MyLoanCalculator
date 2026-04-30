
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | MyPCT Calculator</title>
        <meta name="description" content="Read the terms of service for using MyPCT Calculator." />
        <link rel="canonical" href="https://mypctcalculator.com/terms" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder terms of service for MyPCT Calculator. By using our website, you agree to these terms.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
