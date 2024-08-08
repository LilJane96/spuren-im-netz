import Backpack from "../../images/ProfileImages/ProfilBadFox/Backpack.png";
import Bike from "../../images/ProfileImages/ProfilBadFox/Bike.jpg";
import DVD from "../../images/ProfileImages/ProfilBadFox/DVD.jpeg";
import Motorcyle from "../../images/ProfileImages/ProfilBadFox/Bike.png";
import Vacation from "../../images/ProfileImages/ProfilBadFox/Vacation.svg";
import Profilepicture from "../../images/ProfileImages/ProfilpictureFirst.png";
import Crown from "../../images/ProfileImages/ProfilBadFox/crown.svg";
import Car from "../../images/ProfileImages/ProfilBadFox/car.svg";
import Home from "../../images/ProfileImages/ProfilBadFox/Home.svg";
import Games from "../../images/ProfileImages/ProfilBadFox/games.svg";

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
          img: Games,
          text: "Verkaufe hier gut erhaltene Spiele. Wie neu! 5 Euro das Stück",
        },
        { id: 4, img: Vacation, text: "Urlaub ist sehr schön!" },
        {
          id: 5,
          img: Motorcyle,
          text: "Mein Nachbar hat mir sein Mottorad für eine Probefahrt geliehen. Ich glaube, ich behalte es einfach :)",
        },
        {
          id: 6,
          img: Crown,
          text: "Glitzert so schön. Noch eine davon und dann ab in den Urlauuub :) :) :)",
        },
        {
          id: 7,
          img: Car,
          text: "Hab hier gerade ein Auto gefunden, das mir sehr gut gefällt. Würde es gerne haben! Wie sind nochmal die Öffnungszeiten?",
        },
        {
          id: 8,
          img: Home,
          text: "Meint ihr, hier gibt es etwas schönes glitzerndes für mich?",
        },
      ],
    },
  ];
}
