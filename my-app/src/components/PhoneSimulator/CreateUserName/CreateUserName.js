import { useState } from "react";
import CustomButton from "../../Button/CustomButton";
import Inputfield from "../../Inputfield/Inputfield";
import "./CreateUserName.css"

export default function CreateUserName({answer}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");


    return (
        <div className="CreateAccountContainer">
            <div className="frameContainer">
      <div>
        <h1>Username erstellen</h1>
      </div>
        <div >
          <div style={{margin: "15px 0"}}>
        <Inputfield placeholder="Benutzername" value={answer} onChange={(e) => setSelectedAnswer(e.target.value)}></Inputfield>
            </div>
            <div style={{margin: "15px 0"}}>
          </div>

        </div>
      
      </div>
    </div>
    )
}