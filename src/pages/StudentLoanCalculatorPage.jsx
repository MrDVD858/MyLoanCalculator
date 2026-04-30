
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorLayout from '@/components/CalculatorLayout.jsx';
import StudentLoanCalculator from '@/components/StudentLoanCalculator.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const StudentLoanCalculatorPage = () => {
  const faqs = [
    {
      question: 'What is a student loan calculator?',
      answer: 'A student loan calculator is a tool that helps you estimate your monthly payments and total interest over the life of your loan. By entering your loan amount, interest rate, and term length, you can see how different repayment strategies affect your total overall cost.'
    },
    {
      question: 'What are typical student loan repayment timelines?',
      answer: 'The standard federal student loan repayment timeline is 10 years. However, other options like extended repayment can stretch out to 25 years, and income-driven repayment (IDR) plans typically last 20 to 25 years before any remaining balance is forgiven. Private student loan terms generally range from 5 to 15 years.'
    },
    {
      question: 'What is the difference between subsidized and unsubsidized loans?',
      answer: 'For Direct Subsidized Loans, the federal government pays the interest while you are in school at least half-time, during the grace period, and during deferment. For Direct Unsubsidized Loans, you are responsible for paying all interest that accrues from the moment the loan is disbursed.'
    },
    {
      question: 'Can I pay off my student loans early?',
      answer: 'Yes, you can pay off both federal and private student loans early without prepayment penalties. Making extra payments directed toward your principal balance can significantly reduce the amount of interest you pay over the life of the loan and help you become debt-free sooner.'
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
        The student loan calculator provides estimates for both standard and income-driven repayment plans. For standard repayment, it uses the same amortization formula as other loan calculators.
      </p>
      <div className="formula-box">
        <p className="mb-2">Standard repayment formula:</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))]">M = P × [r(1+r)^n] / [(1+r)^n - 1]</p>
      </div>
      <p>Where:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>M</strong> = Monthly payment</li>
        <li><strong>P</strong> = Principal (total loan amount)</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Total number of payments (years × 12)</li>
      </ul>
      <p>
        For income-driven repayment plans, the calculator provides a simplified estimate. Actual income-driven payments are based on your discretionary income (the difference between your income and 150% of the poverty guideline for your family size) and typically range from 10% to 20% of discretionary income.
      </p>
    </div>
  );

  const example = (
    <div className="space-y-4">
      <p>Let's calculate the monthly payment for a student loan under standard repayment:</p>
      <div className="formula-box space-y-2">
        <p><strong>Total loan amount:</strong> $28,750</p>
        <p><strong>Interest rate:</strong> 4.53% annual</p>
        <p><strong>Loan term:</strong> 10 years</p>
        <p><strong>Repayment plan:</strong> Standard</p>
      </div>
      <p><strong>Step 1:</strong> Calculate the monthly interest rate</p>
      <p className="ml-4 text-muted-foreground">4.53% ÷ 12 ÷ 100 = 0.003775</p>
      <p><strong>Step 2:</strong> Calculate the number of payments</p>
      <p className="ml-4 text-muted-foreground">10 years × 12 months = 120 payments</p>
      <p><strong>Step 3:</strong> Apply the formula</p>
      <div className="ml-4 space-y-1 text-muted-foreground">
        <p>M = 28,750 × [0.003775(1.003775)^120] / [(1.003775)^120 - 1]</p>
        <p>M = 28,750 × 0.006195 / 1.641</p>
        <p className="text-lg font-semibold text-[hsl(var(--purple-primary))] mt-2">M = $297.18 per month</p>
      </div>
      <div className="mt-4 pt-4 border-t">
        <p><strong>Total interest paid:</strong> $6,911.60 over 10 years</p>
        <p><strong>Total cost:</strong> $35,661.60</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Student Loan Calculator — Monthly Payment Estimator | MyLoanCalcs</title>
        <meta name="description" content="Calculate your student loan monthly payment and total repayment. Works for federal and private student loans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/student-loan-calculator" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <CalculatorLayout
        title="Student loan calculator"
        description="Calculate your monthly student loan payment for both standard and income-driven repayment plans. Compare different repayment options to find the best strategy for managing your education debt."
        howItWorks={howItWorks}
        example={example}
      >
        <div className="space-y-16">
          <StudentLoanCalculator />
          
          <section className="max-w-4xl mx-auto w-full bg-[hsl(var(--purple-light))] p-8 md:p-12 rounded-3xl mt-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold tracking-tight mb-4 text-[hsl(var(--purple-primary))]">Frequently asked questions</h2>
              <p className="text-muted-foreground text-lg">Common questions about student loans and financing.</p>
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

export default StudentLoanCalculatorPage;
