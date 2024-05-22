import SearchBar from "../../Searchfield/Searchfield";
import Patrick from "../../../images/SearchPearsonImages/PatrickStar.png";
import Nature from "../../../images/SearchPearsonImages/Nature.png";
import AnnonymProfile from "../../../images/SearchPearsonImages/Annonym.png";
import StrangerBoy from "../../../images/SearchPearsonImages/StrangerBoy.png";
import AddPerson from "../../../images/SearchPearsonImages/AddPerson.png";
import "./SearchPerson.css";
import Bottombar from "../../Bottombar/Bottombar";

const persons = [
  { name: "FelixMüller", img: Patrick },
  { name: "Felicia29", img: Nature },
  { name: "Felix", img: AnnonymProfile },
  { name: "TomasFeld_", img: StrangerBoy },
];

export default function SearchPerson({ answer }) {
  return (
    <div className="SearchPersonContainer">
      <div className="SearchbarContainer">
        <SearchBar onSearch={answer} />
      </div>
      <ul className="PersonsList">
        {persons.map((obj) => (
          <li key={obj.name} className={answer === obj.name ? "selected" : ""}>
            <div className="left-content">
              <img src={obj.img} className="ProfilePicture" alt="Profilbild" />
              <p className="name">{obj.name}</p>
            </div>
            <div className="right-content">
              <img src={AddPerson} alt="Add Person" />
            </div>
          </li>
        ))}
      </ul>
      <div className="BottombarContainer">
        <Bottombar />
      </div>
    </div>
  );
}
