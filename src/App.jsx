import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavBar from "./component/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import SkillsSection from "./sections/SkillsSection.jsx"
import EducationSection from "./sections/EducationSection.jsx"
import CertificatesSection from "./sections/CertificatesSection.jsx"
import ContactSection from "./sections/ContactSection.jsx"
import Footer from "./component/Footer.jsx"
import GlobalBackground from "./component/GlobalBackground.jsx"
import ScrollProgressBar from "./component/ScrollProgressBar.jsx"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on("scroll", ScrollTrigger.update)

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    gsap.ticker.lagSmoothing(1000, 16)

    // Intercept all anchor clicks for smooth scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a")
      if (!anchor) return
      
      const href = anchor.getAttribute("href")
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          lenis.scrollTo(target, {
            offset: -80, // Align with css scroll-margin-top
            duration: 1.2,
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("click", handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <ScrollProgressBar />
      {/* Global animated background for all pages */}
      <GlobalBackground />
      
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
