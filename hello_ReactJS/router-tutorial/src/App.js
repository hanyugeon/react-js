import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/info" element={<About />} /> */}
      </Routes>
    </div>
  );
};

export default App;
