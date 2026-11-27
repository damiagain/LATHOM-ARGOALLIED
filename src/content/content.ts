/**
 * All site copy lives here.
 * Brand tokens, navigation, services, sections, and metadata.
 */
import { images, imageAlt } from './images'

export type Route =
  | '/'
  | '/home'
  | '/about'
  | '/services'
  | '/services/cassava-processing'
  | '/services/meat-livestock-processing'
  | '/services/food-preservation-canning'
  | '/services/dog-breeding'
  | '/marketplace'
  | '/locations'
  | '/partnerships'
  | '/contact'
  | '/contact?enquiry=quote'

export type ServiceIcon = 'cassava' | 'meat' | 'canning' | 'dog' | 'market'

export const brand = {
  name: 'Lathom Agroallied Limited',
  shortName: 'Lathom',
  tagline: 'Preserving Food. Empowering Farmers. Feeding Africa.',
}

/** Contact and social details. */
export const contact = {
  phone: '+234 906 539 2565',
  phoneLink: 'tel:+2349065392565',
  whatsappNumber: '2349065392565',
  whatsappLink: 'https://wa.me/2349065392565',
  whatsappMessage: 'Hello Lathom Agroallied, I would like to make an enquiry.',
  email: 'lathomagroallied@gmail.com',
  emailLink: 'mailto:lathomagroallied@gmail.com',
  website: '',
  websiteLink: '',
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
    tiktok: '',
  },
}

/** The four core services across nav, footer and routes. */
export const services: { label: string; route: Route; icon: ServiceIcon; image: string; alt: string }[] = [
  {
    label: 'Cassava Processing',
    route: '/services/cassava-processing',
    icon: 'cassava',
    image: images.services.cassava,
    alt: imageAlt.services.cassava,
  },
  {
    label: 'Meat & Livestock Processing',
    route: '/services/meat-livestock-processing',
    icon: 'meat',
    image: images.services.meat,
    alt: imageAlt.services.meat,
  },
  {
    label: 'Food Preservation & Canning',
    route: '/services/food-preservation-canning',
    icon: 'canning',
    image: images.services.canning,
    alt: imageAlt.services.canning,
  },
  {
    label: 'Premium Security Dog Breeding',
    route: '/services/dog-breeding',
    icon: 'dog',
    image: images.services.dogs,
    alt: imageAlt.services.dogs,
  },
]

export const nav = {
  links: [
    { label: 'Home', route: '/home' as Route },
    { label: 'About Us', route: '/about' as Route },
    { label: 'Our Services', route: '/services' as Route, hasMenu: true },
    { label: 'Our Marketplace', route: '/marketplace' as Route },
    { label: 'Our Locations', route: '/locations' as Route },
    { label: 'Contact Us', route: '/contact' as Route },
  ],
  quote: { label: 'Get a Quote', route: '/contact?enquiry=quote' as Route },
  marketplacePill: { label: 'Our Marketplace', route: '/marketplace' as Route },
}

export const landing = {
  headingTop: 'Lathom',
  headingBottom: 'Agroallied Limited',
  tagline: brand.tagline,
  quoteCta: 'Get a Quote',
  marketplaceBanner: 'Explore Our Agricultural Marketplace',
}

export const home = {
  hero: {
    title: "Preserving Africa's Harvest. Making Food Accessible to All.",
    body: 'At Lathom Agroallied Limited, we are building sustainable solutions to Africa\u2019s food challenges through innovative agricultural processing, food preservation, livestock production and farmer-focused commerce. We transform agricultural produce into quality food products, extend the shelf life of locally produced food and create opportunities for farmers and communities to thrive.',
    primary: { label: 'Explore Our Services', route: '/services' as Route },
    secondary: { label: 'Partner With Us', route: '/partnerships' as Route },
  },
  intro: {
    label: 'About Lathom',
    body: 'Lathom Agroallied Limited is an African agribusiness company committed to transforming the agricultural value chain through food processing, preservation, livestock production and innovative agricultural commerce. We are starting from Nigeria, with a vision to expand our impact across Africa.',
    link: { label: 'Learn more about us', route: '/about' as Route },
  },
  purpose: {
    vision: {
      label: 'Our Vision',
      statement: 'Ensuring food is available and affordable on the tables of Africans.',
      reveal:
        'We envision an Africa where agricultural abundance translates into food security, affordability and economic prosperity for everyone. We believe that food should not go to waste while communities struggle with availability and affordability. Through better processing, preservation and distribution, we aim to bridge this gap.',
    },
    mission: {
      label: 'Our Mission',
      statement: 'To extend the shelf life of African agricultural produce.',
      reveal:
        'We are committed to developing efficient food processing and preservation solutions that reduce post-harvest losses, improve food accessibility and create more value from locally produced agricultural resources. By connecting farmers, processors and consumers, we aim to build a more efficient and sustainable food ecosystem.',
    },
  },
  whatWeDo: {
    title: 'What We Do',
    intro: 'Our operations span multiple areas of the agricultural value chain.',
    items: [
      {
        title: 'Cassava Processing',
        body: 'We process cassava into essential food products, including garri and cassava flour, creating convenient, quality products from locally sourced agricultural produce.',
        image: images.services.cassava,
        alt: 'Peeled cassava roots being washed in a steel trough',
        route: '/services/cassava-processing' as Route,
      },
      {
        title: 'Meat & Livestock Processing',
        body: 'We process poultry and livestock products, including chicken, guinea fowl, pork, goat meat and beef, with a focus on hygienic handling, quality and preservation.',
        image: images.services.meat,
        alt: 'A worker in protective clothing trimming poultry in a clean processing room',
        route: '/services/meat-livestock-processing' as Route,
      },
      {
        title: 'Food Preservation & Canning',
        body: 'We preserve agricultural produce through processing, packaging and canning solutions. Our focus includes sweet corn, pepper and other perishable agricultural products.',
        image: images.services.canning,
        alt: 'Sealed jars and cans of sweet corn and pepper on a production line',
        route: '/services/food-preservation-canning' as Route,
      },
      {
        title: 'Premium Security Dog Breeding',
        body: 'We breed quality, documented dogs suitable for farm, estate and property security. Our breeding programme includes Boerboel, German Shepherd, Belgian Malinois and Caucasian Shepherd breeds.',
        image: images.services.dogs,
        alt: 'A handler seated between a Boerboel and a German Shepherd on an estate',
        route: '/services/dog-breeding' as Route,
      },
      {
        title: 'Agricultural Marketplace',
        body: 'We are developing a digital marketplace that will connect farmers directly with communities, retailers and bulk purchasers, making it easier to source agricultural produce at competitive prices.',
        image: images.services.marketplace,
        alt: 'A farmer handing a crate of fresh produce to a buyer',
        route: '/marketplace' as Route,
      },
    ],
  },
  products: {
    title: 'Featured Agricultural Products',
    intro: 'Enquire about availability, volumes and supply arrangements for any of our products.',
    cta: 'Enquire',
    items: [
      { name: 'Garri', category: 'Cassava', image: images.products.garri },
      { name: 'Cassava Flour', category: 'Cassava', image: images.products.cassavaFlour },
      { name: 'Chicken', category: 'Poultry', image: images.products.chicken },
      { name: 'Guinea Fowl', category: 'Poultry', image: images.products.guineaFowl },
      { name: 'Pork', category: 'Livestock', image: images.products.pork },
      { name: 'Goat Meat', category: 'Livestock', image: images.products.goatMeat },
      { name: 'Beef', category: 'Livestock', image: images.products.beef },
      { name: 'Sweet Corn (Canned)', category: 'Preserved', image: images.products.sweetCorn },
      { name: 'Pepper', category: 'Preserved', image: images.products.pepper },
    ],
  },
  marketplace: {
    title: 'Connecting Farmers Directly to Markets.',
    subtitle: 'A Better Way to Buy and Sell Agricultural Produce.',
    steps: [
      { title: 'Farmers List Their Produce', icon: 'list' },
      { title: 'Buyers Place Orders', icon: 'cart' },
      { title: 'Direct Farmer-to-Buyer Connection', icon: 'link' },
      { title: 'Order Coordination', icon: 'truck' },
    ] as { title: string; icon: 'list' | 'cart' | 'link' | 'truck' }[],
    cta: 'Explore the Marketplace',
    ctaRoute: '/marketplace' as Route,
    modal: {
      title: 'Register your interest',
      body: 'Be the first to know when the Lathom Agricultural Marketplace opens.',
      roles: ['Farmer', 'Supplier', 'Bulk Buyer'],
      submit: 'Register Interest',
      successTitle: 'You\u2019re on the list',
      successBody: 'Thank you. We\u2019ll contact you as soon as the marketplace opens for registration.',
    },
  },
  why: {
    title: 'More Than Agriculture. We Create Value Across the Food Chain.',
    items: [
      { title: 'Value Addition', icon: 'value', body: 'We transform raw agricultural produce into processed products with greater convenience and commercial value.' },
      { title: 'Food Preservation', icon: 'preserve', body: 'We focus on reducing post-harvest losses and extending the useful shelf life of agricultural produce.' },
      { title: 'Farmer-Centred Approach', icon: 'farmer', body: 'We recognise farmers as critical partners in building a sustainable food ecosystem.' },
      { title: 'Diversified Agricultural Operations', icon: 'diverse', body: 'Our business spans crop processing, livestock products, food preservation and agricultural commerce.' },
      { title: 'Long-Term Vision', icon: 'vision', body: 'We are building a business designed to grow beyond traditional farming and contribute to Africa\u2019s broader food security objectives.' },
    ] as { title: string; icon: 'value' | 'preserve' | 'farmer' | 'diverse' | 'vision'; body: string }[],
  },
  partner: {
    title: "Let's Build a Better Agricultural Future Together.",
    body: 'We welcome partnerships with individuals, organisations and businesses interested in building sustainable agricultural value chains.',
    audiences: [
      'Crop farmers and cooperatives',
      'Livestock and poultry farmers',
      'Produce suppliers',
      'Distributors and wholesalers',
      'Retailers and supermarkets',
      'Food processing companies',
      'Investors and development organisations',
      'Community associations and bulk purchasers',
    ],
    cta: { label: 'Become a Partner', route: '/partnerships' as Route },
  },
}

export const enquiry = {
  title: 'Send an enquiry',
  body: 'Tell us what you need and the right team will get back to you.',
  natures: [
    'Food Products',
    'Cassava Processing',
    'Meat & Livestock Products',
    'Food Preservation',
    'Dog Breeding',
    'Agricultural Marketplace',
    'Partnership',
    'Investment',
    'Other',
  ],
  submit: 'Send Enquiry',
  sending: 'Sending\u2026',
  successTitle: 'Enquiry sent',
  successBody: 'Thank you for contacting Lathom Agroallied. A member of our team will be in touch shortly.',
}

export const footer = {
  name: 'Lathom Agroallied Limited',
  tagline: brand.tagline,
  about:
    'We are committed to transforming Africa\u2019s agricultural value chain through innovative food processing, preservation, livestock production and agricultural commerce.',
  quickLinks: [
    { label: 'Home', route: '/home' as Route },
    { label: 'About Us', route: '/about' as Route },
    { label: 'Our Services', route: '/services' as Route },
    { label: 'Agricultural Marketplace', route: '/marketplace' as Route },
    { label: 'Partnerships', route: '/partnerships' as Route },
    { label: 'Contact Us', route: '/contact' as Route },
  ],
  services: [
    { label: 'Cassava Processing', route: '/services/cassava-processing' as Route },
    { label: 'Meat & Livestock Processing', route: '/services/meat-livestock-processing' as Route },
    { label: 'Food Preservation & Canning', route: '/services/food-preservation-canning' as Route },
    { label: 'Premium Security Dog Breeding', route: '/services/dog-breeding' as Route },
  ],
  copyright: '\u00a9 2026 Lathom Agroallied Limited. All Rights Reserved.',
}

export const about = {
  hero: {
    title: 'About Us',
    subtitle: 'An African agribusiness building lasting value across the food chain.',
    ctas: [
      { label: 'Explore Our Services', route: '/services' as Route },
      { label: 'Partner With Us', route: '/partnerships' as Route },
    ] as [{ label: string; route: Route }, { label: string; route: Route }],
  },
  who: {
    label: 'Who We Are',
    title: 'Transforming the Agricultural Value Chain',
    paragraphs: [
      'Lathom Agroallied Limited is an African agribusiness company committed to transforming the agricultural value chain through food processing, preservation, livestock production and innovative agricultural commerce.',
      'We believe that Africa\u2019s food challenge is not simply about producing more food. It is also about preserving what is produced, reducing waste, improving distribution and making quality food accessible and affordable.',
      'Across the continent, farmers work tirelessly to produce food, yet a significant amount of agricultural produce loses value due to inadequate processing, storage and preservation infrastructure.',
      'At Lathom, we are building solutions to address these challenges.',
      'From transforming cassava into everyday food products to preserving perishable agricultural produce, processing livestock products and connecting farmers directly to consumers, our goal is to create sustainable value at every stage of the agricultural value chain.',
    ],
    callout: 'We are starting from Nigeria, with a vision to expand our impact across Africa.',
  },
  values: {
    title: 'Our Core Values',
    items: [
      { title: 'Food Security', icon: 'security', body: 'We believe everyone deserves access to sufficient, quality and affordable food.' },
      { title: 'Innovation', icon: 'innovation', body: 'We continuously explore better ways to process, preserve, package and distribute agricultural products.' },
      { title: 'Quality & Integrity', icon: 'quality', body: 'We are committed to maintaining quality standards, transparency and responsible business practices.' },
      { title: 'Sustainability', icon: 'sustain', body: 'We promote responsible agricultural practices, waste reduction and the efficient utilisation of available resources.' },
      { title: 'Empowerment', icon: 'empower', body: 'We believe farmers are central to Africa\u2019s economic development. Our business model seeks to create opportunities for farmers and agricultural communities.' },
    ] as { title: string; icon: 'security' | 'innovation' | 'quality' | 'sustain' | 'empower'; body: string }[],
  },
  philosophy: {
    label: 'Our Philosophy',
    lead: 'We believe that every harvest represents an opportunity.',
    lines: [
      'An opportunity to feed a family, empower a farmer, create employment and build a stronger economy.',
      'Our responsibility is to ensure that more of that opportunity is preserved and translated into lasting value.',
    ],
  },
  cta: {
    title: "Let's Build a Better Agricultural Future Together.",
    primary: { label: 'Explore Our Services', route: '/services' as Route },
    secondary: { label: 'Contact Us', route: '/contact' as Route },
  },
}

/** Detail content for the 4 core services. */
export const serviceDetails: Record<
  string,
  {
    title: string
    subtitle: string
    overview: string
    keyHighlights: { title: string; body: string }[]
    image: string
    alt: string
  }
> = {
  'cassava-processing': {
    title: 'Cassava Processing',
    subtitle: 'Garri and cassava flour from locally sourced cassava.',
    overview:
      'We process locally cultivated cassava into staple consumer food products, focusing on garri and cassava flour. By adhering to rigorous food safety, hygienic roasting, and modern moisture-control processes, we deliver nutritious and long-lasting cassava staples to households and commercial kitchens.',
    keyHighlights: [
      { title: 'Hygienic Processing', body: 'Stainless steel sorting, peeling, washing, and grating lines for optimal purity.' },
      { title: 'Garri Production', body: 'Traditional roasted taste and crisp texture with modern safety standards.' },
      { title: 'Cassava Flour', body: 'High-grade, odor-free cassava flour suitable for bakery and culinary applications.' },
      { title: 'Direct Farmer Sourcing', body: 'Fair and prompt purchases directly empowering local cassava growers.' },
    ],
    image: images.services.cassava,
    alt: 'Peeled cassava roots being washed in a steel trough',
  },
  'meat-livestock-processing': {
    title: 'Meat & Livestock Processing',
    subtitle: 'Poultry and livestock products, handled hygienically.',
    overview:
      'Our livestock processing operations focus on poultry (chicken, guinea fowl) and quality livestock (pork, goat meat, and beef). We emphasize humane handling, cold-chain maintenance, and sanitary butchery and packaging to bring safe, premium meats to consumers and commercial buyers.',
    keyHighlights: [
      { title: 'Poultry & Fowl', body: 'Dressed chicken and guinea fowl processed with strict temperature monitoring.' },
      { title: 'Quality Livestock', body: 'Carefully vetted cattle, goats, and pigs raised under ethical standards.' },
      { title: 'Cold-Chain Integrity', body: 'Chilled and frozen storage to prevent spoilage and maintain freshness.' },
      { title: 'Bulk Supply', body: 'Custom cuts and bulk volume arrangements for retailers and food service operators.' },
    ],
    image: images.services.meat,
    alt: 'A worker in protective clothing trimming poultry in a clean processing room',
  },
  'food-preservation-canning': {
    title: 'Food Preservation & Canning',
    subtitle: 'Extending the shelf life of perishable produce.',
    overview:
      'Post-harvest losses are among the biggest challenges in African agriculture. Our canning and preservation facility transforms perishable seasonal crops—such as sweet corn, peppers, and garden vegetables—into shelf-stable packaged foods ready for market distribution all year round.',
    keyHighlights: [
      { title: 'Canned Sweet Corn', body: 'Freshly stripped and vacuum-sealed tender sweet corn preserving natural taste.' },
      { title: 'Pepper & Vegetable Preserves', body: 'Processed and canned pepper pastes and seasonings with no artificial fillers.' },
      { title: 'Waste Reduction', body: 'Slowing spoilage at harvest peaks to stabilize farmer revenue and market supply.' },
      { title: 'Long Shelf Life', body: 'Sealed, tamper-evident packaging requiring no immediate refrigeration.' },
    ],
    image: images.services.canning,
    alt: 'Sealed jars and cans of sweet corn and pepper on a production line',
  },
  'dog-breeding': {
    title: 'Premium Security Dog Breeding',
    subtitle: 'Documented working breeds for farm, estate and property security.',
    overview:
      'Agricultural facilities, estates, and rural properties require dependable perimeter protection. We breed purebred, documented working canines—including Boerboels, German Shepherds, Belgian Malinois, and Caucasian Shepherds—focused on temperament, health, and reliable deterrence.',
    keyHighlights: [
      { title: 'Proven Working Breeds', body: 'Boerboels, German Shepherds, Belgian Malinois, and Caucasian Shepherds.' },
      { title: 'Documented Lineage', body: 'Comprehensive medical history, vaccination records, and purebred genetics.' },
      { title: 'Early Socialization', body: 'Bred and handled for balanced temperaments suitable for estate and farm environments.' },
      { title: 'Handler Guidance', body: 'Basic transition advice and ongoing kennel management support.' },
    ],
    image: images.services.dogs,
    alt: 'A handler seated between a Boerboel and a German Shepherd on an estate',
  },
}

/** Placeholder sub pages data: titles, subtitles, and introductory copy. */
export const subPages: Record<string, { title: string; subtitle: string; intro?: string }> = {
  '/about': {
    title: 'About Us',
    subtitle: 'Who we are, what we believe and where we are headed.',
  },
  '/services': {
    title: 'Our Services',
    subtitle: 'Processing, preservation, livestock and security across the value chain.',
    intro:
      'Lathom Agroallied Limited operates four core specialized agricultural divisions focused on reducing post-harvest losses and bringing dependable products to market.',
  },
  '/services/cassava-processing': {
    title: 'Cassava Processing',
    subtitle: 'Garri and cassava flour from locally sourced cassava.',
  },
  '/services/meat-livestock-processing': {
    title: 'Meat & Livestock Processing',
    subtitle: 'Poultry and livestock products, handled hygienically.',
  },
  '/services/food-preservation-canning': {
    title: 'Food Preservation & Canning',
    subtitle: 'Extending the shelf life of perishable produce.',
  },
  '/services/dog-breeding': {
    title: 'Premium Security Dog Breeding',
    subtitle: 'Documented working breeds for farm, estate and property security.',
  },
  '/marketplace': {
    title: 'Agricultural Marketplace',
    subtitle: 'Connecting farmers directly to markets.',
    intro:
      'Our digital agricultural marketplace is actively under development to eliminate unnecessary intermediaries, ensuring fair returns for producers and competitive wholesale pricing for buyers.',
  },
  '/locations': {
    title: 'Our Locations',
    subtitle: 'Where we operate today and where we are going next.',
    intro:
      'Lathom Agroallied Limited is currently headquartered in Nigeria, establishing processing centers and supply aggregation depots in key agricultural belts, with plans for West African expansion.',
  },
  '/partnerships': {
    title: 'Partnerships',
    subtitle: 'Build sustainable agricultural value chains with us.',
    intro:
      'We collaborate closely with outgrower schemes, agricultural cooperatives, processing equipment partners, food distributors, and institutional buyers.',
  },
  '/contact': {
    title: 'Contact Us',
    subtitle: 'Enquiries, quotes and partnerships. We are here to help.',
    intro:
      'Have questions about supply contracts, custom processing, livestock availability, or partnership opportunities? Reach out directly to our team.',
  },
}


// ─── TASK 2: SERVICES SECTION CONTENT ────────────────────────────────────────

export type ServiceIconCard = {
  /** Lucide icon name as a string – resolved in ServicePage */
  icon: string
  title: string
}

export type ProcessStep = {
  icon: string
  title: string
  body: string
}

export type BreedCard = {
  name: string
  body: string
  image: string
  alt: string
}

export type ServicePageData = {
  slug: string
  title: string
  tagline: string
  heroImage: string
  heroImageAlt: string
  overviewImage?: string
  overviewImageAlt?: string
  heroCtaPrimary: { label: string; scrollTo: string }
  heroCtaSecondary?: { label: string; scrollTo: string }
  overviewHeading?: string
  overviewParagraphs: string[]
  iconCardsHeading: string
  iconCards: ServiceIconCard[]
  objectiveCallout: string
  processBlockIntro?: string
  processSteps?: ProcessStep[]
  breedCards?: BreedCard[]
  breedingPhilosophyChecklist?: string[]
  closingCallout?: string[]
  enquiryNature: string
}

/** Full content for all 4 individual service pages. */
export const servicePages: ServicePageData[] = [
  // ── 1. CASSAVA PROCESSING ───────────────────────────────────────────────
  {
    slug: 'cassava-processing',
    title: 'Cassava Processing',
    tagline: "Turning Africa's Staple Crop into Quality Food Products.",
    heroImage: images.services.cassavaHero,
    heroImageAlt: imageAlt.services.cassavaHero,
    overviewImage: images.services.cassava,
    overviewImageAlt: imageAlt.services.cassava,
    heroCtaPrimary: { label: 'Enquire About Our Cassava Products', scrollTo: '#enquiry' },
    overviewParagraphs: [
      "Cassava is one of Africa's most important food crops. At Lathom, we focus on transforming this versatile crop into quality food products that are convenient, accessible and suitable for different consumer needs.",
    ],
    iconCardsHeading: 'Our current product categories include',
    iconCards: [
      { icon: 'Wheat', title: 'Garri Processing' },
      { icon: 'Package', title: 'Cassava Flour Production' },
      { icon: 'PackageCheck', title: 'Processing and Packaging of Cassava-Based Products' },
    ],
    objectiveCallout:
      'Our objective is to add value to locally sourced cassava, support agricultural producers and improve access to staple food products.',
    enquiryNature: 'Cassava Processing',
  },

  // ── 2. MEAT & LIVESTOCK PROCESSING ─────────────────────────────────────
  {
    slug: 'meat-livestock-processing',
    title: 'Meat & Livestock Processing',
    tagline: 'Quality Meat Processing. Better Food Preservation.',
    heroImage: images.services.meatHero,
    heroImageAlt: imageAlt.services.meatHero,
    overviewImage: images.services.meat,
    overviewImageAlt: imageAlt.services.meat,
    heroCtaPrimary: { label: 'Request a Product Enquiry', scrollTo: '#enquiry' },
    overviewParagraphs: [
      'We process poultry and livestock produce to support the availability of quality meat products for households, retailers, food businesses and bulk buyers.',
    ],
    iconCardsHeading: 'Our product categories include',
    iconCards: [
      { icon: 'Bird', title: 'Chicken' },
      { icon: 'Feather', title: 'Guinea Fowl' },
      { icon: 'Ham', title: 'Pork' },
      { icon: 'Beef', title: 'Goat Meat' },
      { icon: 'Beef', title: 'Beef' },
    ],
    processBlockIntro:
      'Our processing operations are focused on hygienic handling, appropriate processing methods, packaging and preservation.',
    processSteps: [
      { icon: 'ShieldCheck', title: 'Hygienic Handling', body: 'Careful, hygienic handling of poultry and livestock produce.' },
      { icon: 'Settings2', title: 'Processing', body: 'Appropriate processing methods.' },
      { icon: 'Box', title: 'Packaging', body: 'Packaging for quality products.' },
      { icon: 'Thermometer', title: 'Preservation', body: 'Preservation to support product quality.' },
    ],
    objectiveCallout:
      'We aim to make quality animal protein more accessible while creating additional value for livestock farmers.',
    enquiryNature: 'Meat & Livestock Products',
  },

  // ── 3. FOOD PRESERVATION & CANNING ─────────────────────────────────────
  {
    slug: 'food-preservation-canning',
    title: 'Food Preservation & Canning',
    tagline: "Preserving Today's Harvest for Tomorrow's Consumption.",
    heroImage: images.services.canningHero,
    heroImageAlt: imageAlt.services.canningHero,
    overviewImage: images.services.canning,
    overviewImageAlt: imageAlt.services.canning,
    heroCtaPrimary: { label: 'Partner With Our Processing Team', scrollTo: '#enquiry' },
    overviewParagraphs: [
      'One of the biggest challenges facing African agriculture is the loss of perishable produce due to limited preservation and processing infrastructure.',
      'At Lathom, we are working to address this challenge by exploring and developing food preservation solutions that extend product shelf life and improve availability beyond the harvesting season.',
    ],
    iconCardsHeading: 'Our areas of focus include',
    iconCards: [
      { icon: 'Wheat', title: 'Sweet Corn Processing and Canning' },
      { icon: 'Flame', title: 'Pepper Processing and Preservation' },
      { icon: 'Apple', title: 'Preservation of Selected Fruits and Vegetables' },
      { icon: 'PackageCheck', title: 'Packaging of Processed Agricultural Produce' },
      { icon: 'Plus', title: 'Other Value-Added Agricultural Products' },
    ],
    objectiveCallout:
      'We aim to reduce post-harvest losses and ensure that seasonal agricultural abundance can serve consumers for longer.',
    enquiryNature: 'Food Preservation',
  },

  // ── 4. PREMIUM SECURITY DOG BREEDING ───────────────────────────────────
  {
    slug: 'dog-breeding',
    title: 'Premium Security Dog Breeding',
    tagline: 'Protecting Farms. Securing Agricultural Investments.',
    heroImage: images.services.dogsHero,
    heroImageAlt: imageAlt.services.dogsHero,
    overviewImage: images.services.dogs,
    overviewImageAlt: imageAlt.services.dogs,
    heroCtaPrimary: { label: 'Explore Our Breeds', scrollTo: '#breeds' },
    heroCtaSecondary: { label: 'Enquire About Available Puppies', scrollTo: '#enquiry' },
    overviewParagraphs: [
      'Agricultural investments require protection. Farms, livestock facilities, warehouses and rural properties often face security challenges that can threaten productivity and investments.',
      'At Lathom, we operate a dedicated dog breeding programme focused on quality, pedigree documentation, sound temperament and responsible breeding.',
    ],
    iconCardsHeading: 'Our breeding programme includes',
    iconCards: [
      { icon: 'Shield', title: 'Boerboel' },
      { icon: 'Shield', title: 'German Shepherd' },
      { icon: 'Shield', title: 'Belgian Malinois' },
      { icon: 'Shield', title: 'Caucasian Shepherd' },
    ],
    breedCards: [
      {
        name: 'Boerboel',
        body: 'A powerful South African mastiff breed known for its protective instincts, strength and loyalty.',
        image: images.breeds.boerboel,
        alt: imageAlt.breeds.boerboel,
      },
      {
        name: 'German Shepherd (GSD)',
        body: 'An intelligent, versatile and trainable working breed suitable for property protection and various security roles.',
        image: images.breeds.germanShepherd,
        alt: imageAlt.breeds.germanShepherd,
      },
      {
        name: 'Belgian Malinois',
        body: 'An athletic, highly driven and intelligent working breed known for its suitability for professional working-dog activities.',
        image: images.breeds.belgianMalinois,
        alt: imageAlt.breeds.belgianMalinois,
      },
      {
        name: 'Caucasian Shepherd',
        body: 'A large livestock guardian breed traditionally used to protect livestock and property.',
        image: images.breeds.caucasianShepherd,
        alt: imageAlt.breeds.caucasianShepherd,
      },
    ],
    breedingPhilosophyChecklist: [
      'Documented pedigree and lineage',
      'Quality breeding stock',
      'Health and veterinary care',
      'Temperament and behavioural suitability',
      'Responsible breeding practices',
      'Proper puppy socialisation',
    ],
    closingCallout: [
      'Our objective is to provide farmers, estate owners and individuals with quality dogs suited to their security needs.',
      'We also intend to provide guidance to prospective owners on responsible dog ownership, training and breed suitability.',
    ],
    objectiveCallout:
      'Our objective is to provide farmers, estate owners and individuals with quality dogs suited to their security needs.',
    enquiryNature: 'Dog Breeding',
  },
]

// ── /services OVERVIEW PAGE ────────────────────────────────────────────────

export const servicesOverview = {
  hero: {
    title: 'Our Services',
    subtitle: 'Adding value across the agricultural value chain.',
    ctaPrimary: { label: 'Request a Quote', route: '/contact' as Route },
    ctaSecondary: { label: 'Partner With Us', route: '/partnerships' as Route },
  },
  intro: {
    heading: 'What We Do',
    body: 'Our operations span multiple areas of the agricultural value chain, from processing and preservation to livestock products and agricultural commerce.',
  },
  sections: [
    {
      number: '01',
      title: 'Cassava Processing',
      tagline: "Turning Africa's Staple Crop into Quality Food Products.",
      description:
        'We transform locally sourced cassava into quality food products. Our focus is on convenient, accessible staples such as garri and cassava flour.',
      chips: ['Garri', 'Cassava Flour', 'Packaged Cassava Products'],
      image: images.services.cassava,
      alt: imageAlt.services.cassava,
      route: '/services/cassava-processing' as Route,
    },
    {
      number: '02',
      title: 'Meat & Livestock Processing',
      tagline: 'Quality Meat Processing. Better Food Preservation.',
      description:
        'We process poultry and livestock produce for households, retailers, food businesses and bulk buyers. Our focus is hygienic handling, packaging and preservation.',
      chips: ['Chicken', 'Guinea Fowl', 'Pork', 'Goat Meat', 'Beef'],
      image: images.services.meat,
      alt: imageAlt.services.meat,
      route: '/services/meat-livestock-processing' as Route,
    },
    {
      number: '03',
      title: 'Food Preservation & Canning',
      tagline: "Preserving Today's Harvest for Tomorrow's Consumption.",
      description:
        'We are developing preservation solutions that extend shelf life and reduce post-harvest losses. This helps seasonal produce serve consumers for longer.',
      chips: ['Sweet Corn', 'Pepper', 'Fruits and Vegetables'],
      image: images.services.canning,
      alt: imageAlt.services.canning,
      route: '/services/food-preservation-canning' as Route,
    },
    {
      number: '04',
      title: 'Premium Security Dog Breeding',
      tagline: 'Protecting Farms. Securing Agricultural Investments.',
      description:
        'A dedicated breeding programme focused on pedigree documentation, sound temperament and responsible breeding.',
      chips: ['Boerboel', 'German Shepherd', 'Belgian Malinois', 'Caucasian Shepherd'],
      image: images.services.dogs,
      alt: imageAlt.services.dogs,
      route: '/services/dog-breeding' as Route,
    },
  ],
  marketplaceBanner: {
    title: 'Agricultural Marketplace',
    subtitle: 'Connecting Farmers Directly to Markets.',
    route: '/marketplace' as Route,
  },
  closingCta: {
    headline: "Let's Build a Better Agricultural Future Together.",
    primary: { label: 'Request a Quote', route: '/contact' as Route },
    secondary: { label: 'Partner With Us', route: '/partnerships' as Route },
  },
}


// ─── TASK 3: REMAINING 4 PAGES CONTENT ───────────────────────────────────────

export const marketplacePageData = {
  hero: {
    title: 'Agricultural Marketplace',
    badge: 'Coming Soon',
    subtitle: 'Connecting Farmers Directly to Markets.',
    cta: 'Register Your Interest',
  },
  subheading: 'A Better Way to Buy and Sell Agricultural Produce.',
  introParagraphs: [
    'We believe farmers deserve better access to markets, while communities and bulk purchasers deserve access to quality agricultural produce at competitive prices.',
    'To address this, Lathom Agroallied Limited is developing a digital agricultural marketplace designed to connect farmers directly with buyers.',
    'Our platform will make it easier for communities, retailers, restaurants, distributors and other bulk purchasers to source agricultural products directly from farmers and producers.',
  ],
  howItWorksHeading: 'How It Will Work',
  howItWorksSteps: [
    {
      number: '01',
      title: 'Farmers List Their Produce',
      body: 'Farmers will be able to showcase available agricultural products, quantities, locations and indicative prices.',
      icon: 'list',
    },
    {
      number: '02',
      title: 'Buyers Place Orders',
      body: 'Communities, businesses and bulk purchasers will be able to identify available products and submit purchase requests.',
      icon: 'cart',
    },
    {
      number: '03',
      title: 'Direct Farmer-to-Buyer Connection',
      body: 'The platform will facilitate connections between farmers and buyers, helping reduce unnecessary intermediaries.',
      icon: 'link',
    },
    {
      number: '04',
      title: 'Order Coordination',
      body: 'The marketplace will support order coordination and help buyers and sellers agree on fulfilment and delivery arrangements.',
      icon: 'truck',
    },
  ],
  whoCanUseHeading: 'Who Can Use the Marketplace?',
  whoCanUseItems: [
    { title: 'Agricultural farmers', icon: 'Wheat' },
    { title: 'Community associations', icon: 'Users' },
    { title: 'Food retailers', icon: 'Store' },
    { title: 'Restaurants and hospitality businesses', icon: 'Utensils' },
    { title: 'Food processors', icon: 'Factory' },
    { title: 'Distributors and wholesalers', icon: 'Truck' },
    { title: 'Bulk food purchasers', icon: 'Boxes' },
  ],
  goalHeading: 'Our Goal',
  goalCallout:
    'To create a more transparent and efficient agricultural trading ecosystem where farmers have better market access and buyers can source produce more conveniently.',
  closingBand: {
    badge: 'Coming Soon!',
    title: 'Interested in becoming a farmer, supplier or bulk buyer on our platform?',
    cta: 'Register Your Interest',
  },
}

export const locationsPageData = {
  hero: {
    title: 'Our Locations',
    subtitle: 'Building From Nigeria, Growing Across Africa.',
    cta: { label: 'Contact Our Team', route: '/contact' as Route },
  },
  intro: 'Lathom Agroallied Limited currently operates from two locations in Nigeria:',
  locations: [
    {
      name: 'Ikorodu, Lagos State',
      description: 'Our operational base supporting our agricultural and processing activities.',
      image: images.services.cassava,
      alt: 'Lathom agricultural and processing operational base in Ikorodu, Lagos State',
    },
    {
      name: 'Igbo-Etche',
      description: 'Our additional operational location supporting our agricultural activities.',
      image: '/images/about-who.jpg',
      alt: 'Lathom operational location in Igbo-Etche',
    },
  ],
  closing:
    'We are building a network of agricultural operations that brings us closer to farmers, suppliers and the communities we serve.',
  ctaBand: {
    title: 'Connect With Our Operational Hubs',
    cta: { label: 'Contact Our Team', route: '/contact' as Route },
  },
}

export const partnershipsPageData = {
  hero: {
    title: 'Partnerships',
    subtitle: "Let's Build a Better Agricultural Future Together.",
    cta: { label: 'Become a Partner', scrollTo: '#enquiry' },
  },
  intro:
    'We welcome partnerships with individuals, organisations and businesses interested in building sustainable agricultural value chains.',
  heading: 'We are particularly interested in working with',
  partners: [
    { title: 'Crop farmers and agricultural cooperatives', icon: 'Wheat' },
    { title: 'Livestock and poultry farmers', icon: 'Bird' },
    { title: 'Agricultural produce suppliers', icon: 'Truck' },
    { title: 'Food distributors and wholesalers', icon: 'Boxes' },
    { title: 'Retailers and supermarkets', icon: 'Store' },
    { title: 'Food processing companies', icon: 'Factory' },
    { title: 'Agricultural investors and development organisations', icon: 'TrendingUp' },
    { title: 'Community associations and bulk purchasers', icon: 'Users' },
  ],
  closing:
    'Whether you are looking to supply agricultural produce, purchase processed products, collaborate on food preservation or explore investment opportunities, we would love to hear from you.',
}

export const contactPageData = {
  hero: {
    title: 'Contact Us',
    subtitle: "Let's Talk Agriculture.",
  },
  intro:
    'Whether you are a farmer, distributor, prospective customer, investor or business partner, our team is available to discuss opportunities for collaboration.',
  company: {
    name: 'Lathom Agroallied Limited',
    locations: [
      'Ikorodu, Lagos State, Nigeria',
      'Igbo-Etche (state to be confirmed)',
    ],
  },
  faqHeading: 'Frequently Asked Questions',
  faqs: [
    {
      q: 'What does Lathom Agroallied Limited do?',
      a: 'We are an agribusiness company involved in agricultural processing, food preservation, livestock products, premium dog breeding and the development of an agricultural marketplace.',
    },
    {
      q: 'What agricultural products do you process?',
      a: 'Our current areas of focus include cassava products such as garri and cassava flour, poultry and livestock products, sweet corn, pepper and other agricultural produce.',
    },
    {
      q: 'Do you process meat products?',
      a: 'Yes. Our livestock processing categories include chicken, guinea fowl, pork, goat meat and beef.',
    },
    {
      q: 'What dog breeds do you specialise in?',
      a: 'Our breeding programme includes Boerboel, German Shepherd, Belgian Malinois and Caucasian Shepherd breeds.',
    },
    {
      q: 'Can farmers supply agricultural produce to Lathom?',
      a: 'We welcome enquiries from farmers and agricultural suppliers interested in supplying produce or exploring commercial partnerships.',
    },
    {
      q: 'How will the Lathom Marketplace work?',
      a: 'Our upcoming marketplace will connect farmers directly with communities, businesses and bulk purchasers, helping improve market access and simplify agricultural sourcing.',
    },
    {
      q: 'Where is Lathom located?',
      a: 'We currently operate from Ikorodu, Lagos State and Igbo-Etche.',
    },
    {
      q: 'How can I partner with Lathom?',
      a: 'You can reach our team through the contact form, phone number or email address provided on our website.',
    },
  ],
}
