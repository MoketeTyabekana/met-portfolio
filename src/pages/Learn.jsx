import React from "react";
import Footer from "../components/Footer";

const Learn = () => {
  return (
    <>
      <div
        className="h-lvh bg-gray-900 text-white flex flex-col 
items-center justify-center p-8"
      >
        <h1 className="text-4xl font-bold mb-4">Learn</h1>
        <p className="text-lg max-w-2xl text-center">
          Curated resources for advancing your web development and design skills
          will be available here soon. Please check back for updates.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Learn;
