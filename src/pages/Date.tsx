import { motion } from "framer-motion";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const Date = ({ nextPage }) => {
  const {state, setState}  = useContext(AppContext)

  return (
    <motion.div
      className="text-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="card bg-base-100 shadow-xl">
        <div className="carousel rounded-box w-96">
          <div className="carousel-item">
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2RoZHE4dXo0NjVvdWlhd2VpdWl5OWlwODV2cTd4Znc1aHJ3aXdmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WK7omsLop0431tZjXb/giphy.gif"
              className="w-[384px] h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title max-w-80">When are you free?</h2>
          <p>Select a date</p>
          <input
            type="date"
            value={state.date}
            onChange={(e) => setState(prevState => ({...prevState, date: e.target.value}))}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="card-actions justify-end">
            {state.date && (
              <button className="btn btn-primary" onClick={nextPage}>
                There's more! Click me 😉
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Date;
