import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import FrameOne from "../pages/UnitOne/FrameOne";
import Hub from "../pages/Hub/Hub";
import Result from "../pages/Result/Result";

function Directions() {
  return (
    <div className="Routes">
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="frameone/:unitId/:stepId" element={<FrameOne />} />
          <Route path="/result/:unitId/:stepId" element={<Result />} />
        </Routes>
      </main>
    </div>
  );
}

export default Directions;
