import React from 'react'
import Top from "../../images/TitleBackgrounTop.png";
import Bottom from "../../images/TitleBackgrounBottom.png";
import "./TitleBackground.css"

export default function TitleBackground({text}) {
  return (
   <div className='TitleBackgroundContainer'>
      <p className='Text'>{text}</p>
      <img src={Top} className="Top" alt='Titel Hintergrung'/>
      <img src={Bottom} className="Bottom" alt='Titel Hintergrung'/>
    </div>
  )
}
