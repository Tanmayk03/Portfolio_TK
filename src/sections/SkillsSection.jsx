import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skillsData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);

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

    // Group cards animation
    gsap.fromTo(
      ".animate-skill-group",
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Group skills by category
  const categories = ["Languages", "Frontend", "Backend", "Databases", "Tools"];
  const groupedSkills = skillsData.reduce((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  // Progress width based on skill level
  const getLevelWidth = (level) => {
    const l = level?.toLowerCase() || "";
    if (l.includes("advanced")) return "w-[90%]";
    if (l.includes("beginner–intermediate") || l.includes("beginner-intermediate")) return "w-[55%]";
    if (l.includes("intermediate")) return "w-[75%]";
    if (l.includes("beginner")) return "w-[35%]";
    return "w-[60%]";
  };

  // Color mapping based on category
  const getCategoryStyles = (category) => {
    switch (category) {
      case "Languages":
        return {
          accent: "bg-[#c5a880]",
          border: "hover:border-[#c5a880]/30",
          shadow: "hover:shadow-[#c5a880]/5",
          text: "text-[#c5a880] border-[#c5a880]/20",
          bg: "bg-[#c5a880]/10"
        };
      case "Frontend":
        return {
          accent: "bg-[#e6dfd5]",
          border: "hover:border-[#e6dfd5]/30",
          shadow: "hover:shadow-[#e6dfd5]/5",
          text: "text-[#e6dfd5] border-[#e6dfd5]/20",
          bg: "bg-white/[0.04]"
        };
      case "Backend":
        return {
          accent: "bg-[#9c978e]",
          border: "hover:border-[#9c978e]/30",
          shadow: "hover:shadow-[#9c978e]/5",
          text: "text-[#9c978e] border-[#9c978e]/20",
          bg: "bg-[#9c978e]/10"
        };
      case "Databases":
        return {
          accent: "bg-[#d4af37]",
          border: "hover:border-[#d4af37]/30",
          shadow: "hover:shadow-[#d4af37]/5",
          text: "text-[#d4af37] border-[#d4af37]/20",
          bg: "bg-[#d4af37]/10"
        };
      case "Tools":
        return {
          accent: "bg-[#a6a198]",
          border: "hover:border-[#a6a198]/30",
          shadow: "hover:shadow-[#a6a198]/5",
          text: "text-[#a6a198] border-[#a6a198]/20",
          bg: "bg-white/[0.02]"
        };
      default:
        return {
          accent: "bg-[#c5a880]",
          border: "hover:border-[#c5a880]/30",
          shadow: "hover:shadow-[#c5a880]/5",
          text: "text-[#c5a880] border-[#c5a880]/20",
          bg: "bg-[#c5a880]/10"
        };
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative">
      {/* Decorative dark theme background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="padding-x-lg relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c5a880] via-[#f5f2eb] to-[#9c978e] bg-clip-text text-transparent text-center font-heading">
          Skills & Technologies
        </h2>
        <p className="text-[#a6a198] text-lg md:text-xl mb-16 text-center font-light">
          My technical toolkit and the languages, libraries, and frameworks I use.
        </p>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((category) => {
            const skills = groupedSkills[category] || [];
            if (skills.length === 0) return null;
            const styles = getCategoryStyles(category);

            return (
              <div
                key={category}
                className={`animate-skill-group bg-white/[0.01] border border-white/[0.04] rounded-2xl p-6 ${styles.border} ${styles.shadow} transition-all duration-500`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5 pb-2 border-b border-white/[0.04]">
                  <h3 className="text-lg font-bold text-[#f5f2eb] font-heading tracking-wide">
                    {category === "Frontend" ? "Frontend Development" : category === "Backend" ? "Backend Development" : category}
                  </h3>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${styles.text} ${styles.bg}`}>
                    {skills.length} Skills
                  </span>
                </div>

                {/* Badges container */}
                <div className="flex flex-col gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white/[0.005] border border-white/[0.03] hover:border-[#c5a880]/20 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/[0.03] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = "/images/code.svg";
                          }}
                        />
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-semibold text-[#a6a198] group-hover:text-[#f5f2eb] transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-neutral-500 group-hover:text-[#a6a198] transition-colors duration-300">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      
                      {/* Mini visual indicator */}
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${styles.accent} rounded-full transition-all duration-500 ${getLevelWidth(skill.level)}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;