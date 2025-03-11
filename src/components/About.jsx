import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ];

  return (
    <section
      id="about"
      className="h-auto  bg-gray-950  p-16 flex flex-col justify-center items-center"
    >
      <div
        className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20
text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]"
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p>
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

      <div className=" flex flex-row gap-10 w-full mt-10">
        <div
          className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-1/2"
        >
          <h2 className="text-xl font-semibold">Education</h2>
          <div>
            <li>
              Diploma in Information Technology: Central University Of
              Technology
            </li>
            <li>
              National Senior Certificate [Grade 12/Matric] : Kagisho Secondary
              Scchool
            </li>
          </div>
        </div>

        <div
          className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col 
gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-1/2"
        >
          <h2 className="text-xl font-semibold">
            Certifications / Short Courses
          </h2>
          <div>
            <li className="list-">
              Front-End Web Development Program
              <a href="" className="text-blue-400">
                {" "}
                [ALX Africa]
              </a>
            </li>
            <li>
              National Senior Certificate
              <a href="" className="text-blue-400">
                {" "}
                [freeCodeCamp]
              </a>
            </li>
            <li>
              Web Programming Foundations
              <a href="" className="text-blue-400">
                {" "}
                [LinkedIn]
              </a>
            </li>
            <li>
              HTML Essential Training
              <a href="" className="text-blue-400">
                {" "}
                [LinkedIn]
              </a>
            </li>
            <li>
              JavaScript Essentials
              <a href="" className="text-blue-400">
                {" "}
                [Cisco]
              </a>
            </li>
            <li>
              Professional Foundations
              <a href="" className="text-blue-400">
                {" "}
                [ALX Africa]
              </a>
            </li>
          </div>
        </div>
      </div>

      <div className=" w-full mt-10 px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] ">
        <h2 className="text-xl font-semibold">Skills & Technologies</h2>
        <div className="flex flex-row flex-wrap justify-between">
          {skills.map((skill, index) => (
            <div
              className=" text-center bg-white rounded-md text-gray-950 flex flex-col items-center gap-y-4 w-[100px] h-[120px] p-4"
              key={index}
            >
              <span className="text-5xl"> {skill.icon}</span>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
