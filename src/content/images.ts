/**
 * Every image the site uses. Swap a URL here and it changes everywhere.
 * All are placeholders until real Lathom photography is supplied.
 */
export const images = {
  /** The full logo (mark + wordmark) on white. The navbar draws an L monogram instead. */
  logo: 'https://cdn.magicpatterns.com/uploads/mBkjvz1NXaxa87rVA4iqNo/Lathom.png',

  /** Landing page background: golden-hour farmland (Unsplash). */
  landingHero:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80',

  /** Home hero: garri being roasted in a processing facility. */
  heroHome: 'https://cdn.magicpatterns.com/patterns/generated-images/94e4f2f0-da02-41bd-b350-85e0aaaa74e5.jpg',
  /** Home introduction: cassava roots being inspected. */
  introHome: 'https://cdn.magicpatterns.com/patterns/generated-images/716c3f1d-6c63-4e18-b7d1-bd5f85879127.jpg',
  about: {
    /** About hero: loading processed produce at a processing yard, golden hour. */
    hero: 'https://cdn.magicpatterns.com/patterns/generated-images/8248f1e3-94b5-480d-87c3-ab0ee4dc34b5.jpg',
    /** Who We Are: a farmer delivering cassava to a processing centre. */
    who: 'https://cdn.magicpatterns.com/patterns/generated-images/e409c2bc-0c98-486c-a325-e1c4120a5928.jpg',
    /** Philosophy band: farmer\'s hands holding fresh cassava. */
    philosophy: 'https://cdn.magicpatterns.com/patterns/generated-images/43aad2ec-eeb0-479e-8e2a-f6ab45b84459.jpg',
  },

  /** Default background for sub-page heroes. */
  pageHeroDefault: 'https://cdn.magicpatterns.com/patterns/generated-images/a5ff2f56-78df-411e-af54-6773aace1ec1.jpg',

  services: {
    cassava: 'https://cdn.magicpatterns.com/patterns/generated-images/d76736b9-dc2a-4f13-986c-24de16bf27f9.jpg',
    meat: 'https://cdn.magicpatterns.com/patterns/generated-images/397d3f94-4b8b-48b0-a27c-2614213ff877.jpg',
    canning: 'https://cdn.magicpatterns.com/patterns/generated-images/3c2f6950-7447-4dde-95e5-d2da668e0913.jpg',
    dogs: 'https://cdn.magicpatterns.com/patterns/generated-images/35d05b48-10ad-4de8-9434-df86907cdda5.jpg',
    marketplace: 'https://cdn.magicpatterns.com/patterns/generated-images/5ced72fc-d811-4014-a907-fc1d7f9169c0.jpg',
  },

  products: {
    garri: 'https://cdn.magicpatterns.com/patterns/generated-images/ddcef9ed-5f8e-477e-9e30-2adfa54df674.jpg',
    cassavaFlour: 'https://cdn.magicpatterns.com/patterns/generated-images/2a383c17-8f7f-47e9-a25e-41f30b035e23.jpg',
    chicken: 'https://cdn.magicpatterns.com/patterns/generated-images/a67c18c7-33b2-48d1-8a85-55af9ba6e967.jpg',
    guineaFowl: 'https://cdn.magicpatterns.com/patterns/generated-images/b946428e-558b-45c3-bcb8-64df1d603ba0.jpg',
    pork: 'https://cdn.magicpatterns.com/patterns/generated-images/f0d3919b-7c98-48ea-aaae-6a68bfeae126.jpg',
    goatMeat: 'https://cdn.magicpatterns.com/patterns/generated-images/e6a50ad0-5f98-4342-9b4b-ba6a7ee41387.jpg',
    beef: 'https://cdn.magicpatterns.com/patterns/generated-images/a1b6abf8-effb-4169-8e3c-c636e0495402.jpg',
    sweetCorn: 'https://cdn.magicpatterns.com/patterns/generated-images/0b4b71ac-53c9-4366-96bd-3242c245e71b.jpg',
    pepper: 'https://cdn.magicpatterns.com/patterns/generated-images/94666515-5e2b-4b63-b062-438419a39700.jpg',
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
