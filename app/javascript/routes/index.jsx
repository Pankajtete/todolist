import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Create from "../components/Create";
import Show from "../components/Show";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="homepage/create" element={<Create />} />
      <Route path="homepage/show/:id" element={<Show/>}/>
    </Routes>
  </Router>
);