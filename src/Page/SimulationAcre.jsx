import axios from "axios";
import React, { useEffect, useState } from "react";
import cImg from "../images/cImg.svg";
import wShape from "../images/wShape.svg";
import roundImg from "../images/roundImg.svg";
import Logo from "../images/prym_logo.png";
import { IoArrowBackCircleSharp, IoInformationCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

const SimulationAcre = () => {
  const [droneInfo, setDroneInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [simulationLoad, setSimulationLoad] = useState(true);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back by one step in the history stack
  };

  useEffect(() => {
    setLoading(true);
    const fetchDroneInfo = async () => {
      try {
        const response = await axios.get(
          `https://shakti-ge66.onrender.com/get/66e18a002ea7c1620039606c`
        ); // Adjust URL and ID as needed
        setDroneInfo(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching drone profile:", error);
      }
    };

    fetchDroneInfo();
  }, []);

  console.log("data ", droneInfo);

  return (
    <div className=" min-h-screen relative overflow-hidden">
      <img
        src={roundImg}
        className="design z-20 absolute left-[-9rem] bottom-[-4rem] opacity-60 mix-blend-luminosity w-[30rem]"
      />
      <img
        src={wShape}
        className="design z-20 absolute top-[29rem] right-9  opacity-50 w-[30rem]"
      />
      <img
        src={cImg}
        className="design absolute z-[-1] top-[8rem] left-[18rem] opacity-30 w-[30rem]"
      />

      {/* navbar start  */}
      <div className="navbar1 flex items-start justify-between gap-2 relative z-20 w-[100%] ">
        {/* //left div  */}
        <div className="logo bg-transparent p-1 px-4 shadow-lg ">
        <Link to="/">
            <img width={"150px"} src={Logo} alt="" />
          </Link>
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
          <div
            onClick={goBack}
            className="logout cursor-pointer relative backdrop-blur-md bg-[#0000002c]  text-lg text-center p-2 font-semibold px-2 text-white drop-shadow-[1px_1px_1px_black] hover:text-blue-400 ease-linear duration-200  rounded-xl hover:scale-105"
          >
            <IoArrowBackCircleSharp fontSize={"1.4rem"} />
          </div>
          <Link to="/profile">
            <div className=" cursor-pointer relative backdrop-blur-md bg-[#0000002c]  text-lg text-center p-2 font-semibold px-2 text-white drop-shadow-[1px_1px_1px_black] hover:text-blue-400 ease-linear duration-200  rounded-xl hover:scale-105">
              <IoInformationCircle fontSize={"1.4rem"} />
            </div>
          </Link>

          <Link to="/flogs">
            <div className="FlightLogs cursor-pointer backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black] ease-linear duration-200 hover:bg-[#0000002c] hover:rounded-md">
              FlightLogs
            </div>
          </Link>

          <Link to="/">
            <div className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black]  ease-linear duration-200  hover:bg-[#0000002c] hover:rounded-md">
              Log<span className="text-[crimsn]">out</span>
            </div>
          </Link>
        </div>
      </div>
      {/* navbar end  */}

      {/* title wrapper start  */}
      <div className="titleWrapper my-12 mx-auto w-[98%] sm:w-[90%]">
        <h1 className="Sim_heading font-bold sm:text-2xl md:text-3xl text-center mb-4">
          {" "}
        Drone Simulation{" "}
        </h1>

        <div className="his_Wrapper flex justify-between items-center gap-2">
          {/* left  */}
          <div className="history w-[50%]">
            {/* heading start  */}
            <h1 className="his-Title text-lg font-bold text-blue-400 drop-shadow-md">
              History
            </h1>
            {/* heading end  */}

            {/* scroll his start  */}
            <div className="hisContainer flex justify-start items-center gap-4 mt-3 ">
              {/* Sim his 1 start  */}
              <div id="imgWrapper" className="imgWrapper transition-all duration-200 ease-linear bg-blue-100 flex justify-center items-center hover:scale-110 hover:before:content-['22.3.2024'] hover:before:flex hover:before:z-[5]">
              <img
                className="singleHis shadow-md w-[130px] h-[130px] object-cover bg-center rounded-md hover:scale-105 hover:shadow-xl duration-150 ease-linear"
                src="https://i.ytimg.com/vi/_xmrKQ5hf7Y/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-DoACuAiKAgwIABABGGUgYChKMA8=&rs=AOn4CLBmkp0ZlOT1jbn82sTfqE8mt8i8jQ"
                alt="coming"
              />
              </div>
              <img
                className="singleHis shadow-md w-[130px] h-[130px] object-cover bg-center rounded-md hover:scale-105 hover:shadow-xl duration-150 ease-linear"
                src="https://dsy5mvbgl2i1x.cloudfront.net/wp-content/uploads/2018/02/dm-circle1.jpg"
                alt="coming"
              />
              <img
                className="singleHis shadow-md w-[130px] h-[130px] object-cover bg-center rounded-md hover:scale-105 hover:shadow-xl duration-150 ease-linear"
                src="https://pandfglobal.com/wp-content/uploads/2022/10/Thames-farm.jpg"
                alt="coming"
              />
              <img
                className="singleHis shadow-md w-[130px] h-[130px] object-cover bg-center rounded-md hover:scale-105 hover:shadow-xl duration-150 ease-linear"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBES1z_ubDCjF8pQm28RDfJZBNRRSwc_dOtCorSauWvZmxro-yOensPCysyNcEtqeEVp8VBj4-eGbRszLwLbP6gTy0nnEDBoQEByY9oGcudvb-VGrxqWU9ckgmDAGrcVQr5eXxTgecSDWX/s1600/Farm+plan+map+from+drone.jpg"
                alt="coming"
              />
              <div className="seeAll ml-2">
                <IoArrowForwardCircle
                  fontSize={"2rem"}
                  className="text-blue-300 hover:scale-110 duration-150 ease-linear"
                />
                <p className="text-blue-400 text-xs mt-2">See All</p>
              </div>

              {/* Sim his 1 end  */}
            </div>

            {/* Scroll His End  */}
          </div>
          {/* left end  */}

          {/* right  */}
          <div className="current_Acre flex justify-center items-center gap-4 flex-wrap">
            {/* other info 1 start  */}
            <div className="otherInfo">
              <div className="cover min-h-12 text-sm font-medium mx-2">
                Acre <br /> Coverd
              </div>
              <div className="count h-[120px] w-[120px] font-medium flex justify-center items-center text-6xl p-2 shadow-md bg-[#affcf53b] backdrop-blur-md ">
                32
              </div>
            </div>
            {/* other info 1 start  */}

            {/* other info 2 start  */}
            <div className="otherInfo">
              <div className="cover min-h-12 text-sm font-medium mx-2">
                Highest <br />
                 Altitude <span className="text-xs font-normal opacity-90 text-gray-400"> (Meter) </span>
              </div>
              <div className="count h-[120px] w-[120px] font-medium flex justify-center items-center text-6xl p-2 shadow-md bg-[#afd0fc3b] backdrop-blur-md ">
                15 
                {/* <span className="text-2xl mt-4">M</span> */}
              </div>
            </div>
            {/* other info 2 start  */}

            {/* other info 3 start  */}
            <div className="otherInfo">
              <div className="cover min-h-12 text-sm font-medium mx-2">
                Time <p className="text-xs font-normal opacity-90 text-gray-400"> (in Hour) </p>
              </div>
              <div className="count h-[120px] w-[120px] font-medium flex justify-center items-center text-6xl p-2 shadow-md bg-[#fcfbaf3b] backdrop-blur-md ">
                2
                 {/* <span className="text-4xl mt-4">H</span> */}
              </div>
            </div>
            {/* other info 3 start  */}
          </div>
          {/* right end  */}
        </div>
      </div>
      {/* title wrapper end  */}

      {/* center wrapper start  */}
      <div className="centerWrapper bg-[#ffffff52] backdrop-blur-md centerWrapper p-1 mb-8 mx-auto w-[98%] sm:w-[90%] mt-16 rounded-lg min-h-[60vh] shadow-lg relative z-40 ">
        {/* drone info start  */}

        <div className="heading text-lg text-blue-400 drop-shadow-md font-semibold sm:p-2">
          Drone Details
        </div>
        {!loading ? (
          <div className="Info p-2  sm:pl-4 bg-blue-30 gap-6 flex-wrap flex justify-start items-center">
            {Object.entries(droneInfo.droneDetail).map(([key, value]) => (
              <div className="dInfo bg-transparent flex justify-start items-center gap-2 p-1.5 shadow-md w-fit px-2">
                <div className="left font-semibold "> {key} : </div>
                <div className="right text-sm"> {value} </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-gray-400 opacity-90 font-medium p-2">
            Loading....
          </h1>
        )}
        {/* drone info end  */}

        {/* simulation start */}
        <div className="heading-2 mt-8 text-lg text-blue-400 drop-shadow-md font-semibold sm:p-2 ">
          Drone Simulation
        </div>
        <div className="simulationScreen h-[80vh] w-[100%] border border-green-300 rounded-lg mt-4 relative z-50">
          {simulationLoad ? (
            <div className="Simulation_img1 w-[100%] h-[100%]">
              <img
                className="w-[100%] h-[100%] object-cover bg-center rounded-lg"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBES1z_ubDCjF8pQm28RDfJZBNRRSwc_dOtCorSauWvZmxro-yOensPCysyNcEtqeEVp8VBj4-eGbRszLwLbP6gTy0nnEDBoQEByY9oGcudvb-VGrxqWU9ckgmDAGrcVQr5eXxTgecSDWX/s1600/Farm+plan+map+from+drone.jpg"
                alt="comming "
              />
            </div>
          ) : (
            <div className="loading">Loading..</div>
          )}
        </div>
        {/* simulation end  */}
      </div>
      {/* center wrapper end  */}
    </div>
  );
};

export default SimulationAcre;
