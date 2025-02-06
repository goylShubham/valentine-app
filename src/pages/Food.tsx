import React, { useState } from "react";
import pasta from "../assets/pasta.webp";
import burger from "../assets/burger.webp";
import korean from "../assets/korean.webp";
import pizza from "../assets/pizza.webp";
import rajamaRice from "../assets/rajma-rice.webp";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../App";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const Food = ({ nextPage }) => {
  const {state, setState} = useContext(AppContext)
  const foodList = [
    { name: "Pasta", src: pasta },
    { name: "Burger", src: burger },
    { name: "Korean", src: korean },
    { name: "Pizza", src: pizza },
    { name: "Rajma Rice", src: rajamaRice },
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
          {foodList.map((food) => (
            <div
              key={food.name}
              className="carousel-item relative cursor-pointer"
              onClick={() => setState(prevState => ({...prevState, food: food.name}))}
            >
              <figure>
                <img
                  src={food.src}
                  className="w-[300px] h-[400px] object-cover"
                />
                <figcaption className="absolute bg-black p-2 opacity-70 rounded ">
                  {food.name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title ">What would you like to eat?</h2>
          <p>(Select the dish)</p>
          <div className="card-actions justify-end">
            {state.food && (
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

export default Food;
