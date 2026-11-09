const translations = {

    en: {

        navHome: "Home",
        navProject: "Project",
        navApproach: "Approach",
        navBenefits: "Benefits",
        navNews: "News",
        navPublications: "Publications",
        navContact: "Contact"

    },

    de: {

        navHome: "Startseite",
        navProject: "Projekt",
        navApproach: "Vorgehensweise",
        navBenefits: "Vorteile",
        navNews: "Neuigkeiten",
        navPublications: "Veröffentlichungen",
        navContact: "Kontakt"

    }

};

function changeLanguage(language){

    document.getElementById("nav-home").innerText =
        translations[language].navHome;

    document.getElementById("nav-project").innerText =
        translations[language].navProject;

    document.getElementById("nav-approach").innerText =
        translations[language].navApproach;

    document.getElementById("nav-benefits").innerText =
        translations[language].navBenefits;

    document.getElementById("nav-news").innerText =
        translations[language].navNews;

    document.getElementById("nav-publications").innerText =
        translations[language].navPublications;

    document.getElementById("nav-contact").innerText =
        translations[language].navContact;
}
