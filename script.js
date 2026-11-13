/* ---------- Γλώσσα ---------- */

const translations = {

    en: {
        navHome: "Home",
        navProject: "Project",
        navApproach: "Approach",
        navBenefits: "Benefits",
        navNews: "News",
        navPublications: "Publications",
        navContact: "Contact",

        heroTitle: "CROSS: Collaborative Robotics Scenario Scoring",
        heroSubtitle: "From natural language to scored robot scenarios.",
        heroText: "CROSS develops a software toolchain that turns natural-language descriptions into robot scenarios automatically, then visualizes and evaluates them with simulation and AI, in a way people can understand.",
        fundingHero: "Funded by the Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg under the Invest BW programme (Innovation IV).",
        durationHero: "Project Duration: 01/03/2026 – 28/02/2028",

        projectTitle: "Project",
        challengeTitle: "The challenge",
        challenge1: "Collaborative robots are increasingly used in industry to support human workers, offering flexibility and efficiency. Integrating them safely while maintaining productivity is a major challenge.",
        challenge2: "Today, integration requires many manual and iterative steps and a great deal of expert knowledge and effort.",
        goalTitle: "Our goal",
        goal1: "CROSS develops an innovative simulation-based software tool for the safety validation and optimisation of human-robot collaboration systems.",
        goal2: "The toolchain generates robot scenarios automatically from natural language and evaluates them through simulation and AI.",
        projectBenefitsTitle: "The benefits",
        projectBenefits: "Faster planning, easier access for non-experts and reduced dependence on a single robot manufacturer.",

        approachTitle: "Approach",
        approachIntro: "CROSS connects every step from an idea to an evaluated scenario in one toolchain.",
        appNlTitle: "Natural Language",
        appNlText: "Users describe the planned collaboration scenario in plain words. No programming or simulation expertise is needed.",
        appAiTitle: "AI-based Requirements Engineering",
        appAiText: "AI extracts clear, structured requirements from the description.",
        appSdlTitle: "SDL Formalization",
        appSdlText: "The requirements are translated into a formal machine-readable scenario description.",
        appSimTitle: "Simulation",
        appSimText: "The scenario is simulated and visualized so interactions can be evaluated before deployment.",
        appKpiTitle: "KPI Evaluation",
        appKpiText: "Safety and efficiency indicators are calculated and presented in an understandable way.",
        vendorTitle: "Vendor-independent by design",
        vendorText: "CROSS builds on open, manufacturer-independent standards and works with many simulation tools. Users are not locked into a specific robot manufacturer.",

        benefitsHeading: "Benefits",
        b1Title: "Faster planning and evaluation",
        b1Text: "Automation replaces many manual, iterative steps in planning and safety validation.",
        b2Title: "Accessible to non-experts",
        b2Text: "A description in natural language is enough to create and assess a scenario.",
        b3Title: "Lower costs, especially for SMEs",
        b3Text: "Less expert effort and shorter projects make collaborative robots affordable for more companies.",
        b4Title: "No vendor lock-in",
        b4Text: "Open standards and compatibility with many simulation tools keep users independent of any single manufacturer.",
        b5Title: "Understandable results",
        b5Text: "Clear visualizations and scores support informed, transparent decisions.",

        newsTitle: "News",
        newsHeadline: "CROSS presented at TÜV SÜD Mobile Robotics Conference",
        newsMeta: "27 October 2026, Munich, Germany",
        newsP1: "Dr. Ali Al-Yacoub (TWT GmbH Science & Innovation) presented CROSS at the TÜV SÜD conference \"Mobile Robotics: Safety-Critical Applications & Machinery\" in Munich.",
        newsP2: "In his talk, \"Automating risk assessment for human-robot collaboration\", he demonstrated how the CROSS toolchain automates safety assessment for collaborative robot applications.",

        publicationsTitle: "Publications",
        contactTitle: "Contacts",
        contactFunding: "CROSS is funded by the Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg under the Invest BW programme (Innovation IV) · Project duration: 01/03/2026 – 28/02/2028 · The project is conducted entirely by TWT GmbH Science & Innovation."
    },

    de: {
        navHome: "Startseite",
        navProject: "Projekt",
        navApproach: "Vorgehensweise",
        navBenefits: "Vorteile",
        navNews: "Neuigkeiten",
        navPublications: "Veröffentlichungen",
        navContact: "Kontakt",

        heroTitle: "CROSS: Bewertung kollaborativer Robotik-Szenarien",
        heroSubtitle: "Von natürlicher Sprache zu bewerteten Robotik-Szenarien.",
        heroText: "CROSS entwickelt eine Software-Toolchain, die Beschreibungen in natürlicher Sprache automatisch in Robotik-Szenarien umwandelt und diese anschließend mit Simulation und KI visualisiert und bewertet, und zwar so, dass Menschen sie verstehen können.",
        fundingHero: "Gefördert vom Ministerium für Wirtschaft, Arbeit und Tourismus Baden-Württemberg im Rahmen des Programms Invest BW (Innovation IV).",
        durationHero: "Projektlaufzeit: 01.03.2026 – 28.02.2028",

        projectTitle: "Projekt",
        challengeTitle: "Die Herausforderung",
        challenge1: "Kollaborative Roboter werden in der Industrie zunehmend eingesetzt, um menschliche Arbeitskräfte zu unterstützen, und bieten Flexibilität und Effizienz. Ihre sichere Integration bei gleichbleibender Produktivität ist eine große Herausforderung.",
        challenge2: "Heute erfordert die Integration viele manuelle und iterative Schritte sowie großes Expertenwissen und viel Aufwand.",
        goalTitle: "Unser Ziel",
        goal1: "CROSS entwickelt ein innovatives, simulationsbasiertes Softwarewerkzeug für die Sicherheitsvalidierung und Optimierung von Mensch-Roboter-Kollaborationssystemen.",
        goal2: "Die Toolchain erzeugt Robotik-Szenarien automatisch aus natürlicher Sprache und bewertet sie durch Simulation und KI.",
        projectBenefitsTitle: "Die Vorteile",
        projectBenefits: "Schnellere Planung, einfacherer Zugang für Nicht-Experten und geringere Abhängigkeit von einem einzelnen Roboterhersteller.",

        approachTitle: "Vorgehensweise",
        approachIntro: "CROSS verbindet alle Schritte von der Idee bis zum bewerteten Szenario in einer einzigen Toolchain.",
        appNlTitle: "Natürliche Sprache",
        appNlText: "Nutzer beschreiben das geplante Kollaborationsszenario in einfachen Worten. Programmier- oder Simulationskenntnisse sind nicht erforderlich.",
        appAiTitle: "KI-basiertes Requirements Engineering",
        appAiText: "KI extrahiert klare, strukturierte Anforderungen aus der Beschreibung.",
        appSdlTitle: "SDL-Formalisierung",
        appSdlText: "Die Anforderungen werden in eine formale, maschinenlesbare Szenariobeschreibung überführt.",
        appSimTitle: "Simulation",
        appSimText: "Das Szenario wird simuliert und visualisiert, sodass Interaktionen vor dem Einsatz bewertet werden können.",
        appKpiTitle: "KPI-Bewertung",
        appKpiText: "Sicherheits- und Effizienzkennzahlen werden berechnet und verständlich dargestellt.",
        vendorTitle: "Von Grund auf herstellerunabhängig",
        vendorText: "CROSS basiert auf offenen, herstellerunabhängigen Standards und arbeitet mit vielen Simulationswerkzeugen zusammen. Nutzer sind nicht an einen bestimmten Roboterhersteller gebunden.",

        benefitsHeading: "Vorteile",
        b1Title: "Schnellere Planung und Bewertung",
        b1Text: "Automatisierung ersetzt viele manuelle, iterative Schritte in Planung und Sicherheitsvalidierung.",
        b2Title: "Zugänglich für Nicht-Experten",
        b2Text: "Eine Beschreibung in natürlicher Sprache genügt, um ein Szenario zu erstellen und zu bewerten.",
        b3Title: "Geringere Kosten, besonders für KMU",
        b3Text: "Weniger Expertenaufwand und kürzere Projekte machen kollaborative Roboter für mehr Unternehmen erschwinglich.",
        b4Title: "Keine Herstellerbindung",
        b4Text: "Offene Standards und Kompatibilität mit vielen Simulationswerkzeugen machen Nutzer unabhängig von einzelnen Herstellern.",
        b5Title: "Verständliche Ergebnisse",
        b5Text: "Klare Visualisierungen und Bewertungen unterstützen fundierte und transparente Entscheidungen.",

        newsTitle: "Neuigkeiten",
        newsHeadline: "CROSS auf der TÜV SÜD Mobile Robotics Conference vorgestellt",
        newsMeta: "27. Oktober 2026, München, Deutschland",
        newsP1: "Dr. Ali Al-Yacoub (TWT GmbH Science & Innovation) stellte CROSS auf der TÜV-SÜD-Konferenz „Mobile Robotics: Safety-Critical Applications & Machinery“ in München vor.",
        newsP2: "In seinem Vortrag „Automating risk assessment for human-robot collaboration“ zeigte er, wie die CROSS-Toolchain die Sicherheitsbewertung für kollaborative Roboteranwendungen automatisiert.",

        publicationsTitle: "Veröffentlichungen",
        contactTitle: "Kontakt",
        contactFunding: "CROSS wird vom Ministerium für Wirtschaft, Arbeit und Tourismus Baden-Württemberg im Rahmen des Programms Invest BW (Innovation IV) gefördert · Projektlaufzeit: 01.03.2026 – 28.02.2028 · Das Projekt wird vollständig von TWT GmbH Science & Innovation durchgeführt."
    }

};

function changeLanguage(language){

    const t = translations[language];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.documentElement.lang = language;
    document.getElementById("language-select").value = language;
    localStorage.setItem("crossLang", language);
}

// Φόρτωση της αποθηκευμένης γλώσσας (ή αγγλικά by default)
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("crossLang") || "en";
    changeLanguage(saved);
});
