import { ReactElement } from 'react';
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaClock,
  FaServer,
  FaHdd,
  FaNetworkWired,
  FaWifi,

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
  SiLinux,
  SiRaspberrypi,
  SiZdf,
  SiMysql,
  SiOpenai,
} from 'react-icons/si';
import { FaBrain, FaCloud, FaLock } from 'react-icons/fa';

export const toolMetadata: Record<
  string,
  { type: 'frontend' | 'backend' | 'infra' | 'hardware'; color: string; icon: ReactElement }
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
  // Infrastructure / Systems
Linux: {
  type: "infra",
  color: "#FCC624",
  icon: <SiLinux />,
},

FreeNAS: {
  type: "infra",
  color: "#00A3E0",
  icon: <FaServer />,
},

ZFS: {
  type: "infra",
  color: "#2E8BC0",
  icon: <SiZdf />,
},

RAID: {
  type: "infra",
  color: "#6B7280",
  icon: <FaHdd />,
},

Samba: {
  type: "infra",
  color: "#6B4FBB",
  icon: <FaNetworkWired />,
},

Networking: {
  type: "infra",
  color: "#0EA5E9",
  icon: <FaNetworkWired />,
},

// Hardware
"Raspberry Pi": {
  type: "hardware",
  color: "#C51A4A",
  icon: <SiRaspberrypi />,
},
WiFi: {
  type: "hardware",
  color: "#2563EB",
  icon: <FaWifi />,
},
TrueNAS: {
  type: "infra",
  color: "#2F80ED",
  icon: <FaServer />,
},
"Self-hosted": {
  type: "infra",
  color: "#34D399",
  icon: <FaLock />,
},
MySQL: {
  type: "backend",
  color: "#4479A1",
  icon: <SiMysql />,
},
OpenAI: {
  type: "backend",
  color: "#A78BFA",
  icon: <SiOpenai />,
},
Plaid: {
  type: "backend",
  color: "#60A5FA",
  icon: <FaCloud />,
},
"Facial Recognition": {
  type: "backend",
  color: "#F59E0B",
  icon: <FaBrain />,
},
};
