/* ==========================================================================
   site.js — the header, footer and mobile menu shared by EVERY page.

   Why this file exists: instead of copying the same header and footer into
   every .html file, each page has two empty placeholders:

       <header class="site-header" data-site-header></header>
       <footer class="site-footer" data-site-footer></footer>

   and this script fills them in. Change the header or footer here once and
   every page updates.

   Each page says which nav link to underline with <body data-page="...">,
   using the "id" values in NAV_LINKS below.
   ========================================================================== */

/* --------------------------------------------------------------------------
   EDIT HERE: company details shown in the footer.
   -------------------------------------------------------------------------- */
const SITE = {
  name: 'Cintron Corp',
  tagline: 'Controls · Software · Mechanical Design',
  location: 'Winnipeg, Manitoba',
};

/* --------------------------------------------------------------------------
   EDIT HERE: links in the top navigation bar, in order.
   To add a page: create the .html file, add a line here, and give that page
   <body data-page="the-id">.
   -------------------------------------------------------------------------- */
const NAV_LINKS = [
  { id: 'home',     label: 'Home',     href: 'index.html' },
  { id: 'services', label: 'Services', href: 'services.html' },
  { id: 'contact',  label: 'Contact',  href: 'contact.html' },
];


/* ==========================================================================
   You normally don't need to change anything below this line.
   ========================================================================== */

/** Fill in the header: logo, hamburger button (mobile only) and nav links. */
function buildHeader() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;

  const currentPage = document.body.dataset.page;

  const links = NAV_LINKS.map(link => {
    const isCurrent = link.id === currentPage;
    return `<a href="${link.href}" class="nav-link${isCurrent ? ' is-active' : ''}"${isCurrent ? ' aria-current="page"' : ''}>${link.label}</a>`;
  }).join('');

  header.innerHTML = `
    <div class="header-inner">
      <a class="brand-link" href="index.html" aria-label="${SITE.name}, home">
        <img class="brand-logo" src="images/logo-white.svg" alt="" width="196" height="46">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open navigation">
        <span></span><span></span><span></span>
      </button>
      <nav class="primary-nav" id="primary-navigation" aria-label="Main navigation">${links}</nav>
    </div>`;
}

/** Fill in the footer. The year updates by itself. */
function buildFooter() {
  const footer = document.querySelector('[data-site-footer]');
  if (!footer) return;

  const year = new Date().getFullYear();
  footer.innerHTML = `
    <div class="site-container footer-inner">
      <div><strong>${SITE.name}</strong><p>${SITE.tagline}</p></div>
      <div class="footer-right"><span>${SITE.location}</span><span>© ${year} ${SITE.name}</span></div>
    </div>`;
}

/** Mobile menu: the hamburger button opens/closes the nav links (small screens only). */
function setUpMobileMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!button || !nav) return;

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open); // .is-open shows the menu (see global.css)
  }

  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', () => setOpen(false));                 // tapping a link closes it
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

buildHeader();
buildFooter();
setUpMobileMenu();
