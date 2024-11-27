// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, Marker, Polygon } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import droneIconImage from "../images/droneimg.png"; // Replace with your drone icon

// // Drone icon configuration
// const droneIcon = new L.Icon({
//   iconUrl: droneIconImage,
//   iconSize: [40, 40],
// });

// // Function to interpolate points between two coordinates
// const interpolate = (start, end, numPoints) => {
//   const points = [];
//   for (let i = 0; i <= numPoints; i++) {
//     const lat = start[0] + (i / numPoints) * (end[0] - start[0]);
//     const lng = start[1] + (i / numPoints) * (end[1] - start[1]);
//     points.push([lat, lng]);
//   }
//   return points;
// };

// const MapSimulation = () => {
//   const [dronePosition, setDronePosition] = useState([19.8528, 75.8566]); // Initial drone position
//   const mapRef = useRef(null); // Reference for map actions
  
//   // Define polygon coordinates
//   const polygonCoords = [
//     [19.8530, 75.8564],
//     [19.8535, 75.8570],
//     [19.8525, 75.8575],
//     [19.8520, 75.8568],
//     [19.8530, 75.8564], // Closing the polygon
//   ];

//   useEffect(() => {
//     if (mapRef.current) {
//       const map = mapRef.current;
//       const bounds = L.latLngBounds(polygonCoords);
//       map.fitBounds(bounds, { padding: [20, 20] }); // Add padding for better view
//     }
//   }, [polygonCoords]);

//   // Precompute the path along the polygon edges
//   const dronePath = [];
//   const pointsPerEdge = 30; // Adjust for smoother or coarser movement

//   for (let i = 0; i < polygonCoords.length - 1; i++) {
//     const edgePath = interpolate(polygonCoords[i], polygonCoords[i + 1], pointsPerEdge);
//     dronePath.push(...edgePath);
//   }

//   // Simulate drone movement along the path
//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDronePosition(dronePath[index]); // Update drone position
//       index = (index + 1) % dronePath.length; // Loop through the path
//     }, 100); // Update every 100ms for smoother movement

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [dronePath]);

//   return (
//     <MapContainer
//       center={[19.8528, 75.8566]}
//       zoom={15}
//       style={{ height: "500px", width: "100%" }}
//       ref={mapRef}
//       scrollWheelZoom={true} // Enable zooming with the scroll wheel
//     >
//       {/* Default Map Layer */}
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {/* Render Polygon */}
//       <Polygon positions={polygonCoords} color="blue" />
//       {/* Render Drone Marker */}
//       <Marker position={dronePosition} icon={droneIcon} />
//     </MapContainer>
//   );
// };

// export default MapSimulation;
