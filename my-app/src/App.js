import React, { useEffect, useState } from "react";
import Routes from "./Routes/Routes.js";
import "./App.css";

const App = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isPortrait) {
    return (
      <div className="App">
        <div className="rotate-device">
          <div className="phones-container">
            <div className="phone-landscape">
              <div className="buttons-container">
                <div className="buttons-left">
                  <div className="button-left"></div>
                  <div className="button-left"></div>
                </div>

                <div className="button-right"></div>
              </div>
            </div>
            <div className="phone-portrait">
              <div className="buttons-container">
                <div className="buttons-left">
                  <div className="button-left"></div>
                  <div className="button-left"></div>
                </div>

                <div className="button-right"></div>
              </div>
            </div>
          </div>

          <div className="rotate-text">
            Bitte drehen Sie Ihr Gerät ins Querformat
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="app-content">
        <Routes />
      </div>
    </div>
  );
};

export default App;
