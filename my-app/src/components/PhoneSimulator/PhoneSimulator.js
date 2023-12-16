// PhoneSimulator.js
import { ScrollContainer } from 'react-nice-scroll';
import "./PhoneSimulator.css";
import { useState } from 'react';
import CreatePassword from './CreatePassword/CreatePassword';
import CreateUserName from './CreateUserName/CreateUserName';
import Privacy from './Privacy/Privacy';

export default function PhoneSimulator({ selectedAnswer, nextPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
      nextPage(); 
  };
  

  const renderSimulatorPage = () => {
    switch (nextPage) {
      case 0:
        return <CreateUserName answer={selectedAnswer} onNextPage={handleNextPage} />;
      case 1:
        return <CreatePassword answer={selectedAnswer} />;
        case 2:
          return <Privacy answer={selectedAnswer} />;
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
