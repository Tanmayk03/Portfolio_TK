import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner relative z-10">
        <div className="logo-wrapper">
          <a href="#hero" className="logo-text flex items-center" onClick={closeMobileMenu}>
            <span className="logo-name">
              <span className="font-serif italic font-light tracking-wide mr-1.5 text-cream transition-colors duration-500">Tanmay</span>
              <span className="font-heading font-extrabold tracking-wider uppercase text-base sm:text-lg bg-gradient-to-r from-gold via-bright-gold to-bronze bg-clip-text text-transparent transition-all duration-500">Kapoor</span>
            </span>
            <span className="logo-divider hidden sm:inline-block"></span>
            <span className="logo-badge hidden sm:inline-flex">Developer</span>
          </a>
          <div className="logo-glow" />
          <div className="logo-particles">
            <span className="particle" style={{ "--delay": "0s" }} />
            <span className="particle" style={{ "--delay": "0.5s" }} />
            <span className="particle" style={{ "--delay": "1s" }} />
            <span className="particle" style={{ "--delay": "1.5s" }} />
            <span className="particle" style={{ "--delay": "2s" }} />
            <span className="particle" style={{ "--delay": "2.5s" }} />
          </div>
        </div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group relative">
                <a href={link} className="relative text-charcoal font-medium py-2 px-1 flex items-center">
                  <span className="transition-colors hover:text-cream duration-300">{name}</span>
                  <span className="nav-dot" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 relative z-10">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-card-border bg-card-bg hover:border-gold/30 hover:bg-gold/10 transition-all duration-300 cursor-pointer text-gold shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-500 rotate-90 text-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-500 text-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <a href="#contact" className="group contact-btn">
            {/* Hover gradient background */}
            <div className="contact-btn-bg" />
            
            <span className="contact-btn-text">
              Contact me
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contact-btn-svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 relative text-cream"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {/* Button glass background */}
            <div className="absolute inset-0 bg-card-bg backdrop-blur-sm border border-card-border rounded-lg" />
            
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
          {/* Glass morphism background for mobile menu */}
          <div className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-card-border" />
          
          <nav className="flex flex-col p-5 relative z-10">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={closeMobileMenu}
                className="py-3 text-charcoal font-medium hover:text-[var(--gold)] transition-colors border-b border-card-border last:border-0"
              >
                {name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="relative mt-4 py-3 px-5 rounded-lg text-center font-semibold overflow-hidden group"
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-card-bg border border-card-border rounded-lg" />
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              <span className="relative z-10 transition-colors text-cream group-hover:text-white">Contact me</span>
            </a>
          </nav>
        </div>
    </header>
  );
};

export default NavBar;