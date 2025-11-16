(function() {
    // Navigation toggle (mobile)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // Language toggle
    const langButtons = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        document.documentElement.setAttribute('data-lang', lang);
        try {
            localStorage.setItem('cihuy_lang', lang);
        } catch (e) {}

        langButtons.forEach(btn => {
            const target = btn.getAttribute('data-lang-switch');
            btn.classList.toggle('active', target === lang);
        });
    }

    let storedLang = 'id';
    try {
        storedLang = localStorage.getItem('cihuy_lang') || 'id';
    } catch (e) {
        storedLang = 'id';
    }

    setLanguage(storedLang);

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-switch');
            setLanguage(lang);
        });
    });
})();
