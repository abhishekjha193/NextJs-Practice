import { Project, Experience, Certificate } from "@/types";

export const GITHUB_USERNAME = "abhishekjha193";

export const projects: Project[] = [
  {
    id: "3",

    title: "Real Time Emotion Aware Music Player",

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

    liveUrl: "https://moodify-ai-music-player.vercel.app/",

    githubUrl: "https://github.com/abhishekjha193/Moodify-ai-music-player",

    featured: true,

    gradient: "from-pink-600/20 to-purple-500/20",
  },
  {
    id: "1",

    title: "AI Model Arena (Under Version 2.0 Development)",

    description:
      "LLM comparison platform to evaluate and compare responses from multiple AI models in real time. (Live Link Might NOT be working due to API key restrictions but will be available soon)  ",

    longDescription:
      "Built a platform integrating multiple AI model APIs to generate responses simultaneously and compare outputs side-by-side. Designed a clean evaluation interface allowing users to identify the most accurate and contextually relevant AI-generated responses efficiently.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "LLM APIs",
      "AI Integration",
    ],

    image: "/ai_model.png",

    liveUrl: "#",

    githubUrl: "https://github.com/abhishekjha193/AI_Model_Arena",

    featured: true,

    gradient: "from-red-600/20 to-red-500/20",
  },

  // {
  //   id: "2",

  //   title: "Snitch MERN Stack Clothing Platform",

  //   description:
  //     "Production-ready full-stack clothing e-commerce platform inspired by modern fashion brands with premium UI and scalable architecture.",

  //   longDescription:
  //     "Built a modern MERN stack fashion platform featuring secure authentication, responsive shopping experience, product catalog management, cart functionality, and optimized frontend performance.",

  //   tech: [
  //     "MongoDB",
  //     "Express.js",
  //     "React.js",
  //     "Node.js",
  //     "Redux",
  //     "Tailwind CSS",
  //     "JWT",
  //     "REST APIs",
  //   ],

  //   image: "/snitch.png",

  //   liveUrl: "https://github.com/abhishekjha193/Snitch",

  //   githubUrl: "https://github.com/abhishekjha193/Snitch",

  //   featured: true,

  //   gradient: "from-red-600/20 to-red-500/20",
  // },

  
];

export const experiences: Experience[] = [
  // {
  //   id: "1",
  //   company: "Shreyains Coding School",
  //   role: "MERN Stack Trainee (Apprenticeship)",
  //   duration: "Aug 2025 – Present",
  //   location: "Remote, India",

  //   currentlyWorking: true,
  //   achievements: [
  //     "Undergoing full-stack MERN training with hands-on project development",
  //     "Working on real-world applications using React, Node.js, Express, and MongoDB",
  //     "Practicing authentication systems, REST APIs, and scalable backend architecture",
  //     "Improving problem-solving and production-level coding skills",
  //   ],
  // },

  {
    id: "1",
    company: "Independent Projects (Self-Employed)",
    role: "Full Stack Web Developer",
    duration: "Jan 2026 – Present",
    location: "Mumbai, Maharashtra, India",

    currentlyWorking: true,
    achievements: [
      "Built multiple modern full stack MERN applications focused on AI integration, scalable backend systems, and responsive user experiences",
      "Built a Snitch-inspired fashion e-commerce platform with product management, authentication, cart functionality, category filtering, and responsive UI",
      "Developing an AI Model Arena platform that compares responses from multiple AI models and agents within a unified interface",
      "Worked with React.js, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, and modern frontend architecture to create real-world applications",
    ],
  },

  {
    id: "2",
    company: "Technohacks Solution Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "Jan 2026",
    location: "Remote, India",
    achievements: [
      "Developed features for a task management platform using MERN stack",
      "Implemented JWT-based authentication and role-based access control (RBAC)",
      "Built RESTful APIs with MongoDB for CRUD operations and data handling",
      "Created reusable React components for improved UI maintainability",
      "Used Git/GitHub for version control and Postman for API testing",
      "Debugged frontend-backend integration issues for smooth API communication",
    ],
  },

  {
    id: "3",
    company: "Shree L. R. Tiwari College of Engineering",
    role: "Cyber Security Intern",
    duration: "Apr 2024 – May 2024",
    location: "Mumbai, Maharashtra, India",
    achievements: [
      "Completed hands-on training in Cyber Security and Ethical Hacking with practical exposure to Kali Linux, network security, vulnerability assessment, and security testing concepts",

      "Worked on security-focused mini projects and simulations including phishing awareness demonstrations in controlled lab environments for educational purposes",

      "Gained practical understanding of Kali Linux tools, penetration testing concepts, network and web application security",

      "Developed awareness of cyber security fundamentals, threat analysis, and vulnerability assessment workflows",

      "Prepared reports and documentation for security findings and testing activities",

      "Focused on Network Security and Penetration Testing concepts during practical sessions",
    ],
  },

  {
    id: "4",
    company: "Shree L.R. Tiwari College of Engineering",
    role: "B.E. Information Technology",
    duration: "Jun 2022 – 2026",
    location: "Maharashtra, India",
    achievements: [
      "Pursuing Bachelor of Engineering in Information Technology",
      "Strong focus on full-stack web development and system design",
      "Built multiple MERN stack projects including SaaS and AI-based applications",
      "Active in competitive programming and web development practice",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "2024",
    badgeColor: "from-blue-500 to-cyan-500",
    image: "/certificate/full.jpg",
  },
  {
    id: "2",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2026",
    badgeColor: "from-yellow-500 to-orange-500",
    image: "/certificate/SE.jpg",
  },
  {
    id: "3",
    title: "SQL Bootcamp",
    issuer: "LetsUpgrade",
    date: "2026",
    badgeColor: "from-green-500 to-emerald-500",
    image: "/certificate/sqll.jpg",
  },
  {
    id: "4",
    title: "UI/UX Design (Figma)",
    issuer: "Physics Wallah",
    date: "2025",
    badgeColor: "from-pink-500 to-purple-500",
    image: "/certificate/ui.jpg",
  },
  {
    id: "5",
    title: "Machine Learning Basics",
    issuer: "Vodafone Idea Foundation",
    date: "2023",
    badgeColor: "from-indigo-500 to-blue-500",
    image: "/certificate/ml.jpg",
  },
  {
    id: "6",
    title: "Generative AI",
    issuer: "Physics Wallah",
    date: "2026",
    badgeColor: "from-purple-500 to-fuchsia-500",
    image: "/certificate/genai.jpg",
  },
];
