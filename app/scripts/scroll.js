// Phase 5 scroll animations — Lenis + GSAP ScrollTrigger.
// All 11 scroll-linked entries from SITE_SPEC.md § 4 implemented in catalog
// order. Values marked "TODO: verify" were flagged [uncertain] in the spec
// because GSAP wasn't on window at capture time.

// ---- Uncertain constants (grouped for easy tuning) --------------------
const LENIS_DURATION = 1.2;          // TODO: verify
const LENIS_EASE = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));  // TODO: verify
const ABOUT_H2_Y_START = 288;        // sampled at pct 0
const ABOUT_H2_Y_END = -48;          // sampled at pct 0.25+
const ABOUT_H2_ROT = 0;              // Aurum redesign uses a horizontal script tagline (screenshot #2), not the −8° kimbrandesign rotation
const STICKY_FADE_DURATION = 0.4;    // TODO: verify
const WORKS_REVEAL_Y = 40;           // TODO: verify — visual-feel default
const WORKS_REVEAL_DURATION = 0.8;   // TODO: verify
const WORKS_DECO_BASE_YPCT = -30;    // TODO: verify
const WORKS_DECO_STEP_YPCT = -5;     // TODO: verify
const TESTIMONY_STAGGER = 0.15;      // TODO: verify
const TEAM_STAGGER = 0.08;           // TODO: verify
const CLUB_PARALLAX_YPCT = -20;      // TODO: verify
const HERO_SCALE_START = 1.0;        // "big, fit the screen" at first load
const HERO_SCALE_END = 0.65;         // "slowly shrinking as the scroll goes down"

/* ---- Lenis boot + GSAP bridge ---------------------------------------- */
(function bootLenis() {
  if (typeof Lenis === 'undefined' || typeof gsap === 'undefined') {
    console.warn('[scroll.js] Lenis or gsap missing; aborting scroll setup.');
    return;
  }

  const lenis = new Lenis({
    duration: LENIS_DURATION,
    easing: LENIS_EASE,
    smoothWheel: true,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
  });
  window.__lenis = lenis;

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  /* 4.1 Header pin
   * Spec says "full-page pin", but runtime-data.json shows .header
   * rect.y moving -1px per scrolled px (always absolute, never fixed).
   * Treatment: no JS pin — .header is already position:absolute at
   * document top, layered over hero. No ScrollTrigger needed.
   * (The § 4.1 pseudo-code contradicted the actual sample data.)
   */

  /* 4.2 Hero pin (one viewport) + 4.2a hero-image scale combined into a
   * single timeline so the pin's scrubbed ScrollTrigger drives the scale.
   * (Keeping them as two separate triggers made ScrollTrigger resolve the
   * scale tween's start at 900px — after the pin released — because the
   * pin was created first and shifted the coordinate space. One timeline
   * with pin + scrub avoids that.) */
  const heroImg = document.querySelector('.hero__background');
  if (heroImg) {
    gsap.set(heroImg, { transformOrigin: 'center center', scale: HERO_SCALE_START });
  }
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: true,
    },
  });
  if (heroImg) {
    heroTl.fromTo(
      heroImg,
      { scale: HERO_SCALE_START },
      { scale: HERO_SCALE_END, ease: 'none' },
      0
    );
  }

  /* 4.2b About sticker parallax + fade-in — subtle, scroll-linked.
   * CSS pre-rotates the two stacked images; gsap.set re-declares those
   * rotations so that subsequent tweens don't wipe them when they write
   * the transform matrix. Foreground and background drift opposite
   * directions through the section's viewport range for depth. */
  const aboutBg = document.querySelector('.about__sticker-bg');
  const aboutFg = document.querySelector('.about__sticker-fg');
  if (aboutBg && aboutFg) {
    gsap.set(aboutBg, { rotation: -6, scale: 1.02, transformOrigin: 'center center' });
    gsap.set(aboutFg, { rotation: 3, transformOrigin: 'center center' });

    // 1) Gentle fade-in on enter.
    gsap.from('.about__sticker', {
      opacity: 0,
      y: 40,
      duration: 1.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    // 2) Scroll-scrubbed parallax — fg drifts up, bg drifts down slightly.
    gsap.fromTo(aboutFg,
      { y: 30 },
      {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    gsap.fromTo(aboutBg,
      { y: -20 },
      {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
  }

  /* 4.3 About H2 scrubbed translateY 288→−48 (rotation overridden to 0 for Aurum) */
  const aboutH2 = document.querySelector('#about h2');
  if (aboutH2) {
    gsap.set(aboutH2, { rotation: ABOUT_H2_ROT, y: ABOUT_H2_Y_START });
    gsap.to(aboutH2, {
      y: ABOUT_H2_Y_END,
      rotation: ABOUT_H2_ROT,
      ease: 'none',
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });
  }

  /* 4.4 Sticky nav reveal — CSS handles the sticky positioning; layer a
   * fade-in on scroll past the hero so it doesn't blink in at scroll 0. */
  gsap.from('.sticky-nav', {
    opacity: 0,
    y: -10,
    duration: STICKY_FADE_DURATION,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.hero',
      start: 'bottom top',
      toggleActions: 'play none none reverse',
    },
  });

  /* 4.5a Fullscreen service tile — scrubbed Ken-Burns zoom during the pin
   * + ease-in overlay reveal on entry. Applies to Clinical Mastery and
   * Personal Protocol. Absolute Discretion opts out via `.service--discretion`
   * and gets a dedicated, more pronounced zoom below. */
  gsap.utils.toArray('.service--fullscreen:not(.service--discretion)').forEach((tile) => {
    const img = tile.querySelector('.service__image');
    const overlay = tile.querySelector('.service__overlay');

    if (img) {
      gsap.fromTo(img,
        { scale: 1 },
        {
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: tile,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        });
    }
    if (overlay) {
      gsap.from(overlay, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tile,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  });

  /* 4.5b Absolute Discretion — dedicated smooth zoom.
   * Stronger scale (1.0 → 1.28) with an eased curve and scrub smoothing
   * so the image drifts in gradually rather than tracking scroll 1:1.
   * Overlay reveal is kept consistent with the other fullscreen tiles. */
  {
    const tile = document.querySelector('.service--discretion');
    if (tile) {
      const img = tile.querySelector('.service__image');
      const overlay = tile.querySelector('.service__overlay');

      if (img) {
        gsap.fromTo(img,
          { scale: 1 },
          {
            scale: 1.28,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: tile,
              start: 'top top',
              end: '+=100%',
              scrub: 1,        // 1s smoothing — decouples zoom from raw scroll for a softer feel
            },
          });
      }
      if (overlay) {
        gsap.from(overlay, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tile,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }
  }

  /* 4.5 Services sequential pin — each .service pins for 1 viewport.
   * Clinical Mastery (index 0) uses `pinSpacing: false` so no extra scroll
   * distance is reserved — the next tile (Personal Protocol) slides up over
   * the pinned Clinical Mastery panel instead of appearing after it. */
  document.querySelectorAll('.service').forEach((tile, i) => {
    const overlapWithNext = i === 0;
    ScrollTrigger.create({
      trigger: tile,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: !overlapWithNext,
      anticipatePin: 1,
    });
  });

  /* 4.6 Works tile reveals — fade/slide in on enter */
  gsap.utils.toArray('.work').forEach((tile) => {
    gsap.from(tile, {
      opacity: 0,
      y: WORKS_REVEAL_Y,
      duration: WORKS_REVEAL_DURATION,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: tile,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  /* 4.7 Works decorative SVG parallax — scrubbed */
  gsap.utils.toArray('.works__deco').forEach((el, i) => {
    gsap.to(el, {
      yPercent: WORKS_DECO_BASE_YPCT + i * WORKS_DECO_STEP_YPCT,
      ease: 'none',
      scrollTrigger: {
        trigger: '#works',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  /* 4.8 Testimony advance — stagger reveal on enter.
   * content.js's Render.testimonials() outputs .testimonial-card elements
   * into [data-render="testimonials"], so that's the selector we target. */
  gsap.utils.toArray('.testimonial-card').forEach((t, i) => {
    gsap.from(t, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      delay: i * TESTIMONY_STAGGER,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: t,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  /* 4.9 Book reveal — fade + scale */
  const bookImg = document.querySelector('#book img');
  if (bookImg) {
    gsap.from(bookImg, {
      opacity: 0,
      scale: 0.96,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#book',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* 4.10 Experience card reveal (was team card reveal — the #team section
   * now renders Aurum Signature Experiences via content.js Render.experiences,
   * which outputs .experience-card elements). */
  gsap.from('.experience-card', {
    opacity: 0,
    y: 30,
    stagger: TEAM_STAGGER,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#team',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });

  /* 4.11 Club background parallax — scrubbed */
  gsap.to('.club__background', {
    yPercent: CLUB_PARALLAX_YPCT,
    ease: 'none',
    scrollTrigger: {
      trigger: '#club',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  /* Refresh after images settle so triggers measure the correct heights. */
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
