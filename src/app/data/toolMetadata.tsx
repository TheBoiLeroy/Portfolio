import { ReactElement } from 'react';
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaClock,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFlask,
  SiJavascript,
  SiFlutter,
  SiFirebase,
  SiDjango,
  SiPostgresql,
  SiSpotify,
  SiAgora,
  SiPostman,
  SiGithub,
  SiTypescript,
  SiSqlite,
  SiDocker,
  SiSlack,
  SiJira,
  SiBitbucket,
  SiAxios,
} from 'react-icons/si';

export const toolMetadata: Record<
  string,
  { type: 'frontend' | 'backend'; color: string; icon: ReactElement }
> = {
  // Frontend
  React: {
    type: 'frontend',
    color: '#61dafb',
    icon: <FaReact />,
  },
  TailwindCSS: {
    type: 'frontend',
    color: '#38bdf8',
    icon: <SiTailwindcss />,
  },
  JavaScript: {
    type: 'frontend',
    color: '#f7df1e',
    icon: <SiJavascript />,
  },
  HTML5: {
    type: 'frontend',
    color: '#e34f26',
    icon: <FaHtml5 />,
  },
  CSS3: {
    type: 'frontend',
    color: '#1572b6',
    icon: <FaCss3Alt />,
  },
  Flutter: {
    type: 'frontend',
    color: '#02569B',
    icon: <SiFlutter />,
  },
  Spotify: {
    type: 'frontend',
    color: '#1DB954',
    icon: <SiSpotify />,
  },
  Postman: {
    type: 'frontend',
    color: '#FF6C37',
    icon: <SiPostman />,
  },
  GitHub: {
    type: 'frontend',
    color: '#181717',
    icon: <SiGithub />,
  },
  Slack: {
    type: 'frontend',
    color: '#4A154B',
    icon: <SiSlack />,
  },

  // Backend
  NodeJS: {
    type: 'backend',
    color: '#3c873a',
    icon: <FaNodeJs />,
  },
  Java: {
    type: 'backend',
    color: '#f89820',
    icon: <FaJava />,
  },
  Flask: {
    type: 'backend',
    color: '#000000',
    icon: <SiFlask />,
  },
  Python: {
    type: 'backend',
    color: '#3776ab',
    icon: <FaPython />,
  },
  Firebase: {
    type: 'backend',
    color: '#FFCA28',
    icon: <SiFirebase />,
  },
  Django: {
    type: 'backend',
    color: '#092E20',
    icon: <SiDjango />,
  },
  PostgreSQL: {
    type: 'backend',
    color: '#336791',
    icon: <SiPostgresql />,
  },
  Agora: {
    type: 'backend',
    color: '#00AFF0',
    icon: <SiAgora />,
  },
  TypeScript: {
    type: 'backend',
    color: '#3178C6',
    icon: <SiTypescript />,
  },
  SQLite: {
    type: 'backend',
    color: '#003B57',
    icon: <SiSqlite />,
  },
  Docker: {
    type: 'backend',
    color: '#2496ED',
    icon: <SiDocker />,
  },
  Jira: {
    type: 'backend',
    color: '#0052CC',
    icon: <SiJira />,
  },
  Bitbucket: {
    type: 'backend',
    color: '#2684FF',
    icon: <SiBitbucket />,
  },
  Axios: {
    type: 'backend',
    color: '#5A29E4',
    icon: <SiAxios />,
  },
  Cron: {
    type: 'backend',
    color: '#555555',
    icon: <FaClock />, // fallback icon for Cron
  },
};