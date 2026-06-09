import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#060606]/60 backdrop-blur-md border-t border-white/[0.04] mt-20">
      <div className="max-w-6xl mx-auto px-5 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[#a6a198] font-medium">
          © {currentYear} Tanmay Kapoor. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.01] border border-white/[0.04] hover:border-[#c5a880]/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-amber-950/5 hover:-translate-y-1 transition-all duration-300"
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
        <p className="text-sm text-[#a6a198] font-medium">
          Built with React & Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;

