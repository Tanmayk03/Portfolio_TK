import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsData } from "../constants";
import ProjectModal from "../component/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );

    // Animations for each project card on scroll
    gsap.fromTo(
      ".animate-card",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#work",
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  const featuredProject = projectsData.find(p => p.featured);
  const gridProjects = projectsData.filter(p => !p.featured);

  return (
    <div id="work" ref={sectionRef} className="app-showcase relative">
      <div className="w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-cream font-heading mb-4 transition-colors duration-500">
            Featured <span className="font-serif italic font-light text-gold">Projects</span>
          </h2>
          <p className="text-charcoal max-w-xl mx-auto font-body text-sm md:text-base transition-colors duration-500">
            A curated showcase of applications I have built, demonstrating full-stack engineering, AI automation, and secure transactions.
          </p>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-gold/40 rounded-full transition-colors duration-500"></div>
        </div>

        <div className="showcaselayout">
          {/* Flagship Featured Project Card (Top) */}
          {featuredProject && (
            <div 
              onClick={() => setActiveProject(featuredProject)}
              className="first-project-wrapper animate-card relative group bg-card-bg border border-card-border hover:border-gold/20 p-6 md:p-8 rounded-2xl transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="image-wrapper shadow-2xl rounded-xl border border-card-border">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="text-content">
                <span className="text-xs uppercase tracking-wider font-semibold text-gold mb-2 block transition-colors duration-500">
                  Flagship Project
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cream font-heading mb-4 transition-colors duration-500">{featuredProject.title}</h2>
                <p className="text-charcoal text-sm md:text-base leading-relaxed font-body mb-6 transition-colors duration-500">{featuredProject.description}</p>
                
                {/* Details list */}
                {featuredProject.details && (
                  <ul className="mb-6 space-y-2 text-charcoal text-sm font-body list-disc pl-5 transition-colors duration-500">
                    {featuredProject.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-card-bg text-charcoal border border-card-border hover:border-gold/10 px-3 py-1 rounded-full font-body transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Buttons */}
                <div className="flex gap-4">
                  <a
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-charcoal hover:text-cream transition-all bg-card-bg border border-card-border hover:border-gold/20 px-4 py-2.5 rounded-lg"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-bg-primary font-semibold bg-gradient-to-r from-gold to-bronze hover:opacity-90 transition-all px-4 py-2.5 rounded-lg shadow-md shadow-gold/10"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Remaining 3 Projects */}
          <div className="projects-grid">
            {gridProjects.map((project) => (
              <div 
                key={project.title} 
                onClick={() => setActiveProject(project)}
                className="project-card animate-card relative group bg-card-bg border border-card-border hover:border-gold/20 p-6 rounded-2xl transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-gold/5 flex flex-col justify-between"
              >
                <div>
                  <div className="image-wrapper shadow-lg border border-card-border rounded-xl overflow-hidden mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-cream font-heading mb-3 transition-colors duration-500">{project.title}</h2>
                  <p className="text-charcoal text-sm leading-relaxed font-body mb-5 transition-colors duration-500">{project.description}</p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-card-bg text-charcoal border border-card-border hover:border-gold/10 px-2 py-0.5 rounded-full font-body transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-card-border transition-colors duration-500">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-charcoal hover:text-cream transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-gold hover:text-bright-gold transition-colors duration-300"
                    >
                      Live Demo
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
};

export default AppShowcase;