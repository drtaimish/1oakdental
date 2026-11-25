// Photos and videos for each service page. All empty until Ammar supplies them.
//
// photo: put the file in public/images/services/<slug>.jpg (landscape, about 1600x1200, under 400 KB)
//        and set { src: '/images/services/<slug>.jpg', alt: 'what is in the picture' }.
//        Until a photo is set, the page shows the line illustration instead.
// clip:  a short muted loop (4-8 s, MP4 H.264, 1600x1200, under 2 MB) that plays inside the photo frame.
//        Put it in public/videos/services/<slug>.mp4 with a poster at public/images/services/<slug>.jpg and set
//        { src: '/videos/services/<slug>.mp4', poster: '/images/services/<slug>.jpg', alt: 'what is shown' }.
//        It loads and plays only while on screen, and stays a still poster for visitors who prefer reduced motion.
//        If both clip and photo are set, the clip wins.
// video: a short clip of Dr. Taimish explaining the procedure, uploaded to YouTube (unlisted is fine).
//        Set { youtubeId: 'xxxxxxxxxxx', title: 'Dr. Taimish explains dental implants', duration: 'PT1M30S',
//              uploadDate: '2026-12-01', transcript: 'What he says, as plain text.' }
//        The page shows a thumbnail and only loads YouTube when someone taps play.
//        The transcript is shown under the video and is what Google indexes.
export const media = {
  'general-dentistry': { photo: null, clip: null, video: null },
  'childrens-dentistry': { photo: null, clip: null, video: null },
  'sleep-dentistry': { photo: null, clip: null, video: null },
  'emergency-dentist': { photo: null, clip: null, video: null },
  'root-canal': { photo: null, clip: null, video: null },
  'teeth-whitening': { photo: null, clip: null, video: null },
  'veneers': { photo: null, clip: null, video: null },
  'smile-makeover': { photo: null, clip: null, video: null },
  'invisalign': { photo: null, clip: null, video: null },
  'tooth-extractions': { photo: null, clip: null, video: null },
  'wisdom-teeth-removal': { photo: null, clip: null, video: null },
  'dentures': { photo: null, clip: null, video: null },
  'dental-implants': { photo: null, clip: null, video: null },
  'all-on-4-dental-implants': { photo: null, clip: null, video: null },
};
