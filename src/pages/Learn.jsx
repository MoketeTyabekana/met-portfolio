import React from "react";
import Footer from "../components/Footer";

const Learn = () => {
  return (
    <>
      <div
        className="h-lvh bg-gray-900 text-white flex flex-col 
items-center justify-center p-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Learn Page</h1>
<p className="text-lg max-w-2xl text-center">
  Discover carefully curated resources to support your journey in 
  <strong> Web Development</strong>, <strong>UI/UX Design</strong>, and 
  <strong> Graphic Design</strong>. Whether you're just getting started or 
  looking to sharpen your skills, you’ll find top-rated tutorials, tools, 
  and free courses handpicked for continuous growth and creativity.
  <br />
  <strong>New content is added regularly — stay tuned!</strong>
</p>

      </div>
      <Footer />
    </>
  );
};

export default Learn;
