export type NavChild = { label: string; to: string }

export type NavItem = {
  id: string
  label: string
  to: string
  children: NavChild[]
}

export const primaryNav: NavItem[] = [
  {
    id: 'submenu-0',
    label: 'Our energy future',
    to: '/our-energy-future',
    children: [
      { label: 'Upgrading our existing system', to: '/our-energy-future' },
      { label: 'Building new capacity', to: '/our-energy-future' },
      { label: 'Enabling wind and solar', to: '/our-energy-future' },
    ],
  },
  {
    id: 'submenu-1',
    label: 'Our energy system',
    to: '/our-energy-system',
    children: [
      { label: 'Our power stations', to: '/our-energy-system' },
      { label: 'How energy works', to: '/our-energy-system' },
      { label: 'Powering Bass Strait islands', to: '/our-energy-system' },
    ],
  },
  {
    id: 'submenu-2',
    label: 'Sustainability and community',
    to: '/sustainability-and-community',
    children: [
      { label: 'Conservation', to: '/sustainability-and-community' },
      { label: 'Climate', to: '/sustainability-and-community' },
      { label: 'Community', to: '/sustainability-and-community' },
      { label: 'Cultural heritage', to: '/sustainability-and-community' },
      { label: 'Diversity, equity and inclusion', to: '/sustainability-and-community' },
    ],
  },
  {
    id: 'submenu-3',
    label: 'Water',
    to: '/water',
    children: [
      { label: 'Water information', to: '/water' },
      { label: 'Using our water', to: '/water' },
      { label: 'Our dams', to: '/water' },
    ],
  },
  {
    id: 'submenu-4',
    label: 'Things to do',
    to: '/things-to-do',
    children: [
      {
        label: 'Waddamana Heritage Site and Highlands Power Trail',
        to: '/things-to-do',
      },
      { label: 'Visitor information and safety', to: '/things-to-do' },
    ],
  },
  {
    id: 'submenu-5',
    label: 'Stories and news',
    to: '/stories-and-news',
    children: [
      { label: 'The Spill', to: '/stories-and-news' },
      { label: 'Media centre', to: '/stories-and-news' },
    ],
  },
]

export const moreNav: NavChild[] = [
  { label: 'Careers', to: '/careers' },
  { label: 'About us', to: '/about' },
  { label: 'Contractor HSE', to: '/about' },
  { label: 'Education', to: '/about' },
  { label: 'Resource hub', to: '/stories-and-news' },
]

export const moreMenuItem: NavItem = {
  id: 'submenu-more',
  label: 'More',
  to: '/about',
  children: moreNav,
}

export const navLinks = [
  ...primaryNav.map(({ label, to }) => ({ label, to })),
  ...moreNav,
]

export const heroSlides = [
  {
    id: 'open-days',
    number: '01',
    paginationTitle: 'Power station open days',
    titleHtml: { line: 'Power station', accent: 'open days' },
    body: "There's nothing quite like getting inside a power station or dam wall. If you'd like to be inspired by the awesome power of nature, subscribe to our newsletter.",
    cta: {
      label: 'Sign up here',
      href: '',
    },
    media: {
      type: 'video' as const,
      src: 'https://www.hydro.com.au/sites/default/files/2026-01/Rec%20Header%20Video.mp4',
      poster: '/images/hero1.jpg.webp',
    },
  },
  {
    id: 'adventure',
    number: '02',
    paginationTitle: 'Discover your next adventure',
    titleHtml: { line: 'Discover your next adventure', accent: '' },
    body: "Camp, paddle and fish at beautiful lakes. Experience Tasmania's hydropower history. Find out all you need for a great escape.",
    cta: { label: 'Explore things to do', to: '/things-to-do' },
    media: {
      type: 'video' as const,
      src: 'https://www.hydro.com.au/sites/default/files/2026-01/Rec%20Header%20Video.mp4',
      poster: '/images/hero2.jpg.webp',
    },
  },
  {
    id: 'tarraleah',
    number: '03',
    paginationTitle: 'The future of Tarraleah',
    titleHtml: { line: 'The future of', accent: 'Tarraleah' },
    body: "As we embark on a new era of hydropower in Tasmania, we want to hear about what matters to you. Find out about the projects we're planning and how you can have your say.",
    cta: { label: 'Join the conversation', to: '/our-energy-future' },
    media: {
      type: 'video' as const,
      src: 'https://www.hydro.com.au/sites/default/files/2025-11/Tarraleah%20Overview.mp4',
      poster: '/images/hero3.jpg.webp',
    },
  },
]

export const about = {
  icon: '/images/leaf.png',
  titleLine: 'Creating renewable energy',
  titleAccent: 'for generations',
  body: "GoHydro has been creating renewable energy for over a century, and it's what we'll continue doing for generations to come. We are a leading generator of renewable energy and clean energy innovation, with 30 hydropower stations and 54 major dams, as well as wind farms and world-leading hybrid renewable energy systems.",
  cta: { label: 'Learn more about us', to: '/about' },
  image: '/images/about.jpg.webp',
  imagePosition: 'right' as const,
}

export const activities = {
  icon: '/images/vector.png',
  titleLine: 'Activities around',
  titleAccent: 'Tasmania',
  body: "We manage recreation sites across Tasmania. Whether you're planning to get out on the water, visit a historic site or have a great weekend away, find out everything you need to know for your next adventure.",
  cta: { label: 'Discover your next adventure', to: '/things-to-do' },
  image: '/images/activities.jpg.webp',
}

export const energyFuture = {
  icon: '/images/bulb.png',
  titleLine: 'A new era of',
  titleAccent: 'Tasmanian hydropower',
  body: 'We are making sure our energy system is fit for the next century, with plans to transform our hydro system to increase capacity, efficiency and flexibility. This includes work on our existing assets, proposals to build new ones and supporting wind and solar developments.',
  cta: { label: 'Explore our energy future', to: '/our-energy-future' },
  image: '/images/energy.jpg.webp',
  imagePosition: 'left' as const,
}

export const waterStorage = {
  title: 'Water storage levels',
  body: "We're Australia's largest water manager, turning rain into energy for Tasmania. Our storage levels generally follow a seasonal pattern – peaking above 40% during the wettest months and dropping into the 20% range during the driest.",
  cta: { label: 'See lake levels', to: '/water' },
  gwh: '7197',
  gwhLabel: 'Current GWH energy in storage',
  percent: '49.9',
  percentLabel: '% of full storage capacity',
  asAt: 'As at 02/11/2026',
  note: 'Updated on the first working day of the week.',
  image: '/images/water.jpg.webp',
}

export const stories = [
  {
    title: 'Beneath the surface: restoring a vital part of Poatina Power Station',
    category: 'Energy & industry',
    date: '15 Sep',
    image: '/images/story1.jpg.webp',
  },
  {
    title: 'Giant valve completes an extraordinary journey to Gordon',
    category: 'Energy & industry',
    date: '02 Sep',
    image: '/images/story2.jpg.webp',
  },
  {
    title: 'Taking special care at Lake St Clair: replacing the radial gates',
    category: 'Energy & industry',
    date: '10 Aug',
    image: '/images/story3.jpg.webp',
  },
  {
    title: 'Edgar Dam strengthened for the future following major upgrade',
    category: 'Energy & industry',
    date: '06 Aug',
    image: '/images/story4.jpg.webp',
  },
  {
    title: "Resetting Poatina's Turbine 2 for the next generation",
    category: 'Energy & industry',
    date: '11 May',
    image: '/images/story5.jpg.webp',
  },
  {
    title: 'Ahoy! New wind turbine blades sail into King Island',
    category: 'Energy & industry',
    date: '17 Feb',
    image: '/images/story6.jpg.webp',
  },
]

export const careers = {
  title: 'Build your career in renewable energy',
  body: "When you work with GoHydro, you'll join a dynamic and inclusive community where you can feel connected, inspired and supported to grow and excel. Use your energy to create a better future.",
  cta: { label: 'See our vacancies', to: '/careers' },
  image: '/images/careers.jpg.webp',
}

export const pageCopy: Record<
  string,
  { title: string; accent?: string; body: string; image: string }
> = {
  about: {
    title: 'About',
    accent: 'GoHydro',
    body: 'For more than a century we have turned water into clean, renewable energy.',
    image: about.image,
  },
  careers: {
    title: 'Build your',
    accent: 'career',
    body: 'Join a dynamic community shaping the renewable future.',
    image: careers.image,
  },
}
