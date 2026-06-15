const LogoSection = () => {
  const logos = [
    "J.P. MORGAN",
    "DELOITTE",
    "ORACLE",
    "MICROSOFT",
    "DECRYPTON",
    "SRM UNIVERSITY",
    "CSI",
    "NSS"
  ];

  return (
    <div className="w-full py-10 border-y border-card-border bg-card-bg/5 backdrop-blur-sm relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-20">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6 opacity-45 hover:opacity-80 transition-opacity duration-500">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-[10px] md:text-xs font-semibold tracking-[0.25em] font-heading text-[var(--charcoal)] select-none hover:text-[var(--gold)] transition-colors duration-300"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
