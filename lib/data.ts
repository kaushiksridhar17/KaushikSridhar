// All of the site's text lives in this file.
// Edit it here and every section updates.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (file: string) => `${basePath}/${file}`;

export const profile = {
  name: "Kaushik Sridhar",
  initials: "KS",
  role: "Software Engineer",
  summary:
    "Computer Science graduate from VIT Chennai. I build full-stack web applications in Java and TypeScript, and have hands-on project experience in machine learning.",
  email: "kaushiksridhar17@gmail.com",
  github: "https://github.com/kaushiksridhar17",
  linkedin: "https://www.linkedin.com/in/kaushiksridhar17",
  resume: asset("resume.pdf"),
  // Photo shown in the About section. The file lives at public/kaushik.jpeg.
  // If the file is missing, the initials are shown instead.
  photo: asset("kaushik.jpeg"),
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const about = {
  heading: "Computer Science graduate and software engineer",
  paragraphs: [
    "I graduated in 2026 with a B.Tech in Computer Science and Engineering from Vellore Institute of Technology, Chennai. My coursework covered the fundamentals, including data structures, operating systems, computer networks, computer architecture, compiler design and database management, along with machine learning, web application development, human-computer interaction and network security.",
    "I've put that into practice through an internship and personal projects. At iamneo Edutech I built a full-stack web application with Angular, Spring Boot and MySQL. On my own I've built a personal finance app in Java, Spring Boot and React, a ticket resale exchange in TypeScript with Fastify, PostgreSQL and Next.js, and a crop disease image classifier in TensorFlow.",
    "Across these I've focused on getting the details right: writing automated tests, load-testing under concurrent use, and checking results against independent references. I'm looking for a software engineering role where I can keep building on these foundations alongside an experienced team.",
  ],
};

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  detail?: string;
  link?: { label: string; href: string };
  current?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    period: "Graduated 2026",
    title: "B.Tech, Computer Science and Engineering",
    org: "Vellore Institute of Technology, Chennai",
    detail:
      "GPA 7.23. Coursework in data structures, object-oriented programming, operating systems, computer networks, compiler design, database management, machine learning and cryptography.",
    current: true,
  },
  {
    period: "Aug 2023 – Dec 2023",
    title: "Java Full Stack Intern",
    org: "iamneo Edutech Pvt. Ltd. · Remote",
    detail:
      "Built a full-stack web application with Angular, TypeScript, Spring Boot, Spring Data JPA and MySQL, including user authentication, RESTful CRUD APIs and relational entity mappings. Tested with JUnit and built with Maven.",
    link: { label: "View certificate", href: asset("iamneo.pdf") },
  },
  {
    period: "2021",
    title: "AISSCE (CBSE), 91.6%",
    org: "Abu Dhabi Indian School, Abu Dhabi",
    detail: "Senior secondary schooling in Abu Dhabi, UAE.",
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C", "C++", "HTML/CSS"] },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Fastify", "REST APIs", "WebSockets", "JWT Authentication"],
  },
  { title: "Frontend", skills: ["React", "Angular", "Next.js", "Tailwind CSS"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL", "SQLite"] },
  { title: "Machine Learning", skills: ["TensorFlow", "Keras", "EfficientNetV2", "Gradio"] },
  { title: "Tools & Testing", skills: ["Docker", "Git", "Maven", "JUnit", "Vitest", "Playwright"] },
];

export type Project = {
  title: string;
  subtitle: string;
  icon: "finance" | "ticket" | "leaf";
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "FinLedger",
    subtitle: "Personal finance manager for India",
    icon: "finance",
    description:
      "A finance app with secure login, bank statement imports, budget alerts, a group bill splitter and a mutual fund tracker.",
    highlights: [
      "Statement imports for 3 Indian banks, backed by 187 tests",
      "Bill splitter cut settle-up payments by 65% across 1,000 simulated groups",
      "Fund returns match Excel to 6 decimal places",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "React", "Docker"],
    github: "https://github.com/kaushiksridhar17/finledger",
  },
  {
    title: "Face Value",
    subtitle: "Anti-scalping ticket exchange",
    icon: "ticket",
    description:
      "A ticket resale platform with a price-time matching engine, an event log and live WebSocket updates, where resales are capped at face value.",
    highlights: [
      "Sustained 10,000 concurrent claims at 1,573 per second",
      "Zero queue-order violations under load",
      "HMAC-SHA256 entry passes that expire in 30 seconds",
    ],
    tech: ["TypeScript", "Fastify", "PostgreSQL", "Next.js", "Docker"],
    github: "https://github.com/kaushiksridhar17/ticket-resale",
  },
  {
    title: "Crop Doctor",
    subtitle: "Multi-crop disease diagnosis",
    icon: "leaf",
    description:
      "An image classifier for crop diseases, trained on field photos from India, Uganda and Ghana, with a review queue for uncertain predictions.",
    highlights: [
      "0.80–0.95 macro-F1 across 4 crops with EfficientNetV2-S",
      "Background-swap test exposed a 32-point dataset bias",
      "Calibrated abstention routes 7–28% of unsure cases to review",
    ],
    tech: ["TensorFlow", "Keras", "Gradio", "SQLite"],
    github: "https://github.com/kaushiksridhar17/crop-doctor",
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/9d8b2bf4-975b-4c1b-a5bd-687be257e806/public_url",
    linkLabel: "Verify on Credly",
  },
];
