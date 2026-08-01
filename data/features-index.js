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
    'europe-maxxing': 'Europe-Maxxing'
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
      f('Cheb Clothing', 'Salman & Farah Sultan', 'LSE', 'europe-maxxing', 'cheb-clothing', 'An urban luxury lifestyle brand built by two siblings, telling stories through places like Bodrum and Lisbon with hand-illustrated designs. Completely bootstrapped, worn from London to LA, and spotted on the Gstaad Guy.')
    ],
    artists: [
      f('Charlotte Sell-Mendoza', 'Singer-songwriter', 'Brighton \u2192 London', 'april-fools', 'charlotte-sell-mendoza', 'A 22-year-old singer-songwriter moving between folk and jazz, telling stories of love, heartbreak and your early twenties. Her turning point: forgetting her lyrics in front of a hundred strangers in Amsterdam, and winning them over with authenticity.'),
      f('gesus8', 'Pablo, DJ & producer', 'YouTube · 66k subscribers', 'momentum', 'gesus8', 'House mixes that became the study soundtrack for students everywhere: millions of views, hand-picked tracklists, and covers that became his trademark. His first single \u201Clet it come to you\u201D is out now.'),
      f('Veronica Giallatini', 'Photographer & product designer', 'London', 'crosscurrents', 'veronica-giallatini', 'A photographer drawn to the quiet poetry of people in spaces: everyday gestures becoming art simply by existing. Moving to London woke the camera back up.'),
      f('Teo Geoghegan', 'Music curator, creator of vera431', 'London', 'europe-maxxing', 'teo-geoghegan', 'A summer playlist that grew into vera431, a musical collage told in chapters, where every song is part of an overarching story. The final part lands on September 23rd, the last astronomical day of summer.')
    ],
    interviews: [
      f('Hayden Taylor', 'Co-founder & CEO, Unloc', 'Portsmouth \u2192 UK-wide', 'crosscurrents', 'hayden-taylor', 'Started the education non-profit Unloc at 16; it now supports 25,000+ young people a year. On letting go, early breaking mechanisms, and why founders must work on the business, not in it.'),
      f('gesus8', 'Pablo, DJ & producer', 'YouTube · 66k subscribers', 'momentum', 'gesus8', 'From failed DJ attempts and rap beats at 16 to house mixes with millions of views. Pablo on hyperfocus, not overthinking, and why song selection beats technical tricks.')
    ],
    coverArtists: [
      { name: 'Elif Deren Bolten', edition: 'April Fools', url: 'https://www.linkedin.com/in/elifderenbolten/' },
      { name: 'Julia Fee Hansen', edition: 'Momentum', url: 'https://www.instagram.com/artbyjuliafee/' },
      { name: 'Amber Miller', edition: 'The Glow Up', url: 'https://www.instagram.com/amberalisonart/' },
      { name: 'Veronica Giallatini', edition: 'Crosscurrents', url: 'https://www.linkedin.com/in/veronica-giallatini-48387a273/' },
      { name: 'Anna Riley', edition: 'Europe-Maxxing', url: 'https://www.instagram.com/artbyannauk/' }
    ]
  };
})();
