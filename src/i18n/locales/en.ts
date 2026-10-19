import type { MessageSchema } from '../types'
import { gestionStockImage } from '../caseImages'

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
    subtitle: 'A selection of projects, client work and personal, designed and built end to end.',
    objectiveLabel: 'Goal',
    stackLabel: 'Tech stack',
    viewCode: 'Source code',
    viewCaseStudy: 'Read the case study',
    status: {
      inProgress: 'In development',
      incoming: 'Coming soon',
    },
    items: [
      {
        title: 'Stock management and production planning software',
        context: 'Freelance project · Plastic cutting workshop (SME, Lyon area)',
        featured: true,
        description:
          "Custom business software, designed, built and deployed on my own: warehouse floor plan, materials tracked with QR codes, an offline field app, and nesting of the parts to cut on the offcuts actually in stock. In use at the client's workshop.",
        highlights: [
          'Interactive canvas floor plan editor (buildings, storage units, floors, doors)',
          'Field app as a PWA, with an offline operation queue',
          'QR labels, dimensioned drawings exported to DXF, SVG and PDF, photo-based measurement (OpenCV)',
          'Automatic nesting of DXF parts on the sheets and offcuts in stock',
          'Heavy computations in Celery workers, Docker deployment, GitHub Actions CI',
        ],
        tags: ['Vue 3', 'Pinia', 'Konva', 'Tailwind CSS', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
        gallery: [
          { ...gestionStockImage('tableau-de-bord'), alt: 'Warehouse dashboard' },
          { ...gestionStockImage('plan-entrepot'), alt: 'Warehouse plan with its storage units' },
          { ...gestionStockImage('appli-terrain-mobile'), alt: 'Field app on a phone', mobile: true },
        ],
        caseStudy: 'gestion-stock',
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
  caseStudy: {
    back: '← All projects',
    stackLabel: 'Tech stack',
    enlarge: 'Enlarge image',
    notFound: 'This case study does not exist.',
  },
  caseStudies: {
    'gestion-stock': {
      title: 'Stock management and production planning software',
      context: 'Freelance project · Plastic cutting workshop (SME, Lyon area)',
      period: 'Delivered in September 2026',
      intro:
        "Custom business software for a workshop that cuts parts out of plastic sheets. I designed, built and deployed it on my own, from gathering the requirements to going live. It is now in use at the client's workshop.",
      sections: [
        {
          title: 'The need',
          paragraphs: [
            'Quickly find the material and offcuts in stock, and plan the cutting of parts from what is actually available. An offcut is only worth something if you know it exists, where it is stored and what you can cut from it.',
          ],
        },
        {
          title: 'All the stock at a glance',
          paragraphs: [
            'The dashboard sums up the warehouse: storage units, references, parts and materials. The inventory lists every part with its dimensions, material, thickness and exact location, filterable by material and thickness.',
          ],
          figures: [
            {
              ...gestionStockImage('tableau-de-bord'),
              alt: 'Warehouse dashboard',
              caption: 'The warehouse dashboard.',
            },
            {
              ...gestionStockImage('stock'),
              alt: 'Inventory of parts in stock',
              caption: 'The inventory, filterable by material and thickness.',
            },
          ],
        },
        {
          title: 'A warehouse drawn to scale',
          paragraphs: [
            'The workshop plan is drawn in the browser: buildings, partitions, doors and storage units, across several floors. Every part is stored in a storage unit, on a given level and in a specific section.',
          ],
          figures: [
            {
              ...gestionStockImage('plan-entrepot'),
              alt: 'Warehouse plan editor with five storage units',
              caption: 'The plan editor, drawn on a Konva canvas.',
            },
          ],
        },
        {
          title: 'One record per part',
          paragraphs: [
            'Dimensions, material, thickness, location and a dimensioned drawing exportable to DXF, SVG or PDF. A QR label stuck on the part reopens its record with a single scan. Importing a DXF pre-fills the record, and a part can also be measured from a photo using a printed marker (OpenCV).',
          ],
          figures: [
            {
              ...gestionStockImage('fiche-piece-etiquette-qr'),
              alt: 'Part record with its dimensioned drawing and QR label',
              caption: 'A part record: dimensioned drawing and QR label.',
            },
          ],
        },
        {
          title: 'On the shop floor, even offline',
          paragraphs: [
            'A mobile app (PWA) is used to store, take out and scan parts in the workshop. Operations made without a network are queued and sent as soon as the connection is back.',
          ],
          figures: [
            {
              ...gestionStockImage('appli-terrain-mobile'),
              alt: 'Home screen of the field app on a phone',
              caption: 'The field app home screen.',
              mobile: true,
            },
          ],
        },
        {
          title: 'Planning cuts on offcuts',
          paragraphs: [
            'You drop in the DXF drawings of the parts to produce. The software nests them on the sheets and offcuts actually in stock, aiming either for the fewest sheets started or for the least waste, then tells you which offcuts to take off the shelf and where to find them.',
          ],
          figures: [
            {
              ...gestionStockImage('imbrication-sur-chute'),
              alt: 'Five parts nested on a PMMA offcut',
              caption: 'Five parts nested on a 740 × 130 mm offcut.',
            },
            {
              ...gestionStockImage('chutes-a-prendre'),
              alt: 'List of offcuts to collect with their location and QR label',
              caption:
                'The offcuts to collect before cutting, with their location on the plan and their QR label.',
            },
          ],
        },
        {
          title: 'Stock in figures',
          paragraphs: [
            'Stock value, areas and volumes by material and thickness, calculated from the price per m² of each thickness.',
          ],
          figures: [
            {
              ...gestionStockImage('stats-valeur-stock'),
              alt: 'Stock value statistics by material',
              caption: 'Statistics by material and thickness.',
            },
          ],
        },
        {
          title: 'Under the hood',
          bullets: [
            'Front end: Vue 3, Pinia, Tailwind CSS, and Konva for the plan.',
            'API: Django REST Framework and PostgreSQL.',
            'Heavy computations (nesting, photo measurement) in dedicated Celery workers, with Redis, to keep the interface responsive.',
            'Docker deployment on a hardened Linux server (HTTPS, firewall), automated tests and GitHub Actions continuous integration.',
          ],
        },
      ],
      stack: [
        'Vue 3',
        'Pinia',
        'Tailwind CSS',
        'Konva',
        'Django',
        'DRF',
        'PostgreSQL',
        'Celery',
        'Redis',
        'OpenCV',
        'Docker',
        'GitHub Actions',
      ],
      note: 'Screenshots taken on a demo instance with fictitious data.',
      cta: {
        text: 'Need a management, stock or production tool tailored to your workshop?',
        linkLabel: 'Contact me on LinkedIn',
        url: 'https://www.linkedin.com/in/timothee-sauvage/',
      },
    },
  },
  footer: {
    copyright: 'Portfolio',
    built: 'Built with Vue 3 & Tailwind CSS',
  },
}

export default en
