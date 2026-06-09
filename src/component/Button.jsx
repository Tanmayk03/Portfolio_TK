const Button = ({ text, className, href }) => {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-between px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-[#a6a198] hover:text-[#f5f2eb] font-semibold transition-all duration-300 hover:border-[#c5a880]/30 hover:shadow-[0_0_30px_rgba(197,168,128,0.15)] cursor-pointer ${className ?? ""}`}
    >
      {/* Subtle hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c5a880] via-[#e6dfd5] to-[#9c978e] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
      
      <span className="relative z-10 flex items-center gap-2">
        {/* Pulsing indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a880] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a880]"></span>
        </span>
        {text}
      </span>
      
      {/* Interactive Chevron Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 ml-4 relative z-10 stroke-[#a6a198] group-hover:stroke-[#f5f2eb] group-hover:translate-x-1.5 transition-all duration-300"
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