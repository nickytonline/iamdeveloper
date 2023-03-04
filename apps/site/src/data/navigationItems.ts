// Create a type that is the type of one of the elements in navItems
export type NavItem = (typeof navItems)[0];

export const navItems = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Streaming',
    url: '/streaming',
  },
  {
    text: 'Podcast',
    url: '/podcast',
  },
  {
    text: 'Newsletter',
    url: '/newsletter',
  },
  {
    text: 'Talks',
    url: '/talks',
  },
  {
    text: 'VS Code Tips',
    url: '/vscode-tips',
  },
  {
    text: 'Uses',
    url: '/pages/uses',
  },
  {
    text: 'Thanks',
    url: '/thanks',
  },
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Contact',
    url: '/contact',
  },
];
