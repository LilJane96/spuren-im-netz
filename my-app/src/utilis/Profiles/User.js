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
      bio: bio.type,
      images: [],
    },
  ];
}
