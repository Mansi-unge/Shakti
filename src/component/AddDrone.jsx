import axios from "axios";
import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoCloudUpload } from "react-icons/io5";
import { SiFiles } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddDrone = ({ setClose, close }) => {
  const chooseFile = useRef();
  const navigate = useNavigate();

  const [droneInfo, setDroneInfo] = useState({
    usageDetail: {
      application: "",
      operationalArea: "",
      controlRange: 0,
      gpsPositioning: "NO",
      weatherResistance: "NO",
    },
    purchaseDetail: {
      owner: "",
      location:"",
      phone:"+91 ",
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
    Dstatus: "Active",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/createdrone`,
        droneInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data); // Handle response data if needed
      toast.success("Detail Updated Successfully");
      navigate(`/allDrones`);
    } catch (error) {
      console.error("Error updating drone:", error); // Handle errors
      toast.error("Internal server error");
    }
  };

  // Handle input change
  const handleChange = (e, section, field) => {
    const isSelect = e.target.name;
    if(isSelect == "select"){
      setDroneInfo({
        ...droneInfo,
        [field]: e.target.value,
      });
    }else{
      setDroneInfo({
        ...droneInfo,
        [section]: {
          ...droneInfo[section],
          [field]: e.target.value,
        },
      });
    }

   
  };
  console.log(droneInfo)

  return (
    <div className=" flex  justify-center items-center relative z-50 h-full w-full m-1 sm:m-4">
      {/* add drone form start  */}
      <div
        className={`addDroneForm  bg-transparent border-l shadow-lg w-[99%] sm:w-[80%] h-[90%] overflow-y-auto rounded-md relative ${
          close ? "animation" : ""
        }`}
      >
        {/* heading start  */}
        <h1 className="title text-white drop-shadow-md font-semibold m-4 text-xl">
          Add Drone
        </h1>
        {/* heading end  */}


        {/* close modal start */}
        <div
          onClick={() => {
            setClose(false);
          }}
          className="close absolute top-0 right-0 m-2 text-white"
        >
          <IoClose fontSize={"1.6rem"} />
        </div>
        {/* close modal end  */}

        {/* form Start  */}
        <form onSubmit={handleSubmit}>
          <div
            className={`profileDiv bgDesign  mt-12 backdrop-blur-lg mx-auto  rounded-[10px] min-h-[80%] w-[99%] sm:w-[90%] relative z-20 `}
          >
            <button
              type="submit"
              className="editNow bgDesign absolute -top-8 right-0 p-1 rounded-md px-4 font-medium text-white border-l-2 border-r-2 border-blue-300  hover:opacity-80 duration-200 transition-all"
            >
              Create
            </button>

            {/* Drone info Wrapper div start  */}
            <div className="top rounded-[10px] flex justify-between items-start gap-2 flex-wrap">
              {/* drones img  */}
              <div className="img bg-transparent w-[380px] h-[300px] relative z-40 ">
                
                <div className="title"></div> <div className="des"></div>
                {/* // img container  */}
                <div className="topleftBox bg-transparent p-1 rounded-lg border-b-2 border-r-2 text-center border-blue-500 -top-[1px] -left-[1px] h-[60%] w-[100%] sm:w-[60%]  absolute z-40">
                  <img
                    className="w-[100%] h-[100%]  object-cover bg-center overflow-visible relative z-40 top-[-1rem] left-[-1rem]"
                    src="https://static.vecteezy.com/system/resources/thumbnails/024/673/802/small_2x/drone-flying-on-farming-to-inspection-and-scanning-the-area-for-monitoring-smart-farming-and-researching-technology-concept-transparent-background-ai-generated-generative-ai-png.png"
                    alt=""
                  />
                  {/* <div className="shadowDrone absolute bottom-0 bg-black w-36 ml-9 rounded-[80%] z-30 blur-xl h-8"></div> */}
                </div>
                {/* // img container End  */}
                {/* double box design start  */}
                <div className="topleftBox bg-blue-200 rounded-lg h-[80%] w-[100%] sm:w-[70%] absolute z-30"></div>
                <div className="topleftBox bg-white rounded-lg h-[90%] w-[100%] sm:w-[80%] absolute z-20 "></div>
                <div className="topleftBox bg-blue-300 rounded-lg h-[85%] w-[100%] sm:w-[75%] absolute z-20 "></div>
                <div className="image_Uploade z-40 absolute bottom-20 left-0 flex justify-between items-center mx-2">
                  <input
                    type="file"
                    placeholder="Select"
                    ref={chooseFile}
                    className="bg-transparent w-60 hidden"
                  />
                  <button
                    onClick={() => {
                      chooseFile.current.click();
                    }}
                    className="upload w-fit mr-auto text-sm flex justify-center items-center gap-2 rounded-md bg-yellow-100 shadow-md border p-0.5 mt-1 px-1.5 mx-2"
                  >
                    choose
                    <span className="text-yellow-500">
                      
                      <SiFiles />
                    </span>
                  </button>
                  <button className="upload w-fit mr-auto flex gap-2 justify-center items-center rounded-md bg-white shadow-md border p-0.5 mt-1 mx-2 px-1.5 text-sm">
                    uploade
                    <span className="text-blue-400 brightness-75">
                      
                      <IoCloudUpload />
                    </span>
                  </button>
                </div>
              </div>
              {/* drones img end  */}

              <div className="droneDetials flex-1 ">
                <div className="Pilot  shadow-lg p-4">
                  <h1 className="text-lg font-bold text-white">
                    Drone Details
                  </h1>
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
                                  type="text"
                                  placeholder={`enter ${key}...`}
                                  required
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
                                type="text"
                                placeholder={`enter ${key}...`}
                                required
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
                <h1 className="text-lg font-bold text-white">
                  Purchase Details
                </h1>
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
                                type="text"
                                placeholder={`enter ${key}...`}
                                required
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
                                type="text"
                                placeholder={`enter ${key}...`}
                                required
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
                                type="text"
                                placeholder={`enter ${key}...`}
                                required
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
                {/* status start  */}
                <div className="status my-4 p-1">
                  <h1 className="text-lg text-white font-semibold"> Status</h1>
                  <div className="sts flex justify-start items-center gap-8 mt-2">
                    <h1 className="text-lg text-white font-semibold w-[100px]">
                      {droneInfo.Dstatus == "Active" && (
                        <span className="text-green-400 drop-shadow-md">
                          Active
                        </span>
                      )}
                      {droneInfo.Dstatus == "Inactive" && (
                        <span className="text-red-400 drop-shadow-md">
                          Inactive
                        </span>
                      )}
                      {droneInfo.Dstatus == "Reapair" && (
                        <span className="text-yellow-400 drop-shadow-md">
                          Reapair
                        </span>
                      )}
                      {droneInfo.Dstatus == "Flying" && (
                        <span className="text-blue-400 drop-shadow-md">
                          Flying
                        </span>
                      )}
                    </h1>
                    <select
                      name="select"
                      id=""
                      onChange={(e) =>
                        handleChange(e, "", "Dstatus")
                      }
                      className=" p-1 rounded-md  bg-white text-black border  drop-shadow-md outline-none"
                    >
                      <option value="new " selected disabled className="">
                        All Droness
                      </option>
                      <option value="Active"> Active </option>
                      <option value="Inactive"> Inactive </option>
                      <option value="Reapair"> Reapair </option>
                      <option value="Flying"> Flying </option>
                    </select>
                  </div>
                </div>
                {/* status end  */}
              </div>
            </div>
          </div>
        </form>
        {/* Form End  */}
      </div>
      {/* add drone form end  */}
    </div>
  );
};

export default AddDrone;
