// eureqa! — Crosscurrents edition content (re-hosted from the July 2026 newsletter)
window.EUREQA = window.EUREQA || {};
window.EUREQA.editions = window.EUREQA.editions || {};
(function () {
  var IMG = 'assets/img/';
  window.EUREQA.editions['crosscurrents'] = {
    slug: 'crosscurrents',
    number: '04',
    title: 'Crosscurrents',
    month: 'July 2026',
    date: 'Jul 1, 2026',
    read: '12 min read',
    dek: 'Rocking the boat, swimming against the tide, and navigating the crossroads that feel like crosscurrents.',
    cover: IMG + 'd7c4409e-ddc1-40b0-b703-4912500e95c7__Bild_30.06.26_um_19.57.jpeg',
    art: IMG + '5960c51e-d7bc-4c64-b9e2-ea88a36fa16c__image.jpeg',
    artist: { name: 'Veronica Giallatini', url: 'https://www.linkedin.com/in/veronica-giallatini-48387a273/' },
    sections: [
      {
        id: 'editors-notes', kind: 'note', label: "Editors' Notes", title: 'Against Currents',
        byline: { name: 'Leonard Ulrich', role: 'Publisher', url: 'https://www.linkedin.com/in/leonard-anton-ulrich/' },
        body: [
          { t: 'p', x: 'Have you ever felt past the point of waiting? Waiting for opportunities to come, or for better days to magically fall from the heavens? Well, I have. Exactly one year ago, I was right on the edge of my next big leap forward: moving to London on my own to study at UCL.' },
          { t: 'p', x: 'Now I realise that just as a new generation of microchips unlocks disruptive technological applications, changing the trajectory of everything, moving to London and starting from zero was **my own personal \u201Cupdate.\u201D**' },
          { t: 'p', x: 'In short, we often find ourselves at crossroads. While we make minor choices every minute, there are only a handful of truly decisive moments in a lifetime. But how do you know which kind you are facing? My hypothesis is that **the most important crossroads are those that feel like crosscurrents**: moments where you are caught between risk and reward versus safety and comfort.' },
          { t: 'p', x: 'This applies to business as well. History has shown that **truly disruptive startups** move against prevailing societal and industry trends. Therefore, the featured startups in this edition show us exactly how they navigate these crosscurrents and defy convention. We encourage you, the reader, to question whether your own thesis for growth relies on charting your own course or simply chasing the crowd 🌊.' },
          { t: 'p', x: 'Summer is on its way, which means founders are diving into actual crosscurrents (happy holidays!) while keeping their startups on course every day⛵️. Literally, crosscurrents are flows of water that move against the main current or the general direction of the waves. Figuratively, they represent how truly disruptive startups must swim against the tide to chart their own course. One beautiful quote that fits perfectly and has been stuck in my head for weeks now is, **\u201CI\u2019m easily influenced by things I hate\u201D** by the legendary musician Frank Zappa 🎸. Maybe that\u2019s exactly what you need to elevate your venture from the crowd.' }
        ],
        links: []
      },
      {
        id: 'drone-project', kind: 'startup', label: 'Startup', title: '24/7 Autonomous Drone Technology Project', uni: 'Imperial College London (ICL)',
        byline: { name: 'Sebastian Cross', url: 'https://www.linkedin.com/in/sebcross/' },
        body: [
          { t: 'p', x: 'Some problems are easy to define. A sprinter wants to run faster; a restaurant wants more customers; a family wants a car with better fuel efficiency. **Drones have a clear problem too**: they\u2019re limited by their battery life.' },
          { t: 'p', x: 'Drones are becoming a bigger and bigger part of our industries, much like AI is in its own way. Battery technology is improving fast, but efficiency is still nowhere near where it needs to be.' },
          { t: 'img', src: IMG + '1f2031d5-ad92-481a-9a3a-cc4d3377167e__image.png.jpg', cap: '' },
          { t: 'p', x: 'Over the last decade, **drone adoption has increased at a rapid pace**. At the base level, uses include flying drones with friends or capturing footage. But as the technology keeps improving, drones will show up in more and more places: reconnaissance, rescue, security, construction, **even killing mosquitoes**. The list keeps growing, and so does the demand for a longer mission air-time.' },
          { t: 'p', x: 'That\u2019s the **crosscurrent** we\u2019re working against \u2014 research is chasing better batteries to fly for longer. We\u2019re not.' },
          { t: 'p', x: 'We\u2019re building a 24/7 autonomous drone system that **doesn\u2019t need any human interference**, by developing a GPS-denied visual navigation system using onboard computer vision, paired with our bespoke automated wireless charging hardware. Instead of pushing for a slightly longer flight, we\u2019re **removing the human from the loop** entirely.' },
          { t: 'img', src: IMG + '58ce50ac-d277-46d6-86f7-3c3351693b07__image.png.jpg', cap: '' },
          { t: 'p', x: 'Our roadmap runs in phases: build the drone and test flight; automated return to landing using GPS; VTOL using computer vision; location and landing using computer vision with GPS coordinates; location and landing with no GPS coordinates; build and test charging hardware; and finally, combine automated landing using computer vision onto the charging dock.' },
          { t: 'p', x: 'Right now, we\u2019re on Phase 4, and from this point onwards, software is our biggest hurdle. One wrong line of code and the drone falls out of the sky… and **we lose £1000**. I\u2019ve already had to chase the drone for 500m as it flew out of control… not fun.' },
          { t: 'p', x: 'Onboard, we\u2019re running a Pixhawk 6C on an S500 frame, with an Nvidia Jetson handling the computational load for autonomous flight, and a software stack built on ROS2.' },
          { t: 'img', src: IMG + '248b86e0-f1da-4d38-a822-fcb75a8f8639__image.png.jpg', cap: '' },
          { t: 'p', x: 'So far, building this project has been messy, hard, and expensive, which is the exact reason **I\u2019ve dived headfirst into it**. To add to the complexity, our battery has decided to die on us in the heatwave.' },
          { t: 'p', x: 'Building in robotics has kick-started my technical skills across both software and hardware. I think it\u2019s the easiest way to get genuinely good at frontier tech in the quickest time possible, especially for a student founder. The barrier to entry for software products is at an all-time low, which makes it hard to stand out from AI slop, whilst building large mechanical systems alone isn\u2019t realistic for a student either. **The sweet spot lies in the middle: robotics.**' },
          { t: 'p', x: 'That\u2019s really why I\u2019m doing this. Our fully autonomous drone that charges itself sits right at that crossroads. Being able to work on a fresh idea and produce a highly sought-after, innovative piece of technology is the best outcome I could ask for. Next up is Phase 5: GPS-denied location and landing. **I\u2019d rather spend my time on something this challenging than on something safe.**' }
        ],
        links: [
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sebcross/' }
        ]
      },
      {
        id: 'talli', kind: 'startup', label: 'Startup', title: 'Talli', uni: 'University College London (UCL)',
        byline: { name: 'Chloe Bong', url: 'https://www.linkedin.com/in/chloe-bong-11836b244/' },
        body: [
          { t: 'p', x: 'This year, UCL started asking students to grade each other. But why introduce a peer assessment scheme? Every student already knows the problem it\u2019s trying to solve.' },
          { t: 'p', x: 'There is always one person steering the whole thing and **there is always a freeloader**, who coasts while everyone else carries them. However, rating people after the fact is a **reactive fix**. It makes you mark them down once the damage is already done. I built Talli to solve the problem from both ends.' },
          { t: 'p', x: 'Talli is a group management tool that splits tasks evenly between group members using AI, **based on each person\u2019s strengths**. AI does the deciding, and the work is fair from the start.' },
          { t: 'img', src: IMG + '39d64fa9-a4ca-479b-8a3e-69dfad162f12__image.jpeg', cap: '' },
          { t: 'p', x: 'It then tracks **who actually did what, and automatically formats the information into a peer report.** So the same assessment UCL asks students to fill in by hand, Talli generates for you.' },
          { t: 'p', x: 'The result is fairer grades, less last minute panic, and everyone actually contributing. Onboarding is frictionless too: no Google sign in, no account to create. **It\u2019s set up Kahoot style \u2014 all you need is your group\u2019s code.**' },
          { t: 'p', x: 'I built Talli with absolutely no experience in computer science. I learnt Python and Firebase authentication from scratch, completely unrelated to my university course, architecture. Talli is now in talks with UCL and Imperial\u2019s enterprise teams about pilots.' },
          { t: 'p', x: 'I think I\u2019ve always been a sort of creative person, as I\u2019m sure a lot of budding entrepreneurs can relate to. I started out selling **homemade bags at 11 and bath bombs at 13**, and more recently completed Penn\u2019s entrepreneurship course, validating a startup called Chlozette after spotting a gap in the Malaysian market for midi dresses. Talli is the latest of those ideas, and the biggest one yet.' },
          { t: 'img', src: IMG + '955b36ee-1fcf-4f43-86ca-463e1a616d89__image.jpeg', cap: '' },
          { t: 'p', x: 'As an architecture student, modelling part time with the Chelsea Flower Show and featured in Elle, I had every reason to stay in my lane. **Instead I taught myself to code**.' },
          { t: 'p', x: 'What surprised me most was how lopsided the tech space still is. When I saw how few female founders there actually are, and the stigma that still surrounds women standing up and putting themselves forward, it made me want to be louder, not quieter.' },
          { t: 'p', x: 'That is the same instinct that had me walking up to strangers in the Student Centre, people I had never met, asking them about their group projects on the spot. **You lose all of the shots you don\u2019t take**, so I just started taking them.' },
          { t: 'p', x: 'For any aspiring entrepreneurs out there in the **crosscurrents** of breaking with conventions, it sounds cheesy, but you really just have to believe in yourself an insane amount. People around you will always be better at various things, but they will never have the unique profile you bring to the table.' },
          { t: 'p', x: 'Find out what makes you uniquely you, combine it with a pain point, and bring a solution into the world. Everyone else rides the current. Be the **crosscurrent**.' },
          { t: 'img', src: IMG + '747e8910-b1d2-48a2-8d65-a62ac2478d9b__image.jpeg', cap: '' }
        ],
        links: [
          { label: 'hellotalli.com', url: 'https://www.hellotalli.com/' },
          { label: 'LinkedIn', url: 'https://www.linkedin.com/company/hellotalli/' },
          { label: 'Instagram', url: 'https://www.instagram.com/talli.ai/' }
        ]
      },
      {
        id: 'ultras', kind: 'startup', label: 'Startup', title: 'Ultras', uni: 'University College London (UCL)',
        byline: { name: 'Michael Wang', url: 'https://www.linkedin.com/in/michael-wang-42495425b/' },
        body: [
          { t: 'p', x: 'Sports fans pride themselves on predicting the outcomes of their sport, which is exactly why the global **sports betting market reached $115 billion in 2025**. I, for one, am a victim of this statistic.' },
          { t: 'p', x: 'I followed Arsenal youngster Myles Lewis-Skelly when he was about sixteen after seeing a few highlights of him on social media. He was electric. I took a screenshot of his Instagram page when it was sitting at **6,415 followers**. Fast forward to today: he has **1.5 million followers**, is a Premier League winner, and an England international.' },
          { t: 'p', x: 'Fans constantly form opinions on players, yet there is no real market where those opinions can be expressed, quantified and rewarded. So, we built Ultras: a platform where fans can **trade football players just like stocks**. Each player has a dynamic price that reflects their perceived value, which changes depending on their performance and public opinion. In short, you win when you identify someone\u2019s rise before everyone else.' },
          { t: 'p', x: 'To make this realistic, we used **machine learning models trained on historical player performance metrics**, creating believable price movements that mirror how fans already think about the game.' },
          { t: 'img', src: IMG + 'fa8e9c2c-7ed7-4b66-b9b8-4a38da13b025__image.png.jpg', cap: 'A screenshot from my first pitch of the initial mock up. It wasn\u2019t even called Ultras back then!' },
          { t: 'p', x: 'It is important to be clear: despite my love for sports betting, **Ultras is not a betting platform**. It currently operates as a fantasy football game with virtual currency. Instead of predicting single match outcomes, users can make speculative longer-term predictions on players.' },
          { t: 'img', src: IMG + '311ba5a9-484a-40d9-aa94-74625865f57f__image.png.jpg', cap: 'How the website looks now at theultras.app. We\u2019ve come a long way but still a long way to go.' },
          { t: 'p', x: 'AI, prediction markets, and cryptocurrency are all buzzwords that get people really excited in 2026. Waves of capital will probably come flooding your way if you shove these words into the description of your startup. It is true \u2014 we had offers to ride these waves and shift our product from free-to-play to on-chain, but we decided to go **crosscurrent**, and stick to our mission: to create something we would actually use.' },
          { t: 'p', x: 'Look out for us ahead of the 26/27 season. Big things are coming!' }
        ],
        links: [
          { label: 'theultras.app', url: 'https://www.theultras.app/' }
        ]
      },
      {
        id: 'veronica-giallatini', kind: 'artist', label: 'Artist of the Month', title: 'Veronica Giallatini',
        byline: { name: 'Veronica Giallatini', url: 'https://www.linkedin.com/in/veronica-giallatini-48387a273/' },
        body: [
          { t: 'p', x: 'I grew up as an only child, and most of the time I kept myself entertained by observing everything around me, tiny creatures on trees, the way people\u2019s emotions slipped out through gestures and movements. **It became a game, trying to notice as much as possible**.' },
          { t: 'p', x: 'With time, photography revealed itself as the perfect way to turn that childhood game into something meaningful. A way to hold onto the details instead of letting them fade.' },
          { t: 'img', src: IMG + '62fa35f5-9c41-4911-b8f6-b1789f816d0c__image.jpeg', cap: '' },
          { t: 'p', x: 'Eventually, university and thousands of other commitments pushed that passion aside, and I almost forgot what it meant. **Moving to London changed everything**. The energy and frenzy of this city woke up something I had put away for too long, and I picked up my camera again, finally ready to return to it.' },
          { t: 'img', src: IMG + '1fc1f137-64ef-413e-8e33-299df4c5d0a7__image.jpeg', cap: '' },
          { t: 'p', x: '**Details have always mattered to me**, in photography and in my work as a product designer, where paying attention to the smallest things is essential. In a way, everything in my life connects back to that instinct.' },
          { t: 'p', x: 'When I photograph, I\u2019m drawn to people, but in a subtle, almost quiet way. I often capture just their figure, how they sit within a space, how they blend with the environment without even realising it. There\u2019s something beautiful in that: the idea that everyday gestures, movements, and moments become **a form of art simply by existing**.' },
          { t: 'p', x: 'In my view, a photograph becomes truly **poetic when people are part of it**, when they\u2019re caught in a moment that, for them, meant nothing in particular, yet for me becomes a way of expressing something deeper through art.' }
        ],
        links: [
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/veronica-giallatini-48387a273/' },
          { label: 'Instagram', url: 'https://www.instagram.com/veronica.giallatini/' }
        ]
      },
      {
        id: 'hayden-taylor', kind: 'interview', label: 'Interview', title: 'Hayden Taylor, co-founder & CEO of Unloc',
        byline: { name: 'An interview by Lauren Manby', url: 'https://www.linkedin.com/in/haydentaylor/' },
        body: [
          { t: 'p', x: 'To conclude our July edition, eureqa! are very pleased to be featuring an interview with **Hayden Taylor**, co-founder and CEO of multi-award winning education non-profit [Unloc](https://www.unloc.org.uk/). Hayden began Unloc when he was just 16, balancing education and young life with growing the organisation that now works with over 25,000 young people annually.' },
          { t: 'q', who: 'Lauren', x: 'First of all, introductions, who are you and what is Unloc?' },
          { t: 'a', who: 'Hayden', x: 'So I\u2019m Hayden, I\u2019m 29 years old. I\u2019m the co-founder and chief exec of a social enterprise called Unloc. Our mission is to **help young people become changemakers**, which sounds like quite a broad mission but it\u2019s fundamentally about giving agency, skills and confidence to young people, particularly young people from disadvantaged communities, giving them the tools that they need to not only shape their own life but also the world around them. We\u2019ve gone from a very small community project running in my hometown of Portsmouth to now supporting more than **25,000 young people** annually across the UK.' },
          { t: 'img', src: IMG + 'fc414214-bd74-4715-b8b9-90181df59920__image.png.jpg', cap: 'Photo credit: Unloc website' },
          { t: 'q', who: 'Lauren', x: 'How did you find the experience of starting Unloc while you were at school, at that very young age, and how did you balance the responsibilities that came along with it?' },
          { t: 'a', who: 'Hayden', x: 'I think in terms of timing, it couldn\u2019t have come at a better point. I really do believe that those years in college and then starting university is a great time to be able to experiment. You don\u2019t have so many ties, not so held back by the practical realities of adult life. So I think actually in terms of timing starting when I was at school was probably the **best decision I\u2019ve ever made** because it gave us a runway of a few years where there was no expectation necessarily that I had to earn lots of money, I could really just focus on testing the idea and seeing whether it worked.' },
          { t: 'q', who: 'Lauren', x: 'Do you have any tips for people trying to balance education and also a startup?' },
          { t: 'a', who: 'Hayden', x: 'I think you\u2019ve really got to allocate your time. I would suggest blocking out those windows where you can really focus in on your venture, routine becomes really key when you\u2019re trying to balance lots of different things. I also think having a mentor or somebody that you can connect with to help you check in on that balance is a really good thing. Sometimes we assume we\u2019re getting it right, but we aren\u2019t always, and it\u2019s often when we\u2019re burnt out that we suddenly realise something went off kilter. So having an **early breaking mechanism** in the form of the mentor is a great thing to have. I think the final tip I would say is don\u2019t put too much pressure on yourself. Recognise that you only have limited time to test and bring this idea to life when at the same time you\u2019re studying for A levels or a degree, and that is a huge endeavor in its own right. So **be kind to yourself** and don\u2019t squeeze yourself too hard!' },
          { t: 'q', who: 'Lauren', x: 'Moving on from founding, how did you find the experience of expanding Unloc beyond just you and your co-founder, and how did you find it trusting others with your vision?' },
          { t: 'a', who: 'Hayden', x: 'I think some people find this really easy and others really hard. I found it really difficult and still find it really difficult to let go, because it\u2019s something that was my baby and I poured so much time and energy into it. **Letting go** is not the easiest of endeavors, but it is essential. It is absolutely critical that you set up those lines of delegation as early as you possibly can and you don\u2019t find yourself stuck in the weeds of things. The worst thing a founder can do is to **get tied to the day-to-day tasks** of the organisation. You need to as quickly as possible get to the point where you\u2019re focusing on working on the business rather than in the business. I appreciate that\u2019s easier said than done, but it\u2019s an aspiration that we should all hold on to.' },
          { t: 'q', who: 'Lauren', x: 'So Unloc works a lot with young entrepreneurs, could you give a bit of an insight into what Unloc does within that space and any opportunities people might be interested in?' },
          { t: 'a', who: 'Hayden', x: 'A couple of things that are probably relevant. We run a program called **Kickstart** which is a boot camp to help young people interested in setting up their own business \u2014 a three day, immersive, gamified experience to refine ideas and develop a business plan, culminating in everybody pitching back their venture in a really supportive environment. If you\u2019re in the super early stage and you want to test your idea, we have an amazing program called **Changemaker Grants where young people can apply for up to £1000** to test and trial an idea and bring it to life. And third, for those working on technology driven solutions, we have an amazing tech-for-good competition called **The Young Entrepreneurs Challenge** which we run in partnership with Verizon \u2014 a European competition where five winners are identified, backed with seed funding, supported with mentorship and world-class training. All of that information is on our website in the **Unloc Plus section**. And of course, you can always drop us an email.' },
          { t: 'q', who: 'Lauren', x: 'From your interactions with young founders, what typically suggests that their venture will be successful?' },
          { t: 'a', who: 'Hayden', x: 'I would say the founders that are focused on the overall vision and the value they want to bring into the world rather than the product **tend to be most successful**, because in those early years you really have to pivot and develop the model based on the real world experience of either trying to sell the product or bring it to market. Those that are able to pivot, and pivot quickly, will be the ones that really succeed. I also think those that are truly dedicated and committed to **executing on the vision** is another key factor. And then third and finally, those that have great people around them \u2014 whether that\u2019s a co-founder or a team of people that support that vision \u2014 are naturally more likely to be successful.' },
          { t: 'q', who: 'Lauren', x: 'Final question \u2014 what are the most fulfilling and what are the hardest aspects of being a co-founder and CEO?' },
          { t: 'a', who: 'Hayden', x: 'The most fulfilling things I think are the creativity that you get and the impact that you get to see unfolding. Seeing what you do deliver value is by far the most rewarding outcome from my perspective. The most challenging things are the flip sides of those success factors. It can be long, hard and draining. You will have moments of doubt about your capability to bring your vision to life. I would also say that there\u2019s a real **risk of founders not looking after their own well-being** \u2014 becoming so committed to the vision that you lose sight of what you need as an individual. But the upsides are enormous and plentiful, and if you\u2019re somebody that gets a kick out of seeing your vision come to life, being creative, and getting a real thrill from overcoming a challenge, then it\u2019s absolutely the right thing to do.' }
        ],
        links: [
          { label: 'unloc.org.uk', url: 'https://www.unloc.org.uk/' },
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/haydentaylor/' }
        ]
      }
    ]
  };
})();
