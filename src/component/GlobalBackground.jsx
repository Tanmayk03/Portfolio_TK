const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#060606]">
      {/* Soft, clean glowing gold/amber orbs for dark mode depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-[#060606]/0 to-transparent blur-[125px] animate-pulse-slow"></div>
      
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/4 via-[#060606]/0 to-transparent blur-[125px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute top-[30%] left-[30%] w-[45%] h-[45%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/3 via-[#060606]/0 to-transparent blur-[125px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

      {/* Ultra-subtle grid pattern in dark mode */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
    </div>
  );
};

export default GlobalBackground;
