import LathomWebsite from '../3c1bsjfe4Bh1k4RbH4Rig4.prototype'

export const placements = [
  note({ id: 'desktop-label', x: 0, y: -80, width: 1280 }, 'Desktop · 1280', { fontSize: 32, fontWeight: 'semibold' }),
  place(LathomWebsite, { id: 'lathom-website', x: 0, y: 0 }),

  note({ id: 'm1-label', x: 1480, y: -80, width: 390 }, '1 · Landing · 390', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'mobile-landing',
    x: 1480,
    y: 0,
    width: 390,
    height: 844,
    name: 'Mobile · Landing',
    start: { frame: 'f2K7drB3ZJzQSGAwR1ctog', args: { menuOpen: false, servicesOpen: false } },
  }),

  note({ id: 'm2-label', x: 1990, y: -80, width: 390 }, '2 · Menu open · 390', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'mobile-menu-open',
    x: 1990,
    y: 0,
    width: 390,
    height: 844,
    name: 'Mobile · Menu open',
    start: { frame: 'f2K7drB3ZJzQSGAwR1ctog', args: { menuOpen: true, servicesOpen: false } },
  }),

  note({ id: 'm3-label', x: 2500, y: -80, width: 390 }, '3 · Services expanded · 390', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'mobile-services-open',
    x: 2500,
    y: 0,
    width: 390,
    height: 844,
    name: 'Mobile · Services expanded',
    start: { frame: 'f2K7drB3ZJzQSGAwR1ctog', args: { menuOpen: true, servicesOpen: true } },
  }),

  note({ id: 'm4-label', x: 3010, y: -80, width: 360 }, '4 · Landing · 360', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'mobile-landing-360',
    x: 3010,
    y: 0,
    width: 360,
    height: 844,
    name: 'Small phone · Landing',
    start: { frame: 'f2K7drB3ZJzQSGAwR1ctog', args: { menuOpen: false, servicesOpen: false } },
  }),

  note({ id: 'home-title', x: 0, y: 1160, width: 1280 }, 'Home · /home', { fontSize: 56, fontWeight: 'bold' }),
  note({ id: 'home-desktop-label', x: 0, y: 1300, width: 1280 }, 'Desktop · 1280', { fontSize: 32, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-desktop',
    x: 0,
    y: 1380,
    name: 'Home · Desktop',
    start: { frame: 'v5csf484CbUXduHuGCeP2z' },
  }),

  note({ id: 'hm1-label', x: 1480, y: 1300, width: 390 }, '1 · Hero', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-m-hero',
    x: 1480,
    y: 1380,
    width: 390,
    height: 844,
    name: 'Home · Mobile hero',
    start: { frame: 'v5csf484CbUXduHuGCeP2z', args: { section: 'top' } },
  }),

  note({ id: 'hm2-label', x: 1990, y: 1300, width: 390 }, '2 · Vision revealed', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-m-purpose',
    x: 1990,
    y: 1380,
    width: 390,
    height: 844,
    name: 'Home · Mobile vision & mission',
    start: { frame: 'v5csf484CbUXduHuGCeP2z', args: { section: 'purpose', revealedCard: 'vision' } },
  }),

  note({ id: 'hm3-label', x: 2500, y: 1300, width: 390 }, '3 · What We Do', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-m-services',
    x: 2500,
    y: 1380,
    width: 390,
    height: 844,
    name: 'Home · Mobile services',
    start: { frame: 'v5csf484CbUXduHuGCeP2z', args: { section: 'services' } },
  }),

  note({ id: 'hm4-label', x: 3010, y: 1300, width: 390 }, '4 · Products carousel', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-m-products',
    x: 3010,
    y: 1380,
    width: 390,
    height: 844,
    name: 'Home · Mobile products',
    start: { frame: 'v5csf484CbUXduHuGCeP2z', args: { section: 'products' } },
  }),

  note({ id: 'hm5-label', x: 3520, y: 1300, width: 390 }, '5 · Marketplace', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-m-marketplace',
    x: 3520,
    y: 1380,
    width: 390,
    height: 844,
    name: 'Home · Mobile marketplace',
    start: { frame: 'v5csf484CbUXduHuGCeP2z', args: { section: 'marketplace' } },
  }),

  note({ id: 'hm6-label', x: 4030, y: 1300, width: 390 }, '6 · Enquiry form', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-m-enquiry',
    x: 4030,
    y: 1380,
    width: 390,
    height: 844,
    name: 'Home · Mobile enquiry',
    start: { frame: 'v5csf484CbUXduHuGCeP2z', args: { section: 'enquiry' } },
  }),

  note({ id: 'hm7-label', x: 4540, y: 1300, width: 390 }, '7 · Footer', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'home-m-footer',
    x: 4540,
    y: 1380,
    width: 390,
    height: 844,
    name: 'Home · Mobile footer',
    start: { frame: 'v5csf484CbUXduHuGCeP2z', args: { section: 'footer' } },
  }),

  note({ id: 'about-title', x: 0, y: 2540, width: 1280 }, 'About Us · /about', { fontSize: 56, fontWeight: 'bold' }),
  note({ id: 'about-desktop-label', x: 0, y: 2680, width: 1280 }, 'Desktop · 1280', { fontSize: 32, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'about-desktop',
    x: 0,
    y: 2760,
    name: 'About · Desktop',
    start: { frame: 'knbEJE8xyN2uyS1BaLYfuo' },
  }),

  note({ id: 'am1-label', x: 1480, y: 2680, width: 390 }, '1 · Hero', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'about-m-hero',
    x: 1480,
    y: 2760,
    width: 390,
    height: 844,
    name: 'About · Mobile hero',
    start: { frame: 'knbEJE8xyN2uyS1BaLYfuo', args: { section: 'top' } },
  }),

  note({ id: 'am2-label', x: 1990, y: 2680, width: 390 }, '2 · Who We Are', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'about-m-who',
    x: 1990,
    y: 2760,
    width: 390,
    height: 844,
    name: 'About · Mobile who we are',
    start: { frame: 'knbEJE8xyN2uyS1BaLYfuo', args: { section: 'who' } },
  }),

  note({ id: 'am3-label', x: 2500, y: 2680, width: 390 }, '3 · Mission revealed', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'about-m-purpose',
    x: 2500,
    y: 2760,
    width: 390,
    height: 844,
    name: 'About · Mobile vision & mission',
    start: { frame: 'knbEJE8xyN2uyS1BaLYfuo', args: { section: 'purpose', revealedCard: 'mission' } },
  }),

  note({ id: 'am4-label', x: 3010, y: 2680, width: 390 }, '4 · Core values', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'about-m-values',
    x: 3010,
    y: 2760,
    width: 390,
    height: 844,
    name: 'About · Mobile core values',
    start: { frame: 'knbEJE8xyN2uyS1BaLYfuo', args: { section: 'values' } },
  }),

  note({ id: 'am5-label', x: 3520, y: 2680, width: 390 }, '5 · Philosophy', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'about-m-philosophy',
    x: 3520,
    y: 2760,
    width: 390,
    height: 844,
    name: 'About · Mobile philosophy',
    start: { frame: 'knbEJE8xyN2uyS1BaLYfuo', args: { section: 'philosophy' } },
  }),

  note({ id: 'am6-label', x: 4030, y: 2680, width: 390 }, '6 · Call to action', { fontSize: 28, fontWeight: 'semibold' }),
  place(LathomWebsite, {
    id: 'about-m-cta',
    x: 4030,
    y: 2760,
    width: 390,
    height: 844,
    name: 'About · Mobile call to action',
    start: { frame: 'knbEJE8xyN2uyS1BaLYfuo', args: { section: 'cta' } },
  }),
]
