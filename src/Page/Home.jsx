import React, { useEffect, useState } from "react";
import Logo from "../images/prym_logo.png";
import { GoDotFill } from "react-icons/go";
import Sun from "../logos/sun.png";
import Cld from "../logos/Cld.png";
import { GiDeliveryDrone } from "react-icons/gi";
import { PiDroneThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../Lottie/animation.json";
import Logout from "../component/buttons/Logout";
import Map from "../component/Map";

const Home = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);

  // Animation completion effect
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimationComplete(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Fetch weather data based on location
  const fetchForecast = async () => {
    if (location.lat && location.lon) {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=c43dd614ca97476091872147241910&q=${location.lat},${location.lon}&days=1&aqi=no&alerts=no`
        );
        const data = await response.json();
        setForecastData(data.forecast.forecastday[0].hour);
        setCityName(data.location.name);
        setCurrentWeather(data.current); // Set current weather
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Unable to fetch weather data.");
        
      }
    }
    
  };

  // Track location and update it continuously
  const updateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude }); // Update location directly
        },
        (error) => {
          setError("Location access denied.");
          console.error("Error fetching location:", error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    updateLocation(); // Initial location fetch
    const interval = setInterval(() => {
      updateLocation(); // Check location every 4-5 minutes
      fetchForecast(); // Fetch forecast with the updated location
    }, 240000); // Set interval for 4 minutes (240000 ms)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    fetchForecast(); // Fetch forecast when location updates
  }, [location]);

  // Filter forecast data for specific times and 3-4 hours before/after
  const filterForecastData = () => {
    if (forecastData.length > 0) {
      const currentHour = new Date().getUTCHours(); // Get current hour in UTC
      const relevantHours = [
        (currentHour + 2) % 24, // 3 hours later
        (currentHour + 5) % 24, // 4 hours later
        (currentHour - 2 + 24) % 24, // 3 hours before
        (currentHour - 5 + 24) % 24, // 4 hours before
      ];

      return forecastData.filter((hour) => {
        const hourTime = new Date(hour.time).getUTCHours(); // Get hour in UTC
        return relevantHours.includes(hourTime);
      });
    }
    return [];
  };

  return (
    <div className={`MainWrapper w-[100vw] h-[100vh] overflow-hidden relative ${isAnimationComplete ? "animation" : ""}`}>
      {/* Lottie Animation */}
      <div className={`lottie-animation-screen flex justify-center items-center h-screen w-full absolute z-30 bg-[#4242426e] backdrop-blur-sm ${isAnimationComplete ? "hidden" : ""}`}>
        <Lottie animationData={animationData} loop={false} autoplay onComplete={() => setIsAnimationComplete(true)} style={{ width: 350, height: 350 }} />
      </div>

      {/* Map */}
      <div className="map absolute top-0 left-0 right-0 bottom-0 z-10">
        <Map />
      </div>

      {/* Navbar */}
      <div className="navbar flex items-start justify-between relative z-20">
        <div className="logo bg-[#0000005e] p-1 px-4 shadow-lg">
          <img src={Logo} alt="Logo" className="w-[150px]" />
        </div>
        <div className="title bg-[#0000005e] text-4xl text-white font-bold px-4 py-1 mt-2">
          S.<span className="text-blue-500">H</span>.A.K.<span className="text-yellow-500">T</span>.I
        </div>
        <div className="links flex items-center gap-1 mt-2">
          <Link to="/faqs">
            <div className="faqs cursor-pointer shadow-md text-lg text-white drop-shadow-[3px_3px_3px_black] text-center p-2 font-semibold w-[150px] yy">
              FAQ's
            </div>
          </Link>
          <Logout />
        </div>
      </div>


      {/* Options menu start */}
      <div className="options_menu absolute bg-[#0000005e shadow-md text-black backdrop-blur-md z-20 left-2 top-[30%] rounded-es-lg">
        <Link to="/allDrones">
          <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md">
            ALL <span className="text-white drop-shadow-lg">DRONES</span>
            <GoDotFill
              color="blue"
              className='before:contents-[""] before:absolute before:animate-ping'
            />
          </div>
        </Link>
        <Link to="/active">
          <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">
            ACTIVE
            <span className="text-white drop-shadow-lg mr-2">DRONES</span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        </Link>
        <Link to="/flyingDrones">
          <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">
            Flying <span className="text-white drop-shadow-lg mr-2">DRONES</span>
            <span>
              <GiDeliveryDrone className="text-blue-400" />
            </span>
          </div>
        </Link>
        <Link to="/RepairDrones">
          <div className="option p-2 px-7 text-lg border-b-[1px] text-center font-semibold border-black flex justify-center items-center gap-2 ease-linear hover:scale-105 transition-all duration-200 hover:border-none hover:shadow-md ">
            REPAIR <span className="text-white drop-shadow-lg mr-2">DRONES</span>
            <span>
              <PiDroneThin className="text-yellow-600" />
            </span>
          </div>
        </Link>
      </div>



      {/* Weather Forecast with Location */}
      <div className="weather-container p-5 bg-[rgba(0,0,0,0.2)] shadow-lg rounded-lg absolute left-2 bottom-2 z-20 w-[90%] max-w-[50%] flex flex-col gap-4">
        <div className="location-info flex flex-col items-center font-semibold text-2xl">
          {cityName ? <p> Location: {cityName}</p> : <p>Loading location...</p>}
        </div>

        {/* Hourly Forecast */}
        <div className="forecast flex flex-row overflow-x-auto font-medium gap-4 justify-evenly">
          {/* Current Weather */}
          {currentWeather && (
            <div className="current-weather flex flex-col items-center">
              <h2 className="text-lg font-semibold">Current Weather</h2>
              <img src={currentWeather.condition.icon} alt="Current Weather Icon" />
              <div className="temp">{currentWeather.temp_c} °C</div>
              <div className="condition">{currentWeather.condition.text}</div>
            </div>
          )}

          {filterForecastData().length > 0 ? (
            filterForecastData().map((hour, index) => ( // Display filtered hourly forecast
              <div key={index} className="hourly-weather flex flex-col items-center">
                <div className="time font-medium">{new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <img src={hour.condition.icon} alt="Weather Icon" />
                <div className="temp">{hour.temp_c} °C</div>
                <div className="condition">{hour.condition.text}</div>
              </div>
            ))
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="text-2xl">Loading weather data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
