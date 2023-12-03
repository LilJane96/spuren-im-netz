import React from "react";
import Image from 'next/image'
import GoodFox from "../../../public/images/GoodFox.png"
import EvilFox from "../../../public/images/EvilFox.png";
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
            <div className="test">
            
                <div>
                    <Image
                    src={GoodFox}
                    alt="Picture of the good fox"
                    width={500}
                    height={500}
                    />
                </div>
                <div>
                <Image
                    src={EvilFox}
                    alt="Picture of the evil fox"
                    width={500}
                    height={500}
                    />
                </div>
               

            </div>

        </div>
    );
}

export default Home;
