import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import FrameOne from "../pages/UnitOne/FrameOne";

function Directions() {
 

  return (
    <div className="Routes">

      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frameone" element={<FrameOne />} />

         
        </Routes>
      </main>
    </div>
  );
}

export default Directions;
