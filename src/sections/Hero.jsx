import Button from "../component/Button";
import { words } from "../constants";
import HeroExperience from "../component/HeroModels/HeroExperience";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../component/AnimatedCounter";

const Hero = ({ theme }) => {
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
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-md text-xs md:text-sm text-gold font-semibold mb-6 w-fit hover:border-gold/40 transition-colors duration-300 pointer-events-auto">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Available for Internships & Full-time Roles
          </div>

          <div className="hero-text font-heading">
            <h1 className="hero-text-h1 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-cream flex flex-wrap items-center gap-x-3 transition-colors duration-500">
              <span>Shaping</span>
              <span className="slide relative inline-flex items-center overflow-hidden">
                <span className="wrapper flex flex-col">
                  {words.map((word, index) => (
                    <span
                      key={`${word.text}-${index}`}
                      className="flex items-center gap-2 md:gap-3"
                      style={{ height: '1.15em' }}
                    >
                      <img
                        src={word.imgPath}
                        alt=""
                        className="w-[0.7em] h-[0.7em] object-contain rounded-full bg-card-bg border border-card-border p-1"
                      />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[var(--bright-gold)] to-bronze transition-colors duration-500">
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="hero-text-h1 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-cream mt-1 transition-colors duration-500">
              into Real Projects
            </h1>
            <h1 className="hero-text-h1 text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-gold font-serif italic mt-1 transition-colors duration-500">
              that Deliver Results
            </h1>
          </div>

          <div className="relative mt-8 z-10 pointer-events-none max-w-2xl">
            <p className="md:text-xl text-lg leading-relaxed text-charcoal font-body font-normal transition-colors duration-500">
              I turn <span className="font-semibold text-cream">ideas</span> into fast, beautiful, and scalable web experiences
              <br className="hidden md:block" />
              powered by Java, C++, Python, JavaScript, and a modern full-stack toolkit
              <br className="hidden md:block" />
              including <span className="font-semibold text-gold">React, Node, Express, MongoDB, Tailwind,</span> and <span className="font-semibold text-gold">Vite</span>.
            </p>
            
            {/* Simple underline accent */}
            <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-gold to-bronze rounded-full transition-colors duration-500"></div>
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
            {/* Subtle background glow behind the 3D canvas to make it blend soft and premium */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[var(--gold)]/8 blur-[80px] pointer-events-none z-0" />
            <div className="relative z-10 w-full h-full">
              <HeroExperience theme={theme} />
            </div>
          </div>
        </figure>
      </div>
      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
