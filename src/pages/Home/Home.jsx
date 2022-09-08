import React from 'react'
import HCardapio from '../../components/HCardápio/HCardapio'
import HContainerBurguer from '../../components/HContainerBurguer/HContainerBurguer'
import HQuemSomos from '../../components/HQuemSomos/HQuemSomos'
import S from './Home.module.css'




const Home = () => {
  return (
    <div className={S.mainDiv}>
    <HContainerBurguer text='HAMBUR{DEV}!'/>
    <HCardapio/>
    <HQuemSomos/>
    </div>
  )
}

export default Home