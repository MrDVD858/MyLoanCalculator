import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, ChevronDown } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext.jsx';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const loanCalcLinks = [
  { path: '/mortgage-calculator', label: 'Mortgage Calculator' },
  { path: '/auto-loan-calculator', label: 'Auto Loan Calculator' },
  { path: '/personal-loan-calculator', label: 'Personal Loan Calculator' },
  { path: '/student-loan-calculator', label: 'Student Loan Calculator' },
  { path: '/heloc-calculator', label: 'HELOC Calculator' },
  { path: '/refinance-calculator', label: 'Refinance Calculator' },
  { path: '/biweekly-payment-calculator', label: 'Bi-Weekly Payment Calculator' },
  { path: '/early-payoff-calculator', label: 'Early Payoff Calculator' },
  { path: '/loan-comparison-calculator', label: 'Loan Comparison Calculator' },
  { path: '/debt-consolidation-calculator', label: 'Debt Consolidation Calculator' },
];

const toolLinks = [
  { path: '/discount-calculator', label: 'Discount Calculator' },
  { path: '/percentage-change-calculator', label: 'Percentage Change Calculator' },
  { path: '/sales-tax-calculator', label: 'Sales Tax Calculator' },
  { path: '/tip-calculator', label: 'Tip Calculator' },
  { path: '/grade-calculator', label: 'Grade Calculator' },
];

const allCalcLinks = [...loanCalcLinks, ...toolLinks];

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;
  const isCalcActive = allCalcLinks.some((l) => location.pathname === l.path);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCalcOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setCalcOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[70px] items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-white text-[14px] font-black"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
            >
              $
            </div>
            <span className="text-[17px] font-bold">
              <span className="text-foreground">MyLoan</span>
              <span style={{ color: 'hsl(160 84% 42%)' }}>Calcs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-150 ${
                isActive('/') ? 'text-[hsl(var(--emerald))]' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Home
            </Link>

            {/* Custom dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCalcOpen((o) => !o)}
                className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-150 outline-none ${
                  isCalcActive || calcOpen
                    ? 'text-[hsl(var(--emerald))]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Calculators
                <ChevronDown
                  className="w-4 h-4 opacity-60 transition-transform duration-200"
                  style={{ transform: calcOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {calcOpen && (
                <div className="nav-dropdown" style={{ minWidth: '260px', maxHeight: '80vh', overflowY: 'auto' }}>
                  <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Loan Calculators
                  </p>
                  {loanCalcLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`nav-dropdown-item ${isActive(link.path) ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div style={{ height: '1px', background: 'hsl(var(--border))', margin: '6px 0' }} />
                  <p className="px-3 pt-1 pb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Financial Tools
                  </p>
                  {toolLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`nav-dropdown-item ${isActive(link.path) ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-150 ${
                isActive('/about') ? 'text-[hsl(var(--emerald))]' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="transition-colors duration-150"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background border-border overflow-y-auto">
                <div className="flex items-center gap-2.5 font-bold text-[17px] mb-8">
                  <div
                    className="w-[28px] h-[28px] rounded-[7px] flex items-center justify-center text-white text-[13px] font-black"
                    style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
                  >
                    $
                  </div>
                  <span>MyLoan<span style={{ color: 'hsl(160 84% 42%)' }}>Calcs</span></span>
                </div>

                <nav className="flex flex-col gap-1">
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-[15px] font-medium rounded-lg transition-colors duration-150 ${
                      isActive('/') ? 'text-[hsl(var(--emerald))] bg-[hsl(var(--emerald-light))]' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    Home
                  </Link>

                  <div className="pt-2">
                    <p className="px-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      Loan Calculators
                    </p>
                    {loanCalcLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 text-[14px] font-medium rounded-lg transition-colors duration-150 ${
                          isActive(link.path) ? 'text-[hsl(var(--emerald))] bg-[hsl(var(--emerald-light))]' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 mt-1 border-t border-border">
                    <p className="px-4 pt-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      Financial Tools
                    </p>
                    {toolLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 text-[14px] font-medium rounded-lg transition-colors duration-150 ${
                          isActive(link.path) ? 'text-[hsl(var(--emerald))] bg-[hsl(var(--emerald-light))]' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 mt-1 border-t border-border">
                    <Link
                      to="/about"
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-[15px] font-medium rounded-lg transition-colors duration-150 ${
                        isActive('/about') ? 'text-[hsl(var(--emerald))] bg-[hsl(var(--emerald-light))]' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      About
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
