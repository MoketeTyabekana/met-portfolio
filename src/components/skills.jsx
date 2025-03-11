import React from "react";
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";

const Skills = () => {

    const skills = [
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Node.js", icon: <FaNodeJs /> }
    ];

    return(
        <div className=" w-full mt-10 px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] ">
             <h2 className="text-xl font-semibold">Skills & Technologies</h2>
            <div className="flex flex-row flex-wrap justify-around">
           
                {skills.map((skill, index) => (
                    <div className=" text-center" key={index} style={{  margin: "10px", width: "100px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                       <span className=""> {skill.icon}</span>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )


}


export default Skills;

// style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}