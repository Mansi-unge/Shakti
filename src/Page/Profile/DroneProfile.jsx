import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import Logo from "../../images/prym_logo.png";
import { FaArrowRight } from "react-icons/fa";
import droneInfo from "../../Data/droneProfile.json";
import roundImg from "../../images/roundImg.svg";
import wShape from "../../images/wShape.svg";
import cImg from "../../images/cImg.svg";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../../component/Modal";
import Logout from "../../component/buttons/Logout";

const DroneProfile = () => {
  // hooks
  const navigate = useNavigate();

  // All use states
  const [closeDlt, setCloseDlt] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allowEdit, setAllowEdit] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log("the dtrone id is here ", id)

  const [droneInfo, setDroneInfo] = useState({
    usageDetail: {
      application: "",
      operationalArea: "",
      controlRange: 0,
      gpsPositioning: false,
      weatherResistance: false,
    },
    purchaseDetail: {
      owner: "",
      location: "",
      phone: "+91 ",
      purchaseDate: "",
      droneSerialNumber: "",
      vendor: "",
      warranty: "",
      maintenanceSchedule: "",
    },
    droneDetail: {
      droneModel: "",
      manufacture: "",
      droneSerialNumber: "",
      type: "",
    },
    specification: {
      maxTakeOffWeight: 0,
      payloadCapacity: 0,
      spraySystem: "",
      sprayWidth: 0,
      batteryCapacity: 0,
      numberOfBatteries: 0,
      flightTimePerBattery: 0,
      chargingTimePerBattery: 0,
    },
    pilotDetail: {
      pilotName: "",
      pilotCertificationNumber: "",
      trainingLevel: "",
      insuranceCoverage: "",
    },
    id: id,
  });

  const handleSubmit = async () => {
    if (!isChange) {
      return toast.warning("Please do some changes first");
    }
    try {
      const response = await axios.put(
        `https://shakti-ge66.onrender.com/updateDrone/${id}`,
        droneInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data); // Handle response data if needed
      toast.success("Detail Updated Successfully");
      setIsChange(false);
      setAllowEdit(false);
      navigate(`/profile/:${id}`);
    } catch (error) {
      console.error("Error updating drone:", error); // Handle errors
      toast.error("Internal server error");
    }
  };

  // Handle input change
  const handleChange = (e, section, field) => {
    setDroneInfo({
      ...droneInfo,
      [section]: {
        ...droneInfo[section],
        [field]: e.target.value,
      },
    });
    setIsChange(true);
  };

  const goBack = () => {
    navigate(-1); // Navigate back by one step in the history stack
  };

  useEffect(() => {
    setLoading(true);
    const fetchDroneInfo = async () => {
      try {
        const response = await axios.get(
          `https://shakti-ge66.onrender.com/get/${id}`
        ); // Adjust URL and ID as needed
        setDroneInfo(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching drone profile:", error);
      }
    };

    fetchDroneInfo();
  }, []);

  return (
    <div className="DroneDetwrapper  pb-12 min-h-[100vh] overflow-x-hidden overflow-y-auto flex justify-start items-center flex-col relative">
      {closeDlt && <Modal setCloseDlt={setCloseDlt} closeDlt={closeDlt} />}
      <img
        src={roundImg}
        className="design absolute mix-blend-luminosity left-[-9rem] bottom-[27rem]  w-[30rem]"
      />
      <img
        src={wShape}
        className="design absolute bottom-[2rem] -right-9  w-[30rem]"
      />
      <img
        src={cImg}
        className="design absolute top-[5rem] left-[18rem] w-[30rem]"
      />

      {/* navbar start  */}
      <div className="navbar flex items-start justify-between sm:mx-4  relative z-20 w-[100%] mb-12 mt-4 ">
        {/* //left div  */}
        <div className="logo bg-[#0000005e p-1 px-4 shadow-lg ">
        <Link to="/">
            <img width={"150px"} src={Logo} alt="" />
          </Link>
        </div>

        {/* middle div  */}
        <div className="title bg-[#0000005e] text-4xl text-center text-white mt-2 font-bold px-4 py-1 relative  backdrop-blur-sm ">
          {/* right line  */}
          <div className="rightline absolute -top-[1px] bg-transparent -right-[1px] h-[14px] w-4 border-t border-r border-blue-400"></div>
          <div className="rightline absolute  -bottom-[1px] bg-transparent -left-[1px] h-[14px] w-4 border-l border-b border-yellow-400"></div>
          S.<span className="text-blue-500">H</span>.A.K.
          <span className="text-yellow-500">T</span>.I
        </div>

        {/* right div  */}
        <div className="links flex justify-center items-center gap-1 ">
          {/* status start  NOTE :- CONDITIONALLY RENDERING STTUS STYLE BASE ON THE STATUS VALUE  */}
          <div className="status text-white font-semibold">
            {droneInfo.Dstatus && (
              <div
                className={`Status relative px-6 mx-2 z-10 p-1 rounded-md  shadow-md  border-l border-r text-center font-semibold drop-shadow-md 
                ${
                  droneInfo.Dstatus == "Active"
                    ? "text-green-400 border-green-400"
                    : ""
                }
                ${
                  droneInfo.Dstatus == "Repair"
                    ? "text-yellow-400 border-yellow-400"
                    : ""
                }
                ${
                  droneInfo.Dstatus == "Inactive"
                    ? "text-red-400 border-red-400"
                    : ""
                }
                ${
                  droneInfo.Dstatus == "Flying"
                    ? "text-blue-400 border-blue-400"
                    : ""
                }
                `}
              >
                {droneInfo.Dstatus}
                <span class="absolute flex h-3 w-3 -top-1 -right-1 ">
                  <span
                    class={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                     ${droneInfo.Dstatus == "Active" ? "bg-green-400" : ""}
                ${droneInfo.Dstatus == "Repair" ? "bg-yellow-400" : ""}
                ${droneInfo.Dstatus == "Inactive" ? "bg-red-400" : ""}
                ${droneInfo.Dstatus == "Flying" ? "bg-blue-400" : ""}
                    `}
                  ></span>
                  <span
                    class={`relative inline-flex rounded-full h-3 w-3
                     ${droneInfo.Dstatus == "Active" ? "bg-green-300" : ""}
                ${droneInfo.Dstatus == "Repair" ? "bg-yellow-300" : ""}
                ${droneInfo.Dstatus == "Inactive" ? "bg-red-300" : ""}
                ${droneInfo.Dstatus == "Flying" ? "bg-blue-300" : ""}
                    `}
                  ></span>
                </span>
              </div>
            )}
          </div>
          {/* status ends  */}

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
            {" "}
            <div className="FlightLogs cursor-pointer backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black] ease-linear duration-200 hover:bg-[#0000002c] hover:rounded-md">
              FlightLogs
            </div>
          </Link>

          <Logout />
        </div>
      </div>
      {/* navbar end  */}

      <div className="heading_Title">
        <h1 className="font-bold text-2xl drop-shadow-md ">
          Drone <span className="text-white ">Profile</span>{" "}
        </h1>
      </div>
      

      {/* Profile Glass Start  */}
      {!loading ? (
        <div className="profileDiv glassshadow mt-12 backdrop-blur-sm mx-auto  rounded-[10px] h-[80%] w-[90%] relative z-20 ">
          <button
            onClick={() => {
              setAllowEdit(!allowEdit);
            }}
            className="editNow bgDesign absolute -top-8 right-0 p-1 rounded-md px-4 font-medium text-white border-l-2 border-r-2 border-blue-300  hover:opacity-80 duration-200 transition-all"
          >
            {allowEdit ? "Cancel" : "Edit"}
          </button>
          <button
            onClick={() => {
              setCloseDlt(!closeDlt);
            }}
            className="editNow bgDesign absolute -top-8 right-[6rem] p-1 rounded-md px-4 font-medium text-white border-l-2 border-blue-300 border-r-2  hover:opacity-80 duration-200 transition-all"
          >
            Delete
          </button>
          {allowEdit && (
            <button
              onClick={handleSubmit}
              className={`saveData bgDesign ${
                allowEdit ? "animation" : ""
              } absolute -top-8 right-48 p-1 rounded-md px-4 font-medium text-white border-l-2 border-blue-300 border-r-2  hover:opacity-80 duration-200 transition-all`}
            >
              Save
            </button>
          )}
          {/* Drone info Wrapper div start  */}
          <div className="top rounded-[10px] flex justify-between items-start gap-2 flex-wrap">
            {/* drones img  */}
            <div className="img bg-transparent w-[380px] h-[300px] relative z-40 ">
              {" "}
              <div className="title"></div> <div className="des"></div>
              {/* // img container  */}
              <div className="topleftBox bg-transparent border-b-2 sm:border-r-2 text-center border-blue-500 -top-[1px] -left-[1px] sm:rounded-ee-full h-[60%] w-[100%] sm:w-[60%]  absolute z-40">
                <img
                  className="w-[100%] h-[100%]  object-cover bg-center overflow-visible relative z-40 top-[-1rem] left-[-1rem]"
                  src="https://static.vecteezy.com/system/resources/thumbnails/024/673/802/small_2x/drone-flying-on-farming-to-inspection-and-scanning-the-area-for-monitoring-smart-farming-and-researching-technology-concept-transparent-background-ai-generated-generative-ai-png.png"
                  alt=""
                />
                {/* <div className="shadowDrone absolute bottom-0 bg-black w-36 ml-9 rounded-[80%] z-30 blur-xl h-8"></div> */}
              </div>
              {/* // img container End  */}
              {/* double box design start  */}
              <div className="topleftBox bg-blue-200 sm:rounded-ee-full h-[80%] w-[70%] absolute z-30"></div>
              <div className="topleftBox bg-white sm:rounded-ee-full h-[90%] w-[80%] absolute z-20 "></div>
              <div className="topleftBox bg-blue-300 sm:rounded-ee-full h-[85%] w-[75%] absolute z-20 "></div>
              {/* <div className="topleftBox bg-orange-300 sm:rounded-ee-full h-[60%] w-[80%] absolute z-10 "></div>
            {/* double box design end  */}
            </div>
            {/* drones img end  */}

            <div className="droneDetials flex-1 ">
              <div className="Pilot  shadow-lg p-4">
                <h1 className="text-lg font-bold text-white">Drone Details</h1>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">
                          Attribute
                        </th>
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(droneInfo.droneDetail).map(
                        ([key, value]) => (
                          <tr key={key}>
                            <td className="py-2 px-4 font-semibold text-gray-800">
                              {key
                                ? key.charAt(0).toUpperCase() + key.slice(1)
                                : ""}
                            </td>
                            <td className="px-4 bg-white rounded-md border shadow-lg text-sm font-medium">
                              <input
                                disabled={!allowEdit}
                                type="text"
                                className="h-[100%] p-2 w-[100%] outline-blue-300"
                                value={value}
                                onChange={(e) =>
                                  handleChange(e, "droneDetail", key)
                                }
                              />
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* drone details info Wrapper div end  */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {/* Usage Detail Wrapper */}
            <div className="UsageDetailWrapper  border-gray-200 shadow-lg p-4">
              <h1 className="text-lg font-bold text-white">Usage Details</h1>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Attribute
                      </th>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(droneInfo.usageDetail).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td className="py-2 px-4 font-semibold text-gray-800">
                            {key
                              ? key.charAt(0).toUpperCase() + key.slice(1)
                              : ""}
                          </td>
                          <td className="px-4 bg-white rounded-md border shadow-lg text-sm font-medium">
                            <input
                              disabled={!allowEdit}
                              type="text"
                              className="h-[100%] p-2 w-[100%] outline-blue-300"
                              value={value}
                              onChange={(e) =>
                                handleChange(e, "usageDetail", key)
                              }
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Purchase Details */}
            <div className="purchase   border-gray-200 shadow-lg p-4">
              <h1 className="text-lg font-bold text-white">Purchase Details</h1>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Attribute
                      </th>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(droneInfo.purchaseDetail).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td className="py-2 px-4 font-semibold text-gray-800">
                            {key
                              ? key.charAt(0).toUpperCase() + key.slice(1)
                              : ""}
                          </td>
                          <td className="px-4 bg-white rounded-md border shadow-lg text-sm font-medium">
                            <input
                              disabled={!allowEdit}
                              type="text"
                              className="h-[100%] p-2 w-[100%] outline-blue-300"
                              value={value}
                              onChange={(e) =>
                                handleChange(e, "purchaseDetail", key)
                              }
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Specification */}
            <div className="Specification  border-gray-200 shadow-lg p-4">
              <h1 className="text-lg font-bold text-white">Specification</h1>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Attribute
                      </th>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(droneInfo.specification).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td className="py-2 px-4 font-semibold text-gray-800">
                            {key
                              ? key.charAt(0).toUpperCase() + key.slice(1)
                              : ""}
                          </td>
                          <td className="px-4 bg-white rounded-md border shadow-lg text-sm font-medium">
                            <input
                              disabled={!allowEdit}
                              type="text"
                              className="h-[100%] p-2 w-[100%] outline-blue-300"
                              value={value}
                              onChange={(e) =>
                                handleChange(e, "specification", key)
                              }
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pilot Details */}
            <div className="Pilot  shadow-lg p-4">
              <h1 className="text-lg font-bold text-white">Pilot Details</h1>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Attribute
                      </th>
                      <th className="py-2 px-4 text-left font-semibold text-gray-600">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(droneInfo.pilotDetail).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td className="py-2 px-4 font-semibold text-gray-800">
                            {key
                              ? key.charAt(0).toUpperCase() + key.slice(1)
                              : ""}
                          </td>
                          <td className="px-4 bg-white rounded-md border shadow-lg text-sm font-medium">
                            <input
                              disabled={!allowEdit}
                              type="text"
                              className="h-[100%] p-2 w-[100%] outline-blue-300"
                              value={value}
                              onChange={(e) =>
                                handleChange(e, "pilotDetail", key)
                              }
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <h1 className="loading mt-24 text-[3rem] font-bold  opacity-40">
            Loading....
          </h1>{" "}
        </>
      )}
      {/* Profile glass end  */}
    </div>
  );
};

export default DroneProfile;