import React, { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0e0e10]/95 border border-card-border overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/55 border border-card-border text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[#060606] hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header Image */}
        <div className="w-full h-56 md:h-72 relative flex-shrink-0 bg-card-bg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] to-transparent opacity-80" />
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1 text-left font-body">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-[var(--gold)] mb-1 block">
              {project.featured ? "Flagship Project" : "Project Details"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--cream)] font-heading leading-tight">
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[var(--charcoal)]">
              Overview
            </h4>
            <p className="text-[var(--charcoal)] text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Details / Bullet points */}
          {project.details && project.details.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[var(--charcoal)]">
                Key Contributions & Features
              </h4>
              <ul className="space-y-2.5 text-sm md:text-base text-[var(--charcoal)] list-disc pl-5 leading-relaxed">
                {project.details.map((detail, index) => (
                  <li key={index} className="pl-1">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies tag list */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[var(--charcoal)]">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-card-bg text-[var(--charcoal)] border border-card-border px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-card-border">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--charcoal)] hover:text-[var(--cream)] transition-all bg-card-bg border border-card-border hover:border-[var(--gold)]/20 px-5 py-3 rounded-lg font-medium cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Source Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[#060606] font-semibold bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] hover:opacity-90 transition-all px-5 py-3 rounded-lg shadow-md shadow-gold/10 cursor-pointer"
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
    </div>
  );
};

export default ProjectModal;
