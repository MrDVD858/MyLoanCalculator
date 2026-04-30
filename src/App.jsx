
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from '@/contexts/DarkModeContext.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';

// Pages
import HomePage from '@/pages/HomePage.jsx';
import MortgageCalculatorPage from '@/pages/MortgageCalculatorPage.jsx';
import AutoLoanCalculatorPage from '@/pages/AutoLoanCalculatorPage.jsx';
import PersonalLoanCalculatorPage from '@/pages/PersonalLoanCalculatorPage.jsx';
import StudentLoanCalculatorPage from '@/pages/StudentLoanCalculatorPage.jsx';
import RefinanceCalculatorPage from '@/pages/RefinanceCalculatorPage.jsx';
import EarlyPayoffCalculatorPage from '@/pages/EarlyPayoffCalculatorPage.jsx';
import DebtConsolidationCalculatorPage from '@/pages/DebtConsolidationCalculatorPage.jsx';
import HelocCalculatorPage from '@/pages/HelocCalculatorPage.jsx';
import BiWeeklyPaymentCalculatorPage from '@/pages/BiWeeklyPaymentCalculatorPage.jsx';
import LoanComparisonCalculatorPage from '@/pages/LoanComparisonCalculatorPage.jsx';

import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import PrivacyPage from '@/pages/PrivacyPage.jsx';
import TermsPage from '@/pages/TermsPage.jsx';

// Educational Pages
import WhatIsAprPage from '@/pages/WhatIsAprPage.jsx';
import WhatIsAmortizationPage from '@/pages/WhatIsAmortizationPage.jsx';
import WhatIsAMortgagePage from '@/pages/WhatIsAMortgagePage.jsx';
import WhatIsInterestRatePage from '@/pages/WhatIsInterestRatePage.jsx';
import WhatIsDownPaymentPage from '@/pages/WhatIsDownPaymentPage.jsx';
import WhatIsPmiPage from '@/pages/WhatIsPmiPage.jsx';
import WhatIsDebtToIncomeRatioPage from '@/pages/WhatIsDebtToIncomeRatioPage.jsx';
import WhatIsRefinancingPage from '@/pages/WhatIsRefinancingPage.jsx';
import WhatIsFixedRateLoanPage from '@/pages/WhatIsFixedRateLoanPage.jsx';
import WhatIsCompoundInterestPage from '@/pages/WhatIsCompoundInterestPage.jsx';
import WhatIsLoanTermPage from '@/pages/WhatIsLoanTermPage.jsx';
import WhatIsACosignerPage from '@/pages/WhatIsACosignerPage.jsx';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Loan Calculators */}
          <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
          <Route path="/auto-loan-calculator" element={<AutoLoanCalculatorPage />} />
          <Route path="/personal-loan-calculator" element={<PersonalLoanCalculatorPage />} />
          <Route path="/student-loan-calculator" element={<StudentLoanCalculatorPage />} />
          <Route path="/refinance-calculator" element={<RefinanceCalculatorPage />} />
          <Route path="/early-payoff-calculator" element={<EarlyPayoffCalculatorPage />} />
          <Route path="/debt-consolidation-calculator" element={<DebtConsolidationCalculatorPage />} />
          <Route path="/heloc-calculator" element={<HelocCalculatorPage />} />
          <Route path="/bi-weekly-payment-calculator" element={<BiWeeklyPaymentCalculatorPage />} />
          <Route path="/loan-comparison-calculator" element={<LoanComparisonCalculatorPage />} />
          
          {/* Educational Pages */}
          <Route path="/what-is-apr" element={<WhatIsAprPage />} />
          <Route path="/what-is-amortization" element={<WhatIsAmortizationPage />} />
          <Route path="/what-is-a-mortgage" element={<WhatIsAMortgagePage />} />
          <Route path="/what-is-interest-rate" element={<WhatIsInterestRatePage />} />
          <Route path="/what-is-a-down-payment" element={<WhatIsDownPaymentPage />} />
          <Route path="/what-is-pmi" element={<WhatIsPmiPage />} />
          <Route path="/what-is-debt-to-income-ratio" element={<WhatIsDebtToIncomeRatioPage />} />
          <Route path="/what-is-refinancing" element={<WhatIsRefinancingPage />} />
          <Route path="/what-is-a-fixed-rate-loan" element={<WhatIsFixedRateLoanPage />} />
          <Route path="/what-is-compound-interest" element={<WhatIsCompoundInterestPage />} />
          <Route path="/what-is-a-loan-term" element={<WhatIsLoanTermPage />} />
          <Route path="/what-is-a-cosigner" element={<WhatIsACosignerPage />} />
          
          {/* Utility Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">404 - Page not found</h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-[500px] mx-auto">
                  The page you are looking for does not exist or has been moved.
                </p>
                <a 
                  href="/" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Back to home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
