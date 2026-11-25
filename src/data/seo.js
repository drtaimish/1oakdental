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

// Short badges under the service H1. Keep to true, checkable statements.
export const serviceBadges = {
  'general-dentistry': ['Accepting new patients', 'Direct insurance billing', 'CDCP accepted', 'Evenings and Saturdays'],
  'childrens-dentistry': ['Pediatric dentist on staff', 'CDCP accepted', 'Sedation and GA in office'],
  'sleep-dentistry': ['Physician anaesthesiologist', 'IV, deep sedation and GA', 'In office, not hospital'],
  'emergency-dentist': ['Call first, we triage by phone', 'You do not need to be a patient', 'Surgeon on site'],
  'invisalign': ['Digital scan, no putty', 'Free consultation', 'Monthly financing'],
  'tooth-extractions': ['Done by an oral surgery dentist', 'Awake or asleep: your choice', 'Referral not needed'],
  'wisdom-teeth-removal': ['Awake or asleep: your choice', 'Referral not needed', 'Written aftercare and a number to call'],
  'dental-implants': ['Placed by Dr. Taimish, every case', '3D scan at consultation', 'All-inclusive written quote'],
  'all-on-4-dental-implants': ['Temporary fixed teeth, usually same day', 'Sedation or GA with an anaesthesiologist', 'All-inclusive written quote'],
};

// Numbered steps: "What happens, step by step".
export const serviceSteps = {
  'dental-implants': [
    ['Free consultation and 3D scan', 'We look at the tooth or gap, take a CBCT scan, and show you the bone and nerves on screen. You leave with a written, all-inclusive quote.'],
    ['Any preparation', 'If a tooth needs to come out or the bone needs building up, that is done first, or sometimes at the same visit as the implant.'],
    ['Implant placement', 'Under local anaesthetic, with sedation if you want it. The visit takes about an hour. Most people return to work the next day.'],
    ['Healing', 'Three to six months while the bone fuses to the implant. A temporary tooth can be worn if the gap shows.'],
    ['Your new tooth', 'A scan of the healed implant, then a custom crown is made and fitted. From then on it is checked and cleaned like any other tooth.'],
  ],
  'all-on-4-dental-implants': [
    ['Consultation and planning', 'Scan, photos and a conversation about what you want. We plan the implant positions digitally and give you an all-inclusive written quote, including sedation.'],
    ['Surgery day', 'Under sedation or general anaesthesia with our anaesthesiologist. Remaining teeth are removed, four to six implants are placed, and a fixed temporary bridge is attached, usually the same day.'],
    ['Healing with your temporary teeth', 'Three to six months on a soft-to-medium diet while the implants integrate. You come in for checks and adjustments.'],
    ['Your final bridge', 'A scan of the healed implants, a trial fitting, then your final bridge in zirconia or acrylic over titanium, made to your approved shape and shade.'],
    ['Maintenance', 'A checkup and professional cleaning at least every six months, with the bridge removed for a deep clean when needed.'],
  ],
  'wisdom-teeth-removal': [
    ['Consultation', 'A panoramic or 3D X-ray shows where the teeth sit relative to the nerve and sinus. We tell you which teeth need to come out, which can stay, and whether awake or asleep makes more sense for you.'],
    ['Choose your comfort level', 'Local anaesthetic only, IV sedation, or general anaesthesia with our physician anaesthesiologist. If you choose sedation, you get fasting instructions and need an adult escort.'],
    ['The procedure', 'Usually 30 to 60 minutes for all four. Dr. Taimish does every surgery himself.'],
    ['Going home', 'Gauze, ice, written instructions and a direct number. Someone takes you home if you were sedated.'],
    ['Recovery', 'Swelling peaks at day two or three and most people are back to normal within a week. We check on you and see you if anything needs a look.'],
  ],
  'sleep-dentistry': [
    ['Tell us what worries you', 'At a free consultation we talk about your past experiences and what you need done, and recommend the lightest level of sedation that will work.'],
    ['Medical screening', 'A health history and, if needed, a conversation with our anaesthesiologist. This is where we make sure office sedation is safe for you.'],
    ['Your appointment', 'You arrive fasted, with an adult escort. The anaesthesiologist looks after you the whole time while Dr. Taimish or Dr. Dong does the dentistry. Long treatment plans are often finished in one visit.'],
    ['Recovery and home', 'You rest until steady, then go home with your escort and written instructions. Most people feel normal by the next morning.'],
  ],
  'tooth-extractions': [
    ['Assessment', 'X-rays and an exam to confirm the tooth cannot be saved, and to plan how it comes out and what replaces it.'],
    ['Comfort', 'Local anaesthetic, with sedation if you prefer. You should feel pressure, never pain.'],
    ['Extraction', 'Simple or surgical, depending on the tooth. If you are planning an implant, a bone graft can be placed in the socket at the same time.'],
    ['Aftercare', 'Gauze, instructions and a number to call. Most people are back to normal in a day or two.'],
  ],
  'invisalign': [
    ['Free consultation and scan', 'A digital scan, no putty impressions, and a preview of how your teeth could move.'],
    ['Your plan', 'We review the plan with you, confirm the number of aligners and the timeline, and give you a written quote.'],
    ['Wearing your aligners', 'About 22 hours a day, changing to the next set every one to two weeks. Short check-ins every six to ten weeks.'],
    ['Finishing and retainers', 'Final refinements if needed, then retainers to keep the result.'],
  ],
  'childrens-dentistry': [
    ['First visit (by age one)', 'A short, friendly look at the teeth and gums, often on your lap, and brushing advice. The goal is a happy first memory of the dentist.'],
    ['Toddlers and preschoolers', 'Checkups every six months, fluoride, and help with thumb-sucking, bottles and sippy cups.'],
    ['School age', 'Sealants on new molars, cleanings, cavity care, and watching how the jaws and adult teeth are developing.'],
    ['Teens', 'Wisdom teeth monitoring, sports mouthguards, orthodontic timing and a handover to adult care when they are ready.'],
  ],
  'emergency-dentist': [
    ['Call us', 'Describe what happened and what hurts. We tell you what to do right now and book the soonest time.'],
    ['We get you comfortable', 'The first visit is about stopping the pain and dealing with infection or damage: a dressing, a temporary filling, draining swelling, or removing a hopeless tooth.'],
    ['Then we plan', 'Once you are comfortable, we talk through the long-term fix and the cost, with no pressure to decide that day.'],
  ],
  'general-dentistry': [
    ['Your first visit', 'A full exam, any X-rays you need, a gum check and a cleaning if time allows. We explain what we see on the screen.'],
    ['A plan in writing', 'If anything needs doing, you get a written plan with fees and what your insurance is likely to cover.'],
    ['Ongoing care', 'Checkups and cleanings every six months, or more often if your gums need it. Reminders by text or email.'],
  ],
};

// Extra depth sections, rendered after the main copy.
export const serviceExtra = {
  'emergency-dentist': [
    ['Is it urgent? A quick guide', 'See us today: severe or constant toothache, a broken tooth with pain, a knocked-out adult tooth, a swollen face or gum, bleeding that will not stop, a lost crown or filling that hurts. See us this week: a chipped tooth without pain, a lost filling without pain, mild sensitivity, a broken denture. Go to an emergency department first: swelling that affects breathing or swallowing, swelling spreading to the eye, a facial injury with a possible fracture, uncontrolled bleeding after an injury.'],
    ['What to do before you arrive', 'Toothache: rinse with warm water, floss gently to remove trapped food, take regular pain relief, and do not put aspirin on the gum. Swelling: cold compress on the outside, do not apply heat. Broken tooth: save any pieces in milk, cover a sharp edge with sugar-free gum or dental wax. Lost crown: keep it; it can often be re-cemented.'],
    ['Why a surgeon helps in an emergency', 'Many dental emergencies end with a tooth that needs to come out, an abscess that needs draining or a wisdom tooth that is infected. Dr. Taimish does this work daily, so you are not referred elsewhere mid-problem.'],
  ],
  'childrens-dentistry': [
    ['Tips for a good first visit', 'Book a morning time when your child is rested. Keep your language neutral: avoid words like hurt, needle or drill, even to say they will not happen. Let us introduce the instruments. Bring a comfort item. If you are nervous yourself, it is fine for the other parent to bring them.'],
    ['Brushing at home', 'From the first tooth, twice a day with a soft brush. A rice-grain smear of fluoride toothpaste under age three, a pea-sized amount from three to six. An adult brushes or finishes the job until about age eight.'],
  ],
  'all-on-4-dental-implants': [
    ['Temporary versus final teeth', 'Your same-day bridge is acrylic, made to let you eat soft food and smile while the implants heal. Your final bridge, made after healing, is built for decades of chewing: zirconia (a very hard ceramic) or acrylic teeth over a titanium frame. We talk through the trade-offs of each and show you examples.'],
    ['Why most patients choose to be asleep', 'Full-arch surgery is longer than a single implant and often includes extractions. With a physician anaesthesiologist in the room, you can have deep sedation or general anaesthesia safely in our office, wake up with your temporary teeth in, and remember nothing of the surgery.'],
    ['Questions to ask any office', 'Who places the implants, and how many full arches have they done? Is the quote all-inclusive? What is the final bridge made of? Who provides the sedation, and what are their qualifications? What happens if an implant fails? Ask us all of these.'],
  ],
  'dental-implants': [
    ['Who places your implant matters', 'Implant placement is surgery. Dr. Taimish limits his practice to oral surgery and implants, places every implant at 1 Oak Dental himself, and teaches implant courses to other dentists. General dentists across Toronto refer their implant cases to him.'],
    ['Technology we use', 'A CBCT (3D) scan before every implant, digital planning, and guided surgery when it improves precision. Implants from established manufacturers with long published track records.'],
  ],
  'sleep-dentistry': [
    ['Levels of sedation, plainly', 'IV sedation: deeply relaxed, drowsy, little memory, still breathing on your own and able to respond. Deep sedation: asleep, not easily roused. General anaesthesia: fully unconscious with breathing supported. We recommend the lightest level that will let you have your treatment comfortably.'],
    ['Why a physician anaesthesiologist', 'Many offices offer sedation given by the dentist who is also doing the procedure. At 1 Oak Dental, Dr. Esufali, a medical doctor specialising in anaesthesia, does nothing but monitor and look after you while the dentistry is done by someone else. That is the same separation of roles you would have in a hospital.'],
  ],
  'wisdom-teeth-removal': [
    ['Keep them or remove them?', 'Not every wisdom tooth needs to come out. Fully erupted teeth that you can clean and that are not damaging the neighbour can stay and be watched. Partially erupted teeth that trap food and get infected, impacted teeth pressing on the second molar, and teeth with cysts or decay are the usual reasons for removal. We show you your X-ray and explain which applies.'],
    ['Nerve and sinus', 'Lower wisdom teeth can sit close to the nerve that supplies feeling to the lip and chin; upper ones can sit close to the sinus. A 3D scan when the X-ray suggests closeness lets Dr. Taimish plan around them. Temporary numbness is uncommon and almost always resolves; we discuss your individual risk before you decide.'],
  ],
};

// Which patient-info pages belong on which service page.
export const serviceAftercare = {
  'wisdom-teeth-removal': ['before-sedation', 'after-extractions', 'after-sedation'],
  'tooth-extractions': ['after-extractions', 'before-sedation'],
  'dental-implants': ['after-implants', 'before-sedation'],
  'all-on-4-dental-implants': ['before-sedation', 'after-full-arch', 'after-sedation'],
  'sleep-dentistry': ['before-sedation', 'after-sedation'],
  'childrens-dentistry': ['before-sedation'],
};
