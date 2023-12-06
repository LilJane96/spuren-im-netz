import Speachbubble from "../../components/Speachbubble/Speachbubble";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import "./FrameOne.css";
import AnswerBoxes from "../../components/AnswerBoxes/AnswerBoxes";
import { useState } from "react";

export default function FrameOne() {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleSubmit = (answer) => {
        console.log("SELECTEDITEM", answer)
        setSelectedAnswer(answer)
    }

    return (<>
   <div className="frameContainer">
    <div className="frame">
        <Speachbubble text="This is my profile! 
        You can scroll up and down and press to see more details of my images.">
    </Speachbubble></div>
    <div className="frame"><PhoneSimulator selectedAnswer={selectedAnswer}></PhoneSimulator></div>
    <div className="frame">
        <div className="boxContainer">
        <AnswerBoxes text="Your name" onClick={() => handleSubmit("Your name")}></AnswerBoxes>
        <AnswerBoxes text="User123" onClick={() => handleSubmit("User123")}></AnswerBoxes>
        <AnswerBoxes text="Something" onClick={() => handleSubmit("Something")}></AnswerBoxes>
        </div>
        
    </div>


   </div>
    </>)
}