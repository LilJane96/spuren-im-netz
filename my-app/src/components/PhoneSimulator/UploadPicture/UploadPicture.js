import { useState } from "react";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import "./UploadPicture.css"

export default function UploadPicture({answer}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");


    return (
        <div className="UploadImageContainer">
      <div>
        <h4>Profilbild hochladen</h4>
      </div>
        <div className="ImageContainer">
          <div className="IconContainer">
            <AddPhotoAlternateOutlinedIcon style={{fontSize: "xx-large"}}/>
            </div>      
      </div>
    </div>
    )
}