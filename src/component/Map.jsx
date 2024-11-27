import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FiMapPin } from "react-icons/fi";
import { MdOutlineSatelliteAlt } from "react-icons/md";

const Map = () => {
  const [position, setPosition] = useState([19.8528, 75.8566]); // Default position
  const [map, setMap] = useState(null);
  const [isSatellite, setIsSatellite] = useState(false);
  const markerRef = useRef(null);

  // Coordinates for the polygon
  
const polygonCoords = [
  [ -34.2276150063424, -59.04915322297288],
  [ -34.22114723278052, -59.04477789241592],
  [ -34.22054327525944, -59.04437706550128],
  [ -34.21873129879095, -59.04316001184408],
  [ -34.21650239550559, -59.04167246489006],
  [ -34.21644265814812, -59.04180590282932],
  [ -34.21640353370066, -59.04187303785665],
  [ -34.21626693726962, -59.04225367704342],
  [ -34.2162611614003, -59.04227769404109],
  [ -34.21619131142944, -59.04261754313941],
  [ -34.21619130934771, -59.0426360785996],
  [ -34.21606068134079, -59.04286726542237],
  [ -34.21593430784393, -59.04317437121783],
  [ -34.21594728974635, -59.04334514538437],
  [ -34.21597161317718, -59.0435150936835],
  [ -34.21595941656726, -59.04382517625817],
  [ -34.21583621727918, -59.04394054453165],
  [ -34.21581121809368, -59.04408042938219],
  [ -34.21574185513347, -59.04443470138713],
  [ -34.21575621374269, -59.04522520026955],
  [ -34.21581509325886, -59.04606240454696],
  [ -34.21588822395728, -59.04687667179509],
  [ -34.21600424719821, -59.04857379705032],
  [ -34.21615939781619, -59.04907204582402],
  [ -34.21606886708611, -59.049089386334],
  [ -34.21599025805918, -59.04918874950282],
  [ -34.21599492038354, -59.04941171969874],
  [ -34.21599846400468, -59.04963835559924],
  [ -34.21602490024916, -59.0498798607099],
  [ -34.21608857493793, -59.0500150835128],
  [ -34.21619597062377, -59.0502116326367],
  [ -34.21620478875094, -59.05032372263938],
  [ -34.21615601768486, -59.05054889691416],
  [ -34.2160658032556, -59.05091612403475],
  [ -34.21601069184411, -59.05124136935879],
  [ -34.21595783742784, -59.05151800023202],
  [ -34.21591665463425, -59.05174825469069],
  [ -34.21594612940275, -59.05196539100882],
  [ -34.21600273604991, -59.05233336377268],
  [ -34.21601204912838, -59.05274301454947],
  [ -34.21602719570933, -59.05308258503413],
  [ -34.21618939597068, -59.05361023245966],
  [ -34.21634602977212, -59.05800044123263],
  [ -34.21629458351379, -59.05406693829426],
  [ -34.21614451650475, -59.05411108270521],
  [ -34.21596028698331, -59.05407595486956],
  [ -34.215800949121, -59.05389582590421],
  [ -34.21560908986864, -59.05365495650467],
  [ -34.2154468699922, -59.05360928378583],
  [ -34.21527282305344, -59.05357773063891],
  [ -34.21513306485274, -59.05368985601876],
  [ -34.215041214097, -59.05387663340028],
  [ -34.21503531635324, -59.05389884174885],
  [ -34.21493383453556, -59.05417599445815],
  [ -34.21493383381955, -59.05418766155195],
  [ -34.21492173274781, -59.05432653898044],
  [ -34.21498781934783, -59.0544718601279],
  [ -34.21506467072499, -59.05459277371553],
  [ -34.21516317243002, -59.05475824484945],
  [ -34.21521029102094, -59.05512216562061],
  [ -34.21525160906855, -59.05575173598273],
  [ -34.21520784734825, -59.05618363810967],
  [ -34.21519351014984, -59.05648160109551],
  [ -34.21538595006859, -59.05674524229463],
  [ -34.21542238546457, -59.05695048710885],
  [ -34.21549481300077, -59.05718799444211],
  [ -34.21563120746997, -59.05741564175491],
  [ -34.21572913035899, -59.05760589752012],
  [ -34.21577250535276, -59.05786084904669],
  [ -34.21578798417203, -59.05797734992576],
  [ -34.2158679774051, -59.05826529053611],
  [ -34.21601733195696, -59.05849842983437],
  [ -34.21628158880866, -59.05871474303526],
  [ -34.21654236152281, -59.05886092550355],
  [ -34.21684947340236, -59.05893082789461],
  [ -34.21725562949757, -59.05908015734904],
  [ -34.21742987013675, -59.05915891204636],
  [ -34.21889331609749, -59.06118657653352],
  [ -34.21894270697344, -59.06246248800224],
  [ -34.21901037645452, -59.063117398987],
  [ -34.21920016438345, -59.06347215119046],
  [ -34.2276150063424, -59.04915322297288] // Closing the polygon
];


  useEffect(() => {
    let interval; // Declare `interval` inside useEffect

    // Example commented functionality for periodic updates:
    // interval = setInterval(() => {
    //   fetch('/get_location')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const newPosition = [parseFloat(data.lat), parseFloat(data.lng)];
    //       setPosition(newPosition);
    //       if (markerRef.current) {
    //         markerRef.current.setLatLng(newPosition);
    //         map?.setView(newPosition); // Use optional chaining to avoid errors
    //       }
    //     });
    // }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [map]); // Dependency array ensures the cleanup function runs properly.

  const handleMarkerClick = () => {
    if (map) {
      map.setZoom(map.getZoom() - 1); // Avoid large zoom changes
    }
  };

  const toggleMapType = () => {
    setIsSatellite((prev) => !prev);
  };

  return (
    <div>
      <button
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={toggleMapType}
      >
        {isSatellite ? <FiMapPin className='text-2xl' /> : <MdOutlineSatelliteAlt className='text-2xl' />}
      </button>

      <MapContainer
        center={position}
        zoom={15}
        style={{ height: '100vh', width: '100%' }}
        whenCreated={setMap}
        attributionControl={false}
      >
        <TileLayer
          url={
            isSatellite
              ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
              : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
          attribution={
            isSatellite
              ? '&copy; <a href="https://www.esri.com/">Esri</a>'
              : '&copy; OpenStreetMap contributors'
          }
        />
        <Polygon positions={polygonCoords} color="green" opacity={0.5} />
        <Marker
          position={position}
          ref={markerRef}
          eventHandlers={{ click: handleMarkerClick }}
        >
          <Popup>Current Position</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
