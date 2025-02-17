import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import FrameOne from "../pages/UnitOne/FrameOne";
import Hub from "../pages/Hub/Hub";
import Result from "../pages/Result/Result";
import GameIntroduction from "../pages/GameIntroduction/GameIntroduction";
import FinishGame from "../pages/FinishGame/FinishGame";
import PhoneSimulator from "../components/PhoneSimulator/PhoneSimulator";
import ChartResults from "../pages/ChartResults/ChartResults";
import Dashboard from "../pages/Dashboard/Dashboard";
import UnitDashBoard from "../pages/Dashboard/UnitDashboard";

function Directions() {
  return (
    <div className="Routes">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction/:unitId" element={<GameIntroduction />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/frameone/:unitId/:stepId" element={<FrameOne />} />
          <Route path="/result/:unitId/:stepId" element={<Result />} />
          <Route path="/finishedGame/:stepId" element={<FinishGame />} />
          <Route
            path="/testGoodFox"
            element={<PhoneSimulator content={12} />}
          />
          <Route path="/testBadFox" element={<PhoneSimulator content={8} />} />
          <Route
            path="/testUserProfile"
            element={<PhoneSimulator content={13} />}
          />
          <Route path="/chartResults" element={<ChartResults />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:unitId" element={<UnitDashBoard />} />
        </Routes>
      </main>
    </div>
  );
}

export default Directions;
