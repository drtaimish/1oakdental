// Wording of each online consent form. The emailed record is built from this copy, not from what the
// browser sends, so the record always shows the exact text the patient initialled.
// public/consent/<id>/index.html shows the same text; change both together and bump the version.
export const consents = {
  'root-canal': {
    title: 'Root canal treatment: consent',
    version: 'RC-2026-11',
    treatments: ['Root canal treatment', 'Retreatment', 'Endodontic surgery'],
    sections: [
      { id: 'treatment', title: 'Proposed treatment', text: [
        'Root canal treatment removes infected or inflamed tissue from inside a tooth, disinfects the canals and seals them to help keep the tooth. Further procedures, including surgery, are sometimes recommended. The outcome cannot be guaranteed.',
      ] },
      { id: 'risks', title: 'Possible risks and limitations', text: [
        'Temporary pain, sensitivity, swelling, bruising or bleeding; infection, flare-up or delayed healing that needs further care.',
        'Reactions to local anaesthetic or medication; temporary or, rarely, lasting numbness or altered sensation; jaw soreness or bite discomfort.',
        'Narrow, curved, calcified or blocked canals may prevent complete treatment. An instrument can separate inside a canal, and a root or tooth may be perforated.',
        'Existing fillings, crowns, bridges or veneers may be damaged or need replacing. The tooth can weaken or fracture, and may then need to be extracted.',
        'Infection can persist or return and require retreatment, endodontic surgery or extraction, even when treatment was done correctly.',
        'A final filling or crown is usually needed soon after to protect and seal the tooth. Delaying it, or losing the temporary seal, raises the risk of failure.',
      ] },
      { id: 'alternatives', title: 'Alternatives and medication', text: [
        'Alternatives may include monitoring, other restorative options where appropriate, extraction (with or without replacing the tooth), or no treatment. Delaying or declining treatment may lead to infection, pain or tooth loss. Take prescribed medication only as directed. Sedation, if used, needs its own discussion and consent.',
      ] },
      { id: 'questions', title: 'Your questions', text: ['Questions the patient wrote for the dentist (optional) are listed below.'] },
      { id: 'consent', title: 'Consent', text: [
        'I have discussed the proposed treatment, its expected benefits, material risks, alternatives, the likely result of no treatment, and the fees and insurance coverage with my dentist. My questions were answered and I understand results cannot be guaranteed. I consent to the treatment above and to local anaesthetic. Any materially different treatment, or sedation, needs further discussion and consent.',
      ] },
    ],
    officeStatement: 'I read and initialled this consent before my visit, and my dentist has answered my questions.',
  },
};
