import React, { useState, useContext } from "react";
import htdbw from "../assets/how_to_date.webp";
import jtyjn from "../assets/jaane_tu.webp";
import ld from "../assets/love_divided.webp";
import mismatched from "../assets/mismatched.webp";
import znmd from "../assets/znmd.webp";
import wtcs from "../assets/wtcs.webp";
import perfact_date from "../assets/perfact_date.webp";
import { motion } from "framer-motion";

import { AppContext } from "../App";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const Movie = ({ nextPage }) => {
  const {state, setState} = useContext(AppContext)
  const movies = [
    { name: "How to Date Billy Walsh", src: htdbw },
    { name: "Janne Tu Ya Jaane Na", src: jtyjn },
    { name: "Love Divided", src: ld },
    { name: "Mismatched", src: mismatched },
    { name: "Zindagi Na Milegi Dobara", src: znmd },
    { name: "Where The Crawdad Sings", src: wtcs },
    { name: "The Perfact Date", src: perfact_date },
  ];
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
          {movies.map((movie) => (
            <div
              key={movie.name}
              className="carousel-item cursor-pointer"
              onClick={() => setState(prevState => ({...prevState, movie: movie.name}))}
            >
              <figure>
              <img
                src={movie.src}
                className="w-[300px] h-[400px] object-cover"
              />
              </figure>
              
            </div>
          ))}
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title max-w-80">Let's watch something together ghghghg?</h2>
          <p>(Select a title)</p>
          <div className="card-actions justify-end">
            {state.movie && <button className="btn btn-primary" onClick={nextPage}>
              One last time, Promise! 🥰
            </button>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Movie;
