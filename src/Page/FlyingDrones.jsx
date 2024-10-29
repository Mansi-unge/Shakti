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
import Logout from "../component/buttons/Logout";
const FlyingDrone = () => {

  const [droneAllData, setDroneAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  console.log(droneAllData);
  useEffect(() => {
    setLoading(true);
    const fetchDroneInfo = async () => {
      try {
        const response = await axios.get(`https://shakti-ge66.onrender.com/getAllDrones`); // Adjust URL and ID as needed
        setDroneAllData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching All drones drone profile:", error);
      }
    };

    fetchDroneInfo();
  }, []);

  return (
    <div className="FlyingDronewrapper bgDesign h-[100vh] w-[100vw] overflow-hidden relative ">
      {/* // Add drone modal  HIDE & SHOW */}
      {/* Add drone modal End  */}
      <img
        src={roundImg}
        className="design absolute bottom-[2rem] left-[-9rem]  mix-blend-luminosity w-[30rem]"
      />
      <img
        src={wShape}
        className="design absolute bottom-[2rem] -right-9  opacity-75 w-[30rem]"
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
        <Logout/>
        </div>
      </div>
      {/* navbar end  */}

      {/* All drones start  */}
      <div className="FlyingDrone glassshadow p-1.5 h-[80%] backdrop-blur-sm w-[95%] mx-auto relative z-30 rounded-xl   ">
        {/* min nav start  */}
        <div className="minNav flex justify-between items-center pt-2">
          {/* left heading  */}
          <div className="left flex justify-center items-center">
          <Link to={"/"}>  <div className="back p-2 bg-blue-300 border-t-[1px] border-b-[1px] border-r-[1px] rounded-ee-lg rounded-se-lg text-white">
              <IoIosArrowBack fontSize={"1.2rem"} />
            </div></Link>
            <h className="heading ml-4 font-bold text-xl text-white">
              Flying Drones
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
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 py-1.5">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  UIN-Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Pilot Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
          {!loading ?  <tbody>
              {droneAllData.map((item, index) => (
                <tr
                  class=" border-b bg-blue-50 dark:border-gray-300 my-2"
                  key={index}
                  onClick={() => navigate(`/profile/:${item._id}`)}
                >
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium text-blue-400 dark:text-white"
                  >
                    {item.droneDetail.droneSerialNumber}
                  </th>
                  <td class="px-6 py-2 text-blue-400">
                    {item.pilotDetail.pilotName}
                  </td>
                  <td class="px-6 py-2 text-blue-400">
                    
                    {item.purchaseDetail.location}
                  </td>
                  <td class="px-6 py-2 text-blue-400">
                    
                    {item.purchaseDetail.owner}
                  </td>
                  <td class="px-6 py-2 text-blue-400">
                    
                    {item.purchaseDetail.phone}
                  </td>
                  <td class="px-6 py-2 ">
                    
                      <div className="Status p-1 rounded-md opacity-90 bg-blue-200 border text-center font-semibold border-blue-500 text-blue-500">
                        Flying Drones
                      </div>
                    
                  </td>
                </tr>
              ))}
            </tbody> : <h1 className="text-xl font-bold text-white m-2">Loading...</h1> }
          </table>
        </div>
      </div>
      {/* All drones end  */}
    </div>
  );
};

export default FlyingDrone;
