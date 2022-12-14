import React, { useContext, useEffect, useState } from "react";
import S from "../MeusPedidos/MeusPedidos.module.css";
import { TbEdit, TbTrash } from "react-icons/tb";
import { dataDelete, dataGet } from "../../Services/api";
import { PedidoContext } from "../../context/pedidoContext";
import { useNavigate } from "react-router-dom";

import Hamburguer from "../../assets/hamburguer1.jpg";

const MeusPedidos = () => {
  const { pedido, setPedido } = useContext(PedidoContext);
  const [dados, setDados] = useState([]);
  const [Index, setIndex] = useState(-2);
  const navigate = useNavigate();
  useEffect(() => {
    dataGet(setDados, dados);
  }, []);
  useEffect(() => {
    if (Index != -2) {
      dataDelete(pedido);
      setTimeout(() => {
        console.log("entrei");
        document.location.reload(true);
      }, 1000);
    }
  }, [Index]);

  return (
    <div className={S.primaryContainer}>
      <h1 className={S.Title}>Meus pedidos</h1>
      {dados
        .map((dado, index) => {
          return (
            <div className={S.cardProducts} key={index}>
              <div className={S.cardInfo}>
                <img src={!dado.img ? Hamburguer : dado.img} alt="" />
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
                    <TbEdit
                      size={28}
                      color="black"
                      cursor="pointer"
                      onClick={() => {
                        setPedido(dado.pedido);
                        navigate(`/alterarseupedido/${pedido}`);
                      }}
                    />
                  </div>
                  <div>
                    <TbTrash
                      size={28}
                      color="black"
                      cursor="pointer"
                      onClick={() => {
                        setPedido(dado.pedido);
                        setIndex(index);
                      }}
                    />
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
