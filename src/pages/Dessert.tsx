import React, { useState } from "react";
import waffle from "../assets/waffle.webp";
import kalaJaamun from "../assets/kala-jaamun.webp";
import iceCream from "../assets/icecream.webp";
import cupCake from "../assets/cupcake.webp";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const Dessert = ({ nextPage }) => {
  const {state, setState} = useContext(AppContext);
  const desserts = [
    { name: "Waffle", src: waffle },
    { name: "Kala Jaamun", src: kalaJaamun },
    { name: "Ice Cream", src: iceCream },
    { name: "Cup Cake", src: cupCake },
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
          {desserts.map((dessert) => (
            <div
              key={dessert.name}
              className="carousel-item relative cursor-pointer"
              onClick={() => setState(prevState => ({...prevState, dessert: dessert.name}))}
            >
              <figure>
                <img
                  src={dessert.src}
                  className="w-[300px] h-[400px] object-cover"
                />
                <figcaption className="absolute bg-black p-2 opacity-70 rounded">
                  {dessert.name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title max-w-80">What do you want in dessert?</h2>
          <p>(Select the item)</p>
          <div className="card-actions justify-end">
            {state.dessert &&<button className="btn btn-primary" onClick={nextPage}>
              One more time, click me! 😋
            </button>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dessert;
