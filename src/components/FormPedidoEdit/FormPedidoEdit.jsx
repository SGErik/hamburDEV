import React, { useState } from "react";
import S from "../FormPedidoEdit/FormPedido.module.css";
import { api } from "../../Services/api";
import { useContext } from "react";
import { PedidoContext } from "../../context/pedidoContext";
import { useEffect } from "react";

const FormPedidoEdit = () => {
  const { pedido } = useContext(PedidoContext);
  const [nome, setNome] = useState("");
  const [NomePedido, setNomePedido] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagemento, setPagamento] = useState("C");
  const [entrega, setEntrega] = useState("");
  const [total, setTotal] = useState("");

  async function Mounted() {
    await api.get(`/pedidos/id/${pedido}`).then((res) => {
      setNome(res.data.pedidos.nome);
      setEndereco(res.data.pedidos.endereco);
      setNomePedido(res.data.pedidos.itensdopedido);
      setPagamento(res.data.pedidos.formadepagamento);
      setEntrega(res.data.pedidos.mododeentrega);
      setTotal(res.data.pedidos.total);
    });
  }
  useEffect(() => {
    Mounted();
  }, []);
  function ValidaProdutoePreco(e) {
    if (e.target.value === "X-Salada") {
      setNomePedido(e.target.value);
      setTotal("R$15,00");
    } else if (e.target.value === "X-Bacon") {
      setNomePedido(e.target.value);
      setTotal("R$16,00");
    } else if (e.target.value === "X-Bacon Salada") {
      setNomePedido(e.target.value);
      setTotal("R$18,00");
    } else if (e.target.value === "X-Calabresa") {
      setNomePedido(e.target.value);
      setTotal("R$17,00");
    } else if (e.target.value === "X-Tudo") {
      setNomePedido(e.target.value);
      setTotal("R$22,00");
    } else return;
  }
  function EditPedido(e) {
    e.preventDefault();

    const data = {
      pedido: pedido,
      nome: nome,
      endereco: endereco,
      itensdopedido: NomePedido,
      formadepagamento: pagemento,
      mododeentrega: entrega,
      total: total,
    };
    console.log(data);
    api.patch(`/pedidos/id/${pedido}`, data);
  }

  return (
    <div className={S.primaryContainer}>
      <form className={S.secondaryContainer}>
        <h1>Altere seu pedido</h1>
        <fieldset>
          <label htmlFor="produto">Escolha seu produto:</label>
          <select
            name=""
            id="produto"
            value={NomePedido}
            onChange={(e) => ValidaProdutoePreco(e)}
          >
            <option value="X-Salada">X-Salada</option>
            <option value="X-Tudo">X-Tudo</option>
            <option value="X-Bacon">X-Bacon</option>
            <option value="X-Bacon Salada">X-Bacon Salada</option>
            <option value="X-Calabresa">X-Calabresa</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="nome">Nome</label>
          <input
            onChange={(e) => setNome(e.target.value)}
            type="text"
            id="nome"
            value={nome}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="endereco">Endere??o de Entrega</label>
          <input
            type="text"
            id="endereco"
            onChange={(e) => setEndereco(e.target.value)}
            value={endereco}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pagamento">M??todo de pagamento</label>
          <select
            name=""
            id="pagamento"
            onChange={(e) => setPagamento(e.target.value)}
          >
            <option value="Cart??o de Cr??dito">Cart??o de Cr??dito</option>
            <option value="PIX">PIX</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="entrega">M??todo de pagamento</label>
          <select
            name=""
            id="entrega"
            onChange={(e) => setEntrega(e.target.value)}
          >
            <option value="Receber em Casa">Receber em Casa</option>
            <option value="Retirar  ">Retirar</option>
          </select>
        </fieldset>
        <button onClick={(e) => EditPedido(e)}>Alterar Pedido</button>
      </form>
    </div>
  );
};

export default FormPedidoEdit;
