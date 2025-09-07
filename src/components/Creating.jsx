import { useMediaQuery } from 'react-responsive'  // Hook zur Erkennung der Bildschirmgröße 
import { featureLists, goodLists } from '../../constants/index.js' // Import von Listen mit Features und Vorteilen, die im JSX gerendert werden
import { useGSAP } from '@gsap/react'; // GSAP-Hook für React, der Animationen mit Scroll-Trigger integriert
import gsap from 'gsap';

const Creating = () => {
    // Media-Query-Hook: Prüft, ob der Bildschirmbreite <= 767px entspricht (mobile Ansicht)
    const isMobile = useMediaQuery({maxWidth: 767});

    // GSAP-Hook: Definiert eine Timeline-Animation, die durch Scroll-Trigger aktiviert wird
    // Die Start-Position wird je nach mobile/desktop angepasst
    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top'; // Start-Trigger: Auf Mobile 20% vom Top, auf Desktop am oberen Rand

        // Erstellung einer GSAP-Timeline mit ScrollTrigger-Konfiguration
        // Trigger: Element mit ID 'creating'; End: Bottom-Center; Scrub: 1.5s Verzögerung; Pin: Element wird während der Animation fixiert
        const maskTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#creating',
                start,
                end:'bottom center',
                scrub: 1.5,
                pin: true,
            }
        })


        // Fade-Out der Elemente mit Klasse 'will-fade' mit Stagger-Effekt -> index.css -> @utility masked-img 
        // Skalierung und Masken-Anpassung des Bildes mit Klasse 'masked-img'
        // 3. Fade-In des Elements mit ID 'masked-content' (Opacity: 1)
        maskTimeline
        .to('.will-fade',{opacity: 0, stagger: 0.2, ease: 'power1.inOut'})
        .to('.masked-img',{scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut'})
        .to('#masked-content',{opacity: 1, duration: 1, ease: 'power1.inOut'})
    })
    // JSX-Render: Haupt-Container mit ID 'creating' für ScrollTrigger
    return (
        <div id="creating">
            {/* Zentrierter Container mit voller Höhe und Padding oben für Inhaltsstruktur */}
            <div className="container mx-auto h-full pt-20">
                {/* Klasse 'will-fade' für GSAP-Fade-Out */}
                <h2 className="will-fade">CREATING</h2>
                <div className="content">
                    {/* Erste Liste: Rendert 'goodLists'(aus index.js), Klasse 'will-fade' für Animation */}
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
{/* Bild-Container: Absolutes zentriertes Bild mit Maske und Klassen für GSAP-Skalierung */}
                    <div className="cocktail-img">
                        <img src="/images/under-img.jpg"
                        alt="the bartender makes a mojito"
                        className="abs-center masked-img size-full object-contain"
                        />
                    </div>

{/* Zweite Liste: Rendert 'featureLists'(aus index.js) , Klasse 'will-fade' für Animation */}
                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Überschrift und Inhalt, die durch GSAP eingeblendet werden */}
                <div className="masked-container">
                    {/* Überschrift mit Klasse 'will-fade' für Fade-Out */}
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    {/* ID 'masked-content' für GSAP-Fade-In*/}
                    <div className="masked-content"> 
<h3>Made with Craft, Poured with Passion</h3>
<p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creating