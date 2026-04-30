
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us | MyPCT Calculator</title>
        <meta name="description" content="Get in touch with the MyPCT Calculator team. We'd love to hear your feedback or answer your questions." />
        <link rel="canonical" href="https://mypctcalculator.com/contact" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-muted-foreground mb-8">We'd love to hear from you. Please reach out with any questions or feedback.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
