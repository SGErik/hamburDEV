import React from "react";
import { BrowserRouter, Route, Routes as Switcher } from "react-router-dom";
import Header from "./components/Header/Header";
import FacaSeuPedido from "./pages/FacaSeuPedido/FacaSeuPedido";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switcher>
        <Route path="/" element={<Home />} />
        <Route path="/facaseupedido" element={<FacaSeuPedido />} />
      </Switcher>
    </BrowserRouter>
  );
};

export default Routes;
