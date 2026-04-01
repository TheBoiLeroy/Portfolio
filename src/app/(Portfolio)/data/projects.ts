export type Project = {
  title: string;
  description: string;
  usefulLinks: string[];
  tdl?:string[];
  images: { src: string; alt: string }[];
  tools: string[];
  linkToProject?: string;
  schematics?: { dsc: string; src: string; alt: string }[]; // optional
  partsList?: { name: string; quantity?: number; link?: string }[]; // optional
  
};

export const projects: Project[] = [
  {
    title: "Open Manet network with Rasbperry Pi's",
    description:
      "A mobile ad-hoc network (MANET) using Raspberry Pi's and WiFi dongles to create a decentralized communication system without relying on traditional infrastructure. The project involves setting up multiple Raspberry Pi devices to form a mesh network, allowing them to communicate directly with each other over WiFi. This setup is particularly useful in scenarios where conventional networks are unavailable, such as in remote areas or during emergencies. The MANET was configured to enable dynamic routing, ensuring that data packets could find the most efficient path through the network based on current conditions. This project provided hands-on experience with networking concepts, Linux system administration, and the challenges of maintaining connectivity in a decentralized environment.",
    usefulLinks: ["https://github.com/OpenMANET"],
    partsList: [
      {
        name: "Raspberry Pi 4 Model B (4GB or 8GB RAM)",
      },{
        name: "MicroSD Card (16GB or larger)",
      },{
        name: "USB WiFi Adapter (compatible with Raspberry Pi)",
      },{
        name: "Power Supply for Raspberry Pi",
      },{
        name:"Wio-WM6180 Wi-Fi HaLow mini-PCIe Module affiliate link:",
        link: "https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html?sensecap_affiliate=z5zfUKg&referring_service=link",
      },
      {name:"WM1302 Raspberry Pi Hat affl link:"
        ,link:"https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html?sensecap_affiliate=z5zfUKg&referring_service=link"
      },
    ],
    schematics: [
      {
        dsc: "Current Raspberry Pi build",
        src: "/images/projectimgs/manet_schematic.png",
        alt: "Manet Schematic",
      },
    ],
    images: [
      { src: "/images/projectimgs/rasspi.JPG", alt: "Manet1" },
    ],
    tools: ["Raspberry Pi", "WiFi", "Linux", "Networking"],
  },
  {
    title: "House Hold NAS System",
    usefulLinks: [""],
    description:
      "A custom-built Network Attached Storage (NAS) system designed to provide centralized data storage and file sharing for a household. The NAS was constructed using a repurposed desktop computer, equipped with multiple hard drives configured in RAID for data redundancy and performance. The system runs on FreeNAS, an open-source operating system tailored for NAS applications, offering features such as user management, file sharing protocols (SMB, NFS), and media streaming capabilities. This project involved setting up the hardware, installing and configuring the FreeNAS software, and optimizing network settings to ensure seamless access from various devices within the home network. The NAS serves as a reliable solution for backing up important files, streaming media content, and facilitating easy file access across multiple platforms.",
    tdl:["add more drives to increase storage capacity", "implement automated backup solutions"],
    images: [
      { src: "/images/projectimgs/nas1.jpg", alt: "NAS System Front View" },
      { src: "/images/projectimgs/nas2.jpg", alt: "NAS System Internal View" },
    ],
    tools: ["FreeNAS", "ZFS", "RAID", "Samba", "Linux"],

  },
  {
    title: "ContractorWorks",
    usefulLinks: [],
    description:
      "ContractorWorks is a mobile first workforce management platform that helps businesses oversee contractors, job sites, and invoices entirely from their phone. The app includes role-based access for bosses and contractors, secure login and authentication, a boss dashboard for tracking project status, timesheets, and contractor information, and a dedicated contractor view for submitting work logs and tracking assignments. Designed for real-world use, it supports real-time updates, offline accessibility, and mobile optimization—reducing paperwork and improving efficiency in the field.",
    images: [
      { src: "/images/projectimgs/simLongin.png", alt: "Login Screen" },
      { src: "/images/projectimgs/simBossDash.png", alt: "Boss Dashboard" },
      { src: "/images/projectimgs/simContractorView.png", alt: "Contractor View" },
    ],
    tools: ["Flutter", "Firebase"],
  },
  {
    title: "Jam Circle",
    usefulLinks: [],
    description:
      "Jam Circle is a social music platform that reimagines how people discover and connect through music. Instead of waiting for Spotify Wrapped, users can see and share their top artists and albums year-round. The app features live music rooms with synced playback, personalized top 10 lists, music ratings and reviews, and a social feed with leaderboards to highlight trending activity among friends. Built collaboratively in a fast-paced team environment, Jam Circle emphasizes real-time interaction, user-driven discovery, and a more connected music experience.",
    images: [
      { src: "/images/projectimgs/jamCircle/jamcircle.png", alt: "Full Admin Dashboard" },
    ],
    tools: ["Django", "PostgreSQL", "Spotify API", "Agora", "React", "Postman", "GitHub"],
    linkToProject: "https://github.com/Namebrand71/JamCircleDevs",
  },
  {
    title: "Herding Cat (PADEN Bot)",
    usefulLinks: [],
    description:
      "A productivity Slackbot designed for software teams, Herding Cat automates daily standups, pull request tracking, Jira issue updates, and release timelines—all inside Slack. Created in partnership with cybersecurity company Brinqa, the bot was built to streamline task management for engineering leads juggling multiple teams.The bot simplifies team operations by organizing updates, surfacing high-priority tasks, and reducing the need for manual tracking. It features custom filters, visual timelines, automated schedulers, and a playful touch through randomized icebreakers—all aimed at helping teams stay aligned and focused.",
    images: [
      { src: "/images/projectimgs/Brinqa_Herding_Cats-Poster1.jpg", alt: "BrinqaPoster" },
    ],
    tools: ["TypeScript", "SQLite", "Docker", "Slack API", "Jira API", "Bitbucket", "Axios", "Cron"],
    linkToProject: "email for access",
  },
  
];
