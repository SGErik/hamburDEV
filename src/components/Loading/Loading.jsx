import React from 'react'
import S from "./Loading.module.css"


const Loading = () => {
  return (
    <div className={S.space}>
        <div className={S.isLoading}></div>
    </div>
  )
}

export default Loading