import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PropTypes from 'prop-types';
import "./UploadPicture.css"

export default function UploadPicture({answer}) {

    return (
        <div className="UploadImageContainer">
      <div>
        <h4>Profilbild hochladen</h4>
      </div>
        <div className="ImageContainer">
        <div className="IconContainer">
          {answer ?<img src={process.env.PUBLIC_URL + `/${answer}`} className="ProfilePicture"></img> :  
            <AddPhotoAlternateOutlinedIcon style={{fontSize: "xx-large"}}/>
             }
        </div>
      </div>
    </div>
    )
}

UploadPicture.propTypes = {
  answer: PropTypes.string.isRequired
};