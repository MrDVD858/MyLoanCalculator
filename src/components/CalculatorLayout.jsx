
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CalculatorLayout = ({ 
  title, 
  description, 
  children, 
  howItWorks, 
  example, 
  faqs 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--purple-light))] via-background to-[hsl(var(--purple-light))] py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance text-[hsl(var(--purple-primary))]" style={{letterSpacing: '-0.02em'}}>
                {title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-prose">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-16 section-light-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        {howItWorks && (
          <section className="py-12 md:py-16 section-purple-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
                  How it works
                </h2>
                <Card className="bg-card border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      {howItWorks}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Example Section */}
        {example && (
          <section className="py-12 md:py-16 section-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
                  Step-by-step example
                </h2>
                <Card className="shadow-lg border-none">
                  <CardContent className="pt-6">
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      {example}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <section className="py-12 md:py-16 section-purple-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
                  Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 mb-2 rounded-xl border-none shadow-sm">
                      <AccordionTrigger className="text-left font-medium hover:no-underline text-[hsl(var(--purple-primary))]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorLayout;
