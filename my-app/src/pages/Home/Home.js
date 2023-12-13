import React from "react";
import GoodFox from "../../images/GoodFox.png";
import EvilFox from "../../images/EvilFox.png";
import "./Home.css"

function Home() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Spuren im Netz</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p>
                    Willkommen!
                </p>
            </div>
            <div >
            
                <div><img src={GoodFox} alt="GoodFox"/></div>
                <div>
                <img src={EvilFox} alt="EvilFox"/>
                </div>
               

            </div>

        </div>
    );
}

export default Home;
