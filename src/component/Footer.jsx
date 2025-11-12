import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="text-sm">
          © {currentYear} Tanmay Kapoor. All rights reserved.
        </p>
        <div className="socials">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon group"
              aria-label={social.name}
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
        <p className="text-sm text-center md:text-end">
          Built with React & Three.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;

