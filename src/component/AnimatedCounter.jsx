import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Handle CGPA differently (has decimal suffix)
      if (item.suffix.startsWith(".")) {
        gsap.set(numberElement, { innerText: "0" });
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 0.01 },
          scrollTrigger: {
            trigger: "#counter",
            start: "top center",
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        });
      } else if (item.suffix === "" && item.label.includes("Internship")) {
        // For internship - just show the number without animation
        numberElement.textContent = `${item.value}`;
      } else if (item.suffix.includes("rd Year") || item.suffix.includes("st") || item.suffix.includes("nd") || item.suffix.includes("th")) {
        // For ordinal numbers like "3rd Year" - animate and show with suffix
        gsap.set(numberElement, { innerText: "0" });
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: "#counter",
            start: "top center",
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        });
      } else {
        // Set initial value to 0
        gsap.set(numberElement, { innerText: "0" });

        // Create the counting animation
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 }, // Ensures whole numbers
          scrollTrigger: {
            trigger: "#counter",
            start: "top center",
          },
          // Add the suffix after counting is complete
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        });
      }
    }, counterRef);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const card = countersRef.current[index];
    
    if (card) {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const card = countersRef.current[index];
    
    if (card) {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div id="counter" ref={counterRef} className="section-padding relative">
      {/* Cool animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      <div className="padding-x-lg relative z-10">
        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-4-cols">
          {counterItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => el && (countersRef.current[index] = el)}
              className="relative rounded-lg p-10 flex flex-col justify-center overflow-hidden group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg" />
              
              {/* Animated gradient on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />
              
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-teal-400/20 via-cyan-400/20 to-blue-400/20 rounded-lg blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10">
                <div className="counter-number text-white text-5xl font-bold mb-2">
                  {item.suffix === "" && item.label.includes("Internship") 
                    ? item.value 
                    : item.suffix.includes("rd Year") || item.suffix.includes("st") || item.suffix.includes("nd") || item.suffix.includes("th")
                    ? `${item.value}${item.suffix}`
                    : `0 ${item.suffix}`}
                </div>
                <div className="text-white-50 text-lg leading-tight">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide smooth-scroll">
          <div className="flex gap-3 pb-4">
            {counterItems.map((item, index) => (
              <div
                key={`mobile-${index}`}
                className="relative rounded-lg p-6 flex flex-col justify-center overflow-hidden group cursor-pointer min-w-[160px] flex-shrink-0"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg" />
                
                {/* Animated gradient on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : ""
                  }`}
                />
                
                {/* Glow effect on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-teal-400/20 via-cyan-400/20 to-blue-400/20 rounded-lg blur-xl transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10">
                  <div className="counter-number text-white text-3xl font-bold mb-2">
                    {item.suffix === "" && item.label.includes("Internship") 
                      ? item.value 
                      : item.suffix.includes("rd Year") || item.suffix.includes("st") || item.suffix.includes("nd") || item.suffix.includes("th")
                      ? `${item.value}${item.suffix}`
                      : `0 ${item.suffix}`}
                  </div>
                  <div className="text-white-50 text-sm leading-tight">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .smooth-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
};

export default AnimatedCounter;