import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Components and Pages
import Login from "./component/Login.jsx";
import Login1 from "./component/Login1";
import TermsAndConditions from "./component/TermsAndConditions";
import NotFound from "./component/NotFound.jsx";
import Authroute from "./component/ProtecteRoutes/Authroute";

import Home from "./Page/Home";
import ActiveDrone from "./Page/ActiveDrone";
import AllDrones from "./Page/AllDrones";
import DroneProfile from "./Page/Profile/DroneProfile";
import FlightLogs from "./Page/FlightLogs";
import Faqs from "./Page/Faqs";
import Crashed from "./Page/Crashed";

import FlyingDrone from "./Page/FlyingDrones";
import RepairDrones from "./Page/RepairDrones";
import PilotDetails from "./Page/PilotDetails";
// import DroneSimulation from "./component/DroneSimulation.jsx";
import SimulationAcre from "./Page/SimulationAcre.jsx";


function App() {
  const isAuthorised = localStorage.getItem("auth");

  return (
    <Routes>
      {/* Public route */}
      <Route
        path="/login"
        element={!isAuthorised ? <Login1 /> : <Navigate to="/" />}
      />

      {/* Protected routes */}
      <Route path="/" element={<Authroute element={<Home />} />} />
      <Route path="/active" element={<Authroute element={<ActiveDrone />} />} />
      <Route path="/allDrones" element={<Authroute element={<AllDrones />} />} />
      <Route path="/profile/:id" element={<Authroute element={<DroneProfile />} />} />
      <Route path="/terms" element={<Authroute element={<TermsAndConditions />} />} />
      <Route path="/flogs" element={<Authroute element={<FlightLogs />} />} />
      <Route path="/faqs" element={<Authroute element={<Faqs />} />} />
      <Route path="/crashed" element={<Authroute element={<Crashed />} />} />

      <Route path="/flyingDrones" element={<Authroute element={<FlyingDrone />} />} />
      <Route path="/repairDrones" element={<Authroute element={<RepairDrones />} />} />
      <Route path="/pilotDetails" element={<Authroute element={<PilotDetails />} />} />
      <Route path="/acre" element={<Authroute element={<SimulationAcre />} />} />


      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
