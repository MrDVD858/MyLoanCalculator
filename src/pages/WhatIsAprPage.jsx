
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WhatIsAprPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://mypctcalculator.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>What Is APR? Annual Percentage Rate Explained</title>
        <meta name="description" content="Learn what APR means, how it differs from interest rates, and how it affects your loan costs." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            What Is APR (Annual Percentage Rate)?
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              The Annual Percentage Rate (APR) is the broader measure of the cost of borrowing money. Unlike a simple interest rate, the APR reflects not only the interest expense on the loan but also any fees or additional costs involved in procuring the loan. It is expressed as a yearly rate.
            </p>
            <p className="mb-4">
              Because APR includes these extra fees—such as origination fees, closing costs, and discount points—it provides a more comprehensive picture of what you will actually pay. When comparing loan offers, looking at the APR rather than just the interest rate gives you a true apples-to-apples comparison.
            </p>
            <p>
              Generally, a higher APR means a more expensive loan. Lenders are required by law to disclose the APR to borrowers before any agreement is signed, ensuring transparency in the lending process.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Facts</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li><strong>APR vs. Interest Rate:</strong> The interest rate is the cost of borrowing the principal, while the APR includes the interest rate plus other lender fees.</li>
              <li><strong>What's Included:</strong> APR calculations typically include origination fees, closing costs, mortgage insurance, and other mandatory lender charges.</li>
              <li><strong>Total Loan Cost:</strong> Because it accounts for fees, the APR is almost always higher than the nominal interest rate and directly impacts your total out-of-pocket cost.</li>
              <li><strong>Typical Ranges:</strong> APRs vary widely by loan type; mortgages might range from 5-8%, while personal loans can range from 6-36% depending on creditworthiness.</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              to="/personal-loan-calculator" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Compare Personal Loans
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsAprPage;
