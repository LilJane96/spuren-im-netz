import React from "react";
import GoodFoxStanding from "../../images/GoodFoxStanding.png";
import EvilFoxStanding from "../../images/EvilFoxStanding.png";
import IphoneHomePage from "../../images/IphoneHomePage.png";
import CustomButton from "../../components/Button/CustomButton";
import "./Home.css"
import {useHref} from "react-router-dom";
import {Link} from "@mui/material";



function Home() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Spuren im Netz</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p>
                    Willkommen!
                </p>
            </div>
            <div className="container">
                <div className="iphone">
                    <img src={IphoneHomePage} alt="Iphone"/>
                </div>
                <div className="foxContainer">
                    <div className="goodFox" >
                        <img src={GoodFoxStanding}  alt="GoodFox"/>
                    </div>
                    <div className="evilFox">
                        <img src={EvilFoxStanding} alt="EvilFox"/>
                    </div>
                </div>
            </div>
            <div className="paragraphs">
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
                <Link to="/FrameOne"><CustomButton  href name="Weiter" type="primary"></CustomButton></Link>
            </div>
        </div>
    );
}


export default Home;
