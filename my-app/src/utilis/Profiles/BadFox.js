import Backpack from "../../images/ProfileImages/ProfilBadFox/Backpack.png";
import Bike from "../../images/ProfileImages/ProfilBadFox/Bike.jpg";
import DVD from "../../images/ProfileImages/ProfilBadFox/DVD.jpeg";
import Playstation from "../../images/ProfileImages/ProfilBadFox/Playstation.jpeg";
import Vacation from "../../images/ProfileImages/ProfilBadFox/Vacation.jpg";
import Profilepicture from "../../images/ProfileImages/ProfilpictureFirst.png";
import Ring from "../../images/ProfileImages/ProfilBadFox/Ring.jpg";
import Grill from "../../images/ProfileImages/ProfilBadFox/Grill.jpg";
import HausPlaystation from "../../images/ProfileImages/ProfilBadFox/HausPlaystation.jpg";

export default function BadFoxProfileData() {
  return [
    {
      name: "Felix",
      profileImage: Profilepicture,
      postsCount: 26,
      followersCount: 128,
      friendsCount: 28,
      bio: (
        <span>
          📍 Reutlingen <br />
          39
        </span>
      ),
      images: [
        {
          id: 1,
          img: Backpack,
          text: "Schaut mal, Leute, diese Person hat ihren Rucksack nicht sicher aufbewahrt 🔒 ... er gehört jetzt mir, haha",
        },
        {
          id: 2,
          img: Bike,
          text: "Mein neues Fahrrad. Stand hier einfach nur rum, so ein nettes Geschenk.",
        },
        {
          id: 3,
          img: DVD,
          text: "Verkaufe hier gut erhaltene DVDs. Wie neu! 5 Euro das Stück",
        },
        { id: 4, img: Vacation, text: "Urlaub ist sehr schön!" },
        {
          id: 5,
          img: Playstation,
          text: "Habt ihr auch schon die neue PS5? Mein Nachbar hat sie einfach nicht mehr gebraucht, haha :D",
        },
        {
          id: 6,
          img: Ring,
          text: "Glitzert so schön. Noch einer davon und dann ab in den Urlauuub :) :) :)",
        },
        {
          id: 7,
          img: Grill,
          text: "Meint ihr das lohnt sich? Hm, muss ich nochmal einen Kollegen fragen.",
        },
        {
          id: 8,
          img: HausPlaystation,
          text: "Hab hier gerade im Wohnzimmer eine schöne Playstation 5 entdeckt, würde soooo gerne auch eine haben!",
        },
      ],
    },
  ];
}
