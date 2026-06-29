// VODGate interactive behavior: mobile navigation, reveal animations, and footer year.
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const header = document.querySelector('[data-header]');
const yearElement = document.querySelector('[data-year]');
const countryMenu = document.querySelector('[data-country-menu]');
const countryToggle = document.querySelector('[data-country-toggle]');
let countryMenuCloseTimer;
let isCountryMenuPinned = false;

const getHeroLocale = () => {
  const localeMatch = window.location.pathname.match(/^\/(us|uk|fr|es|ar)(?:\/|$)/);
  return localeMatch?.[1] || 'us';
};

const getHeroImagesBaseUrl = () => {
  if (document.currentScript?.src) {
    return new URL('../Images/Hero/', document.currentScript.src);
  }

  return new URL('/Assets/Images/Hero/', window.location.origin);
};

const hideImageOnError = (image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
    image.style.display = 'none';
  }, { once: true });
};

const createHeroImage = ({ locale, folder, prefix, index, alt }) => {
  const image = document.createElement('img');
  const imageNumber = String(index).padStart(2, '0');
  const imageUrl = new URL(`${locale}/${folder}/${prefix}-${imageNumber}.jpeg`, getHeroImagesBaseUrl());

  image.alt = `${alt} ${imageNumber}`;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.src = imageUrl.href;
  hideImageOnError(image);

  return image;
};

const syncHeroTrackLoopDistance = (track, originalCount) => {
  const firstCard = track.querySelector('span:not([data-marquee-clone])');
  const firstClone = track.querySelectorAll('span')[originalCount];

  if (!firstCard || !firstClone) {
    return;
  }

  const loopDistance = firstClone.offsetLeft - firstCard.offsetLeft;
  track.style.setProperty('--tv-loop-distance', `${loopDistance}px`);
};

const watchHeroTrackLoopDistance = (track, originalCount) => {
  const syncLoopDistance = () => syncHeroTrackLoopDistance(track, originalCount);

  window.requestAnimationFrame(syncLoopDistance);

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(syncLoopDistance);
    });

    resizeObserver.observe(track);
    return;
  }

  window.addEventListener('resize', syncLoopDistance, { passive: true });
};

const duplicateHeroTrackCards = (track, originalCards) => {
  track.querySelectorAll('[data-marquee-clone]').forEach((clone) => clone.remove());

  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.dataset.marqueeClone = 'true';
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('img').forEach(hideImageOnError);
    track.appendChild(clone);
  });

  watchHeroTrackLoopDistance(track, originalCards.length);
};

const hydrateHeroTrack = ({ selector, folder, prefix, count, alt }) => {
  const track = document.querySelector(selector);

  if (!track) {
    return;
  }

  const locale = getHeroLocale();
  track.querySelectorAll('[data-marquee-clone]').forEach((clone) => clone.remove());
  const cards = Array.from(track.querySelectorAll('span'));

  for (let index = cards.length; index < count; index += 1) {
    const card = document.createElement('span');
    track.appendChild(card);
    cards.push(card);
  }

  const originalCards = cards.slice(0, count);

  originalCards.forEach((card, index) => {
    card.replaceChildren(createHeroImage({
      locale,
      folder,
      prefix,
      index: index + 1,
      alt,
    }));
  });

  duplicateHeroTrackCards(track, originalCards);
};

const hydrateHeroTvPreview = () => {
  hydrateHeroTrack({
    selector: '.tv-row-top .tv-track',
    folder: 'Latest Movies and Series Images',
    prefix: 'poster',
    count: 19,
    alt: 'Latest movie or series poster',
  });

  hydrateHeroTrack({
    selector: '.tv-row-bottom .tv-track',
    folder: 'Live TV and TV Shows',
    prefix: 'tv',
    count: 13,
    alt: 'Live TV or TV show thumbnail',
  });
};

const clearCountryMenuCloseTimer = () => {
  window.clearTimeout(countryMenuCloseTimer);
  countryMenuCloseTimer = undefined;
};

const closeMenu = () => {
  clearCountryMenuCloseTimer();
  navToggle?.classList.remove('active');
  navMenu?.classList.remove('active');
  document.body.classList.remove('nav-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  countryMenu?.classList.remove('open');
  countryMenu?.classList.remove('click-closed');
  countryToggle?.setAttribute('aria-expanded', 'false');
  isCountryMenuPinned = false;
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
  if (isOpen) {
    countryMenu?.classList.remove('click-closed');
  }

  countryMenu?.classList.toggle('open', isOpen);
  countryToggle?.setAttribute('aria-expanded', String(isOpen));
};

const openCountryMenu = () => {
  clearCountryMenuCloseTimer();
  setCountryMenuState(true);
};

const scheduleCountryMenuClose = () => {
  if (isCountryMenuPinned) {
    return;
  }

  clearCountryMenuCloseTimer();
  countryMenuCloseTimer = window.setTimeout(() => {
    setCountryMenuState(false);
  }, 240);
};

const closeCountryMenu = (suppressHover = false) => {
  clearCountryMenuCloseTimer();
  isCountryMenuPinned = false;
  setCountryMenuState(false);

  if (suppressHover) {
    countryMenu?.classList.add('click-closed');
  }
};

countryToggle?.addEventListener('click', (event) => {
  event.stopPropagation();

  if (isCountryMenuPinned) {
    closeCountryMenu(true);
    return;
  }

  isCountryMenuPinned = true;
  openCountryMenu();
});

countryMenu?.addEventListener('mouseenter', openCountryMenu);
countryMenu?.addEventListener('mouseleave', () => {
  countryMenu.classList.remove('click-closed');
  scheduleCountryMenuClose();
});
countryMenu?.addEventListener('focusin', openCountryMenu);
countryMenu?.addEventListener('focusout', (event) => {
  if (!countryMenu.contains(event.relatedTarget)) {
    scheduleCountryMenuClose();
  }
});

document.addEventListener('click', (event) => {
  if (countryMenu && !countryMenu.contains(event.target)) {
    closeCountryMenu();
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

hydrateHeroTvPreview();
