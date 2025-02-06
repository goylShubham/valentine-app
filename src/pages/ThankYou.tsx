import React from "react";
import dog from "../assets/dog.gif";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const ThankYou = ({ nextPage }) => {
  return (
    <motion.div
      className="text-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Confetti />
      <div className="card bg-base-100 shadow-xl">
        <div className="carousel rounded-box w-96">
          <div className="carousel-item">
            <img src={dog} className="w-full object-cover" />
          </div>
        </div>

        <div className="card-body items-center text-center">
          <h2 className="card-title max-w-80">Wooooohooooo! Thank you!</h2>
          <p>Don't go yet!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={nextPage}>
              Click me UWU
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThankYou;
