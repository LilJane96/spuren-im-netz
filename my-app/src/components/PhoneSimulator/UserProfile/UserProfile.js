
import Backpack from "../../../images/ProfileImages/Backpack.png";
import Bike from "../../../images/ProfileImages/Bike.png";
import Breakfast from "../../../images/ProfileImages/Breakfast.png";
import Vaccation from "../../../images/ProfileImages/Vaccation.png";

import Profilepicture from "../../../images/SearchPearsonImages/Annonym.png"
import "./UserProfile.css"
import Bottombar from "../../Bottombar/Bottombar"


const images = [
    { img: Backpack },
    { img: Bike },
    { img: Breakfast },
    { img: Vaccation },
    { img: Backpack },
    { img: Bike },
    { img: Breakfast },
    { img: Vaccation },
  ];

export default function UserProfile({answer}) {


    return (
        <>
        <div className="UserProfileContainer">
            <div className="ImageContainer">

                 <img src={Profilepicture} alt="Profilbild" className="ProfilePicture"/>
                 <p className="text">Felix</p>
            </div>
            <div className="flexContainer">
                <div className="textContainer">
                    <p className="count">26</p>
                    <p className="text">Posts</p>
                </div>
                <div className="textContainer">
                    <p className="count">128</p>
                    <p className="text">Follower</p>
                </div>
                <div className="textContainer">
                    <p className="count">28</p>
                    <p className="text">Freunde</p>
                </div>
            </div>
            <div>
            
               <p className="answerText">
               <span>📍 Standort <br />39</span>
                </p>
            </div>
         
            <div className="Line"/>
        <div>
        <ul className="ImageContainer">
            {images.map((obj) => {
                return(
                <li>
                    <img src={obj.img}/>
                </li>
                )
                
            })}
        </ul>
        </div>
            
        </div>
        <div className="BottombarContainer">
            <Bottombar/>
        </div>
    </>
    )
}