// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

export const heroIcons = [
  { id: "instagram", icon: <InstagramLineIcon /> },
  { id: "facebook", icon: <FacebookCircleLineIcon /> },
  { id: "dribbble", icon: <DribbbleLineIcon /> },
  { id: "youtube", icon: <YoutubeLineIcon /> },
  { id: "github", icon: <GithubLineIcon /> },
];


// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
  {
    icon: <GithubFillIcon />,
    amount: "348",
    text: "Github Repos",
  },
  {
    icon: <Projector2LineIcon />,
    amount: "227",
    text: "Succesful Projects",
  },
  {
    icon: <GroupLineIcon />,
    amount: "176",
    text: "Satisfied Clients",
  },
  {
    icon: <AwardFillIcon />,
    amount: "107",
    text: "Awards and Recognition",
  },
];

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText = 
  "Hi! I'm Jennifer Baumgart — a Front-End Developer and UI/UX Designer who loves bringing ideas to life through clean code and thoughtful design. I work with HTML, CSS, JavaScript, React, and Figma to build responsive, accessible, and visually engaging interfaces. Curious by nature and detail-oriented by habit, I enjoy bridging the gap between design and development to craft seamless user experiences. Whether I'm refining a layout or debugging a tricky component, I'm always aiming for clarity, usability, and impact. I'm currently diving deeper into React and design systems, and I get excited by projects that make people's lives easier.";


// Experience
export const experienceData = [
  {
    year: 1,
    title: 'Foundation and Basics',
    education: 'Introductory courses in HTML, CSS, and JavaScript. First contact with programming through self-study and online platforms.',
    experience: [
      'Built simple personal websites and experimented with visual design.',
      'Completed beginner-level projects to understand core front-end concepts.',
    ],
  },
  {
    year: 2,
    title: 'Advanced Learning and Early Experience',
    education: 'Enrolled in a degree in Analysis and Systems Development (UNINTER). Started focusing on web development and UI/UX.',
    experience: [
      'Landed my first work experience in tech as a Webmaster at The Brooklyn Brothers, working on Unilever brands using AEM, HTML/CSS, and agile tools like Jira.',
      'Dove deeper into UX design through courses and hands-on experience with Figma.',
      'Started building the bridge between design and code.',
    ],
  },
  {
    year: 3,
    title: 'Exploration and Independence',
    education: 'Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js)',
    experience: [
      'Worked as a freelancer, creating real solutions for real clients.',
      'Expanded my toolkit with JavaScript, React, accessibility best practices, and design systems.',
      'Joined Minerva Controls as a UI/UX and Front-End developer, growing through teamwork and feedback.',
    ],
  },
  {
    year: 4,
    title: 'Building with Purpose',
    education: 'Final phase of my degree, focused on creating meaningful digital products.',
    experience: [
      'Working at Minerva Controls, contributing to UI/UX and front-end development.',
      'Completed the Google UX Design Certificate (Coursera), building case studies from research to high-fidelity prototypes.',
      'Currently working on VidaPlus, a healthcare management system with a focus on usability and accessibility, as my degree final project.',
      'Co-developing Compath, a platform that empowers entrepreneurs through AI — from design to front-end implementation.',
    ],
  },
]

// Skills
export const skillsData = [
  {
    name: 'HTML',
    icon: '/skills/html5.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css3.png',
  },
  {
    name: 'React',
    icon: '/skills/react2.png',
  },
  {
    name: 'Next.js',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'Javascript',
    icon: '/skills/javascript.png',
  },
  {
    name: 'Typescript',
    icon: '/skills/typescript.png',
  },
  {
    name: 'Tailwind CSS',
    icon: '/skills/tailwindcss.png',
  },
  {
    name: 'Sass',
    icon: '/skills/sass.png',
  },
  {
    name: 'Figma',
    icon: '/skills/figma2.png',
  },
  {
    name: 'Adobe Photoshop',
    icon: '/skills/adobephotoshop.png',
  },

  {
    name: 'WordPress',
    icon: '/skills/wordpress.png',
  },
  {
    name: 'Node.js',
    icon: '/skills/nodejs2.png',
  },
  {
    name: 'Express',
    icon: '/skills/express.png',
  },
  {
    name: 'PostgreSQL',
    icon: '/skills/postgressql.png',
  },
  {
    name: 'Selenium',
    icon: '/skills/selenium.png',
  },
  {
    name: 'Python',
    icon: '/skills/python.png',
  },
  {
    name: 'Git',
    icon: '/skills/git.png',
  },
  {
    name: 'VS Code',
    icon: '/skills/VisualStudioCode.png',
  }
]

// Projects 
export const projectsData = [
  {
    name: 'Expenses Tracker',
    desc: 'An e-commerce website for a fashion brand, showcasing their products and allowing users to make purchases online.',
    url: '/projects/image-1.jpg',
    tech: ['React', 'Typescript', 'HTML'],
  },
  {
    name: 'Portfolio Website',
    desc: 'A personal portfolio website to showcase my skills, projects, and experience as a frontend developer.',
    url: '/projects/image-2.jpg',
    tech: ['Figma', 'HTML', 'CSS', 'Javascript'],
  },
  {
    name: 'Notícias Cidade',
    desc: 'An e-commerce website for a fashion brand, showcasing their products and allowing users to make purchases online.',
    url: '/projects/image-3.jpg',
    tech: ['Figma', 'Photoshop', 'HTML', 'CSS'],
  },
  {
    name: 'TOL',
    desc: 'A social media application that allows users to create profiles, connect with friends, and share content.',
    url: '/projects/image-4.jpg',
    tech: ['Figma', 'Photoshop', 'HTML', 'CSS'],
  },
  {
    name: 'ClimaAgora',
    desc: 'A social media application that allows users to create profiles, connect with friends, and share content.',
    url: '/projects/image-4.jpg',
    tech: ['Figma', 'Photoshop', 'HTML', 'CSS'],
  },
  {
    name: 'Cashpath.ai',
    desc: 'A social media application that allows users to create profiles, connect with friends, and share content.',
    url: '/projects/image-4.jpg',
    tech: ['Figma', 'Photoshop', 'HTML', 'CSS'],
  },
  {
    name: 'Household Budget',
    desc: 'A social media application that allows users to create profiles, connect with friends, and share content.',
    url: '/projects/image-4.jpg',
    tech: ['Figma', 'Photoshop', 'HTML', 'CSS'],
  },
]

export const projectsButton = [
  'All',
  'Figma',
  'Photoshop',
  'HTML',
  'CSS',
  'Javascript',
  'ReactJS',
  'TailwindCSS',
  'NextJS',
  'FramerMotion',
  'ThreeJS',
]

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'contact',
    name: 'ContactMe',
    icon: <ContactsBook2LineIcon />,
  }
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'	

export const moonIcon = <MoonFoggyFillIcon />
export const sunIcon = <SunFoggyFillIcon />
