import React, { useContext, useEffect, useState } from "react";
import S from "../MeusPedidos/MeusPedidos.module.css";
import { TbEdit, TbTrash } from "react-icons/tb";
import { dataDelete, dataGet } from "../../Services/api";
import { PedidoContext } from "../../context/pedidoContext";
import { useNavigate } from "react-router-dom";

const MeusPedidos = () => {
  const { pedido, setPedido } = useContext(PedidoContext)
  const [dados, setDados] = useState([]);
  const [deleta, setDeleta] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    dataGet(setDados, dados);
  }, []);
  useEffect(() => {
    if (deleta == true) {
      dataDelete(pedido)
      dataGet(setDados, dados)
      setDeleta(false)
    }
  }, [deleta])

  return (
    <div className={S.primaryContainer}>
      <h1 className={S.Title}>Meus pedidos</h1>
      {dados
        .map((dado) => {
          return (
            <div className={S.cardProducts} key={dado._id}>
              <div className={S.cardInfo}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1TPTOkAgcOOL7HcHKAlj_LniimOiedHZdQ&usqp=CAU"
                  alt=""
                />
                <div className={S.cardData}>
                  <h1>
                    <span>#{dado.pedido}</span>
                    <br></br>
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
                    <TbEdit size={28} color="black" onClick={() => {
                      setPedido(dado.pedido)
                      navigate(`/alterarseupedido/${pedido}`)
                    }} />
                  </div>
                  <div>
                    <TbTrash size={28} color="black" onClick={() => {
                      setPedido(dado.pedido)
                      setDeleta(true)
                    }} />
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
