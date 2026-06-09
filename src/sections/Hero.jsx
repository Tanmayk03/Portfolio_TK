import Button from "../component/Button";
import { words } from "../constants";
import HeroExperience from "../component/HeroModels/HeroExperience";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../component/AnimatedCounter";

const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text-h1',
            {
                y:50,
                opacity:0},
                {
                    y:0,
                    opacity:1,
                    stagger:0.2,
                    duration:1,
                    ease:'power2.inOut',
            },
        )
    }, [])
  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      <div className="hero-layout">
        {/* Left Section */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 backdrop-blur-md text-xs md:text-sm text-[#c5a880] font-semibold mb-6 w-fit hover:border-[#c5a880]/40 transition-colors duration-300 pointer-events-auto">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a880] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a880]"></span>
            </span>
            Available for Internships & Full-time Roles
          </div>

          <div className="hero-text font-heading">
            <h1 className="hero-text-h1 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#f5f2eb] flex flex-wrap items-center gap-x-3">
              <span>Shaping</span>
              <span className="slide relative inline-flex items-center overflow-hidden">
                <span className="wrapper flex flex-col">
                  {words.map((word, index) => (
                    <span
                      key={`${word.text}-${index}`}
                      className="flex items-center gap-2 md:gap-3 h-[40px] md:h-[72px]"
                    >
                      <img
                        src={word.imgPath}
                        alt=""
                        className="xl:w-10 xl:h-10 md:w-8 md:h-8 w-6 h-6 object-contain rounded-full bg-slate-900/50 border border-white/10 p-1"
                      />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a880] via-[#f5f2eb] to-[#9c978e]">
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="hero-text-h1 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#f5f2eb] mt-1">
              into Real Projects
            </h1>
            <h1 className="hero-text-h1 text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-[#c5a880] font-serif italic mt-1">
              that Deliver Results
            </h1>
          </div>

          <div className="relative mt-8 z-10 pointer-events-none max-w-2xl">
            <p className="md:text-xl text-lg leading-relaxed text-[#a6a198] font-body font-normal">
              I turn <span className="font-semibold text-[#f5f2eb]">ideas</span> into fast, beautiful, and scalable web experiences
              <br className="hidden md:block" />
              powered by Java, C++, Python, JavaScript, and a modern full-stack toolkit
              <br className="hidden md:block" />
              including <span className="font-semibold text-[#c5a880]">React, Node, Express, MongoDB, Tailwind,</span> and <span className="font-semibold text-[#c5a880]">Vite</span>.
            </p>
            
            {/* Simple underline accent */}
            <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-[#c5a880] to-[#9c978e] rounded-full"></div>
          </div>

          <div className="mt-10 pointer-events-auto">
            <Button
              className="md:w-64 w-full"
              href="#work"
              text="See my work"
            />
          </div>
        </header>

        {/* Right Section */}
        <figure className="block w-full">
          <div className="hero-3d-layout pointer-events-none xl:pointer-events-auto">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
