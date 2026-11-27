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
    /** Philosophy band: farmer's hands holding fresh cassava. */
    philosophy: '/images/about-philosophy.jpg',
  },

  /** Default background for sub-page heroes. */
  pageHeroDefault: '/images/page-hero-default.jpg',

  services: {
    cassavaHero: '/images/services-cassava-hero.jpg',
    cassava: '/images/services-cassava.jpg',
    meatHero: '/images/services-meat-hero.jpg',
    meat: '/images/services-meat.jpg',
    canningHero: '/images/services-canning-hero.jpg',
    canning: '/images/services-canning.jpg',
    dogsHero: '/images/services-dogs.jpg',
    dogs: '/images/dog-breeder.jpg',
    marketplace: '/images/services-marketplace.jpg',
  },

  /**
   * Breed dog photos.
   */
  breeds: {
    boerboel: '/images/dog-boerboel.jpg',
    germanShepherd: '/images/dog-german-shepherd.jpg',
    belgianMalinois: '/images/dog-belgian-malinois.jpg',
    caucasianShepherd: '/images/dog-caucasian-shepherd.jpg',
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
  aboutPhilosophy: "A farmer's hands holding freshly harvested cassava roots and leaves",
  services: {
    cassavaHero: 'A large mound of freshly harvested cassava roots on farmland',
    cassava: 'Peeled cassava roots being washed in a steel trough',
    meatHero: 'A worker in protective clothing trimming poultry in a clean processing room',
    meat: 'Food facility workers in protective gloves processing poultry meat at a preparation table',
    canningHero: 'Sealed jars and cans of sweet corn and pepper on a production line',
    canning: 'Workers in protective hairnets and masks inspecting sliced produce in a food processing facility',
    dogsHero: 'A handler seated between a Boerboel and a German Shepherd on an estate',
    dogs: 'Two working shepherd dogs standing alert on a grassy field at a breeding facility',
    marketplace: 'A farmer handing a crate of fresh produce to a buyer',
  },
  breeds: {
    boerboel: 'A muscular Boerboel dog standing alert on a paved yard',
    germanShepherd: 'A German Shepherd dog wearing a black working harness looking directly forward',
    belgianMalinois: 'An athletic Belgian Malinois dog sitting alert with upright ears on grass',
    caucasianShepherd: 'A large Caucasian Shepherd dog standing guard in a grassy yard',
  },
  breedBoerboel: 'A muscular Boerboel dog standing alert on a paved yard',
  breedGermanShepherd: 'A German Shepherd dog wearing a black working harness looking directly forward',
  breedBelgianMalinois: 'An athletic Belgian Malinois dog sitting alert with upright ears on grass',
  breedCaucasianShepherd: 'A large Caucasian Shepherd dog standing guard in a grassy yard',
} as const
