import type { LinkCard } from '../components/LinkCards'

export type TopicBanner = {
  titleLine: string
  titleAccent?: string
  body: string
  cta?: { label: string; to: string }
  image: string
  imagePosition?: 'left' | 'right'
  icon?: string
  landscape?: boolean
}

export type TopicSection = {
  title: string
  titleAccent?: string
  paragraphs: string[]
  cta?: { label: string; to: string }
  tone?: 'foam' | 'sand' | 'white'
}

export type TopicPage = {
  slug: string
  hero: {
    title: string
    titleLine2?: string
    body: string
    image: string
  }
  intro?: {
    title: string
    lead?: string
    paragraphs: string[]
  }
  banners?: TopicBanner[]
  sections?: TopicSection[]
  cards?: {
    title: string
    items: LinkCard[]
    placement?: 'after-intro' | 'after-banners'
  }
  showStories?: boolean
  showWaterStats?: boolean
}

export const topicPages: Record<string, TopicPage> = {
  'our-energy-future': {
    slug: 'our-energy-future',
    hero: {
      title: 'Our energy',
      titleLine2: 'future',
      body: "We're embracing the opportunities of a changing energy market to power Tasmania into a prosperous and sustainable future.",
      image: '/images/pages/energy-future-hero.jpg.webp',
    },
    intro: {
      title: "We're embarking on a new era of Tasmanian hydropower",
      lead: 'The pioneers who built our first dams and power stations imagined a better future for Tasmanians – and that same spirit drives us today.',
      paragraphs: [
        "Tasmania's demand for energy is forecast to grow, and Australia's energy market is changing. We're carefully planning the next chapter in Tasmania's energy story.",
        'Every dollar we invest helps futureproof Tasmania – making our system stronger, supporting local jobs and businesses, and returning greater value to the state.',
      ],
    },
    banners: [
      {
        titleLine: 'Upgrading our existing system',
        body: "We're investing in our dams and power stations, so they stay safe, efficient, reliable and ready for the future. Our power stations will play an increasingly valuable firming role. This means operating a little differently – dialling up and down quickly to balance the varying output of wind and solar.",
        cta: { label: 'Find out more', to: '/our-energy-system' },
        image: '/images/pages/energy-future-b1-hq.jpg',
        imagePosition: 'left',
      },
      {
        titleLine: 'Building new capacity',
        body: "We're preparing to expand our hydropower system for a new era. We are advancing proposals to redevelop the iconic Tarraleah hydropower scheme, which is reaching the end of its operational life, and to develop Tasmania's first pumped hydro facility at Cethana.",
        cta: { label: 'Find out more', to: '/our-energy-future' },
        image: '/images/pages/energy-future-b2-hq.jpg',
        imagePosition: 'right',
      },
      {
        titleLine: 'Enabling wind and solar',
        body: "Tasmania has plenty of clean energy potential. We have an important role in supporting Tasmania's growth in renewable energy generation and our door is open to proponents of new and existing projects and to large energy consumers.",
        cta: { label: 'Explore', to: '/our-energy-system' },
        image: '/images/pages/energy-future-b3-hq.jpg',
        imagePosition: 'left',
      },
    ],
    cards: {
      title: 'Projects',
      placement: 'after-banners',
      items: [
        { title: 'Cethana pumped hydro', to: '/our-energy-future' },
        { title: 'Tarraleah redevelopment', to: '/our-energy-future' },
        { title: 'Gordon Power Station', to: '/our-energy-system' },
        { title: 'West Coast refurbishment program', to: '/our-energy-system' },
        { title: 'Edgar Dam', to: '/our-energy-system' },
      ],
    },
  },

  'our-energy-system': {
    slug: 'our-energy-system',
    hero: {
      title: 'Our energy',
      titleLine2: 'system',
      body: "We've led clean energy innovation in Australia for over a century. Now, we operate one of the world's most complex and sophisticated renewable energy networks with 30 power stations, 54 major dams, 2 hybrid energy systems and 3 wind farms.",
      image: '/images/pages/energy-system-hero.jpg.webp',
    },
    intro: {
      title: 'How our energy system works',
      paragraphs: [
        "We use the power of water, wind and sun to produce secure, renewable energy for Tasmania. We're also able to trade in the National Electricity Market to get the best value from our water. That means more benefits for Tasmanians – because when Hydro profits, Tasmania profits.",
      ],
    },
    cards: {
      title: 'Our power stations',
      items: [
        { title: 'Derwent', to: '/our-energy-system' },
        { title: 'Gordon–Pedder', to: '/our-energy-system' },
        { title: 'Mersey–Forth', to: '/our-energy-system' },
        { title: 'West Coast', to: '/our-energy-system' },
        { title: 'Yingina / Great Lake', to: '/our-energy-system' },
        { title: 'Wind', to: '/our-energy-system' },
        { title: 'Bass Strait islands', to: '/our-energy-system' },
        { title: 'Tamar Valley Power Station', to: '/our-energy-system' },
      ],
    },
    banners: [
      {
        titleLine: 'Powering Bass Strait islands',
        body: 'King Island and Flinders Island are the largest populated islands in the Bass Strait, between Tasmania and mainland Australia. We supply safe and reliable electricity to keep the lights on in these isolated communities. Our world-leading hybrid renewable power systems have cut diesel use on the islands by two-thirds or more.',
        cta: { label: 'Learn more', to: '/our-energy-system' },
        image: '/images/pages/energy-future-b2-hq.jpg',
        imagePosition: 'right',
      },
      {
        titleLine: "We're building Tasmania's clean energy future",
        body: 'Tasmania and Australia need new renewable generation, long-duration storage and more interconnection and transmission as we electrify our homes, cars, businesses and industries. Our new projects will help create more jobs, economic growth and energy security for Tasmania.',
        cta: { label: 'Find out more', to: '/our-energy-future' },
        image: '/images/pages/energy-future-b1-hq.jpg',
        imagePosition: 'left',
      },
    ],
  },

  'sustainability-and-community': {
    slug: 'sustainability-and-community',
    hero: {
      title: 'Sustainability and',
      titleLine2: 'community',
      body: "We know that sustainability goes beyond decarbonising the electricity grid. It's about enabling our communities, people and environment to thrive together.",
      image: '/images/pages/sustain-hero.jpg.webp',
    },
    banners: [
      {
        titleLine: "Protecting Tasmania's land, water and biodiversity",
        body: "Guided by our scientists and research partners, we work to minimise our impacts on the environment, and to keep the water healthy and habitable. We want to keep Tasmania's natural beauty, biodiversity and resources safe for us all to enjoy, now and long into the future.",
        cta: { label: 'Explore conservation', to: '/sustainability-and-community' },
        image: '/images/pages/energy-system-b1-hq.jpg',
        imagePosition: 'left',
      },
      {
        titleLine: 'Lessening our carbon impact and building resilience',
        body: "We are already one of the lowest emitters in the energy sector, but we're going even further – taking action to better understand and reduce emissions where we can. We also work with leading research organisations to better understand the impacts of climate change and strengthen the resilience of our hydropower assets.",
        cta: { label: "See how we're tackling climate change", to: '/sustainability-and-community' },
        image: '/images/pages/energy-future-b2-hq.jpg',
        imagePosition: 'right',
      },
      {
        titleLine: 'Here for all Tasmanians for generations',
        body: 'Our grants, sponsorships, scholarships, volunteering, education, engagement and benefit-sharing programs are all about giving back, reaching out and making life better for all Tasmanians.',
        cta: { label: 'Community programs', to: '/sustainability-and-community' },
        image: '/images/pages/energy-system-b1-hq.jpg',
        imagePosition: 'left',
      },
      {
        titleLine: 'Caring for the past, managing for the future',
        body: "Heritage is the story of people and place. Tasmanian Aboriginal people have maintained enduring cultural connections to landscapes and waterways for tens of thousands of years. Today we care for and manage both Aboriginal and historic cultural heritage.",
        cta: { label: 'Cultural heritage', to: '/sustainability-and-community' },
        image: '/images/pages/energy-future-b1-hq.jpg',
        imagePosition: 'right',
      },
      {
        titleLine: 'Diversity, equity and inclusion',
        body: "We're committed to creating a work environment where diversity, equity and inclusion are at the core of our culture. It's a key part of our focus on sustainability and community.",
        cta: { label: 'Learn more', to: '/careers' },
        image: '/images/careers.jpg.webp',
        imagePosition: 'left',
      },
    ],
    sections: [
      {
        title: "We'd love to engage with you",
        paragraphs: [
          'Whether you have a question about our projects, want to partner with us, or simply want to share your views – we welcome the conversation.',
        ],
        cta: { label: 'Contact us', to: '/about' },
        tone: 'sand',
      },
    ],
  },

  water: {
    slug: 'water',
    hero: {
      title: 'Water',
      body: 'Find out about the water we manage – and how you can apply to use it for business or pleasure.',
      image: '/images/pages/water-hero.jpg.webp',
    },
    cards: {
      title: 'Quick links',
      items: [
        { title: 'Water information', to: '/water' },
        { title: 'Energy in storage', to: '/water' },
        { title: 'Lake levels', to: '/water' },
        { title: 'Water flows', to: '/water' },
        { title: 'Rainfall', to: '/water' },
        { title: 'Register for water alerts', to: '/water' },
        { title: 'Apply for a water transfer', to: '/water' },
        { title: 'Report your water use', to: '/water' },
        { title: 'Water pricing', to: '/water' },
      ],
    },
    sections: [
      {
        title: "We're Australia's largest water manager",
        paragraphs: [
          "We manage a vast volume of water – storing and releasing it to power Tasmania, while keeping Tasmania's water resources healthy for future generations.",
          'We balance our hydropower system with conserving the environment, providing drinking water and irrigation, and giving all Tasmanians access to the waters they enjoy.',
        ],
        tone: 'white',
      },
      {
        title: 'Water security',
        paragraphs: [
          "Rainfall and water levels change throughout the year. To keep Tasmania's electricity supply secure, we need to balance risk in this dynamic environment. That means keeping enough water in storage when it's dry, but also making enough space in the right storages so that we can catch as much water as possible when the rain comes.",
          'Our storage levels generally follow a seasonal pattern – peaking in the 40%-full range in the wettest months each year and dropping into the 20–30% range during the driest times of the year.',
        ],
        tone: 'foam',
      },
    ],
    showWaterStats: true,
    banners: [
      {
        titleLine: 'Water is for everyone',
        body: 'Our primary role is ensuring the water we manage can generate sufficient energy for Tasmanians, now and into the future. We recognise that this water also powers our unique environment, our thriving economy, and healthy and active communities. As a community member, you can apply to use the water we manage.',
        cta: { label: 'Apply for a water transfer', to: '/water' },
        image: '/images/pages/energy-system-b1-hq.jpg',
        imagePosition: 'right',
      },
      {
        titleLine: 'Stay informed with water alerts',
        body: 'Water alerts keep you informed about changes that could impact your plans. After registering, choose locations on our interactive map and customise alerts to your needs.',
        cta: { label: 'Register for alerts', to: '/water' },
        image: '/images/pages/energy-future-b1-hq.jpg',
        imagePosition: 'left',
      },
      {
        titleLine: 'Getting out and staying safe on the water',
        body: "There's lots of fun to be had on our lakes! Before setting out, check water flows and levels, see our safety alerts and plan accordingly.",
        cta: { label: 'Explore our interactive map', to: '/things-to-do' },
        image: '/images/pages/energy-future-b2-hq.jpg',
        imagePosition: 'right',
      },
    ],
  },

  'things-to-do': {
    slug: 'things-to-do',
    hero: {
      title: 'Things',
      titleLine2: 'to do',
      body: "Fish, camp and paddle at beautiful lakes, learn about Tasmania's incredible power journey at our power stations and heritage sites, or find a special place to stay.",
      image: '/images/pages/things-hero.jpg.webp',
    },
    cards: {
      title: 'Your next adventure',
      items: [
        { title: 'Get out on the water', to: '/things-to-do' },
        { title: 'Explore a power station', to: '/things-to-do' },
        { title: 'Experience hydro history', to: '/things-to-do' },
      ],
    },
    banners: [
      {
        titleLine: 'Go fishing, paddling or camping',
        body: "Find a great location for your next fishing, boating, paddling or camping trip on our recreational sites map. Anglers love fishing for trout in Tasmania's lakes. Before you head off, check our lake levels and safety information.",
        cta: { label: 'Explore our interactive map', to: '/water' },
        image: '/images/pages/energy-system-b1-hq.jpg',
        imagePosition: 'left',
      },
      {
        titleLine: 'Get behind the scenes of an operating power station',
        body: 'We occasionally open our power stations and other assets such as dams to the general public. Subscribe to our newsletter, The Spill, to be the first to know about future open days.',
        cta: { label: 'Sign up to The Spill', to: '/stories-and-news' },
        image: '/images/pages/energy-future-b1-hq.jpg',
        imagePosition: 'right',
      },
      {
        titleLine: "Experience Tasmania's hydro heritage",
        body: 'At the Waddamana Power Station heritage site you can visit an active museum with original station machinery and equipment. On your way through the Central Highlands, follow the self-guided Highlands Power Trail.',
        cta: { label: 'Visitor information', to: '/things-to-do' },
        image: '/images/pages/energy-future-b3-hq.jpg',
        imagePosition: 'left',
      },
      {
        titleLine: 'Find perfect places to stay at Pedder and Tarraleah',
        body: "Pedder Wilderness Lodge is located in the heart of Tasmania's Southwest National Park. Historic Tarraleah Estate is in the heart of Tasmania's Central Highlands just 2 hours drive north-west of Hobart.",
        cta: { label: 'Find out more', to: '/things-to-do' },
        image: '/images/pages/energy-future-b2-hq.jpg',
        imagePosition: 'right',
      },
      {
        titleLine: 'Be blown away at Musselroe Bay',
        body: "In the path of the wild 'Roaring 40s', Tasmania has world-class wind resources. At the wind farm at Musselroe Bay you'll find the Tebrakunna Visitor Centre.",
        image: '/images/pages/energy-system-b1-hq.jpg',
        imagePosition: 'left',
        cta: { label: 'Plan your visit', to: '/things-to-do' },
      },
    ],
    sections: [
      {
        title: 'Keep yourselves and the environment safe',
        paragraphs: [
          'We want you to have a great time at our sites across Tasmania and we care about your safety. Please check our alerts and visitor information before you head out on your next adventure.',
        ],
        cta: { label: 'Visitor information and safety', to: '/things-to-do' },
        tone: 'sand',
      },
    ],
  },

  'stories-and-news': {
    slug: 'stories-and-news',
    hero: {
      title: 'Stories and',
      titleLine2: 'news',
      body: "Explore what's happening across our business and communities in our latest stories, updates and insights.",
      image: '/images/pages/stories-hero.jpg.webp',
    },
    showStories: true,
    banners: [
      {
        titleLine: 'The Spill',
        body: 'The Spill is where we tell stories of our people and projects and the many ways we empower Tasmania. Explore what’s happening across our business and communities in our latest stories, updates and insights.',
        cta: { label: 'Browse stories', to: '/stories-and-news' },
        image: '/images/story2.jpg.webp',
        imagePosition: 'right',
      },
      {
        titleLine: 'Media centre',
        body: 'For media contacts, latest media releases, images and filming permits.',
        cta: { label: 'Visit the media centre', to: '/stories-and-news' },
        image: '/images/story3.jpg.webp',
        imagePosition: 'left',
      },
    ],
  },
}

export const topicAliases: Record<string, string> = {
  'energy-future': 'our-energy-future',
  'energy-system': 'our-energy-system',
  sustainability: 'sustainability-and-community',
  stories: 'stories-and-news',
}

export function resolveTopicSlug(slug: string): string {
  return topicAliases[slug] ?? slug
}
