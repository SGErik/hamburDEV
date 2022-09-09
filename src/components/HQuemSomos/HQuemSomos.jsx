import React from 'react'
import S from './HQuemSomos.module.css'

const HQuemSomos = () => {
    return (

        <div className={S.header}>
            <div className={S.bdSet} />
            <div className={S.content}>
                <div className={S.texts}>
                    <h1>QUEM SOMOS</h1>
                    <div className={S.divText}>
                        <p>Nossos primeiros passos foram em 2015, dentro de um trailer em Brasília. Rapidamente, o desejo de entregar um burger artesanal com qualidade e preço justo cruzou as fronteiras, chegando até Belo Horizonte e nos anos seguintes em Manaus, no Rio de Janeiro, Goiânia e Fortaleza.

                            Hoje são 16 lojas espalhadas pelo Brasil, com uma experiência incrível e refeições de saborear rezando. Amamos o que fazemos e somos focados em oferecer a melhor qualidade, com ingredientes frescos e uma receita preparada como só a gente sabe!</p>

                    </div>

                </div>

            </div>
        </div>


    )
}

export default HQuemSomos