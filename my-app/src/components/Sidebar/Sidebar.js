import CustomButton from "../../components/Button/CustomButton";
import "./Sidebar.css";

export default function Sidebar({toggleSidebarVisibility }) {
  
    return (
        <div className="sidebar">
            <div className="head">
                <h1>Regeln</h1>
                <CustomButton className="closeButton" type="quaternary" onClick={toggleSidebarVisibility} />
            </div>
        <ul className="rules">
            <li>Regel 1</li>
            <li>Regel 2</li>
        </ul>
      </div>
    );
  };