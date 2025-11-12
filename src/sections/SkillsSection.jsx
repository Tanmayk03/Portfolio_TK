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
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="padding-x-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-white-50 text-xl mb-12">
          Technologies I work with to build amazing digital experiences
        </p>

        <div className="tech-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="tech-card-content card-border skill-rounded p-4 md:p-5 group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Animated background gradient */}
              <div className="tech-card-animated-bg" />
              
              {/* Glow effect on hover - subtle */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 skill-rounded opacity-0 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />
              
              <div className="tech-icon-wrapper relative z-10">
                <img
                  ref={(el) => (iconsRef.current[index] = el)}
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 transition-all duration-300"
                />
              </div>
              
              <p className="text-lg md:text-xl font-semibold mb-1 relative z-10 transition-all duration-300">
                {skill.name}
              </p>
              <p className="text-white-50 text-xs md:text-sm relative z-10">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

