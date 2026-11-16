/* ==========================================================================
   services.js — the three big coloured service cards.

   The same cards appear on the homepage (index.html) and the Services page
   (services.html). Both pages have an empty placeholder:

       <div class="services-card-grid" data-service-cards></div>

   and this script fills it with one card per entry in SERVICES below, so the
   card text only has to be edited in one place.

   Note: each service also has its own page (for example
   services-automation.html) with its own title and description written
   directly in the HTML. If you change a title or description here, change it
   on that page too.
   ========================================================================== */

/* --------------------------------------------------------------------------
   EDIT HERE: one entry per card, in the order they appear (left to right).

     title        Card heading.
     description  Short text under the heading.
     icon         Which picture to show: 'vest', 'wrench', 'gear', 'chip' or 'code'
                  (drawn in SERVICE_ICONS below).
     color        Card colour: 'classic-red', 'bright-red' or 'crimson'
                  (defined in css/service-cards.css).
     page         The page the card links to.
   -------------------------------------------------------------------------- */
const SERVICES = [
  {
    title: 'Supply & Procurement',
    description: 'Mechanical, electrical, instrumentation, industrial and PPE products, delivered on time and on budget.',
    icon: 'vest',
    color: 'classic-red',
    page: 'services-supply-procurement.html',
  },
  {
    title: 'Equipment Installation',
    description: 'Professional installation of mechanical, electrical and industrial equipment.',
    icon: 'wrench',
    color: 'bright-red',
    page: 'services-equipment-installation.html',
  },
  {
    title: 'Automation',
    description: 'Design and integration of automated systems and controls.',
    icon: 'gear',
    color: 'crimson',
    page: 'services-automation.html',
  },
];

/* --------------------------------------------------------------------------
   Card icons, drawn as SVG line art. They use "currentColor", so they take
   the card's white text colour. To add an icon, add a new name here and use
   that name as a service's "icon" value.
   -------------------------------------------------------------------------- */
const SERVICE_ICONS = {
  // Safety vest
  vest: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 6h6l4 16v36H14a2 2 0 0 1-2-2V28c5-3 9-10 10-22zM42 6h-6l-4 16v36h18a2 2 0 0 0 2-2V28c-5-3-9-10-10-22z"/><path d="M12 39h17M35 39h17M12 47h17M35 47h17" stroke-width="4"/></svg>`,
  // Wrench
  wrench: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"><path d="M39 8a14 14 0 0 0-12 18L9 44a5.7 5.7 0 0 0 8 8l18-18A14 14 0 0 0 53 22l-8 2-6-6 2-8a14 14 0 0 0-2-2z"/><circle cx="13" cy="48" r="1.5"/></svg>`,
  // Gear
  gear: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"><path d="M27 4h10l3 8 6 3 8-3 7 8-5 7 1 7 5 7-6 9-9-3-6 3-3 9H27l-3-9-6-3-9 3-6-9 5-7-1-7-5-7 6-8 8 3 6-3z"/><circle cx="32" cy="32" r="10"/></svg>`,
  // Microchip (not currently used)
  chip: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="15" width="34" height="34" rx="3"/><path d="M22 7v8M32 7v8M42 7v8M22 49v8M32 49v8M42 49v8M7 22h8M7 32h8M7 42h8M49 22h8M49 32h8M49 42h8"/></svg>`,
  // Code brackets (not currently used)
  code: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"><path d="m23 18-15 14 15 14m18-28 15 14-15 14M36 12 27 52"/></svg>`,
};


/* ==========================================================================
   You normally don't need to change anything below this line.
   ========================================================================== */

/** Build the HTML for one card. */
function serviceCardHtml(service) {
  return `
    <a class="service-card" data-color="${service.color}" href="${service.page}" aria-label="Explore ${service.title}">
      <div class="service-icon" aria-hidden="true">${SERVICE_ICONS[service.icon] || ''}</div>
      <h2>${service.title}</h2>
      <p>${service.description}</p>
      <span class="sr-only">View service details</span>
    </a>`;
}

/** Put the cards into every placeholder on the page. */
document.querySelectorAll('[data-service-cards]').forEach(container => {
  container.innerHTML = SERVICES.map(serviceCardHtml).join('');
});
