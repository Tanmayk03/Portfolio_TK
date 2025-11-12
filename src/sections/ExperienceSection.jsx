import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experienceData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="padding-x-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
        <p className="text-white-50 text-xl mb-12">
          My professional journey and the projects I've worked on
        </p>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-border rounded-xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={exp.logoPath}
                    alt={exp.company}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full bg-white/5 p-2 border border-white/10"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-white-50 text-lg mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-white-50">
                        {exp.type && (
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-white-50 rounded-full"></span>
                            {exp.type}
                          </span>
                        )}
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-white-50 rounded-full"></span>
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-white-50 text-sm md:text-base font-medium">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-white-50 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="hero-badge text-sm"
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

