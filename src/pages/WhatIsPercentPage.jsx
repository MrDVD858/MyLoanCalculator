
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsPercentPage = () => {
  const { x, y } = useParams();
  const location = useLocation();
  const numX = parseFloat(x);
  const numY = parseFloat(y);
  
  const isValid = !isNaN(numX) && !isNaN(numY);
  const answer = isValid ? (numX / 100) * numY : 0;
  const formattedAnswer = Number.isInteger(answer) ? answer : answer.toFixed(2);
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`What is ${x}% of ${y}? – Answer & Calculator | MyPCT`}</title>
        <meta name="description" content={`${x}% of ${y} is ${formattedAnswer}. Use our free percentage calculator to instantly solve any percent problem.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What is {x}% of {y}?
          </h1>
          {isValid ? (
            <div className="bg-muted p-8 rounded-2xl mb-8">
              <p className="text-2xl text-muted-foreground mb-2">{x}% of {y} is</p>
              <p className="text-6xl font-extrabold text-primary">{formattedAnswer}</p>
            </div>
          ) : (
            <p className="text-destructive">Invalid numbers provided in the URL.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsPercentPage;
