import CustomButton from "../../components/Button/CustomButton";
import ColorContainer from "../ColorContainer/ColorContainer";
import "./Sidebar.css";

export default function Sidebar({toggleSidebarVisibility }) {
  
    return (
        <div className="sidebar">
            <div className="overlay"></div>
            <div className="menu">
                <div className="head">
                    <h1>Regeln</h1>
                    <CustomButton className="closeButton" type="quaternary" onClick={toggleSidebarVisibility} />
                </div>
                <ul className="rules">
                    <li>Du siehst auf der Karte immer welche Level du auswählen kannst. Um ein Level zu starten, klicke auf die Zahl.</li>
                    <li>Sobald du alle Fragen eines Levels beantwortet hast, siehst du am Ende deine Ergebnisse. Sind alle Fragen richtig, erhältst du eine Belohnung für deinen Rucksack.</li>
                    <li>Wenn du an einer Stelle nicht weiter kommst, frage bitte deine Lehrer oder deine Lehrerin nach Hilfe!</li>
                </ul>
                <ColorContainer headingsize={"h6"}/>
            </div>
        </div>
    );
  };