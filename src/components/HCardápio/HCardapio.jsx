import React from 'react'
import Pagedivider from '../Pagedivider/Pagedivider'
import Slide from '../Slide/Slide'
import S from './HCardapio.module.css'



const HCardapio = () => {
    return (
        <div className={S.mainDiv}>
                <div className={S.pageDivider}>
                    <Pagedivider />
                    <h2>Cardápio</h2>
                    <Pagedivider />
                </div>
                <h3>Conheça nossa variedade de Hamburguers!</h3>

                <div className={S.carrousel}>
                    <Slide></Slide>
                </div>

        
        </div>

    )
}

export default HCardapio