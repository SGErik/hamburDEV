import React from "react";
import { BrowserRouter, Route, Routes as Switcher } from "react-router-dom";
import Header from "./components/Header/Header";
import AlterarPedido from "./pages/AlterarPedido/AlterarPedido";
import FacaSeuPedido from "./pages/FacaSeuPedido/FacaSeuPedido";
import Home from "./pages/Home/Home";
import Pedidos from "./pages/Pedidos/Pedidos";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switcher>
        <Route path="/" element={<Home />} />
        <Route path="/facaseupedido" element={<FacaSeuPedido />} />
        <Route path="/alterarseupedido/:pedido" element={<AlterarPedido />} />
        <Route path="/meuspedidos" element={<Pedidos />} />
      </Switcher>
    </BrowserRouter>
  );
};

export default Router;
