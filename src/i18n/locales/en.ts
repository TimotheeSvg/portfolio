import type { MessageSchema } from '../types'

const en: MessageSchema = {
  nav: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Side Projects',
  },
  meta: {
    base: 'Portfolio',
    home: 'Home',
    skills: 'Skills',
    projects: 'Side Projects',
  },
  language: {
    label: 'Language',
  },
  hero: {
    greeting: 'Hello',
    titleLead: 'Full-Stack Developer',
    intro:
      "Passionate about computer science for as long as I can remember, I love building clean, well-architected web applications. From reactive frontends to robust backends, I enjoy turning an idea into a real product. Always curious, I also explore DevOps to master the whole chain end to end.",
    ctaSkills: 'View my skills',
    ctaProjects: 'My side projects',
  },
  education: {
    eyebrow: 'My background',
    title: 'Education',
    items: [
      {
        school: 'Collège de Craponne',
        location: 'Craponne (69290)',
        degree: 'Brevet des collèges',
      },
      {
        school: 'Lycée La Martinière Monplaisir',
        location: 'Lyon 8',
        degree: 'STI2D Baccalaureate',
        details: 'AC option (Architecture and Construction)',
      },
      {
        school: 'ORT Lyon',
        location: 'Lyon',
        degree: 'BTS SNIR',
        details: 'Digital Systems, IT and Networks option',
      },
      {
        school: 'ESGI Lyon',
        location: 'Lyon',
        degree: "Bachelor's in Software Architecture",
      },
      {
        school: 'ESGI Lyon',
        location: 'Lyon',
        degree: "Master's in Software Architecture",
      },
    ],
  },
  experience: {
    eyebrow: 'Professional',
    title: 'Experience',
    subtitle: 'What I worked on in a professional setting.',
    items: [
      {
        role: 'Full-Stack Developer (work-study)',
        company: 'Work-study',
        period: '3 years',
        description:
          'Three years of work-study in web development, mainly with Vue.js and Symfony, contributing to the full-stack delivery of several client projects.',
        highlights: [
          'Helped with the full-stack development of the Maslow website',
          'Built the Valority client portal',
          'Used Vue.js across several frameworks: Nuxt, Quasar',
          'DevOps fundamentals: Docker, Kubernetes, Nginx',
        ],
        stack: ['Vue.js', 'Nuxt', 'Quasar', 'Symfony', 'Docker', 'Kubernetes', 'Nginx'],
      },
      {
        role: 'Web Developer',
        company: 'Apsaroke',
        period: 'June 2021 · Internship',
        description:
          'Design and development of a WebDev application for managing co-ownership properties (document sharing).',
        highlights: [
          'Full project management carried out independently',
        ],
        stack: ['WebDev'],
      },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'My skills',
    subtitle: 'My core areas of expertise, and the tools I use day to day.',
    levelLabel: 'Level',
    featured: [
      {
        name: 'Vue.js',
        level: 'Confirmed',
        description:
          'My frontend specialty. I build reactive, maintainable interfaces, with both Vue 2 and Vue 3.',
        points: [
          'Vue 2 and Vue 3, comfortable with both',
          'Composition API and Options API',
          'Used with the Nuxt and Quasar frameworks',
          'Styling mostly with Tailwind CSS, otherwise plain CSS',
        ],
        tags: ['Vue 3', 'Vue 2', 'Composition API', 'Options API', 'Nuxt', 'Quasar', 'Tailwind CSS'],
      },
      {
        name: 'Symfony / PHP',
        level: 'Intermediate',
        description:
          'My backend foundation: robust APIs and applications in modern PHP, mainly with Symfony.',
        points: [
          'PHP in its recent versions',
          'Symfony as the main framework',
          'Doctrine ORM for persistence',
          'Asynchronous messaging with RabbitMQ',
          'Databases mostly on PostgreSQL',
        ],
        tags: ['PHP', 'Symfony', 'Doctrine', 'RabbitMQ', 'PostgreSQL', 'REST API'],
      },
      {
        name: 'Docker',
        level: 'Solid',
        description:
          'I containerize my projects and work daily inside Docker environments.',
        points: [
          'Managing and orchestrating containers',
          'Developing directly inside Docker',
          'Setting up networks with docker-compose',
          'Some Nginx for reverse proxying',
        ],
        tags: ['Docker', 'Docker Compose', 'Nginx', 'Containers'],
      },
    ],
    toolsTitle: 'Tools & familiar with',
    toolsSubtitle: 'And also, technologies I work with regularly.',
    tools: [
      'Tailwind CSS',
      'TypeScript',
      'JavaScript',
      'Git',
      'GitLab / GitHub',
      'Nginx',
      'Linux',
      'Agile / Scrum',
    ],
  },
  projects: {
    eyebrow: 'Personal work',
    title: 'Side Projects',
    subtitle: 'A few personal projects. Click a card to check them out.',
    openInNewTab: 'Open in a new tab',
    objectiveLabel: 'Goal',
    comingSoon: 'Coming soon',
    items: [
      {
        title: 'Portfolio',
        description:
          'This portfolio, built with Vue 3, TypeScript and Tailwind CSS, and fully bilingual (FR / EN).',
        objective:
          'Putting my first project online and using it as a springboard to publish my future projects.',
        url: 'https://github.com',
        tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vue Router', 'i18n'],
      },
      {
        title: 'Online Quoridor',
        description:
          'A web app to play Quoridor in multiplayer, with a homemade AI offering several difficulty levels or matches against friends.',
        objective:
          'Learning Svelte by shipping a complete online multiplayer game, paired with a homemade AI featuring several difficulty levels.',
        status: 'incoming',
        tags: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Multiplayer', 'AI'],
      },
    ],
  },
  footer: {
    copyright: 'Portfolio',
    built: 'Built with Vue 3 & Tailwind CSS',
  },
}

export default en
