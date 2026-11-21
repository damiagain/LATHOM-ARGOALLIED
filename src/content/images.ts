/**
 * Every image the site uses, referenced from local public assets.
 */
export const images = {
  /** The full logo (mark + wordmark) on white. The navbar draws an L monogram instead. */
  logo: '/images/logo.png',

  /** Landing page background: golden-hour farmland. */
  landingHero: '/images/landing-hero.jpg',

  /** Home hero: garri being roasted in a processing facility. */
  heroHome: '/images/home-hero.jpg',
  /** Home introduction: cassava roots being inspected. */
  introHome: '/images/home-intro.jpg',
  about: {
    /** About hero: loading processed produce at a processing yard, golden hour. */
    hero: '/images/about-hero.jpg',
    /** Who We Are: a farmer delivering cassava to a processing centre. */
    who: '/images/about-who.jpg',
    /** Philosophy band: farmer\'s hands holding fresh cassava. */
    philosophy: '/images/about-philosophy.jpg',
  },

  /** Default background for sub-page heroes. */
  pageHeroDefault: '/images/page-hero-default.jpg',

  services: {
    cassava: '/images/services-cassava.jpg',
    meat: '/images/services-meat.jpg',
    canning: '/images/services-canning.jpg',
    dogs: '/images/services-dogs.jpg',
    marketplace: '/images/services-marketplace.jpg',
  },

  products: {
    garri: '/images/products-garri.jpg',
    cassavaFlour: '/images/products-cassava-flour.jpg',
    chicken: '/images/products-chicken.jpg',
    guineaFowl: '/images/products-guinea-fowl.jpg',
    pork: '/images/products-pork.jpg',
    goatMeat: '/images/products-goat-meat.jpg',
    beef: '/images/products-beef.jpg',
    sweetCorn: '/images/products-sweet-corn.jpg',
    pepper: '/images/products-pepper.jpg',
  },
} as const

export const imageAlt = {
  logo: 'Lathom Agro-Allied logo',
  landingHero: 'Farmland at golden hour, with the low sun over open fields',
  heroHome: 'Two women in aprons and hairnets roasting garri in steel pans in a processing facility',
  introHome: 'A worker in a white coat inspecting freshly harvested cassava roots at a sorting table',
  pageHeroDefault: 'A worker walking between stacked sacks of processed produce in a warehouse',
  aboutHero: 'Workers loading sacks of processed produce onto a truck at a processing yard at golden hour',
  aboutWho: 'A farmer handing a basket of fresh cassava to a smiling worker at a processing centre',
  aboutPhilosophy: 'A farmer’s hands holding freshly harvested cassava roots and leaves',
} as const
