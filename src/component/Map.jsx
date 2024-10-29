// LiveMap.js
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  const [position, setPosition] = useState([19.85405197818243, 75.85372193540294]); // Default position
  const [map, setMap] = useState(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Fetch initial location
    fetch('/get_location')
      .then((response) => response.json())
      .then((data) => {
        const newPosition = [parseFloat(data.lat), parseFloat(data.lng)];
        setPosition(newPosition);
      });

    // Update location periodically
    const interval = setInterval(() => {
      fetch('/get_location')
        .then((response) => response.json())
        .then((data) => {
          const newPosition = [parseFloat(data.lat), parseFloat(data.lng)];
          setPosition(newPosition);
          if (markerRef.current) {
            markerRef.current.setLatLng(newPosition);
            map.setView(newPosition);
          }
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [map]);

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '100vh', width: '100%' }}
      whenCreated={setMap}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
        ref={markerRef}
      >
        <Popup>
          Current Position
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
