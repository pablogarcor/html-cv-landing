const languageNames = {
    us: "US English",
    es: "Espanol",
};

const profileThemes = {
    es: {
        image: "./assets/profile-es.webp",
        width: 306,
        height: 610,
        accent: "#0f7f70",
        accentRgb: "15 127 112",
        strong: "#e0523f",
    },
    us: {
        image: "./assets/profile-us.webp",
        width: 306,
        height: 610,
        accent: "#275ca8",
        accentRgb: "39 92 168",
        strong: "#cf3f49",
    },
};

const content = {
    es: {
        metaTitle: "Pablo | CV Landing",
        metaDescription: "Landing CV bilingue para Pablo, desarrollador web orientado a producto.",
        brand: "Pablo",
        navProfile: "Perfil",
        navExperience: "Experiencia",
        navSkills: "Skills",
        navContact: "Contacto",
        eyebrow: "CV landing bilingue",
        heroName: "Pablo",
        heroRole: "Desarrollador web orientado a producto",
        heroSummary: "Diseno y desarrollo experiencias web claras, rapidas y faciles de mantener, con foco en producto, detalle visual y entrega real.",
        primaryAction: "Hablemos",
        secondaryAction: "Ver experiencia",
        stat1Value: "Frontend",
        stat1Label: "Interfaces responsivas",
        stat2Value: "Producto",
        stat2Label: "Decisiones medibles",
        stat3Value: "AI",
        stat3Label: "Automatizacion aplicada",
        profileTitle: "Modo ES",
        profileReference: "Criterio claro, ritmo mediterraneo y producto listo para salir.",
        profileAlt: "Retrato de Pablo para la version espanola",
        sectionProfileEyebrow: "Perfil",
        sectionProfileTitle: "Un CV que funciona como conversacion.",
        sectionProfileIntro: "La pagina resume forma de trabajar, criterio tecnico y energia visual en un formato directo para recruiters, clientes y equipos.",
        highlight1Title: "Pensamiento de producto",
        highlight1Body: "Conecto objetivos, usuarios y restricciones antes de escribir codigo.",
        highlight2Title: "Frontend cuidado",
        highlight2Body: "Sistemas UI claros, accesibles y mantenibles para crecer sin friccion.",
        highlight3Title: "Entrega pragmatica",
        highlight3Body: "Iteraciones cortas, demos frecuentes y documentacion util para decidir mejor.",
        sectionExperienceEyebrow: "Experiencia",
        sectionExperienceTitle: "Trabajo presentado por impacto, no por ruido.",
        sectionExperienceIntro: "Estos bloques son editables: sustituyelos por proyectos reales, metricas y enlaces cuando tengas el contenido definitivo.",
        experience1Date: "Actualidad",
        experience1Title: "Interfaces de producto para equipos digitales",
        experience1Body: "Diseno de flujos, componentes y paginas que reducen complejidad y aceleran decisiones.",
        experience2Date: "Proyecto destacado",
        experience2Title: "Dashboards y automatizacion aplicada",
        experience2Body: "Integracion de datos, estados vacios y acciones guiadas para operaciones mas claras.",
        experience3Date: "Base tecnica",
        experience3Title: "Sistemas visuales escalables",
        experience3Body: "Estructura CSS, tokens, patrones responsive y componentes preparados para evolucionar.",
        sectionSkillsEyebrow: "Skills",
        sectionSkillsTitle: "Stack ligero, criterio fuerte.",
        sectionSkillsIntro: "La landing esta hecha sin build step para ser facil de revisar, publicar y personalizar.",
        skill1Title: "Frontend",
        skill1A: "HTML semantico",
        skill1B: "CSS responsive",
        skill1C: "JavaScript modular",
        skill2Title: "Producto",
        skill2A: "Priorizacion",
        skill2B: "Metrica y narrativa",
        skill2C: "Prototipado rapido",
        skill3Title: "Colaboracion",
        skill3A: "Comunicacion async",
        skill3B: "Documentacion clara",
        skill3C: "Handoffs accionables",
        sectionContactEyebrow: "Contacto",
        sectionContactTitle: "Trabajemos en algo que merezca ser usado.",
        sectionContactIntro: "Actualiza estos enlaces con tu email, LinkedIn, GitHub o portfolio y deja esta seccion lista para convertir visitas en conversaciones.",
        emailAction: "Enviar email",
        linkedinAction: "LinkedIn",
        githubAction: "GitHub",
        footerText: "CV landing vivo, bilingue y preparado para evolucionar con contenido real.",
    },
    us: {
        metaTitle: "Pablo | CV Landing",
        metaDescription: "Bilingual CV landing page for Pablo, a product-minded web developer.",
        brand: "Pablo",
        navProfile: "Profile",
        navExperience: "Experience",
        navSkills: "Skills",
        navContact: "Contact",
        eyebrow: "Bilingual CV landing",
        heroName: "Pablo",
        heroRole: "Product-minded web developer",
        heroSummary: "I design and build clear, fast, maintainable web experiences with product focus, visual care, and real delivery discipline.",
        primaryAction: "Email me",
        secondaryAction: "View experience",
        stat1Value: "Frontend",
        stat1Label: "Responsive interfaces",
        stat2Value: "Product",
        stat2Label: "Measurable decisions",
        stat3Value: "AI",
        stat3Label: "Applied automation",
        profileTitle: "US mode",
        profileReference: "Clear async writing, global context, and delivery without theatre.",
        profileAlt: "Portrait of Pablo for the US version",
        sectionProfileEyebrow: "Profile",
        sectionProfileTitle: "A CV that behaves like a conversation.",
        sectionProfileIntro: "The page compresses working style, technical judgment, and visual energy into a direct format for recruiters, clients, and teams.",
        highlight1Title: "Product thinking",
        highlight1Body: "I connect goals, users, and constraints before writing code.",
        highlight2Title: "Careful frontend",
        highlight2Body: "Clear, accessible, maintainable UI systems that can grow without friction.",
        highlight3Title: "Pragmatic delivery",
        highlight3Body: "Short iterations, frequent demos, and useful documentation for better decisions.",
        sectionExperienceEyebrow: "Experience",
        sectionExperienceTitle: "Work presented by impact, not noise.",
        sectionExperienceIntro: "These blocks are editable: replace them with real projects, metrics, and links once the final content is ready.",
        experience1Date: "Current",
        experience1Title: "Product interfaces for digital teams",
        experience1Body: "Flow, component, and page design that reduces complexity and speeds up decisions.",
        experience2Date: "Featured project",
        experience2Title: "Dashboards and applied automation",
        experience2Body: "Data integration, empty states, and guided actions for clearer operations.",
        experience3Date: "Technical base",
        experience3Title: "Scalable visual systems",
        experience3Body: "CSS structure, tokens, responsive patterns, and components ready to evolve.",
        sectionSkillsEyebrow: "Skills",
        sectionSkillsTitle: "Light stack, strong judgment.",
        sectionSkillsIntro: "The landing has no build step, so it is easy to review, publish, and customize.",
        skill1Title: "Frontend",
        skill1A: "Semantic HTML",
        skill1B: "Responsive CSS",
        skill1C: "Modular JavaScript",
        skill2Title: "Product",
        skill2A: "Prioritization",
        skill2B: "Metrics and narrative",
        skill2C: "Fast prototyping",
        skill3Title: "Collaboration",
        skill3A: "Async communication",
        skill3B: "Clear documentation",
        skill3C: "Actionable handoffs",
        sectionContactEyebrow: "Contact",
        sectionContactTitle: "Let us build something worth using.",
        sectionContactIntro: "Update these links with your email, LinkedIn, GitHub, or portfolio and leave this section ready to turn visits into conversations.",
        emailAction: "Email me",
        linkedinAction: "LinkedIn",
        githubAction: "GitHub",
        footerText: "A living, bilingual CV landing page ready to evolve with real content.",
    },
};

const supportedLanguages = Object.keys(content);
const defaultLanguage = "us";
const languageStorageKey = "cv-language-v2";
const documentLanguages = {
    es: "es",
    us: "en-US",
};
const translatableNodes = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll("[data-language]");
const profileImage = document.querySelector("#profileImage");
const metaDescription = document.querySelector("meta[name='description']");

function applyTheme(language) {
    const theme = profileThemes[language];

    document.body.dataset.locale = language;
    document.body.style.setProperty("--accent", theme.accent);
    document.body.style.setProperty("--accent-rgb", theme.accentRgb);
    document.body.style.setProperty("--accent-strong", theme.strong);
    document.body.style.setProperty("--portrait-width", `${theme.width}px`);
    document.body.style.setProperty("--portrait-ratio", `${theme.width} / ${theme.height}`);
}

function swapProfileImage(language, dictionary) {
    const theme = profileThemes[language];

    profileImage.classList.add("is-swapping");
    window.setTimeout(() => {
        profileImage.src = theme.image;
        profileImage.alt = dictionary.profileAlt;
        profileImage.width = theme.width;
        profileImage.height = theme.height;
    }, 90);
    window.setTimeout(() => {
        profileImage.classList.remove("is-swapping");
    }, 360);
}

function normalizeLanguage(language) {
    if (language === "en") {
        return "us";
    }

    return supportedLanguages.includes(language) ? language : defaultLanguage;
}

function setLanguage(language) {
    const nextLanguage = normalizeLanguage(language);
    const dictionary = content[nextLanguage];

    document.documentElement.lang = documentLanguages[nextLanguage];
    document.title = dictionary.metaTitle;
    metaDescription.setAttribute("content", dictionary.metaDescription);

    translatableNodes.forEach((node) => {
        const key = node.dataset.i18n;

        if (dictionary[key]) {
            node.textContent = dictionary[key];
        }
    });

    applyTheme(nextLanguage);
    swapProfileImage(nextLanguage, dictionary);

    languageButtons.forEach((button) => {
        const isActive = button.dataset.language === nextLanguage;

        button.setAttribute("aria-pressed", String(isActive));
    });

    try {
        window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
        // The page still works when storage is blocked.
    }
}

function getInitialLanguage() {
    try {
        const savedLanguage = window.localStorage.getItem(languageStorageKey);

        if (savedLanguage) {
            const normalizedSavedLanguage = normalizeLanguage(savedLanguage);
            return normalizedSavedLanguage;
        }
    } catch {
        // Ignore storage errors and use the browser language.
    }

    return defaultLanguage;
}

languageButtons.forEach((button) => {
    const language = button.dataset.language;

    button.setAttribute("aria-label", languageNames[language]);
    button.addEventListener("click", () => setLanguage(language));
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("in-view"));
}

setLanguage(getInitialLanguage());
