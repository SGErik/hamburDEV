import React, { useState } from "react";
import S from "../FormPedido/FormPedido.module.css";

const FormPedido = () => {
  const numeroDoPedido = Math.floor(Math.random() * 100).toString();
  const [dataForm, setDataForm] = useState({
    pedido: numeroDoPedido,
    nome: "",
    endereco: "",
    itensdopedido: "",
    formadepagamento: "",
    mododeentrega: "",
    total: "",
  });

  function ValidaProdutoPreco() {
    if (dataForm.itensdopedido === "X-Salada") {
      dataForm.total = "R$16,00";
    } else return;
  }

  function handleChange(e, nomeDaChave) {
    setDataForm({ ...dataForm, [nomeDaChave]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    ValidaProdutoPreco();
    console.log(dataForm);
  }

  return (
    <div className={S.primaryContainer}>
      <form className={S.secondaryContainer}>
        <h1>Efetue seu pedido</h1>
        <fieldset>
          <label htmlFor="produto">Escolha seu produto:</label>
          <select
            name=""
            id="produto"
            value={dataForm.itensdopedido}
            onChange={(e) => handleChange(e, "itensdopedido")}
          >
            <option value="">Selecione um produto</option>
            <option>X-Salada</option>
            <option>X-Bacon</option>
            <option>X-Bacon Salada</option>
            <option>X-Calabresa</option>
            <option>X-Tudo</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="nome">Nome</label>
          <input
            onChange={(e) => handleChange(e, "nome")}
            type="text"
            id="nome"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="endereco">Endereço de Entrega</label>
          <input
            onChange={(e) => handleChange(e, "endereco")}
            type="text"
            id="endereco"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pagamento">Método de pagamento</label>
          <select
            name=""
            id="pagamento"
            value={dataForm.formadepagamento}
            onChange={(e) => handleChange(e, "formadepagamento")}
          >
            <option value="">Selecione a forma que deseja pagar</option>
            <option>Cartāo de Crédito</option>
            <option>PIX</option>
            <option>Dinheiro</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="entrega">Entrega</label>
          <select
            name=""
            id="entrega"
            value={dataForm.mododeentrega}
            onChange={(e) => handleChange(e, "mododeentrega")}
          >
            <option value="">Selecione o método de entrega</option>
            <option>Receber em Casa</option>
            <option>Retirar</option>
          </select>
        </fieldset>
        <button onClick={handleClick}>Efetuar Pedido</button>
      </form>
    </div>
  );
};

export default FormPedido;
