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
import bgCircle from "../images/bgCircle.svg";

const AllDrones = () => {
  const [close, setClose] = useState(false);
  const [droneAllData, setDroneAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDroneInfo = async () => {
      try {
        const response = await axios.get(
          `https://shakti-ge66.onrender.com/getAllDrones`
        );
        setDroneAllData(response.data.data);
      } catch (error) {
        console.error("Error fetching all drones:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDroneInfo();
  }, []);

  // Filter drones based on search query and selected filter
  const filteredDrones = droneAllData.filter((drone) => {
    const matchesSearchQuery =
      drone.droneDetail.droneSerialNumber
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      drone.pilotDetail.pilotName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      drone.purchaseDetail.owner
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      drone.purchaseDetail.phone
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      drone.purchaseDetail.location
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      drone.Dstatus.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filter === "All" || drone.Dstatus === filter;
    return matchesSearchQuery && matchesFilter;
  });
  console.log("all drone", droneAllData);
  console.log("all filtered data", filteredDrones);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="AllDronewrapper bgDesign h-[100vh] w-[100vw] overflow-hidden relative">
      {close && (
        <div
          className={`addNow absolute z-50 h-screen w-screen bg-[#0000006b] backdrop-blur-sm`}
        >
          <AddDrone setClose={setClose} close={close} />
        </div>
      )}
      <img
        src={roundImg}
        className="design absolute mix-blend-luminosity bottom-[2rem] left-[-9rem] w-[30rem]"
      />
      <img
        src={wShape}
        className="design absolute bottom-[2rem] -right-9 opacity-50 w-[30rem]"
      />
      <img
        src={cImg}
        className="design absolute -top-[1rem] -rotate-45 left-[18rem] w-[30rem]"
      />

      {/* Navbar start */}
      <div className="navbar flex items-start justify-between relative z-20">
        <div className="logo bg-[#0000005e] p-1 px-4">
          <img src={Logo} alt="" className="w-[150px]" />
        </div>
        <div className="title group bg-[#0000005e] text-4xl text-center text-white mt-2 font-bold px-4 py-1 relative backdrop-blur-sm">
          <div className="rightline absolute -top-[1px] bg-transparent -right-[1px] h-[14px] w-4 border-t border-r border-blue-400"></div>
          <div className="rightline absolute -bottom-[1px] bg-transparent -left-[1px] h-[14px] w-4 border-l border-b border-yellow-400"></div>
          S.<span className="text-blue-500">H</span>.A.K.
          <span className="text-yellow-500">T</span>.I
          <div className="fullForm absolute -bottom-0 -left-0 text-xs bg-[#000000] p-1.5 text-white top-0 right-0 backdrop-blur-xl opacity-0 duration-200 transition-all linear group-hover:sm:opacity-100 ">
            Safety high-Accuracy aerial kinematic tracking integration
          </div>
        </div>
        <div className="links flex justify-center items-center gap-1 mt-2">
          <Logout />
        </div>
      </div>
      {/* Navbar end */}

      {/* All drones start */}
      <div className="allDrone h-[80%] backdrop-blur-sm w-[95%] mx-auto relative z-30 rounded-xl px-1">
        <div className="minNav flex justify-between items-center pt-2">
          <div className="left flex justify-center items-center">
            <Link to={"/"}>
              <div className="back p-2 bg-blue-300 border-t-[1px] border-b-[1px] border-r-[1px] rounded-ee-lg rounded-se-lg text-white">
                <IoIosArrowBack fontSize={"1.2rem"} />
              </div>
            </Link>
            <h1 className="heading ml-4 font-bold text-lg text-white">
              All Drones
            </h1>
          </div>
          <div className="right flex justify-center items-center gap-2 ">
            <button
              onClick={() => setClose(true)}
              className="addDrone relative z-30 p-1 rounded-md px-4 font-medium shadow-lg overflow-hidden text-white border border-blue-300 hover:opacity-80 duration-200 transition-all"
            >
              Add
            </button>
            <div className="search flex justify-center items-center border border-blue-300 rounded-lg shadow-md">
              <div className="icon p-2 opacity-80">
                <FaSearch fontSize={"1.2rem"} color="white" />
              </div>
              <input
                type="text"
                className="p-1 outline-none text-sm bg-transparent text-white"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filters mx-2">
              <select
                name="droneFilter"
                id="droneFilter"
                className="p-1 rounded-md bg-[#2198b6] text-white border text-center font-medium border-[#84e8fa] drop-shadow-md outline-none"
                onChange={handleFilterChange}
                value={filter}
              >
                <option value="All">All Drones</option>
                <option value="Flying">Flying Drones</option>
                <option value="Active">Active Drones</option>
                <option value="Inactive">Inactive Drones</option>
                <option value="Repair">Repair Drones</option>
              </select>
            </div>
          </div>
        </div>

        {/* Drones table */}
        <div className="dronesTable mt-12 mx-1 relative overflow-x-auto shadow-md sm:rounded-ss-lg sm:rounded-se-lg bg-transparent h-[85%]">
          <img
            src={bgCircle}
            alt=""
            className="bgCircle absolute -top-2 left-0 right-0 bottom-0 z-0 opacity-30 mx-auto"
          />
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative z-50 backdrop-blur-md">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">UIN-Number</th>
                <th className="px-6 py-3">Pilot Name</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Customer Name</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            {!loading ? (
              <tbody>
                {filteredDrones.length > 0 ? (
                  filteredDrones.map((item, index) => (
                    <tr
                      className="border-b dark:border-gray-300 my-2 hover:bg-[#00000041] duration-200 transition-all linear cursor-pointer"
                      key={index}
                      onClick={() => navigate(`/profile/${item._id}`)}
                    >
                      <th className="px-6 py-2 font-medium text-white dark:text-white">
                        {item.droneDetail.droneSerialNumber}
                      </th>
                      <td className="px-6 py-2 text-white">
                        {item.pilotDetail.pilotName}
                      </td>
                      <td className="px-6 py-2 text-white">
                        {item.purchaseDetail.location}
                      </td>
                      <td className="px-6 py-2 text-white">
                        {item.purchaseDetail.owner}
                      </td>
                      <td className="px-6 py-2 text-white">
                        {item.purchaseDetail.phone}
                      </td>
                      <td class="px-6 py-2 ">
                        {/* Status Button with  CONSITIONALLY RENDERING  STARTS */}
                        <div
                          className={`"Status relative z-10 p-1 rounded-md shadow-md border text-center font-semibold text-white duration-200 transition-all linear 
                      ${
                        item.Dstatus == "Active"
                          ? "bg-[#16C098] border-[#84fade] hover:bg-[#16c098b9]"
                          : ""
                      }
                      ${
                        item.Dstatus == "Repair"
                          ? "bg-[#c0b516] border-[#faf284] hover:bg-[#c0b516b9]"
                          : ""
                      }
                      ${

                        item.Dstatus == "Inactive"
                          ? "bg-[#c04c16fa] border-[#faa584] hover:bg-[#c03816b9]"
                          : ""
                      }
                      ${
                        item.Dstatus == "Flying"
                          ? "bg-[#169ec0] border-[#84e8fa] hover:bg-[#1698c0b9]"
                          : ""
                      }
                      `}
                        >
                          {item.Dstatus}

                          {/* Buttons corner designs  */}
                          <div className="whiteDesign absolute top-0 left-0 bg-[#ffffff65] z-20 rounded-tl-[6px] w-5 h-5"></div>
                          <div className="whiteDesign absolute top-2 right-0 rotate-180 bg-[#ffffff65] z-20 rounded-tl-[6px] w-5 h-5"></div>
                          {/* buttons corner design ends  */}
                        </div>
                        {/* Status Button with  CONSITIONALLY RENDERING  ENDS */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-white py-2">
                      No matching drones found.
                    </td>
                  </tr>
                )}
              </tbody>
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-white py-2">
                  Loading drones...
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDrones;
