// src/data/resume.js
const resume = {
  name: "Harsa Vardan A K",
  title: "Mobile Application Developer",
  location: "Madurai, Tamil Nadu, India",
  email: "harsavardanharsa@gmail.com",
  phone: "+91 7373630040",
  linkedin: "linkedin.com/in/harsavardan02",
  linkedinUrl: "https://linkedin.com/in/harsavardan02",
  summary:
"Mobile Application Developer at Bonbloc with experience building scalable mobile and web applications integrated with NetSuite ERP. Skilled in Java, Python, REST APIs, and modern front-end frameworks, delivering secure, high-performance solutions including AI platforms, POS, and HRMS systems.Proven track record of achieving 99.5% uptime while implementing strong security standards (AES-256, SSL/TLS). Focused on translating business needs into efficient, user-centric solutions.",
  experience: [
    {
      id: 1,
      role: "Mobile Application Developer",
      company: "Bonbloc",
      period: "2025 – Present",
      location: "India",
      type: "Full-time",
      bullets: [
        "Design and deliver cross-platform mobile and web applications serving enterprise clients with complex ERP integration requirements.",
        "Architect and integrate NetSuite ERP APIs (Orders, Invoices, Payments, Customer Records) ensuring real-time data synchronization.",
        "Implement end-to-end security using AES-256 encryption and SSL/TLS, ensuring enterprise data security compliance.",
        "Lead development of AI-powered product suggestion modules and automated invoice synchronization workflows.",
        "Maintain 99.5% platform uptime SLAs through performance optimization and robust error-handling strategies.",
        "Deployed TSSF HRMS to Google Play and Palmetto to the Apple App Store, guiding production releases through store submission requirements.",
        "Produce comprehensive technical documentation and deliver client training programs post-deployment.",
      ],
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Thanvi Technologies",
      period: "April 2023",
      location: "India",
      type: "Internship",
      bullets: [
        "Built responsive web pages for the Cloud Kitchen food-ordering platform using HTML, CSS, JavaScript, and Bootstrap.",
        "Collaborated with backend team to implement user authentication, menu management, and mobile-optimized UI flows.",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "IMPAL Customer Portal",
      subtitle: "Mobile & Desktop",
      period: "2025",
      company: "Bonbloc",
      category: "Enterprise",
      tags: ["NetSuite ERP", "REST APIs", "AES-256", "Mobile", "Web"],
      color: "#1565C0",
      description:
        "A self-service customer portal (mobile + web) fully integrated with NetSuite ERP for a leading automotive parts distributor.",
      bullets: [
        "Real-time outstanding balance views, new order placement, invoice access, and secure online payments.",
        "Built AI-based product recommendation engine and automated invoice/payment synchronization.",
        "Branch/manager approval module with 24-hour SLA and role-based access controls.",
        "99.5% uptime via fault-tolerant architecture; AES-256 + SSL/TLS security.",
        "Delivered: Mobile App, Web Portal, NetSuite API Middleware, Documentation & Training.",
      ],
    },
    {
      id: 2,
      title: "Atyab Al Marshoud",
      subtitle: "POS & HRMS System",
      period: "2025",
      company: "Bonbloc",
      category: "Enterprise",
      tags: ["NetSuite ERP", "POS", "HRMS", "Desktop", "Mobile", "REST APIs"],
      color: "#0D47A1",
      description:
        "Full digital ecosystem for a multi-location retail brand in the Gulf region — POS and HRMS systems integrated with NetSuite.",
      bullets: [
        "Full-featured POS system (Desktop & Mobile) integrated with NetSuite for real-time inventory, finance, and sales.",
        "HRMS application integrated with NetSuite to automate employee records, payroll, and HR workflows.",
        "Scalable architecture supporting multi-branch operations and future business growth.",
      ],
    },
    {
      id: 3,
      title: "Procurement Automation Platform",
      subtitle: "NetSuite Integrated",
      period: "2025",
      company: "Bonbloc",
      category: "Enterprise",
      tags: ["NetSuite ERP", "Node.js", "React", "REST APIs", "RFQ", "Procurement", "Workflow Automation"],
      color: "#0A5C9E",
      description:
        "A centralized Procurement Automation Platform integrated with NetSuite to digitize and streamline the end-to-end procurement lifecycle — from Purchase Requisition to Vendor Bill.",
      bullets: [
        "Requisition Management: Users raise Purchase Requisitions via a custom web app; items, quantities, dates, project/class/location and attachments captured and pushed to NetSuite for approval workflows.",
        "Inventory & Sourcing: Post-approval, NetSuite evaluates stock availability — existing stock triggers material issue or transfer order; shortfall routes to RFQ or Direct PO.",
        "RFQ & Vendor Management: RFQs generated from approved requisitions, distributed to multiple vendors via email or vendor portal; quotations collected, compared, and split-awarded at line level.",
        "PO & Fulfillment: Purchase Orders created and managed in NetSuite with full lifecycle support — approvals, amendments, partial receipts, closures, and GRN reflected in the application.",
        "Invoice & Bill Processing: Vendor invoices uploaded via app or email; 2-way/3-way matching (PO, GRN, Invoice); approved invoices auto-converted to Vendor Bills in NetSuite.",
        "End-to-end audit trail: Requisition → Inventory/RFQ → PO → GRN → Bill, with operational and compliance reporting dashboards.",
      ],
    },
    {
      id: 5,
      title: "Cruise Booking System",
      subtitle: "Face Authentication",
      period: "May 2025",
      company: "Academic Project",
      category: "Full-Stack",
      tags: ["Python", "OpenCV", "Face Recognition", "MySQL"],
      color: "#1976D2",
      description:
        "Full-stack cruise booking platform featuring biometric face recognition login powered by Python and OpenCV.",
      bullets: [
        "Biometric login with face recognition for secure, passwordless authentication.",
        "Modules: cruise activity booking, food service reservations, and room management.",
        "Personalized dashboards with efficient data management.",
      ],
    },
    {
      id: 6,
      title: "Cloud Kitchen",
      subtitle: "Food Ordering Platform",
      period: "April 2023",
      company: "Thanvi Technologies",
      category: "Web",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      color: "#1565C0",
      description:
        "Responsive food ordering website for a cloud kitchen enabling menu browsing and multi-kitchen order placement.",
      bullets: [
        "Mobile-responsive design with fast load times and smooth UX.",
        "Backend integration for user data and order management.",
      ],
    },
  ],

 skills: [
  {
    category: "Mobile Development",
    icon: "📱",
    items: [
      "Flutter",
      "Dart",
      "Cross-Platform Development",
      "Responsive UI Design",
      "Material Design",
      "Desktop Applications"
    ],
  },
  {
    category: "State Management",
    icon: "⚡",
    items: [
      "GetX",
      "BLoC",
      "Provider",
      "MVVM Architecture",
      "Reactive Programming"
    ],
  },
  {
    category: "Backend & APIs",
    icon: "🔗",
    items: [
      "REST APIs",
      "NetSuite ERP Integration",
      "JSON Parsing",
      "HTTP Client",
      "API Integration"
    ],
  },
  {
    category: "Firebase & Storage",
    icon: "🔥",
    items: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Storage",
      "SharedPreferences",
      "Local JSON Cache"
    ],
  },
  {
    category: "Programming Languages",
    icon: "💻",
    items: [
      "Dart",
      "Java",
      "JavaScript",
      "Python",
      "PHP"
    ],
  },
  {
    category: "Web Technologies",
    icon: "🌐",
    items: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Web Design"
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: [
      "SQLite",
      "MySQL",
      "MongoDB",
      "Cloud Firestore"
    ],
  },
  {
    category: "Tools & Version Control",
    icon: "🛠️",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Postman",
      "Figma"
    ],
  },
  {
    category: "Software Engineering",
    icon: "🚀",
    items: [
      "Clean Architecture",
      "MVC",
      "MVVM",
      "Offline-First Applications",
      "Agile Development",
      "Technical Documentation"
    ],
  },
],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "University College of Engineering, BIT Campus",
      location: "Tiruchirappalli",
      period: "2023 – 2025",
      cgpa: "8.2 / 10",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Subbalakshmi Lakshmipathy College of Science",
      location: "Madurai",
      period: "2020 – 2023",
      cgpa: "8.3 / 10",
    },
  ],

  certifications: [
    {
      name: "Microsoft Technology Associate: Security Fundamentals",
      issuer: "Microsoft",
      detail: "Network security, OS security, software security",
    },
    {
      name: "Microsoft Technology Associate: Introduction to Programming Using Python",
      issuer: "Microsoft",
      detail: "Core syntax, data types, control flow, programming fundamentals",
    },
    {
      name: "Rashtrabhasha Praveen Uttardath Certification",
      issuer: "Government of India",
      detail: "Professional proficiency in Hindi language",
    },
  ],

  languages: ["Tamil (Native)", "English (Professional)", "Hindi (Certified)", "Sourashtra"],
};

export default resume;
