const languageNames = {
    us: "US English",
    es: "Spanish",
};

const pageLanguage = document.body.dataset.locale || "us";
const languageUrls = {
    us: document.body.dataset.usUrl || "./",
    es: document.body.dataset.esUrl || "./es/",
};
const languageButtons = document.querySelectorAll("[data-language]");

function normalizeLanguage(language) {
    if (language === "en") {
        return "us";
    }

    return Object.prototype.hasOwnProperty.call(languageUrls, language) ? language : pageLanguage;
}

languageButtons.forEach((button) => {
    const language = normalizeLanguage(button.dataset.language);
    const isActive = language === pageLanguage;

    button.setAttribute("aria-label", languageNames[language] || button.textContent.trim());
    button.setAttribute("aria-pressed", String(isActive));

    if (isActive) {
        button.setAttribute("aria-current", "page");
    } else {
        button.removeAttribute("aria-current");
    }

    button.addEventListener("click", (event) => {
        if (isActive) {
            event.preventDefault();
            return;
        }

        const destination = new URL(languageUrls[language], window.location.href);
        destination.hash = window.location.hash;

        event.preventDefault();
        window.location.href = destination.href;
    });
});
