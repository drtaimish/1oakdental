// Single source of truth for the office's details. Change them here and every page follows.
export const practice = {
  name: '1 Oak Dental',
  legalName: 'Ammar Taimish Dentistry Professional Corporation',
  url: 'https://1oakdental.ca',
  phone: '(437) 466-5151',
  phoneE164: '+14374665151',
  // From the referral pads (Nov 2026).
  email: 'info@1oakdental.ca',
  urgentPhone: '416-214-0003',
  urgentPhoneE164: '+14162140003',
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

// Order matters: patients see family care first; implants and surgery follow.
// `ask` is the patient-facing line used on the For Patients hub.
export const services = [
  {
    slug: 'general-dentistry',
    title: 'Family and General Dentistry',
    summary: 'Checkups, cleanings and fillings for the whole family.',
    ask: 'Looking for a dentist for yourself or your family? Start here for routine visits and ongoing care.',
  },
  {
    slug: 'childrens-dentistry',
    title: "Children's Dentistry",
    summary: 'Gentle first visits, checkups and cleanings for kids of all ages.',
    ask: 'From the first tooth onward: friendly visits that help kids feel at home in the chair.',
  },
  {
    slug: 'sleep-dentistry',
    title: 'Sleep Dentistry',
    summary: 'Sedation options for anxious patients and longer procedures.',
    ask: 'If dental visits make you anxious, talk with us about options for your appointment.',
  },
  {
    slug: 'emergency-dentist',
    title: 'Emergency Dental Care',
    summary: 'Toothache, a broken tooth or swelling? Call us for the soonest appointment.',
    ask: 'In pain or broke a tooth? Call us first and we will fit you in as soon as we can.',
  },
  {
    slug: 'invisalign',
    title: 'Invisalign Clear Aligners',
    summary: 'Straighten crowded or spaced teeth with clear, removable aligners.',
    ask: 'Interested in straightening your teeth? Ask whether clear aligners may suit you.',
  },
  {
    slug: 'tooth-extractions',
    title: 'Tooth Extractions',
    summary: 'Simple and surgical extractions, done gently.',
    ask: "If you've been told a tooth may need to come out, book a visit to discuss the next steps.",
  },
  {
    slug: 'wisdom-teeth-removal',
    title: 'Wisdom Teeth Removal',
    summary: 'Impacted or painful wisdom teeth removed, with sedation if you need it.',
    ask: 'Pain or swelling at the back of your mouth? Find out whether your wisdom teeth should come out.',
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    summary: 'Replace a missing tooth with an implant that looks, feels and works like your own.',
    ask: 'Explore whether an implant could be an option for replacing a missing tooth.',
  },
  {
    slug: 'all-on-4-dental-implants',
    title: 'Full-Arch Implants (All-on-4)',
    summary: 'A fixed set of new teeth on four to six implants, often placed in one day.',
    ask: 'Missing most of your teeth or tired of loose dentures? Ask about fixed teeth on implants.',
  },
];

// The clinical team, as printed on the referral pads (Nov 2026).
// TODO(Ammar): name of the general dentist, if not Dr. Taimish.
export const team = [
  { id: 'taimish', name: 'Dr. Ammar Taimish', role: 'General Dentist, practice limited to Oral Surgery and Implant Dentistry', blurb: 'Performs all surgical care: extractions, impacted teeth, orthodontic exposures, implants and All-on-X.' },
  { id: 'dong', name: 'Dr. Alice Dong', role: 'Pediatric Dentist', blurb: 'Cares for infants, children and teens, including treatment under sedation or general anaesthesia.' },
  { id: 'esufali', name: 'Dr. Zakir Esufali, MD', role: 'Anaesthesiologist', blurb: 'Provides IV sedation, deep sedation and general anaesthesia in the office.' },
];

// Referral directory. Mirrors the printed referral pads exactly.
// `id` is used in links (?service=...) and preselects the matching checkbox.
export const referralGroups = [
  {
    id: 'oral-surgery',
    title: 'Oral surgery',
    provider: 'Dr. Ammar Taimish',
    items: [
      { id: 'extraction', label: 'Extraction' },
      { id: 'impacted', label: 'Impacted / wisdom teeth' },
      { id: 'exposure', label: 'Orthodontic surgical exposure' },
    ],
  },
  {
    id: 'implants',
    title: 'Implant dentistry',
    provider: 'Dr. Ammar Taimish',
    items: [
      { id: 'implant', label: 'Dental implants' },
      { id: 'overdenture', label: 'Implants for overdenture' },
      { id: 'allonx-surgical', label: 'All-on-X: surgical phase only' },
      { id: 'allonx-full', label: 'All-on-X: surgical + prosthetic' },
    ],
  },
  {
    id: 'pediatrics',
    title: 'Pediatric dentistry',
    provider: 'Dr. Alice Dong, Pediatric Dentist',
    items: [
      { id: 'peds-comprehensive', label: 'Pediatrics: comprehensive treatment' },
      { id: 'peds-specific', label: 'Pediatrics: specific treatment' },
      { id: 'peds-emergency', label: 'Pediatrics: emergency treatment' },
      { id: 'peds-sedation', label: 'Pediatrics: sedation' },
    ],
  },
  {
    id: 'sleep',
    title: 'Sleep dentistry and general anaesthesia',
    provider: 'Dr. Zakir Esufali, MD, Anaesthesiologist',
    items: [
      { id: 'sleep-comprehensive', label: 'Sleep dentistry: comprehensive treatment' },
      { id: 'sleep-specific', label: 'Sleep dentistry: specific treatment' },
      { id: 'sleep-emergency', label: 'Sleep dentistry: emergency treatment' },
      { id: 'sleep-ga', label: 'General anaesthesia' },
    ],
  },
];

export const sedationOptions = ['Local anaesthetic only', 'IV sedation', 'Deep sedation', 'General anaesthesia', 'Please discuss with patient'];
