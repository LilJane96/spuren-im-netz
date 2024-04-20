import React from "react";
import WelcomeImage from "../../images/WelcomeImage/WelcomeImage.svg";
import BarHomePage from "../../images/BarHomePage.svg";
import CustomButton from "../../components/Button/CustomButton";
import "./Home.css";
import { Link } from "@mui/material";

function Home() {

  const handleStartClick = () => {
    localStorage.clear(); // Lösche den Local Storage
  };

  return (
    <div className="HomeContainer">
      <div className="WelcomeContainer">
        <div className="TitleAndSubtitleHome">
          <h1 className="spuren">Spuren im Netz</h1>
          <h4 className="h4HomePage">Herzlich Willkommen zu Spuren im Netz!</h4>
        </div>
        <div className="paragraphsHome">
          <div className="barHomePage">
            <img src={BarHomePage} alt="Bar" />
          </div>
          <div className="TextContainer">
            <p>Helfe Pixel beim Lösen seiner Fälle!</p>
            <p>Werde ein Internet-Detektiv!</p>
            <p>Sei sicher im Internet unterwegs!</p>
          </div>
        </div>
        <div>
          <Link href="/introduction/GameIntroduction">
            <CustomButton name="Start" type="primary" onClick={handleStartClick()}></CustomButton>
          </Link>
        </div>
      </div>
      <div className="containerHome">
        <div className="foxContainer">
          <div className="WelcomeImageContainer">
            <img src={WelcomeImage} alt="Guter und Böser Fuchs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
