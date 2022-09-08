import React from 'react'
import Button from '../Button/Button'
import S from './HContainerBurguer.module.css'

const HContainerBurguer = ({ text }) => {
    return (
        <div className={S.superDiv}>
            <div className={S.backgroundDiv}>
                <div className={S.mainDiv}>
                    <h1>{text}</h1>
                    <div className={S.textDiv}>
                        <div><h2>BURGUER</h2></div>
                        <div className={S.diverdade}><h2>DE VERDADE</h2></div>
                    </div>
                    <h3>Chega rapidinho para matar sua fome!</h3>




                </div>
            </div>
        
        </div>
    )
}

export default HContainerBurguer