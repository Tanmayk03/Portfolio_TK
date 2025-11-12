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
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="padding-x-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-white-50 text-xl mb-8 text-center">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="mailto:tanmaykapoor003@gmail.com" 
              className="text-white-50 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-lg">📧</span>
              <span>tanmaykapoor003@gmail.com</span>
            </a>
            <a 
              href="tel:7905170353" 
              className="text-white-50 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-lg">📱</span>
              <span>+91 7905170353</span>
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              />
            </div>
            <a
              href="#"
              onClick={handleSubmit}
              className="block text-center"
            >
              Send Message
              <img
                src="/images/arrow-right.svg"
                alt="arrow"
                className="inline-block ml-2"
              />
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

