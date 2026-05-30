export const meta = {
  name: "Lance Louise M. Estrella",
  shortName: "Lance",
  title: "Full-Stack Developer",
  title2: "UI/UX Designer",
  tagline: "Designing for the objective. Building for quality.",
  description:
    "BSIT graduate specializing in Web & Mobile Application Development at Bulacan State University. Building elegant, efficient software that bridges imagination and reality.",
  email: "lanceestrella21@gmail.com",
  phone: "+63 918 774 3047",
  linkedin: "https://www.linkedin.com/in/lance-louise-estrella/",
  github: "https://github.com/luwi-est",
  availability: "Available for opportunities",
};

export const experience = [
  {
    date: "Jan 2026 – Mar 2026",
    role: "Tech Intern",
    company: "Filinvest Alabang Inc.",
    bullets: [
      "Trained under the Future Leaders Program, an immersive experience that challenged us to harness our skills and deliver high-value contributions to the organization.",
      "Became a Project Lead and contributor to five yearly initiative projects for FAI.",
      "Built on-premises custom applications and internal tools to automate processes and improve work efficiency.",
      "Minimized manual work by automating data entry and report generation, saving 10+ hours per week.",
    ],
  },
  {
    date: "Mar 2025 – May 2025",
    role: "Student Intern",
    company: "Smartbridge: Salesforce Supported Virtual Internship Program",
    bullets: [
      "Completed a Salesforce virtual internship gaining hands-on experience with CRM platforms, cloud computing, and enterprise software.",
      "Collaborated on a capstone project designing a custom Salesforce app for a non-profit organization.",
      "Built a volunteer management app on Lightning Platform, improving operational efficiency by 30%.",
    ],
  },
];

export const projects = [
  {
    num: "01",
    type: "Full-Stack Web App",
    title: "InternConnect BSIT",
    description:
      "Automates internship matching for BSIT students of Bulacan State University through an intelligent online assessment system — drastically reducing manual coordination time.",
    tags: [
      { label: "Laravel", color: "cyan" },
      { label: "React", color: "purple" },
      { label: "MySQL", color: "cyan" },
      { label: "Git", color: "pink" },
      { label: "HTML/CSS", color: "cyan" },
    ],
    highlights: [
      "Assessment-driven matching algorithm",
      "Built for Bulacan State University BSIT dept.",
    ],
    previewBg: "linear-gradient(160deg,#061828,#0d2840)",
    // image: "/images/internconnect.png",  ← uncomment + add file to /public/images/
  },
  {
    num: "02",
    type: "Academic Web Platform",
    title: "Student Portal",
    description:
      "A dedicated academic portal for survey form distribution — serving both students and professors with form management, analytics, and role-based dashboards.",
    tags: [
      { label: "Django", color: "purple" },
      { label: "React", color: "cyan" },
      { label: "MySQL", color: "cyan" },
      { label: "Git", color: "pink" },
    ],
    highlights: [
      "Dual role: students and professors",
      "Analytics dashboard for form responses",
    ],
    previewBg: "linear-gradient(160deg,#120828,#1e0d40)",
    // image: "/images/student-portal.png",
  },
  {
    num: "03",
    type: "2D Platformer Game",
    title: "Payment Method: COD",
    description:
      "A Filipino-themed 2D platformer about a socially challenged working student delivering parcels through a tricky city environment. Blends social commentary with fun gameplay.",
    tags: [
      { label: "Java", color: "pink" },
      { label: "CSS", color: "cyan" },
      { label: "MSSQL", color: "purple" },
    ],
    highlights: [
      "Filipino cultural narrative & setting",
      "Custom 2D physics & collision system",
    ],
    previewBg: "linear-gradient(160deg,#050f05,#0a200a)",
    // image: "/images/cod-game.png",
  },
  {
    num: "04",
    type: "Desktop Application",
    title: "Hotel Reservation System",
    description:
      "Full-featured hotel reservation application allowing customers to browse room listings, make reservations, and manage bookings through an intuitive desktop interface.",
    tags: [
      { label: "Java", color: "pink" },
      { label: "CSS", color: "cyan" },
      { label: "MSSQL", color: "purple" },
    ],
    highlights: [
      "Room browsing & availability calendar",
      "Full booking management system",
    ],
    previewBg: "linear-gradient(160deg,#120800,#281408)",
    // image: "/images/hotel.png",
  },
];

export const skills = {
  Languages: [
    { name: "JavaScript", icon: "js" },
    { name: "Python", icon: "python" },
    { name: "Java", icon: "java" },
    { name: "C#", icon: "csharp" },
    { name: "C++", icon: "cpp" },
    { name: "SQL", icon: "sql" },
    { name: "HTML/CSS", icon: "html" },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Django", icon: "django" },
    { name: "Laravel", icon: "laravel" },
    { name: "Tailwind", icon: "tailwind" },
  ],
  "Tools & Platforms": [
    { name: "Figma", icon: "figma" },
    { name: "Unity 6", icon: "unity" },
    { name: "Photoshop", icon: "photoshop" },
    { name: "Illustrator", icon: "illustrator" },
    { name: "Animate", icon: "animate" },
    { name: "DaVinci", icon: "davinci" },
    { name: "Salesforce", icon: "salesforce" },
    { name: "Git", icon: "git" },
    { name: "MySQL", icon: "mysql" },
  ],
};

export const education = {
  degree: "B.S. Information Technology",
  specialization: "Specializing in Web & Mobile Application Development",
  school: "Bulacan State University",
  honor: "Summa Cum Laude",
  period: "Aug 2022 — Jun 2026",
};
