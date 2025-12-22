import React, { useState } from "react";
import projects from "../data/development.json";
import designs from "../data/designs.json";
import graphics from "../data/graphics.json";
import { FaArrowRight, FaFigma, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllDesigns, setShowAllDesigns] = useState(false);
  const [showAllGraphics, setShowAllGraphics] = useState(false);

  return (
    <>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:justify-between gap-2  lg:gap-6">
            {projects.projects &&
              projects.projects.length > 0 &&
              (showAllProjects
                ? projects.projects
                : projects.projects.slice(0, 4)
              ).map((project, index) => (
                <div
                  className=" text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center justify-between  h-auto  p-2 lg:hover:scale-105 ease-in-out duration-300 "
                  key={index}
                >
                  <img
                    src={project.image}
                    alt="project image"
                    className="rounded"
                  />

                  <p className="text-xs text-start text-gray-800 mt-2 p-2 bg-gray-100 rounded-sm">
                    {project.decription}
                  </p>
                  <div className="flex flex-row justify-between items-center w-full mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-start gap-1 items-center"
                    >
                      <span className="text-sm lg:text-md font-semibold text-gray-800 uppercase">
                        {project.title}
                      </span>
                      <span className="text-gray-800  scale-75">
                        <FaArrowRight />
                      </span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-gray-800 cursor-pointer bg-gray-900 p-2 rounded-full animate-pulse"
                    >
                      <FaGithub size={16} className="text-gray-50" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* View All / Show Less button for Front-End Development - only show if more than 4 projects */}
          {projects.projects && projects.projects.length > 4 && (
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="flex flex-row items-center gap-4 self-end text-gray-50 font-bold hover:text-blue-400 mt-4"
            >
              <span>{showAllProjects ? "Show Less" : "View All"}</span>{" "}
              <FaArrowRight size={16} className={showAllProjects ? "rotate-180" : ""} />
            </button>
          )}
        </div>

        {/* UI/UX Design Projects */}
        <div
          className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 
lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full"
        >
          <h2 className="lg:text-3xl text-2x1 font-semibold">UI/UX Design</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:justify-between gap-2 lg:gap-6">
            {designs.designs &&
              designs.designs.length > 0 &&
              (showAllDesigns
                ? designs.designs
                : designs.designs.slice(0, 4)
              ).map((design, index) => (
                <div
                  className="text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center h-auto p-2 lg:hover:scale-105 gap-4 ease-in-out duration-300"
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
                    <span className="text-sm lg:text-md font-semibold text-gray-800 uppercase">
                      {design.title}
                    </span>

                    <a
                      href={design.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-gray-800 cursor-pointer bg-gray-900 p-2 rounded-full animate-pulse"
                    >
                      <FaFigma size={16} className="text-gray-50" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* View All / Show Less button for UI/UX Design - only show if more than 4 designs */}
          {designs.designs && designs.designs.length > 4 && (
            <button
              onClick={() => setShowAllDesigns(!showAllDesigns)}
              className="flex flex-row items-center gap-4 self-end text-gray-50 font-bold hover:text-blue-400 mt-4"
            >
              <span>{showAllDesigns ? "Show Less" : "View All"}</span>{" "}
              <FaArrowRight size={16} className={showAllDesigns ? "rotate-180" : ""} />
            </button>
          )}
        </div>

        {/* Graphic Design Projects - gallery */}
        <div className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white flex flex-col gap-4 lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full">
          <h2 className="lg:text-3xl text-2x1 font-semibold">Graphic Design</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4">
            {graphics.graphics &&
              graphics.graphics.length > 0 &&
              (showAllGraphics ? graphics.graphics : graphics.graphics.slice(0, 10)).map(
                (graphic, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="bg-gray-50 rounded-md overflow-hidden aspect-square flex items-center justify-center">
                    <img
                      src={graphic.image}
                      alt={graphic.title || "graphic design project"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {graphic.title && (
                    <p className="text-xs font-semibold text-gray-100 line-clamp-2">
                      {graphic.title}
                    </p>
                  )}
                </div>
              ))}
          </div>

          {/* View More / View Less toggle at bottom right if there are additional graphics */}
          {graphics.graphics && graphics.graphics.length > 10 && (
            <button
              type="button"
              onClick={() => setShowAllGraphics(!showAllGraphics)}
              className="self-end text-sm lg:text-base font-semibold text-blue-300 hover:text-blue-400 flex items-center gap-2 mt-3"
            >
              <span>{showAllGraphics ? "View Less" : "View More"}</span>
              <FaArrowRight size={14} className={showAllGraphics ? "rotate-180" : ""} />
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
