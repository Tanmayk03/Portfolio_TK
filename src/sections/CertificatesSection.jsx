import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
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
    <section id="certificates" ref={sectionRef} className="section-padding">
      <div className="padding-x-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates & Achievements</h2>
        <p className="text-white-50 text-xl mb-12">
          Professional certifications and notable achievements
        </p>

        <div className="grid-3-cols">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-border rounded-xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">🏆</span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-white-50 text-sm mb-1 font-semibold">Issued by: {cert.issuer}</p>
                  <p className="text-white-50 text-xs mb-2">{cert.date}</p>
                  <p className="text-white-50 text-xs mb-3">Duration: {cert.duration}</p>
                </div>
              </div>
              <p className="text-white-50 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

