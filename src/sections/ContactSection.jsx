import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative">
      <div className="padding-x-lg relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[var(--gold)] via-[var(--cream)] to-[var(--bronze)] bg-clip-text text-transparent font-heading">
          Get In Touch
        </h2>
        <p className="text-[var(--charcoal)] text-lg md:text-xl mb-8 text-center font-body">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <a 
            href="mailto:tanmaykapoor003@gmail.com" 
            className="text-[var(--charcoal)] hover:text-[var(--gold)] transition-all duration-300 flex items-center gap-2.5 font-medium bg-card-bg border border-card-border hover:border-[var(--gold)]/20 rounded-full px-6 py-2.5 backdrop-blur-sm"
          >
            <span className="text-lg">📧</span>
            <span>tanmaykapoor003@gmail.com</span>
          </a>
          <a 
            href="tel:7905170353" 
            className="text-[var(--charcoal)] hover:text-[var(--gold)] transition-all duration-300 flex items-center gap-2.5 font-medium bg-card-bg border border-card-border hover:border-[var(--gold)]/20 rounded-full px-6 py-2.5 backdrop-blur-sm"
          >
            <span className="text-lg">📱</span>
            <span>+91 7905170353</span>
          </a>
        </div>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-card-bg p-8 md:p-10 rounded-2xl border border-card-border hover:border-[var(--gold)]/20 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <div>
            <label htmlFor="name" className="text-[var(--charcoal)] font-medium text-sm">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-card-bg border border-card-border text-[var(--cream)] placeholder-neutral-600 focus:border-[var(--gold)]/40 focus:ring-1 focus:ring-[var(--gold)]/30 rounded-lg p-3.5 outline-none transition-all mt-1.5"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[var(--charcoal)] font-medium text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full bg-card-bg border border-card-border text-[var(--cream)] placeholder-neutral-600 focus:border-[var(--gold)]/40 focus:ring-1 focus:ring-[var(--gold)]/30 rounded-lg p-3.5 outline-none transition-all mt-1.5"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-[var(--charcoal)] font-medium text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="6"
              required
              className="w-full bg-card-bg border border-card-border text-[var(--cream)] placeholder-neutral-600 focus:border-[var(--gold)]/40 focus:ring-1 focus:ring-[var(--gold)]/30 rounded-lg p-3.5 outline-none transition-all mt-1.5 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] hover:opacity-90 text-black font-bold rounded-lg flex justify-center items-center gap-2 shadow-lg shadow-amber-950/20 transition-all duration-300 cursor-pointer group"
          >
            <span>Send Message</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

