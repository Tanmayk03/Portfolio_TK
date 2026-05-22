import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
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
          <a href="#hero" className="logo-text text-slate-100 flex items-center" onClick={closeMobileMenu}>
            <span className="logo-name">Tanmay Kapoor</span>
            <span className="logo-divider"></span>
            <span className="logo-badge">Developer</span>
          </a>
          <div className="logo-glow" />
        </div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group relative">
                <a href={link} className="relative text-slate-300 font-medium py-2 px-1 flex items-center">
                  <span className="transition-colors hover:text-white duration-300">{name}</span>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500 scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="group hidden lg:flex items-center gap-2 relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:text-white cursor-pointer px-6 py-2.5">
          {/* Hover gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="relative z-10 text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
            Contact me
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 relative z-10 stroke-slate-300 group-hover:stroke-white group-hover:translate-x-0.5 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 relative text-slate-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {/* Button glass background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg" />
          
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 stroke-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 stroke-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
          {/* Glass morphism background for mobile menu */}
          <div className="absolute inset-0 bg-[#030014]/95 backdrop-blur-md border-b border-white/10" />
          
          <nav className="flex flex-col p-5 relative z-10">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={closeMobileMenu}
                className="py-3 text-slate-300 font-medium hover:text-violet-400 transition-colors border-b border-white/5 last:border-0"
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
              <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg" />
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              <span className="relative z-10 transition-colors text-slate-200 group-hover:text-white">Contact me</span>
            </a>
          </nav>
        </div>
    </header>
  );
};

export default NavBar;