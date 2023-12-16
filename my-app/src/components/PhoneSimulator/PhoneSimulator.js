// PhoneSimulator.js
import { ScrollContainer } from 'react-nice-scroll';
import "./PhoneSimulator.css";
import { useState } from 'react';
import CreateAccount from './CreateAccount/CreateAccount';
import CreateUserName from './CreateUserName/CreateUserName';

export default function PhoneSimulator({ selectedAnswer, nextPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;


  console.log("nextPage", nextPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      console.log("handleNextPage called", nextPage);
      nextPage(); // Die nextPage-Funktion wird direkt hier aufgerufen
    }
  };
  

  const renderSimulatorPage = () => {
    switch (nextPage) {
      case 0:
        return <CreateAccount onNextPage={handleNextPage} />;
      case 1:
        return <CreateUserName answer={selectedAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className='phoneContainer'>
      <ScrollContainer>
        <section style={{ height: '80vh' }}>
          <div className='headerContainer'>
            <h3>Socialmedia Simulator</h3>
          </div>
          <div className="social-media-learning-app">
            <div className="middle-panel">
              {renderSimulatorPage()}
            </div>
          </div>
        </section>
      </ScrollContainer>
    </div>
  );
}
