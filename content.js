/**
 * content.js — Aurum Spa & Aesthetics
 * ─────────────────────────────────────────────────────────────
 * HOW TO USE:
 *   1. Link this file in your HTML: <script src="content.js"></script>
 *   2. Add data-content="key.path" attributes to your HTML elements
 *   3. Call injectContent() once the DOM is ready
 *
 * OR import as a module:
 *   import { CONTENT } from './content.js'
 * ─────────────────────────────────────────────────────────────
 */

const CONTENT = {

  /* ─── SITE META ─── */
  meta: {
    siteTitle:       'Aurum Spa & Aesthetics',
    tagline:         'The Gold Standard in Luxury Aesthetics & Wellness.',
    metaTitle:       'Aurum Spa & Aesthetics | Luxury Med Spa & Day Spa — Washington, D.C.',
    metaDescription: 'Aurum Spa & Aesthetics is Washington D.C.\'s premier luxury med spa and day spa, located at 1617 Massachusetts Avenue NW on Embassy Row. Expert injectables, laser treatments, gold facials, massage, and bespoke wellness experiences.',
    ogTitle:         'Aurum Spa & Aesthetics — Washington D.C.\'s Gold Standard in Luxury & Aesthetics',
    ogDescription:   'Where clinical precision meets restorative luxury. Book your Aurum experience — D.C.\'s most exclusive med spa and day spa destination on Embassy Row.',
  },

  /* ─── NAVIGATION ─── */
  nav: {
    links: [
      { label: 'Home',                  href: '#home' },
      { label: 'About',                 href: '#about' },
      { label: 'Aesthetics',            href: '#aesthetics' },
      { label: 'Spa & Wellness',        href: '#spa' },
      { label: 'Signature Experiences', href: '#experiences' },
      { label: 'Book a Visit',          href: '#book' },
      { label: 'Contact',               href: '#contact' },
    ],
    cta: 'Book Now',
  },

  /* ─── SECTION 1: HERO ─── */
  hero: {
    eyebrow:    'Washington D.C.\'s Gold Standard in Luxury Aesthetics & Wellness',
    headline:   'The Finest Version\nof You Awaits.',
    subheadline:'Aurum Spa & Aesthetics is Washington D.C.\'s most distinguished sanctuary for advanced aesthetic medicine and restorative luxury — where clinical precision is delivered with the elegance it deserves.',
    ctaPrimary: 'Reserve Your Experience',
    ctaSecondary: 'Discover Aurum',
  },

  /* ─── SECTION 2: BRAND STATEMENT ─── */
  brand: {
    label:    'The Aurum Standard',
    headline: 'Gold Is Not a Color.\nIt Is a Commitment.',
    body: [
      'The name Aurum is Latin for gold — and it reflects everything we stand for. At Aurum Spa & Aesthetics, gold is not a marketing word. It is the standard to which we hold every treatment, every interaction, and every result we deliver.',
      'Our Washington D.C. sanctuary was conceived as the city\'s most refined destination for those who will accept nothing less than the best. Here, world-class aesthetic medicine meets deeply restorative spa ritual — in a space designed to make you feel as extraordinary as you look.',
    ],
    pullQuote: '"Aurum. Latin for gold. The standard for everything."',
  },

  /* ─── SECTION 3: SERVICES OVERVIEW ─── */
  servicesOverview: {
    label:    'Our Offerings',
    headline: 'Aesthetic Medicine.\nLuxury Wellness.\nOne Address.',
    intro:    'Aurum brings together two pillars of modern luxury — the clinical sophistication of medical aesthetics and the timeless indulgence of a world-class day spa. Whether you seek transformative, lasting results or an afternoon of complete restoration, both are available to you here, at the same uncompromising level of excellence.',
  },

  /* ─── SECTION 3A: MEDICAL AESTHETICS ─── */
  medSpa: {
    label:       'Aurum Aesthetics',
    headline:    'Precision Treatments.\nEnduring Results.',
    description: 'Every aesthetic treatment at Aurum is performed or directly supervised by licensed medical professionals — tailored with surgical attention to your anatomy, your skin, and your personal vision. We do not offer generic menus or rushed appointments. We offer craft.',
    services: [
      {
        id:          'botox',
        name:        'Botox & Neurotoxin Treatments',
        description: 'Expertly placed neuromodulators that smooth, refine, and prevent — without erasing what makes you distinctly you. Our injectors are trained in the art of enhancement, preserving natural expression while delivering results that are polished, never frozen.',
        price:       'Starting from $14 per unit',
      },
      {
        id:          'fillers',
        name:        'Dermal Fillers',
        description: 'Restore youthful volume, define facial architecture, and balance your proportions with premium hyaluronic acid fillers. Lip sculpting, cheek augmentation, jawline definition, tear trough correction, and full-face harmonization available.',
        price:       'Consultation required',
      },
      {
        id:          'laser',
        name:        'Laser Skin Resurfacing',
        description: 'Medical-grade laser treatments targeting uneven tone, sun damage, fine lines, acne scarring, and textural concerns. Each protocol is selected and calibrated to your skin type, tone, and desired recovery window.',
        price:       'Series packages available',
      },
      {
        id:          'microneedling',
        name:        'Microneedling with PRP',
        description: 'Platelet-Rich Plasma therapy paired with precision microneedling — a powerful regenerative treatment that stimulates collagen production, repairs cellular damage, and restores a luminous, youthful complexion using your body\'s own biology.',
        price:       'Recommended series of 3–6 sessions',
      },
      {
        id:          'peels',
        name:        'Medical-Grade Chemical Peels',
        description: 'From brightening superficial peels to deep resurfacing protocols, our medical peels are custom-blended and clinician-supervised for maximum efficacy and safety across all skin tones and types.',
        price:       'Formulated per skin concern',
      },
      {
        id:          'iv',
        name:        'IV Vitamin & Wellness Therapy',
        description: 'Restoration from within. Our private IV drip lounge offers curated infusion menus designed to replenish, energize, and recover — including radiance, immunity, energy restoration, and executive recovery blends.',
        price:       'Menu available upon request',
      },
      {
        id:          'body-contouring',
        name:        'Body Contouring & Sculpting',
        description: 'Non-surgical contouring treatments that reduce stubborn fat, tighten lax skin, and sculpt your silhouette — with no downtime and no compromise. CoolSculpting and radiofrequency-based body treatments available.',
        price:       'Complimentary consultation required',
      },
      {
        id:          'hormone',
        name:        'Hormone & Longevity Consultations',
        description: 'Private consultations with our medical team addressing hormone balance, metabolic wellness, weight management, and longevity — for those who seek a comprehensive, physician-guided approach to feeling exceptional at every age.',
        price:       'By private appointment only',
      },
    ],
  },

  /* ─── SECTION 3B: DAY SPA ─── */
  daySpa: {
    label:       'Aurum Spa',
    headline:    'Restorative Rituals\nWorthy of the Name.',
    description: 'The Aurum Spa is a retreat from the rhythm of the capital — a private world of warmth, stillness, and sensory ritual designed to restore not just the body, but the entire self. Every treatment is an unhurried, considered experience.',
    services: [
      {
        id:          'signature-facial',
        name:        'The Aurum Signature Facial',
        description: 'Our definitive facial — a 90-minute bespoke experience built around your skin on the day of your visit. Includes deep cleansing, enzyme exfoliation, extractions, custom masking, gold-infused serum layering, and a personalized finishing protocol.',
        duration:    '90 minutes',
        price:       '$295',
      },
      {
        id:          'anti-aging-facial',
        name:        'Luxury Anti-Aging Facial',
        description: 'A clinically inspired luxury facial combining peptide infusion, LED light therapy, and sculpting massage techniques to visibly firm, lift, and illuminate — delivering the kind of radiance that resets your complexion.',
        duration:    '75 minutes',
        price:       '$335',
      },
      {
        id:          'hydrafacial',
        name:        'Hydrafacial MD',
        description: 'The globally recognized gold standard of facial cleansing. A precision vortex-infusion treatment that deeply cleanses, extracts, and intensely hydrates in a single session — with zero redness and zero downtime.',
        duration:    '45–60 minutes',
        price:       '$199–$285',
      },
      {
        id:          'swedish',
        name:        'Swedish Massage',
        description: 'A masterfully executed full-body massage using long, fluid strokes designed to dissolve muscular tension, improve circulation, and guide the nervous system into genuine rest.',
        duration:    '60 or 90 minutes',
        price:       '$185 / $255',
      },
      {
        id:          'deep-tissue',
        name:        'Deep Tissue Massage',
        description: 'Targeted therapeutic pressure applied to chronically tense and overworked muscle groups — the shoulders, neck, lower back, and hips that bear the weight of a high-performance life.',
        duration:    '60 or 90 minutes',
        price:       '$205 / $275',
      },
      {
        id:          'hot-stone',
        name:        'Hot Stone Massage',
        description: 'Heated basalt stones used in concert with hands-on technique to release deep muscular tension, improve circulation, and produce a profoundly grounding sense of full-body calm.',
        duration:    '90 minutes',
        price:       '$295',
      },
      {
        id:          'couples',
        name:        'Couples Retreat',
        description: 'Our private couples suite accommodates two guests for simultaneous, synchronized treatments — an ideal setting for a romantic occasion, a meaningful celebration, or simply the luxury of unwinding in good company.',
        duration:    'By reservation',
        price:       'Custom pricing',
      },
      {
        id:          'gold-body',
        name:        'Gold Body Ritual — Aurum Signature',
        description: 'A full-body exfoliation using a hand-blended gold mineral scrub, followed by a warm 24k gold-infused body wrap, and sealed with a luxurious body oil application.',
        duration:    '90 minutes',
        price:       '$365',
      },
      {
        id:          'seaweed-wrap',
        name:        'Detox Seaweed Body Wrap',
        description: 'A deeply purifying ritual using cold-pressed marine algae and essential oil blends — drawing out impurities, rebalancing the skin\'s mineral content, and leaving the body feeling lighter, smoother, and renewed.',
        duration:    '75 minutes',
        price:       '$275',
      },
      {
        id:          'himalayan',
        name:        'Himalayan Salt Glow',
        description: 'A mineral-rich full-body exfoliation using hand-harvested pink Himalayan salt blended with nourishing oils — followed by a moisture-lock body wrap that leaves skin impossibly soft and luminous.',
        duration:    '75 minutes',
        price:       '$265',
      },
      {
        id:          'scalp',
        name:        'Aurum Scalp Ritual',
        description: 'A deeply restorative treatment for the scalp and crown — beginning with a warm oil infusion massage, progressing through a purifying scalp treatment, and finishing with a nourishing follicle mask.',
        duration:    '45 minutes',
        price:       '$155',
      },
      {
        id:          'foot-hand',
        name:        'Foot & Hand Ritual',
        description: 'Far beyond a standard treatment. Our foot and hand rituals are full sensory experiences — mineral exfoliation, warm paraffin immersion, extended sculpting massage, and a long-wear finishing treatment.',
        duration:    '60 minutes',
        price:       '$135',
      },
    ],
  },

  /* ─── SECTION 4: SIGNATURE EXPERIENCES ─── */
  experiences: {
    label:    'Signature Journeys',
    headline: 'For Those Who\nDeserve the Full Experience.',
    intro:    'Aurum\'s Signature Journeys are choreographed experiences that combine multiple treatments into seamless half-day and full-day retreats — thoughtfully sequenced so that each element prepares and enhances the next.',
    items: [
      {
        id:          'executive',
        name:        'The Aurum Executive',
        duration:    'Half-Day | 3.5 Hours',
        price:       '$625',
        description: 'The complete reset for the professional who operates at the highest level. Includes: Deep tissue or Swedish massage (90 min) + Aurum Signature Facial (60 min) + Scalp Ritual (30 min) + complimentary IV hydration add-on upon arrival.',
      },
      {
        id:          'gold-standard',
        name:        'The Gold Standard Journey',
        duration:    'Half-Day | 4 Hours',
        price:       '$825',
        description: 'Our flagship fusion of medical aesthetics and luxury spa. Includes: Hydrafacial MD + aesthetic consultation + Gold Body Ritual (60 min) + Swedish massage (60 min) + champagne welcome on arrival.',
      },
      {
        id:          'full-day',
        name:        'The Aurum Full Day Retreat',
        duration:    'Full Day | 6 Hours',
        price:       '$1,350',
        description: 'The complete expression of everything Aurum offers. A fully personalized day designed around your goals — weaving together aesthetic medicine, restorative bodywork, and gold-standard skin rituals. Includes exclusive lounge access, a curated wellness lunch, and a bespoke take-home product collection.',
      },
    ],
  },

  /* ─── SECTION 5: WHY AURUM ─── */
  pillars: {
    label:    'The Aurum Difference',
    headline: 'What Sets the\nGold Standard Apart.',
    items: [
      {
        title: 'Clinical Mastery',
        body:  'Every medical aesthetic treatment at Aurum is performed or directly supervised by licensed, credentialed medical professionals. We hold our clinical standards to the same level as the finest aesthetic practices in New York, London, and Beverly Hills.',
      },
      {
        title: 'The Personal Protocol',
        body:  'No two clients are the same. Every visit to Aurum begins with a private consultation — an unhurried conversation about your goals, your concerns, and what "your best" truly looks like. Only then do we design your experience.',
      },
      {
        title: 'Absolute Discretion',
        body:  'Aurum is situated in Washington D.C.\'s most distinguished corridor — and our clientele reflects it. We maintain absolute privacy and confidentiality as a foundational principle, not a policy footnote.',
      },
    ],
  },

  /* ─── SECTION 6: ABOUT ─── */
  about: {
    label:    'Our Story',
    headline: 'Washington D.C.\'s\nGold Standard. Built Intentionally.',
    body: [
      'Aurum Spa & Aesthetics was founded on a single, non-negotiable belief: that Washington D.C. deserved a spa and aesthetics destination that matched the caliber of the city itself. A place built not to impress at first glance, but to consistently deliver — at every appointment, for every client, without exception.',
      'Our team is composed of board-certified medical professionals, licensed master estheticians, certified massage therapists, and wellness practitioners — each selected for both their technical mastery and their ability to make every guest feel genuinely cared for, not simply processed.',
      'We chose Massachusetts Avenue NW deliberately. Embassy Row is Washington\'s most storied address — and Aurum belongs here. Whether you are a D.C. resident, a government official, a visiting executive, or a dignitary passing through the capital, our doors are open and our standard is the same: gold.',
    ],
  },

  /* ─── SECTION 7: TESTIMONIALS ─── */
  testimonials: {
    label:    'Our Guests',
    headline: 'The Aurum Experience,\nIn Their Words.',
    items: [
      {
        quote:  'Aurum has completely redefined what I expect from a spa. The level of clinical expertise paired with genuine luxury — there is simply nothing else like it in Washington.',
        author: 'M.L.',
        location: 'Georgetown',
      },
      {
        quote:  'I came in for the full-day retreat and left feeling like the best version of myself. Every single person on that team was exceptional. I have already booked my next three visits.',
        author: 'R.A.',
        location: 'Capitol Hill',
      },
      {
        quote:  'The combination of medical aesthetics and world-class spa treatments under one roof is exactly what D.C. has been missing. Aurum fills that gap perfectly.',
        author: 'C.T.',
        location: 'Dupont Circle',
      },
      {
        quote:  'I have visited premier spas in New York, Paris, and Dubai. Aurum is in that conversation. This is what the gold standard actually looks like.',
        author: 'J.W.',
        location: 'Embassy Row',
      },
    ],
  },

  /* ─── SECTION 8: BOOKING ─── */
  booking: {
    label:      'Reserve',
    headline:   'Your Gold Standard\nExperience Begins Here.',
    body:       'Every exceptional Aurum experience begins with a conversation. Reserve your appointment online at your convenience, or call our team directly — we are here to ensure your visit is designed around you from the very first moment.',
    ctaPrimary: 'Book Your Appointment',
    ctaSecondary: 'Call Us: (202) 555-0192',
    note:       'New guests are warmly encouraged to arrive 15 minutes early to complete your personal wellness profile. A credit card is required to hold all reservations. We kindly request 24 hours\' notice for any cancellations or changes.',
  },

  /* ─── SECTION 9: CONTACT ─── */
  contact: {
    label:    'Visit Aurum',
    headline: 'Find Us on\nEmbassy Row.',
    address: {
      line1: 'Aurum Spa & Aesthetics',
      line2: '1617 Massachusetts Avenue NW',
      line3: 'Washington, D.C. 20036',
      line4: 'United States',
    },
    hours: [
      { days: 'Monday – Friday', hours: '9:00 AM – 8:00 PM' },
      { days: 'Saturday',        hours: '9:00 AM – 7:00 PM' },
      { days: 'Sunday',          hours: '10:00 AM – 6:00 PM' },
    ],
    phone:           '(202) 555-0192',
    email:           'hello@aurumspaDC.com',
    neighborhoodNote:'Aurum is located on Massachusetts Avenue NW in the heart of Dupont Circle and Embassy Row. Easily accessible via the Red Line Metro (Dupont Circle station) with street parking on Massachusetts Avenue and garage parking nearby.',
  },

  /* ─── FOOTER ─── */
  footer: {
    tagline: 'Aurum Spa & Aesthetics — Washington, D.C.',
    subTagline: 'The Gold Standard in Luxury Aesthetics & Wellness.',
    legal:   '© 2025 Aurum Spa & Aesthetics. All rights reserved. 1617 Massachusetts Avenue NW, Washington, D.C. 20036. Medical aesthetic services are performed or supervised by licensed medical professionals. Individual results may vary.',
    social: [
      { platform: 'Instagram', href: '#' },
      { platform: 'Facebook',  href: '#' },
      { platform: 'LinkedIn',  href: '#' },
    ],
    links: [
      { label: 'Home',                  href: '#home' },
      { label: 'About',                 href: '#about' },
      { label: 'Aesthetics',            href: '#aesthetics' },
      { label: 'Spa & Wellness',        href: '#spa' },
      { label: 'Signature Experiences', href: '#experiences' },
      { label: 'Book',                  href: '#book' },
      { label: 'Contact',               href: '#contact' },
      { label: 'Privacy Policy',        href: '/privacy' },
      { label: 'Terms of Service',      href: '/terms' },
    ],
  },

  /* ─── MICRO-COPY ─── */
  micro: {
    welcomePopup: {
      headline: 'Welcome to Aurum.',
      body:     'Join our inner circle for priority booking, exclusive treatment previews, and member-only offers.',
      cta:      'Become a Member',
      placeholder: 'Your email address',
    },
    bookingConfirmation: 'Your Aurum experience has been reserved. A member of our team will confirm your appointment within 24 hours. We look forward to welcoming you.',
    giftCardBanner: {
      headline: 'Give the Gold Standard.',
      body:     'Aurum gift cards are available in any amount — the most thoughtful gift for anyone who deserves the best.',
      cta:      'Purchase a Gift Card',
    },
    notFound: {
      headline: 'This page stepped away for a treatment.',
      cta:      'Return to Aurum',
      href:     '/',
    },
    loading:   'Preparing your Aurum experience…',
    newsletter: {
      headline:    'The Aurum Edit.',
      body:        'Exclusive insights on aesthetic innovation, wellness, and priority access to new treatments.',
      cta:         'Subscribe',
      placeholder: 'Your email address',
    },
  },

}


/* ═══════════════════════════════════════════════════════════════
   AUTO-INJECT ENGINE
   ───────────────────────────────────────────────────────────────
   Add  data-content="path.to.key"  to any HTML element.
   The value at that key in CONTENT will be set as innerHTML.

   EXAMPLES:
     <h1 data-content="hero.headline"></h1>
     <p  data-content="brand.body.0"></p>
     <span data-content="contact.phone"></span>
   ═══════════════════════════════════════════════════════════════ */

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current !== undefined ? current[key] : undefined
  }, obj)
}

function injectContent() {
  document.querySelectorAll('[data-content]').forEach(el => {
    const path  = el.getAttribute('data-content')
    const value = getNestedValue(CONTENT, path)

    if (value === undefined) {
      console.warn(`[content.js] No value found for key: "${path}"`)
      return
    }

    if (typeof value === 'string') {
      // Preserve intentional line breaks written as \n
      el.innerHTML = value.replace(/\n/g, '<br>')
      return
    }

    if (Array.isArray(value) && value.every(v => typeof v === 'string')) {
      el.innerHTML = value.map(p => `<p>${p}</p>`).join('')
      return
    }

    console.warn(`[content.js] Value at "${path}" is not a string or string array. Use JS to render complex objects.`)
  })
}

/* ═══════════════════════════════════════════════════════════════
   DYNAMIC LIST RENDERERS
   ───────────────────────────────────────────────────────────────
   Call these to render arrays (services, testimonials, etc.)
   into a container element.
   ═══════════════════════════════════════════════════════════════ */

const Render = {

  /** Renders nav links into <nav data-render="nav"> */
  nav(selector = '[data-render="nav"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.nav.links
      .map(l => `<a href="${l.href}">${l.label}</a>`)
      .join('')
  },

  /** Renders med spa services into [data-render="med-spa-services"] */
  medSpaServices(selector = '[data-render="med-spa-services"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.medSpa.services.map(s => `
      <div class="service-card" id="${s.id}">
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.description}</p>
        <span class="service-price">${s.price}</span>
      </div>`).join('')
  },

  /** Renders day spa services into [data-render="day-spa-services"] */
  daySpaServices(selector = '[data-render="day-spa-services"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.daySpa.services.map(s => `
      <div class="service-card" id="${s.id}">
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.description}</p>
        <div class="service-meta">
          <span class="service-duration">${s.duration}</span>
          <span class="service-price">${s.price}</span>
        </div>
      </div>`).join('')
  },

  /** Renders signature experiences into [data-render="experiences"] */
  experiences(selector = '[data-render="experiences"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.experiences.items.map(e => `
      <div class="experience-card" id="${e.id}">
        <div class="experience-header">
          <h3 class="experience-name">${e.name}</h3>
          <span class="experience-duration">${e.duration}</span>
          <span class="experience-price">${e.price}</span>
        </div>
        <p class="experience-desc">${e.description}</p>
      </div>`).join('')
  },

  /** Renders testimonials into [data-render="testimonials"] */
  testimonials(selector = '[data-render="testimonials"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.testimonials.items.map(t => `
      <div class="testimonial-card">
        <blockquote class="testimonial-quote">"${t.quote}"</blockquote>
        <cite class="testimonial-author">— ${t.author}, ${t.location}</cite>
      </div>`).join('')
  },

  /** Renders the three pillars into [data-render="pillars"] */
  pillars(selector = '[data-render="pillars"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.pillars.items.map(p => `
      <div class="pillar-card">
        <h3 class="pillar-title">${p.title}</h3>
        <p class="pillar-body">${p.body}</p>
      </div>`).join('')
  },

  /** Renders hours into [data-render="hours"] */
  hours(selector = '[data-render="hours"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.contact.hours.map(h => `
      <div class="hours-row">
        <span class="hours-days">${h.days}</span>
        <span class="hours-time">${h.hours}</span>
      </div>`).join('')
  },

  /** Renders footer nav links into [data-render="footer-nav"] */
  footerNav(selector = '[data-render="footer-nav"]') {
    const el = document.querySelector(selector)
    if (!el) return
    el.innerHTML = CONTENT.footer.links
      .map(l => `<a href="${l.href}">${l.label}</a>`)
      .join('')
  },

  /** Run all renderers at once */
  all() {
    this.nav()
    this.medSpaServices()
    this.daySpaServices()
    this.experiences()
    this.testimonials()
    this.pillars()
    this.hours()
    this.footerNav()
    injectContent()
    console.log('[content.js] All content injected ✓')
  },
}


/* ─── AUTO-RUN on DOMContentLoaded ─── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Render.all())
} else {
  Render.all()
}


/* ─── ES MODULE EXPORT (if using a bundler) ─── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT, Render, injectContent }
}