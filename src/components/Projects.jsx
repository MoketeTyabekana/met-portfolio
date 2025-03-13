import React from "react";
import projects from "../data/development.json";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-auto flex flex-col gap-10 bg-gray-900 text-white  p-16 md:p-4"
    >
      <h2 className="text-3xl font-semibold">Projects</h2>

      <div className="px-4 py-8 md:py-2 md:px-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full">
        <h2 className="text-xl font-semibold">Font-End Development</h2>

        <div className="flex flex-wrap xl:justify-between md:justify-between  gap-4 md:gap-2">
          {projects.projects &&
            projects.projects.length > 0 &&
            projects.projects.slice(0,4).map((project, index) => (
              <div
                className=" text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center justify-between w-[300px] md:w-[250px] h-auto  p-2 hover:scale-105"
                key={index}
              >
                <img
                  src={project.image}
                  alt="project image"
                  className="rounded"
                />
                <div className="flex flex-row justify-center w-full mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-xl flex items-center justify-center gap-2 "
                  >
                    <span className="text-sm font-bold text-gray-800">
                      {project.title}
                    </span>{" "}
                    <FaArrowRight size={12} />
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

      <div
        className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 
hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full"
      >
        <h2 className="text-xl font-semibold">UI/UX Design</h2>

        <div className="flex flex-wrap xl:justify-between  gap-4">
          {projects.projects &&
            projects.projects.length > 0 &&
            projects.projects.slice(0,4).map((project, index) => (
              <div
                className=" text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center justify-between w-[300px] md:w-[250px] h-auto  p-2 hover:scale-105"
                key={index}
              >
                <img
                  src={project.image}
                  alt="project image"
                  className="rounded"
                />
                <div className="flex flex-row justify-center w-full mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-xl flex items-center justify-center gap-2 "
                  >
                    <span className="text-sm font-bold text-gray-800">
                      {project.title}
                    </span>{" "}
                    <FaArrowRight size={12} />
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

      <div
        className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 
hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full"
      >
        <h2 className="text-xl font-semibold">Graphic Design</h2>

        <div className="flex flex-wrap xl:justify-between  gap-4">
        {projects.projects &&
          projects.projects.length > 0 &&
          projects.projects.slice(0,4).map((project, index) => (
            <div
              className=" text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center justify-between w-[300px] md:w-[250px] h-auto  p-2 hover:scale-105"
              key={index}
            >
              <img
                src={project.image}
                alt="project image"
                className="rounded"
              />
              <div className="flex flex-row justify-center w-full mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-xl flex items-center justify-center gap-2 "
                >
                  <span className="text-sm font-bold text-gray-800">
                    {project.title}
                  </span>{" "}
                  <FaArrowRight size={12} />
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
    </section>
  );
};

export default Projects;
