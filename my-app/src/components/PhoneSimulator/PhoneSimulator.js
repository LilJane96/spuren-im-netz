import { ScrollContainer } from "react-nice-scroll";
import { useState } from "react";
import CreatePassword from "./CreatePassword/CreatePassword";
import CreateUserName from "./CreateUserName/CreateUserName";
import Privacy from "./Privacy/Privacy";
import UploadPicture from "./UploadPicture/UploadPicture";
import MessageOfStranger from "./MessageOfStranger/MessageOfStranger";
import SearchPerson from "./SearchPerson/SearchPerson";
import UserProfile from "./UserProfile/UserProfile";
import "./PhoneSimulator.css";
import UserProfileEndUnit from "./UserProfileEndUnit/UserProfileEndUnit";
import Bottombar from "../Bottombar/Bottombar";
import { UserProfilData } from "../../utilis/Profiles/User";
import { BadFoxProfileData } from "../../utilis/Profiles/BadFox";
import { GoodFoxProfileData } from "../../utilis/Profiles/GoodFox";

export default function PhoneSimulator({
  title,
  content,
  selectedAnswer,
  nextPage,
}) {
  console.log("title", title);
  console.log("content", content);
  console.log("selectedAnswer", selectedAnswer);
  console.log("nextPage", nextPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    nextPage();
  };

  const shouldRenderBottombar = () => {
    // Add page numbers for which you want to show the Bottombar
    const pagesWithBottombar = [5]; // Adjust as needed

    return pagesWithBottombar.includes(parseInt(content, 10));
  };

  const renderSimulatorPage = () => {
    const contentNumber = parseInt(content, 10);
    switch (contentNumber) {
      case 1:
        return (
          <CreateUserName answer={selectedAnswer} onNextPage={handleNextPage} />
        );
      case 2:
        return <CreatePassword answer={selectedAnswer} />;
      case 3:
        return <Privacy answer={selectedAnswer} />;
      case 4:
        return <UploadPicture answer={selectedAnswer} />;
      case 5:
        return (
          <UserProfile profileData={UserProfilData} answer={selectedAnswer} />
        );
      case 6:
        return <MessageOfStranger answer={selectedAnswer} />;
      case 7:
        return <SearchPerson answer={selectedAnswer} />;
      case 8:
        return <UserProfile profileData={BadFoxProfileData} />;
      case 9:
        return <UserProfile profileData={BadFoxProfileData} />;
      case 10:
        return <UserProfile profileData={BadFoxProfileData} />;
      case 11:
        return <UserProfileEndUnit />;
      case 12:
        return <UserProfile profileData={GoodFoxProfileData} />;
      case 13:
        return <UserProfile profileData={UserProfilData} />;
      default:
        return null;
    }
  };

  return (
    <div className="PhoneContainer">
      <ScrollContainer>
        <div className="sectionContainer">
          <section className="section">
            <div className="headerContainer">
              <h3>{title}</h3>
            </div>
            <div className="social-media-learning-app">
              <div className="middle-panel">{renderSimulatorPage()}</div>
              {shouldRenderBottombar() && <Bottombar />}
            </div>
          </section>
        </div>
      </ScrollContainer>
    </div>
  );
}

// PhoneSimulator.propTypes = {
//   selectedAnswer: PropTypes.string.isRequired,
//   nextPage: PropTypes.func.isRequired
// };
