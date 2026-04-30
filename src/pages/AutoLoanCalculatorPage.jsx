
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import AutoLoanCalculator from '@/components/AutoLoanCalculator.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AutoLoanCalculatorPage = () => {
  const faqs = [
    {
      question: 'What is an auto loan calculator?',
      answer: 'An auto loan calculator is a tool that helps you estimate your monthly car payments. It takes into account the vehicle price, your down payment or trade-in value, the interest rate, and the loan term to provide a detailed breakdown of your costs.'
    },
    {
      question: 'What is a good interest rate for a car loan?',
      answer: 'A good interest rate for a car loan depends heavily on your credit score and whether the car is new or used. Borrowers with excellent credit (720+) typically secure the lowest rates, often between 4% and 6% for new cars. Used car rates are generally slightly higher.'
    },
    {
      question: 'How long should my auto loan term be?',
      answer: 'Common auto loan terms range from 36 to 72 months. While a longer term (like 72 months) will lower your monthly payment, it significantly increases the total interest you pay over the life of the loan. A shorter term (like 48 or 60 months) is generally recommended to minimize interest costs and avoid owing more than the car is worth.'
    },
    {
      question: 'Can I lower my monthly car payment?',
      answer: 'Yes, you can lower your monthly car payment by making a larger down payment, trading in your current vehicle, extending the loan term length, or improving your credit score to qualify for a lower interest rate. Keep in mind that extending the term will increase your total interest paid.'
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
        The auto loan calculator uses the standard amortization formula to calculate your monthly car payment. The calculation is based on the vehicle price minus your down payment, the annual interest rate, and the loan term in years.
      </p>
      <div className="formula-box">
        <p className="mb-2">The monthly payment formula is:</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))]">M = P × [r(1+r)^n] / [(1+r)^n - 1]</p>
      </div>
      <p>Where:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>M</strong> = Monthly payment</li>
        <li><strong>P</strong> = Principal (vehicle price minus down payment)</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Total number of payments (years × 12)</li>
      </ul>
      <p>
        This calculation shows your principal and interest payment. Your actual monthly cost may also include sales tax, registration fees, and insurance, which are not included in this calculator.
      </p>
    </div>
  );

  const example = (
    <div className="space-y-4">
      <p>Let's calculate the monthly payment for a vehicle purchase:</p>
      <div className="formula-box space-y-2">
        <p><strong>Vehicle price:</strong> $32,500</p>
        <p><strong>Down payment:</strong> $5,000</p>
        <p><strong>Loan amount:</strong> $27,500</p>
        <p><strong>Interest rate:</strong> 5.23% annual</p>
        <p><strong>Loan term:</strong> 5 years</p>
      </div>
      <p><strong>Step 1:</strong> Calculate the monthly interest rate</p>
      <p className="ml-4 text-muted-foreground">5.23% ÷ 12 ÷ 100 = 0.004358</p>
      <p><strong>Step 2:</strong> Calculate the number of payments</p>
      <p className="ml-4 text-muted-foreground">5 years × 12 months = 60 payments</p>
      <p><strong>Step 3:</strong> Apply the formula</p>
      <div className="ml-4 space-y-1 text-muted-foreground">
        <p>M = 27,500 × [0.004358(1.004358)^60] / [(1.004358)^60 - 1]</p>
        <p>M = 27,500 × 0.005548 / 1.273</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))] mt-2">M = $519.87 per month</p>
      </div>
      <div className="mt-4 pt-4 border-t">
        <p><strong>Total interest paid:</strong> $3,692.20 over 5 years</p>
        <p><strong>Total cost:</strong> $36,192.20 (including down payment)</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Auto Loan Calculator — Monthly Car Payment Estimator | MyLoanCalcs</title>
        <meta name="description" content="Calculate your monthly car payment and total loan cost with our free auto loan calculator. Instant results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/auto-loan-calculator" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <CalculatorLayout
        title="Auto loan calculator"
        description="Calculate your monthly auto loan payment, total interest, and overall vehicle cost. Adjust vehicle price, down payment, interest rate, and loan term to find the best financing option for your budget."
        howItWorks={howItWorks}
        example={example}
      >
        <div className="space-y-16">
          <AutoLoanCalculator />
          
          <section className="max-w-4xl mx-auto w-full bg-[hsl(var(--purple-light))] p-8 md:p-12 rounded-3xl mt-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold tracking-tight mb-4 text-[hsl(var(--purple-primary))]">Frequently asked questions</h2>
              <p className="text-muted-foreground text-lg">Common questions about auto loans and financing.</p>
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

export default AutoLoanCalculatorPage;
