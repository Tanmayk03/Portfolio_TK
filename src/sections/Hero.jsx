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
    })
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>

      <div className="hero-layout">
        {/* Left Section */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="hero-text">
            <h1>
              Shaping{" "}
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={`${word.text}-${index}`}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-6 h-6 md:p-2 p-1 rounded-full"
                      />
                      {word.text}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>

          <p className="md:text-xl relative z-10 pointer-events-none mt-6" style={{ color: 'var(--color-white-50)' }}>
  Full-stack developer skilled in <br className="hidden md:block" />
  Java, C++, JavaScript, React.js, Node.js, Express.js, MongoDB, Redux, HTML, <br className="hidden md:block" />
  CSS, Tailwind CSS, and Vite. Experienced in building responsive web apps, <br className="hidden md:block" />
  Chrome extensions, and API integrations.
</p>
          <Button
            className="md:w-80 md:h-16 h-12 mt-6"
            href="#work"
            text="See my work"
          />
        </header>

        {/* Right Section */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
