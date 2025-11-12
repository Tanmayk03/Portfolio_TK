import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
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
      <div className="inner">
        <a href="#hero" className="logo" onClick={closeMobileMenu}>
          Tanmay Kapoor | Developer
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <img src="/images/x.svg" alt="Close menu" className="w-6 h-6" />
          ) : (
            <img src="/images/menu.svg" alt="Open menu" className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-white/10">
          <nav className="flex flex-col p-5">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={closeMobileMenu}
                className="py-3 text-white-50 hover:text-white transition-colors border-b border-white/10 last:border-0"
              >
                {name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-4 py-3 px-5 bg-white text-black rounded-lg text-center font-semibold hover:bg-white/90 transition-colors"
            >
              Contact me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
