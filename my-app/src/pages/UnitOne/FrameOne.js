import Speachbubble from "../../components/Speachbubble/Speachbubble";
import PhoneSimulator from "../../components/PhoneSimulator/PhoneSimulator";
import "./FrameOne.css";
import AnswerBoxes from "../../components/AnswerBoxes/AnswerBoxes";

export default function FrameOne() {
    return (<>
   <div></div>
   <div className="frameContainer">
    <div className="frame"><Speachbubble text="This is my profile! 
You can scroll up and down and press to see more details of my images."></Speachbubble></div>
    <div className="frame"><PhoneSimulator></PhoneSimulator></div>
    <div className="frame">
        <AnswerBoxes text="Your name"></AnswerBoxes>
        <AnswerBoxes text="User123"></AnswerBoxes>
        <AnswerBoxes text="Something"></AnswerBoxes>
    </div>


   </div>
    </>)
}