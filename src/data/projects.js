import kuriftu from "../../public/kuriftu.jpg";
import zmall from "../../public/Zmall.jpg";
import zmall1 from "../../public/zmall1.jpg";
import zmall2 from "../../public/zmall2.jpg";
import askal from "../../public/askal.jpg";
import emmacare from "../../public/emmacare.jpg";
import health from "../../public/health.jpg";
import hospitality from "../../public/hospitality.png";
import dev from "../../public/dev.png";
import lib from "../../public/lib.png";
import logo from "../../public/logo.jpg";
import doorlock from "../../public/doorlock.jpg";
import askal1 from "../../public/askal1.png";
import askal2 from "../../public/askal2.png";
import maritime1 from "../../public/maritime1.png";
import maritime2 from "../../public/maritime2.png";
import maritime3 from "../../public/maritime3.png";
import kuriftu1 from "../../public/kuriftu1.jpg";
import kuriftu2 from "../../public/kuriftu2.png";
import kuriftu3 from "../../public/kuriftu3.jpg";
import hospitality1 from "../../public/hospitality1.png";
import hospitality2 from "../../public/hospitality2.png";
import doorlock1 from "../../public/doorlock1.png";
import doorlock2 from "../../public/doorlock2.png";
import library1 from "../../public/library1.png";
import library2 from "../../public/library2.png";
import emmacare1 from "../../public/emmacare1.jpg";
import emmacare2 from "../../public/emmacare2.png";

// High-quality placeholders for missing images
const placeholders = {
    maritime: "https://images.unsplash.com/photo-1454165833767-027eeef1596e?auto=format&fit=crop&q=80&w=1200",
    kuriftu: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    zmall: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200",
    charity: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    wearable: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=1200",
    event: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    hackathon: "https://images.unsplash.com/photo-1504384308090-c89e1244a05f?auto=format&fit=crop&q=80&w=1200",
    library: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200",
    tutors: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    iot: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
};

export const projects = [
    {
        id: "kuriftu-miniapp",
        title: "Kuriftu X-mass Discount Campaign",
        image: kuriftu,
        images: [kuriftu, kuriftu1, kuriftu2, kuriftu3],
        description: "Full-stack Gena discount platform for Kuriftu Resorts. Integrated Addis Pay, transportation system, and admin dashboard.",
        fullDescription: "Worked on a full-stack Gena discount platform for Kuriftu Resorts, integrating Addis Pay payments, a transportation (ride) system, and an admin dashboard for ticket verification. The platform went live in production and successfully processed 2.5M+ ETB in transactions.",
        tags: ["Full Stack", "Payments", "Admin Dashboard"],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
        demo: "https://gwp.kurifturesorts.com/",
        role: "Full Stack Developer",
        date: "Project Based",
        challenges: "Ensuring secure and reliable payment processing with local payment providers.",
        solutions: "Implemented robust error handling and webhook verification for financial transactions."
    },
     {
        id: "africa-maritime",
        title: "Africa Maritime Conference",
        image: maritime1,
        images: [maritime1, maritime2, maritime3],
        description: "Official website for the Africa Maritime Conference. Features event details, agenda, speaker profiles, and registration info.",
        fullDescription: "A comprehensive conference platform built for the Africa Maritime Conference. The website serves as the central hub for event information, allowing attendees to view the schedule, read about speakers, and register for the event. It features a responsive design, interactive agenda, and seamless integration with registration systems.",
        tags: ["Event Website", "Conference", "Web Design"],
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        demo: "https://africamaritimeconf.com/",
        github: "",
        role: "Full Stack Developer",
        date: "2024",
        challenges: "Creating an engaging and informative user experience for a large-scale international conference with high traffic volumes.",
        solutions: "Implemented a clean, professional design with optimized assets and localized caching for better global performance."
    },
    {
        id: "zmall-miniapp",
        title: "Zmall MiniApp",
        image: zmall1,
        images: [zmall1, zmall2, zmall],
        description: "Redesigned Zmall mini app at ETTA Solutions. Built entire frontend, deployed in 3 months, handling thousands of daily users.",
        fullDescription: "Worked at ETTA Solutions redesigning the Zmall mini app integrated with Dashen Bank. I built the entire frontend, deployed it within three months, and it now handles several thousand daily users.",
        tags: ["Frontend", "Mini App", "High Performance"],
        technologies: ["React", "Redux", "Styled Components"],
        demo: "https://zmall.atta.com.et/",
        role: "Frontend Developer",
        date: "2024",
        challenges: "Optimizing frontend performance for low-bandwidth mobile devices in the local market.",
        solutions: "Used efficient state management and code-splitting to minimize initial bundle size and improve load times."
    },
    {
        id: "askal-charity",
        title: "Askal Charity Website",
        image: askal,
        images: [askal, askal1, askal2],
        description: "Official website for Askal Charity with multilingual support (7 languages), volunteer management, and admin dashboard.",
        fullDescription: "Designed and developed the official website for Askal Charity. Implemented multilingual support for 7 languages, a volunteer management system, and a member management system with four distinct roles plus an admin dashboard to manage users, roles, and site content.",
        tags: ["Multilingual", "Management System", "Web Design"],
        technologies: ["React", "Firebase", "i18next", "Tailwind"],
        github: "https://github.com/Yohanamtesfaye/Askal-Charity-Website/",
        demo: "https://askalcharityassociation.org/",
        role: "Volunteer Developer",
        date: "Volunteer",
        challenges: "Managing complex user roles and multilingual content synchronization across the site.",
        solutions: "Architected a custom CMS layer on top of Firebase to allow easy content updates without code changes."
    },
    {
        id: "emma-care",
        title: "Emma Care Wearable",
        image: emmacare,
        images: [emmacare, emmacare1, emmacare2],
        description: "AI recommendation engine for maternal care. ML model for blood pressure prediction, Node.js backend, and Arduino firmware.",
        fullDescription: "Developed an end-to-end maternal health wearable stack, including an AI recommendation engine, a machine-learning model for blood pressure prediction, a Node.js backend for real-time telemetry and alerts, and Arduino firmware for live sensor data streaming.",
        tags: ["AI/ML", "IoT", "Node.js", "Arduino"],
        technologies: ["Python", "TensorFlow", "Node.js", "C++", "React"],
        demo: "https://emma-care-five.vercel.app",
        role: "Software Engineer",
        date: "Project",
        challenges: "Achieving high accuracy for blood pressure prediction from non-invasive sensors.",
        solutions: "Developed a custom ensemble ML model and calibrated it with real patient data for improved reliability."
    },
    {
        id: "health-pharma",
        title: "Health & Pharma",
        image: health,
        images: [health],
        description: "Website for Health & Pharma event organized by ALX. Collaborated with a team of three.",
        fullDescription: "Collaborated with a team of three to create the website for the Health & Pharma event organized by ALX, focusing on registration and information dissemination.",
        tags: ["Event Site", "Collaboration", "Web Dev"],
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        demo: "https://healthandpharma.tech",
        role: "Web Developer",
        date: "2023"
    },
    {
        id: "hospitality-hackathon",
        title: "Hospitality Hackathon",
        image: hospitality,
        images: [hospitality, hospitality1, hospitality2],
        description: "Official site for Ethiopia's first Hospitality Hackathon. Handled participant registration and event details.",
        fullDescription: "Worked with a small team to build the official site for Ethiopia's first Hospitality Hackathon, including participant registration and event details.",
        tags: ["Hackathon", "Registration", "Web Dev"],
        technologies: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/Abrish-21/alx-hackathon-web",
        demo: "https://hospitalityhackathon.et/",
        role: "Web Developer",
        date: "2023"
    },
    {
        id: "dev-meetup",
        title: "Dev Meetup Website",
        image: dev,
        images: [dev],
        description: "User-friendly platform to showcase the Dev Meetup event. built in a team of three.",
        fullDescription: "Developed the Dev Meetup website as part of a three-person team, focusing on a clear, user-friendly platform to showcase the event.",
        tags: ["Community", "Event Platform"],
        technologies: ["React", "Firebase", "Styled Components"],
        github: "https://github.com/devmeetup-et/Dev-meetup-3",
        demo: "https://devmeetup.et/",
        role: "Web Developer",
        date: "2023"
    },
    {
        id: "aastu-library",
        title: "AASTU Library System",
        image: lib,
        images: [lib, library1, library2],
        description: "Full-featured library management system with analytics, reporting, and bilingual support.",
        fullDescription: "A full-featured library management system for AASTU with analytics, reporting, and bilingual support.",
        tags: ["Management System", "Analytics", "Bilingual"],
        technologies: ["Java", "Spring Boot", "MySQL", "React"],
        github: "https://github.com/Yohanamtesfaye/AASTU-Library-Managment_System.git",
        demo: "https://aastu-library-managment-system.vercel.app/",
        role: "Full Stack Developer",
        date: "2023"
    },
    {
        id: "aastu-doorlock",
        title: "AASTU Door Lock",
        image: doorlock,
        images: [doorlock, doorlock1, doorlock2],
        description: "Integrated IoT door lock system with React frontend, MySQL backend, and Arduino hardware.",
        fullDescription: "An integrated door lock system combining Arduino hardware, a React frontend, and a MySQL backend to log entries/exits and support multiple languages.",
        tags: ["IoT", "React", "MySQL", "Hardware"],
        technologies: ["Arduino", "React", "MySQL", "Node.js"],
        github: "https://github.com/Yohanamtesfaye/AASTU-Door-lock",
        demo: "https://drive.google.com/file/d/1zqlVMF4N5WCNc58FPHCK37kkdhTrIKY-/view?usp=sharing",
        role: "IoT Engineer",
        date: "2022"
    },
];
