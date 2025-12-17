import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import Cocktails from './components/Cocktails.tsx'
import About from './components/About.tsx'
import Art from './components/Art.tsx'
import Menu from './components/Menu.tsx'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  )
}

export default App
