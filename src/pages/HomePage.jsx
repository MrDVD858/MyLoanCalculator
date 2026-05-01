import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home, Car, CreditCard, GraduationCap, ArrowRight, ChevronDown,
  ShieldCheck, Zap, Lock, TrendingDown, RefreshCw, Calendar,
  DollarSign, Percent, Receipt, Calculator, Scale, Tag
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

/* ─── Data ───────────────────────────────────────────────────── */

const calcCategories = [
  {
    label: 'Loan Calculators',
    items: [
      {
        icon: Home,
        title: 'Mortgage Calculator',
        description: 'Calculate your monthly mortgage payment, total interest, and overall loan cost.',
        path: '/mortgage-calculator',
      },
      {
        icon: Car,
        title: 'Auto Loan Calculator',
        description: 'Estimate monthly car payments, total interest, and loan costs for your next vehicle.',
        path: '/auto-loan-calculator',
      },
      {
        icon: CreditCard,
        title: 'Personal Loan Calculator',
        description: 'Find your monthly personal loan payment instantly and compare loan terms.',
        path: '/personal-loan-calculator',
      },
      {
        icon: GraduationCap,
        title: 'Student Loan Calculator',
        description: 'Calculate monthly student loan payments for standard and income-driven plans.',
        path: '/student-loan-calculator',
      },
      {
        icon: Home,
        title: 'HELOC Calculator',
        description: 'Estimate payments on a home equity line of credit based on your draw and rate.',
        path: '/heloc-calculator',
      },
      {
        icon: RefreshCw,
        title: 'Refinance Calculator',
        description: 'See if refinancing your loan saves money and how long until you break even.',
        path: '/refinance-calculator',
      },
      {
        icon: Calendar,
        title: 'Bi-Weekly Payment Calculator',
        description: 'See how bi-weekly payments reduce your loan term and total interest paid.',
        path: '/biweekly-payment-calculator',
      },
      {
        icon: TrendingDown,
        title: 'Early Payoff Calculator',
        description: 'Find out how much you save by making extra payments toward your loan.',
        path: '/early-payoff-calculator',
      },
      {
        icon: Scale,
        title: 'Loan Comparison Calculator',
        description: 'Compare two loan offers side by side to find the better deal.',
        path: '/loan-comparison-calculator',
      },
      {
        icon: TrendingDown,
        title: 'Debt Consolidation Calculator',
        description: 'See if consolidating your debts into one loan saves you money.',
        path: '/debt-consolidation-calculator',
      },
    ],
  },
  {
    label: 'Financial Tools',
    items: [
      {
        icon: Tag,
        title: 'Discount Calculator',
        description: 'Quickly calculate sale prices and savings from any discount percentage.',
        path: '/discount-calculator',
      },
      {
        icon: Percent,
        title: 'Percentage Change Calculator',
        description: 'Calculate percentage increase or decrease between any two values.',
        path: '/percentage-change-calculator',
      },
      {
        icon: Receipt,
        title: 'Sales Tax Calculator',
        description: 'Calculate the total cost of any purchase including sales tax.',
        path: '/sales-tax-calculator',
      },
      {
        icon: DollarSign,
        title: 'Tip Calculator',
        description: 'Calculate tips and split bills evenly among any number of people.',
        path: '/tip-calculator',
      },
      {
        icon: Calculator,
        title: 'Grade Calculator',
        description: 'Calculate your course grade based on assignments, exams, and weights.',
        path: '/grade-calculator',
      },
    ],
  },
];

const trustItems = [
  { icon: ShieldCheck, label: 'No sign-up required' },
  { icon: Zap, label: 'Instant results' },
  { icon: Lock, label: '100% free forever' },
  { icon: ShieldCheck, label: 'No data stored' },
];

const faqs = [
  {
    q: 'Are these calculators really free?',
    a: 'Yes, every calculator on MyLoanCalcs is completely free to use. No account, no subscription, no hidden fees — ever.',
  },
  {
    q: 'How accurate are the loan estimates?',
    a: 'Our calculators use standard financial formulas identical to those used by banks and lenders. Results are accurate for fixed-rate loans. Actual offers may vary based on your credit profile and lender.',
  },
  {
    q: 'What is APR and how does it affect my payment?',
    a: 'APR (Annual Percentage Rate) includes both the interest rate and any lender fees, giving you the true cost of borrowing. A higher APR means higher monthly payments and more total interest paid over the life of the loan.',
  },
  {
    q: 'Can I compare different loan terms?',
    a: 'Yes. Simply change the loan term or interest rate in any calculator and the results update instantly, making it easy to compare a 15-year vs 30-year mortgage or a 48-month vs 60-month auto loan.',
  },
  {
    q: 'Do you store my financial information?',
    a: 'No. All calculations happen entirely in your browser. We never collect, transmit, or store any numbers you enter into our calculators.',
  },
];

/* ─── Animation variants ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: delay || 0, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── AdSense components ─────────────────────────────────────── */

const AdLeaderboard = () => {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
  }, []);
  return (
    <div className="adsense-zone my-2">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5193834725888549"
        data-ad-slot="1946446609"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

const AdMidpage = () => {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
  }, []);
  return (
    <div className="adsense-zone my-2">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5193834725888549"
        data-ad-slot="7091187410"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

/* ─── FAQ Item ───────────────────────────────────────────────── */

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        data-open={open ? 'true' : 'false'}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown className="faq-chevron" />
      </button>
      <div className="faq-body" data-open={open ? 'true' : 'false'}>
        <div className="faq-body-inner">{a}</div>
      </div>
    </div>
  );
};

/* ─── Page ───────────────────────────────────────────────────── */

const HomePage = () => {
  const totalCalcs = calcCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free Loan Calculators | MyLoanCalcs</title>
        <meta name="description" content="Free loan calculators for mortgage, auto, personal, student loans and more. Instant results — no sign-up required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myloancalcs.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5193834725888549" crossOrigin="anonymous" />
      </Helmet>

      <Header />

      <main className="flex-1">

        {/* ─── Hero ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden min-h-[75dvh] flex items-center px-6 md:px-12 py-20 md:py-24"
          style={{ background: 'hsl(var(--hero-bg))' }}
        >
          <div className="hero-dots" />
          <div className="hero-glow" />

          <div className="container mx-auto relative z-10 w-full">
            <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">

              <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="mb-7">
                <div className="emerald-badge">
                  <div className="emerald-badge-dot" />
                  Free · No sign-up · Instant answers
                </div>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="show"
                custom={0.08}
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white text-balance mb-6"
                style={{ letterSpacing: '-0.025em' }}
              >
                Smart loan decisions{' '}
                <span style={{ color: 'hsl(var(--emerald))' }}>start here</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="show"
                custom={0.16}
                variants={fadeUp}
                className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Free, accurate calculators for mortgages, auto loans, personal loans, student debt, and more. Get instant answers and plan your financial future.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                custom={0.22}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link
                  to="/mortgage-calculator"
                  className="btn-primary inline-flex items-center justify-center font-bold text-[15px] h-[52px] px-8 rounded-lg text-white transition-all duration-200"
                  style={{ background: 'hsl(var(--emerald))', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }}
                >
                  Calculate Mortgage
                </Link>
                <Link
                  to="/auto-loan-calculator"
                  className="inline-flex items-center justify-center font-semibold text-[15px] h-[52px] px-8 rounded-lg transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  Auto Loan Calculator
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="show"
                custom={0.3}
                variants={fadeUp}
                className="flex flex-wrap gap-x-10 gap-y-3 justify-center"
              >
                {[
                  { value: `${totalCalcs}`, label: 'Free calculators' },
                  { value: '0', label: 'Sign-ups needed' },
                  { value: '100%', label: 'Free forever' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-2">
                    <span className="text-[22px] font-extrabold text-white leading-none">{stat.value}</span>
                    <span className="text-[14px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── Trust Bar ─────────────────────────────────────────── */}
        <section className="border-b border-border/50 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustItems.map((item, i) => (
                <div key={item.label} className="trust-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--emerald))' }} />
                  <span className="text-[13px] font-medium text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AdSense Leaderboard ───────────────────────────────── */}
        <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <AdLeaderboard />
          </div>
        </section>

        {/* ─── Calculator Grid ────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-14"
            >
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--emerald))' }}>
                All Tools
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                Choose your calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Select the tool that matches your needs — instant results, no sign-up.
              </p>
            </motion.div>

            {calcCategories.map((category) => (
              <div key={category.label} className="mb-14 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: 'hsl(var(--emerald))' }}
                  >
                    {category.label}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  variants={cardContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {category.items.map((calc) => (
                    <motion.div key={calc.path} variants={cardItem}>
                      <Link to={calc.path} className="calc-card-link">
                        <div className="calc-card-inner">
                          <div className="flex items-start justify-between mb-4">
                            <div className="calc-card-icon-wrap">
                              <calc.icon className="h-6 w-6" />
                            </div>
                            <ArrowRight
                              className="h-5 w-5 mt-1"
                              style={{ color: 'hsl(var(--muted-foreground))' }}
                            />
                          </div>
                          <h3 className="text-[17px] font-bold text-foreground mb-2">{calc.title}</h3>
                          <p className="text-[14px] text-muted-foreground leading-relaxed">{calc.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}

          </div>
        </section>

        {/* ─── SEO Content ───────────────────────────────────────── */}
        <section className="py-20 md:py-24 section-muted-bg border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--emerald))' }}>
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why use a loan calculator?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="prose prose-base max-w-none text-muted-foreground space-y-4"
            >
              <p>
                Before signing any loan agreement, understanding your monthly obligation and total repayment cost is essential. A loan calculator gives you that clarity in seconds — no spreadsheet required.
              </p>
              <p>
                Whether you are buying a home, financing a vehicle, consolidating debt, or planning for college, MyLoanCalcs gives you a precise breakdown of principal, interest, and total cost for any loan term and rate combination.
              </p>
              <p>
                All calculators use the standard amortization formula used by banks worldwide. Enter your loan amount, interest rate, and term to instantly see your monthly payment and a full cost summary.
              </p>

              <div className="formula-box">
                M = P [ r(1+r)^n ] / [ (1+r)^n - 1 ]
              </div>

              <p className="text-[13px]">
                Where M is monthly payment, P is principal, r is monthly interest rate, and n is number of payments.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ─── AdSense Mid-page ──────────────────────────────────── */}
        <section className="bg-background border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <AdMidpage />
          </div>
        </section>

        {/* ─── FAQ ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--emerald))' }}>
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Common questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
