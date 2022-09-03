import React, { useState } from "react";
import S from "../FormPedido/FormPedido.module.css";

const FormPedido = () => {
  const [dataForm, setDataForm] = useState({
    pedido: "",
    nome: "",
    endereco: "",
    itensdopedido: "",
    formadepagamento: "",
    mododeentrega: "",
    total: "",
  });

  return (
    <div className={S.primaryContainer}>
      <form className={S.secondaryContainer}>
        <h1>Efetue seu pedido</h1>
        <fieldset>
          <label htmlFor="produto">Escolha seu produto:</label>
          <select name="" id="produto">
            <option value="">X-Salada</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" />
        </fieldset>
        <fieldset>
          <label htmlFor="endereco">Endereço de Entrega</label>
          <input type="text" id="endereco" />
        </fieldset>
        <fieldset>
          <label htmlFor="pagamento">Método de pagamento</label>
          <select name="" id="pagamento">
            <option value="">Cartāo de Crédito</option>
            <option value="">PIX</option>
            <option value="">Dinheiro</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="entrega">Método de pagamento</label>
          <select name="" id="entrega">
            <option value="">Receber em Casa</option>
            <option value="">Retirar</option>
          </select>
        </fieldset>
        <button>Efetuar Pedido</button>
      </form>
    </div>
  );
};

export default FormPedido;
