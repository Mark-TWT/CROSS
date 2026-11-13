/* =========================================================
   CROSS — script.js
   ========================================================= */

/* ---------- Γλώσσα ---------- */

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

    const t = translations[language];
    if (!t) return;

    document.getElementById("nav-home").innerText = t.navHome;
    document.getElementById("nav-project").innerText = t.navProject;
    document.getElementById("nav-approach").innerText = t.navApproach;
    document.getElementById("nav-benefits").innerText = t.navBenefits;
    document.getElementById("nav-news").innerText = t.navNews;
    document.getElementById("nav-publications").innerText = t.navPublications;
    document.getElementById("nav-contact").innerText = t.navContact;

    document.documentElement.lang = language;
}

/* ---------- Mobile menu ---------- */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

function setMenu(open){
    navLinks.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuToggle.textContent = open ? "✕" : "☰";
}

menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("active"));
});

// Κλείνει το menu όταν πατηθεί κάποιο link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
});

// Κλείνει το menu αν μεγαλώσει η οθόνη
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) setMenu(false);
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
            dot.setAttribute("aria-label", "Slide " + (i + 1));
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

    buildDots();
    startAutoplay();

})();
