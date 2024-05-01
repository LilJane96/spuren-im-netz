// GoodFoxProfile.js
import FoxProfilePic from "../../images/ProfileImages/ProfilGoodFox/FoxProfilePic.svg";
import House from "../../images/ProfileImages/ProfilGoodFox/House.png";
import PuzzleWorldMapGoodFox from "../../images/ProfileImages/ProfilGoodFox/PuzzleWorldMapGoodFox.jpg";
import SunsetGoodFoxProfile from "../../images/ProfileImages/ProfilGoodFox/SunsetGoodFox.jpg";
import HomeGoodFox from "../../images/ProfileImages/ProfilGoodFox/HomeGoodFox.jpg";
import TablesGoodFox from "../../images/ProfileImages/ProfilGoodFox/TablesGoodFox.jpg";
import PuzzleGoodFox from "../../images/ProfileImages/ProfilGoodFox/PuzzleGoodFox.jpg";
import ForestWalkGoodFox from "../../images/ProfileImages/ProfilGoodFox/ForestWalkGoodFox.jpg";
import OfficeGoodFoxProfile from "../../images/ProfileImages/ProfilGoodFox/OfficeGoodFox.jpg";

export default function GoodFoxProfileData() {
  return [
    {
      name: "Pixel der Fuchs",
      profileImage: FoxProfilePic,
      postsCount: 26,
      followersCount: 128,
      friendsCount: 28,
      bio: `🦊 Pixel | 21 | 🕵️ Detektiv für Soziale Medien
  📍 Im Wald 24, Eiche 3
  🇩🇪 Deutschland`,
      images: [
        { id: 1, img: House, text: "Mein Zuhause!" },
        { id: 2, img: PuzzleGoodFox, text: "Mein Lieblingshobby!" },
        {
          id: 3,
          img: TablesGoodFox,
          text: "Meine guten Freunde Elias und Niklas beim Tischkicker spielen.",
        },
        {
          id: 4,
          img: HomeGoodFox,
          text: "Lange Straße 15 in Berlin, Herr Müller. So ein schönes Haus!",
        },
        {
          id: 5,
          img: ForestWalkGoodFox,
          text: "Schaut mal Leute, ich habe heute diese Menschen an meinem Haus vorbeilaufen gesehen und direkt ein Foto gemacht :D",
        },
        {
          id: 6,
          img: PuzzleWorldMapGoodFox,
          text: "Puuh, endlich geschafft! Hat aber Spaß gemacht!",
        },
        { id: 7, img: SunsetGoodFoxProfile, text: "Wooooooooow" },
        {
          id: 8,
          img: OfficeGoodFoxProfile,
          text: "Ab ins Büro, hier warten noch einige Fälle auf mich.",
        },
      ],
    },
  ];
}
