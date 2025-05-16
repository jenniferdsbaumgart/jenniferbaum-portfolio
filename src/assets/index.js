// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedinBoxLineIcon from "remixicon-react/LinkedinBoxLineIcon";

export const heroIcons = [
  {
    id: "instagram",
    icon: <InstagramLineIcon />,
    url: "https://www.instagram.com/codingjenny/",
  },
  {
    id: "linkedin",
    icon: <LinkedinBoxLineIcon />,
    url: "https://www.instagram.com/codingjenny/",
  },
  {
    id: "github",
    icon: <GithubLineIcon />,
    url: "https://github.com/jenniferdsbaumgart",
  },
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

// export const aboutData = [
//   {
//     icon: <GithubFillIcon />,
//     amount: "348",
//     text: "Github Repos",
//   },
//   {
//     icon: <Projector2LineIcon />,
//     amount: "227",
//     text: "Succesful Projects",
//   },
//   {
//     icon: <GroupLineIcon />,
//     amount: "176",
//     text: "Satisfied Clients",
//   },
//   {
//     icon: <AwardFillIcon />,
//     amount: "107",
//     text: "Awards and Recognition",
//   },
// ];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "Hi! I'm Jennifer Baumgart — a Front-End Developer and UI/UX Designer who loves bringing ideas to life through clean code and thoughtful design. I work with HTML, CSS, JavaScript, React, and Figma to build responsive, accessible, and visually engaging interfaces. Curious by nature and detail-oriented by habit, I enjoy bridging the gap between design and development to craft seamless user experiences. Whether I'm refining a layout or debugging a tricky component, I'm always aiming for clarity, usability, and impact. I'm currently diving deeper into React and design systems, and I get excited by projects that make people's lives easier.";

// Experience
export const experienceData = [
  {
    year: 1,
    title: "Foundation and Basics",
    education:
      "Introductory courses in HTML, CSS, and JavaScript. First contact with programming through self-study and online platforms.",
    experience: [
      "Built simple personal websites and experimented with visual design.",
      "Completed beginner-level projects to understand core front-end concepts.",
    ],
  },
  {
    year: 2,
    title: "Advanced Learning and Early Experience",
    education:
      "Enrolled in a degree in Analysis and Systems Development (UNINTER). Started focusing on web development and UI/UX.",
    experience: [
      "Landed my first work experience in tech as a Webmaster at The Brooklyn Brothers, working on Unilever brands using AEM, HTML/CSS, and agile tools like Jira.",
      "Dove deeper into UX design through courses and hands-on experience with Figma.",
      "Started building the bridge between design and code.",
    ],
  },
  {
    year: 3,
    title: "Exploration and Independence",
    education:
      "Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js)",
    experience: [
      "Worked as a freelancer, creating real solutions for real clients.",
      "Expanded my toolkit with JavaScript, React, accessibility best practices, and design systems.",
      "Joined Minerva Controls as a UI/UX and Front-End developer, growing through teamwork and feedback.",
    ],
  },
  {
    year: 4,
    title: "Building with Purpose",
    education:
      "Final phase of my degree, focused on creating meaningful digital products.",
    experience: [
      "Working at Minerva Controls, contributing to UI/UX and front-end development.",
      "Completed the Google UX Design Certificate (Coursera), building case studies from research to high-fidelity prototypes.",
      "Currently working on VidaPlus, a healthcare management system with a focus on usability and accessibility, as my degree final project.",
      "Co-developing Compath, a platform that empowers entrepreneurs through AI — from design to front-end implementation.",
    ],
  },
];

// Skills
export const skillsData = [
  {
    name: "HTML",
    icon: "/skills/html5.png",
  },
  {
    name: "CSS",
    icon: "/skills/css3.png",
  },
  {
    name: "React",
    icon: "/skills/react2.png",
  },
  {
    name: "Next.js",
    icon: "/skills/nextjs.png",
  },
  {
    name: "Javascript",
    icon: "/skills/javascript.png",
  },
  {
    name: "Typescript",
    icon: "/skills/typescript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwindcss.png",
  },
  {
    name: "Sass",
    icon: "/skills/sass.png",
  },
  {
    name: "Figma",
    icon: "/skills/figma2.png",
  },
  {
    name: "Adobe Photoshop",
    icon: "/skills/adobephotoshop.png",
  },

  {
    name: "WordPress",
    icon: "/skills/wordpress.png",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.png",
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgressql.png",
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs2.png",
  },
  {
    name: "Express",
    icon: "/skills/express.png",
  },
  {
    name: "Selenium",
    icon: "/skills/selenium.png",
  },
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "Git",
    icon: "/skills/git.png",
  },
  {
    name: "VS Code",
    icon: "/skills/VisualStudioCode.png",
  },
];

export const projectsData = [
  {
    name: "Monicount - Finances Application",
    tagline: "AI-powered finance management system.",
    desc: "Monicount is an elegant and minimalist web application designed to help you manage your finances efficiently and clearly. With a modern and intuitive interface, Monicount offers tools for financial tracking, planning, and expense visualization. Includes AI-generated reports with insights about your finances, available in the Premium subscription mode.",
    visualIdentity:
      "Monicount’s visual identity was carefully crafted with a focus on UI/UX Design, ensuring an intuitive and pleasant user experience. The use of turquoise as the main color conveys trust and calm, creating a welcoming and modern environment. The black and gray background provides contrast, allowing information to stand out clearly and without distractions. Gold was chosen to represent investments, evoking a sense of value and prosperity, while red is used strategically to highlight expenses, creating an effective visual alert. Every interface element was designed with accessibility and usability in mind, prioritizing simplicity and clarity. Navigation is smooth and interactions are fast and responsive, with interactive buttons and charts that make usage easy. The design was developed to provide a pleasant user experience without visual overload, allowing users to focus on what matters most: controlling their finances.",
    techUsed:
      "For Monicount’s development, I used modern technologies to ensure performance and an optimized user experience. Next.js and React enabled the creation of a dynamic and high-performance app, while TypeScript ensured code safety. I used Tailwind CSS for fast and responsive styling, and shadcn/ui for accessible and customizable UI components. Prisma was used to efficiently integrate the PostgreSQL database, and authentication was implemented with Clerk. For payment processing, I used Stripe, and data validation was handled with Zod, ensuring data integrity throughout development.",
    features: [
      "Expense Registration: Allows you to record expenses simply and organized, with customizable categories for easier financial management.",
      "Interactive Chart Visualization: Provides interactive charts for visual analysis of expenses, giving a clear and detailed view of your financial behavior.",
      "Advanced Filters: Enables filtering expenses by category, date, and amount, providing flexibility in data analysis.",
      "AI-Generated Reports: Uses artificial intelligence to generate detailed reports, offering valuable insights into your financial habits and suggesting areas for optimization.",
    ],
    url: "/projects/monicount.svg",
    tech: ["Figma", "HTML", "TailwindCSS", "ReactJS", "NextJS", "Typescript"],
    github:
      "https://github.com/jenniferdsbaumgart/monicount-fullstack-finances-app",
    demo: "https://monicount.vercel.app",
  },
  {
    name: "ToDo List",
    tagline:
      "Modern task management web app built with Svelte and RESTful architecture.",
    desc: "ToDo List is a full-stack web application designed to help users manage their daily tasks with ease and efficiency. Featuring a sleek and responsive interface, it allows users to add, edit, complete, and delete tasks in real time. The application ensures a smooth user experience through a clean layout and intuitive functionality.",
    visualIdentity:
      "The visual identity of the ToDo List was crafted to be both modern and accessible. A soft, gradient-based color palette combined with a bold typographic hierarchy creates an aesthetically pleasing experience while keeping the user focused on their tasks. The layout is responsive and adapts seamlessly across devices.",
    techUsed:
      "This project was developed using Svelte for the front-end framework, with TailwindCSS for utility-first styling. JavaScript handles client-side interactions, while Node.js and Express power the backend. Data is stored and managed using MySQL. The system communicates through a RESTful API, enabling efficient and scalable interaction between front and back end.",
    features: [
      "Task CRUD Functionality: Users can create, update, complete, and delete tasks with real-time feedback.",
      "Editable Interface: Tasks can be edited inline, allowing for a smooth and intuitive editing experience.",
      "Progress Tracking: The app dynamically displays the number of created and completed tasks.",
      "Responsive Design: Fully responsive layout ensures usability on desktops, tablets, and mobile devices.",
      "Data Persistence: Tasks are stored in a MySQL database, enabling persistent data management through an Express-based REST API.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Implement inline editing without affecting the layout.",
        solution:
          "Used local state management in Svelte to isolate the editable task and synchronize updates to the backend only on save.",
      },
      {
        challenge: "Ensure full responsiveness across devices.",
        solution:
          "Applied TailwindCSS utility classes and rigorous device testing to maintain consistent UX.",
      },
    ],
    url: "/projects/todolist.svg",
    tech: [
      "Svelte",
      "HTML",
      "JavaScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MySQL",
      "REST API",
      "Full Stack",
    ],
    github: "https://github.com/jenniferdsbaumgart/todo-list-svelte",
    demo: "https://todolist-svelte.vercel.app",
  },
  {
    name: "First Portfolio",
    tagline: "My first personal portfolio built from scratch in 2023.",
    desc: "This project marks the beginning of my journey as a developer and designer. It was my very first personal portfolio, handcrafted with only HTML, CSS, and JavaScript. I used this site to showcase my early projects, talk about who I am, and demonstrate the foundational skills I had at the time. It helped me build confidence, test visual ideas, and put my name out there online.",
    url: "/projects/first-portfolio.svg",
    demo: "https://jenniferds.netlify.app/",
    github: "https://github.com/jenniferdsbaumgart/projectJDS2.0",
    visualIdentity:
      "The visual identity was clean and minimalistic, focusing on soft pastel colors, card-style layout, and subtle transitions. I emphasized readability and tried to bring a calm and personal vibe that matched my story.",
    techUsed:
      "HTML5, CSS3 (custom styling, media queries), Vanilla JavaScript (for interactivity). No frameworks or libraries were used — everything was coded manually from scratch.",
    features: [
      "Responsive layout across desktop and mobile",
      "Introductory 'About Me' section",
      "Early projects display",
      "Custom Javascript animations for UI elements",
      "Contact form functional",
    ],
    challengesAndSolutions: [
      {
        challenge: "Building a responsive layout without using any frameworks.",
        solution:
          "I learned and applied media queries manually and structured the layout with Flexbox and percentage-based widths.",
      },
      {
        challenge: "Creating engaging UI interactions with no libraries.",
        solution:
          "Used basic JavaScript DOM manipulation and event listeners to create hover effects and simple transitions.",
      },
      {
        challenge: "Designing without experience in UX/UI.",
        solution:
          "Studied examples online and followed basic principles of alignment, contrast, and spacing to maintain a clean look.",
      },
    ],
    tech: ["Figma", "HTML", "CSS", "Javascript"],
  },
  {
    name: "Notícias Cidade",
    tagline: "Local news portal with interactivity.",
    desc: "An application that allows users to access local news from a specific city. The platform allows news submission and reader interaction.",
    url: "/projects/image-3.jpg",
    tech: ["Figma", "Photoshop", "HTML", "CSS"],
    github: "https://github.com/seuusuario/noticias-cidade",
    demo: "https://noticias-cidade.vercel.app",
  },
  {
    name: "TOL",
    tagline: "Social content sharing platform.",
    desc: "A social network where users can create profiles, share photos, and interact with other users. The design prioritizes user experience.",
    url: "/projects/image-4.jpg",
    tech: ["Figma", "Photoshop", "HTML", "CSS"],
    github: "https://github.com/seuusuario/tol",
    demo: "https://tol-app.vercel.app",
  },
  {
    name: "ClimaAgora",
    tagline: "Real-time weather forecast application.",
    desc: "ClimaAgora provides up-to-date weather data for various cities, with graphical visualizations of weather conditions and forecasts for the coming days.",
    url: "/projects/image-5.jpg",
    tech: ["Figma", "Photoshop", "HTML", "CSS"],
    github: "https://github.com/seuusuario/climaagora",
    demo: "https://climaagora.vercel.app",
  },
  {
    name: "Household Budget",
    tagline: "Simple and efficient household budget management.",
    desc: "An app focused on helping users organize their household finances. Allows categorizing expenses and tracking income, making budget management easier.",
    url: "/projects/image-7.jpg",
    tech: ["Figma", "Photoshop", "HTML", "CSS"],
    github: "https://github.com/seuusuario/household-budget",
    demo: "https://household-budget.vercel.app",
  },
];

export const projectsButton = [
  "All",
  "Figma",
  "Photoshop",
  "HTML",
  "CSS",
  "Javascript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "Typescript",
  "Full Stack",
  "Svelte",
];

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "contact",
    name: "ContactMe",
    icon: <ContactsBook2LineIcon />,
  },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";
import { LinkedinIcon } from "lucide-react";

export const moonIcon = <MoonFoggyFillIcon />;
export const sunIcon = <SunFoggyFillIcon />;
