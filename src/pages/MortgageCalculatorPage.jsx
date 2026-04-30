
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import MortgageCalculator from '@/components/MortgageCalculator.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MortgageCalculatorPage = () => {
  const faqs = [
    {
      question: 'What is a mortgage calculator?',
      answer: 'A mortgage calculator is a tool that helps you estimate your monthly home loan payments. It takes into account the home price, down payment, interest rate, and loan term to provide a detailed breakdown of your costs.'
    },
    {
      question: 'How do I calculate my monthly mortgage payment?',
      answer: 'To calculate your monthly mortgage payment, enter the home price, your planned down payment, the expected interest rate, and the loan term (usually 15 or 30 years) into the calculator. The tool will automatically apply the amortization formula to determine your monthly principal and interest payment.'
    },
    {
      question: 'What is included in a monthly mortgage payment?',
      answer: 'A standard monthly mortgage payment typically includes principal (the amount borrowed) and interest (the cost of borrowing). Many homeowners also pay property taxes, homeowners insurance, and sometimes Private Mortgage Insurance (PMI) or Homeowners Association (HOA) fees as part of their total monthly housing cost.'
    },
    {
      question: 'How much mortgage can I afford?',
      answer: 'A common rule of thumb is the 28% rule, which suggests your maximum monthly mortgage payment (including taxes and insurance) should not exceed 28% of your gross monthly income. Additionally, your total debt payments should not exceed 36% of your gross income.'
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
        The mortgage calculator uses the standard amortization formula to calculate your monthly payment. The formula accounts for the loan principal (home price minus down payment), the annual interest rate, and the loan term in years.
      </p>
      <div className="formula-box">
        <p className="mb-2">The monthly payment formula is:</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))]">M = P × [r(1+r)^n] / [(1+r)^n - 1]</p>
      </div>
      <p>Where:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>M</strong> = Monthly payment</li>
        <li><strong>P</strong> = Principal (loan amount after down payment)</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Total number of payments (years × 12)</li>
      </ul>
      <p>
        This calculation gives you the principal and interest portion of your payment. Keep in mind that your actual monthly housing cost may include property taxes, homeowners insurance, HOA fees, and PMI if your down payment is less than 20%.
      </p>
    </div>
  );

  const example = (
    <div className="space-y-4">
      <p>Let's calculate the monthly payment for a typical home purchase:</p>
      <div className="formula-box space-y-2">
        <p><strong>Home price:</strong> $347,500</p>
        <p><strong>Down payment:</strong> $69,500 (20%)</p>
        <p><strong>Loan amount:</strong> $278,000</p>
        <p><strong>Interest rate:</strong> 6.87% annual</p>
        <p><strong>Loan term:</strong> 30 years</p>
      </div>
      <p><strong>Step 1:</strong> Calculate the monthly interest rate</p>
      <p className="ml-4 text-muted-foreground">6.87% ÷ 12 ÷ 100 = 0.005725</p>
      <p><strong>Step 2:</strong> Calculate the number of payments</p>
      <p className="ml-4 text-muted-foreground">30 years × 12 months = 360 payments</p>
      <p><strong>Step 3:</strong> Apply the formula</p>
      <div className="ml-4 space-y-1 text-muted-foreground">
        <p>M = 278,000 × [0.005725(1.005725)^360] / [(1.005725)^360 - 1]</p>
        <p>M = 278,000 × 0.006447 / 1.126</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))] mt-2">M = $1,591.23 per month</p>
      </div>
      <div className="mt-4 pt-4 border-t">
        <p><strong>Total interest paid:</strong> $294,842.80 over 30 years</p>
        <p><strong>Total cost:</strong> $572,842.80 (principal + interest)</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Mortgage Calculator — Estimate Your Monthly Payment | MyLoanCalcs</title>
        <meta name="description" content="Use our free mortgage calculator to estimate your monthly payment and amortization schedule. No sign-up needed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/mortgage-calculator" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <CalculatorLayout
        title="Mortgage calculator"
        description="Calculate your monthly mortgage payment, total interest, and overall loan cost. Adjust home price, down payment, interest rate, and loan term to see how they affect your monthly payment."
        howItWorks={howItWorks}
        example={example}
      >
        <div className="space-y-16">
          <MortgageCalculator />

          <section className="max-w-4xl mx-auto w-full bg-[hsl(var(--purple-light))] p-8 md:p-12 rounded-3xl mt-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold tracking-tight mb-4 text-[hsl(var(--purple-primary))]">Frequently asked questions</h2>
              <p className="text-muted-foreground text-lg">Common questions about mortgages and home financing.</p>
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

export default MortgageCalculatorPage;
