import React from "react";
import S from "../MeusPedidos/MeusPedidos.module.css";
import { TbEdit, TbTrash } from "react-icons/tb";

const MeusPedidos = () => {
  return (
    <div className={S.primaryContainer}>
      <h1>Meus pedidos</h1>
      <div className={S.cardProducts}>
        <div className={S.cardInfo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1TPTOkAgcOOL7HcHKAlj_LniimOiedHZdQ&usqp=CAU"
            alt=""
          />
          <div className={S.cardData}>
            <h1>
              <span>#51</span> Joao Silva
            </h1>
            <p>Produto: X-Salada</p>
            <p>Entrega: Delivery</p>
            <p>Endereço: Delivery</p>
            <h1>R$17,00</h1>
          </div>
          <div className="btnActions">
            <h1>
              <TbEdit size={32} color="black" />
              <TbTrash size={32} color="black" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeusPedidos;
