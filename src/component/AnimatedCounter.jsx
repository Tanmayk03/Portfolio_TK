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

      // Handle CGPA/decimals or general numbers
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
        // For internship - just show the number without animation or animate to 1
        numberElement.textContent = `${item.value}`;
      } else if (item.suffix.includes("rd Year") || item.suffix.includes("st") || item.suffix.includes("nd") || item.suffix.includes("th")) {
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
      {/* Cool animated background matching purple/indigo theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="padding-x-lg relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">
          {counterItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => el && (countersRef.current[index] = el)}
              className="relative rounded-2xl p-5 md:p-8 flex flex-col justify-between overflow-hidden group cursor-pointer border border-card-border hover:border-violet-500/20 bg-[#0e0e10]/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-violet-900/5 transition-all duration-500 h-full min-h-[130px] md:min-h-[170px]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Animated gradient on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />
              
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-purple-400/10 via-indigo-400/10 to-blue-400/10 rounded-2xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="counter-number text-cream text-3xl md:text-5xl font-bold mb-2 md:mb-4 whitespace-nowrap">
                  {item.suffix === "" && item.label.includes("Internship") 
                    ? item.value 
                    : item.suffix.includes("rd Year") || item.suffix.includes("st") || item.suffix.includes("nd") || item.suffix.includes("th")
                    ? `${item.value}${item.suffix}`
                    : `0 ${item.suffix}`}
                </div>
                <div className="text-charcoal text-xs md:text-base leading-snug font-medium">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;