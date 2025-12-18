import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skillsData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);
  const iconsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      sectionRef.current?.querySelector("h2"),
      { opacity: 0, y: -30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Description animation
    gsap.fromTo(
      sectionRef.current?.querySelector("p"),
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Unique staggered card animations with different effects
    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        const icon = iconsRef.current[index];
        const card = skill;
        
        // Card animation - simple and calm
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.8,
            transformOrigin: "center center",
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );

        // Icon simple fade and scale animation
        if (icon) {
          gsap.fromTo(
            icon,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1 + 0.2,
              ease: "power2.out",
            }
          );
        }
      }
    });
  }, []);

  // Hover animation handler - subtle effects
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const card = skillsRef.current[index];
    const icon = iconsRef.current[index];
    
    if (card && icon) {
      // Subtle scale only
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
      
      // Icon subtle scale
      gsap.to(icon, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const card = skillsRef.current[index];
    const icon = iconsRef.current[index];
    
    if (card && icon) {
      // Reset card
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      
      // Reset icon
      gsap.to(icon, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative">
      {/* Cool animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="padding-x-lg relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-white-50 text-xl mb-12">
          Technologies I work with to build amazing digital experiences
        </p>

        {/* Desktop: Original grid layout */}
        <div className="hidden md:block tech-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="relative p-5 md:p-6 group cursor-pointer overflow-hidden skill-rounded min-h-[140px] md:min-h-[160px] flex items-center justify-center"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 skill-rounded" />
              
              {/* Animated gradient border */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 skill-rounded opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-20" : ""
                }`}
              />
              
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-cyan-400/30 skill-rounded blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              
              <div className="tech-icon-wrapper relative z-10 flex flex-col items-center justify-center text-center h-full">
                <img
                  ref={(el) => (iconsRef.current[index] = el)}
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain mb-3 transition-all duration-300 drop-shadow-2xl"
                />
                <p className="text-base md:text-lg font-semibold mb-1 transition-all duration-300">
                  {skill.name}
                </p>
                <p className="text-white-50 text-xs">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide smooth-scroll">
          <div className="flex gap-3 pb-4">
            {skillsData.map((skill, index) => (
              <div
                key={`mobile-${index}`}
                className="relative p-4 group cursor-pointer overflow-hidden skill-rounded min-w-[130px] flex-shrink-0"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 skill-rounded" />
                
                {/* Animated gradient border */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 skill-rounded opacity-0 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-20" : ""
                  }`}
                />
                
                {/* Glow effect on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-cyan-400/30 skill-rounded blur-xl transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[120px]">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-2 transition-all duration-300 drop-shadow-2xl"
                  />
                  <p className="text-sm font-semibold mb-1 transition-all duration-300">
                    {skill.name}
                  </p>
                  <p className="text-white-50 text-xs">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .smooth-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;