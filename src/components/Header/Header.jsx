import React from 'react'
import S from './Header.module.css'
import Logo from '../../assets/LogoBranco.png'
import Button from '../Button/Button'


const Header = () => {
    return (
        <header>
            {/* <div className={S.headerText}>
                <h2>O Simples da melhor forma!</h2>
            </div> */}
            <div className={S.mainHeader}>
                {/* <Link to='/'> */}
                <img src={Logo} alt="logo" className={S.imgLogo}/>
                {/* </Link> */}
                <div className={S.toPages}>
                    <a href="">HOME</a>
                    <a href="">CARDÁPIO</a>
                    <a href="">QUEM SOMOS</a>
                        <Button className={S.btn} text='DELIVERY' />
                </div>
                {/* <div className={S.btnDiv}> */}
                {/* </div> */}

            </div>



        </header>
    )
}

export default Header