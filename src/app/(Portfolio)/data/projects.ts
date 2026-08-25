export type Project = {
  title: string;
  description: string;
  usefulLinks: string[];
  tdl?:string[];
  images: { src: string; alt: string }[];
  tools: string[];
  linkToProject?: string;
  status?: string;
  vibeCoded?: boolean;
  schematics?: { dsc: string; src: string; alt: string }[]; // optional
  partsList?: { name: string; quantity?: number; link?: string }[]; // optional
  
};

export const projects: Project[] = [
  {
    title: "Open MANET Network with Raspberry Pis",
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
    title: "Household NAS System",
    usefulLinks: [""],
    description:
      "A custom-built Network Attached Storage (NAS) system designed to provide centralized data storage and file sharing for a household. The NAS was constructed using a repurposed desktop computer, equipped with multiple hard drives configured in RAID for data redundancy and performance. The system runs on FreeNAS, an open-source operating system tailored for NAS applications, offering features such as user management, file sharing protocols (SMB, NFS), and media streaming capabilities. This project involved setting up the hardware, installing and configuring the FreeNAS software, and optimizing network settings to ensure seamless access from various devices within the home network. The NAS serves as a reliable solution for backing up important files, streaming media content, and facilitating easy file access across multiple platforms.",
    tdl:["add more drives to increase storage capacity", "implement automated backup solutions"],
    images: [],
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

export const truenasProjects: Project[] = [
  {
    title: "Mise — Voice Memos to Recipes",
    status: "Actively building",
    vibeCoded: true,
    usefulLinks: [],
    description:
      "A voice-first recipe library for preserving the meals my grandmother, mother, and wife describe from memory. They can simply talk through the ingredients and method, and the app turns the recording into an organized, searchable recipe. It currently uses OpenAI transcription; the next major step is a fully local transcription option so families with privacy or security concerns can use it without sending recordings to an external API.",
    tdl: [
      "[x] Record and organize spoken family recipes",
      "[x] Transcribe voice memos into structured recipes",
      "[ ] Add a local-only transcription mode",
      "[ ] Remove required external API calls",
    ],
    images: [
      {
        src: "/images/projectimgs/TrueNasImages/WorkingOn/Screenshot 2026-08-25 at 10.41.38 AM.png",
        alt: "Mise recipe library with an option to add a voice memo",
      },
    ],
    tools: ["TrueNAS", "OpenAI", "Self-hosted"],
  },
  {
    title: "Family Finance",
    status: "Testing with mock data",
    vibeCoded: true,
    usefulLinks: [],
    description:
      "A private household budgeting dashboard I started to help my wife and me understand our shared finances. It brings accounts, monthly spending, planned expenses, and credit usage into one view while still letting each of us see individual and joint activity. The project is currently being tested with fake Plaid data before any real financial information is connected.",
    tdl: [
      "[x] Build individual, partner, and joint account views",
      "[x] Test account syncing with fake Plaid data",
      "[ ] Complete security review before using real data",
    ],
    images: [
      {
        src: "/images/projectimgs/TrueNasImages/BudgetApp/Screenshot 2026-08-24 at 7.54.08 PM.png",
        alt: "Family Finance dashboard using mock account and spending data",
      },
    ],
    tools: ["TrueNAS", "Plaid", "Self-hosted"],
  },
  {
    title: "Private Family Tree",
    status: "Running on TrueNAS",
    vibeCoded: true,
    usefulLinks: [],
    description:
      "A self-hosted family tree that keeps our genealogy available to the family without placing the underlying records on a public platform. It runs on my TrueNAS server and stores family relationships and historical details in MySQL, giving me direct control over access, backups, and long-term ownership of the data.",
    images: [
      {
        src: "/images/projectimgs/TrueNasImages/FamilyTree/Screenshot 2026-08-25 at 10.36.23 AM.png",
        alt: "A private, self-hosted hourglass family tree view",
      },
    ],
    tools: ["TrueNAS", "MySQL", "Self-hosted"],
  },
  {
    title: "Personal Google Photos",
    status: "Running — hardware limited",
    vibeCoded: true,
    usefulLinks: [],
    description:
      "A private photo and video browser for the media my phone uploads to TrueNAS. It makes the server's folders easier to explore and adds open-source facial recognition so I can label people and organize photos by face. I am continuously improving the identifications; indexing speed and recognition workloads are currently limited by the server's hardware.",
    tdl: [
      "[x] Browse phone uploads from the TrueNAS library",
      "[x] Search and organize media by identified faces",
      "[ ] Improve recognition speed with future hardware upgrades",
    ],
    images: [
      {
        src: "/images/projectimgs/TrueNasImages/PersonalGooglePhotos/Screenshot 2026-08-25 at 10.33.18 AM.png",
        alt: "Self-hosted TrueNAS video library",
      },
    ],
    tools: ["TrueNAS", "Facial Recognition", "Self-hosted"],
  },
];
