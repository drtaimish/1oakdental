// SEO extras per service: FAQs (rendered on the page and as FAQPage schema), related services
// (internal links), and the schema.org procedure name. Keep answers short and true; no prices.

export const neighbourhoods = [
  'Regent Park', 'Corktown', 'Cabbagetown', 'Moss Park', 'the Distillery District',
  'St. Lawrence Market', 'Leslieville', 'Riverdale',
];

export const transit = 'Near Dundas St E and Parliament St, on the 505 Dundas and 65 Parliament routes, a short walk from the Distillery District.';

export const serviceSeo = {
  'general-dentistry': {
    procedure: 'Dental examination and cleaning',
    related: ['childrens-dentistry', 'emergency-dentist', 'invisalign'],
    faqs: [
      ['How often should I have a checkup?', 'Most people do well with an exam and cleaning every six months. If you have gum disease or a history of cavities, we may suggest every three or four months.'],
      ['Do you bill my insurance directly?', 'Yes. We bill most dental insurance plans directly and accept patients covered by the Canadian Dental Care Plan (CDCP), so you usually pay only what the plan does not cover.'],
      ['Are you taking new patients in downtown Toronto?', 'Yes. New patients and families are welcome. Book online or call us and we will find a time that suits you, including Wednesday and Thursday evenings and Saturdays.'],
      ['What if I have not been to a dentist in years?', 'That is common and nothing to be embarrassed about. Your first visit is a full exam and any X-rays you need, then we talk through a plan at a pace you are comfortable with.'],
    ],
  },
  'childrens-dentistry': {
    procedure: 'Pediatric dental care',
    related: ['general-dentistry', 'sleep-dentistry', 'emergency-dentist'],
    faqs: [
      ['When should my child first see a dentist?', 'By their first birthday or within six months of the first tooth, whichever comes first. Early visits are short and friendly and help children feel at ease.'],
      ['Do you have a pediatric dentist?', 'Yes. Dr. Alice Dong is a pediatric dentist, a specialist in treating children, and sees patients at 1 Oak Dental.'],
      ['My child is very anxious. What are the options?', 'Many children do well with a gentle, gradual approach. For those who need it, sedation and general anaesthesia are available in office with a physician anaesthesiologist.'],
      ['Is children\'s dental care covered by the CDCP?', 'Many children qualify for the Canadian Dental Care Plan. We accept it and can help you check eligibility.'],
    ],
  },
  'sleep-dentistry': {
    procedure: 'Dental sedation and general anaesthesia',
    related: ['wisdom-teeth-removal', 'dental-implants', 'childrens-dentistry'],
    faqs: [
      ['What is sleep dentistry?', 'Dental treatment done while you are sedated, from light IV sedation to deep sedation or general anaesthesia, so you are relaxed or fully asleep and remember little or nothing of the visit.'],
      ['Who gives the sedation?', 'Dr. Zakir Esufali, a physician anaesthesiologist (MD), provides IV sedation, deep sedation and general anaesthesia in our office and monitors you throughout.'],
      ['Can I drive home afterwards?', 'No. After any sedation you need a responsible adult to take you home and stay with you for the rest of the day.'],
      ['Is sedation safe?', 'With a medical anaesthesiologist, monitoring equipment and a health review beforehand, sedation in a dental office is very safe for healthy patients. We review your medical history first and will tell you if a hospital setting is better for you.'],
    ],
  },
  'emergency-dentist': {
    procedure: 'Emergency dental treatment',
    related: ['tooth-extractions', 'wisdom-teeth-removal', 'general-dentistry'],
    faqs: [
      ['Can I be seen the same day?', 'Usually, yes. Call us as early as you can and we will fit you in. If you have facial swelling, trouble breathing or swallowing, go to the nearest emergency department first.'],
      ['What counts as a dental emergency?', 'Severe or constant toothache, a broken or knocked-out tooth, swelling of the face or gums, bleeding that does not stop, or a lost crown or filling that is causing pain.'],
      ['I knocked out a tooth. What should I do?', 'Pick it up by the crown, not the root, rinse it gently, and keep it in milk or inside your cheek. Call us right away; a tooth replaced within an hour has the best chance.'],
      ['Do you treat emergencies for people who are not patients?', 'Yes. Anyone in downtown Toronto with a dental emergency can call us.'],
    ],
  },
  'invisalign': {
    procedure: 'Orthodontic treatment with clear aligners',
    related: ['general-dentistry', 'childrens-dentistry', 'tooth-extractions'],
    faqs: [
      ['How long does Invisalign take?', 'Most adults finish in 6 to 18 months, depending on how much the teeth need to move. You will get an estimate at your consultation after a digital scan.'],
      ['Do I have to wear the aligners all day?', 'About 22 hours a day. You take them out to eat, drink anything other than water, and brush.'],
      ['Am I too old for aligners?', 'No. Healthy teeth and gums can be moved at any age. Many of our aligner patients are adults.'],
      ['Does insurance cover clear aligners?', 'Some plans include orthodontic coverage. We check your plan before you start and offer monthly financing through Beautifi for the rest.'],
    ],
  },
  'tooth-extractions': {
    procedure: 'Tooth extraction',
    related: ['dental-implants', 'wisdom-teeth-removal', 'sleep-dentistry'],
    faqs: [
      ['Does a tooth extraction hurt?', 'The area is fully numbed, so you feel pressure but not pain. Sedation is available if you would rather not be aware of the procedure.'],
      ['How long is recovery?', 'Most people are back to normal routines in a day or two. Keep the clot in place: no smoking, straws or vigorous rinsing for the first 24 hours.'],
      ['Should I replace the tooth?', 'For most teeth, yes. A gap lets neighbouring teeth drift and the bone shrink. An implant can often be placed at the same time as the extraction.'],
      ['Can my dentist refer me to you for an extraction?', 'Yes. Dr. Taimish accepts referrals for difficult and surgical extractions from dentists across Toronto.'],
    ],
  },
  'wisdom-teeth-removal': {
    procedure: 'Wisdom tooth removal',
    related: ['sleep-dentistry', 'tooth-extractions', 'emergency-dentist'],
    faqs: [
      ['Do all wisdom teeth need to come out?', 'No. Wisdom teeth that have fully come through, are easy to clean and are not causing problems can stay. Impacted, infected or crowding teeth are usually removed.'],
      ['Can I be asleep for wisdom teeth removal?', 'Yes. IV sedation, deep sedation and general anaesthesia are available in office with a physician anaesthesiologist.'],
      ['How long does it take to recover?', 'Swelling peaks around day two or three and most people feel back to normal within a week. We give you written instructions and a direct number for questions.'],
      ['What is the best age to have wisdom teeth removed?', 'Late teens to mid-twenties is usually easiest, because the roots are not fully formed and the bone is softer, which means a simpler surgery and faster healing.'],
    ],
  },
  'dental-implants': {
    procedure: 'Dental implant placement',
    related: ['all-on-4-dental-implants', 'tooth-extractions', 'sleep-dentistry'],
    faqs: [
      ['How long do dental implants last?', 'With good home care and regular checkups, the implant itself can last decades. The crown on top may be replaced after 10 to 15 years of normal wear.'],
      ['Does getting an implant hurt?', 'The procedure is done under local anaesthetic, with sedation if you prefer. Most patients describe the days after as similar to a tooth extraction and manage with regular pain relief.'],
      ['How long does the whole process take?', 'From consultation to final crown is usually three to six months, most of which is healing time. In some cases a temporary tooth can be placed the same day.'],
      ['Who places the implants?', 'Dr. Ammar Taimish places all implants at 1 Oak Dental. His practice is limited to oral surgery and implant dentistry, and dentists across Toronto refer implant cases to him.'],
    ],
  },
  'all-on-4-dental-implants': {
    procedure: 'Full-arch implant rehabilitation (All-on-4)',
    related: ['dental-implants', 'sleep-dentistry', 'tooth-extractions'],
    faqs: [
      ['What is All-on-4?', 'A full arch of fixed teeth supported by four (sometimes five or six) implants. The back implants are angled to use the bone you have, so bone grafting is often avoided.'],
      ['Can I really get teeth in one day?', 'Usually, yes. Implants are placed and a temporary fixed set of teeth is attached the same day. Your final teeth are made once the implants have healed, typically after three to six months.'],
      ['Can I be asleep for the surgery?', 'Yes. Most full-arch patients choose deep sedation or general anaesthesia, provided in office by a physician anaesthesiologist.'],
      ['How do I care for All-on-4 teeth?', 'Brush as usual and clean under the bridge daily with a water flosser or floss threaders. You will see us for a checkup and professional cleaning at least twice a year.'],
      ['How is this different from dentures?', 'The teeth are screwed to the implants and do not come out. There is no adhesive, no palate covering the roof of your mouth, and you can eat most foods normally.'],
    ],
  },
};
