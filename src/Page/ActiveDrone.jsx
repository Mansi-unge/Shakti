import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/prym_logo.png";
import Map from "../component/Map";
import { IoInformationCircle } from "react-icons/io5";
import { PiFarmBold } from "react-icons/pi";
import { PiDroneBold } from "react-icons/pi";
import { GoCopilot } from "react-icons/go";
import Lottie from "lottie-react";
import animationData from "../Lottie/animation.json";
import animationData1 from "../Lottie/animation1.json";
import DroneSensorInfo from "../component/DroneSensorInfo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Logout from "../component/buttons/Logout";

const ActiveDrone = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [pilotInfo, setPilotInfo] = useState(false);
  const [profileInfo, setProfileInfo] = useState(false);
  const [flightLog, setFlightLog] = useState(false);
  const [leftPanel, setLeftPanel] = useState(true);

  const [status, setStatus] = useState("");

  // const location = useLocation();
  const sts =  location.pathname.split("/")[1];
  // console.log("the status is ", sts);
  
  useEffect(() => {
    setStatus(sts);
  }, []);

  setTimeout(() => {
    setIsAnimationComplete(true);
  }, 800);
  return (
    <>
      <div
        className={`MainWrapper w-[100vw] h-[100vh] overflow-hidden relative  ${
          isAnimationComplete ? "animation" : ""
        }`}
      >
        <div
          className={`"lottie-animation-screen flex justify-center items-center h-screen w-[100%] pointer-events-none mx-auto absolute z-30 bg-[#4242426e] backdrop-blur-sm ${
            isAnimationComplete ? "hidden" : ""
          }`}
        >
          <Lottie
            animationData={animationData}
            loop={false} // Ensure the animation doesn't loop
            autoplay={true} // Automatically play the animation
            // onComplete={() => setIsAnimationComplete(true)} // Trigger when the animation completes
            style={{ width: 350, height: 350 }}
          />
        </div>

        {/* // map background  start  */}
        <div className="map absolute top-0 left-0 right-0 bottom-0 z-10 ">
          <Map />
        </div>
        {/* map background end  */}

        {/* navbar start  */}
        <div className="navbar flex items-start justify-between relative z-20">
          {/* //left div  */}
          <div className="logo bg-[#0000005e p-1 px-4 shadow-lg ">
            <img src={Logo} alt="" className="w-[150px] " />
          </div>

          {/* middle div  */}
          <div className="title bg-[#0000005e] text-4xl text-center text-white mt-2 font-bold px-4 py-1 relative  backdrop-blur-sm">
            {/* right line  */}
            <div className="rightline absolute -top-[1px] bg-transparent -right-[1px] h-[14px] w-4 border-t border-r border-blue-400"></div>
            <div className="rightline absolute  -bottom-[1px] bg-transparent -left-[1px] h-[14px] w-4 border-l border-b border-yellow-400"></div>
            S.<span className="text-blue-500">H</span>.A.K.
            <span className="text-yellow-500">T</span>.I
          </div>

          {/* right div  */}
          <div className="links flex justify-center items-center gap-1 ">
            <Link to="/">
              <div className="logout cursor-pointer relative backdrop-blur-md bg-[#0000002c]  text-lg text-center p-2 font-semibold px-2 text-white drop-shadow-[1px_1px_1px_black] hover:text-blue-400 ease-linear duration-200  rounded-xl hover:scale-105">
                <IoArrowBackCircleSharp fontSize={"1.4rem"} />
              </div>
            </Link>
          <div className=" cursor-pointer relative backdrop-blur-md bg-[#0000002c]  text-lg text-center p-2 font-semibold px-2 text-white drop-shadow-[1px_1px_1px_black] hover:text-blue-400 ease-linear duration-200  rounded-xl hover:scale-105">
              <IoInformationCircle fontSize={"1.4rem"} />
            </div>

          <Link to="/profile/:66e188322ea7c1620039605a">
            <div
              onMouseEnter={() => {
                setProfileInfo(true);
              }}
              onMouseLeave={() => {
                setProfileInfo(false);
              }}
              className=" cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black] ease-linear duration-200 hover:bg-[#0000002c] hover:rounded-md"
            >
              profile
              <div
                className={`pilot animation  absolute space-y-2 text-white shadow-lg font-normal text-sm p-2 -bottom-[170px] -left-24 rounded-lg min-w-[170px] h-fit bg-[#00000062] backdrop-blur-sm ${
                  profileInfo ? "animation" : "closePopUp"
                }`}
              >
                <p className="info flex justify-between items-center ">
                  <h1 className="rounded-full bg-white w-10 h-10">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="object-cover rounded-full h-[100%] w-[100%] bg-center"
                      alt=""
                    />
                  </h1>
                  <h1 className=" text-blue-200 drop-shadow-md">
                    Arjuna Advance
                  </h1>
                </p>

                <p className="info flex justify-between items-center ">
                  <h1 className="">FlyingTime</h1>
                  <h1 className=" text-white drop-shadow-md">4H</h1>
                </p>

                <p className="info flex justify-between items-center ">
                  <h1 className="">Registerd </h1>
                  <h1 className=" text-white drop-shadow-md">Xyz</h1>
                </p>

                <p className="info flex justify-between items-center ">
                  <h1 className="">crash</h1>
                  <h1 className=" text-red-400 font-semibold drop-shadow-md">
                    00
                  </h1>
                </p>
                <p className="info flex justify-between items-center ">
                  <h1 className="">Maintanance</h1>
                  <h1 className=" text-yellow-400 font-semibold drop-shadow-md ml-2">
                    
                    02.04.2025
                  </h1>
                </p>
              </div>
            </div>          </Link>


         <Link to="/flogs"> 
          <div
              onMouseEnter={() => {
                setFlightLog(true);
              }}
              onMouseLeave={() => {
                setFlightLog(false);
              }}
              className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black] ease-linear duration-200 hover:bg-[#0000002c] hover:rounded-md"
            >
              FlightLogs
              <div
                className={`pilot animation  absolute space-y-2 text-white shadow-lg font-normal text-sm p-2 -bottom-[365px] -left-24 rounded-lg min-w-[170px] h-fit bg-[#00000062] backdrop-blur-sm ${
                  flightLog ? "animation" : "closePopUp"
                }`}
              >
                <p className="info flex justify-between items-center ">
                  <h1 className="rounded-full bg-white w-10 h-10">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="object-cover rounded-full h-[100%] w-[100%] bg-center"
                      alt=""
                    />
                  </h1>
                  <h1 className=" text-blue-200 drop-shadow-md ml-4">
                    Arjuna Advance
                  </h1>
                </p>

                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>

                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>

                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>
                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>
                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>
                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>
                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>
                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>
                <p className="info flex justify-between items-center ">
                  <h1 className="">Address</h1>
                  <h1 className=" text-white drop-shadow-md">xyz</h1>
                </p>
                <p className="info flex justify-between items-center">
                  <h1 className=" drop-shadow-md text-red-400 ml-auto flex justify-center items-center hover:scale-105 my-2 transition-all duration-200">see all <FaArrowRight/> </h1>
                </p>
              </div>
            </div>
            </Link> 
           <Logout/>
          </div>
        </div>
        {/* navbar end  */}

        {/* Flying Drone Start  */}
        {/* options menu start    */}
      {/* { status == "flying" && */}
      <> <div onClick={()=>setLeftPanel(!leftPanel)} className="cursor-pointer z-30 w-fit relative backdrop-blur-md bg-[#0000002c] text-lg text-center p-2 font-semibold px-2 text-white drop-shadow-[1px_1px_1px_black] ease-linear duration-200  rounded-e-xl hover:scale-105 my-2">
       { leftPanel   ? <IoIosArrowBack fontSize={"1.4rem"} /> : <IoIosArrowForward fontSize={"1.4rem"}/> }
              </div>
        <div className={`Sensor_Info absolute bg-[#0000005e shadow-md text-black backdrop-blur-md z-20 left-2 top-[20%] rounded-es-lg max-h-[480px] overflow-y-auto ${leftPanel ? "leftPanelOpen" : "leftPanelClose"}`}>
          <div className="sensroInfo flex justify-center items-center flex-wrap max-w-[240px] ">
            <DroneSensorInfo title={"ALTITUDE 20m"} valueText={"20m"} />
            <DroneSensorInfo
              title={"VERTICAL SPEED "}
              valueText={"2.1 m/sec"}
            />
            <DroneSensorInfo title={" GROUND SPEED "} valueText={"8 m/sec"} />
            <DroneSensorInfo title={"TEMPERATURE "} valueText={"28 C"} />
            <DroneSensorInfo title={" GROUND SPEED "} valueText={"8 m/sec"} />
            <DroneSensorInfo title={"TEMPERATURE "} valueText={"28 C"} />
            <DroneSensorInfo title={" GROUND SPEED "} valueText={"8 m/sec"} />
            <DroneSensorInfo title={"TEMPERATURE "} valueText={"28 C"} />

          </div>
        </div></>
        {/* } */}

        {/* weather start  */}
        <div className="info p-5 text-black flex justify-around items-center gap-4 absolute mt-auto z-20 left-2 bottom-2">
          {/* Drone status start              */}
          <div className="status w-[250px] h-[250px] p-1.5 rounded-md backdrop-blur-md border">
            <div className="heading flex justify-between items-center">
              <h1 className="font-semibold">Status</h1>
              <h1 className="font-semibold drop-shadow-[1px_1px_1px_black] text-lg text-green-300">
              {/* {status == "flying" && Flying}  
              {status == "active" && Active}  
              {status == "inactive" && InActive}  
              {status == "repair" && Repair}   */}
              Active
              </h1>
            </div>
            <div className="img lottie-container w-[90%] rounded-full overflow-hidden shadow-[inset_0px_0px_10px_rgba(0,0,0,0.6)] mx-auto h-[85%] mt-2">
              {isAnimationComplete && (
                <Lottie
                  animationData={animationData1}
                  loop={true} // Make sure the animation doesn't loop
                  autoplay={true} // Automatically play the animation
                  onComplete={() => setIsAnimationComplete(true)}
                />
              )}
            </div>
          </div>
          {/* other droe info start  */}
          <div className="others  flex justify-center items-center gap-8 mt-auto">
            {/* btn 1  */}
            <div className="info1 flex justify-start items-center w-[120px] backdrop-blur-md bg-[#ffffff50] rounded-md hover:-translate-y-2 ease-linear transition-all duration-200">
              <div className="logo bg-white text-xl rounded-md ">
                
                <PiFarmBold className="text-green-400" fontSize={"2rem"} />
              </div>
              <div className="title flex-1 font-bold drop-shadow text-center">
                11 Acre
              </div>
            </div>

            {/* btn 2  */}
            <div className="info1 flex justify-start items-center w-[120px] backdrop-blur-md bg-[#ffffff59] rounded-md hover:-translate-y-2 ease-linear transition-all duration-200">
              <div className="logo bg-white text-xl rounded-md ">
                
                <PiDroneBold
                  className="text-blac k text-red-600"
                  fontSize={"2rem"}
                />
              </div>
              <div className="title flex-1 font-bold drop-shadow text-center ">
                6 Crash
              </div>
            </div>

            {/* btn 3  */}
            <div className="info1 flex justify-start items-center w-[120px] backdrop-blur-md bg-[#ffffff59] rounded-md hover:-translate-y-2 ease-linear transition-all duration-200">
              <div className="logo bg-white text-xl rounded-md ">
                
                <GoCopilot className="text-blue-400" fontSize={"2rem"} />
              </div>
              <div
                className="title flex-1 font-bold drop-shadow text-center relative cursor-pointer
              "
              onMouseEnter={() => {
                setPilotInfo(true);
              }}
              onMouseLeave={() => {
                setPilotInfo(false);
              }}
                onClick={() => {
                 
                }}
              >
                Pilot
                {/* dot animation start  */}
                <div className="dotAnimation absolute -top-2 -right-1">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                </div>
                {/* dot animation End  */}
                {/* .pilot info start  */}
                <div
                  className={`pilot animation  absolute text-white shadow-lg font-normal text-sm p-2 -top-28 -right-40 rounded-lg min-w-[160px] h-fit bg-[#00000062] backdrop-blur-sm ${
                    pilotInfo ? "animation" : "closePopUp"
                  }`}
                >
                  <p className="info flex justify-between items-center ">
                    <h1 className="">Name</h1>
                    <h1 className=" text-blue-200 drop-shadow-md">Jhon Wick</h1>
                  </p>

                  <p className="info flex justify-between items-center ">
                    <h1 className="">Exp</h1>
                    <h1 className=" text-blue-200 drop-shadow-md">2 year</h1>
                  </p>

                  <p className="info flex justify-between items-center ">
                    <h1 className="">Address</h1>
                    <h1 className=" text-blue-200 drop-shadow-md">Jalna</h1>
                  </p>

                  <p className="info flex justify-between items-center ">
                    <h1 className="">crash</h1>
                    <h1 className=" text-red-400 font-semibold drop-shadow-md">
                      01
                    </h1>
                  </p>
                </div>
                {/* pilot info end  */}
              </div>
            </div>
          </div>
          {/* drone other info end  */}
          {/* drone status end  */}
        </div>
        {/* status ans info end  */}
      </div>
    </>
  );
};

export default ActiveDrone;
