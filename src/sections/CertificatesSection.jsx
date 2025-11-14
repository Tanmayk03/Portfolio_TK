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
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fbrm-certview.oracle.com%2Fords%2Fcertview%2Fecertificate%3Fssn%3DOC7384436%26trackId%3DOCI25DSOCP%26key%3D7456b31d5cc9d62aea3e3193a8aea25342b0ad96&urlhash=66MT&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "Completed July 2025 | Validity: Lifetime",
      duration: "~5 weeks",
      description: "Learned Generative AI fundamentals, prompt engineering, and Azure-based applications.",
      link: "https://www.linkedin.com/learning/certificates/a629b0d8cce38eb9ecfa0b4056fefb104562ea85e9949db22443fa606df7a96a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft & LinkedIn",
      date: "Completed July 2025 | Validity: Lifetime",
      duration: "~6 weeks",
      description: "Focused on Azure AI Studio, model training, and responsible AI development.",
      link: "https://www.linkedin.com/learning/certificates/40cdee8d1fa665fb3b0c2a9e5d3eb5f5c42bca7ee6c32ba547638dc5585b4ab1/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "Generative AI for Web Developers: AI-Powered Pair Programming",
      issuer: "LinkedIn Learning",
      date: "Completed August 2025 | Validity: Lifetime",
      duration: "~4 weeks",
      description: "Trained on AI-powered code generation, debugging, and workflow optimization for full-stack projects.",
      link: "https://www.linkedin.com/learning/certificates/fa87435c93e455a8bee2a19240f36166ddd6924f2686cde0d810fb8f533af852/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "Deloitte Australia – Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Completed May 2025 | Validity: Lifetime",
      duration: "~1 week",
      description: "Performed simulated data analysis, visualization, and business insights presentation.",
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fforage-uploads-prod.s3.amazonaws.com%2Fcompletion-certificates%2F9PBTqmSxAf6zZTseP%2Fio9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Ktf7Gvw6DrBjDue5o_1747905455500_completion_certificate.pdf&urlhash=eYcU&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "Application Development Internship",
      issuer: "Decrypton",
      date: "Completed August 2025 | Validity: Lifetime",
      duration: "3 months",
      description: "Developed a MERN-based hyperlocal delivery platform with real-time order management.",
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.credential.net%2Fc35442aa-c4c3-4892-922c-0fda1a4676f9&urlhash=mHdo&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "J.P. Morgan – Software Engineering Job Simulation",
      issuer: "JPMorgan Chase (Forage)",
      date: "Completed September 2025 | Validity: Lifetime",
      duration: "~1 week",
      description: "Simulated financial systems development and data visualization in Python.",
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.theforage.com%2Fcompletion-certificates%2FSj7temL583QAYpHXD%2FE6McHJDKsQYh79moz_Sj7temL583QAYpHXD_Ktf7Gvw6DrBjDue5o_1758982055091_completion_certificate.pdf&urlhash=IIyT&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "UI/UX Design Career Program",
      issuer: "HCL GUVI",
      date: "Completed September 2025 | Validity: Lifetime",
      duration: "~3 weeks",
      description: "Covered UI/UX principles, user research, and wireframing for digital products.",
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.guvi.in%2Fshare-certificate%2F5Qk31W0B996890701t&urlhash=hcH5&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
    },
    {
      title: "Git Essential Training",
      issuer: "LinkedIn Learning",
      date: "Completed July 2025 | Validity: Lifetime",
      duration: "~2 weeks",
      description: "Learned version control, Git commands, branching, and collaboration via GitHub.",
      link: "https://www.linkedin.com/learning/certificates/49a170bef5c9422250a309364aad1327d652443181ddd371f5cf28eae52cea7f/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQ3o7zEuwSO%2BUTn%2FcEtMyRg%3D%3D",
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
        <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="padding-x-lg relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />
              
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-cyan-400/30 rounded-xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                <div className="mb-4 flex-grow">
                  <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                      <p className="text-white-50 text-sm font-semibold">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
                      <p className="text-white-50 text-xs">{cert.date}</p>
                    </div>
                    <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                      <p className="text-white-50 text-xs">Duration: {cert.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-white-50 text-sm leading-relaxed">{cert.description}</p>
                </div>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 rounded-lg text-sm font-medium text-white transition-all duration-300 group/btn pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Certificate</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;