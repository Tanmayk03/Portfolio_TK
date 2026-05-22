import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { testimonialsData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const testimonialsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    testimonialsRef.current.forEach((testimonial, index) => {
      if (testimonial) {
        gsap.fromTo(
          testimonial,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: testimonial,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding">
      <div className="padding-x-lg max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 font-heading">Testimonials</h2>
        <p className="text-slate-500 text-xl mb-12 font-body">
          What clients say about working with me
        </p>

        <div className="grid-3-cols gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialsRef.current[index] = el)}
              className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 hover:border-blue-200 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <img
                    key={i}
                    src="/images/gold-star.png"
                    alt="star"
                    className="w-5 h-5 drop-shadow-sm"
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed font-body italic">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-black/10"
                />
                <div>
                  <p className="font-semibold text-lg text-slate-800">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

