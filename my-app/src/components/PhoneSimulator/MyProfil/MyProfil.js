
import CustomButton from "../../Button/CustomButton"
import { useParams } from "react-router-dom";
import "./MyProfil.css"
import Bottombar from "../../Bottombar/Bottombar";


export default function MyProfil({answer}) {

    const { unitId } = useParams();
    const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
    const username = units[unitId].answers.map((obj) => obj.question === "Username" && obj.answer);
    const profilePicture = units[unitId].answers
    .filter((obj) => obj.question === "Profilbild" && obj.answer)
    .map((obj) => obj.answer);

    return (
        <>
        <div className="MyProfilContainer">
            <div className="ImageContainer">

                 <img src={process.env.PUBLIC_URL + `/${profilePicture}`} alt="Profilbild" className="ProfilePicture"/>
                 <p className="text">{username}</p>
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
                {answer ? (<p className="answerText">{answer}</p>) : (<p className="answerText">The users picked bio text<br /> should be displayed here!</p>)}
            </div>
            <div>
                 <div>
                    <CustomButton name="Profil bearbeiten" type="secondary"/>
                </div>
            </div>
            <div className="Line"/>
            
        </div>
        <div className="BottombarContainer">
            <Bottombar/>
        </div>
    </>
    )
}