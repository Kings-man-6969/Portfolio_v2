export const portfolioData = {
  personal: {
    name: "Prashant Mishra",
    title: "Computer Science Undergraduate | AI & Machine Learning Engineer",
    tagline: "I design and build real-time software systems where performance, correctness, and scalability matter. My work sits at the intersection of core computer science and applied AI—turning algorithms into systems that actually run in the real world.",
    subTagline: "I enjoy problems where latency, data, and decisions collide.",
    mission: "Building real-time, scalable software systems by combining strong engineering fundamentals with applied AI and machine learning.",
    email: "prashantmishra6969@gmail.com",
    location: "Kanpur, Uttar Pradesh, India (IST)",
    availability: "Open to internships and software engineering opportunities",
    social: {
      github: "https://github.com/prashantmishra",
      linkedin: "https://linkedin.com/in/prashantmishra",
      twitter: "https://twitter.com/prashantmishra"
    }
  },
  
  stats: [
    { label: "Projects Built", value: "10+", context: "spanning AI systems, automation tools, and full-stack platforms" },
    { label: "AI/ML Systems", value: "5+", context: "focused on real-time inference, reliability, and evaluation" },
    { label: "Real-Time Apps", value: "3", context: "designed with latency constraints and future scalability in mind" }
  ],
  
  philosophy: [
    "I care deeply about fundamentals—data structures, algorithms, and system behavior under load.",
    "I prefer simple architectures that scale over clever solutions that don't.",
    "When working with AI, I treat models as components of systems, not magic boxes."
  ],
  
  skillsIntro: "These are tools I use regularly—not a wishlist. I prioritize fundamentals first, frameworks second.",
  
  skills: [
    {
      category: "Engineering Foundations",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "OOP", level: 88 }
      ]
    },
    {
      category: "Applied Machine Learning Systems",
      items: [
        { name: "ML Pipelines", level: 88 },
        { name: "Face Recognition", level: 90 },
        { name: "Model Evaluation", level: 85 },
        { name: "Feature Engineering", level: 82 }
      ]
    },
    {
      category: "Perception & Language Systems",
      items: [
        { name: "OpenCV", level: 90 },
        { name: "DeepFace", level: 88 },
        { name: "FaceNet Embeddings", level: 85 },
        { name: "NLP Search Systems", level: 80 },
        { name: "Speech Recognition", level: 78 }
      ]
    },
    {
      category: "Full-Stack Development",
      items: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 82 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      category: "Databases & Backend",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
        { name: "REST APIs", level: 88 }
      ]
    },
    {
      category: "Tools & Workflow",
      items: [
        { name: "Git", level: 90 },
        { name: "Automation Scripts", level: 85 },
        { name: "Modular System Design", level: 82 }
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Real-Time Facial Recognition Surveillance System",
      description: "Built a real-time facial recognition system designed for continuous video streams, where latency and false positives directly affect usability. Implemented embedding-based identity matching using FaceNet, optimized frame sampling, and tuned similarity thresholds to balance accuracy and speed.",
      tech: ["Python", "Streamlit", "OpenCV", "DeepFace", "FaceNet"],
      outcomes: [
        "Reduced inference latency through frame-skipping and threshold tuning",
        "Improved recognition stability under varying lighting conditions",
        "Designed logging and architecture for future multi-camera scaling"
      ],
      link: "#"
    },
    {
      id: 2,
      title: "E-ShopMate – Intelligent E-commerce Platform",
      description: "Designed a full-stack e-commerce platform focused on personalization rather than static browsing. Combined a hybrid recommendation approach with NLP-based search to improve product discovery and user experience.",
      tech: ["React", "Next.js", "MongoDB", "JavaScript", "HTML", "CSS"],
      outcomes: [
        "Personalized recommendations based on user behavior",
        "Secure authentication and modular backend design",
        "Architecture planned for future ML-driven recommendations and analytics"
      ],
      link: "#"
    },
    {
      id: 3,
      title: "JARVIS-Style AI Personal Assistant",
      description: "Built a local AI assistant to explore command execution, intent parsing, and automation without relying entirely on cloud services. Focused on modular design so new commands and devices could be added without refactoring the core system.",
      tech: ["Python", "Speech Recognition", "NLP", "Automation APIs"],
      outcomes: [
        "Offline command execution with online query fallback",
        "NLP-based intent parsing for natural interaction",
        "Extensible architecture for cross-device support"
      ],
      link: "#"
    }
  ],
  
  contactTagline: "If you're working on systems where correctness and performance matter, I'd love to talk."
};
