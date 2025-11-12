// Simple, minimal animated background using pure CSS
// Easy to learn and understand!

const GlobalBackground = () => {
  return (
    <div className="global-background">
      {/* Animated gradient orbs */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>
      
      {/* Subtle grid pattern */}
      <div className="bg-grid"></div>
    </div>
  );
};

export default GlobalBackground;

