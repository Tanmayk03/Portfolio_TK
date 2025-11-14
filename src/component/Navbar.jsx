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
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} relative`}>
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-b border-white/10" />
      
      <div className="inner relative z-10">
        <a href="#hero" className="logo" onClick={closeMobileMenu}>
          Tanmay Kapoor | Developer
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} className="relative">
                  <span className="transition-colors hover:text-cyan-300">{name}</span>
                  <span className="underline bg-gradient-to-r from-cyan-400 to-blue-400" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group hidden lg:flex relative overflow-hidden">
          {/* Button glass background */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg" />
          
          {/* Hover gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          
          <div className="inner relative z-10">
            <span className="transition-colors group-hover:text-cyan-300">Contact me</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {/* Button glass background */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg" />
          
          {mobileMenuOpen ? (
            <img src="/images/x.svg" alt="Close menu" className="w-6 h-6 relative z-10" />
          ) : (
            <img src="/images/menu.svg" alt="Open menu" className="w-6 h-6 relative z-10" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full relative">
          {/* Glass morphism background for mobile menu */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-b border-white/10" />
          
          <nav className="flex flex-col p-5 relative z-10">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={closeMobileMenu}
                className="py-3 text-white-50 hover:text-cyan-300 transition-colors border-b border-white/10 last:border-0"
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
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg" />
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              <span className="relative z-10 transition-colors group-hover:text-cyan-300">Contact me</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;