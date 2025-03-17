import React from "react";
import projects from "../data/development.json";
import designs from "../data/designs.json";
import { FaArrowRight, FaFigma, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-auto flex flex-col gap-10 bg-gray-900 text-white p-4  lg:p-16"
    >
      <h2 className="text-xl lg:text-3xl font-semibold">Projects</h2>

      {/* Coding Projects */}
      <div className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full">
        <h2 className="lg:text-3xl text-2x1 font-semibold">
          Font-End Development
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4  lg:justify-between gap-2  lg:gap-6">
          {projects.projects &&
            projects.projects.length > 0 &&
            projects.projects.slice(0, 4).map((project, index) => (
              <div
                className=" text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center justify-between  h-auto  p-2 lg:hover:scale-105"
                key={index}
              >
                <img
                  src={project.image}
                  alt="project image"
                  className="rounded"
                />
                <div className="flex flex-row justify-between items-center w-full mt-4">
                  <a href={project.link} className="flex justify-start gap-2 items-center">
                    <span className="text-sm lg:text-lg font-semibold text-gray-800">
                      {project.title}
                    </span>
                    <span className="text-gray-800"><FaArrowRight /></span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className=" text-gray-800 cursor-pointer bg-gray-900 p-2 rounded-full animate-pulse"
                  >
                    <FaGithub size={16} className="text-gray-50" />
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* A condition statement to activate the view mmore button only if the array has more than 4 projects in the list */}
        {projects.projects && projects.projects.length > 4 && (
          <a
            href=""
            className="flex flex-row items-center gap-4 self-end text-gray-50 font-bold hover:text-blue-400"
          >
            <span>View More</span> <FaArrowRight size={16} />
          </a>
        )}
      </div>

      {/* UI/UX Design Projects */}
      <div
        className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 
lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full"
      >
        <h2 className="lg:text-3xl text-2x1 font-semibold">UI/UX Design</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:justify-between gap-2 lg:gap-6">
          {designs.designs &&
            designs.designs.length > 0 &&
            designs.designs.slice(0, 4).map((design, index) => (
              <div
                className="text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center h-auto p-2 lg:hover:scale-105 gap-4"
                key={index}
              >
                {/* Image wrapper to control aspect ratio */}
                <div className="w-full aspect-[5/3] rounded overflow-hidden">
                  <img
                    src={design.image}
                    alt="project image"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Title link */}
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="text-sm lg:text-lg font-semibold text-gray-800">
                    {design.title}
                  </span>

                  <a
                    href={design.link}
                    target="_blank"
                    className=" text-gray-800 cursor-pointer bg-gray-900 p-2 rounded-full animate-pulse"
                  >
                    <FaFigma size={16} className="text-gray-50" />
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* A condition statement to activate the view mmore button only if the array has more than 4 projects in the list */}
        {designs.designs && designs.designs.length > 4 && (
          <a
            href=""
            className="flex flex-row items-center gap-4 self-end text-gray-50 font-bold hover:text-blue-400"
          >
            <span>View More</span> <FaArrowRight size={16} />
          </a>
        )}
      </div>
    </section>
  );
};

export default Projects;
