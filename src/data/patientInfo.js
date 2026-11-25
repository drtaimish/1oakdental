// Pre-op and post-op instructions. Standard guidance; TODO(Ammar): review and adjust to your own protocols
// (especially medication names, doses and your preferred rinse) before launch. No doses are stated here on purpose.

export const patientInfo = [
  {
    slug: 'before-sedation',
    title: 'Before your sedation or general anaesthesia appointment',
    summary: 'Eating and drinking rules, medications, what to wear and who needs to come with you.',
    items: [
      ['Nothing to eat for 8 hours before', 'No solid food, milk, or juice with pulp for eight hours before your appointment time. For a morning appointment this means nothing after midnight.'],
      ['Clear fluids until 2 hours before', 'Water, apple juice and clear tea or black coffee without milk are fine until two hours before. Then nothing at all, not even gum or mints.'],
      ['Medications', 'Take your usual morning medications with a small sip of water unless we told you otherwise at your consultation. Tell us about blood thinners, diabetes medication, GLP-1 injections (such as Ozempic) and anything new since your consultation; some of these change the fasting instructions.'],
      ['Bring an adult escort', 'Someone aged 18 or over must bring you, stay in the building during your appointment, take you home and stay with you for the rest of the day. We cannot start sedation without this person present. Taxis and ride-shares on your own are not acceptable.'],
      ['What to wear', 'Loose, comfortable clothing with sleeves that roll above the elbow. Flat shoes. No contact lenses, nail polish on at least one finger (for the oxygen monitor), jewellery or make-up.'],
      ['Smoking, alcohol and cannabis', 'No smoking or vaping on the day. No alcohol for 24 hours before. Tell us honestly about cannabis use; it affects how much sedation you need.'],
      ['If you feel unwell', 'A cold, cough, fever or chest infection in the week before means we may need to postpone for your safety. Call us; it is never a problem to reschedule.'],
      ['Children', 'The same fasting rules apply, scaled to the child: we will give you exact times. Bring a favourite toy or blanket and a change of clothes. One parent or guardian stays throughout.'],
    ],
  },
  {
    slug: 'after-sedation',
    title: 'After sedation or general anaesthesia',
    summary: 'The rest of the day, driving, eating, and who to call.',
    items: [
      ['For the rest of the day', 'Rest at home with an adult. Do not drive, cycle, operate machinery, cook over a flame, make important decisions, sign documents, drink alcohol or look after children or dependants on your own until the next morning.'],
      ['Eating and drinking', 'Start with clear fluids, then light food as you feel able. Nausea is uncommon and usually passes within a few hours; if you were given medication for it, take it as directed.'],
      ['Memory', 'It is normal to remember little of the appointment and to repeat yourself for a few hours. Your escort will be given your instructions in writing.'],
      ['Follow the instructions for your procedure', 'Your surgical aftercare (bleeding, swelling, diet, cleaning) is on the matching page below and in the printed sheet you were given.'],
      ['Call us if', 'You cannot keep fluids down after several hours, you have trouble breathing, or you are worried about anything. For breathing difficulty, call 911.'],
    ],
  },
  {
    slug: 'after-extractions',
    title: 'After tooth or wisdom tooth extraction',
    summary: 'Bleeding, swelling, pain relief, diet and cleaning in the first week.',
    items: [
      ['Bleeding', 'Bite firmly on the gauze for 30 to 60 minutes. Change it if it soaks through. Slight oozing for 24 hours is normal. If bleeding is steady, bite on fresh gauze or a damp black tea bag for 30 minutes with firm pressure and sit upright.'],
      ['Protect the clot', 'For 24 hours: no spitting, no straws, no smoking or vaping, no rinsing, no alcohol, no hot drinks, no strenuous exercise. Losing the clot causes a dry socket, which is painful and delays healing.'],
      ['Swelling and bruising', 'Ice on the outside of the face for 20 minutes on and 20 off during the first day. Swelling peaks around day two to three and then eases. Bruising can appear and track down the neck; it fades over a week or two.'],
      ['Pain relief', 'Take the first dose before the freezing wears off, then as directed. Most people need regular pain relief for two to four days. If you were prescribed antibiotics, finish the course.'],
      ['Eating', 'Soft, cool foods for the first day or two, chewing away from the site. Avoid seeds, nuts, popcorn and anything crumbly for a week. Drink plenty of fluids.'],
      ['Keeping it clean', 'Brush your other teeth as normal from the first evening, avoiding the site. From the day after surgery, rinse gently with warm salt water after meals and before bed, letting the water fall out of your mouth rather than spitting.'],
      ['Stitches', 'Dissolving stitches come away on their own in one to two weeks. If you were given stitches that need removal, we will have booked the appointment.'],
      ['Numbness', 'Numbness of the lip, chin or tongue usually wears off within a few hours. If it lasts beyond the next day, let us know; it is usually temporary but we want to follow it.'],
      ['Call us if', 'Pain worsens after day three, you notice a bad taste or smell with an empty-looking socket, swelling increases after day three, you have a fever, or you have difficulty swallowing or opening your mouth that is getting worse.'],
    ],
  },
  {
    slug: 'after-implants',
    title: 'After dental implant or bone graft surgery',
    summary: 'What to expect and how to protect the implant while it heals.',
    items: [
      ['The first 24 hours', 'The same rules as any oral surgery: pressure on gauze for bleeding, ice for swelling, no spitting, straws, smoking or rinsing, soft cool food, pain relief before the freezing wears off.'],
      ['Do not disturb the site', 'Do not pull your lip or cheek to look. Do not touch the implant or graft with your tongue, fingers or a toothbrush for the first week. If a temporary tooth or denture was placed, follow the specific wearing instructions you were given.'],
      ['Grafts and membranes', 'If you had a bone graft, you may notice small granules in your mouth for a few days; this is normal. If a membrane was placed, you may see a white or grey material at the gum edge. Leave it alone.'],
      ['Medications', 'Finish any antibiotic course. Use the prescribed mouth rinse as directed, usually starting the day after surgery, and do not use alcohol-based mouthwash.'],
      ['Diet while healing', 'Soft foods for the first week, then avoid chewing hard or crunchy food on the implant site until we tell you it has healed, typically three to six months. The implant is fusing with bone during this time and should not be loaded.'],
      ['Smoking', 'Smoking is the single biggest risk to implant healing. If you smoke, stop for as long as you can before and after surgery; even two weeks makes a difference.'],
      ['Follow-up', 'We see you at about one to two weeks to check healing and remove any stitches, then again before the crown or bridge is made.'],
      ['Call us if', 'Bleeding persists, swelling increases after day three, you have a fever, the temporary tooth comes loose, or anything feels wrong. We would rather see you for nothing than miss a problem.'],
    ],
  },
  {
    slug: 'after-full-arch',
    title: 'After full-arch (All-on-4) surgery',
    summary: 'Living with your temporary fixed teeth and caring for the implants.',
    items: [
      ['The first days', 'Expect swelling, bruising and some discomfort for several days; the surgery is larger than a single implant. Follow the general surgery instructions for bleeding, ice, pain relief and rest. Many patients take three to five days off work.'],
      ['Your temporary teeth', 'The fixed temporary bridge is made of acrylic and is not as strong as your final teeth. Treat it gently: a soft diet for the first six to eight weeks, then soft-to-medium foods cut small until your final bridge. No hard, sticky or crunchy food. No biting into apples, corn on the cob or crusty bread.'],
      ['Why the diet matters', 'The implants are healing into the bone. Heavy chewing in the early months can disturb this. Patients who follow the diet have the smoothest path to their final teeth.'],
      ['Cleaning', 'Brush the bridge with a soft brush twice a day. From the second week, clean under the bridge daily with a water flosser on a low setting and the floss threaders or brushes we gave you. We will show you how at your follow-up.'],
      ['Night guard', 'If you clench or grind, a night guard protects the temporary and final bridge. We will fit one if you need it.'],
      ['Follow-ups', 'About one week, then at intervals through healing. Your final bridge is made once the implants have fully integrated, usually three to six months. Afterwards: a checkup and professional cleaning at least every six months.'],
      ['Call us if', 'A tooth chips or the bridge feels loose or moves; you have increasing pain or swelling after day three; a fever; or anything that worries you.'],
    ],
  },
];
