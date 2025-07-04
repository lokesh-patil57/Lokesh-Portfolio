import LogoSection from './components/logoSection'
import NavBar from './components/NavBar'
import Contact from './scetions/Contact'
import ExperienceSection from './scetions/ExperienceSection'
import FeatureCards from './scetions/FeatureCards'
import Footer from './scetions/Footer'
import Hero from './scetions/Hero'
import ShowcaseSection from './scetions/ShowcaseSection'
import TechStack from './scetions/TechStack'
import Socials from './scetions/Socials'

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
    <Socials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App