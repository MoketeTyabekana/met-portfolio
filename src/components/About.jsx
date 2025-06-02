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
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Photoshop ", icon: <SiAdobephotoshop /> },
    { name: "XD", icon: <SiAdobexd /> },
    { name: "Illustrator", icon: <SiAdobeillustrator /> },
  ];

  return (
    <section
      id="about"
      className="h-auto  bg-gray-950  p-4 lg:p-16 flex flex-col  justify-center items-center"
    >
      <div
        className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20
text-white  flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] lg:text-start text-justify"
      >
        <h2 className="lg:text-3xl text-2x1 font-semibold">About Me</h2>
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

      <div className="  lg:grid lg:grid-cols-2 flex flex-wrap lg:gap-10 gap-4 w-full lg:mt-10 mt-4">
        <div className="px-4 py-8 w-full  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] ">
          <h2 className="lg:text-3xl text-2x1  font-semibold">Education</h2>
          <div className="text-sm lg:text-xl">
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
          className="px-4 py-8 bg-gray-400 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col 
                  gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] "
        >
          <h2 className="lg:text-3xl text-2x1 font-semibold">
            Certifications / Short Courses
          </h2>
          <div className="text-sm lg:text-xl">
            <li>
              Front-End Web Development
              <a href="" className="text-blue-400">
                {" "}
                [ALX Africa]
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

      <div className=" w-full lg:mt-10 mt-4 px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] ">
        <h2 className="lg:text-3xl text-2x1 font-semibold">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-11 gap-2 lg:gap-4">
          {skills &&
            skills.length > 0 &&
            skills.map((skill, index) => (
              <div
                className=" text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center justify-between gap-y-4 py-4 px-2"
                key={index}
              >
                <span className="text-5xl"> {skill.icon}</span>
                <p className="text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
