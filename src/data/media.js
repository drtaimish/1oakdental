// Photos and videos for each service page. All empty until Ammar supplies them.
//
// photo: put the file in public/images/services/<slug>.jpg (landscape, about 1600x1200, under 400 KB)
//        and set { src: '/images/services/<slug>.jpg', alt: 'what is in the picture' }.
//        Until a photo is set, the page shows the line illustration instead.
// video: a short clip of Dr. Taimish explaining the procedure, uploaded to YouTube (unlisted is fine).
//        Set { youtubeId: 'xxxxxxxxxxx', title: 'Dr. Taimish explains dental implants', duration: 'PT1M30S',
//              uploadDate: '2026-12-01', transcript: 'What he says, as plain text.' }
//        The page shows a thumbnail and only loads YouTube when someone taps play.
//        The transcript is shown under the video and is what Google indexes.
export const media = {
  'general-dentistry': { photo: null, video: null },
  'childrens-dentistry': { photo: null, video: null },
  'sleep-dentistry': { photo: null, video: null },
  'emergency-dentist': { photo: null, video: null },
  'invisalign': { photo: null, video: null },
  'tooth-extractions': { photo: null, video: null },
  'wisdom-teeth-removal': { photo: null, video: null },
  'dental-implants': { photo: null, video: null },
  'all-on-4-dental-implants': { photo: null, video: null },
};
