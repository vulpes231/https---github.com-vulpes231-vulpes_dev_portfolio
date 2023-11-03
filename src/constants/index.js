import { useRef } from "react";

const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
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

export { navLinks, experiences };
