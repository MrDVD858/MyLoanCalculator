import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const calculatorLinks = [
    { path: '/mortgage-calculator', label: 'Mortgage Calculator' },
    { path: '/personal-loan-calculator', label: 'Personal Loan Calculator' },
    { path: '/auto-loan-calculator', label: 'Auto Loan Calculator' },
    { path: '/student-loan-calculator', label: 'Student Loan Calculator' },
  ];

  const legalLinks = [
    { path: '/about', label: 'About' },
    { path: '#', label: 'Privacy Policy' },
    { path: '#', label: 'Terms of Service' },
  ];

  return (
    <footer style={{ background: 'hsl(var(--hero-bg))' }}>

      {/* Main grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div
                className="w-[32px] h-[32px] rounded-[9px] flex items-center justify-center text-white text-[15px] font-black flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
              >
                $
              </div>
              <span className="text-[17px] font-bold text-white">
                MyLoanCalcs
              </span>
            </Link>

            <p className="text-[14px] leading-relaxed max-w-[260px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Free loan calculators to help you make smarter financial decisions — no sign-up, no clutter.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Free forever', 'No sign-up', 'Instant results'].map((label) => (
                <span
                  key={label}
                  className="text-[11px] font-semibold px-3 py-1 rounded-full"
                  style={{
                    border: '0.5px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Calculators */}
          <div>
            <h3
              className="text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Calculators
            </h3>
            <ul className="flex flex-col gap-3">
              {calculatorLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[14px] font-medium transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={(e) => (e.target.style.color = '#fff')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3
              className="text-[11px] font-bold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.path.startsWith('/') && link.path !== '#' ? (
                    <Link
                      to={link.path}
                      className="text-[14px] font-medium transition-colors duration-150"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                      onMouseEnter={(e) => (e.target.style.color = '#fff')}
                      onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.path}
                      className="text-[14px] font-medium transition-colors duration-150"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                      onMouseEnter={(e) => (e.target.style.color = '#fff')}
                      onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {currentYear} MyLoanCalcs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] transition-colors" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Privacy
            </a>
            <a href="#" className="text-[13px] transition-colors" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Terms
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
