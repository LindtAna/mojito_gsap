import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants/index.js";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'
        })

         timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 x: '50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})


    return (
        <footer id="contact">
            <img
                src="/images/footer-right-leaf.png"
                alt="green leaf"
                id="f-right-leaf"
            />

            <img
                src="/images/footer-left-leaf.png"
                alt="green leaf"
                id="f-left-leaf"
            />

            <div className="content">
                <h2>Where To Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Venloer Str, Cologne, 4711 </p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>(0211) 123-4567</p>
                    <p>hello@mintandlime.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>
                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((socials) => (
                            <a key={socials.name}
                                href={socials.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={socials.name}>
                                <img src={socials.icon} />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Contact