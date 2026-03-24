/**
 * =============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =============================================================================
 * 
 * This file contains ALL the data for your portfolio.
 * To update your portfolio, simply edit the values below.
 * No need to touch any other files!
 * 
 * HOW TO UPDATE:
 * 1. Personal Info: Edit name, title, email, location, social links
 * 2. Resume: Place your resume.pdf in /app/frontend/public/ folder
 * 3. Stats: Update numbers and their context
 * 4. Philosophy: Edit your engineering principles (3-5 lines max)
 * 5. Skills: Add/remove/edit skill categories and proficiency levels
 * 6. Projects: Add/remove/edit projects with descriptions and outcomes
 * 7. Contact: Update availability status and contact tagline
 * 
 * PRO TIP: Keep descriptions focused on engineering thinking, not just features!
 * =============================================================================
 */

export const portfolioData = {
  // ============================================================================
  // PERSONAL INFORMATION
  // ============================================================================
  personal: {
    name: "Prashant Mishra",
    title: "Computer Science Undergraduate | AI & Machine Learning Engineer",

    // Hero section taglines (this is what people read first!)
    tagline: "I design and build real-time software systems where performance, correctness, and scalability matter. My work sits at the intersection of core computer science and applied AI—turning algorithms into systems that actually run in the real world.",
    subTagline: "I enjoy problems where latency, data, and decisions collide.",

    // Contact information
    email: "prashantmishra6969@gmail.com",
    location: "Kanpur, Uttar Pradesh, India (IST)",
    availability: "Open to internships and software engineering opportunities",

    // Resume file (place your resume.pdf in /app/frontend/public/)
    // Update this filename to match your actual resume file
    resumeFile: "/Prashant_Mishra_Resume.pdf",
    resumeFileName: "Prashant_Mishra_Resume.pdf",

    // Social media links (update with your actual profile URLs)
    social: {
      github: "https://github.com/Kings-man-6969",
      linkedin: "https://www.linkedin.com/in/prashnatmishra6009/",
      twitter: "https://twitter.com"
    }
  },

  // ============================================================================
  // STATS SECTION
  // ============================================================================
  // Add context to make numbers meaningful!
  // Format: { label: "What", value: "Number", context: "Why it matters" }
  stats: [
    {
      label: "Projects Built",
      value: "10+",
      context: "spanning AI systems, automation tools, and full-stack platforms"
    },
    {
      label: "AI/ML Systems",
      value: "5+",
      context: "focused on real-time inference, reliability, and evaluation"
    },
    {
      label: "Real-Time Apps",
      value: "3",
      context: "designed with latency constraints and future scalability in mind"
    }
  ],

  // ============================================================================
  // SYSTEM PHILOSOPHY
  // ============================================================================
  // 3-5 principles that show HOW you think as an engineer
  // Keep it clear, authentic, and differentiated
  philosophy: [
    "I care deeply about fundamentals—data structures, algorithms, and system behavior under load.",
    "I prefer simple architectures that scale over clever solutions that don't.",
    "When working with AI, I treat models as components of systems, not magic boxes."
  ],

  // ============================================================================
  // EDUCATION SECTION
  // ============================================================================
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Pranveer Singh Institute of Technology, Kanpur",
      score: "GPA: 8.13",
      year: "2021 - 2025"
    },
    {
      degree: "12th CISCE Board",
      institution: "Heliger Borden Education Center, Panki, Kanpur",
      score: "Percentage: 90.5%",
      year: "2021"
    },
    {
      degree: "10th CISCE Board",
      institution: "Heliger Borden Education Center, Panki, Kanpur",
      score: "Percentage: 86.6%",
      year: "2019"
    }
  ],

  // ============================================================================
  // CERTIFICATIONS SECTION
  // ============================================================================
  // Add your certifications here
  // Format: { title: "Certification Name", issuer: "Issuing Organization", date: "Month Year", link: "URL" }
  certifications: [
    {
      title: "AI Voice Agents Challenge",
      issuer: "MURF AI",
      date: "December 2026",
      link: "/cert_murf_ai.png"
    }
  ],

  // ============================================================================
  // SKILLS SECTION
  // ============================================================================
  skillsIntro: "These are tools I use regularly—not a wishlist. I prioritize fundamentals first, frameworks second.",

  // Add/remove skill categories as needed
  // Level: 0-100 (represents proficiency, but keep it honest!)
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

  // ============================================================================
  // PROJECTS SECTION
  // ============================================================================
  // Write projects as engineering stories, not feature lists!
  // Focus on: Problem → Approach → Tradeoffs → Outcomes
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
      link: "#"  // Add GitHub repo or demo link
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
      link: "#"  // Add GitHub repo or demo link
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
      link: "#"  // Add GitHub repo or demo link
    }
    // To add more projects, copy the structure above and paste here
  ],

  // ============================================================================
  // CONTACT SECTION
  // ============================================================================
  contactTagline: "If you're working on systems where correctness and performance matter, I'd love to talk."
};

/**
 * =============================================================================
 * QUICK UPDATE CHECKLIST
 * =============================================================================
 * 
 * When you want to update your portfolio:
 * 
 * □ Update personal info (name, email, location, social links)
 * □ Place resume PDF in /app/frontend/public/ and update resumeFile path
 * □ Update stats numbers and context
 * □ Review and update philosophy principles
 * □ Add/update skills and proficiency levels
 * □ Add/update projects with engineering-focused descriptions
 * □ Update availability status
 * □ Save this file and refresh your browser!
 * 
 * That's it! No need to touch any other files.
 * =============================================================================
 */
