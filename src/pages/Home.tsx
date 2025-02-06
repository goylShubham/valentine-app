import React, { useState } from "react";
import cat from "../assets/cat.gif";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const questions = [
  "Are you sure? 🥺",
  "But why? 😢",
  "What if I give you chocolate? 🍫",
  "Just think about it... ❤️",
  "No? That hurts! 💔",
  "I promise I’ll make you smile! 😊",
  "What if I sing you a song? 🎶",
  "What if I buy you food? 🍕",
  "You're breaking my heart! 💞",
  "Please reconsider? 🥰",
];

const Home = ({ nextPage }) => {
  const [question, setQuestion] = useState("");

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  return (
    <motion.div
      className="text-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="card bg-base-100 shadow-xl">
        <figure className="rounded-box w-96">
          <img src={cat} alt="" className="w-full object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title max-w-80">Will you be my Valentine?</h2>
          <p>{question}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={nextPage}>
              Yes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setQuestion(getRandomQuestion())}
            >
              I no no wanna o(╥﹏╥)o
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
