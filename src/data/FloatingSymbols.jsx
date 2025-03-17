import React from "react";
import { motion } from "framer-motion";

const symbols = ["</>", "{}", "()", "=", ";", "&&", "|", "!==", "++"];

const FloatingSymbols = () => {
  const numSymbols = 50; // Number of symbols to fill the background

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {Array.from({ length: numSymbols }).map((_, index) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        return (
          <motion.div
            key={index}
            className="absolute text-gray-800 text-3xl"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            initial={{
              y: 0,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: [0, -50],
              opacity: [0, 0.1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {symbol}
          </motion.div>
        );
      })}
    </div>
  );
};


export default FloatingSymbols;
