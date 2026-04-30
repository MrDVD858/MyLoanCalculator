
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | MyPCT Calculator</title>
        <meta name="description" content="Read the MyPCT Calculator privacy policy to understand how we handle your data." />
        <link rel="canonical" href="https://mypctcalculator.com/privacy" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This is a placeholder privacy policy for MyPCT Calculator. We respect your privacy and do not collect personal data without your consent.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
