import type { MessageSchema } from '../types'

const en: MessageSchema = {
  nav: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
  },
  meta: {
    base: 'Portfolio',
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
  },
  language: {
    label: 'Language',
  },
  common: {
    newTab: 'new tab',
  },
  hero: {
    greeting: 'Hello',
    titleLead: 'Full-Stack Developer',
    intro:
      "Passionate about computer science for as long as I can remember, I love building clean, well-architected web applications. From reactive frontends to robust backends, I enjoy turning an idea into a real product. Always curious, I also explore DevOps to master the whole chain end to end.",
    ctaSkills: 'View my skills',
    ctaProjects: 'View my projects',
  },
  education: {
    title: 'Education',
    items: [
      {
        school: 'ESGI Lyon',
        location: 'Lyon 3',
        degree: "Master's in Software Architecture (work-study)",
        url: 'https://www.esgi.fr/programmes/architecture-logiciels.html',
        url_text: 'View the programme',
        years: '2023 - 2025',
      },
      {
        school: 'ESGI Lyon',
        location: 'Lyon 3',
        degree: "Bachelor's in Software Architecture (work-study)",
        url: 'https://www.esgi.fr/programmes/architecture-logiciels.html',
        url_text: 'View the programme',
        years: '2022 - 2023',
      },
      {
        school: 'ORT Lyon',
        location: 'Lyon 8',
        degree: 'BTS SNIR',
        details: 'Digital Systems, IT and Networks option',
        url: 'https://ort-france.fr/formation/bts-ciel-cybersecurite-informatique-et-reseaux-electronique/',
        url_text: 'View the programme',
        years: '2020 - 2022',
      },
      {
        school: 'Lycée La Martinière Monplaisir',
        location: 'Lyon 8',
        degree: 'STI2D Baccalaureate',
        details: 'AC option (Architecture and Construction)',
        years: '2016 - 2019',
      },
      {
        school: 'Collège de Craponne',
        location: 'Craponne (69290)',
        degree: 'Brevet des collèges',
      },
    ],
  },
  experience: {
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
    title: 'Skills',
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
    title: 'Projects',
    subtitle: 'A selection of personal projects, designed and built end to end.',
    objectiveLabel: 'Goal',
    stackLabel: 'Tech stack',
    viewCode: 'Source code',
    status: {
      inProgress: 'In development',
      incoming: 'Coming soon',
    },
    items: [
      {
        title: 'Stock-Easy',
        featured: true,
        description:
          'A web app for managing stock and offcuts in workshops that cut panels: the warehouse is drawn with the mouse, storage is organised across several levels, and the app computes production capacity from the available offcuts.',
        highlights: [
          'Interactive floor-plan editor on canvas (buildings, storage units, levels, doors)',
          'Field mode as a PWA, with an offline operation queue and idempotent writes',
          'QR labels, per-storage sorting rules and location suggestions',
          'Stock value statistics, Excel, CSV, DXF and PDF exports, Stripe subscriptions',
          'Automatically enforced layered architecture, GitHub Actions CI and Docker deployment',
        ],
        tags: ['Vue 3', 'Pinia', 'Konva', 'Tailwind CSS', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
      },
      {
        title: 'ChessCoach',
        featured: true,
        status: 'inProgress',
        description:
          'A chess coaching app: players link their Chess.com account, their games are imported and analysed by Stockfish, then they review them move by move or train on puzzles built from their own mistakes.',
        highlights: [
          'Server-side Stockfish analysis: move classification, evaluation graph, key moments and variations',
          "Puzzles generated from the player's own mistakes",
          '"Human-like" move suggestions with the Maia model, running in a dedicated PyTorch worker',
          'Heavy work handled by Celery tasks over RabbitMQ, with real-time progress pushed through Mercure (SSE)',
          'JWT authentication in HttpOnly cookies, email verification and personal data export (GDPR)',
        ],
        tags: ['Vue 3', 'Quasar', 'Pinia', 'Django', 'DRF', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Stockfish', 'PyTorch'],
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
      {
        title: 'Portfolio',
        description:
          'This portfolio, built with Vue 3, TypeScript and Tailwind CSS, and fully bilingual (FR / EN).',
        objective:
          'Putting my first project online and using it as a springboard to publish my future projects.',
        url: 'https://github.com/TimotheeSvg/portfolio',
        tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vue Router', 'i18n'],
      },
    ],
  },
  footer: {
    copyright: 'Portfolio',
    built: 'Built with Vue 3 & Tailwind CSS',
  },
}

export default en
