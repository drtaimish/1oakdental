// Single source of truth for the office's details. Change them here and every page follows.
export const practice = {
  name: '1 Oak Dental',
  legalName: 'Ammar Taimish Dentistry Professional Corporation',
  url: 'https://1oakdental.ca',
  phone: '(437) 466-5151',
  phoneE164: '+14374665151',
  street: '1 Oak St, Unit 3',
  city: 'Toronto',
  region: 'ON',
  postalCode: 'M5A 0A1',
  neighbourhood: 'Regent Park, downtown Toronto',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1+Oak+St+%233+Toronto+ON+M5A+0A1',
  // TODO(Ammar): confirm hours. Not published on the old site.
  hours: null,
  // TODO(Ammar): add the Google Business Profile link once it exists.
  googleProfileUrl: null,
  instagram: 'https://www.instagram.com/drammar1/',
  linkedin: 'https://ca.linkedin.com/in/ammar-taimish-2383472b',
};

export const services = [
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    summary: 'Replace a missing tooth with an implant that looks, feels and works like your own.',
  },
  {
    slug: 'all-on-4-dental-implants',
    title: 'Full-Arch Implants (All-on-4)',
    summary: 'A fixed set of new teeth on four to six implants, often placed in one day.',
  },
  {
    slug: 'wisdom-teeth-removal',
    title: 'Wisdom Teeth Removal',
    summary: 'Gentle removal of impacted or painful wisdom teeth, with sedation if you need it.',
  },
  {
    slug: 'invisalign',
    title: 'Invisalign and Clear Aligners',
    summary: 'Straighten crowded or spaced teeth with clear, removable aligners.',
  },
  {
    slug: 'emergency-dentist',
    title: 'Emergency Dental Care',
    summary: 'Toothache, a broken tooth or swelling? Call us for the soonest appointment.',
  },
  {
    slug: 'general-dentistry',
    title: 'Checkups and Cleanings',
    summary: 'Exams, cleanings and fillings to keep your teeth healthy for life.',
  },
];
