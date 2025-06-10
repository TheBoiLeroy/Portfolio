export type Project = {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  tools: string[];
  linkToProject?: string;
};

export const projects: Project[] = [
  {
    title: "ContractorWorks",
    description:
      "ContractorWorks is a mobile first workforce management platform that helps businesses oversee contractors, job sites, and invoices entirely from their phone. The app includes role-based access for bosses and contractors, secure login and authentication, a boss dashboard for tracking project status, timesheets, and contractor information, and a dedicated contractor view for submitting work logs and tracking assignments. Designed for real-world use, it supports real-time updates, offline accessibility, and mobile optimization—reducing paperwork and improving efficiency in the field.",
    images: [
      { src: "/images/projectimgs/simLongin.png", alt: "Login Screen" },
      { src: "/images/projectimgs/simBossDash.png", alt: "Boss Dashboard" },
      { src: "/images/projectimgs/simContractorView.png", alt: "Contractor View" }
    ],
    tools: ["Flutter", "Firebase"],
  },
  {
    title: "Jam Circle",
    description:
      "Jam Circle is a social music platform that reimagines how people discover and connect through music. Instead of waiting for Spotify Wrapped, users can see and share their top artists and albums year-round. The app features live music rooms with synced playback, personalized top 10 lists, music ratings and reviews, and a social feed with leaderboards to highlight trending activity among friends. Built collaboratively in a fast-paced team environment, Jam Circle emphasizes real-time interaction, user-driven discovery, and a more connected music experience.",
    images: [
      { src: "/images/projectimgs/jamCircle/jamcircle.png", alt: "Full Admin Dashboard" }
    ],
    tools: ["Django", "PostgreSQL", "Spotify API", "Agora", "React", "Postman", "GitHub"],
    linkToProject: "https://github.com/Namebrand71/JamCircleDevs",
  },
  {
    title: "Herding Cat (PADEN Bot)",
    description:
      "A productivity Slackbot designed for software teams, Herding Cat automates daily standups, pull request tracking, Jira issue updates, and release timelines—all inside Slack. Created in partnership with cybersecurity company Brinqa, the bot was built to streamline task management for engineering leads juggling multiple teams.The bot simplifies team operations by organizing updates, surfacing high-priority tasks, and reducing the need for manual tracking. It features custom filters, visual timelines, automated schedulers, and a playful touch through randomized icebreakers—all aimed at helping teams stay aligned and focused.",
    images: [
      { src: "/images/projectimgs/Brinqa_Herding_Cats-Poster1.jpg", alt: "BrinqaPoster" }
    ],
    tools: ["TypeScript", "SQLite", "Docker", "Slack API", "Jira API", "Bitbucket", "Axios", "Cron"],
    linkToProject: "email for access",
  }
];
