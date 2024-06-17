import { useState, useEffect, useRef } from "react";
import CreatePassword from "./CreatePassword/CreatePassword";
import CreateUserName from "./CreateUserName/CreateUserName";
import Privacy from "./Privacy/Privacy";
import UploadPicture from "./UploadPicture/UploadPicture";
import MessageOfStranger from "./MessageOfStranger/MessageOfStranger";
import GroupChat from "./GroupChat/GroupChat";
import GroupChatSingle from "./GroupChat/GroupChatSingle";
import GroupChatPicture from "./GroupChat/GroupChatPicture";
import GroupChatReport from "./GroupChatReport/GroupChatReport";
import GroupRules from "./GroupRules/GroupRules";
import SearchPerson from "./SearchPerson/SearchPerson";
import UserProfile from "./UserProfile/UserProfile";
import Advertisement from "./Advertisement/Advertisement";
import "./PhoneSimulator.css";
import UserProfileEndUnit from "./UserProfileEndUnit/UserProfileEndUnit";
import Bottombar from "../Bottombar/Bottombar";
import BadFoxProfileData from "../../utilis/Profiles/BadFox";
import GoodFoxProfileData from "../../utilis/Profiles/GoodFox";
import UserProfileData from "../../utilis/Profiles/User";

export default function PhoneSimulator({
  title,
  content,
  selectedAnswer,
  nextPage,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const fontSize = headerRef.current.offsetHeight * 0.4; // 50% of the container's height
      headerRef.current.style.fontSize = fontSize + 'px';
    }
  }, []);

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
          <UserProfile
            profileData={UserProfileData()}
            answer={selectedAnswer}
          />
        );
      case 6:
        return <MessageOfStranger answer={selectedAnswer} />;
      case 7:
        return <SearchPerson answer={selectedAnswer} />;
      case 8:
        return <UserProfile profileData={BadFoxProfileData()} />;
      case 9:
        return <UserProfile profileData={BadFoxProfileData()} />;
      case 10:
        return <UserProfile profileData={BadFoxProfileData()} />;
      case 11:
        return <UserProfileEndUnit />;
      case 12:
        return <UserProfile profileData={GoodFoxProfileData()} />;
      case 13:
        return <UserProfile profileData={UserProfileData()} />;
      case 14:
        return <GroupChat answer={selectedAnswer} />;
      case 15:
        return <GroupChatSingle answer={selectedAnswer} />;
      case 16:
        return <GroupChatPicture answer={selectedAnswer} />;
      case 17:
        return <GroupChatReport answer={selectedAnswer} />;
      case 18:
        return <GroupRules answer={selectedAnswer} />;
      case 19:
        return <Advertisement answer={selectedAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="PhoneContainer">
      
      <div className="headerContainer" ref={headerRef}>
        {title}
      </div>

      <section className="section" style={{ height: shouldRenderBottombar() ? '80%' : '90%' }}>
        <div className="middle-panel">{renderSimulatorPage()}</div>
      </section>

      {shouldRenderBottombar() && <Bottombar />}

    </div>
  );
}

// PhoneSimulator.propTypes = {
//   selectedAnswer: PropTypes.string.isRequired,
//   nextPage: PropTypes.func.isRequired
// };
