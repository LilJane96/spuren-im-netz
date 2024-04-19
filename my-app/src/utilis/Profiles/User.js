const units = JSON.parse(localStorage.getItem("UnitsArray")) || {};
const username = units["unit1"].answers.map(
  (obj) => obj.question === "Profilname" && obj.answer
);
const profilePicture = units["unit1"].answers
  .filter((obj) => obj.question === "Profilbild" && obj.answer)
  .map((obj) => obj.answer);
console.log("profilePicture", profilePicture);

export const UserProfilData = {
  name: username,
  profileImage: profilePicture,
  postsCount: 0,
  followersCount: 0,
  friendsCount: 0,
  bio: `Fußballliebhaber ⚽
  Künstlerin 🎨`,
  images: [],
};
