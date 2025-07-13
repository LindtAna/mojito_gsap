import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Creating from './components/Creating';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return(
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Creating />
        </main>
    )
}

export default App