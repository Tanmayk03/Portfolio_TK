import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    const anim = gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-[3px] w-full z-[200] origin-left scale-x-0"
      style={{
        background:
          "linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #3b82f6 100%)",
      }}
    />
  );
};

export default ScrollProgressBar;
