import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skillsData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

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

    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        gsap.fromTo(
          skill,
          { opacity: 0, scale: 0.8, rotation: -10 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: skill,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

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
              className="tech-card-content card-border rounded-xl p-6 group cursor-pointer"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-icon-wrapper">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
                />
              </div>
              <p className="text-xl font-semibold mb-2">{skill.name}</p>
              <p className="text-white-50 text-sm">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

