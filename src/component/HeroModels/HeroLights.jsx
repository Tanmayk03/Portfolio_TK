import * as THREE from "three";

const HeroLights = ({ theme, isMobile, isTablet }) => {
  const isLight = theme === "light";
  const showExtraLights = !isMobile && !isTablet;
  
  return (
    <>
      {/* lamp's light */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={isLight ? 60 : 100}
        color="white"
      />
      {showExtraLights && (
        <>
          {/* warm overhead lamp */}
          <spotLight
            position={[4, 5, 4]}
            angle={0.3}
            penumbra={0.5}
            intensity={isLight ? 25 : 40}
            color={isLight ? "#a3821d" : "#d4af37"}
          />
          {/* amber side fill */}
          <spotLight
            position={[-3, 5, 5]}
            angle={0.4}
            penumbra={1}
            intensity={isLight ? 40 : 60}
            color={isLight ? "#8a6c42" : "#c5a880"}
          />
        </>
      )}
      {/* subtle point light for atmospheric tone */}
      <pointLight position={[0, 1, 0]} intensity={isLight ? 6 : 10} color={isLight ? "#8a6c42" : "#c5a880"} />
      {showExtraLights && (
        <pointLight position={[1, 2, -2]} intensity={isLight ? 6 : 10} color={isLight ? "#5c5750" : "#9c978e"} />
      )}
    </>
  );
};

export default HeroLights;