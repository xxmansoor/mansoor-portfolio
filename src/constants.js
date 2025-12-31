// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import encoderbytes from "./assets/company_logo/encoderbytes.png";
import Saylani from "./assets/company_logo/Saylani.png";

// Education Section Logo's
import Uni_logo from "./assets/education_logo/Uni_logo.png";

// Project Section Logo's
import Tourism_logo from "./assets/work_logo/Tourism.png";
import portfolio from "./assets/work_logo/portfolio.png";
import food from "./assets/work_logo/food.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "JavaScript", logo: javascriptLogo }],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: encoderbytes,
    role: "Trainee",
    company: "EncoderBytes (PRIVATE) LIMITED",
    date: "Mar 2025 - 04 jun 2025",
    desc: "Completed a NAVTTC-certified Web Development training program at EncoderBytes. Gained hands-on experience in building responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Worked on  projects, improved problem-solving skills, and followed industry best practices for full-stack development.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind css",
      "Bootstrap",
      "Javascript",
      "ReactJS",
      "Nodejs",
      "Expressjs",
      "MongoDb",
    ],
  },
  {
    id: 1,
    img: Saylani,
    role: "Trainee",
    company: "Saylani Mass IT Taining center Peshawar",
    date: "July 2023 - March 2024",
    desc: "Completed full-stack MERN development training at Saylani Mass IT Training Center. Gained hands-on experience in building dynamic web applications using MongoDB, Express.js, React, and Node.js. Worked on projects involving CRUD operations, and responsive UI design. Strengthened problem-solving skills and understanding of full-stack application architecture.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind css",
      "Bootstrap",
      "Javascript",
      "ReactJS",
      "Nodejs",
      "Expressjs",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Uni_logo,
    school: "The University of Agriculture, Peshawar",
    date: "Nov 2022 - Progress",
    desc: "I am currently pursuing a BS in Information Technology, focusing on programming, databases, and web development. I am passionate about learning modern technologies and building real-world projects to grow as an IT professional.",
    degree: "Bachelor of Science in Information Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "Tourism Website",
    description:"Building Tourism Website with reactjs",
    image:Tourism_logo,
    tags: [ "React JS", "Tailwind CSS"],
    github: "https://github.com/xxmansoor/toursim-website.git",
  },
  {
    id: 1,
    title: "portfolio",
    description:"building portfolio using react js and tailwind CSS",
    image:portfolio,
    tags: [
      "React JS",
      "Tailwind css"
    ],
    github: "https://github.com/xxmansoor/react-portfolio.git",
  },

  {
    id: 3,
    title: "food delivery app",
    description:"Building Food delivery web app using reactjs and tailwind css",
    image: food,
    tags: ["React JS", "Taiwind CSS"],
    github: "https://github.com/xxmansoor/react-food-delivery.git",
  },
];
