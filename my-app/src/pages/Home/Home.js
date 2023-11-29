import React from "react";
import {textAlign} from "@mui/system";

function Home() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Spuren im Netz</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p>
                    Willkommen!
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/my-app/src/images/EvilFox.png" alt="Fuchs" style={{ position: "absolute", bottom: 0, marginLeft: 500 }} />
                <img src="/my-app/src/images/GoodFox.png" alt="Fuchs" style={{ position: "absolute", bottom: 0, marginRight: 500}} />

            </div>

        </div>
    );
}

export default Home;
