import LogoSection from './components/logoSection'
import NavBar from './components/NavBar'
import Contact from './scetions/Contact'
import ExperienceSection from './scetions/ExperienceSection'
import FeatureCards from './scetions/FeatureCards'
import Footer from './scetions/Footer'
import Hero from './scetions/Hero'
import ShowcaseSection from './scetions/ShowcaseSection'
import TechStack from './scetions/TechStack'
import Testimonials from './scetions/Testimonials'

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/> 
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App