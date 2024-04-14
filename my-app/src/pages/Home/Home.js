import React from "react";
import BarHomePage from "../../images/BarHomePage.svg";
import WavingFox from "../../images/Foxes/wavingFox.svg";
import SideFox from "../../images/Foxes/sideFox.svg";
import ThiefFox from "../../images/Foxes/thiefFox.svg";
import Chest from "../../images/ClosedResultBox.svg"
import Hat from "../../images/HubImages/Backpack/HeadActive.svg"
import Backpack from "../../images/Backpack.svg";
import MagnifyingGlass from "../../images/HubImages/Backpack/MagnifyingGlassActive.svg";
import CustomButton from "../../components/Button/CustomButton";
import "./Home.css";
import { Link } from "@mui/material";
import Slideshow from '../../components/Slideshow/Slideshow';
import QRLiljana from "../../images/QRCodes/liljana.svg";
import QRJulian from "../../images/QRCodes/julian.svg";
import FoxProfile from "../../components/FoxProfile/UserProfile";
import Screenshot1 from "../../images/Screenshots/Screenshot1.png";
import Screenshot2 from "../../images/Screenshots/Screenshot2.png";
import Screenshot3 from "../../images/Screenshots/Screenshot3.png";
import Screenshot4 from "../../images/Screenshots/Screenshot4.png";
import Screenshot5 from "../../images/Screenshots/Screenshot5.png";


function Home() {
  const images = [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5];
  return (
    <main>
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
            <CustomButton name="Spiel starten" type="primary"></CustomButton>
          </Link>
        </div>
      </div>
      <div className="containerHome">
        <img id="fox1" src={WavingFox} alt="Fuchs" />
        <FoxProfile />
        <img id="fox2" src={ThiefFox} alt="Dieb" />
      </div>
    </div>
    <div className="row2">
        <div className="row2Left">
          <div className="simpleCard">
            <Link href="https://www.hdm-stuttgart.de/">
              <img className="logo" src="images/logo_hdm.jpg" alt="HdM Logo" />
            </Link>
          </div>
          <p>Hochschule der Medien</p>
        </div>
        <div className="row2Middle">
          <div className="simpleCard">
            <p>"Spuren im Netz" ist eine Bildungsapplikation, die im Wintersemester  2023/2024 an der Hochschule der Medien entwickelt wurde und nun im  Sommersemester 2024 weiterentwickelt wird. Diese Anwendung zielt darauf  ab, Kindern im Grundschulalter spielerisch die essenziellen Fertigkeiten  im Umgang mit sozialen Medien zu vermitteln. Gleichzeitig unterstützt  sie Lehrkräfte dabei, ihren Unterricht effektiv zu gestalten und den  Schülern einen sicheren Umgang mit digitalen Medien zu vermitteln.</p>
          </div>
        </div>
        <div className="row2Right">
        <div className="simpleCard">
            <Link href="https://www.schule4-0.de/">
              <img className="logo" src="images/logo_schule40.png" alt="HdM Logo" />
            </Link>
          </div>
          <p>Schule 4.0</p>
        </div>
    </div>
    <div className="row3">
      <div className="row3Upper">
        <img src={WavingFox} alt="Fuchs" />
          <div className="simpleContainer">
            <div className="simpleCard2">
              <img className="logo" src={Chest} alt="Truhe" />
              <p>Erfülle die Aufgaben und erhalte deine Belohnung aus der Schatztruhe!</p>
            </div>
            <div className="simpleCard2">
              <img className="logo" src={Hat} alt="Hut" />
              <p>Werde selbst zum/r Detektiv/in und erkunde die Sozialen Medien!</p>
            </div>
          </div>
      </div>
      <div className="row3Lower">
        <div className="simpleContainer">
          <div className="simpleCard2">
            <img className="logo" src={Backpack} alt="Rucksack" />
            <p>Fülle dein Rucksack mit deinen Belohnungen!</p>
          </div>
          <div className="simpleCard2">
            <img className="logo" src={MagnifyingGlass} alt="Lupe" />
            <p>Untersuche die Welt von Social Media und ihre Abenteuer!</p>
          </div>
        </div>
        <img src={ThiefFox} alt="Dieb" />
      </div>
    </div>
    <div className="row4">
        <Slideshow images={images} duration={3000} />
    </div>
    <div className="row5">
     <img src={SideFox} alt="Fuchs" />
      <div className="card">
        <h4>Falls wir eure Interesse geweckt haben!</h4>
        <div className="subConatiner">
          <div>
            <h4>Liljana Stefanelli</h4>
            <img src={QRLiljana} alt="Liljana Stefanelli" />
          </div>
          <div>
            <h4>Julian Straif</h4>
            <img src={QRJulian} alt="Julian Straif" />
          </div>
          <div>
            <h4>js437@hdm-stuttgart.de</h4>
            <h4>ls193@hdm-stuttgart.de</h4>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Home;
