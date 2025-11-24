import React, { useState } from "react";
import projects from "../data/development.json";
import designs from "../data/designs.json";
import { FaArrowRight, FaFigma, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [showDesignsModal, setShowDesignsModal] = useState(false);

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
              projects.projects.map((project, index) => (
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
                      className=" text-gray-800 cursor-pointer bg-gray-900 p-2 rounded-full animate-pulse"
                    >
                      <FaGithub size={16} className="text-gray-50" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
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
              designs.designs.slice(0, 4).map((design, index) => (
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
                      className=" text-gray-800 cursor-pointer bg-gray-900 p-2 rounded-full animate-pulse"
                    >
                      <FaFigma size={16} className="text-gray-50" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* Always show View More if more than 4 designs */}
          {designs.designs && designs.designs.length > 4 && (
            <button
              onClick={() => setShowDesignsModal(true)}
              className="flex flex-row items-center gap-4 self-end text-gray-50 font-bold hover:text-blue-400 mt-4"
            >
              <span>View More</span> <FaArrowRight size={16} />
            </button>
          )}

          {/* Modal for all design projects */}
          {showDesignsModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="bg-gray-900 rounded-lg overflow-y-auto shadow-lg relative w-[95vw] max-w-5xl max-h-[90vh] p-6">
                <button
                  className="absolute top-2 right-4 text-white text-2xl z-10"
                  onClick={() => setShowDesignsModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-6">All UI/UX Designs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {designs.designs.map((design, index) => (
                    <div
                      className="text-center bg-gray-50 rounded-md text-gray-950 flex flex-col items-center h-auto p-2 lg:hover:scale-105 gap-4 ease-in-out duration-300"
                      key={index}
                    >
                      <div className="w-full aspect-[5/3] rounded overflow-hidden">
                        <img
                          src={design.image}
                          alt="project image"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <span className="text-sm lg:text-md font-semibold text-gray-800 uppercase">
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
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
