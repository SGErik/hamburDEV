import React from 'react'
import S from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/LogoBranco.png'
import Button from '../Button/Button'



const Header = () => {
    return (
        <header>
            <div className={S.headerText}>
                <h2>O Simples da melhor forma!</h2>
            </div>

            <div className={S.mainHeader}>
                <Link to='/'>
                    <img src={Logo} alt="logo" className={S.imgLogo} />
                </Link>
                <div className={S.toPages}>
                    <NavLink to='/'>HOME</NavLink>
                    <a href='#cardapio'>CARDÁPIO</a>
                    <a href='#quemsomos'>QUEM SOMOS</a>
                    <NavLink to='/meuspedidos'>MEUS PEDIDOS</NavLink>
                    <Link to='/facaseupedido'>
                        <Button className={S.btn} text='DELIVERY' />
                    </Link>
                </div>
            </div>





        </header>
    )
}

export default Header