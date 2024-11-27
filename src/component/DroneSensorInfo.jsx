import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const DroneSensorInfo = ({ title, valueText, unit }) => {
  // Configure the speedometer based on the title
  const getSpeedometerConfig = (title) => {
    switch (title) {
      case "Altitude":
        return { maxValue: 10000 }; // Altitude can go up to 10,000 meters
      case "Temperature":
        return { maxValue: 100 }; // Temperature range in Celsius
      case "Pressure":
        return { maxValue: 1200 }; // Atmospheric pressure range in hPa
      case "Pitch":
      case "Roll":
      case "Yaw":
        return { maxValue: 360 }; // Rotation angles are from 0 to 360°
      default:
        return { maxValue: 100 }; // Default max value
    }
  };

  const config = getSpeedometerConfig(title); // Fetch config for each title

  // Ensure valueText is converted to a number and defaults to 0 if NaN
  const numericValue = Number(valueText) || 0;

  return (
    <div className="flex flex-col justify-around items-center p-2 rounded-md py-2 hover:scale-105 transition-all duration-200">
      <div className="text-[15px] font-bold text-black">{title}</div>
      <div className="w-[120px] h-[70px]">
        <ReactSpeedometer
          value={numericValue} // Ensure value is a valid number
          maxValue={config.maxValue} // Use the maxValue based on the title
          width={120} // Adjust the size of the speedometer
          height={70}
          needleHeightRatio={0.7}
          ringWidth={10} // Set the thickness of the ring
          needleColor={"#000"} // Set the needle color
          startColor={"#00ff00"} // Green for the start
          endColor={"#ff0000"} // Red for the end
          segments={5} // Divide the speedometer into 5 segments
          textColor={"transparent"} // Hide the value text inside the speedometer
        />
      </div>
      <div className="text-[13px] font-semibold text-gray-600">
        {`${numericValue} ${unit}`} {/* Display the value next to the speedometer */}
      </div>
    </div>
  );
};

export default DroneSensorInfo;