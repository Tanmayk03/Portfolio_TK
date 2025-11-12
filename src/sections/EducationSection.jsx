import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
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
    <section id="education" ref={sectionRef} className="section-padding">
      <div className="padding-x-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
        <p className="text-white-50 text-xl mb-12">
          My academic journey and qualifications
        </p>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-border rounded-xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-white-50 text-lg mb-2">{edu.degree}</p>
                  <p className="text-white-50 text-sm">{edu.period}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  {edu.gpa && (
                    <span className="hero-badge text-sm font-semibold">
                      {edu.gpa}
                    </span>
                  )}
                  <span className="text-white-50 text-sm">{edu.status}</span>
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

