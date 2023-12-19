import { useState } from "react";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import "./UploadPicture.css"

export default function UploadPicture({answer}) {

  console.log("ANSWER", answer)
    return (
        <div className="UploadImageContainer">
      <div>
        <h4>Profilbild hochladen</h4>
      </div>
        <div className="ImageContainer">
        <div className="IconContainer">
          {answer ?<img src={process.env.PUBLIC_URL + answer} className="ProfilePicture"></img> :  
            <AddPhotoAlternateOutlinedIcon style={{fontSize: "xx-large"}}/>
             }
        </div>
      </div>
    </div>
    )
}