import React from "react";
import GoodFoxStanding from "../../images/GoodFoxStanding.png";
import EvilFoxStanding from "../../images/EvilFoxStanding.png";
import IphoneHomePage from "../../images/IphoneHomePage.png";
import CustomButton from "../../components/Button/CustomButton";
import "./Home.css"
import {Link} from "@mui/material";

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
            <div className="paragraphsHome">
                <h1 className="spuren">Spuren im Netz</h1>
                <p>
                            Willkommen!
                </p>
                <p>
                            Dies ist der erste Absatz.
                </p>
                <p>
                            Dies ist der zweite Absatz.
                </p>
                <p>
                            Dies ist der dritte Absatz.
                </p>

            </div>
            <div className="button">
                <Link to="/frameone"><CustomButton name="Weiter" type="primary"></CustomButton></Link>
            </div>
        </div>
    );
}


export default Home;
