import React from "react";
import { BrowserRouter, Route, Routes as Switcher } from "react-router-dom";
import Header from "./components/Header/Header";
import AlterarPedido from "./pages/AlterarPedido/AlterarPedido";
import FacaSeuPedido from "./pages/FacaSeuPedido/FacaSeuPedido";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD:src/Router.jsx
      <Header />
=======
    <Header />
>>>>>>> 435a3e1451659305ad18068faf6733cbc22e9e3c:src/routes.jsx
      <Switcher>
        <Route path="/" element={<Home />} />
        <Route path="/facaseupedido" element={<FacaSeuPedido />} />
        <Route path="/alterarseupedido/:pedido" element={<AlterarPedido />} />
      </Switcher>
    </BrowserRouter>
  );
};

export default Router;
