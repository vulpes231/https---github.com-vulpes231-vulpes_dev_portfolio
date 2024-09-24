import { bank, health, psych, quadx, rabbit, track, vp } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const experiences = [
  {
    id: 1,
    position: "Software Developer",
    company: "@Freelance",
    date: "July 2023 - Present",
    achievements: [
      "Collaborated with a cross-functional team to develop a custom ERC-20 governance token from scratch. Designed and implemented the backend infrastructure using Hardhat and Solidity, ensuring security and functionality",
      "Created a user-friendly frontend interface using JavaScript, HTML, and CSS for token holders to interact with the governance platform",
      "Implemented smart contract functionalities for voting, proposals, and token management",
      "Successfully completed the project on time, meeting all client requirements and expectations",
    ],
  },
  {
    id: 2,
    position: "Software Developer",
    company: "@Vastcoin Ltd",
    date: "March 2023 - July 2023",
    achievements: [
      "Developed REST APIs for an inventory web application, enabling the company to efficiently manage and track employees, and products thereby boosting the company overall productivity",
      "constructed supplementary web pages and components for an existing web application, enhancing user interaction and overall usability",
      "Developed a fullstack collaborative web application that facilitates seamless teamwork among employees, streamlining the process of addressing user complaints by grouping staff and assigning them to customer tickets.",
    ],
  },
  {
    id: 3,
    position: "Software Developer",
    company: "@Freelance",
    date: "Jan 2023 - Feb 2023",
    achievements: [
      "contributed to an existing web application by revamping the landing page to enhance usability and accessibilty",
      "resolved an OTP delivery issue with the server's mailer, ensuring that newly registered users receive OTP in their emails as intended",
    ],
  },
];

const projects = [
  {
    id: 1,
    img: track,
    title:
      "A Full stack package management and tracking web application that allow users to manage and track their packages",
    tools: ["React.js", "Node.js", "MongoDB", "Redux"],
    demo_url: "https://247shipslimited.com",
    repo_url: "https://github.com/vulpes231/cserve-ui",
  },
  {
    id: 2,
    img: vp,
    title:
      "An innovative article summarizer application that condenses complex content into concise, digestible summaries, offering users a quick and efficient way to grasp key information.",
    tools: ["React.js", "Tailwind", "AI"],
    demo_url: "",
    repo_url: "https://github.com/vulpes231/vgpt",
  },
  {
    id: 3,
    img: psych,
    title: "An online store.",
    tools: ["ReactJs", "Tailwind", "NodeJs"],
    demo_url: "https://psychedelicsng.online",
    repo_url: "https://github.com/vulpes231/bishop",
  },
  {
    id: 4,
    img: quadx,
    title:
      "Quadx is an intuitive full-stack trading app designed to empower users with seamless access to the financial markets. With real-time data and a user-friendly interface ",
    tools: ["ReactJs", "Redux", "NodeJs", "API", "MongoDB"],
    demo_url: "",
    repo_url: "https://github.com/vulpes231/itrust-ui",
  },
  {
    id: 5,
    img: rabbit,
    title:
      "Rabbit is a dynamic full-stack online e-commerce application that provides users with a diverse range of products. With a seamless shopping experience and the ability to process payments in cryptocurrency",
    tools: ["ReactJs", "Redux", "NodeJs", "API", "MongoDB"],
    demo_url: "",
    repo_url: "https://github.com/vulpes231/rabbit-client",
  },
];

const aboutArticles = [
  {
    id: 1,
    title: "What I Do",
    content: `My primary focus is on web development and mobile app development.
    I enjoy working with JavaScript, React, Nodejs, ReactNative,
    MongoDB and I'm always eager to learn new technologies to stay at
    the forefront of the ever-evolving tech landscape.`,
  },
  {
    id: 2,
    title: "What I Believe",
    content: `I'm a firm believer in the importance of clean and maintainable
    code. I'm dedicated to writing software that not only solves
    problems but is also easy to understand, maintain, and scale. I
    thrive in collaborative environments and enjoy working in
    cross-functional teams to achieve the best results.`,
  },
  {
    id: 3,
    title: "What Drives Me",
    content: ` I'm fueled by a desire to continuously improve and learn. Whether
    it's through personal projects, online courses, or industry
    events, I'm always seeking new opportunities to expand my skill
    set and stay up-to-date with the latest developments in
    technology.`,
  },
];

export { navLinks, experiences, projects, aboutArticles };
