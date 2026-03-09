import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import Hero from "./section/Hero"
import Navbar from "./section/Navbar"
import FirstVideo from "./section/FirstVideo"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <FirstVideo />
    </main>
  )
}

export default App