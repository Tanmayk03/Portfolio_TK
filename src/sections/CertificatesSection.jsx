import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certificatesData = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      date: "Completed October 2025 | Valid till October 2027",
      duration: "~8 weeks",
      description: "Gained hands-on experience in Oracle AI & Data Science tools, cloud analytics, and ML model deployment.",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "Completed July 2025 | Validity: Lifetime",
      duration: "~5 weeks",
      description: "Learned Generative AI fundamentals, prompt engineering, and Azure-based applications.",
    },
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft & LinkedIn",
      date: "Completed July 2025 | Validity: Lifetime",
      duration: "~6 weeks",
      description: "Focused on Azure AI Studio, model training, and responsible AI development.",
    },
    {
      title: "Generative AI for Web Developers: AI-Powered Pair Programming",
      issuer: "LinkedIn Learning",
      date: "Completed August 2025 | Validity: Lifetime",
      duration: "~4 weeks",
      description: "Trained on AI-powered code generation, debugging, and workflow optimization for full-stack projects.",
    },
    {
      title: "Deloitte Australia – Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Completed May 2025 | Validity: Lifetime",
      duration: "~1 week",
      description: "Performed simulated data analysis, visualization, and business insights presentation.",
    },
    {
      title: "Application Development Internship",
      issuer: "Decrypton",
      date: "Completed August 2025 | Validity: Lifetime",
      duration: "3 months",
      description: "Developed a MERN-based hyperlocal delivery platform with real-time order management.",
    },
    {
      title: "J.P. Morgan – Software Engineering Job Simulation",
      issuer: "JPMorgan Chase (Forage)",
      date: "Completed September 2025 | Validity: Lifetime",
      duration: "~1 week",
      description: "Simulated financial systems development and data visualization in Python.",
    },
    {
      title: "UI/UX Design Career Program",
      issuer: "HCL GUVI",
      date: "Completed September 2025 | Validity: Lifetime",
      duration: "~3 weeks",
      description: "Covered UI/UX principles, user research, and wireframing for digital products.",
    },
    {
      title: "Git Essential Training",
      issuer: "LinkedIn Learning",
      date: "Completed July 2025 | Validity: Lifetime",
      duration: "~2 weeks",
      description: "Learned version control, Git commands, branching, and collaboration via GitHub.",
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
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.08,
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
        scale: 1.03,
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
    <section id="certificates" ref={sectionRef} className="section-padding relative">
      {/* Cool animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="padding-x-lg relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
          Certificates & Achievements
        </h2>
        <p className="text-white-50 text-xl mb-12">
          Professional certifications and notable achievements
        </p>

        <div className="grid-3-cols">
          {certificatesData.map((cert, index) => (
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
                className={`absolute inset-0 bg-gradient-to-br from-amber-500/20 via-rose-500/20 to-orange-500/20 rounded-xl opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />
              
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-amber-400/20 via-rose-400/20 to-orange-400/20 rounded-xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10 p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight">
                    {cert.title}
                  </h3>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></span>
                    <p className="text-white-50 text-sm font-semibold">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full"></span>
                    <p className="text-white-50 text-xs">{cert.date}</p>
                  </div>
                  <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                    <p className="text-white-50 text-xs">Duration: {cert.duration}</p>
                  </div>
                </div>
                
                <p className="text-white-50 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;