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

const App = () => {
  return (
    <>
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
