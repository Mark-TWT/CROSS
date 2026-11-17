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

        // Interactive demo (home)
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
        partnerLoiBadge: "Letter of Intent (LoI)",

        // Contact
        contactTitle: "Contacts",
        contactCity: "70565 Stuttgart/Germany",
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

        // Interactive demo (home)
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
        partnerLoiBadge: "Absichtserklärung (Letter of Intent, LoI)",

        // Contact
        contactTitle: "Kontakt",
        contactCity: "70565 Stuttgart/Deutschland",
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

    // Ενημερώνει το menu και το carousel
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

/* ---------- Διαδραστικός κύκλος CROSS στο home ----------
   Δείχνει τη ροή του CROSS για ένα σενάριο:
   1. Περιγραφή σε φυσική γλώσσα   2. Απαιτήσεις
   3. Παραγόμενο σενάριο            4. Βαθμολογία
   Ο χρήστης μπορεί να διαλέξει σενάριο ή να πατήσει ένα βήμα.
   Οι βαθμολογίες είναι ενδεικτικές.
*/

(function initCrossDemo(){

    const orb = document.getElementById("orb");
    if (!orb) return;

    const $ = id => document.getElementById(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Ενδεικτικές βαθμολογίες ανά σενάριο
    const SCORES = [
        { total: 86, safety: 91, efficiency: 80 },
        { total: 78, safety: 84, efficiency: 72 },
        { total: 91, safety: 95, efficiency: 88 }
    ];
    const DURATION = [3600, 3000, 3000, 4500];   // ms ανά βήμα

    const panels = Array.from(orb.querySelectorAll(".orb-panel"));
    const stepButtons = Array.from(document.querySelectorAll("#orb-steps button"));
    const chipsWrap = $("orb-chips");
    const ring = $("orb-ring");

    let scenario = 0;
    let stage = 0;
    let timer = null;
    let paused = false;
    let animations = [];      // ενεργά timeouts/intervals του τρέχοντος βήματος

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
            .replace(/ (<span class="w">[.,;:!?])/g, "$1");   // χωρίς κενό πριν τη στίξη
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
    setTimeout(() => goTo(0), 300);   // αφού οριστεί η γλώσσα

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
