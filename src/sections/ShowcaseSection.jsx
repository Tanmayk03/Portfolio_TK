import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project111.png.jpg" alt="Hyperlocal Delivery Application" />
            </div>
            <div className="text-content">
              <h2>
                Hyperlocal Delivery Application
              </h2>
              <p className="text-white-50 md:text-xl">
                Developed a hyperlocal delivery application replicating core functionalities such as product browsing, cart management, user authentication, and real-time order placement, simulating an online grocery delivery platform.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="hero-badge text-sm">React.js</span>
                <span className="hero-badge text-sm">Node.js</span>
                <span className="hero-badge text-sm">Express.js</span>
                <span className="hero-badge text-sm">MongoDB</span>
                <span className="hero-badge text-sm">Redux</span>
                <span className="hero-badge text-sm">Tailwind CSS</span>
                <span className="hero-badge text-sm">Vite</span>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Pause-to-Code Extension"
                />
              </div>
              <h2>Pause-to-Code Extension (CodioPause)</h2>
              <p className="text-white-50 text-sm mt-2">
                Automatically pauses YouTube videos for code copying or note-taking with live study tracking and session stats.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="hero-badge text-xs">JavaScript</span>
                <span className="hero-badge text-xs">HTML</span>
                <span className="hero-badge text-xs">CSS</span>
                <span className="hero-badge text-xs">Chrome Extension APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;