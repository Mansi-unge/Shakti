import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactSpeedometer from "react-d3-speedometer";

const DroneSensorInfo = ({title,valueText}) => {
  return (
    <div className=" flex flex-col justify-around items-center p-2 gap-4 rounded-md py-4 hover:scale-105 transition-all duration-200">
      <div className="top ">
        {/* <CircularProgressbar className="w-20 h-20"
          value={12}
          maxValue={32}
          text={`${Math.round((12 / 32) * 100)}%`}
          styles={buildStyles({
            rotation: 0.75, // Rotate 270 degrees to start from the left bottom corner
            strokeLinecap: 'butt', // No rounded line edges
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(62, 152, 199, ${12 / 21})`,
            textColor: '#333',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
            background:"blue",
            strokeDasharray: '1, 1',
            trailPathClassName: 'circular-progressbar-trail',
          })}
        /> */}
        {/* <ReactSpeedometer
          className="w-20 h-20"
                  width={500}

          maxValue={500}
          value={473}
          needleColor="red"
          startColor="green"
          segments={10}
          endColor="blue"
        /> */}
         <ReactSpeedometer
        width={100}
        height={50}
        needleHeightRatio={0.4}
        // value={232}
        customSegmentLabels={[
          {
            text: 'Very Bad',
            position: 'INSIDE',
            color: '#555',
            fontSize:"6px"
          },
          {
            // text: 'Bad',
            position: 'INSIDE',
            color: '#555',
            fontSize:"6px"

          },
          {
            // text: 'Ok',
            position: 'INSIDE',
            color: '#555',
            fontSize: '6px',
          },
          {
            // text: 'Good',
            position: 'INSIDE',
            color: '#555',
            fontSize:"6px"
          },
          {
            // text: 'Very Good',
            position: 'INSIDE',
            color: '#555',
            fontSize:"6px"
          },
        ]}
        ringWidth={8}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#90f2ff'}
        textColor={'#d8dee9'}
      />
      </div>
      <div className="bottom text-sm font-bold drop-shadow-md text-blue-300">
        {/* <p> Temp </p> */}
        {/* <p>Value</p> */}
      </div>
    </div>
  );
};

export default DroneSensorInfo;
