/* =========================================================
   CROSS — script.js
   ========================================================= */

/* ---------- Γλώσσα ---------- */

/*
   Κάθε στοιχείο του HTML με data-i18n="κλειδί" παίρνει το κείμενο
   από το αντίστοιχο κλειδί εδώ. Για να προσθέσεις νέο κείμενο:
   1. βάλε data-i18n="neoKleidi" στο στοιχείο του index.html
   2. πρόσθεσε το neoKleidi και στο en και στο de παρακάτω
*/

const translations = {

    en: {
        // Navigation
        navHome: "Home",
        navProject: "Project",
        navApproach: "Approach",
        navBenefits: "Benefits",
        navNews: "News",
        navPublications: "Publications",
        navPartners: "Partners",
        navContact: "Contact",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        languageLabel: "Language",

        // Home
        heroSubtitle: "From natural language to scored robot scenarios.",
        heroText: "CROSS develops a software toolchain that turns natural-language descriptions into robot scenarios automatically, then visualizes and evaluates them with simulation and AI, in a way people can understand.",
        heroFunding: "Funded by the Ministry of Economic Affairs, Skilled Crafts and Tourism Baden-Württemberg under the Invest BW programme (Innovation IV). Project Duration: 01/03/2026 – 28/02/2028",

        // Home: σχέδιο κυψέλης εργασίας
        // {w:…} = εργαζόμενος, {r:…} = ρομπότ, {s:…} = σταθμοί, {d:…} = απόσταση ασφαλείας
        xdScenarios: [
            {
                name: "Handover",
                text: "{w:A worker} hands parts to the {r:robot} at the {s:assembly station} and keeps {d:a distance of at least 0.5 m}."
            },
            {
                name: "Shared assembly",
                text: "{w:A worker} and a {r:robot} assemble a gearbox at {s:a shared bench}, with {d:at least 0.3 m} between them."
            },
            {
                name: "Palletizing",
                text: "A {r:robot} moves boxes {s:from the conveyor to the pallet} while {w:a worker} restocks, staying {d:at least 0.8 m} away."
            }
        ],
        xdLabel: "Plan view of a human–robot work cell generated from the description",
        xdRobot: "Robot",
        xdWorker: "Worker",
        xdMin: "min.",
        xdSafety: "Safety",
        xdEfficiency: "Efficiency",
        xdStatus: "Status",
        xdOk: "OK",
        xdReduced: "reduced speed",
        xdStop: "protective stop",
        xdScenario: "Scenario",
        xdPrev: "Previous scenario",
        xdNext: "Next scenario",
        xdHintMouse: "Drag the worker or click inside the cell.",
        xdHintTouch: "Tap inside the cell to move the worker.",

        // Home: κύκλος με βήματα
        stepLanguage: "Language",
        stepRequirements: "Requirements",
        stepScenario: "Scenario",
        stepScore: "Score",
        stageTitles: ["Natural-language description", "Extracted requirements", "Generated scenario", "Scenario score"],
        kpiSafety: "Safety",
        kpiEfficiency: "Efficiency",
        tryScenario: "Try a scenario:",
        scenarios: [
            {
                name: "Handover",
                text: "A worker *hands parts to the robot* at the assembly station and keeps a *safe distance*.",
                reqs: ["Handover between worker and robot", "Robot speed ≤ 250 mm/s near the worker", "Separation ≥ 0.5 m"]
            },
            {
                name: "Shared assembly",
                text: "Robot and worker *assemble a gearbox side by side* within a *45-second cycle*.",
                reqs: ["Shared workspace", "Limited contact forces", "Cycle time ≤ 45 s"]
            },
            {
                name: "Palletizing",
                text: "The robot *stacks boxes on a pallet* while the worker *restocks the conveyor*.",
                reqs: ["Alternating access to the cell", "Robot pauses when the zone is entered", "Throughput ≥ 8 boxes/min"]
            }
        ],

        // Home: κάτοψη μέσα σε κύκλο
        heroPrompt: "“A worker hands parts to a robot at the assembly station.”",
        stepSdl: "SDL",
        stepSimulation: "Simulation",
        stepKpis: "KPIs",
        heroSceneLabel: "Simulated human-robot work cell with safety zones",
        kpiSeparation: "Distance",
        statusFull: "Full speed",
        statusReduced: "Reduced speed",
        statusStop: "Protective stop",
        hintPointer: "Move your cursor over the work cell to guide the worker.",
        hintTouch: "Tap inside the work cell to move the worker.",

        // Project
        projectTitle: "Project",
        challengeTitle: "The challenge",
        challengeText1: "Collaborative robots are increasingly used in industry to support human workers, offering flexibility and efficiency. Integrating them safely while maintaining productivity is a major challenge.",
        challengeText2: "Today, integration requires many manual and iterative steps and a great deal of expert knowledge and effort.",
        goalTitle: "Our goal",
        goalText1: "CROSS develops an innovative simulation-based software tool for the safety validation and optimisation of human-robot collaboration systems.",
        goalText2: "The toolchain generates robot scenarios automatically from natural language and evaluates them through simulation and AI.",
        projectBenefitsTitle: "The benefits",
        projectBenefitsText: "Faster planning, easier access for non-experts and reduced dependence on a single robot manufacturer.",

        // Approach
        approachTitle: "Approach",
        approachIntro: "CROSS connects every step from an idea to an evaluated scenario in one toolchain.",
        step1Title: "Natural Language",
        step1Text: "Users describe the planned collaboration scenario in plain words. No programming or simulation expertise is needed.",
        step2Title: "AI-based Requirements Engineering",
        step2Text: "AI extracts clear, structured requirements from the description.",
        step3Title: "SDL Formalization",
        step3Text: "The requirements are translated into a formal machine-readable scenario description.",
        step4Title: "Simulation",
        step4Text: "The scenario is simulated and visualized so interactions can be evaluated before deployment.",
        step5Title: "KPI Evaluation",
        step5Text: "Safety and efficiency indicators are calculated and presented in an understandable way.",
        approachFooterTitle: "Vendor-independent by design",
        approachFooterText: "CROSS builds on open, manufacturer-independent standards and works with many simulation tools. Users are not locked into a specific robot manufacturer.",

        // Benefits
        benefitsTitle: "Benefits",
        benefit1Title: "Faster planning and evaluation",
        benefit1Text: "Automation replaces many manual, iterative steps in planning and safety validation.",
        benefit2Title: "Accessible to non-experts",
        benefit2Text: "A description in natural language is enough to create and assess a scenario.",
        benefit3Title: "Lower costs, especially for SMEs",
        benefit3Text: "Less expert effort and shorter projects make collaborative robots affordable for more companies.",
        benefit4Title: "No vendor lock-in",
        benefit4Text: "Open standards and compatibility with many simulation tools keep users independent of any single manufacturer.",
        benefit5Title: "Understandable results",
        benefit5Text: "Clear visualizations and scores support informed, transparent decisions.",
        carouselPrev: "Previous benefit",
        carouselNext: "Next benefit",
        carouselDots: "Choose slide",
        carouselDot: "Slide",
        carouselOf: "of",

        // News
        newsTitle: "News",
        news1Title: "CROSS presented at TÜV SÜD Mobile Robotics Conference",
        news1Meta: "27 October 2026, Munich, Germany",
        news1Text1: "Dr. Ali Al-Yacoub (TWT GmbH Science & Innovation) presented CROSS at the TÜV SÜD conference \"Mobile Robotics: Safety-Critical Applications & Machinery\" in Munich.",
        news1Text2: "In his talk, \"Automating risk assessment for human-robot collaboration\", he demonstrated how the CROSS toolchain automates safety assessment for collaborative robot applications.",

        // Publications
        publicationsTitle: "Publications",
        pubIn: "in:",
        pubEditor: "(ed.)",
        pubPages: "pp.",

        // Partners
        partnersTitle: "Partners",
        partnersIntro: "Companies supporting the CROSS project.",
        partnerLoiBadge: "Letter of Intent (LoI)",
        partnerVolvoText: "Volvo has provided a Letter of Intent for CROSS.",

        // Contact
        contactTitle: "Contacts",
        contactCity: "70565 Stuttgart Germany",
        contactFunding: "CROSS is funded by the Ministry of Economic Affairs, Skilled Crafts and Tourism Baden-Württemberg under the Invest BW programme (Innovation IV) · Project duration: 01/03/2026 – 28/02/2028 · The project is conducted entirely by TWT GmbH Science & Innovation."
    },

    de: {
        // Navigation
        navHome: "Startseite",
        navProject: "Projekt",
        navApproach: "Vorgehensweise",
        navBenefits: "Vorteile",
        navNews: "Neuigkeiten",
        navPublications: "Veröffentlichungen",
        navPartners: "Partner",
        navContact: "Kontakt",
        menuOpen: "Menü öffnen",
        menuClose: "Menü schließen",
        languageLabel: "Sprache",

        // Home
        heroSubtitle: "Von natürlicher Sprache zu bewerteten Roboterszenarien.",
        heroText: "CROSS entwickelt eine Software-Toolchain, die Beschreibungen in natürlicher Sprache automatisch in Roboterszenarien überführt und diese anschließend mithilfe von Simulation und KI visualisiert und nachvollziehbar bewertet.",
        heroFunding: "Gefördert vom Ministerium für Wirtschaft, Handwerk und Tourismus Baden-Württemberg im Rahmen des Programms Invest BW (Innovation IV). Projektlaufzeit: 01.03.2026 – 28.02.2028",

        // Home: σχέδιο κυψέλης εργασίας
        xdScenarios: [
            {
                name: "Übergabe",
                text: "{w:Ein Werker} übergibt dem {r:Roboter} Teile an der {s:Montagestation} und hält {d:mindestens 0,5 m Abstand}."
            },
            {
                name: "Gemeinsame Montage",
                text: "{w:Ein Werker} und ein {r:Roboter} montieren ein Getriebe an {s:einem gemeinsamen Arbeitstisch}, mit {d:mindestens 0,3 m} Abstand."
            },
            {
                name: "Palettierung",
                text: "Ein {r:Roboter} setzt Kartons {s:vom Förderband auf die Palette} um, während {w:ein Werker} nachfüllt und {d:mindestens 0,8 m} Abstand hält."
            }
        ],
        xdLabel: "Draufsicht einer Mensch-Roboter-Arbeitszelle, erzeugt aus der Beschreibung",
        xdRobot: "Roboter",
        xdWorker: "Werker",
        xdMin: "min.",
        xdSafety: "Sicherheit",
        xdEfficiency: "Effizienz",
        xdStatus: "Status",
        xdOk: "OK",
        xdReduced: "reduziert",
        xdStop: "Schutzstopp",
        xdScenario: "Szenario",
        xdPrev: "Vorheriges Szenario",
        xdNext: "Nächstes Szenario",
        xdHintMouse: "Ziehen Sie den Werker oder klicken Sie in die Zelle.",
        xdHintTouch: "Tippen Sie in die Zelle, um den Werker zu bewegen.",

        // Home: κύκλος με βήματα
        stepLanguage: "Sprache",
        stepRequirements: "Anforderungen",
        stepScenario: "Szenario",
        stepScore: "Bewertung",
        stageTitles: ["Beschreibung in natürlicher Sprache", "Abgeleitete Anforderungen", "Generiertes Szenario", "Szenario-Bewertung"],
        kpiSafety: "Sicherheit",
        kpiEfficiency: "Effizienz",
        tryScenario: "Szenario ausprobieren:",
        scenarios: [
            {
                name: "Übergabe",
                text: "Ein Werker *übergibt dem Roboter Teile* an der Montagestation und hält einen *sicheren Abstand*.",
                reqs: ["Übergabe zwischen Werker und Roboter", "Robotergeschwindigkeit ≤ 250 mm/s nahe dem Werker", "Abstand ≥ 0,5 m"]
            },
            {
                name: "Gemeinsame Montage",
                text: "Roboter und Werker *montieren nebeneinander ein Getriebe* in einem *45-Sekunden-Takt*.",
                reqs: ["Gemeinsamer Arbeitsraum", "Begrenzte Kontaktkräfte", "Taktzeit ≤ 45 s"]
            },
            {
                name: "Palettierung",
                text: "Der Roboter *stapelt Kartons auf eine Palette*, während der Werker *das Förderband auffüllt*.",
                reqs: ["Abwechselnder Zugang zur Zelle", "Roboter pausiert bei Betreten der Zone", "Durchsatz ≥ 8 Kartons/min"]
            }
        ],

        // Home: κάτοψη μέσα σε κύκλο
        heroPrompt: "„Ein Werker übergibt an der Montagestation Teile an einen Roboter.“",
        stepSdl: "SDL",
        stepSimulation: "Simulation",
        stepKpis: "KPIs",
        heroSceneLabel: "Simulierte Mensch-Roboter-Arbeitszelle mit Schutzzonen",
        kpiSeparation: "Abstand",
        statusFull: "Volle Geschwindigkeit",
        statusReduced: "Reduzierte Geschwindigkeit",
        statusStop: "Schutzstopp",
        hintPointer: "Bewegen Sie den Mauszeiger über die Arbeitszelle, um den Werker zu führen.",
        hintTouch: "Tippen Sie in die Arbeitszelle, um den Werker zu bewegen.",

        // Project
        projectTitle: "Projekt",
        challengeTitle: "Die Herausforderung",
        challengeText1: "Kollaborative Roboter werden in der Industrie zunehmend eingesetzt, um Beschäftigte zu unterstützen, und bieten dabei Flexibilität und Effizienz. Sie sicher zu integrieren und gleichzeitig die Produktivität zu erhalten, ist eine große Herausforderung.",
        challengeText2: "Heute erfordert die Integration viele manuelle und iterative Schritte sowie viel Expertenwissen und Aufwand.",
        goalTitle: "Unser Ziel",
        goalText1: "CROSS entwickelt ein innovatives, simulationsbasiertes Software-Tool zur Sicherheitsvalidierung und Optimierung von Mensch-Roboter-Kollaborationssystemen.",
        goalText2: "Die Toolchain erzeugt Roboterszenarien automatisch aus natürlicher Sprache und bewertet sie mithilfe von Simulation und KI.",
        projectBenefitsTitle: "Der Nutzen",
        projectBenefitsText: "Schnellere Planung, einfacherer Zugang für Nicht-Fachleute und geringere Abhängigkeit von einem einzelnen Roboterhersteller.",

        // Approach
        approachTitle: "Vorgehensweise",
        approachIntro: "CROSS verbindet alle Schritte von der Idee bis zum bewerteten Szenario in einer Toolchain.",
        step1Title: "Natürliche Sprache",
        step1Text: "Nutzerinnen und Nutzer beschreiben das geplante Kollaborationsszenario in einfachen Worten. Programmier- oder Simulationskenntnisse sind nicht erforderlich.",
        step2Title: "KI-basiertes Requirements Engineering",
        step2Text: "KI leitet aus der Beschreibung klare, strukturierte Anforderungen ab.",
        step3Title: "SDL-Formalisierung",
        step3Text: "Die Anforderungen werden in eine formale, maschinenlesbare Szenariobeschreibung überführt.",
        step4Title: "Simulation",
        step4Text: "Das Szenario wird simuliert und visualisiert, sodass Interaktionen bereits vor der Inbetriebnahme bewertet werden können.",
        step5Title: "KPI-Bewertung",
        step5Text: "Sicherheits- und Effizienzkennzahlen werden berechnet und verständlich dargestellt.",
        approachFooterTitle: "Von Grund auf herstellerunabhängig",
        approachFooterText: "CROSS basiert auf offenen, herstellerunabhängigen Standards und funktioniert mit vielen Simulationswerkzeugen. Nutzerinnen und Nutzer sind nicht an einen bestimmten Roboterhersteller gebunden.",

        // Benefits
        benefitsTitle: "Vorteile",
        benefit1Title: "Schnellere Planung und Bewertung",
        benefit1Text: "Automatisierung ersetzt viele manuelle, iterative Schritte in Planung und Sicherheitsvalidierung.",
        benefit2Title: "Zugänglich für Nicht-Fachleute",
        benefit2Text: "Eine Beschreibung in natürlicher Sprache genügt, um ein Szenario zu erstellen und zu bewerten.",
        benefit3Title: "Geringere Kosten, besonders für KMU",
        benefit3Text: "Weniger Expertenaufwand und kürzere Projekte machen kollaborative Roboter für mehr Unternehmen erschwinglich.",
        benefit4Title: "Keine Herstellerbindung",
        benefit4Text: "Offene Standards und die Kompatibilität mit vielen Simulationswerkzeugen machen Nutzerinnen und Nutzer unabhängig von einzelnen Herstellern.",
        benefit5Title: "Verständliche Ergebnisse",
        benefit5Text: "Klare Visualisierungen und Bewertungen unterstützen fundierte, transparente Entscheidungen.",
        carouselPrev: "Vorheriger Vorteil",
        carouselNext: "Nächster Vorteil",
        carouselDots: "Folie auswählen",
        carouselDot: "Folie",
        carouselOf: "von",

        // News
        newsTitle: "Neuigkeiten",
        news1Title: "CROSS auf der TÜV SÜD Konferenz zur mobilen Robotik vorgestellt",
        news1Meta: "27. Oktober 2026, München, Deutschland",
        news1Text1: "Dr. Ali Al-Yacoub (TWT GmbH Science & Innovation) stellte CROSS auf der TÜV SÜD Konferenz „Mobile Robotics: Safety-Critical Applications & Machinery“ in München vor.",
        news1Text2: "In seinem Vortrag „Automating risk assessment for human-robot collaboration“ zeigte er, wie die CROSS-Toolchain die Sicherheitsbewertung kollaborativer Roboteranwendungen automatisiert.",

        // Publications
        publicationsTitle: "Veröffentlichungen",
        pubIn: "in:",
        pubEditor: "(Hrsg.)",
        pubPages: "S.",

        // Partners
        partnersTitle: "Partner",
        partnersIntro: "Unternehmen, die das Projekt CROSS unterstützen.",
        partnerLoiBadge: "Absichtserklärung (LoI)",
        partnerVolvoText: "Volvo hat eine Absichtserklärung (Letter of Intent) für CROSS abgegeben.",

        // Contact
        contactTitle: "Kontakt",
        contactCity: "70565 Stuttgart Deutschland",
        contactFunding: "CROSS wird vom Ministerium für Wirtschaft, Handwerk und Tourismus Baden-Württemberg im Rahmen des Programms Invest BW (Innovation IV) gefördert · Projektlaufzeit: 01.03.2026 – 28.02.2028 · Das Projekt wird vollständig von der TWT GmbH Science & Innovation durchgeführt."
    }

};

const SUPPORTED_LANGUAGES = Object.keys(translations);
let currentLanguage = "en";

function t(key){
    return translations[currentLanguage][key] ?? translations.en[key] ?? "";
}

function changeLanguage(language){

    if (!SUPPORTED_LANGUAGES.includes(language)) language = "en";
    currentLanguage = language;

    // Κείμενα
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const value = t(el.dataset.i18n);
        if (value) el.textContent = value;
    });

    // Εναλλακτικό κείμενο εικόνων
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        el.alt = t(el.dataset.i18nAlt);
    });

    // Ετικέτες προσβασιμότητας (κουμπιά carousel κ.λπ.)
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });

    document.documentElement.lang = language;
    updateLanguageButton(language);

    // Αποθήκευση επιλογής ώστε να μένει και στην επόμενη επίσκεψη
    try { localStorage.setItem("cross-language", language); } catch (e) {}

    // Ενημερώνει το menu, το carousel και το σχέδιο στο home
    document.dispatchEvent(new CustomEvent("languagechange"));
}

/* ---------- Dropdown γλώσσας με σημαίες ---------- */

const langButton = document.getElementById("lang-button");
const langMenu = document.getElementById("lang-menu");
const langOptions = Array.from(langMenu.querySelectorAll("[data-lang]"));

function updateLanguageButton(language){
    document.getElementById("lang-current-flag").className = "flag flag-" + language;
    document.getElementById("lang-current-code").textContent = language.toUpperCase();
    langButton.setAttribute("aria-label", t("languageLabel") + ": " + language.toUpperCase());

    langOptions.forEach(option => {
        option.setAttribute("aria-selected", option.dataset.lang === language);
    });
}

function openLangMenu(){
    langMenu.hidden = false;
    langButton.setAttribute("aria-expanded", "true");
    const selected = langOptions.find(o => o.getAttribute("aria-selected") === "true") || langOptions[0];
    selected.focus();
}

function closeLangMenu(returnFocus){
    langMenu.hidden = true;
    langButton.setAttribute("aria-expanded", "false");
    if (returnFocus) langButton.focus();
}

langButton.addEventListener("click", () => {
    langMenu.hidden ? openLangMenu() : closeLangMenu(false);
});

langOptions.forEach(option => {
    option.addEventListener("click", () => {
        changeLanguage(option.dataset.lang);
        closeLangMenu(true);
    });
});

// Πλοήγηση με πληκτρολόγιο
langMenu.addEventListener("keydown", e => {
    const i = langOptions.indexOf(document.activeElement);

    if (e.key === "ArrowDown"){
        e.preventDefault();
        langOptions[(i + 1) % langOptions.length].focus();
    } else if (e.key === "ArrowUp"){
        e.preventDefault();
        langOptions[(i - 1 + langOptions.length) % langOptions.length].focus();
    } else if (e.key === "Enter" || e.key === " "){
        e.preventDefault();
        if (i >= 0){
            changeLanguage(langOptions[i].dataset.lang);
            closeLangMenu(true);
        }
    } else if (e.key === "Escape"){
        closeLangMenu(true);
    }
});

// Κλείνει όταν πατηθεί κλικ έξω από το dropdown
document.addEventListener("click", e => {
    if (!e.target.closest("#language-switcher")) closeLangMenu(false);
});

/* ---------- Mobile menu ---------- */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

function setMenu(open){
    navLinks.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
    menuToggle.textContent = open ? "✕" : "☰";
}

menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("active"));
});

document.addEventListener("languagechange", () => {
    setMenu(navLinks.classList.contains("active"));
});

// Κλείνει το menu όταν πατηθεί κάποιο link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
});

// Κλείνει το menu αν μεγαλώσει η οθόνη
window.addEventListener("resize", () => {
    if (window.innerWidth > 1280) setMenu(false);
});

/* ---------- Benefits carousel ---------- */

(function initCarousel(){

    const carousel = document.getElementById("benefits-carousel");
    if (!carousel) return;

    const track = carousel.querySelector(".benefits-track");
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    const dotsWrap = carousel.querySelector(".carousel-dots");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const AUTOPLAY_MS = 5000;

    let pages = 1;
    let current = 0;
    let timer = null;

    // Απόσταση από slide σε slide (πλάτος κάρτας + κενό)
    function step(){
        if (slides.length < 2) return track.clientWidth;
        return slides[1].offsetLeft - slides[0].offsetLeft;
    }

    function perView(){
        const gap = step() - slides[0].offsetWidth;
        return Math.max(1, Math.round((track.clientWidth + gap) / step()));
    }

    function buildDots(){
        pages = Math.max(1, slides.length - perView() + 1);
        dotsWrap.innerHTML = "";

        for (let i = 0; i < pages; i++){
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "carousel-dot";
            dot.setAttribute("role", "tab");
            dot.setAttribute("aria-label", t("carouselDot") + " " + (i + 1));
            dot.addEventListener("click", () => { goTo(i); restartAutoplay(); });
            dotsWrap.appendChild(dot);
        }

        const hide = pages <= 1;
        dotsWrap.style.display = hide ? "none" : "";
        prevBtn.style.display = hide ? "none" : "";
        nextBtn.style.display = hide ? "none" : "";

        current = Math.min(current, pages - 1);
        updateDots();
    }

    function labelSlides(){
        slides.forEach((slide, i) => {
            slide.setAttribute("aria-label", (i + 1) + " " + t("carouselOf") + " " + slides.length);
        });
    }

    document.addEventListener("languagechange", () => {
        labelSlides();
        buildDots();
    });

    function updateDots(){
        dotsWrap.querySelectorAll(".carousel-dot").forEach((dot, i) => {
            const active = i === current;
            dot.classList.toggle("active", active);
            dot.setAttribute("aria-selected", active);
        });
    }

    function goTo(index){
        // Κυκλική κίνηση: μετά το τέλος γυρίζει στην αρχή και αντίστροφα
        if (index < 0) index = pages - 1;
        if (index >= pages) index = 0;

        current = index;
        track.scrollTo({
            left: index * step(),
            behavior: reduceMotion ? "auto" : "smooth"
        });
        updateDots();
    }

    prevBtn.addEventListener("click", () => { goTo(current - 1); restartAutoplay(); });
    nextBtn.addEventListener("click", () => { goTo(current + 1); restartAutoplay(); });

    // Βελάκια πληκτρολογίου όταν το carousel έχει focus
    track.addEventListener("keydown", e => {
        if (e.key === "ArrowLeft"){ e.preventDefault(); goTo(current - 1); restartAutoplay(); }
        if (e.key === "ArrowRight"){ e.preventDefault(); goTo(current + 1); restartAutoplay(); }
    });

    // Ενημέρωση dots όταν ο χρήστης κάνει swipe
    let ticking = false;
    track.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            current = Math.min(pages - 1, Math.round(track.scrollLeft / step()));
            updateDots();
            ticking = false;
        });
    });

    // Autoplay που σταματά όταν ο χρήστης αλληλεπιδρά
    function startAutoplay(){
        if (reduceMotion || pages <= 1 || timer) return;
        timer = setInterval(() => goTo(current + 1), AUTOPLAY_MS);
    }

    function stopAutoplay(){
        clearInterval(timer);
        timer = null;
    }

    function restartAutoplay(){
        stopAutoplay();
        startAutoplay();
    }

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);
    track.addEventListener("touchstart", stopAutoplay, { passive: true });
    track.addEventListener("touchend", () => setTimeout(startAutoplay, AUTOPLAY_MS), { passive: true });

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            buildDots();
            track.scrollTo({ left: current * step(), behavior: "auto" });
        }, 150);
    });

    labelSlides();
    buildDots();
    startAutoplay();

})();

/* =========================================================
   ANIMATION ΣΤΟ HOME — διάλεξε ποιο θα εμφανίζεται:
   "cell"    = κάτοψη μέσα σε κύκλο: ρομπότ, εργαζόμενος που ακολουθεί
               το ποντίκι, ζώνες ασφαλείας, Safety / Efficiency / Distance
   "orb"     = κύκλος με βήματα (πρόταση → απαιτήσεις → σενάριο → βαθμολογία)
   "drawing" = τεχνικό σχέδιο κυψέλης εργασίας
   ========================================================= */
const HERO_ANIMATION = "cell";

/* ---------- Home: σχέδιο κυψέλης εργασίας CROSS ----------
   Αντικαθιστά τον παλιό κύκλο μέσα στο #hero-visual.

   Τι δείχνει:
   1. Μια περιγραφή σεναρίου σε φυσική γλώσσα.
   2. Κάθε φράση της υπογραμμίζεται και το αντίστοιχο στοιχείο
      "σχεδιάζεται" στην κάτοψη (εργαζόμενος, ρομπότ, σταθμοί, απόσταση).
   3. Το σενάριο τρέχει: το ρομπότ κάνει pick & place και επιβραδύνει
      ή σταματά όταν ο εργαζόμενος μπει στην απόσταση ασφαλείας.
   4. Στο πλαίσιο κάτω δεξιά (όπως σε τεχνικό σχέδιο) υπολογίζονται
      Safety και Efficiency.

   Ο επισκέπτης μπορεί να σύρει τον εργαζόμενο (ή να κάνει κλικ/tap στην
   κυψέλη) και να αλλάξει σενάριο. Οι τιμές είναι ενδεικτικές.
   Τα στυλ του βρίσκονται στο τέλος αυτής της ενότητας (XD_CSS).
*/

(function initHeroDrawing(){

    if (HERO_ANIMATION !== "drawing") return;
    const host = document.getElementById("hero-visual");
    if (!host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    // Γεωμετρία σε μονάδες του σχεδίου (80 μονάδες = 1 μέτρο)
    const PX_PER_M = 80;
    const L1 = 38, L2 = 32, REACH = 70;          // βραχίονες ρομπότ και εμβέλεια
    const BASE = { x: 150, y: 150 };             // βάση ρομπότ
    const TB = { x: 300, y: 220 };               // πλαίσιο τίτλου (κάτω δεξιά)

    // Θέσεις ανά σενάριο: σταθμοί, ελάχιστη απόσταση (m), διαδρομή εργαζομένου
    const SCENARIOS = [
        { req: 0.5, pick: { x: 100, y: 190 }, place: { x: 200, y: 190 }, path: [{ x: 350, y: 90 },  { x: 238, y: 178 }] },
        { req: 0.3, pick: { x: 95,  y: 130 }, place: { x: 205, y: 130 }, path: [{ x: 330, y: 150 }, { x: 232, y: 150 }] },
        { req: 0.8, pick: { x: 105, y: 195 }, place: { x: 195, y: 105 }, path: [{ x: 385, y: 70 },  { x: 250, y: 200 }] }
    ];

    /* ---- Στυλ ---- */

    const XD_CSS = `
#home .hero-visual{ aspect-ratio:auto; width:100%; max-width:480px; justify-self:center; align-self:center; display:block; }
@media (max-width:1024px){ #home .hero-visual{ max-width:520px; order:2; } }
.xd{ margin:0; display:flex; flex-direction:column; gap:12px; text-align:left; }
#home .xd-sentence{ margin:0; font-size:18px; line-height:1.65; color:#333; font-weight:300; }
.xd-phrase{ background-image:linear-gradient(#006682,#006682); background-repeat:no-repeat; background-position:0 100%; background-size:0% 1.5px; padding:0 1px; transition:background-size .5s ease, background-color .2s ease; }
.xd-phrase.on{ background-size:100% 1.5px; }
.xd[data-focus="w"] .xd-phrase[data-el="w"], .xd[data-focus="r"] .xd-phrase[data-el="r"],
.xd[data-focus="s"] .xd-phrase[data-el="s"], .xd[data-focus="d"] .xd-phrase[data-el="d"]{ background-color:rgba(0,102,130,.1); }
.xd-sheet{ width:100%; height:auto; display:block; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,.08); user-select:none; -webkit-user-select:none; cursor:crosshair; }
.xd-sheet text{ font-family:inherit; }
.xd-frame{ fill:none; stroke:#9fb6bd; stroke-width:1; }
.xd-frame-inner{ stroke:#c9d7dc; stroke-width:.6; }
.xd-gridline{ fill:none; stroke:#006682; stroke-opacity:.08; stroke-width:.6; }
.xd .ln{ fill:none; stroke:#006682; stroke-width:1.3; stroke-linecap:round; stroke-linejoin:round; stroke-dasharray:1; stroke-dashoffset:1; transition:stroke-dashoffset .9s ease, stroke-width .2s ease; }
.xd .drawn .ln{ stroke-dashoffset:0; }
.xd .fade{ opacity:0; transition:opacity .6s ease .3s; }
.xd .drawn .fade{ opacity:1; }
.xd .xd-arm{ stroke-width:5; }
.xd .xd-joint{ fill:#fff; stroke-width:1.6; }
.xd .xd-body{ fill:#fff; stroke-width:1.4; }
.xd .xd-leader{ stroke-width:.8; }
.xd-part{ fill:#006682; }
.xd-hit{ fill:transparent; cursor:grab; }
.xd-reach{ fill:none; stroke:#006682; stroke-opacity:.45; stroke-width:.8; stroke-dasharray:2 3; }
.xd-boundary{ fill:rgba(0,102,130,.035); stroke:#006682; stroke-width:1; stroke-dasharray:8 3 2 3; transition:stroke .3s, fill .3s, stroke-width .2s; }
.xd[data-state="reduced"] .xd-boundary{ stroke:#b5473a; fill:rgba(181,71,58,.05); }
.xd[data-state="stop"] .xd-boundary{ stroke:#b5473a; fill:rgba(181,71,58,.1); stroke-width:1.6; }
.xd-label{ font-size:9px; letter-spacing:.8px; text-transform:uppercase; fill:#4f6b74; }
.xd-label-value{ text-transform:none; letter-spacing:.3px; }
.xd-dimline{ stroke:#006682; stroke-width:.8; }
.xd-tickmark{ fill:none; stroke:#006682; stroke-width:1.2; }
.xd-dimtext{ font-size:10px; font-weight:600; fill:#006682; paint-order:stroke; stroke:#fff; stroke-width:3px; }
.xd[data-state="reduced"] .xd-dimtext, .xd[data-state="stop"] .xd-dimtext,
.xd[data-state="reduced"] #xd-tb-status, .xd[data-state="stop"] #xd-tb-status{ fill:#b5473a; }
.xd-tbtext{ font-size:9px; fill:#2d3d42; }
.xd-strong{ font-size:9.5px; font-weight:600; }
.xd[data-focus="w"] [data-el="w"] .ln, .xd[data-focus="s"] [data-el="s"] .ln,
.xd[data-focus="r"] [data-el="r"] .ln:not(.xd-arm){ stroke-width:2.4; }
.xd[data-focus="r"] .xd-arm{ stroke-width:6.5; }
.xd[data-focus="d"] .xd-boundary{ stroke-width:2; }
.xd-foot{ display:flex; align-items:center; gap:4px; flex-wrap:wrap; font-size:14px; color:#4f6b74; }
.xd-nav{ border:none; background:none; color:#006682; font-family:inherit; font-size:24px; line-height:1; padding:2px 8px; cursor:pointer; border-radius:4px; }
.xd-nav:hover{ background:rgba(0,102,130,.08); }
.xd-count{ font-variant-numeric:tabular-nums; min-width:96px; text-align:center; }
.xd-hint{ margin-left:auto; font-size:13px; color:#7a8b91; }
@media (max-width:600px){
    .xd-label{ font-size:11px; }
    .xd-dimtext{ font-size:12.5px; }
    .xd-tbtext, .xd-strong{ font-size:11.5px; }
}
@media (max-width:480px){ .xd-hint{ margin-left:0; width:100%; } #home .xd-sentence{ font-size:16px; } }
@media (prefers-reduced-motion:reduce){ .xd .ln, .xd .fade, .xd-phrase{ transition:none; } }
`;

    if (!document.getElementById("xd-styles")){
        const style = document.createElement("style");
        style.id = "xd-styles";
        style.textContent = XD_CSS;
        document.head.appendChild(style);
    }

    /* ---- Δομή ---- */

    host.removeAttribute("aria-hidden");
    host.innerHTML = `
<figure class="xd" id="xd">
    <p class="xd-sentence" id="xd-sentence"></p>

    <svg class="xd-sheet" id="xd-sheet" viewBox="0 0 460 300" role="img" aria-labelledby="xd-title">
        <title id="xd-title"></title>
        <defs>
            <pattern id="xd-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" class="xd-gridline"/>
            </pattern>
            <marker id="xd-tick" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M2 8L8 2" class="xd-tickmark"/>
            </marker>
        </defs>

        <rect x="0.5" y="0.5" width="459" height="299" class="xd-frame"/>
        <rect x="6" y="6" width="448" height="288" fill="url(#xd-grid)" class="xd-frame-inner"/>

        <g data-el="s" id="xd-stations">
            <rect id="xd-st-a" width="28" height="18" class="ln" pathLength="1"/>
            <rect id="xd-st-b" width="28" height="18" class="ln" pathLength="1"/>
            <text id="xd-st-a-t" class="xd-label fade" text-anchor="middle">A</text>
            <text id="xd-st-b-t" class="xd-label fade" text-anchor="middle">B</text>
        </g>

        <g data-el="d" id="xd-zone">
            <circle id="xd-reach" class="xd-reach fade"/>
            <circle id="xd-boundary" class="xd-boundary fade"/>
            <text id="xd-boundary-t" class="xd-label xd-label-value fade" text-anchor="middle"></text>
            <g id="xd-dim" class="fade">
                <line id="xd-dim-line" class="xd-dimline" marker-start="url(#xd-tick)" marker-end="url(#xd-tick)"/>
                <text id="xd-dim-t" class="xd-dimtext" text-anchor="middle"></text>
            </g>
        </g>

        <g data-el="r" id="xd-robot">
            <line id="xd-l1" class="ln xd-arm" pathLength="1"/>
            <line id="xd-l2" class="ln xd-arm" pathLength="1"/>
            <circle id="xd-base" r="11" class="ln xd-joint" pathLength="1"/>
            <circle id="xd-elbow" r="4.5" class="ln xd-joint" pathLength="1"/>
            <rect id="xd-part" x="-5" y="-5" width="10" height="10" class="xd-part fade"/>
            <path id="xd-r-lead" class="ln xd-leader" pathLength="1"/>
            <text id="xd-r-t" class="xd-label fade"></text>
        </g>

        <g data-el="w" id="xd-worker">
            <circle r="22" class="xd-hit"/>
            <ellipse rx="13" ry="7" class="ln xd-body" pathLength="1"/>
            <circle r="6" class="ln xd-body" pathLength="1"/>
            <text x="16" y="-12" id="xd-w-t" class="xd-label fade"></text>
        </g>

        <g id="xd-tb">
            <rect x="300" y="220" width="154" height="74" class="ln" pathLength="1"/>
            <path d="M300 238H454M300 256H454M300 274H454" class="ln" pathLength="1"/>
            <text x="306" y="233" id="xd-tb-name" class="xd-tbtext xd-strong fade"></text>
            <text x="306" y="251" id="xd-tb-safety" class="xd-tbtext fade"></text>
            <text x="306" y="269" id="xd-tb-eff" class="xd-tbtext fade"></text>
            <text x="306" y="288" id="xd-tb-status" class="xd-tbtext fade"></text>
        </g>
    </svg>

    <figcaption class="xd-foot">
        <button type="button" class="xd-nav" id="xd-prev">&#8249;</button>
        <span class="xd-count" id="xd-count"></span>
        <button type="button" class="xd-nav" id="xd-next">&#8250;</button>
        <span class="xd-hint" id="xd-hint"></span>
    </figcaption>
</figure>`;

    const $ = id => document.getElementById(id);
    const fig = $("xd");
    const svg = $("xd-sheet");
    const groups = { s: $("xd-stations"), d: $("xd-zone"), r: $("xd-robot"), w: $("xd-worker") };
    const titleBlock = $("xd-tb");

    const set = (el, attrs) => { for (const k in attrs) el.setAttribute(k, attrs[k]); };
    const fmt = (v, digits) => v.toLocaleString(currentLanguage, {
        minimumFractionDigits: digits, maximumFractionDigits: digits
    });
    const smooth = u => u * u * (3 - 2 * u);

    /* ---- Κατάσταση ---- */

    let sc = 0, sd = SCENARIOS[0];
    let worker = { x: 0, y: 0 }, target = null, waypoint = 0, waitT = 0;
    let userControl = false, dragging = false;
    let running = false, phase = 0, speed = 1, safety = 1, eff = 1, state = "ok";
    let scenarioTime = 0;
    let introTimers = [];
    let visible = true, lastTs = null;

    /* ---- Πρόταση σε φυσική γλώσσα ---- */

    function renderSentence(){
        const box = $("xd-sentence");
        box.innerHTML = "";
        t("xdScenarios")[sc].text.split(/(\{[srwd]:[^}]+\})/).forEach(part => {
            const m = part.match(/^\{([srwd]):([^}]+)\}$/);
            if (m){
                const span = document.createElement("span");
                span.className = "xd-phrase";
                span.dataset.el = m[1];
                span.textContent = m[2];
                span.addEventListener("mouseenter", () => { fig.dataset.focus = m[1]; });
                span.addEventListener("mouseleave", () => { delete fig.dataset.focus; });
                if (groups[m[1]].classList.contains("drawn")) span.classList.add("on");
                box.appendChild(span);
            } else if (part){
                box.appendChild(document.createTextNode(part));
            }
        });
    }

    function updateTexts(){
        $("xd-title").textContent = t("xdLabel");
        $("xd-r-t").textContent = t("xdRobot");
        $("xd-w-t").textContent = t("xdWorker");
        $("xd-boundary-t").textContent = t("xdMin") + " " + fmt(sd.req, 2) + " m";
        $("xd-tb-name").textContent = "CROSS — " + t("xdScenarios")[sc].name;
        $("xd-count").textContent = t("xdScenario") + " " + (sc + 1) + " / " + SCENARIOS.length;
        $("xd-hint").textContent = t(isTouch ? "xdHintTouch" : "xdHintMouse");
        $("xd-prev").setAttribute("aria-label", t("xdPrev"));
        $("xd-next").setAttribute("aria-label", t("xdNext"));
        renderSentence();
    }

    /* ---- Διάταξη σεναρίου ---- */

    function layout(){
        sd = SCENARIOS[sc];
        set($("xd-st-a"), { x: sd.pick.x - 14, y: sd.pick.y - 9 });
        set($("xd-st-b"), { x: sd.place.x - 14, y: sd.place.y - 9 });
        set($("xd-st-a-t"), { x: sd.pick.x, y: sd.pick.y + 23 });
        set($("xd-st-b-t"), { x: sd.place.x, y: sd.place.y + 23 });

        const R = REACH + sd.req * PX_PER_M;
        set($("xd-reach"), { cx: BASE.x, cy: BASE.y, r: REACH });
        set($("xd-boundary"), { cx: BASE.x, cy: BASE.y, r: R });
        set($("xd-boundary-t"), { x: BASE.x, y: BASE.y - R - 5 });

        set($("xd-base"), { cx: BASE.x, cy: BASE.y });
        $("xd-r-lead").setAttribute("d",
            "M" + (BASE.x - 9) + " " + (BASE.y - 9) +
            "L" + (BASE.x - 38) + " " + (BASE.y - 38) +
            "H" + (BASE.x - 72));
        set($("xd-r-t"), { x: BASE.x - 72, y: BASE.y - 42 });
    }

    /* ---- Κινηματική ρομπότ ---- */

    function ik(tx, ty){
        const dx = tx - BASE.x, dy = ty - BASE.y;
        const d = Math.min(Math.max(Math.hypot(dx, dy), Math.abs(L1 - L2) + 1), L1 + L2 - 1);
        const q2 = Math.acos((d * d - L1 * L1 - L2 * L2) / (2 * L1 * L2));
        const q1 = Math.atan2(dy, dx) - Math.atan2(L2 * Math.sin(q2), L1 + L2 * Math.cos(q2));
        const ex = BASE.x + L1 * Math.cos(q1), ey = BASE.y + L1 * Math.sin(q1);
        return { ex, ey, x: ex + L2 * Math.cos(q1 + q2), y: ey + L2 * Math.sin(q1 + q2) };
    }

    function toolAt(p){
        const forward = p < 1;
        const u = smooth(forward ? p : p - 1);
        const a0 = Math.atan2(sd.pick.y - BASE.y, sd.pick.x - BASE.x);
        const a1 = Math.atan2(sd.place.y - BASE.y, sd.place.x - BASE.x);
        let da = a1 - a0;
        while (da > Math.PI) da -= 2 * Math.PI;
        while (da < -Math.PI) da += 2 * Math.PI;
        const r0 = Math.hypot(sd.pick.x - BASE.x, sd.pick.y - BASE.y);
        const r1 = Math.hypot(sd.place.x - BASE.x, sd.place.y - BASE.y);
        const a = forward ? a0 + da * u : a1 - da * u;
        const r = (forward ? r0 + (r1 - r0) * u : r1 + (r0 - r1) * u) - 12 * Math.sin(Math.PI * u);
        return { x: BASE.x + r * Math.cos(a), y: BASE.y + r * Math.sin(a) };
    }

    /* ---- Αλληλεπίδραση: σύρσιμο / κλικ ---- */

    function toSvg(e){
        const p = svg.createSVGPoint();
        p.x = e.clientX; p.y = e.clientY;
        return p.matrixTransform(svg.getScreenCTM().inverse());
    }

    function clampPos(p){
        const x = Math.min(444, Math.max(16, p.x));
        let y = Math.min(284, Math.max(16, p.y));
        if (x > TB.x - 10 && y > TB.y - 14) y = TB.y - 14;   // όχι πάνω στο πλαίσιο τίτλου
        return { x, y };
    }

    groups.w.addEventListener("pointerdown", e => {
        if (!running) return;
        dragging = true;
        userControl = true;
        target = null;
        svg.setPointerCapture(e.pointerId);
        e.preventDefault();
        e.stopPropagation();
    });

    svg.addEventListener("pointermove", e => {
        if (dragging) worker = clampPos(toSvg(e));
    });

    const endDrag = () => { dragging = false; };
    svg.addEventListener("pointerup", endDrag);
    svg.addEventListener("pointercancel", endDrag);

    svg.addEventListener("pointerdown", e => {
        if (!running || dragging) return;
        userControl = true;
        target = clampPos(toSvg(e));
    });

    // Σύνδεση φράσης ↔ στοιχείου του σχεδίου
    Object.keys(groups).forEach(key => {
        groups[key].addEventListener("mouseenter", () => { fig.dataset.focus = key; });
        groups[key].addEventListener("mouseleave", () => { delete fig.dataset.focus; });
    });

    $("xd-prev").addEventListener("click", () => startScenario(sc - 1));
    $("xd-next").addEventListener("click", () => startScenario(sc + 1));

    /* ---- Προσομοίωση ---- */

    function step(dt){
        // εργαζόμενος
        if (!dragging){
            let goal = target;
            if (!userControl && running && !reduceMotion) goal = sd.path[waypoint];

            if (goal){
                const dx = goal.x - worker.x, dy = goal.y - worker.y;
                const d = Math.hypot(dx, dy);
                const maxMove = reduceMotion ? 1e4 : 60 * dt;   // ~0,75 m/s
                if (d > 0.5){
                    const k = Math.min(1, maxMove / d);
                    worker.x += dx * k;
                    worker.y += dy * k;
                } else if (!userControl){
                    waitT += dt;
                    if (waitT > 1.8){ waitT = 0; waypoint = 1 - waypoint; }
                } else {
                    target = null;
                }
            }
        }

        // απόσταση από την εμβέλεια του ρομπότ και κανόνας ταχύτητας
        const dist = Math.hypot(worker.x - BASE.x, worker.y - BASE.y);
        const sep = Math.max(0, (dist - REACH) / PX_PER_M);
        let allowed = 1;
        state = "ok";
        if (sep < sd.req * 0.25){ allowed = 0; state = "stop"; }
        else if (sep < sd.req){ allowed = 0.25 + 0.5 * (sep / sd.req); state = "reduced"; }

        speed += (allowed - speed) * Math.min(1, dt * 5);
        if (running && !reduceMotion) phase = (phase + dt * 0.42 * speed) % 2;

        // ενδεικτικοί δείκτες
        const kS = running ? Math.min(1, dt * 1.5) : 1;
        const kE = running ? Math.min(1, dt * 0.4) : 1;
        safety += ((0.55 + 0.45 * Math.min(1, sep / sd.req)) - safety) * kS;
        eff += (speed - eff) * kE;

        // αυτόματη αλλαγή σεναρίου αν δεν αλληλεπιδρά κανείς
        if (running && !userControl && !reduceMotion){
            scenarioTime += dt;
            if (scenarioTime > 16) startScenario(sc + 1);
        }

        return { dist, sep };
    }

    function render(dt){
        const { dist, sep } = step(dt);

        const tool = toolAt(phase);
        const k = ik(tool.x, tool.y);
        set($("xd-l1"), { x1: BASE.x, y1: BASE.y, x2: k.ex, y2: k.ey });
        set($("xd-l2"), { x1: k.ex, y1: k.ey, x2: k.x, y2: k.y });
        set($("xd-elbow"), { cx: k.ex, cy: k.ey });
        $("xd-part").setAttribute("transform", "translate(" + k.x + " " + k.y + ")");
        $("xd-part").style.visibility = phase < 1 ? "visible" : "hidden";

        groups.w.setAttribute("transform", "translate(" + worker.x + " " + worker.y + ")");

        // διάσταση: από την εμβέλεια του ρομπότ μέχρι τον εργαζόμενο
        const showDim = dist > REACH + 18;
        $("xd-dim").style.display = showDim ? "" : "none";
        if (showDim){
            const ux = (worker.x - BASE.x) / dist, uy = (worker.y - BASE.y) / dist;
            const p1 = { x: BASE.x + ux * REACH, y: BASE.y + uy * REACH };
            const p2 = { x: worker.x - ux * 14, y: worker.y - uy * 14 };
            set($("xd-dim-line"), { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
            set($("xd-dim-t"), { x: (p1.x + p2.x) / 2 + uy * 10, y: (p1.y + p2.y) / 2 - ux * 10 + 3 });
            $("xd-dim-t").textContent = fmt(sep, 2) + " m";
        }

        fig.dataset.state = state;
        $("xd-tb-safety").textContent = t("xdSafety") + " " + fmt(safety, 2);
        $("xd-tb-eff").textContent = t("xdEfficiency") + " " + fmt(eff, 2);
        $("xd-tb-status").textContent = t("xdStatus") + ": " +
            t({ ok: "xdOk", reduced: "xdReduced", stop: "xdStop" }[state]);
    }

    /* ---- Έναρξη σεναρίου: "σχεδιάζεται" φράση-φράση ---- */

    function finishIntro(){
        Object.values(groups).forEach(g => g.classList.add("drawn"));
        titleBlock.classList.add("drawn");
        $("xd-sentence").querySelectorAll(".xd-phrase").forEach(p => p.classList.add("on"));
        running = true;
    }

    function startScenario(index){
        introTimers.forEach(clearTimeout);
        introTimers = [];

        sc = (index + SCENARIOS.length) % SCENARIOS.length;
        layout();

        worker = { x: sd.path[0].x, y: sd.path[0].y };
        target = null; waypoint = 0; waitT = 0;
        userControl = false; dragging = false;
        running = false; phase = 0; speed = 1; safety = 1; eff = 1; scenarioTime = 0;

        Object.values(groups).forEach(g => g.classList.remove("drawn"));
        titleBlock.classList.remove("drawn");
        updateTexts();
        render(0);

        if (reduceMotion){ finishIntro(); return; }

        const phrases = Array.from($("xd-sentence").querySelectorAll(".xd-phrase"));
        phrases.forEach((p, i) => {
            introTimers.push(setTimeout(() => {
                p.classList.add("on");
                groups[p.dataset.el].classList.add("drawn");
            }, 400 + 650 * i));
        });
        introTimers.push(setTimeout(finishIntro, 400 + 650 * phrases.length + 300));
    }

    /* ---- Βρόχος ---- */

    function loop(ts){
        if (lastTs === null) lastTs = ts;
        const dt = Math.min(0.05, (ts - lastTs) / 1000);
        lastTs = ts;
        if (visible && !document.hidden) render(dt);
        requestAnimationFrame(loop);
    }

    // Παύση όταν το home δεν φαίνεται
    if ("IntersectionObserver" in window){
        new IntersectionObserver(entries => {
            visible = entries[0].isIntersecting;
            lastTs = null;
        }).observe(svg);
    }

    document.addEventListener("languagechange", updateTexts);

    setTimeout(() => {          // αφού οριστεί η γλώσσα
        startScenario(0);
        requestAnimationFrame(loop);
    }, 300);

})();

/* ---------- Διαδραστικός κύκλος CROSS στο home ----------
   Δείχνει τη ροή του CROSS για ένα σενάριο:
   1. Περιγραφή σε φυσική γλώσσα   2. Απαιτήσεις
   3. Παραγόμενο σενάριο            4. Βαθμολογία
   Ο χρήστης μπορεί να διαλέξει σενάριο ή να πατήσει ένα βήμα.
   Οι βαθμολογίες είναι ενδεικτικές.
*/

(function initCrossDemo(){

    if (HERO_ANIMATION !== "orb") return;
    const host = document.getElementById("hero-visual");
    if (!host) return;

    // Στυλ του κύκλου
    if (!document.getElementById("orb-styles")){
        const style = document.createElement("style");
        style.id = "orb-styles";
        style.textContent = `
#home .hero-visual{ position:relative; width:100%; max-width:460px; aspect-ratio:auto; justify-self:center; align-self:center; display:flex; flex-direction:column; align-items:center; gap:20px; }
@media (max-width:1024px){ #home .hero-visual{ max-width:420px; order:2; } }
@media (prefers-reduced-motion:reduce){ .scene-arm, .scene-human{ animation:none; } .scene-human{ transform:translate(var(--hx), var(--hy)); } }
/* ---------- Διαδραστικός κύκλος CROSS ----------
   Περιγραφή → Απαιτήσεις → Σενάριο → Βαθμολογία.
   Ο λευκός δακτύλιος δείχνει την πρόοδο και στο τέλος τη βαθμολογία. */

.orb{
    position:relative;
    width:100%;
    aspect-ratio:1 / 1;
    border-radius:50%;
    background:#006682;
    color:white;
    box-shadow:0 30px 60px rgba(0,102,130,0.28);
    container-type:inline-size;
}

.orb-ring{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    transform:rotate(-90deg);
}

.orb-ring-track{
    fill:none;
    stroke:rgba(255,255,255,0.18);
    stroke-width:1.2;
}

.orb-ring-progress{
    fill:none;
    stroke:white;
    stroke-width:1.6;
    stroke-linecap:round;
    stroke-dasharray:0 100;
    transition:stroke-dasharray 1s ease;
}

.orb-inner{
    position:absolute;
    inset:15%;
}

.orb-label{
    position:absolute;
    top:2%;
    left:0;
    right:0;
    text-align:center;
    font-size:max(11px, 3.2cqw);
    font-weight:600;
    letter-spacing:1px;
    text-transform:uppercase;
    opacity:0.75;
}

.orb-panel{
    position:absolute;
    inset:12% 0 0 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    opacity:0;
    transform:translateY(8px);
    transition:opacity 0.5s ease, transform 0.5s ease;
    pointer-events:none;
}

.orb-panel.active{
    opacity:1;
    transform:none;
}

.orb-sentence{
    font-size:max(15px, 5.2cqw);
    line-height:1.45;
    font-weight:300;
}

.orb-sentence .w{
    opacity:0;
    transition:opacity 0.25s ease;
}

.orb-sentence .w.on{
    opacity:1;
}

.orb-sentence mark{
    background:none;
    color:white;
    font-weight:600;
    border-bottom:2px solid rgba(255,255,255,0.7);
}

.orb-reqs{
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:8px;
    width:100%;
}

.orb-reqs li{
    padding:7px 12px;
    border:1px solid rgba(255,255,255,0.45);
    border-radius:8px;
    background:rgba(255,255,255,0.08);
    font-size:max(12px, 3.8cqw);
    line-height:1.3;
    text-align:left;
    opacity:0;
    transform:translateX(-10px);
    transition:opacity 0.4s ease, transform 0.4s ease;
}

.orb-reqs li.on{
    opacity:1;
    transform:none;
}

.orb-scene{
    width:100%;
    height:auto;
}

.scene-zone{
    fill:rgba(255,255,255,0.07);
    stroke:rgba(255,255,255,0.55);
    stroke-width:1.2;
    stroke-dasharray:4 4;
}

.scene-table{
    fill:none;
    stroke:rgba(255,255,255,0.7);
    stroke-width:1.2;
}

.scene-link{
    stroke:white;
    stroke-width:6;
    stroke-linecap:round;
}

.scene-part{
    fill:white;
}

.scene-base{
    fill:#004d63;
    stroke:white;
    stroke-width:2;
}

.scene-human ellipse{
    fill:white;
}

.scene-head{
    fill:white;
    stroke:#006682;
    stroke-width:1.5;
}

.scene-arm{
    transform-origin:80px 74px;
    animation:scene-swing 3s ease-in-out infinite alternate;
}

.scene-human{
    animation:scene-walk 3s ease-in-out infinite alternate;
}

/* ο εργαζόμενος σε κάθε σενάριο */
.orb[data-scenario="0"] .scene-human{ --hx:150px; --hy:96px; }
.orb[data-scenario="1"] .scene-human{ --hx:138px; --hy:60px; }
.orb[data-scenario="2"] .scene-human{ --hx:168px; --hy:40px; }

@keyframes scene-swing{
    from{ transform:rotate(35deg); }
    to  { transform:rotate(-50deg); }
}

@keyframes scene-walk{
    from{ transform:translate(var(--hx), var(--hy)); }
    to  { transform:translate(calc(var(--hx) + 14px), calc(var(--hy) - 10px)); }
}

.orb-score{
    font-size:max(44px, 20cqw);
    font-weight:700;
    line-height:1;
    font-variant-numeric:tabular-nums;
}

.orb-score small{
    font-size:0.3em;
    font-weight:300;
    opacity:0.8;
    margin-left:4px;
}

.orb-subscores{
    display:flex;
    gap:18px;
    margin-top:12px;
    font-size:max(12px, 3.8cqw);
    opacity:0.9;
}

.orb-subscores b{
    font-weight:600;
    font-variant-numeric:tabular-nums;
}

.orb-steps{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:6px;
}

.orb-steps button,
.orb-chips button{
    font-family:inherit;
    cursor:pointer;
    border-radius:999px;
    transition:background 0.3s, color 0.3s, border-color 0.3s;
}

.orb-steps button{
    padding:5px 12px;
    border:1px solid #cfdde3;
    background:white;
    color:#7a8d95;
    font-size:13px;
    font-weight:600;
}

.orb-steps button.done{
    color:#006682;
    border-color:#006682;
}

.orb-steps button.active{
    background:#006682;
    border-color:#006682;
    color:white;
}

.orb-scenarios{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;
}

.orb-scenarios-label{
    font-size:13px;
    color:#6b7c84;
}

.orb-chips{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:8px;
}

.orb-chips button{
    padding:8px 16px;
    border:1.5px solid #006682;
    background:transparent;
    color:#006682;
    font-size:15px;
    font-weight:600;
}

.orb-chips button:hover{
    background:rgba(0,102,130,0.08);
}

.orb-chips button[aria-pressed="true"]{
    background:#006682;
    color:white;
}

`;
        document.head.appendChild(style);
    }

    // Δομή του κύκλου (μπαίνει μέσα στο #hero-visual)
    host.removeAttribute("aria-hidden");
    host.innerHTML = `

        <div class="orb" id="orb" role="region" aria-roledescription="interactive demo" aria-live="polite">

            <svg class="orb-ring" viewBox="0 0 100 100" aria-hidden="true">
                <circle class="orb-ring-track" cx="50" cy="50" r="47"/>
                <circle class="orb-ring-progress" id="orb-ring" cx="50" cy="50" r="47" pathLength="100"/>
            </svg>

            <div class="orb-inner">

                <span class="orb-label" id="orb-label"></span>

                <!-- 1. Περιγραφή σε φυσική γλώσσα -->
                <div class="orb-panel" data-panel="0">
                    <p class="orb-sentence" id="orb-sentence"></p>
                </div>

                <!-- 2. Απαιτήσεις που εξάγονται -->
                <div class="orb-panel" data-panel="1">
                    <ul class="orb-reqs" id="orb-reqs"></ul>
                </div>

                <!-- 3. Παραγόμενο σενάριο -->
                <div class="orb-panel" data-panel="2">
                    <svg class="orb-scene" id="orb-scene" viewBox="0 0 200 140" aria-hidden="true">
                        <circle cx="80" cy="74" r="50" class="scene-zone"/>
                        <rect x="34" y="104" width="26" height="16" rx="2" class="scene-table"/>
                        <rect x="100" y="104" width="26" height="16" rx="2" class="scene-table"/>
                        <g class="scene-arm">
                            <line x1="80" y1="74" x2="80" y2="112" class="scene-link"/>
                            <rect x="75" y="108" width="10" height="8" rx="1.5" class="scene-part"/>
                        </g>
                        <circle cx="80" cy="74" r="9" class="scene-base"/>
                        <g class="scene-human">
                            <ellipse cx="0" cy="0" rx="11" ry="6"/>
                            <circle cx="0" cy="0" r="5" class="scene-head"/>
                        </g>
                    </svg>
                </div>

                <!-- 4. Βαθμολογία -->
                <div class="orb-panel" data-panel="3">
                    <div class="orb-score"><span id="orb-score">0</span><small>/100</small></div>
                    <div class="orb-subscores">
                        <span><span data-i18n="kpiSafety">Safety</span> <b id="orb-safety">0</b></span>
                        <span><span data-i18n="kpiEfficiency">Efficiency</span> <b id="orb-efficiency">0</b></span>
                    </div>
                </div>

            </div>
        </div>

        <!-- Βήματα: κλικ για μετάβαση -->
        <ol class="orb-steps" id="orb-steps">
            <li><button type="button" data-step="0" data-i18n="stepLanguage">Language</button></li>
            <li><button type="button" data-step="1" data-i18n="stepRequirements">Requirements</button></li>
            <li><button type="button" data-step="2" data-i18n="stepScenario">Scenario</button></li>
            <li><button type="button" data-step="3" data-i18n="stepScore">Score</button></li>
        </ol>

        <!-- Παραδείγματα σεναρίων: κλικ για νέο σενάριο -->
        <div class="orb-scenarios">
            <span class="orb-scenarios-label" data-i18n="tryScenario">Try a scenario:</span>
            <div class="orb-chips" id="orb-chips"></div>
        </div>
`;

    const orb = document.getElementById("orb");

    const $ = id => document.getElementById(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Ενδεικτικές βαθμολογίες ανά σενάριο
    const SCORES = [
        { total: 86, safety: 91, efficiency: 80 },
        { total: 78, safety: 84, efficiency: 72 },
        { total: 91, safety: 95, efficiency: 88 }
    ];
    const DURATION = [3600, 3000, 3000, 4500];   // ms ανά βήμα

    const panels = Array.from(orb.querySelectorAll(".orb-panel"));
    const stepButtons = Array.from(document.querySelectorAll("#orb-steps button"));
    const chipsWrap = $("orb-chips");
    const ring = $("orb-ring");

    let scenario = 0;
    let stage = 0;
    let timer = null;
    let paused = false;
    let animations = [];      // ενεργά timeouts/intervals του τρέχοντος βήματος

    function clearAnimations(){
        animations.forEach(id => { clearTimeout(id); clearInterval(id); });
        animations = [];
    }

    function data(){ return t("scenarios")[scenario]; }

    /* ---- Σενάρια (κουμπιά) ---- */

    function buildChips(){
        chipsWrap.innerHTML = "";
        t("scenarios").forEach((sc, i) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = sc.name;
            btn.setAttribute("aria-pressed", i === scenario);
            btn.addEventListener("click", () => {
                scenario = i;
                goTo(0, true);
            });
            chipsWrap.appendChild(btn);
        });
    }

    /* ---- Περιεχόμενο κάθε βήματος ---- */

    function renderSentence(animate){
        const box = $("orb-sentence");
        // *φράσεις* = λέξεις-κλειδιά που γίνονται απαιτήσεις
        const html = data().text
            .split(/(\*[^*]+\*)/)
            .filter(Boolean)
            .map(part => {
                const key = part.startsWith("*");
                const words = part.replace(/\*/g, "").split(" ").filter(Boolean)
                    .map(w => '<span class="w">' + w + '</span>').join(" ");
                return key ? "<mark>" + words + "</mark>" : words;
            })
            .join(" ")
            .replace(/ (<span class="w">[.,;:!?])/g, "$1");   // χωρίς κενό πριν τη στίξη
        box.innerHTML = html;

        const words = Array.from(box.querySelectorAll(".w"));
        if (!animate){ words.forEach(w => w.classList.add("on")); return; }
        words.forEach((w, i) => animations.push(setTimeout(() => w.classList.add("on"), 120 * i)));
    }

    function renderReqs(animate){
        const list = $("orb-reqs");
        list.innerHTML = data().reqs.map(r => "<li>" + r + "</li>").join("");
        const items = Array.from(list.children);
        if (!animate){ items.forEach(li => li.classList.add("on")); return; }
        items.forEach((li, i) => animations.push(setTimeout(() => li.classList.add("on"), 250 + 450 * i)));
    }

    function renderScore(animate){
        const s = SCORES[scenario];
        const set = v => {
            $("orb-score").textContent = Math.round(s.total * v);
            $("orb-safety").textContent = Math.round(s.safety * v);
            $("orb-efficiency").textContent = Math.round(s.efficiency * v);
        };
        if (!animate){ set(1); return; }
        const start = performance.now();
        const id = setInterval(() => {
            const p = Math.min(1, (performance.now() - start) / 1000);
            set(1 - Math.pow(1 - p, 3));
            if (p >= 1) clearInterval(id);
        }, 30);
        animations.push(id);
    }

    function setRing(){
        const value = stage < 3 ? (stage + 1) * 22 : SCORES[scenario].total;
        ring.style.strokeDasharray = value + " 100";
    }

    /* ---- Μετάβαση σε βήμα ---- */

    function goTo(newStage, userAction){
        clearAnimations();
        clearTimeout(timer);
        stage = newStage;
        const animate = !reduceMotion;

        orb.dataset.scenario = scenario;
        panels.forEach((p, i) => p.classList.toggle("active", i === stage));
        $("orb-label").textContent = t("stageTitles")[stage];

        stepButtons.forEach((b, i) => {
            b.classList.toggle("active", i === stage);
            b.classList.toggle("done", i < stage);
            b.setAttribute("aria-current", i === stage ? "step" : "false");
        });
        Array.from(chipsWrap.children).forEach((b, i) => b.setAttribute("aria-pressed", i === scenario));

        if (stage === 0) renderSentence(animate);
        if (stage === 1) renderReqs(animate);
        if (stage === 3) renderScore(animate);
        setRing();

        schedule(userAction ? 2000 : 0);
    }

    function next(){
        if (stage < 3) goTo(stage + 1);
        else { scenario = (scenario + 1) % SCORES.length; goTo(0); }
    }

    function schedule(extra){
        clearTimeout(timer);
        if (reduceMotion || paused) return;
        timer = setTimeout(next, DURATION[stage] + (extra || 0));
    }

    stepButtons.forEach(btn => {
        btn.addEventListener("click", () => goTo(Number(btn.dataset.step), true));
    });

    // Κλικ στον κύκλο: επόμενο βήμα
    orb.addEventListener("click", () => next());
    orb.style.cursor = "pointer";

    // Παύση όσο ο χρήστης είναι πάνω στο demo
    const visual = $("hero-visual");
    visual.addEventListener("pointerenter", e => { if (e.pointerType === "mouse"){ paused = true; clearTimeout(timer); } });
    visual.addEventListener("pointerleave", e => { if (e.pointerType === "mouse"){ paused = false; schedule(); } });

    // Αλλαγή γλώσσας: ξαναγράφει το τρέχον βήμα χωρίς animation
    document.addEventListener("languagechange", () => {
        buildChips();
        $("orb-label").textContent = t("stageTitles")[stage];
        renderSentence(false);
        renderReqs(false);
        renderScore(false);
    });

    buildChips();
    renderReqs(false);
    renderScore(false);
    setTimeout(() => goTo(0), 300);   // αφού οριστεί η γλώσσα

})();

/* ---------- Home: κάτοψη κυψέλης μέσα σε κύκλο (ζωντανή προσομοίωση) ----------
   Μόνο ο κύκλος με την κίνηση: το ρομπότ κάνει pick & place, ο εργαζόμενος
   κινείται, και το ρομπότ επιβραδύνει/σταματά στις ζώνες ασφαλείας.
   Ο εργαζόμενος ακολουθεί το ποντίκι (ή tap στο κινητό).
*/

(function initHeroCell(){

    if (HERO_ANIMATION !== "cell") return;
    const host = document.getElementById("hero-visual");
    if (!host) return;

    /* ---- Στυλ ---- */

    if (!document.getElementById("cell-styles")){
        const style = document.createElement("style");
        style.id = "cell-styles";
        style.textContent = `
#home .hero-visual{ position:relative; width:100%; max-width:480px; aspect-ratio:auto; justify-self:center; align-self:center; display:block; }
@media (max-width:1024px){ #home .hero-visual{ max-width:380px; order:2; } }
.hero-scene{ width:100%; height:auto; display:block; cursor:crosshair; filter:drop-shadow(0 24px 40px rgba(0,102,130,.25)); }
`;
        document.head.appendChild(style);
    }

    /* ---- Δομή ---- */

    host.removeAttribute("aria-hidden");
    host.innerHTML = `
        <svg class="hero-scene" id="hero-scene" viewBox="0 0 400 400" role="img" aria-labelledby="hero-scene-title">
            <title id="hero-scene-title" data-i18n="heroSceneLabel">Simulated human-robot work cell with safety zones</title>
            <defs>
                <clipPath id="cell-clip"><circle cx="200" cy="200" r="190"/></clipPath>
                <pattern id="cell-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0H0V20" fill="none" stroke="#ffffff" stroke-opacity="0.07" stroke-width="1"/>
                </pattern>
            </defs>

            <circle cx="200" cy="200" r="190" fill="#006682"/>

            <g clip-path="url(#cell-clip)">
                <rect width="400" height="400" fill="url(#cell-grid)"/>

                <circle id="zone-warn" cx="200" cy="215" r="130" fill="#ffffff" fill-opacity="0.04"
                        stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="6 6"/>
                <circle id="zone-stop" cx="200" cy="215" r="80" fill="#ffffff" fill-opacity="0.06"
                        stroke="#ffffff" stroke-opacity="0.5" stroke-width="1.5"/>

                <rect x="104" y="281" width="40" height="26" rx="3" fill="none" stroke="#ffffff" stroke-opacity="0.6" stroke-width="1.5"/>
                <rect x="268" y="281" width="40" height="26" rx="3" fill="none" stroke="#ffffff" stroke-opacity="0.6" stroke-width="1.5"/>
                <g id="placed-parts" fill="#ffffff" fill-opacity="0.55"></g>

                <line id="sep-line" x1="200" y1="215" x2="200" y2="215" stroke="#ffffff" stroke-width="1" stroke-dasharray="3 4" stroke-opacity="0"/>

                <g id="robot" stroke="#ffffff" stroke-linecap="round">
                    <line id="link1" x1="200" y1="215" x2="200" y2="215" stroke-width="12"/>
                    <line id="link2" x1="200" y1="215" x2="200" y2="215" stroke-width="8"/>
                    <circle cx="200" cy="215" r="17" fill="#004d63" stroke-width="3"/>
                    <circle id="elbow" cx="200" cy="215" r="7" fill="#004d63" stroke-width="3"/>
                    <rect id="part" x="-6" y="-6" width="12" height="12" rx="2" fill="#ffffff" stroke="none"/>
                </g>

                <g id="human">
                    <ellipse rx="16" ry="9" fill="#ffffff" fill-opacity="0.9"/>
                    <circle r="7.5" fill="#ffffff" stroke="#006682" stroke-width="2"/>
                </g>
            </g>
        </svg>
`;

    const scene = document.getElementById("hero-scene");
    const $ = id => document.getElementById(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    // Γεωμετρία (μονάδες SVG, 100 μονάδες = 1 μέτρο)
    const BASE = { x: 200, y: 215 };
    const L1 = 72, L2 = 58;                  // μήκη βραχιόνων
    const R_WARN = 130, R_STOP = 80;         // ζώνη επιβράδυνσης / ζώνη στάσης
    const PICK_ANGLE = 2.33, PLACE_ANGLE = 0.81, REACH = 108;
    const CELL = { x: 200, y: 200, r: 168 }; // όριο κίνησης εργαζομένου

    const el = {
        link1: $("link1"), link2: $("link2"), elbow: $("elbow"), part: $("part"),
        human: $("human"), sep: $("sep-line"), warn: $("zone-warn"), stop: $("zone-stop"),
        placed: $("placed-parts")
    };

    let phase = 0;
    let speed = 1;
    let placedCount = 0;
    let carrying = true;
    let simTime = 0;
    let human = { x: 90, y: 120, angle: 0 };
    let pointerTarget = null;
    let started = false;
    let visible = true;
    let lastTs = null;

    function start(){
        started = true;
        render(0);
    }

    /* ---- Κινηματική ρομπότ ---- */

    function ik(tx, ty){
        const dx = tx - BASE.x, dy = ty - BASE.y;
        const d = Math.min(Math.max(Math.hypot(dx, dy), Math.abs(L1 - L2) + 1), L1 + L2 - 1);
        const q2 = Math.acos((d * d - L1 * L1 - L2 * L2) / (2 * L1 * L2));
        const q1 = Math.atan2(dy, dx) - Math.atan2(L2 * Math.sin(q2), L1 + L2 * Math.cos(q2));
        const ex = BASE.x + L1 * Math.cos(q1), ey = BASE.y + L1 * Math.sin(q1);
        return { ex, ey, x: ex + L2 * Math.cos(q1 + q2), y: ey + L2 * Math.sin(q1 + q2) };
    }

    const smooth = u => u * u * (3 - 2 * u);

    function toolTarget(p){
        const forward = p < 1;
        const u = smooth(forward ? p : p - 1);
        const a = forward
            ? PICK_ANGLE + (PLACE_ANGLE - PICK_ANGLE) * u
            : PLACE_ANGLE + (PICK_ANGLE - PLACE_ANGLE) * u;
        const r = REACH - 22 * Math.sin(Math.PI * u);
        return { x: BASE.x + r * Math.cos(a), y: BASE.y + r * Math.sin(a) };
    }

    /* ---- Εργαζόμενος ---- */

    function autoPath(time){
        return {
            x: CELL.x + 125 * Math.cos(0.31 * time + 0.6),
            y: CELL.y - 10 + 120 * Math.sin(0.47 * time)
        };
    }

    function clampToCell(p){
        const dx = p.x - CELL.x, dy = p.y - CELL.y, d = Math.hypot(dx, dy);
        if (d <= CELL.r) return p;
        return { x: CELL.x + dx / d * CELL.r, y: CELL.y + dy / d * CELL.r };
    }

    function toSvg(e){
        const pt = scene.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        return pt.matrixTransform(scene.getScreenCTM().inverse());
    }

    if (isTouch){
        scene.addEventListener("pointerdown", e => { pointerTarget = clampToCell(toSvg(e)); });
    } else {
        scene.addEventListener("pointermove", e => { pointerTarget = clampToCell(toSvg(e)); });
        scene.addEventListener("pointerleave", () => { pointerTarget = null; });
    }

    /* ---- Βρόχος προσομοίωσης ---- */

    function step(dt){
        if (!reduceMotion) simTime += dt;

        const target = pointerTarget || (reduceMotion ? human : autoPath(simTime));
        const dx = target.x - human.x, dy = target.y - human.y;
        const dist = Math.hypot(dx, dy);
        const maxMove = (reduceMotion ? 10000 : 110) * dt;
        if (dist > 0.5){
            const k = Math.min(1, maxMove / dist);
            human.x += dx * k; human.y += dy * k;
            human.angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
        }

        // speed & separation monitoring
        const sep = Math.hypot(human.x - BASE.x, human.y - BASE.y);
        let allowed = 1, state = "full";
        if (sep < R_STOP){ allowed = 0; state = "stop"; }
        else if (sep < R_WARN){ allowed = 0.35; state = "reduced"; }

        speed += (allowed - speed) * Math.min(1, dt * 6);

        if (!reduceMotion){
            const before = phase;
            phase = (phase + dt * 0.45 * speed) % 2;
            if (before < 1 && phase >= 1){ carrying = false; dropPart(); }
            if (before > phase){ carrying = true; }
        }

        return { sep, state };
    }

    function dropPart(){
        placedCount++;
        const slot = (placedCount - 1) % 6;
        if (slot === 0) el.placed.innerHTML = "";
        const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        r.setAttribute("x", 272 + (slot % 3) * 11);
        r.setAttribute("y", 285 + Math.floor(slot / 3) * 10);
        r.setAttribute("width", 8); r.setAttribute("height", 8); r.setAttribute("rx", 1.5);
        el.placed.appendChild(r);
    }

    function render(dt){
        const { sep, state } = step(dt);

        const tool = toolTarget(phase);
        const k = ik(tool.x, tool.y);
        el.link1.setAttribute("x2", k.ex); el.link1.setAttribute("y2", k.ey);
        el.link2.setAttribute("x1", k.ex); el.link2.setAttribute("y1", k.ey);
        el.link2.setAttribute("x2", k.x);  el.link2.setAttribute("y2", k.y);
        el.elbow.setAttribute("cx", k.ex); el.elbow.setAttribute("cy", k.ey);
        el.part.setAttribute("transform", "translate(" + k.x + " " + k.y + ")");
        el.part.style.opacity = carrying ? 1 : 0;

        el.human.setAttribute("transform",
            "translate(" + human.x + " " + human.y + ") rotate(" + human.angle + ")");

        el.sep.setAttribute("x2", human.x); el.sep.setAttribute("y2", human.y);
        el.sep.setAttribute("stroke-opacity", sep < R_WARN ? 0.8 : 0);

        el.warn.setAttribute("stroke", state === "reduced" ? "#f2a516" : "#ffffff");
        el.warn.setAttribute("fill", state === "reduced" ? "#f2a516" : "#ffffff");
        el.warn.setAttribute("fill-opacity", state === "reduced" ? 0.14 : 0.04);
        el.stop.setAttribute("stroke", state === "stop" ? "#e5484d" : "#ffffff");
        el.stop.setAttribute("fill", state === "stop" ? "#e5484d" : "#ffffff");
        el.stop.setAttribute("fill-opacity", state === "stop" ? 0.22 : 0.06);

    }

    function loop(ts){
        if (lastTs === null) lastTs = ts;
        const dt = Math.min(0.05, (ts - lastTs) / 1000);
        lastTs = ts;
        if (started && visible && !document.hidden) render(dt);
        requestAnimationFrame(loop);
    }

    // Παύση όταν το home δεν φαίνεται
    if ("IntersectionObserver" in window){
        new IntersectionObserver(entries => {
            visible = entries[0].isIntersecting;
            lastTs = null;
        }).observe(scene);
    }

    human = autoPath(0);
    start();
    requestAnimationFrame(loop);

})();

/* ---------- Αρχική γλώσσα ---------- */
/* Προτεραιότητα: ?lang=de στο URL → προηγούμενη επιλογή → αγγλικά */

(function initLanguage(){
    let language = new URLSearchParams(window.location.search).get("lang");

    if (!SUPPORTED_LANGUAGES.includes(language)){
        try { language = localStorage.getItem("cross-language"); } catch (e) { language = null; }
    }

    changeLanguage(SUPPORTED_LANGUAGES.includes(language) ? language : "en");
})();
