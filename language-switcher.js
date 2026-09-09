(function () {
  const STORAGE_KEY = 'site_lang_pref';
  const protocol = window.location.protocol;
  const currentPath = window.location.pathname || '/';
  const pathSegments = currentPath.split('/').filter(Boolean);
  const isEnglishPage = pathSegments.indexOf('en') !== -1;

  // Build hrefs appropriate for HTTP(S) or file: URLs.
  const buildHttpHref = () => {
    const segments = currentPath.replace(/^\/+/, '').split('/').filter(Boolean);
    const withoutEn = segments.filter(s => s !== 'en');
    const slug = withoutEn.join('/') || 'index.html';
    return {
      english: '/' + ['en', slug].join('/'),
      ukrainian: '/' + slug
    };
  };

  const buildFileHref = (toEnglish) => {
    const u = new URL(window.location.href);
    const parts = u.pathname.split('/').filter(Boolean);
    if (toEnglish) {
      if (parts.indexOf('en') === -1) {
        const last = parts.pop() || 'index.html';
        parts.push('en', last);
      }
    } else {
      const enIndex = parts.indexOf('en');
      if (enIndex !== -1) parts.splice(enIndex, 1);
    }
    u.pathname = '/' + parts.join('/');
    return u.href;
  };

  const hrefs = (protocol === 'file:') ? {
    english: buildFileHref(true),
    ukrainian: buildFileHref(false)
  } : buildHttpHref();

  // If user has a stored preference, auto-redirect appropriately
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' && !isEnglishPage) {
      if (hrefs.english && hrefs.english !== window.location.href && hrefs.english !== window.location.pathname) {
        window.location.href = hrefs.english;
        return;
      }
    }
    if (stored === 'uk' && isEnglishPage) {
      if (hrefs.ukrainian && hrefs.ukrainian !== window.location.href && hrefs.ukrainian !== window.location.pathname) {
        window.location.href = hrefs.ukrainian;
        return;
      }
    }
  } catch (e) {
    console.warn('language-switcher: localStorage unavailable', e);
  }

  const style = document.createElement('style');
  style.textContent = `
    #language-toggle {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 9999;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 42px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: #2c1e17;
      color: #fff;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.28);
      transition: transform 160ms ease, background 160ms ease;
    }
    #language-toggle:hover {
      transform: translateY(-1px);
      background: rgba(255, 69, 0, 0.92);
    }
    body.has-sale-banner #language-toggle {
      top: 100px;
    }
  `;
  document.head.appendChild(style);

  const link = document.createElement('a');
  link.id = 'language-toggle';
  link.href = isEnglishPage ? hrefs.ukrainian : hrefs.english;
  link.textContent = isEnglishPage ? 'UA' : 'EN';
  link.setAttribute('aria-label', isEnglishPage ? 'Switch to Ukrainian' : 'Switch to English');

  link.addEventListener('click', function (ev) {
    ev.preventDefault();
    const to = isEnglishPage ? 'uk' : 'en';
    try { window.localStorage.setItem(STORAGE_KEY, to); } catch (e) { /* ignore */ }
    const targetHref = isEnglishPage ? hrefs.ukrainian : hrefs.english;
    if (targetHref) window.location.href = targetHref;
  });

  document.body.appendChild(link);
})();
