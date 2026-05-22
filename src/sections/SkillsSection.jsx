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
          accent: "bg-blue-500",
          border: "hover:border-blue-500/30",
          shadow: "hover:shadow-blue-500/10",
          text: "text-blue-400 border-blue-500/20",
          bg: "bg-blue-500/10"
        };
      case "Frontend":
        return {
          accent: "bg-purple-500",
          border: "hover:border-purple-500/30",
          shadow: "hover:shadow-purple-500/10",
          text: "text-purple-400 border-purple-500/20",
          bg: "bg-purple-500/10"
        };
      case "Backend":
        return {
          accent: "bg-violet-500",
          border: "hover:border-violet-500/30",
          shadow: "hover:shadow-violet-500/10",
          text: "text-violet-400 border-violet-500/20",
          bg: "bg-violet-500/10"
        };
      case "Databases":
        return {
          accent: "bg-emerald-500",
          border: "hover:border-emerald-500/30",
          shadow: "hover:shadow-emerald-500/10",
          text: "text-emerald-400 border-emerald-500/20",
          bg: "bg-emerald-500/10"
        };
      case "Tools":
        return {
          accent: "bg-rose-500",
          border: "hover:border-rose-500/30",
          shadow: "hover:shadow-rose-500/10",
          text: "text-rose-400 border-rose-500/20",
          bg: "bg-rose-500/10"
        };
      default:
        return {
          accent: "bg-indigo-500",
          border: "hover:border-indigo-500/30",
          shadow: "hover:shadow-indigo-500/10",
          text: "text-indigo-400 border-indigo-500/20",
          bg: "bg-indigo-500/10"
        };
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative">
      {/* Decorative dark theme background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="padding-x-lg relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent text-center font-heading">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-16 text-center font-light">
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
                className={`animate-skill-group bg-[#0e0e10]/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 ${styles.border} ${styles.shadow} transition-all duration-500`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5 pb-2 border-b border-white/5">
                  <h3 className="text-lg font-bold text-slate-100 font-heading tracking-wide">
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
                      className="flex items-center justify-between bg-white/[0.02] border border-white/[0.05] hover:border-white/10 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/[0.06] group cursor-pointer"
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
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      
                      {/* Mini visual indicator */}
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1 bg-white/15 rounded-full overflow-hidden">
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