import lejetonImg    from '../assets/projets/lejeton4.png'
import lejeton2Img   from '../assets/projets/lejeton2.jpg'
import lejeton3Img   from '../assets/projets/lejeton3.png'

import secondChapitreImg  from '../assets/projets/secondchapitre1.png'
import secondChapitre2Img from '../assets/projets/secondchapitre2.png'
import secondChapitre3Img from '../assets/projets/secondchapitre3.png'

import dofusImg  from '../assets/projets/dofus1.png'
import dofus2Img from '../assets/projets/dofus2.png'

import esportImg  from '../assets/projets/esport.png'
import esport2Img from '../assets/projets/esport2.png'

import valorantImg  from '../assets/projets/valorant1.png'
import valorant2Img from '../assets/projets/valorant2.png'

import musicImg  from '../assets/projets/music4.png'
import music1Img from '../assets/projets/music1.png'
import music2Img from '../assets/projets/music2.png'
import music3Img from '../assets/projets/music3.png'

import nextjsIcon     from '../assets/nextjs_icon_dark.svg'
import typescriptIcon from '../assets/typescript.svg'
import socketioIcon   from '../assets/socketio-icon-light.svg'
import tailwindIcon   from '../assets/tailwindcss.svg'
import csharpIcon     from '../assets/csharp.svg'
import dotnetIcon     from '../assets/dotnet.svg'
import flutterIcon    from '../assets/flutter.svg'
import postgresIcon   from '../assets/postgresql.svg'
import dockerIcon     from '../assets/docker.svg'
import reactIcon      from '../assets/react_light.svg'
import expressIcon    from '../assets/expressjs.svg'
import mongodbIcon    from '../assets/mongodb-icon-light.svg'
import angularIcon    from '../assets/angular.svg'
import jsIcon         from '../assets/javascript.svg'
import fastapiIcon    from '../assets/fastapi.svg'
import expoIcon       from '../assets/expo.svg'

export const techIcons: Record<string, string> = {
  'Next.js':    nextjsIcon,
  'TypeScript': typescriptIcon,
  'Socket.IO':  socketioIcon,
  'Tailwind':   tailwindIcon,
  'C#':         csharpIcon,
  '.NET':       dotnetIcon,
  'Flutter':    flutterIcon,
  'PostgreSQL': postgresIcon,
  'Docker':     dockerIcon,
  'React':      reactIcon,
  'Express':    expressIcon,
  'MongoDB':    mongodbIcon,
  'Angular':    angularIcon,
  'JavaScript': jsIcon,
  'FastAPI':    fastapiIcon,
  'Expo':       expoIcon,
}

export type ProjectSection = {
  title: string
  description: string
  techs: string[]
}

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  techs: string[]
  images: string[]
  sections: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: 'le-jeton',
    title: 'LeJeton',
    description: 'Application mobile répertoriant les points de vente des jetons de la Monnaie de Paris.',
    image: lejetonImg,
    techs: ['Next.js', 'TypeScript', 'Socket.IO', 'Tailwind', 'C#', '.NET', 'Flutter', 'PostgreSQL', 'Docker'],
    images: [lejeton2Img, lejeton3Img],
    sections: [
      {
        title: 'Back-office',
        description: "Interface d'administration permettant la gestion des jetons et des sites touristiques (CRUD), des utilisateurs et des demandes soumises par la communauté.",
        techs: ['Next.js', 'TypeScript', 'Tailwind'],
      },
      {
        title: 'Application mobile',
        description: "Application permettant aux collectionneurs de localiser les points de vente des jetons, les ajouter à leur collection et de proposer d'ajouter des jetons manquants sur la carte.",
        techs: ['Flutter'],
      },
      {
        title: 'Back-end',
        description: 'Architecture microservices avec BFF, envoi des notifications via WebSockets, déployé sous Docker.',
        techs: ['C#', '.NET', 'PostgreSQL', 'Docker', 'Socket.IO'],
      },
    ],
  },
  {
    slug: 'second-chapitre',
    title: 'Second Chapitre',
    description: "Projet de reprise de livres d'occasion permettant d'obtenir une estimation du prix de leurs livres.",
    image: secondChapitreImg,
    techs: ['Next.js', 'TypeScript', 'Tailwind', 'C#', '.NET', 'PostgreSQL', 'Docker'],
    images: [secondChapitreImg, secondChapitre2Img, secondChapitre3Img],
    sections: [
      {
        title: 'Site web',
        description: "Plateforme web permettant d'estimer le prix de reprise de leurs livres en scannant leurs codes-barres, de gérer les dépôts des colis, visualiser le suivi leur colis.",
        techs: ['Next.js', 'TypeScript', 'Tailwind'],
      },
      {
        title: 'Back-end',
        description: 'Architecture microservices avec BFF, gestion multi-tenant, déployé sous Docker.',
        techs: ['C#', '.NET', 'PostgreSQL', 'Docker'],
      },
    ],
  },
  {
    slug: 'dofus-group-finder',
    title: 'Dofus Group Finder',
    description: 'Projet facilitant la mise en relation de joueurs Dofus afin de former des groupes.',
    image: dofusImg,
    techs: ['React', 'TypeScript', 'Express', 'MongoDB', 'Docker', 'Socket.IO'],
    images: [dofusImg, dofus2Img],
    sections: [
      {
        title: 'Front-end',
        description: 'Plateforme web permettant aux joueurs de créer, rechercher et rejoindre des groupes pour les donjons, quêtes ou autres activités en jeu. Un chat est également intégré pour faciliter la communication au sein des groupes.',
        techs: ['React', 'TypeScript', 'Socket.IO'],
      },
      {
        title: 'Back-end',
        description: 'API REST permettant la gestion des groupes en temps réel, avec persistance des données MongoDB, déployé sous Docker.',
        techs: ['Express', 'MongoDB', 'Docker', ],
      },
    ],
  },
  {
    slug: 'esport-map',
    title: 'Esport 3D Map',
    description: 'Globe interactif répertoriant les clubs esport, leurs équipes et les données de matchs.',
    image: esportImg,
    techs: ['Angular', 'C#', 'PostgreSQL'],
    images: [esport2Img],
    sections: [
      {
        title: 'Front-end',
        description: 'Globe 3D interactif via Mapbox GL JS permettant de visualiser les plus grands clubs esport, leurs équipes et leurs matchs à travers le monde.',
        techs: ['Angular'],
      },
      {
        title: 'Back-end',
        description: 'API consommant les données Liquipedia (équipes, joueurs, matchs passés et à venir).',
        techs: ['C#', 'PostgreSQL'],
      },
    ],
  },
  {
    slug: 'valorant-tracker',
    title: 'Valorant Tracker',
    description: 'Bot Discord fournissant les statistiques détaillées des joueurs Valorant',
    image: valorantImg,
    techs: ['JavaScript', 'FastAPI'],
    images: [valorantImg, valorant2Img],
    sections: [
      {
        title: 'Bot Discord',
        description: "Bot permettant aux joueurs de lier leur compte Valorant et de recevoir automatiquement un récapitulatif détaillé de leurs parties, ainsi que leurs statistiques globales.",
        techs: ['JavaScript'],
      },
      {
        title: 'Back-end',
        description: "Batch s'exécutant à intervalle régulier pour détecter les parties terminées via l'API publique Valorant.",
        techs: ['FastAPI'],
      },
    ],
  },
  {
    slug: 'find-your-music',
    title: 'Find your Music',
    description: "Application mobile répertoriant les événements musicaux en France.",
    image: musicImg,
    techs: ['C#', 'PostgreSQL', 'React', 'Expo'],
    images: [music1Img, music2Img, music3Img],
    sections: [
      {
        title: 'Application mobile',
        description: "Application mobile répertoriant les événements musicaux en France. Les utilisateurs peuvent ajouter des événements en favoris et recevoir des notifications pour les événements favoris arrivant bientôt.",
        techs: ['React', 'Expo'],
      },
      {
        title: 'Back-end',
        description: "API agrégeant et normalisant les données de Shotgun et Dice afin de garantir une cohérence optimale pour l'affichage.",
        techs: ['C#', 'PostgreSQL'],
      },
    ],
  },
]
