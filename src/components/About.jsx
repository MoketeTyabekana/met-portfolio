import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiTypescript,
  SiGithubcopilot,
  SiNextdotjs,
  SiSass
} from "react-icons/si";

import { skills as skillsData } from "../data/skills";

const iconMap = {
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiJavascript: <SiJavascript />,
  SiReact: <SiReact />,
  SiTailwindcss: <SiTailwindcss />,
  SiBootstrap: <SiBootstrap />,
  SiGit: <SiGit />,
  SiFigma: <SiFigma />,
  SiAdobephotoshop: <SiAdobephotoshop />,
  SiAdobexd: <SiAdobexd />,
  SiAdobeillustrator: <SiAdobeillustrator />,
  SiTypescript: <SiTypescript />,
  SiGithubcopilot: <SiGithubcopilot />,
  SiNextdotjs: <SiNextdotjs />,
  SiSass: <SiSass />
};

const About = () => {
  const skills = skillsData.map((s) => ({
    name: s.name,
    icon: iconMap[s.iconName] || <SiReact />,
    link: s.link
  }));

  return (
    <section
      id="about"
      className=" max-w-8xl h-auto bg-gray-950 pt-20 p-4 lg:p-16 flex flex-col justify-center items-center"
    >
      <div className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] lg:text-start text-justify">
        <h2 className="lg:text-3xl text-2xl font-semibold">About Me</h2>
        <p className="text-sm lg:text-xl">
          I’m Mokete Elias Tyabekana, a passionate Frontend Developer & UI/UX
          Designer with expertise in React, JavaScript, and Tailwind CSS,
          dedicated to building responsive and user-friendly applications. With
          a Diploma in Information Technology from Central University of
          Technology, Free State, I have experience in web development, UI/UX
          design, and IT support, having worked as an IT Officer at Softstart
          BTI (Botshabelo Digital Hub), where I mentored interns and assisted
          startups. I enjoy transforming ideas into digital experiences, whether
          through intuitive UI designs in Figma or developing scalable web
          applications. Currently, I’m expanding my knowledge in React Native
          and working on projects that merge creativity with functionality to
          solve real-world problems.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 flex flex-wrap lg:gap-10 gap-4 w-full lg:mt-10 mt-4">
        <div className="px-4 py-8 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]">
          <h2 className="lg:text-3xl text-2xl font-semibold">Education</h2>
          <div className="text-sm lg:text-xl px-4">
            <li>
              Diploma in Information Technology : Central University Of
              Technology
            </li>
            <li>
              National Senior Certificate-Matric : Kagisho Secondary
              School
            </li>
          </div>
        </div>

        <div className="px-4 py-8 bg-gray-400 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]">
          <h2 className="lg:text-3xl text-2xl font-semibold">
            Certifications / Short Courses
          </h2>
          <div className="text-sm lg:text-xl px-4">
            <li>
              Front-End Web Development
              <a
                href="https://www.alxafrica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {" "}
                [ALX Africa]
              </a>
            </li>
            <li>
              Web Programming Foundations
              <a
                href="https://www.linkedin.com/learning/web-programming-foundations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {" "}
                [LinkedIn]
              </a>
            </li>
            <li>
              HTML Essential Training
              <a
                href="https://www.linkedin.com/learning/html-essential-training-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {" "}
                [LinkedIn]
              </a>
            </li>
            <li>
              JavaScript Essentials
              <a
                href="https://skillsforall.com/course/javascript-essentials-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {" "}
                [Cisco]
              </a>
            </li>
            <li>
              Professional Foundations
              <a
                href="https://www.alxafrica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {" "}
                [ALX Africa]
              </a>
            </li>

            <li>
             Full-Stack Software Engineering
              <a
                href="https://www.alxafrica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                {" "}
                [FNB App Academy]
              </a>
            </li>
          </div>
        </div>
      </div>

      <div className="w-full lg:mt-10 mt-4 px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]">
        <h2 className="lg:text-3xl text-2xl font-semibold">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-11 gap-2 lg:gap-4">
          {skills &&
            skills.length > 0 &&
            skills.map((skill, index) => (
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center justify-between gap-y-4 py-4 px-2 hover:bg-blue-100 transition"
                key={index}
              >
                <span className="text-5xl">{skill.icon}</span>
                <p className="text-sm font-semibold">{skill.name}</p>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
