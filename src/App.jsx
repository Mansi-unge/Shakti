import "./App.css";
import Login from "./component/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Page/Home";
import ActiveDrone from "./Page/ActiveDrone";
import AllDrones from "./Page/AllDrones";
import DroneProfile from "./Page/Profile/DroneProfile";
import TermsAndConditions from "./component/TermsAndConditions";
import Authroute from "./component/ProtecteRoutes/Authroute";
import NotFound from "./component/Notfound";
import FlightLogs from "./Page/FlightLogs";
import Faqs from "./Page/Faqs";
import Crashed from "./Page/Crashed";
import SimulationAcre from "./Page/SimulationAcre";
import Login1 from "./component/Login1";
import FlyingDrone from "./Page/FlyingDrones";
import RepairDrones from "./Page/RepairDrones";
import PilotDetails from "./Page/PilotDetails";
function App() {
  const isAuthorised = localStorage.getItem("auth");
  console.log("the auth is here  ", isAuthorised);
  return (
    // <div className="wrapper w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto z-10">
    <Routes>
      {/* Public route */}
      <Route
        path="/login"
        element={!isAuthorised ? <Login1 /> : <Navigate to={"/"} />}
      />

      {/* Protected routes */}
      <Route path="/" element={<Authroute element={<Home />} />} />
      <Route path="/active" element={<Authroute element={<ActiveDrone />} />} />
      <Route
        path="/allDrones"
        element={<Authroute element={<AllDrones />} />}
      />
      <Route
        path="/profile/:id"
        element={<Authroute element={<DroneProfile />} />}
      />
      <Route
        path="/terms"
        element={<Authroute element={<TermsAndConditions />} />}
      />

      <Route path="/flogs" element={<Authroute element={<FlightLogs />} />} />

      <Route path="/faqs" element={<Authroute element={<Faqs />} />} />

      <Route path="/crashed" element={<Authroute element={<Crashed />} />} />

      <Route path="/acre" element={<Authroute element={<SimulationAcre />} />} />

      <Route path="/flyingDrones" element={<Authroute element={<FlyingDrone />} />} />

      <Route path="/RepairDrones" element={<Authroute element={<RepairDrones />} />} />
      
      <Route path="/pilotDetails" element={<Authroute element={<PilotDetails />} />} />

      {/* <Route path="/login" element={<Authroute element={<Login1 />} />} /> */}



      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    // </div>
  );
}

export default App;
