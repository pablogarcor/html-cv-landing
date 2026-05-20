const languageNames = {
    us: "US English",
    es: "Espanol",
};

const profileThemes = {
    es: {
        image: "./assets/profile-es.webp",
        width: 298,
        height: 600,
        accent: "#0f7f70",
        accentRgb: "15 127 112",
        strong: "#e0523f",
    },
    us: {
        image: "./assets/profile-us.webp",
        width: 298,
        height: 600,
        accent: "#275ca8",
        accentRgb: "39 92 168",
        strong: "#cf3f49",
    },
};

const content = {
    es: {
        metaTitle: "Pablo | Software Developer CV",
        metaDescription: "CV landing bilingue para Pablo, software developer, founder y creador de producto web.",
        brand: "Pablo",
        navProfile: "Perfil",
        navExperience: "Experiencia",
        navSkills: "Skills",
        navEducation: "Educacion",
        navContact: "Contacto",
        eyebrow: "Software Developer - Founder - Product builder",
        heroName: "Pablo",
        heroRole: "Desarrollador que lanza cosas simples y solidas",
        heroSummary: "Convierto ideas en bruto en productos web utiles: frontend, backend, automatizacion y alguna vuelta blockchain, siempre por el camino simple que funciona.",
        primaryAction: "Abrir conversacion",
        secondaryAction: "Ver experiencia",
        stat1Value: "5+ anos",
        stat1Label: "Creando producto web",
        stat2Value: "Full stack",
        stat2Label: "Frontend, backend, Linux",
        stat3Value: "Founder",
        stat3Label: "Crypto domains + growth",
        profileTitle: "Modo ES",
        profileReference: "Simple primero, jugueton cuando suma, entregado sin drama.",
        profileAlt: "Retrato de Pablo para la version espanola",
        sectionProfileEyebrow: "Perfil",
        sectionProfileTitle: "Autodidacta, inquieto y alergico al exceso.",
        sectionProfileIntro: "Me gusta llevar ideas del papel a la realidad, con ambicion, curiosidad y una defensa firme de la solucion simple que resuelve.",
        highlight1Title: "Ideas a producto",
        highlight1Body: "Trazo caminos pequenos y probables desde un boceto, un problema o una senal rara.",
        highlight2Title: "Simple por diseno",
        highlight2Body: "Si dos soluciones sirven, elijo la que el equipo puede explicar, mantener y lanzar.",
        highlight3Title: "Punto jugueton",
        highlight3Body: "Me gustan los productos con caracter, mientras la interfaz siga clara y rapida.",
        sectionExperienceEyebrow: "Experiencia",
        sectionExperienceTitle: "De equipos de producto a experimentos founder.",
        sectionExperienceIntro: "Software developer remoto en Inveert, mas proyectos founder en naming crypto y growth social.",
        experience1Date: "Sep 2020 - Actualidad",
        experience1Title: "Software Developer",
        experience1Company: "Inveert | Smart Planning - Jornada completa - Remoto desde Sevilla",
        experience1Body: "Construyo y evoluciono interfaces de producto, flujos Linux y funcionalidades software para herramientas de planificacion digital.",
        experience1SkillA: "Frontend",
        experience1SkillB: "Linux",
        experience1SkillC: "UI producto",
        experience1SkillD: "JavaScript",
        experience2Date: "Jul 2019 - Actualidad",
        experience2Title: "Founder & Software Developer",
        experience2Company: "EasyCryptoName - Profesional independiente",
        experience2Body: "Como founder, disenador y developer, cree un producto que acerca dominios crypto a personas sin base blockchain.",
        experience2SkillA: "Solidity",
        experience2SkillB: "Blockchain",
        experience2SkillC: "Diseno producto",
        experience2SkillD: "Web3",
        experience3Date: "Ago 2019 - Mar 2020",
        experience3Title: "Full Stack Developer",
        experience3Company: "Scope Ink - Jornada completa - Sevilla",
        experience3Body: "Trabaje entre frontend y backend para entregar features web, pulir flujos y apoyar un producto joven con ritmo.",
        experience3SkillA: "JavaScript",
        experience3SkillB: "Full stack",
        experience3SkillC: "APIs",
        experience3SkillD: "UI",
        experience4Date: "Mar 2016 - Feb 2018",
        experience4Title: "Founder & Software Developer",
        experience4Company: "DoFollow.me - Profesional independiente - Espana",
        experience4Body: "Cree una herramienta de suscripcion para Twitter que detectaba audiencias rivales y las convertia con mensajes privados.",
        experience4SkillA: "Python",
        experience4SkillB: "JavaScript",
        experience4SkillC: "Automatizacion",
        experience4SkillD: "Growth",
        sectionSkillsEyebrow: "Skills",
        sectionSkillsTitle: "Skills de software con criterio producto.",
        sectionSkillsIntro: "El stack es practico: crear interfaces fiables, conectar servicios utiles y mantener el sistema facil de razonar.",
        skill1Title: "Frontend fino",
        skill1A: "HTML semantico",
        skill1B: "CSS responsive",
        skill1C: "JavaScript modular",
        skill1D: "UI accesible",
        skill2Title: "Backend y sistemas",
        skill2A: "Python",
        skill2B: "APIs",
        skill2C: "Linux",
        skill2D: "Flujos de datos",
        skill3Title: "Producto y Web3",
        skill3A: "Prototipado rapido",
        skill3B: "Solidity",
        skill3C: "Blockchain",
        skill3D: "Automatizacion util",
        sectionEducationEyebrow: "Educacion",
        sectionEducationTitle: "Raiz telecom, direccion software.",
        sectionEducationIntro: "La Universidad de Sevilla me dio base de ingenieria; el trabajo la llevo a producto software.",
        education1Date: "2010 - 2019",
        education1Title: "Universidad de Sevilla",
        education1Program: "Grado en Ingenieria - Ingenieria de Telecomunicaciones",
        education1Body: "Pensamiento sistemico, redes, senales y disciplina de ingenieria aplicados despues al desarrollo web.",
        sectionContactEyebrow: "Contacto",
        sectionContactTitle: "Abierto a equipos que valoran software simple.",
        sectionContactIntro: "Encaje natural: equipos de producto, herramientas founder y plataformas web donde ejecutar claro importa mas que la ceremonia.",
        emailAction: "Enviar email",
        linkedinAction: "LinkedIn",
        githubAction: "GitHub",
        footerText: "CV landing bilingue para un software developer que prefiere sistemas simples con personalidad.",
    },
    us: {
        metaTitle: "Pablo | Software Developer CV",
        metaDescription: "Bilingual CV landing page for Pablo, software developer, founder, and product-minded builder.",
        brand: "Pablo",
        navProfile: "Profile",
        navExperience: "Experience",
        navSkills: "Skills",
        navEducation: "Education",
        navContact: "Contact",
        eyebrow: "Software Developer - Founder - Product builder",
        heroName: "Pablo",
        heroRole: "Software developer who ships simple things well",
        heroSummary: "I turn rough ideas into useful web products: frontend, backend, automation and the occasional blockchain detour, always choosing the simplest path that works.",
        primaryAction: "Start a conversation",
        secondaryAction: "View experience",
        stat1Value: "5+ years",
        stat1Label: "Building web products",
        stat2Value: "Full stack",
        stat2Label: "Frontend, backend, Linux",
        stat3Value: "Founder",
        stat3Label: "Crypto domains + growth",
        profileTitle: "US mode",
        profileReference: "Simple first, playful when useful, shipped without drama.",
        profileAlt: "Portrait of Pablo for the US version",
        sectionProfileEyebrow: "Profile",
        sectionProfileTitle: "Autodidact, restless, allergic to excess.",
        sectionProfileIntro: "I like moving ideas from paper to reality, with ambition, curiosity and a firm bias for the simplest solution that solves.",
        highlight1Title: "Ideas to product",
        highlight1Body: "I shape small, testable paths from a sketch, a user problem or a strange market signal.",
        highlight2Title: "Simple by design",
        highlight2Body: "When two solutions work, I choose the one the team can explain, maintain and ship.",
        highlight3Title: "Playful edge",
        highlight3Body: "I enjoy products with personality, as long as the interface stays clear and fast.",
        sectionExperienceEyebrow: "Experience",
        sectionExperienceTitle: "From product teams to founder experiments.",
        sectionExperienceIntro: "Remote software developer at Inveert, plus founder work in crypto naming and social growth tools.",
        experience1Date: "Sep 2020 - Present",
        experience1Title: "Software Developer",
        experience1Company: "Inveert | Smart Planning - Full-time - Remote from Seville",
        experience1Body: "I build and evolve product interfaces, Linux-friendly workflows and software features for planning tools used by digital teams.",
        experience1SkillA: "Frontend",
        experience1SkillB: "Linux",
        experience1SkillC: "Product UI",
        experience1SkillD: "JavaScript",
        experience2Date: "Jul 2019 - Present",
        experience2Title: "Founder & Software Developer",
        experience2Company: "EasyCryptoName - Independent",
        experience2Body: "As founder, designer and developer, I built a product that makes crypto domains understandable for people without blockchain background.",
        experience2SkillA: "Solidity",
        experience2SkillB: "Blockchain",
        experience2SkillC: "Product design",
        experience2SkillD: "Web3",
        experience3Date: "Aug 2019 - Mar 2020",
        experience3Title: "Full Stack Developer",
        experience3Company: "Scope Ink - Full-time - Seville",
        experience3Body: "I worked across frontend and backend to deliver web features, polish flows and support a young product moving fast.",
        experience3SkillA: "JavaScript",
        experience3SkillB: "Full stack",
        experience3SkillC: "APIs",
        experience3SkillD: "UI",
        experience4Date: "Mar 2016 - Feb 2018",
        experience4Title: "Founder & Software Developer",
        experience4Company: "DoFollow.me - Independent - Spain",
        experience4Body: "I created a Twitter marketing subscription tool to discover competitor audiences and convert them through targeted private messages.",
        experience4SkillA: "Python",
        experience4SkillB: "JavaScript",
        experience4SkillC: "Automation",
        experience4SkillD: "Growth",
        sectionSkillsEyebrow: "Skills",
        sectionSkillsTitle: "Software skills with product taste.",
        sectionSkillsIntro: "The stack is practical: build reliable interfaces, wire useful services and keep the system easy to reason about.",
        skill1Title: "Frontend craft",
        skill1A: "Semantic HTML",
        skill1B: "Responsive CSS",
        skill1C: "Modular JavaScript",
        skill1D: "Accessible UI",
        skill2Title: "Backend & systems",
        skill2A: "Python",
        skill2B: "APIs",
        skill2C: "Linux",
        skill2D: "Data flows",
        skill3Title: "Product & Web3",
        skill3A: "Fast prototyping",
        skill3B: "Solidity",
        skill3C: "Blockchain",
        skill3D: "Useful automation",
        sectionEducationEyebrow: "Education",
        sectionEducationTitle: "Telecom roots, software direction.",
        sectionEducationIntro: "Universidad de Sevilla gave me an engineering base; professional work turned it into product software practice.",
        education1Date: "2010 - 2019",
        education1Title: "Universidad de Sevilla",
        education1Program: "Engineering degree - Telecommunications Engineering",
        education1Body: "Systems thinking, networking, signals and engineering discipline applied later to web product development.",
        sectionContactEyebrow: "Contact",
        sectionContactTitle: "Open to teams that value simple software.",
        sectionContactIntro: "Best fit: product teams, founder-led tools and web platforms where clear execution matters more than ceremony.",
        emailAction: "Email me",
        linkedinAction: "LinkedIn",
        githubAction: "GitHub",
        footerText: "A bilingual CV landing for a software developer who prefers simple systems with personality.",
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
const profileFrame = document.querySelector(".portrait-frame");
const profileImage = document.querySelector("#profileImage");
const profileImageNext = document.querySelector("#profileImageNext");
const metaDescription = document.querySelector("meta[name='description']");
const profileSwapDuration = 200;
let profileSwapTimer;
let profileSwapId = 0;

function applyTheme(language) {
    const theme = profileThemes[language];

    document.body.dataset.locale = language;
    document.body.style.setProperty("--accent", theme.accent);
    document.body.style.setProperty("--accent-rgb", theme.accentRgb);
    document.body.style.setProperty("--accent-strong", theme.strong);
}

function swapProfileImage(language, dictionary) {
    const theme = profileThemes[language];
    const currentImage = profileImage.getAttribute("src");

    profileSwapId += 1;
    window.clearTimeout(profileSwapTimer);
    profileFrame.classList.remove("is-swapping");

    if (currentImage === theme.image) {
        profileImage.alt = dictionary.profileAlt;
        profileImage.width = theme.width;
        profileImage.height = theme.height;
        profileImageNext.src = theme.image;
        profileImageNext.width = theme.width;
        profileImageNext.height = theme.height;
        return;
    }

    const swapId = profileSwapId;

    profileImageNext.src = theme.image;
    profileImageNext.width = theme.width;
    profileImageNext.height = theme.height;

    const completeSwap = () => {
        if (swapId !== profileSwapId) {
            return;
        }

        profileImage.src = theme.image;
        profileImage.alt = dictionary.profileAlt;
        profileImage.width = theme.width;
        profileImage.height = theme.height;
        profileFrame.classList.remove("is-swapping");
    };

    const startSwap = () => {
        if (swapId !== profileSwapId) {
            return;
        }

        profileFrame.classList.remove("is-swapping");
        void profileFrame.offsetWidth;
        profileFrame.classList.add("is-swapping");
        profileSwapTimer = window.setTimeout(completeSwap, profileSwapDuration);
    };

    if (profileImageNext.complete) {
        startSwap();
    } else {
        profileImageNext.addEventListener("load", startSwap, { once: true });
    }
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
