# Mint + Lime

## Live Demo

https://mojito-gsap-ruby.vercel.app/

## Projektbeschreibung

GSAP-gesteuerte Cocktail-Website mit React und Tailwind CSS – ein scrollgesteuertes Erlebnis voller Animationen.

Dynamische SplitText-Enthüllungen, flüssiges Parallax-Scrollen und ScrollTrigger-Effekte sorgen für visuelle Highlights.

Abschnitte werden mit festgesetzten Animationen versehen, Videos lassen sich nahtlos an die Scroll-Position koppeln und Bildmaskierungen verstärken den Eindruck.

Ein maßgeschneidertes animiertes Karussell und durchgehende Timeline-Animationen über alle Sektionen runden die voll responsive Benutzeroberfläche ab.

## Design

Die Benutzeroberfläche ist responsiv und modular aufgebaut.

### Design in Figma

Das UI-Design basiert auf folgendem Figma-Template:  
https://www.figma.com/design/MByXaI8pcleIbgTvsDat1X/Cocktail-GSAP-Website?node-id=2-2&p=f&t=ec946Q9awcYqOesl-0

## Funktionalität / Features

- Dynamische Text-Enthüllungen mit GSAP SplitText für ansprechende Intros und Abschnitts-Highlights
- Scrollbasierte Animationen und Timeline-Steuerung mit GSAP ScrollTrigger
- Flüssige Parallax-Effekte, die auf das Scrollverhalten reagieren
- Festgesetzte Abschnitte, in denen Inhalte animiert werden, während sie fixiert bleiben
- Synchronisierte Videowiedergabe basierend auf der Scroll-Position
- Scrollgetriggerte Pins und Maskierungen für eindrucksvolle Bildübergänge
- Individuelles Karussell mit mehreren Navigationsoptionen und animierten Slides
- Durchgängige Zeitachsenanimationen über mehrere Sektionen hinweg
- Fließende UI und adaptive GSAP-Animationen für alle Bildschirmgrößen

## Projektstruktur

Mint+Lime ist nach funktionalen Bereichen in Ordnern organisiert:

- **public**  
  Schriftarten, Icons, Videos und statische Dateien.

- **src**  
  Quellcode der Anwendung.

- **components**  
  Komponenten für einzelne Sektionen der App.

- **App.jsx**  
  Hauptkomponente, die GSAP-Plugins registriert und alle Sektionen rendert.

- **index.css**  
  Globale Styles und CSS-Variablen.

```
mojito_gsap/
├── constants/
│   └── index.js
├── public/
│   ├── fonts/
│   ├── images/
│   └── videos/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Cocktails.jsx
│   │   ├── Contact.jsx
│   │   ├── Creating.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
└── index.html
```

## Technologie-Stack

| Technologie   | Beschreibung                                                                                                                                                                   |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GSAP         | JavaScript-Animationsbibliothek für dynamische, scrollgesteuerte Visuals; nutzt SplitText, ScrollTrigger, Parallax-Scrollen, festgesetzte Abschnitte und Bildmaskierungen        |
| React        | Komponentenbasiertes Framework für modulare Entwicklung; bietet nahtlose Integration von GSAP-Animationen, wiederverwendbare Logik für Scroll-Verhalten und responsive Layouts     |
| Tailwind CSS | Utility-First-CSS-Framework, das Low-Level-Klassen direkt im HTML erlaubt und den Designprozess beschleunigt                                                                      |
| Vite         | Schnelles Build-Tool und Development-Server mit Hot Module Replacement, schneller Startzeit und optimierten Produktions-Bundles                                                   |