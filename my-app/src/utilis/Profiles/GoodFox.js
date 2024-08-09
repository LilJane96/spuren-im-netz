import FoxProfilePic from "../../images/ProfileImages/ProfilGoodFox/FoxProfilePicBG.svg";
import NightShow from "../../images/ProfileImages/ProfilGoodFox/nightShow.svg";
import HikingMountain from "../../images/ProfileImages/ProfilGoodFox/hikingMountain.svg";
import Hikingtour from "../../images/ProfileImages/ProfilGoodFox/friendHiking.svg";
import FerrisWheel from "../../images/ProfileImages/ProfilGoodFox/ferriswheel.svg";
import Flowers from "../../images/ProfileImages/ProfilGoodFox/flowers.svg";
import VacationPixel from "../../images/ProfileImages/ProfilGoodFox/vacationPixel.svg";
import GiftFriend from "../../images/ProfileImages/ProfilGoodFox/giftFriend.svg";
import NewHobby from "../../images/ProfileImages/ProfilGoodFox/newHobby.svg";

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
        { id: 1, img: Flowers, text: "Sooo wunderschöne Blumen :)" },
        { id: 2, img: FerrisWheel, text: "Gleich gehts los, Riesenrad wollte ich schon immer mal fahren!" },
        {
          id: 3,
          img: VacationPixel,
          text: "Auch ein Detektiv muss sich mal einen Urlaub gönnen. Ganz liebe Grüße aus dem Urlaub!",
        },
        {
          id: 4,
          img: GiftFriend,
          text: "Heute hat mein bester Freund Geburtstag! Ich hoffe er freut sich über das Geschenk!",
        },
        {
          id: 5,
          img: NewHobby,
          text: "Schaut mal Leute, ich habe ein neues Hobby gefunden, sieht gut aus, oder?",
        },
        {
          id: 6,
          img: NightShow,
          text: "Wahsinns Show! Ich bin begeistert! :)",
        },
        { id: 7, img: HikingMountain, text: "Puuuh, endlich geschafft! Wir haben den Gipfel erreicht!" },
        {
          id: 8,
          img: Hikingtour,
          text: "Mit meinem besten Freund bin ich unterwegs nach ganz oben!",
        },
      ],
    },
  ];
}
