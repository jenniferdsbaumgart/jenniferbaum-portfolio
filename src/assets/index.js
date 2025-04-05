// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

export const heroIcons = [
  <InstagramLineIcon key="first" />,
  <FacebookCircleLineIcon key="second" />,
  <DribbbleLineIcon key="third" />,
  <YoutubeLineIcon key="forth" />,
  <GithubLineIcon key="fifth" />,
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
  "Hi, I'm Jennifer Baum, a passionate frontend developer with a strong interest in ux/ui design. I have experience in building web applications using modern technologies like React, Next.js Node.js, and MongoDB. I am a quick learner and a team player who loves to work in a collaborative environment. I am always eager to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects and grow as a developer.";


// Experience
export const experienceData = [
  {
    year: 1,
    title: 'Foundation and Basics',
    education: 'High School Diploma; Fcus on computer science, mathematics, and art/design courses.',
    experience: [
      'Basic HTML/CSS; Learn through online tutorials and courses.',
      'Personal Projects: create simple personal websites or blogs.'
    ],
  },
  {
    year: 2,
    title: 'Advanced Learning and Early Experience',
    education: 'Associate`s Degree in Web development or Design: Enroll in a 2-year program covering web development and design principles.',
    experience: [
      'Freelance Work: take on small freelance projects to build a portfolio.',
      'Online Courses and Certifications: Learn Javascript, responsive design, and UX/UI design.'
    ],
  },
  {
    year: 3,
    title: 'Specialized Education and real-World Application',
    education: 'Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js)',
    experience: [
      'Advanced HTML/CSS; Learn through online tutorials and courses.',
      'Personal Projects: create simple personal websites or blogs.'
    ],
  },
  {
    year: 4,
    title: 'Experience and Growth',
    education: 'Bachelor of Science in Computer Science; Focus on web development and design.',
    experience: [
      'Advanced HTML/CSS; Learn through online tutorials and courses.',
      'Personal Projects: create simple personal websites or blogs.'
    ],
  },
]

// Skills
export const skillsData = [
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  {
    name: 'Blender',
    icon: '/skills/blender.png',
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'React',
    icon: '/skills/react.png',
  },
  {
    name: 'Next.js',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'Node.js',
    icon: '/skills/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png',
  },
  {
    name: 'Tailwind CSS',
    icon: '/skills/tailwindcss.png',
  },
  {
    name: 'Bootstrap',
    icon: '/skills/bootstrap.png',
  },
  {
    name: 'Javascript',
    icon: '/skills/javascript.png',
  },
  {
    name: 'HTML/CSS',
    icon: '/skills/htmlcss.png',
  },
  {
    name: 'Git',
    icon: '/skills/git.png',
  }
]

// Projects 

export const projectsData = [
  {
    name: 'SparkleGlove.com',
    desc: 'An e-commerce website for a fashion brand, showcasing their products and allowing users to make purchases online.',
    url: '/projects/image-1.jpg',
    tech: ['Figma', 'Photoshop', 'HTML'],
  },
  {
    name: 'Portfolio Website',
    desc: 'A personal portfolio website to showcase my skills, projects, and experience as a frontend developer.',
    url: '/projects/image-2.jpg',
    tech: ['Figma', 'Photoshop', 'HTML', 'CSS', 'Javascript'],
  },
  {
    name: 'E-commerce Website',
    desc: 'An e-commerce website for a fashion brand, showcasing their products and allowing users to make purchases online.',
    url: '/projects/image-3.jpg',
    tech: ['Figma', 'Photoshop', 'HTML', 'CSS'],
  },
  {
    name: 'Social Media App',
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
