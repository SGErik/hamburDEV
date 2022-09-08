import React from "react";
import { BrowserRouter, Route, Routes as Switcher } from "react-router-dom";
import Header from "./components/Header/Header";
import MeusPedidos from "./components/MeusPedidos/MeusPedidos";
import AlterarPedido from "./pages/AlterarPedido/AlterarPedido";
import FacaSeuPedido from "./pages/FacaSeuPedido/FacaSeuPedido";
import Home from "./pages/Home/Home";


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switcher>
        <Route path="/" element={<Home />} />
        <Route path="/facaseupedido" element={<FacaSeuPedido />} />
        <Route path="/alterarseupedido/:pedido" element={<AlterarPedido />} />
        <Route path="/meuspedidos" element={<MeusPedidos />} />
      </Switcher>
    </BrowserRouter>
  );
};

export default Router;
