
import CustomButton from "../../Button/CustomButton"
import ProfilePicture from "../../../images/image1.jpg";
import "./MyProfil.css"

export default function MyProfil() {


    return (
        <div className="MyProfilContainer">
            <div>
                <h3>Mein Profil</h3>
            </div>
            <div className="ImageContainer">
                <img src={ProfilePicture} alt="Profilbild" className="ProfilePicture"/>
                <p className="text">The users picked bio text should be displayed here!</p>
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
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
            <div>
                <p>Test</p>
            </div>
        </div>
    )
}