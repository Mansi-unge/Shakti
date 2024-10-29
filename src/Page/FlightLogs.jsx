import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/prym_logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import cImg from "../images/cImg.svg";
import wShape from "../images/wShape.svg";
import roundImg from "../images/roundImg.svg";
import AddDrone from "../component/AddDrone";
import axios from "axios";
const FlightLogs = () => {
  const [close, setClose] = useState(false);

  const [droneAllData, setDroneAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

//   console.log(droneAllData);
//   useEffect(() => {
//     setLoading(true);
//     const fetchDroneInfo = async () => {
//       try {
//         const response = await axios.get(`https://shakti-ge66.onrender.com/getFlightLogss`); // Adjust URL and ID as needed
//         setDroneAllData(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching All drones drone profile:", error);
//       }
//     };

//     fetchDroneInfo();
//   }, []);

  return (
    <div className="FlightLogswrapper bgDesign h-[100vh] w-[100vw] overflow-hidden relative ">

      
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
              Log<span className="text-[crimsn]">out</span>
            </div>
          </Link>
        </div>
      </div>
      {/* navbar end  */}

      {/* All drones start  */}
      <div className="FlightLogs glassshadow h-[80%] backdrop-blur-sm w-[95%] mx-auto relative z-30 rounded-xl p-1.5">
        {/* min nav start  */}
        <div className="minNav flex justify-between items-center pt-2">
          {/* left heading  */}
          <div className="left flex justify-center items-center">
          <Link to={"/"}>  <div className="back p-2 bg-blue-300 border-t-[1px] border-b-[1px] border-r-[1px] rounded-ee-lg rounded-se-lg text-white">
              <IoIosArrowBack fontSize={"1.2rem"} />
            </div></Link>
            <h className="heading ml-4 font-bold text-lg text-white">
              Flight Logs
            </h>
          </div>

          {/* right search and filters */}
          <div className="right flex justify-center items-center  gap-2 ">
            {/* search input  */}
            <div className="search flex justify-center items-center border border-blue-300 rounded-lg shadow-md">
              <div className="icon p-2  opacity-80">
                <FaSearch fontSize={"1.2rem"} color="white" />
              </div>
              <input
                type="text"
                className="p-1 outline-none text-sm bg-transparent text-white"
                placeholder="search"
              />
            </div>
          </div>
        </div>

        {/* // Drones_tables */}
        <div class="dronesTable mt-12 mx-1 relative overflow-x-auto shadow-md sm:rounded-ss-lg sm:rounded-se-lg bg-transparent h-[85%]">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-l border-r ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Log Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Total Area
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Time
                </th> <th scope="col" class="px-6 py-3">
                  Pilot Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Flight Time
                </th>
              </tr>
            </thead>
            <tbody>
                <tr
                  class=" border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white dark:text-white"
                  >
                   23421324234
                  </th>
                  <td class="px-6 py-4 text-white">
                    2 Acre
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                    Jalna
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     05-02-2024
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     12:00
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     Alice
                  </td>
                  <td class="px-6 py-4 text-white">
                    11:00
                  </td>
                </tr>
                <tr
                  class=" border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white dark:text-white"
                  >
                   23421324234
                  </th>
                  <td class="px-6 py-4 text-white">
                    2 Acre
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                    Jalna
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     05-02-2024
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     12:00
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     Alice
                  </td>
                  <td class="px-6 py-4 text-white">
                    11:00
                  </td>
                </tr>
                <tr
                  class=" border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white dark:text-white"
                  >
                   23421324234
                  </th>
                  <td class="px-6 py-4 text-white">
                    2 Acre
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                    Jalna
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     05-02-2024
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     12:00
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     Alice
                  </td>
                  <td class="px-6 py-4 text-white">
                    11:00
                  </td>
                </tr>
                <tr
                  class=" border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white dark:text-white"
                  >
                   23421324234
                  </th>
                  <td class="px-6 py-4 text-white">
                    2 Acre
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                    Jalna
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     05-02-2024
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     12:00
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     Alice
                  </td>
                  <td class="px-6 py-4 text-white">
                    11:00
                  </td>
                </tr>
                <tr
                  class=" border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white dark:text-white"
                  >
                   23421324234
                  </th>
                  <td class="px-6 py-4 text-white">
                    2 Acre
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                    Jalna
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     05-02-2024
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     12:00
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     Alice
                  </td>
                  <td class="px-6 py-4 text-white">
                    11:00
                  </td>
                </tr>   <tr
                  class=" border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white dark:text-white"
                  >
                   23421324234
                  </th>
                  <td class="px-6 py-4 text-white">
                    2 Acre
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                    Jalna
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     05-02-2024
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     12:00
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     Alice
                  </td>
                  <td class="px-6 py-4 text-white">
                    11:00
                  </td>
                </tr>
                <tr
                  class=" border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white dark:text-white"
                  >
                   23421324234
                  </th>
                  <td class="px-6 py-4 text-white">
                    2 Acre
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                    Jalna
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     05-02-2024
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     12:00
                  </td>
                  <td class="px-6 py-4 text-white">
                    
                     Alice
                  </td>
                  <td class="px-6 py-4 text-white">
                    11:00
                  </td>
                </tr>
              
            </tbody>  
          </table>
        </div>
      </div>
      {/* All drones end  */}
    </div>
  );
};

export default FlightLogs;
