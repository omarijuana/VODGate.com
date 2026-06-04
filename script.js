// VODGate interactive behavior: mobile navigation, reveal animations, and footer year.
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const header = document.querySelector('[data-header]');
const yearElement = document.querySelector('[data-year]');
const countryMenu = document.querySelector('[data-country-menu]');
const countryToggle = document.querySelector('[data-country-toggle]');

const closeMenu = () => {
  navToggle?.classList.remove('active');
  navMenu?.classList.remove('active');
  document.body.classList.remove('nav-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  countryMenu?.classList.remove('open');
  countryToggle?.setAttribute('aria-expanded', 'false');
};

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('active');
  navMenu?.classList.toggle('active', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const setCountryMenuState = (isOpen) => {
  countryMenu?.classList.toggle('open', isOpen);
  countryToggle?.setAttribute('aria-expanded', String(isOpen));
};

countryToggle?.addEventListener('click', () => {
  setCountryMenuState(!countryMenu?.classList.contains('open'));
});

countryMenu?.addEventListener('mouseenter', () => setCountryMenuState(true));
countryMenu?.addEventListener('mouseleave', () => setCountryMenuState(false));
countryMenu?.addEventListener('focusin', () => setCountryMenuState(true));
countryMenu?.addEventListener('focusout', (event) => {
  if (!countryMenu.contains(event.relatedTarget)) {
    setCountryMenuState(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// Add a subtle header state once the visitor scrolls past the hero start.
const updateHeaderState = () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

// Reveal content cards when they enter the viewport.
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
