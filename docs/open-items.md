# Open items before launch

Facts to confirm with Ammar (the old 416dentist.com had conflicting or missing values):

- [ ] Office hours (not published anywhere today). Also a one-line `hoursSummary` for the homepage strip, e.g. "Open evenings and Saturdays"
- [ ] Google review count and rating for 1 Oak St (`reviewCount`, `reviewRating`). Shown in the homepage trust strip once set
- [x] Financing: Beautifi (Ammar, 2026-11-25)
- [ ] Before/after cases with consent (`gallery` in practice.js). The homepage section appears once there is at least one pair
- [ ] Online booking link from Akitu One (`bookingUrl`). Every "Request an appointment" button becomes "Book online" once set
- [ ] Prices to show, if any. The old site listed All-on-4 at $19,995, $22,995 and $24,995 per arch on different pages; aligner prices $2,995 to $4,995. This draft shows no prices.
- [ ] Direct billing and CDCP: confirm both are accepted for all patients, not only children's orthodontics
- [ ] Google Business Profile link for 1 Oak St (add to `googleProfileUrl`)
- [ ] Where consultation requests should go (`FORM_WEBHOOK_URL`)
- [x] Booking tool: Akitu One (practice software, Ammar 2026-11-25)
- [ ] Real photos: office, team, Dr. Taimish, before/after cases with consent
- [ ] Reviews from this office only
- [ ] Ad tracking tags to keep (Google Tag Manager, Google Ads call tracking, Meta pixel)

# Redirects from 416dentist.com (apply only when 1oakdental.ca is live)

Old URL -> new URL, all 301:

| 416dentist.com | 1oakdental.ca |
| --- | --- |
| / | / |
| /dental-implants/ | /services/dental-implants/ |
| /dental-implants/all-on-4-implant-dentures/ | /services/all-on-4-dental-implants/ |
| /dental-implants/overdenture/ | /services/all-on-4-dental-implants/ |
| /dental-implants/dentures/ | /services/all-on-4-dental-implants/ |
| /dental-implants/periodontics/ | /services/general-dentistry/ |
| /orthodontics/ and all /orthodontics/* | /services/invisalign/ |
| /oral-surgery/ and /oral-surgery/wisdom-teeth-extraction/ | /services/wisdom-teeth-removal/ |
| /general-dentistry/dental-emergency/ | /services/emergency-dentist/ |
| /general-dentistry/ and other /general-dentistry/* | /services/general-dentistry/ |
| /cosmetic-dentistry/* , /improve-your-smile/ | /services/ |
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
