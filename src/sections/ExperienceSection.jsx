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
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
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
      <div className="padding-x-lg relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-heading">
          Experience
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-16 font-light">
          My professional journey and the roles I have undertaken.
        </p>

        <div className="relative border-l border-white/10 ml-6 md:ml-10 space-y-12">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative pl-8 md:pl-12 group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute left-[-9px] top-8 w-4 h-4 rounded-full border-2 transition-all duration-500 z-10 ${
                  hoveredIndex === index 
                    ? "bg-indigo-500 border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.6)] scale-125" 
                    : "bg-[#030014] border-white/20"
                }`}
              />
              
              <div className="flex flex-col md:flex-row md:items-start gap-6 bg-[#0e0e10]/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-900/5">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={exp.logoPath}
                      alt={exp.company}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl bg-white/5 p-3 border border-white/5 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:shadow-md"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-heading">
                        {exp.title}
                      </h3>
                      <p className="text-indigo-400 font-medium text-sm md:text-base mt-1">{exp.company}</p>
                    </div>
                    <span className="text-slate-300 text-xs md:text-sm font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                      {exp.date}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                    {exp.type && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                        {exp.type}
                      </span>
                    )}
                    {exp.location && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                        {exp.location}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed font-normal">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/5 rounded-full transition-all duration-300 group-hover:border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
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