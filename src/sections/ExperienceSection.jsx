import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experienceData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const card = cardsRef.current[index];
    
    if (card) {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const card = cardsRef.current[index];
    
    if (card) {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="section-padding relative">
      {/* Cool animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="padding-x-lg relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-white-50 text-xl mb-12">
          My professional journey and the projects I've worked on
        </p>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl" />
              
              {/* Animated gradient on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-xl opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />
              
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-blue-400/20 to-purple-400/20 rounded-xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Logo glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-400 rounded-full blur-lg transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-50" : "opacity-0"
                      }`} />
                      <img
                        src={exp.logoPath}
                        alt={exp.company}
                        className="relative w-20 h-20 md:w-24 md:h-24 object-contain rounded-full bg-white/5 p-3 border border-white/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-all duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-white-50 text-lg mb-2">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-white-50">
                          {exp.type && (
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></span>
                              {exp.type}
                            </span>
                          )}
                          {exp.location && (
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-white-50 text-sm md:text-base font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-white-50 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;