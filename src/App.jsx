import React, { useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Page1 from "./pages/Home";
import Page2 from "./pages/ThankYou";
import Page3 from "./pages/Food";
import Page4 from "./pages/Dessert";
import Page5 from "./pages/Movie";
import Page6 from "./pages/Flower";
import Page7 from "./pages/Date";
import { createContext } from "react";

const pages = [Page1, Page2, Page7, Page3, Page4, Page5, Page6];

export const AppContext = createContext({state: {
  date: "",
  food: "",
  dessert: "",
  movie: "",
}, setState: (value) => {}});

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [state, setState] = useState({
    date: "",
    food: "",
    dessert: "",
    movie: "",
  });

  const nextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const CurrentPage = pages[pageIndex];

  return (
    <div className="h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        <AppContext.Provider value={{ state, setState }}>
          <CurrentPage key={pageIndex} nextPage={nextPage} />
        </AppContext.Provider>
      </AnimatePresence>
    </div>
  );
};

export default App;
