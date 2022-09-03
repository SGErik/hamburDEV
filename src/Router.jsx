import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacaSeuPedido from "./pages/FacaSeuPedido/FacaSeuPedido";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facaseupedido" element={<FacaSeuPedido />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
