import React from "react";

const Projects =()=>{

    return(
<section  id="projects"
 className="h-auto flex flex-col gap-10 bg-gray-900 text-white  p-16">
<h2 className="text-3xl font-semibold">Projects</h2>

<div className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full">
  <h2 className="text-xl font-semibold">Development</h2>
</div>

<div
  className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 
hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full"
>
  <h2 className="text-xl font-semibold">Design</h2>
</div>

<div
  className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 
hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-full"
>
  <h2 className="text-xl font-semibold">Graphic Design</h2>
</div>
</section>
    )
}

export default Projects;