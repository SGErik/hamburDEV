import React from 'react'
import HCardapio from '../../components/HCardápio/HCardapio'
import HContainerBurguer from '../../components/HContainerBurguer/HContainerBurguer'
import HMaisSobre from '../../components/HMaisSobre/HMaisSobre'
import HQuemSomos from '../../components/HQuemSomos/HQuemSomos'
import S from './Home.module.css'




const Home = () => {
  return (
    <div className={S.mainDiv}>
    <HContainerBurguer text='HAMBUR{DEV}!'/>
    <HCardapio/>
    <div>
    <HQuemSomos/>
    </div>
    <div>
    <HMaisSobre/>
    </div>
    </div>
  )
}

export default Home