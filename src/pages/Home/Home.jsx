import React, { useEffect } from 'react'
import { useState } from 'react'
import HCardapio from '../../components/HCardápio/HCardapio'
import HContainerBurguer from '../../components/HContainerBurguer/HContainerBurguer'
import HQuemSomos from '../../components/HQuemSomos/HQuemSomos'
import S from './Home.module.css'
import Loading from '../../components/Loading/Loading'





const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [])




  return (
        <div className={S.mainDiv}>
          <HContainerBurguer text='HAMBUR{DEV}!' />
          <HCardapio />
          <div>
            <HQuemSomos />
          </div>
        </div>



  )
}

export default Home