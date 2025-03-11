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
        <div>
            <div className="flex flex-row flex-wrap justify-around">
                {skills.map((skill, index) => (
                    <div className="bg-white" key={index} style={{ textAlign: "center", margin: "10px", width: "100px", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )


}


export default Skills;

// style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}