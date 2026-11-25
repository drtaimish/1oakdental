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
      ['My child is very anxious. What are the options?', 'Many children do well with a gentle, gradual approach. For children who need more, sedation and general anaesthesia with a physician anaesthesiologist are coming soon to our office. Ask us and we will add you to the waitlist.'],
      ['Is children\'s dental care covered by the CDCP?', 'Many children qualify for the Canadian Dental Care Plan. We accept it and can help you check eligibility.'],
    ],
  },
  'sleep-dentistry': {
    procedure: 'Dental sedation and general anaesthesia',
    related: ['wisdom-teeth-removal', 'dental-implants', 'childrens-dentistry'],
    faqs: [
      ['When will sleep dentistry be available?', 'Soon. We are finishing the set-up for in-office sedation and general anaesthesia. Join the waitlist and we will contact you as soon as appointments open.'],
      ['What is sleep dentistry?', 'Dental treatment done while you are sedated, from light IV sedation to deep sedation or general anaesthesia, so you are relaxed or fully asleep and remember little or nothing of the visit.'],
      ['Who gives the sedation?', 'A physician anaesthesiologist (a medical doctor who specialises in anaesthesia) will provide IV sedation, deep sedation and general anaesthesia in our office and monitor you throughout, while your dentist does the treatment.'],
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
      ['Does a tooth extraction hurt?', 'The area is fully numbed, so you feel pressure but not pain. Sedation for extractions is coming soon; until then, extractions are done under local anaesthetic.'],
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
      ['Can I be asleep for wisdom teeth removal?', 'Soon. IV sedation, deep sedation and general anaesthesia with a physician anaesthesiologist are coming to our office. Until then, removal is done under local anaesthetic, and you can join the sleep dentistry waitlist.'],
      ['How long does it take to recover?', 'Swelling peaks around day two or three and most people feel back to normal within a week. We give you written instructions and a direct number for questions.'],
      ['What is the best age to have wisdom teeth removed?', 'Late teens to mid-twenties is usually easiest, because the roots are not fully formed and the bone is softer, which means a simpler surgery and faster healing.'],
    ],
  },
  'dental-implants': {
    procedure: 'Dental implant placement',
    related: ['all-on-4-dental-implants', 'tooth-extractions', 'sleep-dentistry'],
    faqs: [
      ['How long do dental implants last?', 'With good home care and regular checkups, the implant itself can last decades. The crown on top may be replaced after 10 to 15 years of normal wear.'],
      ['Does getting an implant hurt?', 'The procedure is done under local anaesthetic (sedation is coming soon). Most patients describe the days after as similar to a tooth extraction and manage with regular pain relief.'],
      ['How long does the whole process take?', 'From consultation to final crown is usually three to six months, most of which is healing time. In some cases a temporary tooth can be placed the same day.'],
      ['Who places the implants?', 'Dr. Ammar Taimish places all implants at 1 Oak Dental. His practice is limited to oral surgery and implant dentistry, and dentists across Toronto refer implant cases to him.'],
    ],
  },
  'root-canal': {
    procedure: 'Root canal treatment (endodontic therapy)',
    related: ['emergency-dentist', 'tooth-extractions', 'sleep-dentistry'],
    faqs: [
      ['Does a root canal hurt?', 'The procedure itself should not. The tooth is fully numbed; the pain people associate with root canals is usually the toothache before treatment, which the root canal relieves.'],
      ['How long does it take?', 'Usually 60 to 90 minutes. Front teeth are often done in one visit; molars with several canals may need two.'],
      ['Will I need a crown?', 'On back teeth, usually yes. A root-treated tooth is drier and more brittle, and a crown protects it from cracking. Front teeth can sometimes be restored with a filling.'],
      ['Can I wait?', 'An infected tooth does not heal on its own, and waiting risks an abscess, swelling, and losing the option to save the tooth. If you are in pain, call us the same day.'],
    ],
  },
  'teeth-whitening': {
    procedure: 'Professional teeth whitening',
    related: ['veneers', 'smile-makeover', 'general-dentistry'],
    faqs: [
      ['How white will my teeth get?', 'Most people lighten several shades. Yellow tones respond best; grey or banded discolouration lightens less. We show you a shade guide and give an honest estimate before you start.'],
      ['How long does it last?', 'One to three years, depending on coffee, tea, red wine and smoking. Take-home trays make top-ups easy.'],
      ['Is whitening safe for enamel?', 'Yes, when dentist-supervised. Professional gels are tested for enamel safety; the risk with unsupervised products is uneven results and gum irritation.'],
      ['Will it whiten my crowns or fillings?', 'No. Existing restorations keep their colour. If they are on front teeth, we plan whitening first and then replace or adjust them to match.'],
    ],
  },
  'veneers': {
    procedure: 'Dental veneers',
    related: ['teeth-whitening', 'smile-makeover', 'invisalign'],
    faqs: [
      ['Can I see what my veneers will look like before committing?', 'Yes. You get a digital simulation at the design consultation and then a 3D-printed trial smile placed over your own teeth. Nothing is drilled until you approve the design.'],
      ['How many veneers do I need?', 'As many as show when you smile and need changing. Some people need one or two; a full smile is usually six to ten on the upper teeth. We design it with you.'],
      ['Do veneers ruin your teeth?', 'Porcelain veneers remove a thin layer of enamel, so they are a long-term commitment and will eventually be replaced. Composite veneers remove little or none. We only recommend veneers when they are the right tool for the problem.'],
      ['How long do veneers last?', 'Porcelain, 10 to 15 years or more with good care and a night guard. Composite, five to seven years, and they are easy to repair.'],
      ['Veneers or Invisalign?', 'If the problem is position (crowding, gaps, rotation) and the teeth themselves are fine, aligners move your own teeth without covering them. If the problem is shape, size or colour, veneers. Often it is aligners first, then fewer veneers.'],
    ],
  },
  'smile-makeover': {
    procedure: 'Smile design and cosmetic dental rehabilitation',
    related: ['veneers', 'teeth-whitening', 'invisalign', 'dental-implants'],
    faqs: [
      ['How long does a smile makeover take?', 'Whitening and bonding, a few weeks. Veneers, about a month. Add aligners or implants and it is several months to a year, because teeth need time to move and implants need time to heal.'],
      ['Can I see the result first?', 'Yes. A digital preview from your photos and scan, and for veneers or crowns a trial smile placed over your own teeth so you can see it in the mirror.'],
      ['Can it be done in stages?', 'Yes. The plan is priced per item and sequenced, so you can do the most important parts first and the rest later, as long as the order makes clinical sense.'],
      ['Is cosmetic work covered by insurance?', 'Usually not when it is purely cosmetic. Parts of a plan that are functional, such as a crown on a broken tooth or an implant for a missing one, often are. We separate these on your estimate.'],
    ],
  },
  'dentures': {
    procedure: 'Denture fabrication and implant-supported overdentures',
    related: ['all-on-4-dental-implants', 'dental-implants', 'tooth-extractions'],
    faqs: [
      ['How long do dentures last?', 'Five to ten years is typical. Gums and bone change shape over time, so dentures need relining every few years and eventually remaking to keep them fitting well.'],
      ['My lower denture moves when I eat. What can be done?', 'This is the most common denture complaint. Two implants with snap attachments usually solve it, and your existing denture can often be adapted to fit them.'],
      ['Can I sleep in my dentures?', 'Best not to. Taking them out at night lets the gums rest and reduces the risk of fungal infections and bone loss. Implant-supported dentures also come out at night.'],
      ['Are dentures covered by insurance or the CDCP?', 'Many plans cover a portion of a denture every five years or so. The CDCP covers dentures for eligible patients, sometimes with pre-approval and a co-payment. We check your coverage before you decide.'],
      ['How many implants do I need to hold a denture?', 'Two for a lower overdenture is the standard minimum; four for an upper, because the bone is softer. More implants, or a fixed bridge, give more stability.'],
    ],
  },
  'all-on-4-dental-implants': {
    procedure: 'Full-arch implant rehabilitation (All-on-4)',
    related: ['dental-implants', 'sleep-dentistry', 'tooth-extractions'],
    faqs: [
      ['What is All-on-4?', 'A full arch of fixed teeth supported by four (sometimes five or six) implants. The back implants are angled to use the bone you have, so bone grafting is often avoided.'],
      ['Can I really get teeth in one day?', 'Usually, yes. Implants are placed and a temporary fixed set of teeth is attached the same day. Your final teeth are made once the implants have healed, typically after three to six months.'],
      ['Can I be asleep for the surgery?', 'Sedation and general anaesthesia with a physician anaesthesiologist are coming soon to our office. Until then, full-arch surgery is done under local anaesthetic, and you can join the sleep dentistry waitlist.'],
      ['How do I care for All-on-4 teeth?', 'Brush as usual and clean under the bridge daily with a water flosser or floss threaders. You will see us for a checkup and professional cleaning at least twice a year.'],
      ['How is this different from dentures?', 'The teeth are screwed to the implants and do not come out. There is no adhesive, no palate covering the roof of your mouth, and you can eat most foods normally.'],
    ],
  },
};

// Short badges under the service H1. Keep to true, checkable statements.
export const serviceBadges = {
  'general-dentistry': ['Accepting new patients', 'Direct insurance billing', 'CDCP accepted', 'Evenings and Saturdays'],
  'childrens-dentistry': ['Pediatric dentist on staff', 'CDCP accepted', 'Now accepting new patients'],
  'sleep-dentistry': ['Coming soon', 'Physician anaesthesiologist', 'IV, deep sedation and GA, in office'],
  'emergency-dentist': ['Call first, we triage by phone', 'You do not need to be a patient', 'Oral surgery done in-house'],
  'invisalign': ['Digital scan, no putty', 'Free consultation', 'Monthly financing'],
  'tooth-extractions': ['Done by an oral surgery dentist', 'CBCT scan when needed', 'Referral not needed'],
  'wisdom-teeth-removal': ['In-house CBCT nerve mapping', 'Referral not needed', 'Written aftercare and a number to call'],
  'dental-implants': ['Placed by Dr. Taimish, every case', '3D scan at consultation', 'All-inclusive written quote'],
  'all-on-4-dental-implants': ['Temporary fixed teeth, usually same day', 'CBCT-planned, guided surgery', 'All-inclusive written quote'],
  'dentures': ['Full, partial and implant-supported', 'Loose denture fixed with two implants', 'Free consultation'],
  'root-canal': ['Same-day appointments for pain', 'Usually one or two visits', 'CDCP accepted'],
  'teeth-whitening': ['In-office or take-home', 'Dentist-supervised', 'Checkup and cleaning first'],
  'veneers': ['Digital smile simulation', '3D-printed trial smile you can try on', 'Porcelain or composite'],
  'smile-makeover': ['Designed before it is built', 'Surgery and cosmetics in one office', 'Priced item by item'],
};

// Numbered steps: "What happens, step by step".
export const serviceSteps = {
  'dental-implants': [
    ['Free consultation and 3D scan', 'We look at the tooth or gap, take a CBCT scan, and show you the bone and nerves on screen. You leave with a written, all-inclusive quote.'],
    ['Any preparation', 'If a tooth needs to come out or the bone needs building up, that is done first, or sometimes at the same visit as the implant.'],
    ['Implant placement', 'Under local anaesthetic, often with a 3D-printed guide. The visit takes about an hour. Most people return to work the next day.'],
    ['Healing', 'Three to six months while the bone fuses to the implant. A temporary tooth can be worn if the gap shows.'],
    ['Your new tooth', 'A scan of the healed implant, then a custom crown is made and fitted. From then on it is checked and cleaned like any other tooth.'],
  ],
  'root-canal': [
    ['Diagnosis', 'An exam and X-ray confirm which tooth is the problem and whether it can be saved. If you are in pain, this visit also gets you comfortable.'],
    ['Cleaning the canals', 'Under local anaesthetic, the tooth is isolated and the canals are cleaned, shaped and disinfected.'],
    ['Sealing', 'The canals are filled and sealed, and the tooth is closed with a temporary or permanent filling.'],
    ['Protecting the tooth', 'For back teeth, a crown a few weeks later keeps the tooth from cracking.'],
  ],
  'teeth-whitening': [
    ['Checkup and cleaning', 'Cavities are fixed first and plaque is removed so the gel works evenly.'],
    ['Shade record', 'We photograph your starting shade so you can see the change.'],
    ['Whitening', 'In office, about an hour. At home, custom trays worn daily for one to two weeks.'],
    ['Top-ups', 'Keep the trays. A few days of gel every year or two keeps the result.'],
  ],
  'veneers': [
    ['Design consultation', 'Photos, a scan and a conversation about what you want to change. We design the new smile digitally and show you the simulation.'],
    ['Trial smile', 'The design is 3D printed and placed over your own teeth. You see it in the mirror, take photos, and we adjust until you love it.'],
    ['Preparation', 'For porcelain, a thin layer of enamel is removed and temporaries are fitted. For composite, the veneer is built directly in one visit.'],
    ['Try-in and fitting', 'Porcelain veneers are tried in, adjusted and bonded about two weeks later.'],
    ['Protection', 'A night guard if you clench or grind, and regular hygiene visits.'],
  ],
  'smile-makeover': [
    ['Design consultation', 'Photos, a scan, and what you like and dislike about your smile. We look at the teeth, gums, lips and face together.'],
    ['Preview and plan', 'A digital preview and a written, sequenced plan with the cost of each item.'],
    ['Foundation first', 'Any gum treatment, extractions or implants, then alignment if needed.'],
    ['The finish', 'Whitening, then veneers, bonding or crowns matched to the final shade.'],
  ],
  'dentures': [
    ['Consultation', 'We look at your gums, any remaining teeth and the bone, and talk about what bothers you about your current teeth or denture. If implants are an option, a 3D scan shows where they could go.'],
    ['Impressions and try-in', 'Moulds of your mouth, then a wax trial version so you can check the look, the bite and your speech before anything is finished.'],
    ['Fitting', 'Your denture is delivered and adjusted. Sore spots in the first weeks are normal and are fixed with small adjustments.'],
    ['Implants, if you chose them', 'Implants are placed under local anaesthetic and left to heal for a few months. Your denture is then fitted with snap attachments.'],
  ],
  'all-on-4-dental-implants': [
    ['Consultation and planning', 'Scan, photos and a conversation about what you want. We plan the implant positions digitally and give you an all-inclusive written quote, including sedation.'],
    ['Surgery day', 'Under local anaesthetic (sedation and general anaesthesia coming soon). Remaining teeth are removed, four to six implants are placed, and a fixed temporary bridge is attached, usually the same day.'],
    ['Healing with your temporary teeth', 'Three to six months on a soft-to-medium diet while the implants integrate. You come in for checks and adjustments.'],
    ['Your final bridge', 'A scan of the healed implants, a trial fitting, then your final bridge in zirconia or acrylic over titanium, made to your approved shape and shade.'],
    ['Maintenance', 'A checkup and professional cleaning at least every six months, with the bridge removed for a deep clean when needed.'],
  ],
  'wisdom-teeth-removal': [
    ['Consultation', 'A panoramic or 3D X-ray shows where the teeth sit relative to the nerve and sinus. We tell you which teeth need to come out, which can stay, and whether awake or asleep makes more sense for you.'],
    ['Choose your comfort level', 'Local anaesthetic, with the option of IV sedation or general anaesthesia once our sleep dentistry service opens. Ask to join the waitlist if you would rather be asleep.'],
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
    ['Comfort', 'Local anaesthetic. You should feel pressure, never pain.'],
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
    ['Why in-house oral surgery helps in an emergency', 'Many dental emergencies end with a tooth that needs to come out, an abscess that needs draining or a wisdom tooth that is infected. Dr. Taimish does this work daily, so you are not referred elsewhere mid-problem.'],
  ],
  'childrens-dentistry': [
    ['Tips for a good first visit', 'Book a morning time when your child is rested. Keep your language neutral: avoid words like hurt, needle or drill, even to say they will not happen. Let us introduce the instruments. Bring a comfort item. If you are nervous yourself, it is fine for the other parent to bring them.'],
    ['Brushing at home', 'From the first tooth, twice a day with a soft brush. A rice-grain smear of fluoride toothpaste under age three, a pea-sized amount from three to six. An adult brushes or finishes the job until about age eight.'],
  ],
  'dentures': [
    ['Living with a new denture', 'Expect a week or two of adjustment: more saliva at first, practising with soft foods cut small, and reading aloud to settle your speech. Clean the denture daily with a soft brush and denture cleaner, never toothpaste, and brush your gums and tongue too.'],
    ['Denture, overdenture or fixed teeth?', 'Think of it as three steps up in stability and cost. A conventional denture is the simplest. An overdenture on two to four implants fixes movement and still comes out at night. A fixed bridge on implants is teeth that never come out. Our All-on-4 vs dentures guide walks through the trade-offs.'],
  ],
  'all-on-4-dental-implants': [
    ['Temporary versus final teeth', 'Your same-day bridge is acrylic, made to let you eat soft food and smile while the implants heal. Your final bridge, made after healing, is built for decades of chewing: zirconia (a very hard ceramic) or acrylic teeth over a titanium frame. We talk through the trade-offs of each and show you examples.'],
    ['Being asleep for surgery: coming soon', 'Full-arch surgery is longer than a single implant and often includes extractions. We are setting up in-office deep sedation and general anaesthesia with a physician anaesthesiologist. Join the sleep dentistry waitlist if you would rather be asleep for your surgery.'],
    ['Questions to ask any office', 'Who places the implants, and how many full arches have they done? Is the quote all-inclusive? What is the final bridge made of? Who provides the sedation, and what are their qualifications? What happens if an implant fails? Ask us all of these.'],
  ],
  'dental-implants': [
    ['Who places your implant matters', 'Implant placement is surgery. Dr. Taimish limits his practice to oral surgery and implants, places every implant at 1 Oak Dental himself, and teaches implant courses to other dentists. General dentists across Toronto refer their implant cases to him.'],
    ['Technology we use', 'A CBCT 3D scan and a TRIOS digital scan before every implant, digital planning, and a 3D-printed surgical guide when it improves precision. Implants from established manufacturers with long published track records.'],
  ],
  'sleep-dentistry': [
    ['Coming soon', 'We are finishing the set-up for in-office sedation and general anaesthesia with a physician anaesthesiologist. Join the waitlist and we will contact you when appointments open. Until then, every treatment is done under local anaesthetic, and we are happy to go slowly with nervous patients.'],
    ['Levels of sedation, plainly', 'IV sedation: deeply relaxed, drowsy, little memory, still breathing on your own and able to respond. Deep sedation: asleep, not easily roused. General anaesthesia: fully unconscious with breathing supported. We recommend the lightest level that will let you have your treatment comfortably.'],
    ['Why a physician anaesthesiologist', 'Many offices offer sedation given by the dentist who is also doing the procedure. At 1 Oak Dental, a physician anaesthesiologist, a medical doctor specialising in anaesthesia, will do nothing but monitor and look after you while the dentistry is done by someone else. That is the same separation of roles you would have in a hospital.'],
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
  'dentures': ['after-implants', 'after-extractions'],
  'all-on-4-dental-implants': ['before-sedation', 'after-full-arch', 'after-sedation'],
  'sleep-dentistry': ['before-sedation', 'after-sedation'],
  'childrens-dentistry': ['before-sedation'],
};

// Custom call to action for the hero button (defaults to "Book a free consultation").
// Which services show a "Technology for this treatment" strip (built from practice.technology.usedFor) and
// which show a "Payment plans and financing" card.
export const serviceFinance = ['dental-implants', 'all-on-4-dental-implants', 'veneers', 'smile-makeover', 'dentures', 'invisalign'];

export const serviceCta = {
  'veneers': 'Preview your new smile',
  'smile-makeover': 'Preview your new smile',
};
