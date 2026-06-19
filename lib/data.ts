import { Project, Experience, Certificate } from "@/types";

export const GITHUB_USERNAME = "abhishekjha193";

export const projects: Project[] = [
  {
    id: "3",

    title: " Mindtunes - Real Time Emotion Aware Music Player",

    description:
      "AI-powered music player that detects user emotions through facial expressions and recommends songs in real time.",

    longDescription:
      "Developed a full-stack emotion-aware music player using the MERN stack and MediaPipe for facial expression detection. The application captures webcam input, analyzes user emotions in real time, and recommends songs based on detected mood. Built REST APIs for managing users, songs, and recommendations while implementing core audio player functionalities such as play, pause, seek, and volume control for a seamless listening experience.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "MediaPipe",
      "REST APIs",
      "AI Integration",
    ],

    image: "/music_player.png",

    liveUrl: "https://mindtunes.vercel.app/",

    githubUrl: "https://github.com/abhishekjha193/Moodify-ai-music-player",

    featured: true,

    gradient: "from-pink-600/20 to-purple-500/20",
  },
  {
    id: "1",

    title: "NeuroArena - Multi-Model Response Evaluation Platform",

    description:
      "LLM comparison platform to evaluate and compare responses from multiple AI models in real time ",

    longDescription:
      "Built a platform integrating multiple AI model APIs to generate responses simultaneously and compare outputs side-by-side. Designed a clean evaluation interface allowing users to identify the most accurate and contextually relevant AI-generated responses efficiently.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Typescript",
      "JavaScript",
      "LLM APIs",
      "AI Integration",
    ],

    image: "/ai_model.png",

    liveUrl: "https://neuroarena.vercel.app/",

    githubUrl: "https://github.com/abhishekjha193/AI_Model_Arena",

    featured: true,

    gradient: "from-red-600/20 to-red-500/20",
  },

  {
    id: "2",

    title: "Snitch MERN Stack Clothing Platform (Coming Soon)",

    description:
      "Production-ready full-stack clothing e-commerce platform inspired by modern fashion brands with premium UI and scalable architecture.",

    longDescription:
      "Built a modern MERN stack fashion platform featuring secure authentication, responsive shopping experience, product catalog management, cart functionality, and optimized frontend performance.",

    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],

    image: "/snitch.png",

    liveUrl: "https://github.com/abhishekjha193/Snitch",

    githubUrl: "https://github.com/abhishekjha193/Snitch",

    featured: true,

    gradient: "from-red-600/20 to-red-500/20",
  },

  
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Independent Projects (Self-Employed)",
    role: "Full Stack Web Developer",
    logo: "/exp-logo/independent.png",
    duration: "Mar 2026 – June 2026",
    location: "Mumbai, India",
    currentlyWorking: true,
    achievements: [
      "Built MERN apps with AI integration and scalable architecture",
      "Developed Snitch-style e-commerce with auth, cart & filtering",
      "Working on AI Model Arena for multi-model response comparison",
      "Used React, Node, Express, MongoDB, JWT, REST APIs",
    ],
  },

  {
    id: "2",
    company: "Technohacks Solution Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    logo: "/exp-logo/technohacks.png",
    duration: "Jan 2026 – Feb 2026",
    location: "Remote, India",
    achievements: [
      "Built task management features using MERN stack",
      "Implemented JWT auth and role-based access control",
      "Developed REST APIs with MongoDB CRUD operations",
      "Created reusable React components for UI scalability",
      "Worked with Git, GitHub, and Postman for workflows",
      "Debugged frontend–backend integration issues",
    ],
  },

  {
    id: "4",
    company: "Shree L.R. Tiwari College of Engineering",
    role: "B.E. Information Technology",
    logo: "/exp-logo/b_e-it.png",
    duration: "2022 – 2026",
    location: "Mumbai, India",
    achievements: [
      "Completed B.E. in Information Technology",
      "Focused on full-stack development and system design",
      "Built multiple MERN + AI-based projects",
      "Participated in Multiple coding competitions and hackathons",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "2024",
    badgeColor: "from-red-500 to-red-700",
    image: "/certificate/full.jpg",
    logo: "/certificate-logo/full.png",
  },
  {
    id: "7",
    title: "Data Structures & Algorithms",
    issuer: "freeCodeCamp",
    date: "2025",
    badgeColor: "from-red-500 to-amber-500",
    image: "/certificate/dsa.jpg",
    logo: "/certificate-logo/dsa.png",
  },
  {
    id: "6",
    title: "Generative AI",
    issuer: "Microsoft",
    date: "2026",
    badgeColor: "from-red-500 to-fuchsia-500",
    image: "/certificate/genai.jpg",
    logo: "/certificate-logo/genai.png",
  },

  {
    id: "2",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2026",
    badgeColor: "from-red-500 to-orange-500",
    image: "/certificate/SE.jpg",
    logo: "/certificate-logo/SE.png",
  },
  {
    id: "4",
    title: "UI/UX Design (Figma)",
    issuer: "Physics Wallah",
    date: "2025",
    badgeColor: "from-red-500 to-pink-500",
    image: "/certificate/ui.jpg",
    logo: "/certificate-logo/ui.png",
  },
];



