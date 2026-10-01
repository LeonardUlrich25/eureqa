// eureqa! — Features index: every startup, artist and interview ever featured
window.EUREQA = window.EUREQA || {};
(function () {
  window.EUREQA.links = {
    subscribe: 'https://eureqa.beehiiv.com/subscribe',
    whatsapp: 'https://chat.whatsapp.com/KeH6oHfYuK6DWKfDSSD373',
    linkedin: 'https://www.linkedin.com/company/eureqa-newsletter',
    instagram: 'https://www.instagram.com/eureqa.newsletter/',
    featureForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdd27vZBDtVwNfMhxOEBQ77yZwiah5tPThF8XiuwHjj23IHsg/viewform'
  };

  var ED = {
    'april-fools': 'April Fools',
    'momentum': 'Momentum',
    'the-glow-up': 'The Glow Up',
    'crosscurrents': 'Crosscurrents',
    'europe-maxxing': 'Europe-Maxxing',
    'deja-vu': 'Deja Vu',
    'squirrels': 'Squirrels'
  };

  function f(name, founders, uni, slug, sectionId, blurb) {
    return { name: name, founders: founders, uni: uni, edition: ED[slug], slug: slug, sectionId: sectionId, blurb: blurb, letter: name.replace(/[^A-Za-z0-9]/g, '').charAt(0).toUpperCase() };
  }

  window.EUREQA.features = {
    startups: [
      f('Flatly', 'Nathaniel Benhamou & Romain Sekri', 'UCL & LSE', 'april-fools', 'flatly', 'A free weekly newsletter that scans 15+ London rental sites and sends only the best student flats, including sublets and off-market finds. Founded by Nathaniel and Romain after their own painful flat hunts.'),
      f('Propose', 'Iris Yalcin, Paapa Baffoe, Noman Bobar & Lavinia Carolis', 'Imperial', 'april-fools', 'propose', 'An AI movement platform for physiotherapy: a digital skeleton tracks form in real time, gamification keeps patients engaged, and physios monitor progress remotely. Piloted at the TCS London Marathon.'),
      f('Cai\u2019s Circle', 'Cai Finch', 'KCL', 'april-fools', 'cais-circle', 'A podcast revealing the secrets of politicians, billionaires and experts, with a twist: Cai does activities with his guests, from getting tasered by an engineer\u2019s homemade taser to going viral on LinkedIn.'),
      f('MunOx', 'Julius Lagies & Nils Kohler', 'Oxford & TU Munich', 'momentum', 'munox', 'A pan-European network connecting young innovators with legacy businesses through hackathons, dinners and open challenges. Founded by Julius and Nils to bridge the talent Europe already has with the problems that actually matter.'),
      f('Metri AI', 'Andre Pancholi & Isabella Brankovic', 'Imperial', 'momentum', 'kara', 'A tech-enabled aftercare platform supporting patients transitioning off GLP-1 medication with weekly goals and evidence-based routines. Semi-finalists in Imperial\u2019s WeInnovate programme.'),
      f('A* AI', 'Henry Li, James Wingfield & Tanuj Kakumani', 'LSE & Imperial', 'momentum', 'astar-ai', 'An AI revision platform trained on past papers, mark schemes and examiner reports. It marks essays, tracks mistakes and generates mock exams. 5,000 users and a 10% paid conversion rate in six months.'),
      f('STRYKE', 'Sofia Viola', 'UCL', 'momentum', 'stryke', 'Wearable sensors measuring how fast, hard and accurately a fighter strikes: the data infrastructure layer for combat sports. First place at the UCL VC Fund competition.'),
      f('Vibesdoc', 'Roberto Baldizon', 'Cambridge', 'the-glow-up', 'vibesdoc', 'Turns diagnostic testing into actionable health insights, starting with smart patient intake for a new diagnostic centre in Guatemala City. Founded by Roberto, a biomedical engineer completing his MBA at Cambridge Judge.'),
      f('Hai Booca', 'Sabathania Pamilaar', 'UCL', 'the-glow-up', 'hai-booca', 'An AI speech analysis system that synthesises a parent\u2019s familiar voice to screen toddlers for early speech delays, plus five lift-the-flap children\u2019s books heading to international publication.'),
      f('echo!', 'Leonard Ulrich', 'UCL', 'april-fools', 'echo', 'Connects founders and brands with micro-influencers for authentic collaborations without big marketing budgets. Built by Leo (UCL) in one week after realising that distribution, not building, is the biggest bottleneck for early-stage startups.'),
      f('Wclothing', 'Jeremy Wiliams', 'UCL', 'the-glow-up', 'wclothing', 'An upcycling brand fighting fast fashion that won £15,000 from the Mayor of London\u2019s office, and pivoted into Wsports, a biodegradable bamboo sportswear line.'),
      f('24/7 Autonomous Drone Project', 'Sebastian Cross', 'Imperial', 'crosscurrents', 'drone-project', 'A fully autonomous drone system that never lands for long: GPS-denied computer-vision navigation paired with bespoke automated wireless charging, removing the human from the loop entirely.'),
      f('Talli', 'Chloe Bong', 'UCL', 'crosscurrents', 'talli', 'An AI group-work manager that splits tasks by each member\u2019s strengths, tracks who did what and auto-generates peer reports. Built by an architecture student who taught herself to code; in pilot talks with UCL and Imperial.'),
      f('Ultras', 'Michael Wang', 'UCL', 'crosscurrents', 'ultras', 'Trade football players like stocks: ML-driven dynamic prices reflect performance and public opinion in a free-to-play fantasy market. Big things coming for the 26/27 season.'),
      f('Intervyo', 'Jamie Fairey', 'Royal Holloway', 'europe-maxxing', 'intervyo', 'Practice every stage of the application process the way firms actually run it: ATS-read CV reviews, online assessments, HireVues and a fully conversational live mock interviewer. HireVue scores lifted 71% on average after three or more sessions; now live in the US too.'),
      f('Closette', 'Claudia Pipis', 'UCL', 'europe-maxxing', 'closette', 'Vibe shopping made real: upload an outfit screenshot and AI finds matching secondhand pieces across Vinted, Depop, eBay and Vestiaire at once. Built solo with zero coding experience, and launched from a library terrace in Mexico.'),
      f('HELLO Trust', 'Casso Pi', 'LSE', 'europe-maxxing', 'hello-trust', 'A youth-led social enterprise creating opportunities to lead, from supporting autistic children in Shenzhen to easing elderly loneliness in Seoul. Over 200 members across 16 branches spanning Asia-Pacific, Europe and North America.'),
      f('Cheb Clothing', 'Salman & Farah Sultan', 'LSE', 'europe-maxxing', 'cheb-clothing', 'An urban luxury lifestyle brand built by two siblings, telling stories through places like Bodrum and Lisbon with hand-illustrated designs. Completely bootstrapped, worn from London to LA, and spotted on the Gstaad Guy.'),
      f('BusyBodi', 'Amber Miller', 'UCL', 'deja-vu', 'busybodi', 'An app that uses AI to pull pop-ups from across the internet onto one simple map, so you find London’s food, fashion and workshop events before they happen rather than a day too late. Now part of James Frost’s London creatives cohort.'),
      f('Alchemica', 'Ali Shaker', 'LSE', 'deja-vu', 'alchemica', 'A nutritional gummy brand fusing a magical aesthetic with patented evidence-based formulas, built to rescue nutrition from clinical pharmacy packaging. Its £4,200 domain was sold to Ali for a single framed £1 note.'),
      f('POLiTOK', 'Amelia Mazurek', 'Westminster', 'deja-vu', 'politok', 'A political education platform for Gen Z turning verified news into short-form video, with an AI-powered claim debunker, a bias monitor and one-click voter registration. App Store launch in preparation.'),
      f('The Seed Podcast', 'Hassan Baraka', 'Imperial', 'deja-vu', 'the-seed-podcast', 'Conversations with founders and investors answering the questions business school leaves untouched, from breaking into VC to navigating failure. 24 episodes across two seasons, with Season 3 launching in December 2026.'),
      f('Aspire', 'Aryan Vedhara & Oliver Phillips', 'A-Level students', 'squirrels', 'aspire', 'A fintech platform helping young people turn their goals into reality through better financial decisions, career planning and access to opportunities. Founded by 17-year-old Aryan alongside his A-Levels, now backed by experienced entrepreneurs and launching publicly in November.'),
      f('OxPitch', 'Samuel Fatoke-Osobukola & Roman Lorello', 'Oxford', 'squirrels', 'oxpitch', 'A short-form video platform asking one question across Oxford: \u201CWhat\u2019s your OxPitch?\u201D It spotlights student startups, projects and creative ventures; its second video reached 94,000 views and sparked 20+ enquiries.')
    ],
    artists: [
      f('Charlotte Sell-Mendoza', 'Singer-songwriter', 'Brighton \u2192 London', 'april-fools', 'charlotte-sell-mendoza', 'A 22-year-old singer-songwriter moving between folk and jazz, telling stories of love, heartbreak and your early twenties. Her turning point: forgetting her lyrics in front of a hundred strangers in Amsterdam, and winning them over with authenticity.'),
      f('gesus8', 'Pablo, DJ & producer', 'YouTube · 66k subscribers', 'momentum', 'gesus8', 'House mixes that became the study soundtrack for students everywhere: millions of views, hand-picked tracklists, and covers that became his trademark. His first single \u201Clet it come to you\u201D is out now.'),
      f('Veronica Giallatini', 'Photographer & product designer', 'London', 'crosscurrents', 'veronica-giallatini', 'A photographer drawn to the quiet poetry of people in spaces: everyday gestures becoming art simply by existing. Moving to London woke the camera back up.'),
      f('Teo Geoghegan', 'Music curator, creator of vera431', 'London', 'europe-maxxing', 'teo-geoghegan', 'A summer playlist that grew into vera431, a musical collage told in chapters, where every song is part of an overarching story. The final part lands on September 23rd, the last astronomical day of summer.'),
      f('Rebecca Mary Shevlin', 'Painter', 'Westminster', 'squirrels', 'rebecca-shevlin', 'From burnout after graduating to having a print of a painting she made one random afternoon shown in a London gallery exhibition. On starting before you are ready, and turning passion into sustained motivation.')
    ],
    interviews: [
      f('Hayden Taylor', 'Co-founder & CEO, Unloc', 'Portsmouth \u2192 UK-wide', 'crosscurrents', 'hayden-taylor', 'Started the education non-profit Unloc at 16; it now supports 25,000+ young people a year. On letting go, early breaking mechanisms, and why founders must work on the business, not in it.'),
      f('gesus8', 'Pablo, DJ & producer', 'YouTube · 66k subscribers', 'momentum', 'gesus8', 'From failed DJ attempts and rap beats at 16 to house mixes with millions of views. Pablo on hyperfocus, not overthinking, and why song selection beats technical tricks.'),
      f('Megan Scarborough', 'Founder, Art Pulse', 'London', 'deja-vu', 'megan-scarborough', 'A two-time founder building Art Pulse as a marketplace, network and community for artists shut out by the gallery system. On confidence the second time round, and why opportunities have to stay open to everyone.'),
      f('Alfie Poelsing', 'Artist-curator', 'Birkbeck', 'squirrels', 'alfie-poelsing', 'An artist-curator whose first exhibition proposal went to twenty venues until one said yes. On creating without an audience, the tiny daily habits behind a freelance practice, and getting your work into exhibitions yourself.')
    ],
    coverArtists: [
      { name: 'Elif Deren Bolten', edition: 'April Fools', url: 'https://www.linkedin.com/in/elifderenbolten/' },
      { name: 'Julia Fee Hansen', edition: 'Momentum', url: 'https://www.instagram.com/artbyjuliafee/' },
      { name: 'Amber Miller', edition: 'The Glow Up', url: 'https://www.instagram.com/amberalisonart/' },
      { name: 'Veronica Giallatini', edition: 'Crosscurrents', url: 'https://www.linkedin.com/in/veronica-giallatini-48387a273/' },
      { name: 'Anna Riley', edition: 'Europe-Maxxing', url: 'https://www.instagram.com/artbyannauk/' },
      { name: 'Amelia Fuller', edition: 'Deja Vu', url: 'https://www.instagram.com/ameliafuller.art/' },
      { name: 'Ilona Szalay Di Giorgi', edition: 'Squirrels', url: 'https://www.instagram.com/ilonaszalay/' }
    ]
  };
})();
