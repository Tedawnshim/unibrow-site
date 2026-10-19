// Team, clients, packages and recognition. Words in [brackets] are still to be confirmed.
import shim from '../assets/team/tedawnshim-khaling.jpg';
import jackson from '../assets/team/jackson-meisnam.jpg';
import ranju from '../assets/team/khangembam-ranju.jpg';
import dk from '../assets/team/soraisam-devakishor-singh.jpg';

export const team = [
  {
    name: 'Tedawnshim Khaling',
    role: 'Co-founder, [title]',
    line: 'Writing, directing, and the voice of our originals.',
    base: '[Based in]',
    photo: shim,
  },
  {
    name: 'Jackson Meisnam',
    role: 'Co-founder, [title]',
    line: 'Art direction, camera, 3D, animation and illustration.',
    base: '[Based in]',
    photo: jackson,
  },
  {
    name: 'Khangembam Ranju',
    role: '[Title]',
    line: 'Edit, colour, sound and VFX.',
    base: '[Based in]',
    photo: ranju,
  },
  {
    name: 'Soraisam Devakishor Singh',
    role: 'Co-founder, business',
    line: 'Strategy, clients, websites and digital marketing.',
    base: 'Imphal',
    photo: dk,
  },
];

// Logos load from src/assets/clients/<file>.png
export const clients = [
  { name: 'Asian Paints', file: 'asian-paints' },
  { name: 'eGov Foundation', file: 'egov-foundation' },
  { name: 'SELCO Foundation', file: 'selco-foundation' },
  { name: 'Interglobe Foundation', file: 'interglobe-foundation' },
  { name: 'Dhriiti', file: 'dhriiti' },
  { name: '10BedICU', file: '10bedicu' },
  { name: 'DIPR Manipur', file: 'dipr-manipur' },
  { name: 'Manipur State Rural Livelihoods Mission', file: 'msrlm' },
  { name: 'FSSAI', file: 'fssai' },
  { name: 'Meira Foods', file: 'meira-foods' },
  { name: 'Eartheners', file: 'eartheners' },
  { name: 'Oyas Umami', file: 'oyas-umami' },
  { name: 'Meiphung', file: 'meiphung' },
  { name: 'The Bayou', file: 'the-bayou' },
  { name: 'Teach For North-East', file: 'teach-for-north-east' },
  { name: 'Shosa Kitchen', file: 'shosa-kitchen' },
  { name: 'Classic Group of Hotels', file: 'classic-group-of-hotels' },
  { name: 'Shades & Motion', file: 'shades-and-motion' },
  { name: 'Vsual Brewery', file: 'vsual-brewery' },
  { name: 'Dorothée Sausset', file: 'dorothee-sausset' },
  { name: 'Roslyn Khongsai', file: 'roslyn-khongsai' },
];

export const recognition = [
  'Documentary shortlisted, Brahmaputra Valley Film Festival, 2018',
  'Best Sound Design for the feature film Meitan Araba (Ranju)',
  'We started and ran the Unibrow Film Festival in 2021, for films made on mobile phones',
];

export const process = [
  { title: 'A free call', text: 'Thirty minutes. We learn about your business, your goals and what you need.' },
  { title: 'A proposal', text: 'Scope, timeline and cost, written for you. No templates.' },
  { title: 'Making it', text: 'Script, shoot, design and edit, with you at every stage.' },
  { title: 'Delivery, and after', text: 'Final files, ready to post. We stay on for what comes next.' },
];

export const code = [
  { title: 'Work with intent', text: 'We listen first. Every decision serves the story.' },
  { title: 'Honour reality', text: 'We show real drama. We never invent it.' },
  { title: 'Chew what we can bite', text: "We promise less and deliver more, and we say no when we can't do it well." },
  { title: 'Collaboration over competition', text: 'We would rather build with others than against them.' },
];

// Packages: named and described, never priced on the site.
export const packageGroups = [
  {
    name: 'Content retainers',
    note: 'A monthly plan, shoot, edit and post.',
    items: [
      { name: 'The Essentials', line: '[What is included, and who it suits]' },
      { name: 'The Narrative', line: '[What is included, and who it suits]' },
      { name: 'The Growth', line: '[What is included, and who it suits]' },
    ],
  },
  {
    name: 'Social media management',
    note: 'Content planning, production and posting.',
    items: [
      { name: 'Maintenance', line: '[What is included, and who it suits]' },
      { name: 'Active Growth', line: '[What is included, and who it suits]' },
    ],
  },
  {
    name: 'Reel packs',
    note: 'A set of reels, made in one go.',
    items: [
      { name: 'Starter', line: '[How many reels, and what is included]' },
      { name: 'Standard', line: '[How many reels, and what is included]' },
      { name: 'Dominance', line: '[How many reels, and what is included]' },
    ],
  },
  {
    name: 'Add-ons',
    note: 'With any package.',
    items: [
      { name: 'Meta ads', line: 'We run your Instagram and Facebook ads and report on what they did.' },
      { name: 'Google reviews', line: 'A simple way to ask happy customers for a review.' },
      { name: 'Extra shoot day', line: 'One more shoot or event day, when you need it.' },
    ],
  },
];

export const serviceOptions = [
  'Monthly content (retainer)',
  'A brand film',
  'Social media management',
  'Reels',
  'Website or digital marketing',
  'Design',
  'Not sure yet',
];

export const budgetOptions = ['[Range 1]', '[Range 2]', '[Range 3]', 'Not sure yet'];
