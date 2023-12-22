// PhoneSimulator.js
import { ScrollContainer } from 'react-nice-scroll';
import "./PhoneSimulator.css";
import { useState } from 'react';
import CreatePassword from './CreatePassword/CreatePassword';
import CreateUserName from './CreateUserName/CreateUserName';
import Privacy from './Privacy/Privacy';
import PropTypes from 'prop-types';
import UploadPicture from './UploadPicture/UploadPicture';
import MyProfil from './MyProfil/MyProfil';
import Bottombar from '../Bottombar/Bottombar';

export default function PhoneSimulator({content, selectedAnswer, nextPage }) {
  const [currentPage, setCurrentPage] = useState(0);
  console.log("Content", content)

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    nextPage(); 
  };

  const renderSimulatorPage = () => {
    switch (content) {
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
      default:
        return null;
    }
  };

  return (
    <div className='phoneContainer'>
      <ScrollContainer>
        <div className="sectionContainer">
          <section className="section">
            <div className='headerContainer'>
              <h3>Socialmedia Simulator</h3>
            </div>
            <div className="social-media-learning-app">
              <div className="middle-panel">
                {renderSimulatorPage()}
              </div>
            </div>
          </section>
        </div>
        {nextPage >= 4 && (
          <div>
            <Bottombar />
          </div>
        )}
      </ScrollContainer>
    </div>
  );
}

PhoneSimulator.propTypes = {
  selectedAnswer: PropTypes.string.isRequired,
  nextPage: PropTypes.func.isRequired
};
