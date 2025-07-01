import LogoSection from './components/logoSection'
import NavBar from './components/NavBar'
import ExperienceSection from './scetions/ExperienceSection'
import FeatureCards from './scetions/FeatureCards'
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
    </>
  )
}

export default App