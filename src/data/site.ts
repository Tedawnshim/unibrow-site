// One place for the studio's details. Change them here and every page follows.

// Keep this false until the day we switch the domain over.
// While false: search engines are told not to index the site, and Google Analytics does not load.
export const LAUNCHED = false;

export const site = {
  name: 'Unibrow Studio',
  legalName: 'Rough Cut Productions Pvt. Ltd.',
  url: 'https://unibrow.studio',
  tagline: 'Connect. Collab. Create.',
  description:
    'Unibrow Studio is a film and content studio in Imphal, Manipur. We make brand films, monthly content and social media for businesses across Manipur and the Northeast.',
  since: 2017,
  brandsWorkedWith: '70+',
  replyPromise: 'We reply within 24 hours.',
  email: 'contact@unibrow.studio',
  phoneDisplay: '+91 88558 76008',
  phoneHref: 'tel:+918855876008',
  whatsapp: 'https://wa.me/918855876008',
  address: {
    // Written exactly as on the Google Business Profile.
    street: 'Uripok Haobam Leirak, Eartheners Lane',
    city: 'Imphal',
    region: 'Manipur',
    postcode: '795001',
    country: 'IN',
  },
  hours: '', // [Days and hours, exactly as on the Google profile]
  otherBase: 'Goa',
  google: {
    rating: '4.9',
    reviews: 14,
    // [Replace with the profile's own share link]
    url: 'https://www.google.com/maps/search/?api=1&query=Unibrow+Studio+Imphal',
  },
  social: {
    instagram: 'https://www.instagram.com/unibrow.studio/',
    youtube: 'https://www.youtube.com/@UnibrowStudio',
  },
  ga4: 'G-B0PKCKSLBP',
  showreelYouTubeId: 'pljCPFbGRMc',
};

export const nav = [
  { label: 'Work', href: '/portfolio/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Journal', href: '/journal/' },
];

export const lines = {
  films: { label: 'Brand films', service: '/services/#films' },
  social: { label: 'Social', service: '/services/#content' },
  design: { label: 'Design', service: '/services/#design' },
  web: { label: 'Digital and web', service: '/services/#web' },
  originals: { label: 'Originals', service: '/services/#originals' },
} as const;

export type Line = keyof typeof lines;
