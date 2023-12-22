
import CustomButton from "../../Button/CustomButton"
import ProfilePicture from "../../../images/image1.jpg";
import { useParams } from "react-router-dom";
import "./MyProfil.css"


export default function MyProfil({answer}) {

    const { unitId } = useParams();
    const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
    console.log("UNITS", units[unitId])
    let name = "";
    const username = units[unitId].answers.map((obj) => obj.question === "Username" && obj.answer);
    console.log("Username", username)


    return (
        <div className="MyProfilContainer">
            <div className="ImageContainer">

                 <img src={ProfilePicture} alt="Profilbild" className="ProfilePicture"/>
                 <p className="text">{username}</p>
                {/*{answer ? (<p className="text">{answer}</p>) : (<p className="text">The users picked bio text<br /> should be displayed here!</p>)} */}
            </div>
            <div className="flexContainer">
                <div className="textContainer">
                    <p className="count">0</p>
                    <p className="text">Posts</p>
                </div>
                <div className="textContainer">
                    <p className="count">0</p>
                    <p className="text">Follower</p>
                </div>
                <div className="textContainer">
                    <p className="count">0</p>
                    <p className="text">Freunde</p>
                </div>
            </div>
            <div>
                 <div>
                    <CustomButton name="Profil bearbeiten" type="secondary"/>
                </div>
            </div>
            <div className="Line"/>
            
          
        </div>
    )
}