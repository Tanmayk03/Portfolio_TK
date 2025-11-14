import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      institution: "SRM University - Delhi NCR Campus",
      degree: "B.Tech in Computer Science (Data Science)",
      period: "August 2023 - May 2027",
      gpa: "8.34 GPA",
      status: "Pursuing",
    },
    {
      institution: "SKD Academy",
      degree: "High School Diploma",
      period: "2008 - 2023",
      gpa: null,
      status: "Completed",
    },
  ];

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
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
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
    <section id="education" ref={sectionRef} className="section-padding relative">
      {/* Cool animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg--500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="padding-x-lg relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-white-50 text-xl mb-12">
          My academic journey and qualifications
        </p>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
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
                className={`absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-xl opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />
              
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-violet-400/20 to-purple-400/20 rounded-xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-all duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-white-50 text-lg mb-3">{edu.degree}</p>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full"></span>
                      <p className="text-white-50 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    {edu.gpa && (
                      <span className="px-4 py-2 text-sm font-semibold bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                        {edu.gpa}
                      </span>
                    )}
                    <span className="text-white-50 text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                      {edu.status}
                    </span>
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

export default EducationSection;