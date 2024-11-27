import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Import the icons
import DroneSensorInfo from "./DroneSensorInfo";

const SensorPanel = () => {
  const [leftPanel, setLeftPanel] = useState(false);
  const [sensorData, setSensorData] = useState(null);
  const isMounted = useRef(true); // Create a ref to track component mount status

  useEffect(() => {
    // Establish socket connection with backend server
    const socket = io("http://localhost:8000");

    // Listen for the 'data' event from the server and update the state
    socket.on("data", (newData) => {
      if (isMounted.current) {
        console.log("Received data:", newData);
        setSensorData(newData); // Update the sensor data
      }
    });

    // Cleanup function to set the component as unmounted
    return () => {
      isMounted.current = false;
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setLeftPanel(!leftPanel)}
        className="cursor-pointer z-30 w-fit relative backdrop-blur-md bg-[#0000002c] text-lg text-center p-2 font-semibold px-2 text-white drop-shadow-[1px_1px_1px_black] ease-linear duration-200 rounded-e-xl hover:scale-105 my-2"
      >
        {leftPanel ? (
          <IoIosArrowBack fontSize={"1.4rem"} />
        ) : (
          <IoIosArrowForward fontSize={"1.4rem"} />
        )}
      </div>
      <div
        className={`Sensor_Info absolute bg-[#eeeeee5e] shadow-md text-black backdrop-blur-md z-20 left-2 top-[20%] rounded-es-lg overflow-y-auto ${
          leftPanel ? "leftPanelOpen" : "leftPanelClose"
        }`}
      >
        <div className="sensorInfo grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 max-w-[240px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[480px] 2xl:max-w-[600px] overflow-x-hidden sm:overflow-y-auto sm:max-h-[200px] lg:max-h-[300px] xl:max-h-[320px] 2xl:max-h-[600px]" >
          {sensorData ? (
            <>
              {/* Display 'ended' sensor data */}
              <DroneSensorInfo
                title="Altitude "
                valueText={String(sensorData.ended.altitude || 0)}
                unit="m"
              />
              <DroneSensorInfo
                title="Temperature "
                valueText={String(sensorData.ended.temperature || 0)}
                unit="°C"
              />
              <DroneSensorInfo
                title="Pressure "
                valueText={String(sensorData.ended.pressure || 0)}
                unit="hPa"
              />
              <DroneSensorInfo
                title="Pitch "
                valueText={String(sensorData.ended.pitch || 0)}
                unit="°"
              />
              <DroneSensorInfo
                title="Yaw "
                valueText={String(sensorData.ended.yaw || 0)}
                unit="°"
              />
              <DroneSensorInfo
                title="Roll "
                valueText={String(sensorData.ended.roll || 0)}
                unit="°"
              />
            </>
          ) : (
            <p>Loading data...</p> // Show a loading message if data is not yet available
          )}
        </div>
      </div>
    </>
  );
};

export default SensorPanel;