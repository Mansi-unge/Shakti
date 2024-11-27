// import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";
// import droneimg from "../images/droneimg.png";

// const DroneSimulation = () => {
//   const [pitch, setPitch] = useState(0); // Rotation around X-axis
//   const [roll, setRoll] = useState(0);  // Rotation around Z-axis
//   const [yaw, setYaw] = useState(0);    // Rotation around Y-axis

//   useEffect(() => {
//     // Connect to the Socket.IO server
//     const socket = io("http://localhost:8000"); // Replace with your backend server URL

//     socket.on("data", (data) => {
      
//         setPitch(data.started.pitch);
//         setRoll(data.started.roll);
//         setYaw(data.started.yaw);
//       });
    
//     // Cleanup on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="w-80 h-80 flex rounded-full items-center justify-center bg-gray-1 ">
//       {/* Drone Image Container */}
   
//         <img src={droneimg}   style={{
//           transform: `rotateX(${pitch}deg) rotateY(${yaw}deg) rotateZ(${roll}deg)`,
//           transition: "transform 0.3s ease",
//         }} alt="Drone" className="h-20 w-20 border-2 object-cover" />
     
//       {/* Real-Time Data Display */}
      
//     </div>
//   );
// };

// export default DroneSimulation;
