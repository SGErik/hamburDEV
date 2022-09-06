import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MeusPedidos from "./components/MeusPedidos/MeusPedidos";
import FacaSeuPedido from "./pages/FacaSeuPedido/FacaSeuPedido";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facaseupedido" element={<FacaSeuPedido />} />
        <Route path="/meuspedidos" element={<MeusPedidos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
