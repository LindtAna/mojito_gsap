import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants/index.js"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "top top",
                scrub: true
            }
        });

        navTween.fromTo(
            "nav",
            { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
            {
                backgroundColor: "rgba(0,0,0,0.3)", 
                backdropFilter: "blur(5px)", 
                duration: 1,
                ease: "power1.inOut"
            }
        );
    });


    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Mint + Lime</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar