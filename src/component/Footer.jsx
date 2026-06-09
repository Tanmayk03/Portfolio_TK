import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--bg-primary)]/60 backdrop-blur-md border-t border-card-border mt-20">
      <div className="max-w-6xl mx-auto px-5 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[var(--charcoal)] font-medium">
          © {currentYear} Tanmay Kapoor. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-card-bg border border-card-border hover:border-[var(--gold)]/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-amber-950/5 hover:-translate-y-1 transition-all duration-300"
              aria-label={social.name}
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className="w-5 h-5 opacity-50 hover:opacity-100 transition-all duration-300" 
                style={{ filter: 'brightness(0) invert(1)' }} 
              />
            </a>
          ))}
        </div>
        <p className="text-sm text-[var(--charcoal)] font-medium">
          Built with React & Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;

