const Button = ({ text, className, href }) => {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-between px-8 py-4 rounded-xl border border-card-border bg-white/5 backdrop-blur-md text-[var(--charcoal)] hover:text-[var(--cream)] font-semibold transition-all duration-300 hover:border-[var(--gold)]/30 hover:shadow-[0_0_30px_rgba(197,168,128,0.15)] cursor-pointer ${className ?? ""}`}
    >
      {/* Subtle hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] via-[var(--light-beige)] to-[var(--bronze)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
      
      <span className="relative z-10 flex items-center gap-2">
        {/* Pulsing indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--gold)]"></span>
        </span>
        {text}
      </span>
      
      {/* Interactive Chevron Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 ml-4 relative z-10 stroke-[var(--charcoal)] group-hover:stroke-[var(--cream)] group-hover:translate-x-1.5 transition-all duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
};

export default Button;