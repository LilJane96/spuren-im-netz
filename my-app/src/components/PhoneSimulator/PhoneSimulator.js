import { ScrollContainer } from 'react-nice-scroll';
import { useState } from 'react';
import CreatePassword from './CreatePassword/CreatePassword';
import CreateUserName from './CreateUserName/CreateUserName';
import Privacy from './Privacy/Privacy';
import UploadPicture from './UploadPicture/UploadPicture';
import MyProfil from './MyProfil/MyProfil';
import MessageOfStranger from './MessageOfStranger/MessageOfStranger';
import SearchPerson from './SearchPerson/SearchPerson';
import UserProfile from './UserProfile/UserProfile';
import "./PhoneSimulator.css";


export default function PhoneSimulator({title, content, selectedAnswer, nextPage }) {
  const [currentPage, setCurrentPage] = useState(0);

  console.log("NEXTPAGE", nextPage)
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    nextPage(); 
  };

  const renderSimulatorPage = () => {
    console.log("content", content)
    const contentNumber = parseInt(content, 10);
    console.log("contentNumber", contentNumber)

    switch (contentNumber) {
      case 1:
        return <CreateUserName answer={selectedAnswer} onNextPage={handleNextPage} />;
      case 2:
        return <CreatePassword answer={selectedAnswer} />;
      case 3:
        return <Privacy answer={selectedAnswer} />;
      case 4:
        return <UploadPicture answer={selectedAnswer} />;
      case 5:
        return <MyProfil answer={selectedAnswer}/>;
      case 6:
        return <MessageOfStranger answer={selectedAnswer}/>;
      case 7:
        return <SearchPerson answer={selectedAnswer}/>;
      case 8:
        return <UserProfile answer={selectedAnswer}/>;
      case 9:
        return <UserProfile answer={selectedAnswer}/>;
      case 10:
        return <UserProfile answer={selectedAnswer}/>;
      default:
        return null;
    }
  };

  return (
    <div className='phoneContainer'>
      <ScrollContainer >
        <div className="sectionContainer">
          <section className="section">
            <div className='headerContainer'>
              <h3>{title}</h3>
            </div>
            <div className="social-media-learning-app">
              <div className="middle-panel">
                {renderSimulatorPage()}
              </div>
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
