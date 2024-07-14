import Logo from "../../../images/unit4/logo.svg";
import Cross from "../../../images/unit4/cross.svg";
import Phones from "../../../images/unit4/phones.svg";
import Emoji1 from "../../../images/unit4/emoji1.svg";
import Emoji2 from "../../../images/unit4/emoji2.svg";
import Emoji3 from "../../../images/unit4/emoji3.svg";
import Emoji4 from "../../../images/unit4/emoji4.svg";
import Emoji5 from "../../../images/unit4/emoji5.svg";
import Emoji6 from "../../../images/unit4/emoji6.svg";

import "./Advertisement.css";

export default function Advertisement({ answer }) {
  const comments = [
    {
      name: 'Bernd',
      comment: 'Das ist ein super Angebot! Ich habe es auch gekauft und bin sehr zufrieden!',
      img: Emoji1
    },
    {
      name: 'Manu',
      comment: 'Kauft das nicht!!',
      img: Emoji2
    },
    {
      name: 'Jürgen',
      comment: '0/5 Sterne. Dachte es wird auch ein Handy verkauft, aber die verkaufen nur eine Hülle :(',
      img: Emoji3
    },
    {
      name: 'Dina',
      comment: 'Schade Schokolade. Ein Fehlkauf...',
      img: Emoji4
    },
    {
      name: 'Caro',
      comment: 'Lieber wo anders einkaufen. Das hier hat keine gute Qualität',
      img: Emoji5
    },
    {
      name: 'Ruben',
      comment: 'Schlecht!!! Das ist nicht einmal einen einzigen Euro wert.',
      img: Emoji6
    },
  ];

  return (
    <div className="Advertisement">
      <div className="Advertiser">
        <div className="AdvertiserLogo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="AdvertiserInfo">
          <p style={{fontWeight: 'bold', fontSize: "large"}}>Naike</p>
          <p>Werbung</p>
        </div>

        <div className="CloseAdvertisement">
          <img src={Cross} alt="Close" />
        </div>
      </div>

      <div className="AdvertisementBox">
        <div className="AdvertisementContent">
          <p style={{fontWeight: 'bold', fontSize: "large"}}>Deal der Woche!!! Schnapper!</p>
          <hr></hr>
          <img src={Phones} alt="Ad" />
          <p style={{fontWeight: 'bold'}}>Jetzt kaufen und nur 1€ statt 1000€ zahlen! JEDER Kunde ist SEHR GLÜCKLICH mit seinem Produkt!!! (Es wird nur eine Handyhülle verkauft, kein Handy dabei)</p>
        </div>
      </div>

      <div className="Comments">
        <p style={{fontWeight: 'bold', fontSize: "large"}}>Kommentare</p>
        <hr></hr>

        {comments.map((comment, index) => (
          <div className="Comment" key={index}>
            <div className="CommentImg">
              <img src={comment.img} alt="ProfileImage" />
            </div>
            <div className="CommentText">
              <p style={{color: 'grey'}}>{comment.name}</p>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
