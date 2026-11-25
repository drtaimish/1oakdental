# Open items before launch

Facts to confirm with Ammar (the old 416dentist.com had conflicting or missing values):

- [x] Office hours (from the Google profile, 2026-11-25)
- [ ] Google review count and rating for 1 Oak St (`reviewCount`, `reviewRating`). Shown in the homepage trust strip once set
- [x] Financing: Beautifi (Ammar, 2026-11-25)
- [ ] Before/after cases with consent (`gallery` in practice.js). The homepage section appears once there is at least one pair
- [ ] Online booking link from Akitu One (`bookingUrl`). Every "Request an appointment" button becomes "Book online" once set
- [ ] Prices to show, if any. The old site listed All-on-4 at $19,995, $22,995 and $24,995 per arch on different pages; aligner prices $2,995 to $4,995. This draft shows no prices.
- [ ] Direct billing and CDCP: confirm both are accepted for all patients, not only children's orthodontics
- [x] Google Business Profile link added (0 reviews, no hours or website set as of 2026-11-25; Ammar to add hours + website on the profile)
- [ ] Where consultation requests should go (`FORM_WEBHOOK_URL`)
- [x] Booking tool: Akitu One (practice software, Ammar 2026-11-25)
- [ ] Real photos: office, team, Dr. Taimish, before/after cases with consent. Service-page photos go in public/images/services/<slug>.jpg and src/data/media.js
- [ ] Short videos of Dr. Taimish explaining each procedure (YouTube, unlisted is fine) + transcript, set in src/data/media.js. Priority: All-on-4, implants, wisdom teeth, sleep dentistry
- [ ] Reviews: the 1 Oak St profile has none yet. Start asking patients once the site is live; strip shows the count automatically
- [ ] Ad tracking tags to keep (Google Tag Manager, Google Ads call tracking, Meta pixel)

- [x] Dr. Taimish bio and credentials (Ammar, 2026-11-25). Still needed: his headshot
- [x] Dr. Dong bio and photo (Ammar, 2026-11-25; photo from georgianmalldentalgroup.com with approval, 300x360; a larger original would be better)
- [x] Dr. Esufali bio and photo (Ammar, 2026-11-25; photo from georgianmalldentalgroup.com, 300x360)
- [ ] General dentist's entry (`team` in practice.js)
- [ ] Staff names, roles, one line each, languages and photos (`staff` in practice.js; six placeholder cards now: treatment coordinator, two hygienists, two assistants, front desk)
- [ ] Languages spoken (`languages` in practice.js)
- [ ] Review the patient guides (src/data/articles.js) and instructions (src/data/patientInfo.js); set `reviewedBy` on articles once read
- [ ] Confirm referral promises on /referring-dentists/: seen within a few days, urgent same/next business day, written report after consult and after treatment, two-business-day follow-up rule
- [ ] Secure radiograph upload (PHIPA): until then referrals say email JPEG/PNG/DICOM to info@
- [ ] Implant warranty policy, if any (competitors advertise 3-year to lifetime); not mentioned on the site until you decide
- [ ] Cancellation notice: the insurance page says two business days; confirm

# Redirects from 416dentist.com (apply only when 1oakdental.ca is live)

Old URL -> new URL, all 301:

| 416dentist.com | 1oakdental.ca |
| --- | --- |
| / | / |
| /dental-implants/ | /services/dental-implants/ |
| /dental-implants/all-on-4-implant-dentures/ | /services/all-on-4-dental-implants/ |
| /dental-implants/overdenture/ | /services/dentures/ |
| /dental-implants/dentures/ | /services/dentures/ |
| /dental-implants/periodontics/ | /services/general-dentistry/ |
| /orthodontics/ and all /orthodontics/* | /services/invisalign/ |
| /oral-surgery/ and /oral-surgery/wisdom-teeth-extraction/ | /services/wisdom-teeth-removal/ |
| /general-dentistry/dental-emergency/ | /services/emergency-dentist/ |
| /general-dentistry/ and other /general-dentistry/* | /services/general-dentistry/ |
| /cosmetic-dentistry/* , /improve-your-smile/ | /services/smile-makeover/ |
| /new-patients/ and /new-patients/* | /new-patients/ |
| /ammar-taimish-dds/ | /dr-ammar-taimish/ |
| /contact/ , /toronto-on/ | /contact/ |
| /barrie-on/ , /vaughan-on/ | https://vaughansmileclinic.com/ |
| /blog/* | / (until the blog is rebuilt) |

torontodentist.com: every URL -> https://1oakdental.ca/ (301).

# Referrals section (/referrals/)

- [ ] Where referrals should go (`REFERRAL_WEBHOOK_URL`) and who answers them
- [ ] A secure way for dentists to send X-rays and CBCT scans (patient health information, so PHIPA applies). The form promises we will explain this by email.
- [x] Procedure list, doctors, email and urgent line now match the printed referral pads (Nov 2026)
- [ ] Name of the general dentist, if not Dr. Taimish
- [ ] Main phone: old site uses (437) 466-5151, the pads use 416-214-0003 for urgent cases. Which goes in the header?
- [x] Referral pad PDFs are downloadable from /referring-dentists/
