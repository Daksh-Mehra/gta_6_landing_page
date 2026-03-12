import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import Hero from "./section/Hero"
import Navbar from "./section/Navbar"
import FirstVideo from "./section/FirstVideo"
import Jason from "./section/Jason"
import SecondVideo from "./section/SecondVideo"
import Lucia from "./section/Lucia"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <FirstVideo />
        <Jason />
        <SecondVideo />
        <Lucia />
    </main>
  )
}

export default App