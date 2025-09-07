"use client";
import { useRef, useState } from "react";
import { allCocktails } from "../../constants/index.js"; // Import der Liste aller Cocktails aus Constants (Array mit Objekten: id, name, image, title, description)
import { useGSAP } from "@gsap/react"; // GSAP-Hook für React-Integration von Animationen
import gsap from "gsap";
import { useSwipeable } from "react-swipeable";  // Hook für Touch-/Mouse-Swipe-Events (für mobile Navigation)
import { useMediaQuery } from 'react-responsive'; // Hook zur Erkennung der Bildschirmgröße (für mobile-spezifische Swipe-Aktivierung)

// Komponente für das Menu: Zeigt Cocktails in einer tab-basierten Slider-Struktur mit Animationen
const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0); // State: Aktueller Index des angezeigten Cocktails (startet bei 0)
    
// GSAP-Hook: Triggered bei Änderung von currentIndex; animiert Fade-In-Effekte für Titel, Bild und Details
    useGSAP(() => {
// Fade-In des Titels mit ID 'title'
gsap.fromTo('#title', {opacity: 0}, {opacity:1, duration: 1});
// Slide-In des Cocktail-Bildes von links (xPercent: -100 nach 0)
gsap.fromTo('.cocktail img', {opacity: 0, xPercent: -100}, {opacity:1, xPercent: 0, duration: 1, ease: 'power1.inOut'}); 
// Slide-Up und Fade-In der Details-Überschrift
gsap.fromTo('.details h2', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity:1, ease: 'power1.inOut'});
// Slide-Up und Fade-In der Details-Beschreibung
gsap.fromTo('.details p', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity:1, ease: 'power1.inOut'});
    }, [currentIndex]); // Läuft bei jedem Index-Wechsel neu

    // Konstante: Gesamtzahl der Cocktails aus dem index.js -> const allCocktails
    const totalCocktails = allCocktails.length;

    // FNavigiert zu einem neuen Index 
    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails; // Modulo-Operation für Loop (vermeidet negative Indizes)
        setCurrentIndex(newIndex); // Updated State, triggert GSAP-Animation
    };


    // Media-Query-Hook: Prüft mobile Ansicht (<= 767px) für Swipe-Beschränkung
    const isMobile = useMediaQuery({ maxWidth: 767 }); 

// Swipe-Handler: Konfiguriert useSwipeable-Hook
// onSwipedLeft: Nächster Cocktail (Index +1); onSwipedRight: Vorheriger (Index -1)
// Nur auf Mobile aktiviert; trackMouse: Ermöglicht Drag auf Desktop; delta: Mindest-Swipe-Distanz (50px)
const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (isMobile) { 
                goToSlide(currentIndex + 1);
            }
        },
        onSwipedRight: () => {
            if (isMobile) { 
                goToSlide(currentIndex - 1);
            }
        },
        trackMouse: true, // Optional: Unterstützt Mouse-Drag auf Desktop
        delta: 50, // Mindestdistanz für Swipe-Erkennung (vermeidet Zufalls-Swipes)
        preventDefaultTouchmoveEvent: false, // Erlaubt Page-Scroll während Swipe (kein Block)
    });

    // Hilfsfunktion: Ermittelt den Cocktail, der indexOffset Plätze vom aktuellen entfernt ist – bei Überlauf wird am Anfang weitergemacht
    const getCocktailAt = (indexOffset) => {
        return allCocktails[
            (currentIndex + indexOffset + totalCocktails) % totalCocktails // stellt den Rundlauf sicher
        ];
    };

    // Aktuelle, vorherige und nächste Cocktails basierend auf currentIndex
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            {/* Dekorative Blätter-Bilder links/rechts für visuelles Design */}
            <img
                src="/images/slider-left-leaf.png"
                alt="green leaf near the menu"
                id="m-left-leaf"
            />
            <img
                src="/images/slider-right-leaf.png"
                alt="green leaf near the menu"
                id="m-right-leaf"
            />
            {/* Screen-Reader-only Überschrift für ARIA */}
            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
{/* Navigations-Tabs: Rendert Buttons für jeden Cocktail, aktiver Tab hervorgehoben */}
            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex; // Prüft, ob Index aktuell ist

                    return (
                        <button
                            key={cocktail.id} // Eindeutiger Schlüssel aus dem Cocktail-Objekt
                            className={`${isActive
                                    ? "text-amber-50 border-amber-50"  // Aktiv: 100% Deckkraft
                                    : "text-amber-50/50 border-amber-50/50" // Inaktiv: 50 % Deckkraft
                                }`}
                            onClick={() => goToSlide(index)} // Klick-Handler: Wechselt zu spezifischem Index
                        >
                            {cocktail.name}
                        </button>
                    );
                })}
            </nav>
            {/* Haupt-Content-Container mit Swipe-Handlers */}
            <div className="content" {...handlers}>
                {/* Pfeil-Buttons: Links für vorherigen, rechts für nächsten Cocktail */}
                <div className="arrows">
                    <button
                        className="text-left"
                        onClick={() => goToSlide(currentIndex - 1)} // Klick: Vorheriger Index
                    >
                        <span>{prevCocktail.name}</span>
                        <img
                            src="/images/right-arrow.png"
                            alt="right arrow of menu"
                            aria-hidden="true"  // Versteckt für Screen-Reader
                        />
                    </button>

                    <button
                        className="text-left"
                        onClick={() => goToSlide(currentIndex + 1)} // Klick: Nächster Index
                    >
                        <span>{nextCocktail.name}</span> {/* Name des nächsten Cocktails */}
                        <img
                            src="/images/left-arrow.png"
                            alt="left arrow of menu"
                            aria-hidden="true" // Versteckt für Screen-Reader
                        />
                    </button>
                </div>
                {/* Aktuelles Cocktail-Bild: Object-contain für responsive Skalierung */}
                <div className="cocktail">
                    <img src={currentCocktail.image} className="object-contain" />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p> {/* Dynamischer Titel, animiert via GSAP */}
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2> {/* Dynamische Überschrift */}
                        <p>{currentCocktail.description}</p> {/* Dynamische Beschreibung */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
