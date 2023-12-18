import { useState } from "react";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import "./UploadPicture.css"

export default function UploadPicture({answer}) {

    return (
        <div className="UploadImageContainer">
      <div>
        <h4>Profilbild hochladen</h4>
      </div>
        <div className="ImageContainer">
        <div className="IconContainer">
          {answer ?<img src={process.env.PUBLIC_URL + answer} style={{width: "150px", height: "150px"}}></img> :  
            <AddPhotoAlternateOutlinedIcon style={{fontSize: "xx-large"}}/>
             }
        </div>
      </div>
    </div>
    )
}