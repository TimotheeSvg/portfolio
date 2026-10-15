import type { MessageSchema } from '../types'

const fr: MessageSchema = {
  nav: {
    home: 'Accueil',
    skills: 'Compétences',
    projects: 'Projets',
  },
  meta: {
    base: 'Portfolio',
    home: 'Accueil',
    skills: 'Compétences',
    projects: 'Projets',
  },
  language: {
    label: 'Langue',
  },
  common: {
    newTab: 'nouvel onglet',
  },
  hero: {
    greeting: 'Bonjour',
    titleLead: 'Développeur Full-Stack',
    intro:
      "Passionné d'informatique, j'aime concevoir des applications web propres et bien architecturées. Du frontend au backend, je prends plaisir à transformer une idée en produit concret. Toujours curieux, j'explore aussi le DevOps pour maîtriser la chaîne de bout en bout.",
    ctaSkills: 'Voir mes compétences',
    ctaProjects: 'Voir mes projets',
  },
  education: {
    title: 'Formation',
    items: [
      {
        school: 'ESGI Lyon',
        location: 'Lyon 3',
        degree: 'Master Architecture Logicielle en alternance',
        url: 'https://www.esgi.fr/programmes/architecture-logiciels.html',
        url_text: 'Voir la formation',
        years: '2023 - 2025',
      },
      {
        school: 'ESGI Lyon',
        location: 'Lyon 3',
        degree: 'Bachelor Architecture Logicielle en alternance',
        url: 'https://www.esgi.fr/programmes/architecture-logiciels.html',
        url_text: 'Voir la formation',
        years: '2022 - 2023',
      },
      {
        school: 'ORT Lyon',
        location: 'Lyon 8',
        degree: 'BTS SNIR',
        details: 'Systèmes Numériques option Informatique et Réseaux',
        url: 'https://ort-france.fr/formation/bts-ciel-cybersecurite-informatique-et-reseaux-electronique/',
        url_text: 'Voir la formation',
        years: '2020 - 2022'
      },
      {
        school: 'Lycée La Martinière Monplaisir',
        location: 'Lyon 8',
        degree: 'Bac STI2D',
        details: 'Option AC (Architecture et Construction)',
        years: '2016 - 2019'
      },
      {
        school: 'Collège de Craponne',
        location: 'Craponne (69290)',
        degree: 'Brevet des collèges',
      },
    ],
  },
  experience: {
    title: 'Expérience',
    subtitle: "Ce sur quoi j'ai travaillé en entreprise.",
    items: [
      {
        role: 'Développeur Full-Stack (alternance)',
        company: 'Alternance',
        period: '3 ans',
        description:
          "Trois ans d'alternance en développement web, principalement sur Vue.js et Symfony, avec une participation à la réalisation full-stack de plusieurs projets clients.",
        highlights: [
          'Aide à la réalisation full-stack du site Maslow',
          "Développement de l'espace client Valority",
          'Utilisation de Vue.js sur plusieurs frameworks : Nuxt, Quasar',
          'Bases DevOps : Docker, Kubernetes, Nginx',
        ],
        stack: ['Vue.js', 'Nuxt', 'Quasar', 'Symfony', 'Docker', 'Kubernetes', 'Nginx'],
      },
      {
        role: 'Développeur web',
        company: 'Apsaroke',
        period: 'Juin 2021 · Stage',
        description:
          "Conception et développement d'une application WebDev de gestion de copropriétés (partage de documents).",
        highlights: [
          'Gestion complète du projet réalisée en autonomie',
        ],
        stack: ['WebDev'],
      },
    ],
  },
  skills: {
    title: 'Compétences',
    subtitle: 'Mes domaines de prédilection, et les outils que je manie au quotidien.',
    levelLabel: 'Niveau',
    featured: [
      {
        name: 'Vue.js',
        level: 'Confirmé',
        description:
          "Mon cœur de métier côté frontend. Je conçois des interfaces réactives et maintenables, sur Vue 2 comme Vue 3.",
        points: [
          'Vue 2 et Vue 3, à l\'aise avec les deux',
          'Composition API et Options API',
          'Utilisé avec les frameworks Nuxt et Quasar',
          'Style majoritairement en Tailwind CSS, sinon CSS',
        ],
        tags: ['Vue 3', 'Vue 2', 'Composition API', 'Options API', 'Nuxt', 'Quasar', 'Tailwind CSS'],
      },
      {
        name: 'Symfony / PHP',
        level: 'Intermédiaire',
        description:
          "Mon socle backend : des APIs et applications robustes en PHP moderne, principalement avec Symfony.",
        points: [
          'PHP dans ses versions récentes',
          'Symfony comme framework principal',
          'ORM Doctrine pour la persistance',
          'Messagerie asynchrone avec RabbitMQ',
          'Base de données majoritairement PostgreSQL',
        ],
        tags: ['PHP', 'Symfony', 'Doctrine', 'RabbitMQ', 'PostgreSQL', 'API REST'],
      },
      {
        name: 'Docker',
        level: 'Bon niveau',
        description:
          "Je conteneurise mes projets et travaille au quotidien dans des environnements Docker.",
        points: [
          'Gestion et orchestration de conteneurs',
          'Développement directement sous Docker',
          'Mise en place de réseaux avec docker-compose',
          'Un peu de Nginx pour le reverse proxy',
        ],
        tags: ['Docker', 'Docker Compose', 'Nginx', 'Conteneurs'],
      },
    ],
    toolsTitle: 'Outils & familier',
    toolsSubtitle: 'Et aussi, des technologies que je côtoie régulièrement.',
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
    title: 'Projets',
    subtitle: 'Une sélection de projets personnels, conçus et développés de bout en bout.',
    objectiveLabel: 'Objectif',
    stackLabel: 'Stack technique',
    viewCode: 'Code source',
    status: {
      inProgress: 'En développement',
      incoming: 'À venir',
    },
    items: [
      {
        title: 'Stock-Easy',
        featured: true,
        description:
          "Application web de gestion de stock et de chutes pour les ateliers qui débitent des panneaux : l'entrepôt est dessiné à la souris, les stockages sont organisés sur plusieurs étages et l'application calcule la capacité de production à partir des chutes disponibles.",
        highlights: [
          'Éditeur de plan interactif sur canvas (bâtiments, stockages, étages, portes)',
          "Mode terrain en PWA, avec une file d'opérations hors ligne et des écritures idempotentes",
          "Étiquettes QR, règles de tri par stockage et suggestion d'emplacement",
          'Statistiques de valeur du stock, exports Excel, CSV, DXF et PDF, abonnements Stripe',
          'Architecture en couches vérifiée automatiquement, CI GitHub Actions et déploiement Docker',
        ],
        tags: ['Vue 3', 'Pinia', 'Konva', 'Tailwind CSS', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
      },
      {
        title: 'ChessCoach',
        featured: true,
        status: 'inProgress',
        description:
          "Application de coaching d'échecs : le joueur relie son compte Chess.com, ses parties sont importées et analysées par Stockfish, puis il les revoit coup par coup ou s'entraîne sur des puzzles tirés de ses propres erreurs.",
        highlights: [
          "Analyse Stockfish côté serveur : classification des coups, courbe d'évaluation, moments clés et variantes",
          'Puzzles générés à partir des erreurs du joueur',
          'Suggestions de coups « humains » avec le modèle Maia, exécuté dans un worker PyTorch dédié',
          'Calculs confiés à des tâches Celery via RabbitMQ, progression envoyée en temps réel avec Mercure (SSE)',
          'Authentification JWT en cookies HttpOnly, vérification par e-mail et export des données (RGPD)',
        ],
        tags: ['Vue 3', 'Quasar', 'Pinia', 'Django', 'DRF', 'Celery', 'RabbitMQ', 'PostgreSQL', 'Stockfish', 'PyTorch'],
      },
      {
        title: 'Quoridor en ligne',
        description:
          'Une application web pour jouer au Quoridor en multijoueur, avec une IA maison proposant plusieurs niveaux de difficulté ou des parties entre amis.',
        objective:
          'Découvrir Svelte en mettant en ligne un jeu multijoueur complet, doublé d\'une IA maison à plusieurs niveaux de difficulté.',
        status: 'incoming',
        tags: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Multijoueur', 'IA'],
      },
      {
        title: 'Portfolio',
        description:
          'Ce portfolio, développé en Vue 3 avec TypeScript et Tailwind CSS, et entièrement bilingue (FR / EN).',
        objective:
          'Mettre en ligne mon premier projet et m\'en servir de tremplin pour publier mes futurs projets.',
        url: 'https://github.com/TimotheeSvg/portfolio',
        tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vue Router', 'i18n'],
      },
    ],
  },
  footer: {
    copyright: 'Portfolio',
    built: 'Développé avec Vue 3 & Tailwind CSS',
  },
}

export default fr
