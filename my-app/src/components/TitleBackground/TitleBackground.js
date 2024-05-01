import React from 'react'
import Top from "../../images/TitleBackgroundTop.svg";
import Bottom from "../../images/TitleBackgroundBottom.svg";
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
