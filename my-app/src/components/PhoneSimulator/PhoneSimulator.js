import { ScrollContainer } from 'react-nice-scroll';
import "./PhoneSimulator.css";
import { useState } from 'react';
import CreateAccount from './CreateAccount/CreateAccount';
import CreateUserName from './CreateUserName/CreateUserName';

export default function PhoneSimulator({selectedAnswer}) {
    const [currentPage, setCurrentPage] = useState(1);
    console.log("SELECTEDANSWER", selectedAnswer)

    const totalPages = 2;
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Dynamische Auswahl der Simulator-Seite
    const renderSimulatorPage = () => {
      switch (currentPage) {
        case 1:
          return <CreateAccount onNextPage={handleNextPage} />;
        case 2:
          return <CreateUserName onNextPage={handleNextPage} answer={selectedAnswer}/>;
        default:
          return null;
      }
  };
    return(<div className='phoneContainer'>
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
        </div>)
}