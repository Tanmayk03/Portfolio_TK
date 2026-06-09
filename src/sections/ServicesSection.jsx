import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      id: "01",
      title: "WEB DESIGN",
      description: "Crafting beautiful user interfaces, dynamic prototypes, and conversion-focused user journeys with premium dark aesthetics and micro-animations.",
      btnText: "ABOUT WEB DESIGN"
    },
    {
      id: "02",
      title: "DEVELOPMENT",
      description: "Building fast, secure, and scalable web applications using React, Node, Express, MongoDB, and modern toolkits like Vite and Tailwind.",
      btnText: "ABOUT WORKFLOW"
    },
    {
      id: "03",
      title: "AI & DATA SCIENCE",
      description: "Integrating machine learning models, automating data processing pipelines, and building intelligent apps like Kanban.AI.",
      btnText: "ABOUT SERVICES"
    }
  ];

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="services" ref={containerRef} className="section-padding relative py-20">
      <div className="padding-x-lg max-w-6xl mx-auto relative z-10">
        
        {/* Subtle Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c5a880] mb-3">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#f5f2eb]">
            My Services
          </h2>
          <div className="mt-4 w-12 h-px bg-[#c5a880]/40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-[#c5a880]/20 p-8 md:p-10 shadow-sm transition-all duration-500 flex flex-col justify-between min-h-[300px] cursor-pointer"
            >
              <div>
                {/* ID */}
                <span className="text-xs font-semibold tracking-wider text-[#c5a880] block mb-6 font-heading">
                  {service.id}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold tracking-wider text-[#f5f2eb] font-heading mb-4 group-hover:text-[#c5a880] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#a6a198] text-sm leading-relaxed font-body">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#a6a198] group-hover:text-[#f5f2eb] transition-colors duration-300">
                  {service.btnText}
                </span>
                
                {/* Arrow */}
                <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#c5a880] flex items-center justify-center transition-colors duration-300">
                  <svg
                    className="w-3.5 h-3.5 stroke-[#a6a198] group-hover:stroke-[#c5a880] transition-colors duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
