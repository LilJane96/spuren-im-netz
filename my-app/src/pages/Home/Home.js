import React from "react";
import GoodFoxStanding from "../../images/GoodFoxStanding.png";
import EvilFoxStanding from "../../images/EvilFoxStanding.png";
import IphoneHomePage from "../../images/IphoneHomePage.png";
import BarHomePage from "../../images/BarHomePage.png";
import CustomButton from "../../components/Button/CustomButton";
import "./Home.css";
import { Link } from "@mui/material";

function Home() {
    return (
        <div>
            <div className="containerHome">
                <div className="foxContainer">
                    <div className="iphone">
                        <img src={IphoneHomePage} alt="Iphone"/>
                    </div>
                    <div className="goodFox" >
                        <img src={GoodFoxStanding}  alt="GoodFox"/>
                    </div>
                    <div className="evilFox">
                        <img src={EvilFoxStanding} alt="EvilFox"/>
                    </div>
                </div>
            </div>
            <div className="barHomePage">
                <img src={BarHomePage} alt="Bar"/>
            </div>
            <div className="titleAndSubtitleHome">
                <h1 className="spuren">Spuren im Netz</h1>
                <h4 className="h4HomePage">
                    Herzlich Willkommen zu Spuren im Netz!
                </h4></div>
            <div className="paragraphsHome">

                <p>
                    Helfe Pixel beim Lösen seiner Fälle!
                </p>
                <p>
                    Werde ein Internet-Detektiv!
                </p>
                <p>
                    Sei sicher im Internet unterwegs!
                </p>
                <Link href="/hub"><CustomButton name="Start" type="primary"></CustomButton></Link>

            </div>
        </div>
      </div>
      <div className="barHomePage">
        <img src={BarHomePage} alt="Bar" />
      </div>
      <div className="paragraphsHome">
        <h1 className="spuren">Spuren im Netz</h1>
        <h4 className="h4HomePage">Herzlich Willkommen zu Spuren im Netz!</h4>
        <p>Helfe Pixel beim Lösen seiner Fälle!</p>
        <p>Werde ein Internet-Detektiv!</p>
        <p>Sei sicher im Internet unterwegs!</p>
        <Link href="/introduction/GameIntroduction">
          <CustomButton name="Start" type="primary"></CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;
