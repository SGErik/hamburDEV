import React from 'react'
import HContainerBurguer from '../../components/HContainerBurguer/HContainerBurguer'
import S from './Home.module.css'




const Home = () => {
  return (
    <div className={S.mainDiv}>
    <HContainerBurguer text='HAMBUR{DEV}!'/>
    </div>
  )
}

export default Home