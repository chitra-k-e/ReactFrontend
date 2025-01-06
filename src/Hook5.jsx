import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Params from "./Params";
import Params2 from "./Params2";

const Hook5 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Params />}/>
        <Route path="/:id" element={<Params />} />
        <Route path="/Params2-b" element={<Params2 />} />
      </Routes>
    </Router>
  );
};

export default Hook5;
