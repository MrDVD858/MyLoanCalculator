import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Mail } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: delay || 0, ease: [0.22, 1, 0.36, 1] },
  }),
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Privacy first',
    desc: 'All calculations happen in your browser. We never collect or store any data you enter.',
  },
  {
    icon: Zap,
    title: 'Instant results',
    desc: 'No loading screens, no waiting. Every result updates the moment you type.',
  },
  {
    icon: Lock,
    title: 'Always free',
    desc: 'No paywalls, no subscriptions, no sign-ups. Every calculator is free forever.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About MyLoanCalcs — Free Loan Calculators</title>
        <meta name="description" content="MyLoanCalcs provides free, accurate loan calculators for mortgages, auto loans, personal loans, and student loans." />
      </Helmet>

      <Header />

      <main className="flex-1">

        {/* ─── Hero ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-20 md:py-28 px-6"
          style={{ background: 'hsl(var(--hero-bg))' }}
        >
          <div className="hero-dots" />
          <div className="hero-glow" />
          <div className="container mx-auto max-w-3xl relative z-10 text-center">
            <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="mb-6">
              <div className="emerald-badge">
                <div className="emerald-badge-dot" />
                Our story
              </div>
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.08}
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ letterSpacing: '-0.025em' }}
            >
              About MyLoanCalcs
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.16}
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Free, accurate loan calculators built to help you make smarter financial decisions — no sign-up, no clutter.
            </motion.p>
          </div>
        </section>

        {/* ─── Mission ───────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--emerald))' }}>
                Our mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Financial clarity for everyone
              </h2>
              <div className="space-y-4 text-muted-foreground text-[16px] leading-relaxed">
                <p>
                  MyLoanCalcs is dedicated to providing fast, free, and accurate loan calculations to help you make informed financial decisions.
                </p>
                <p>
                  Whether you are buying a new home, financing a vehicle, consolidating debt, or managing student loans, understanding your monthly payments and total interest costs is crucial. Our calculators use standard amortization formulas to give you precise estimates instantly.
                </p>
                <p>
                  We believe financial transparency should be accessible to everyone. That is why we built MyLoanCalcs — to strip away the complexity of loan math and provide clear, actionable insights without requiring sign-ups or personal information.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Values Grid ───────────────────────────────────────── */}
        <section className="py-20 md:py-24 section-muted-bg border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--emerald))' }}>
                What we stand for
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Our values</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-6 border border-border/60 bg-card"
                >
                  <div className="calc-card-icon-wrap mb-4">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[16px] font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact ───────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border/60 bg-card p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(16,185,129,0.1)' }}
              >
                <Mail className="h-6 w-6" style={{ color: 'hsl(var(--emerald))' }} />
              </div>
              <div className="flex-1">
                <h2 className="text-[20px] font-bold text-foreground mb-1">Get in touch</h2>
                <p className="text-[14px] text-muted-foreground mb-3">
                  Have a question, suggestion, or found a bug? We would love to hear from you.
                </p>
                
                  href="mailto:contact@myloancalcs.com"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold transition-colors duration-150"
                  style={{ color: 'hsl(var(--emerald))' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--emerald-hover))')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--emerald))')}
                >
                  hello@myloancalcs.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;