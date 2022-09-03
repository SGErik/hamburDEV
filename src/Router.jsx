import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacaSeuPedido from "./pages/FacaSeuPedido/FacaSeuPedido";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/facaseupedido" element={<FacaSeuPedido />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
