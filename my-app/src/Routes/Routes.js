import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import FrameOne from "../pages/UnitOne/FrameOne";
import Hub from "../pages/Hub/Hub";

function Directions() {
  return (
    <div className="Routes">
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frameone/:unitId" element={<FrameOne />} />
          <Route path="/hub" element={<Hub />} />
        </Routes>
      </main>
    </div>
  );
}

export default Directions;
