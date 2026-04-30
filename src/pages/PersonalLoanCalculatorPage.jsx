
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import PersonalLoanCalculator from '@/components/PersonalLoanCalculator.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PersonalLoanCalculatorPage = () => {
  const faqs = [
    {
      question: 'What is a personal loan calculator?',
      answer: 'A personal loan calculator is a tool that helps you estimate your monthly payments and total interest costs based on the loan amount, interest rate, and term length.'
    },
    {
      question: 'How are personal loan payments calculated?',
      answer: 'Personal loan payments are calculated using the standard amortization formula, which divides the principal loan amount and total interest into equal monthly payments over your chosen term.'
    },
    {
      question: 'What credit score do I need for a personal loan?',
      answer: 'While minimum requirements vary by lender, you typically need a credit score of at least 580 to qualify for a personal loan. However, to get the best interest rates, you generally need a good to excellent credit score of 700 or higher.'
    },
    {
      question: 'What is a typical personal loan interest rate?',
      answer: 'Typical personal loan interest rates range from 6% to 36% APR. The rate you receive depends heavily on your credit score, income, debt-to-income ratio, and the loan term.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const howItWorks = (
    <div className="space-y-4">
      <p>
        The personal loan calculator uses the same amortization formula as mortgage calculators to determine your monthly payment. Personal loans are typically unsecured, meaning they don't require collateral, and have shorter terms than mortgages.
      </p>
      <div className="formula-box">
        <p className="mb-2">The monthly payment formula is:</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))]">M = P × [r(1+r)^n] / [(1+r)^n - 1]</p>
      </div>
      <p>Where:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>M</strong> = Monthly payment</li>
        <li><strong>P</strong> = Principal (total loan amount)</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Total number of payments</li>
      </ul>
      <p>
        You can choose to enter your loan term in either months or years, making it easy to compare different loan offers. Personal loan terms typically range from 12 to 84 months.
      </p>
    </div>
  );

  const example = (
    <div className="space-y-4">
      <p>Let's calculate the monthly payment for a personal loan:</p>
      <div className="formula-box space-y-2">
        <p><strong>Loan amount:</strong> $15,000</p>
        <p><strong>Interest rate:</strong> 9.47% annual</p>
        <p><strong>Loan term:</strong> 36 months (3 years)</p>
      </div>
      <p><strong>Step 1:</strong> Calculate the monthly interest rate</p>
      <p className="ml-4 text-muted-foreground">9.47% ÷ 12 ÷ 100 = 0.007892</p>
      <p><strong>Step 2:</strong> Number of payments is already in months</p>
      <p className="ml-4 text-muted-foreground">36 payments</p>
      <p><strong>Step 3:</strong> Apply the formula</p>
      <div className="ml-4 space-y-1 text-muted-foreground">
        <p>M = 15,000 × [0.007892(1.007892)^36] / [(1.007892)^36 - 1]</p>
        <p>M = 15,000 × 0.010195 / 1.291</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))] mt-2">M = $478.42 per month</p>
      </div>
      <div className="mt-4 pt-4 border-t">
        <p><strong>Total interest paid:</strong> $2,223.12 over 3 years</p>
        <p><strong>Total cost:</strong> $17,223.12</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Personal Loan Calculator — Monthly Payment & Interest | MyLoanCalcs</title>
        <meta name="description" content="Estimate your personal loan monthly payment and total interest. Enter your loan amount, rate, and term." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/personal-loan-calculator" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <CalculatorLayout
        title="Personal loan calculator"
        description="Calculate your monthly personal loan payment and total interest cost. Choose your loan term in months or years to compare different loan options and find the best fit for your budget."
        howItWorks={howItWorks}
        example={example}
      >
        <div className="space-y-16">
          <PersonalLoanCalculator />
          
          <section className="max-w-4xl mx-auto w-full bg-[hsl(var(--purple-light))] p-8 md:p-12 rounded-3xl mt-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold tracking-tight mb-4 text-[hsl(var(--purple-primary))]">Frequently asked questions</h2>
              <p className="text-muted-foreground text-lg">Common questions about personal loans and financing.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-card rounded-2xl p-4 shadow-sm border-none">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-none border-border/50">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-[hsl(var(--purple-primary))] transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </CalculatorLayout>
    </>
  );
};

export default PersonalLoanCalculatorPage;
