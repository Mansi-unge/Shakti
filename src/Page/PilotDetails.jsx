import React from "react";
import Logo from "../images/prym_logo.png";
import { Link } from "react-router-dom";
import cImg from "../images/cImg.svg";
import wShape from "../images/wShape.svg";
import roundImg from "../images/roundImg.svg";
import { IoIosArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const PilotDetails = () => {
  return (
    <div className="PilotdetailWrapper  bgDesign h-[100vh] w-[100vw] overflow-hidden text-white relative">
      <img
        src={roundImg}
        className="design absolute bottom-[2rem] left-[-9rem] mix-blend-luminosity  w-[30rem]"
      />
      <img
        src={wShape}
        className="design absolute bottom-[2rem] -right-9  opacity-50 w-[30rem]"
      />
      <img
        src={cImg}
        className="design absolute -top-[1rem] -rotate-45 left-[18rem]  w-[30rem]"
      />

      {/* navbar start  */}
      <div className="navbar flex items-start justify-between relative z-20 ">
        {/* //left div  */}
        <div className="logo bg-[#0000005e p-1 px-4">
        <Link to="/">
            <img width={"150px"} src={Logo} alt="" />
          </Link>
        </div>

        {/* middle div  */}
        <div className="title bg-[#0000005e] text-4xl text-center text-white mt-2 font-bold px-4 py-1 relative backdrop-blur-sm">
          {/* right line  */}
          <div className="rightline absolute -top-[1px] bg-transparent -right-[1px] h-[14px] w-4 border-t border-r border-blue-400"></div>
          <div className="rightline absolute  -bottom-[1px] bg-transparent -left-[1px] h-[14px] w-4 border-l border-b border-yellow-400"></div>
          S.<span className="text-blue-500">H</span>.A.K.
          <span className="text-yellow-500">T</span>.I
        </div>

        {/* right div  */}
        <div className="links flex justify-center items-center gap-1 mt-2">
          <Link to="/">
            <div className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black]  ease-linear duration-200  hover:bg-[#0000002c] hover:rounded-md">
              Log<span className="text-[crimsn]">out</span>{" "}
            </div>
          </Link>
        </div>
      </div>
      {/* navbar end  */}

      {/* center div start  */}
      <div className="center glassshadow h-[80%] w-[95%] rounded-xl backdrop-blur-md mx-auto">
        {/* header start  */}
        <div className="header flex justify-between items-center gap-2 p-1.5">
          {/* left div start  */}
          <div className="left flex justify-center items-center gap-2">
            {/* back button & Heading start  */}
            <Link to={"/"}>
              {" "}
              <div className="back p-2 bg-blue-300 border-t-[1px] border-b-[1px] border-r-[1px] rounded-ee-lg rounded-se-lg text-white">
                <IoIosArrowBack fontSize={"1.2rem"} />
              </div>
            </Link>
            <h className="heading ml-4 font-bold text-lg text-white">
              Pilot Details
            </h>
            {/* back button & heading ends  */}
          </div>
          {/* left div ends  */}

          {/* right div start  */}
          <div className="right">
            {/* search box start  */}
            <div className="searchBox  pl-2 rounded-lg backdrop-blur-md flex gap-2 justify-center items-center border border-blue-300 ">
              <FaSearch fontSize={"1.2rem"} color="white" />

              <input
                type="text"
                placeholder="Search..."
                className="searchNow h-[100%] py-2 px-1 bg-transparent outline-none"
              />
            </div>
            {/* search box ends  */}
          </div>
          {/* right divs ends  */}
        </div>
        {/* header ends  */}

        {/* pTable  start  */}
        {/* // Drones_tables */}
        <div class="dronesTable p-1 mt-12 mx-1 relative overflow-x-auto shadow-md sm:rounded-ss-lg sm:rounded-se-lg bg-transparent h-[85%]">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  CERTIFICATION No
                </th>
                <th scope="col" class="px-6 py-3"> 
                  PILOT NAME
                </th>
                <th scope="col" class="px-6 py-3">
                  CERTIFICATION ISSUE NO
                </th>
                <th scope="col" class="px-6 py-3">
                  DATE OF JOINING
                </th>
                <th scope="col" class="px-6 py-3">
                  LOCATION
                </th>
                <th scope="col" class="px-6 py-3">
                  More
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class=" border-b dark:border-gray-300 my-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-white dark:text-white"
                >
                  CERT-12345
                </th>
                <td class="px-6 py-4 text-white">Jane Cooper</td>
                <td class="px-6 py-4 text-white">PUNE</td>
                <td class="px-6 py-4 text-white">20/06/2023</td>
                <td class="px-6 py-4 text-white">Jalna</td>
                <td class="px-6 py-4 text-white">
                    <button className="py-1.5 w-[80%] relative  font-semibold bg-[#16C098] border border-[#84fade] rounded-md text-[#ffffff] shadow-md hover:bg-[#16c098b9] duration-200 transition-all linear">Details

                          {/* Buttons corner designs  */}
                          <div className="whiteDesign absolute top-0 shadow-lg left-0 bg-[#ffffff65] z-20 rounded-tl-[6px] w-5 h-5"></div>
                        <div className="whiteDesign absolute top-3 right-0 shadow-lg rotate-180 bg-[#ffffff65] z-20 rounded-tl-[6px] w-5 h-5"></div>
                        {/* buttons corner design ends  */}
                    </button>
                </td> 
              </tr>
            </tbody>
          </table>
        </div>
        {/* pTable  ends  */}
      </div>
      {/* center div end  */}
    </div>
  );
};

export default PilotDetails;
