import {React, useState } from "react";
import {Link} from "@mui/material";
import "./Hub.css";
import Onboarding from "../../components/Onboarding/Onboarding";
import PhoneMap from "../../images/PhoneMap.png";
import Pin1Active from "../../images/Pins/Pin1Active.png";
import Backpack from "../../images/Backpack.png"
import FoxPicture from "../../images/foxPicture.png";


function Hub() {

    return (
    <>
        <Onboarding />
        <div className="hub">
            <img className="fox" src={FoxPicture} alt="Fox" />
            <img className="backpack" src={Backpack} alt="Backpack" />
            <img className="map" src={PhoneMap} alt="Map" />
            <div className="pins">
                <Link href="/frameone">
                    <img className="pinOne" src={Pin1Active} alt="Pin" />
                </Link>
            </div>
        </div>
    </>
    );
}


export default Hub;