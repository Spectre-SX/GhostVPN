import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home.jsx";     // <- Your Home component
import NotFound from "./404/404.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
