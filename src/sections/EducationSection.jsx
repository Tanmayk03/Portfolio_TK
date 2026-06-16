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
      gpa: "8.53 CGPA",
      status: "Pursuing",
    },
    {
      institution: "SKD Academy",
      degree: "Senior Secondary (ICSE)",
      period: "2021 - 2023",
      gpa: "79.5%",
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
      <div className="padding-x-lg relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--gold)] via-[var(--cream)] to-[var(--bronze)] bg-clip-text text-transparent font-heading">
          Education
        </h2>
        <p className="text-[var(--charcoal)] text-lg md:text-xl mb-12 font-body">
          My academic journey and qualifications.
        </p>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative rounded-2xl overflow-hidden group cursor-pointer bg-card-bg border border-card-border shadow-sm hover:border-[var(--gold)]/20 hover:shadow-lg hover:shadow-amber-950/5 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Animated gradient on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-[var(--bronze)]/5 opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />

              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 text-[var(--cream)] font-heading">
                      {edu.institution}
                    </h3>
                    <p className="text-[var(--charcoal)] text-lg mb-3 font-medium">{edu.degree}</p>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] rounded-full"></span>
                      <p className="text-[var(--charcoal)] text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    {edu.gpa && (
                      <span className="px-4 py-2 text-sm font-semibold bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 rounded-full hover:bg-[var(--gold)]/20 transition-all duration-300">
                        {edu.gpa}
                      </span>
                    )}
                    <span className="text-[var(--charcoal)] text-sm bg-card-bg border border-card-border rounded-full px-3 py-1 font-medium mt-1 md:mt-0">
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