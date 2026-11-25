// Single source of truth for the office's details. Change them here and every page follows.
export const practice = {
  name: '1 Oak Dental',
  legalName: 'Ammar Taimish Dentistry Professional Corporation',
  url: 'https://1oakdental.ca',
  // Main number = the one on the Google Business Profile (checked 2026-11-25), so Google and the site match.
  // The old 416dentist.com showed (437) 466-5151; keep that line live and forwarding if it still rings.
  phone: '(416) 214-0003',
  phoneE164: '+14162140003',
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
  // From the Google Business Profile (Ammar, 2026-11-25). Keep Google and this list identical.
  hours: [
    { days: 'Monday', open: '09:00', close: '17:00' },
    { days: 'Tuesday', open: '09:00', close: '17:00' },
    { days: 'Wednesday', open: '11:00', close: '19:00' },
    { days: 'Thursday', open: '11:00', close: '19:00' },
    { days: 'Friday', open: '09:00', close: '15:00' },
    { days: 'Saturday', open: '09:00', close: '14:00' },
    { days: 'Sunday', open: null, close: null },
  ],
  // Short line for the homepage trust strip.
  hoursSummary: 'Evenings Wed & Thu, open Saturdays',
  // Google Business Profile exists ("1 Oak Dental", managed by Ammar, no reviews yet as of 2026-11-25).
  googleProfileUrl: 'https://maps.app.goo.gl/qjbzAwdicXifV1SC6',
  // Google review count and rating for this office only. Hidden while null.
  // TODO(Ammar): pull from the 1 Oak St Google Business Profile.
  reviewCount: null,
  reviewRating: null,
  // Online booking link from Akitu One (the office's practice software). While null, buttons go to the contact form.
  // TODO(Ammar): paste the public online-booking URL from Akitu One.
  bookingUrl: null,
  payments: {
    directBilling: true, // confirmed on the old site for most plans
    cdcp: true,
    financing: 'Beautifi', // confirmed by Ammar 2026-11-25
    financingUrl: 'https://www.beautifi.com/',
  },
  // Before/after gallery. Add { before, after, alt } image pairs once consented photos exist.
  gallery: [],
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
    summary: 'Coming soon: IV sedation, deep sedation and general anaesthesia with a physician anaesthesiologist.',
    ask: 'Coming soon. Join the waitlist and we will tell you when sedation appointments open.',
    comingSoon: true,
  },
  {
    slug: 'emergency-dentist',
    title: 'Emergency Dental Care',
    summary: 'Toothache, a broken tooth or swelling? Call us for the soonest appointment.',
    ask: 'In pain or broke a tooth? Call us first and we will fit you in as soon as we can.',
  },
  {
    slug: 'root-canal',
    title: 'Root Canal Treatment',
    summary: 'Save a badly decayed or infected tooth and stop the pain, usually in one or two visits.',
    ask: 'Deep toothache or a tooth that hurts with heat? A root canal may save it. Call us first.',
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    summary: 'In-office and take-home whitening, supervised so it works and stays comfortable.',
    ask: 'Want a brighter smile for an event or just for you? Ask about in-office or take-home whitening.',
  },
  {
    slug: 'veneers',
    title: 'Veneers',
    summary: 'Thin porcelain or composite shells that reshape, lengthen or brighten front teeth.',
    ask: 'Chipped, worn, gappy or discoloured front teeth? Veneers can change them in a few visits.',
  },
  {
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    summary: 'A planned combination of whitening, veneers, aligners, implants or gum reshaping, designed around your face.',
    ask: 'Want to change more than one thing about your smile? Start with a design consultation.',
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
    summary: 'Impacted or painful wisdom teeth removed by a dentist who does only oral surgery.',
    ask: 'Pain or swelling at the back of your mouth? Find out whether your wisdom teeth should come out.',
  },
  {
    slug: 'dentures',
    title: 'Dentures',
    summary: 'Full and partial dentures, and dentures that snap onto implants so they stay put.',
    ask: 'Need dentures, or tired of ones that move? See the options, including implant-supported.',
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
// photo: '/images/team/<id>.jpg' once headshots arrive (square, at least 800x800). null shows initials.
// bio: TODO(Ammar): confirm each line. Nothing here should be a guess.
export const team = [
  {
    id: 'taimish', name: 'Dr. Ammar Taimish', credentials: 'DDS',
    role: 'General dentist with a practice limited to oral surgery and implant dentistry',
    blurb: 'Performs all oral surgery: wisdom teeth, surgical extractions, bone grafting, implants and full-arch cases.',
    photo: null, href: '/dr-ammar-taimish/',
    // Bio supplied by Ammar, 2026-11-25, used as written (paragraphs).
    bio: [
      'Dr. Ammar Taimish practises at Norton Dental in Vaughan and visits dental offices across Toronto and the surrounding area to provide oral surgery for their patients. He is opening 1 Oak Dental in Regent Park, where patients and referring dentists will have a new downtown Toronto location for surgical and implant care.',
      'Dr. Taimish followed his father, Dr. Mohamed Taimish, into dentistry. He earned his DDS at New York University College of Dentistry in 2002, then trained in the Department of Surgery in Syracuse, New York, where he studied surgical anatomy of the head and neck. He has been registered as a general dentist in Ontario since 2003.',
      'At 1 Oak Dental, Dr. Taimish will personally perform all oral surgery, including wisdom teeth removal, surgical extractions, bone grafting and dental implant placement. His approach starts with the questions patients bring to a consultation: Can this tooth be saved? What are my options if it needs to come out? What will recovery look like? For patients considering implants, he explains the options for replacing anything from a single tooth to a full arch.',
      'Alongside his clinical work, Dr. Taimish teaches other dentists. He has served as an implant course director and taught courses on surgical extractions, impacted wisdom teeth and full-arch implant treatment. He welcomes referrals and coordinates care with the referring dentist, including when the dentist plans to restore the implants in their own office.',
    ],
    alumniOf: ['New York University College of Dentistry'],
  },
  {
    id: 'dong', name: 'Dr. Alice Dong', credentials: 'DDS',
    role: 'Pediatric Dentist',
    blurb: 'Cares for infants, children and teens, from first visits to treatment.',
    photo: '/images/team/dong.jpg', href: null,
    // Bio supplied by Ammar, 2026-11-25, used as written.
    bioDraft: false,
    bio: 'Dr. Dong cares for children and teens at 1 Oak Dental. She helps children feel comfortable at the dentist by adapting each visit to their needs. Families can speak with her in English or Mandarin. Originally from Calgary, Dr. Dong earned her dental degree at the University of Alberta. She cared for rural communities and First Nations patients in Saskatchewan before completing her pediatric dentistry residency at the University of Rochester in New York. She now calls Toronto home.',
    alumniOf: ['University of Alberta', 'University of Rochester'],
    languages: ['English', 'Mandarin'],
  },
  {
    id: 'esufali', name: 'Dr. Zakir Esufali', credentials: 'MD',
    role: 'Physician Anaesthesiologist',
    blurb: 'Will provide IV sedation, deep sedation and general anaesthesia in the office when sleep dentistry opens.',
    photo: '/images/team/esufali.jpg', href: null,
    // Bio supplied by Ammar, 2026-11-25, used as written.
    bio: 'Dr. Zakir Esufali provides IV sedation, deep sedation and general anaesthesia at 1 Oak Dental. During your procedure, he looks after your anaesthesia and monitors you while your dentist focuses on your treatment. Dr. Esufali earned his medical degree at Western University in 1999 and received his specialist certification in anaesthesiology from the Royal College of Physicians and Surgeons of Canada in 2004. Outside the office, he enjoys travelling, discovering new restaurants with his family and golfing with friends.',
    alumniOf: ['Western University'],
    certification: 'Specialist certification in anaesthesiology, Royal College of Physicians and Surgeons of Canada (2004)',
  },
  // TODO(Ammar): add the general dentist here: { id, name, credentials, role: 'General Dentist', blurb, photo, bio }.
];

// Languages spoken in the office. TODO(Ammar): confirm; shown on the homepage and contact page once the list has more than one entry.
// Staff beyond the dentists. All placeholders until Ammar sends names, roles, a line each and languages.
// photo: public/images/team/<id>.jpg (square, about 800x800). Keep name: null until the real name is known;
// the card then shows the role as its title and "name to come".
export const staff = [
  { id: 'coordinator', name: null, role: 'Treatment coordinator', line: 'Walks you through your plan, your insurance and your financing options, and answers the questions you think of after you leave.', languages: [], photo: null },
  { id: 'hygienist-1', name: null, role: 'Registered dental hygienist', line: 'Cleanings, gum care and the honest word on how your brushing is going.', languages: [], photo: null },
  { id: 'hygienist-2', name: null, role: 'Registered dental hygienist', line: 'Gentle with nervous patients and with kids on their first visit.', languages: [], photo: null },
  { id: 'assistant-1', name: null, role: 'Dental assistant, surgery', line: 'Sets up every surgery and stays beside you from the first breath of sedation to the ride home.', languages: [], photo: null },
  { id: 'assistant-2', name: null, role: 'Dental assistant', line: 'Takes your X-rays and scans, and keeps every appointment running on time.', languages: [], photo: null },
  { id: 'frontdesk', name: null, role: 'Front desk and scheduling', line: 'The voice on the phone. Books your visit, sends your reminders and sorts out your forms.', languages: [], photo: null },
];

export const languages = ['English', 'Mandarin']; // Mandarin via Dr. Dong; add staff languages when known

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
      { id: 'peds-sedation', label: 'Pediatrics: sedation (coming soon)' },
    ],
  },
  {
    id: 'sleep',
    title: 'Sleep dentistry and general anaesthesia (coming soon)',
    provider: 'Physician anaesthesiologist',
    comingSoon: true,
    items: [
      { id: 'sleep-comprehensive', label: 'Sleep dentistry: comprehensive treatment' },
      { id: 'sleep-specific', label: 'Sleep dentistry: specific treatment' },
      { id: 'sleep-emergency', label: 'Sleep dentistry: emergency treatment' },
      { id: 'sleep-ga', label: 'General anaesthesia' },
    ],
  },
];

// Sleep dentistry waitlist: a mailto until the booking tool has a waitlist.
export const waitlistHref = `mailto:${'info@1oakdental.ca'}?subject=${encodeURIComponent('Sleep dentistry waitlist')}&body=${encodeURIComponent('Please add me to the waitlist for sedation / sleep dentistry.\n\nName:\nPhone:\nWhat I need done:\n')}`;

// In-office technology. Factual descriptions only; no superlatives (RCDSO advertising rules).
export const technology = [
  {
    id: 'cbct',
    title: 'CBCT 3D imaging',
    short: 'A 3D X-ray of your jaws, taken in the office in under a minute.',
    body: 'Cone beam CT (CBCT) is a low-dose 3D X-ray. It shows the bone, the nerve canal, the sinuses and the roots of every tooth from any angle. We use it to plan implants, to see exactly where a wisdom tooth sits against the nerve, and to check bone before grafting. Referring dentists receive the relevant images with the report.',
    usedFor: ['dental-implants', 'all-on-4-dental-implants', 'wisdom-teeth-removal', 'tooth-extractions', 'dentures', 'root-canal'],
  },
  {
    id: 'trios',
    title: '3Shape TRIOS digital scanning',
    short: 'Digital impressions with a small camera instead of a tray of putty.',
    body: 'The TRIOS intraoral scanner photographs your teeth and builds a 3D model in a few minutes. No impression trays, no gagging, and the model is ready to send to the lab straight away. We use it for Invisalign, crowns, veneers and dentures, and combine it with the CBCT scan to plan implants.',
    usedFor: ['invisalign', 'veneers', 'smile-makeover', 'dentures', 'dental-implants', 'all-on-4-dental-implants', 'general-dentistry'],
  },
  {
    id: 'printing',
    title: '3D printing',
    short: 'Surgical guides, models and trial smiles printed in the office.',
    body: 'From the digital scans we print surgical guides that fit over your teeth and show the exact implant position planned on the CBCT, models for planning and checking fit, and the trial smile you can wear home before committing to veneers or a smile makeover.',
    usedFor: ['dental-implants', 'all-on-4-dental-implants', 'veneers', 'smile-makeover', 'dentures'],
  },
];

export const sedationOptions = ['Local anaesthetic only', 'IV sedation (coming soon)', 'Deep sedation (coming soon)', 'General anaesthesia (coming soon)', 'Please discuss with patient'];

// Every "book" button uses this, so switching to an online booking tool is a one-line change.
export const bookingHref = practice.bookingUrl || '/contact/';
export const bookingLabel = practice.bookingUrl ? 'Book online' : 'Request an appointment';

// Homepage trust strip. Items with no data are left out, so nothing shows a placeholder live.
export const trustItems = [
  practice.reviewCount && practice.reviewRating
    ? { text: `${practice.reviewRating}★ from ${practice.reviewCount}+ Google reviews`, href: practice.googleProfileUrl }
    : null,
  practice.hoursSummary ? { text: practice.hoursSummary, href: '/contact/' } : null,
  practice.payments.directBilling ? { text: 'Direct insurance billing', href: '/new-patients/' } : null,
  practice.payments.cdcp ? { text: 'CDCP accepted', href: '/new-patients/' } : null,
  practice.payments.financing ? { text: `Monthly financing with ${practice.payments.financing}`, href: '/new-patients/' } : null,
  { text: 'Sleep dentistry coming soon', href: '/services/sleep-dentistry/' },
].filter(Boolean);

// '09:00' -> '9 am', '17:00' -> '5 pm', '14:30' -> '2:30 pm'
export function fmtTime(t) {
  const [h, m] = t.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour = ((h + 11) % 12) + 1;
  return m ? `${hour}:${String(m).padStart(2, '0')} ${suffix}` : `${hour} ${suffix}`;
}
export const hoursRows = (practice.hours || []).map((h) => ({
  day: h.days,
  text: h.open ? `${fmtTime(h.open)} to ${fmtTime(h.close)}` : 'Closed',
}));
export const openingHoursSpecification = (practice.hours || [])
  .filter((h) => h.open)
  .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.open, closes: h.close }));
