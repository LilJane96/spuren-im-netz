import { useState } from "react";
import House from "../../images/ProfileImages/ProfilGoodFox/House.png";
import PuzzleGoodFox from "../../images/ProfileImages/ProfilGoodFox/PuzzleGoodFox.jpg";
import TablesGoodFox from "../../images/ProfileImages/ProfilGoodFox/TablesGoodFox.jpg";
import HomeGoodFox from "../../images/ProfileImages/ProfilGoodFox/HomeGoodFox.jpg";
import ForestWalkGoodFox from "../../images/ProfileImages/ProfilGoodFox/ForestWalkGoodFox.jpg";
import PuzzleWorldMapGoodFox from "../../images/ProfileImages/ProfilGoodFox/PuzzleWorldMapGoodFox.jpg";
import SunsetGoodFoxProfile from "../../images/ProfileImages/ProfilGoodFox/SunsetGoodFox.jpg";
import OfficeGoodFoxProfile from "../../images/ProfileImages/ProfilGoodFox/OfficeGoodFox.jpg";

export default function UserProfileData() {
  const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
  let username = "";
  let profilePicture = "";
  let bio = "";
  if (units["unit1"]) {
    username = units["unit1"].answers.map(
      (obj) => obj.question === "Profilname" && obj.answer
    );
    profilePicture = units["unit1"].answers
      .filter((obj) => obj.question === "Profilbild" && obj.answer)
      .map((obj) => obj.answer);
    bio = units["unit1"].answers.map(
      (obj) => obj.question === "Informationen" && obj.answer
    );
  }
  return [
    {
      name: username,
      profileImage: profilePicture,
      postsCount: 0,
      followersCount: 0,
      friendsCount: 0,
      bio: <span>{bio[4]}</span>,
      images: [],
    },
  ];
}
