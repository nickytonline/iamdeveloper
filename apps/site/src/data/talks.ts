export type Talk = (typeof rawTalks)[number];

const rawTalks = [
  {
    title: 'Fresh: A New Full Stack Web Framework for Deno',
    date: new Date('2022-12-13'),
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=JWjcWQz5g3U&t=2160s',
    },
    venue: { name: 'ChicagoJS', url: 'https://chicagojs.org/' },
    slideDeck: 'https://iamdeveloper.com/ChicagoFresh',
    sourceCode:
      'https://github.com/nickytonline/chicago-js-dec-2022-fresh-demo',
    tags: ['deno', 'typescript'],
  },
  {
    title:
      'Expert Panel: Trending Tools and Frameworks – What’s Hype and What’s Not',
    date: new Date('2022-06-23'),
    video: {
      type: 'vimeo',
      url: 'https://player.vimeo.com/video/724340575?h=118d599345&color=ff0179&title=0&byline=0&portrait=0',
    },
    venue: {
      name: `Applitools & Netlify Present FRONT-END <TEST>{FEST}`,
      url: 'https://applitools.com/on-demand-videos/front-end-test-fest-june-2022/',
    },
    summary: `Joe Colantonio moderates this lively Q&A panel where Tiffany Le-Nguyen,
  Skyler Brungardt, Nick Taylor, and Dan Giordano share their thoughts on
  upcoming tools and framework innovations at their respective companies. -
  <a href="https://applitools.com/event/expert-panel-trending-tools-and-frameworks-whats-hype-and-whats-not/">Expert Panel: Trending Tools and Frameworks – What’s Hype and What’s
  Not]</a>.`,
  },
  {
    title: 'Automate syndication and ownership of your content with Eleventy',
    date: new Date('2022-05-26'),
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=Yy4eHUjLWAs',
    },
    venue: { name: 'Eleventy Meetup', url: 'https://11tymeetup.dev/' },
    slideDeck: 'https://www.iamdeveloper.com/11tyMeetupMay2022',
    additionalLinks: [
      {
        title:
          'Automate syndication of your content with Eleventy, dev.to, and GitHub Actions',
        url: 'https://www.iamdeveloper.com/posts/my-eleventy-meetup-talk-3b2p/',
      },
    ],
  },
  {
    title: `Virtual Coffee Lunch & Learn: Asking Coding Questions`,
    date: new Date('2022-05-27'),
    venue: {
      name: 'Virtual Coffee Lunch & Learn',
      url: 'https://virtualcoffee.io',
    },
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=DVqtr3iwkwQ',
    },
    additionalLinks: [
      {
        title: 'Navigating a new code base',
        url: 'https://dev.to/virtualcoffee/navigating-a-new-code-base-94d',
      },
    ],
  },
  {
    title: `Tools for web developers: Live coding and debugging`,
    date: new Date('2022-02-10'),
    venue: {
      name: 'Virtual Coffee Lunch & Learn',
      url: 'https://virtualcoffee.io',
    },
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=k0nSJ1MtSao',
    },
    SlideDeck: 'https://iamdeveloper.com/codementor2022',
  },
  {
    title: 'AppWrite Hacktoberfest Kickoff',
    date: new Date('2021-04-02'),
    venue: {
      name: 'AppWrite Hacktoberfest Kickoff',
      url: 'https://dev.to/appwrite/appwrites-hacktoberfest-21-journey-4n91',
    },
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=cyJAz-c1OWs&t=4183s',
    },
    slideDeck: 'https://iamdeveloper.com/hacktoberfest2021',
  },
  {
    title: 'Getting Started with Streaming on Twitch',
    date: new Date('2021-09-20'),
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=aDofyI6E2t4',
    },
    venue: {
      name: 'Virtual Coffee Lunch & Learn',
      url: 'https://virtualcoffee.io',
    },
    slideDeck: 'https://iamdeveloper.com/stream2021',
    additionalLinks: [
      {
        title: 'Getting Started with Streaming on Twitch',
        url: 'https://www.iamdeveloper.com/blog/getting-started-with-streaming-on-twitch-4im7',
      },
    ],
  },

  {
    title: 'Debugging JavaScript',
    date: new Date('2021-04-02'),
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=I9A0Pifn0Uw',
    },
    venue: {
      name: 'Virtual Coffee Lunch & Learn',
      url: 'https://virtualcoffee.io',
    },
    slideDeck: 'https://iamdeveloper.com/debug2021',
  },

  {
    title: 'Storybook 2021',
    date: new Date('2021-03-10'),
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=ypsD-9qQzYg',
    },
    venue: {
      name: 'Collab Lab Meetup',
      url: 'https://www.meetup.com/tech-talks-by-the-collab-lab/events/276679138/',
    },
    slideDeck: 'https://iamdeveloper.com/storybook2021',
  },
  {
    title: 'Words Matter: Conventional Comments',
    date: new Date('2020-11-20'),
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=MMabY-Cm_V4&t=3010s',
    },
    venue: {
      name: 'Virtual Coffee Lightning Talks',
      url: 'https://virtualcoffee.io',
    },
    slideDeck: 'https://iamdeveloper.com/lightning2020',
  },
  {
    title: 'Getting the Most out of Open Source',
    date: new Date('2020-10-01'),
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=Tn3MBiWYeEI',
    },
    venue: {
      name: 'DigitalOcean Tech Talk',
      url: 'https://www.digitalocean.com/community/tech_talks/getting-the-most-out-of-open-source',
    },
    slideDeck: 'https://iamdeveloper.com/hacktoberfest2020',
  },
];

export const talks = new Map<string, Talk>(
  rawTalks.map((talk) => {
    const id = `${talk.title} ${talk.venue.name}`
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-');
    return [id, talk];
  })
);
