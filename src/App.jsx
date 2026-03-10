import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import Hero from "./section/Hero"
import Navbar from "./section/Navbar"
import FirstVideo from "./section/FirstVideo"
import Jason from "./section/Jason"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <FirstVideo />
        <Jason />
    </main>
  )
}

export default App