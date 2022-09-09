import React, { useEffect, useState } from "react";
import S from "../MeusPedidos/MeusPedidos.module.css";
import { TbEdit, TbTrash } from "react-icons/tb";
import { api } from "../../Services/api";

const MeusPedidos = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    function dataGet() {
      try {
        api.get("/pedidos").then((response) => {
          setDados(response.data);
        });
      } catch (e) {
        console.log(e);
      }
    }
    dataGet();
    console.log(dados);
  }, []);

  return (
    <div className={S.primaryContainer}>
      <h1 className={S.Title}>Meus pedidos</h1>
      {dados
        .map((dado) => {
          return (
            <div className={S.cardProducts} key={dado._id}>
              <div className={S.cardInfo}>
                <img src={dado.img} alt="" />
                <div className={S.cardData}>
                  <h1>
                    <span className={S.OrderNumber}>#{dado.pedido}</span>
                    {dado.nome}
                  </h1>
                  <div className={S.InfoProducts}>
                    <p>Produto: {dado.itensdopedido}</p>
                    <p>Entrega: {dado.endereco}</p>
                    <p>Endereço: {dado.mododeentrega}</p>
                  </div>
                  <div className="PaymentData">
                    <h4>{dado.total}</h4>
                    <p>{dado.formadepagamento}</p>
                  </div>
                </div>
                <div className="btnActions">
                  <div>
                    <TbEdit size={28} color="black" />
                  </div>
                  <div>
                    <TbTrash size={28} color="black" />
                  </div>
                </div>
              </div>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default MeusPedidos;
