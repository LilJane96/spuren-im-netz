import React from 'react';
import TitleBackground from '../TitleBackground/TitleBackground';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import "./ResultView.css"

export default function ResultView() {
    const { unitId } = useParams();
    const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
    console.log("UNITS", units[unitId])
  
    if (!units[unitId]) {
      return <div>Keine Ergebnisse gefunden</div>;
    }
  
    const totalAttempts = units[unitId].attempts;
    const totalWrongAttempts = units[unitId].wrongAttempts;
    const taskAttempts = units[unitId].taskAttempts;

  return (
    <div className='ResultViewContainer'>
      <div className='Background'>
        <TitleBackground text="‘Unit 1: Konto erstellen’ bestanden"/>
        <div className='Description'>
          <div className='Text'>
            <p>Spitze gemacht! Du hast echt das Zeug zu einem Meisterdetektiv zu werden! </p>
          </div>
          <div className='DescriptionContainer'>
            <div className='Row'>
              <div className={`colorBox ${getColorClass(0)}`} />
              <p>{1}. Versuch</p>
              <div className={`colorBox ${getColorClass(1)}`} />
              <p>{2}. Versuch</p>
              <div className={`colorBox ${getColorClass(2)}`} />
              <p>{3}. Versuch</p>
            </div>
          </div>
         
        <ul className='ResultRowContainer'>
            {units[unitId].answers.map((obj, index) => {
                return (
                        <li className={`List ${getColorClass(obj.wrongAttempts)}`} key={index}>
                            <div>
                                <p>{obj.question}</p>
                            </div>
                            <div>
                                {(() => {
                                if (obj.wrongAttempts === 0) {
                                return <p className='Trys'>Erster Versuch</p>;
                                } else if (obj.wrongAttempts === 1) {
                                return <p className='Trys'>Zweiter Versuch</p>;
                                } else {
                                return <p className='Trys'>Dritter Versuch</p>;
                                }
                            })()}
                            </div>
                            <div>
                            <div style={{borderLeft: "1px solid black", height: "26px", opacity: "0.5"}}/>

                                {obj.wrongAttempts === 0 ? <FavoriteIcon style={{color: "#D063E2"}}/> : <FavoriteBorderIcon />}
                                
                            </div>
                        </li>
                )
            })}
        </ul>
        </div>
      </div>
    </div>
  );
}

// Funktion, um die Hintergrundfarbenklasse basierend auf dem Versuch zu bestimmen
function getColorClass(attempt) {
    if (attempt === 0) {
        return 'one';
      } else if (attempt === 1) {
        return 'two';
      } else {
        return 'three';
      }
}
