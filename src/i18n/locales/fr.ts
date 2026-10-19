import type { MessageSchema } from '../types'
import { gestionStockImage } from '../caseImages'

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
    subtitle:
      'Une sélection de projets, en mission ou personnels, conçus et développés de bout en bout.',
    objectiveLabel: 'Objectif',
    stackLabel: 'Stack technique',
    viewCode: 'Code source',
    viewCaseStudy: "Voir l'étude de cas",
    status: {
      inProgress: 'En développement',
      incoming: 'À venir',
    },
    items: [
      {
        title: "Logiciel de gestion de stock et d'aide à la production",
        context: 'Mission freelance · Atelier de découpe plastique (PME, région lyonnaise)',
        featured: true,
        description:
          "Logiciel métier sur mesure, conçu, développé et mis en production seul : plan d'entrepôt, matière suivie par QR code, application terrain hors ligne et imbrication des pièces à découper sur les chutes réellement en stock. En service chez le client.",
        highlights: [
          'Éditeur de plan interactif sur canvas (bâtiments, stockages, étages, portes)',
          "Application terrain en PWA, avec une file d'opérations hors ligne",
          'Étiquettes QR, plans cotés exportables en DXF, SVG et PDF, cotation par photo (OpenCV)',
          'Imbrication automatique des pièces DXF sur les plaques et les chutes en stock',
          'Calculs lourds dans des workers Celery, déploiement Docker, CI GitHub Actions',
        ],
        tags: ['Vue 3', 'Pinia', 'Konva', 'Tailwind CSS', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
        gallery: [
          { ...gestionStockImage('tableau-de-bord'), alt: "Tableau de bord de l'entrepôt" },
          { ...gestionStockImage('plan-entrepot'), alt: "Plan de l'entrepôt avec ses stockages" },
          { ...gestionStockImage('appli-terrain-mobile'), alt: 'Application terrain sur téléphone', mobile: true },
        ],
        caseStudy: 'gestion-stock',
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
  caseStudy: {
    back: '← Tous les projets',
    stackLabel: 'Stack technique',
    enlarge: "Agrandir l'image",
    notFound: "Cette étude de cas n'existe pas.",
  },
  caseStudies: {
    'gestion-stock': {
      title: "Logiciel de gestion de stock et d'aide à la production",
      context: 'Mission freelance · Atelier de découpe plastique (PME, région lyonnaise)',
      period: 'Livré en septembre 2026',
      intro:
        "Un logiciel métier sur mesure pour un atelier qui découpe des pièces dans des plaques de plastique. Je l'ai conçu, développé et mis en production seul, du recueil du besoin au déploiement. Il est aujourd'hui en service chez le client.",
      sections: [
        {
          title: 'Le besoin',
          paragraphs: [
            "Retrouver rapidement la matière et les chutes en stock, et préparer la découpe des pièces à partir de ce qui est réellement disponible. Une chute n'a de valeur que si l'on sait qu'elle existe, où elle est rangée et ce qu'on peut y découper.",
          ],
        },
        {
          title: "Tout le stock, en un coup d'œil",
          paragraphs: [
            "Le tableau de bord résume l'entrepôt : stockages, références, pièces et matières. L'inventaire liste chaque pièce avec ses cotes, sa matière, son épaisseur et son emplacement exact, filtrable par matière et par épaisseur.",
          ],
          figures: [
            {
              ...gestionStockImage('tableau-de-bord'),
              alt: "Tableau de bord de l'entrepôt",
              caption: "Le tableau de bord de l'entrepôt.",
            },
            {
              ...gestionStockImage('stock'),
              alt: 'Inventaire des pièces en stock',
              caption: "L'inventaire, filtrable par matière et par épaisseur.",
            },
          ],
        },
        {
          title: "Un entrepôt dessiné à l'échelle",
          paragraphs: [
            "Le plan de l'atelier se dessine dans le navigateur : bâtiments, cloisons, portes et stockages, sur plusieurs étages. Chaque pièce est rangée dans un stockage, à un niveau et dans une section précise.",
          ],
          figures: [
            {
              ...gestionStockImage('plan-entrepot'),
              alt: "Éditeur de plan de l'entrepôt avec cinq stockages",
              caption: "L'éditeur de plan, dessiné sur un canvas Konva.",
            },
          ],
        },
        {
          title: 'Une fiche par pièce',
          paragraphs: [
            "Cotes, matière, épaisseur, emplacement et plan coté exportable en DXF, SVG ou PDF. Une étiquette QR collée sur la pièce rouvre sa fiche d'un simple scan. L'import d'un DXF pré-remplit la fiche, et une pièce peut aussi être cotée à partir d'une photo, grâce à un marqueur imprimé (OpenCV).",
          ],
          figures: [
            {
              ...gestionStockImage('fiche-piece-etiquette-qr'),
              alt: "Fiche d'une pièce avec son plan coté et son étiquette QR",
              caption: "La fiche d'une pièce : plan coté et étiquette QR.",
            },
          ],
        },
        {
          title: 'Sur le terrain, même hors ligne',
          paragraphs: [
            "Une application mobile (PWA) sert à ranger, sortir et scanner les pièces dans l'atelier. Les opérations faites sans réseau sont mises en file d'attente et envoyées dès que la connexion revient.",
          ],
          figures: [
            {
              ...gestionStockImage('appli-terrain-mobile'),
              alt: "Accueil de l'application terrain sur téléphone",
              caption: "L'accueil de l'application terrain.",
              mobile: true,
            },
          ],
        },
        {
          title: 'Préparer la découpe sur les chutes',
          paragraphs: [
            'On dépose les plans DXF des pièces à produire. Le logiciel les imbrique sur les plaques et les chutes réellement en stock, en visant au choix le moins de plaques entamées ou le moins de chute, puis indique quelles chutes sortir du rayon et où les trouver.',
          ],
          figures: [
            {
              ...gestionStockImage('imbrication-sur-chute'),
              alt: 'Cinq pièces imbriquées sur une chute de PMMA',
              caption: 'Cinq pièces imbriquées sur une chute de 740 × 130 mm.',
            },
            {
              ...gestionStockImage('chutes-a-prendre'),
              alt: 'Liste des chutes à sortir avec leur emplacement et leur étiquette QR',
              caption:
                'Les chutes à sortir avant la découpe, avec leur emplacement sur le plan et leur étiquette QR.',
            },
          ],
        },
        {
          title: 'Le stock en chiffres',
          paragraphs: [
            'Valeur du stock, surfaces et volumes par matière et par épaisseur, calculés à partir du prix au m² de chaque épaisseur.',
          ],
          figures: [
            {
              ...gestionStockImage('stats-valeur-stock'),
              alt: 'Statistiques de valeur du stock par matière',
              caption: 'Les statistiques par matière et par épaisseur.',
            },
          ],
        },
        {
          title: 'Sous le capot',
          bullets: [
            'Front : Vue 3, Pinia, Tailwind CSS, et Konva pour le plan.',
            'API : Django REST Framework et PostgreSQL.',
            "Calculs lourds (imbrication, mesure photo) dans des workers Celery dédiés, avec Redis, pour garder l'interface fluide.",
            'Mise en production Docker sur un serveur Linux sécurisé (HTTPS, pare-feu), tests automatisés et intégration continue GitHub Actions.',
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
      note: 'Captures réalisées sur une instance de démonstration, avec des données fictives.',
      cta: {
        text: "Vous avez besoin d'un outil de gestion, de stock ou de production adapté à votre atelier ?",
        linkLabel: 'Me contacter sur LinkedIn',
        url: 'https://www.linkedin.com/in/timothee-sauvage/',
      },
    },
  },
  footer: {
    copyright: 'Portfolio',
    built: 'Développé avec Vue 3 & Tailwind CSS',
  },
}

export default fr
