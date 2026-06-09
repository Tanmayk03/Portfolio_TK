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
    <div className="w-full py-10 border-y border-white/[0.03] bg-white/[0.005] backdrop-blur-sm relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-20">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6 opacity-30 hover:opacity-60 transition-opacity duration-500">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-[10px] md:text-xs font-semibold tracking-[0.25em] font-heading text-[#a6a198] select-none hover:text-[#c5a880] transition-colors duration-300"
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
