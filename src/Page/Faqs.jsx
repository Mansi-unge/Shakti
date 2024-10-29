import React, { useState } from "react";
import { FcCallback } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import cImg from "../images/cImg.svg";
import wShape from "../images/wShape.svg";
import roundImg from "../images/roundImg.svg";
import Logo from "../images/prym_logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../component/Footer";
import temp from "../images/temp1.svg";
const Faqs = () => {
  // State to manage which dialog is open
  const [openDialogIndex, setOpenDialogIndex] = useState(null);

  // Toggle function for opening/closing dialog boxes
  const toggleDialog = (index) => {
    setOpenDialogIndex(openDialogIndex === index ? null : index);
  };

  // Dummy data for multiple dialog boxes
  const dialogData = [
    {
      id: 1,
      title: "What is the purpose of this software application?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 2,
      title: "Who can access this application?",
      content: "This is the content of dialog 2.",
    },
    {
      id: 3,
      title: "How do I log in to the application?",
      content: "This is the content of dialog 3.",
    },
    {
      id: 5,
      title: "What kind of data does this application track?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 6,
      title: "How is the data stored and protected?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 7,
      title: " What should I do if I notice incorrect or missing data?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
  ];

  const dialogData2 = [
    {
      id: 8,
      title: " Can I access the application outside the company network?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 9,
      title: " How do I update my profile or account information?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 10,
      title: " What happens if I forget my password?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 11,
      title: " How do I update my profile or account information?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 12,
      title: "Is there a way to view historical flight data?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
    {
      id: 13,
      title: " Who do I contact for technical support?",
      content:
        "The Drone Tracking Software Application is designed to track, monitor, and manage drones used within our organization. It provides real-time updates on drone status, flight logs, and various operational metrics. This application is exclusively available to company employees and authorized personnel.",
    },
  ];

  return (
    <div className="Faqs_Wrapper commonScroll  min-h-[100vh] overflow-x-hidden relative">
      <img
        src={roundImg}
        className="design absolute brightness-30 bottom-[20rem] left-[-9rem] mix-blend-luminosity opacity-50 w-[30rem]"
      />
      <img
        src={wShape}
        className="design absolute bottom-[8rem] -right-9  opacity-50 w-[30rem] blur-m"
      />
      <img
        src={cImg}
        className="design absolute top-[5rem] left-[18rem] opacity-50 w-[30rem]"
      />

      <div className="nav flex justify-between items-start">
        <div className="logoAndBack">
          <Link to="/">
            <img width={"150px"} src={Logo} alt="" />
          </Link>
          <Link to="/">
            <button className=" p-2 bg-[#86f5fd48] border-t border-b horder-r rounded-e-md  ">
              <IoIosArrowBack />
            </button>
          </Link>
        </div>

        <div className="contactInfo w-[300px] min-h-[200px] shadow-xl bg-[#ffffff48] backdrop-blur-md rounded-s-lg p-1.5 ">
          <h1 className="text-lg font-semibold m-3">Contact</h1>
          <div className="info space-y-4 p-2">
            <div className="con1 text-sm flex text-sky-400 justify-start items-center gap-3">
              <FcCallback fontSize={"1.3rem"} /> <p>+91 2355554667 </p>
            </div>
            <div className="con2 text-sm flex text-[#fc7975] justify-start items-center gap-3">
              <SiGmail color="#f7827e" fontSize={"1.3rem"} />{" "}
              <p>prymaerospace@31gmail.com</p>
            </div>
            <div className="con3 text-sm text-orange-300 flex justify-start items-center gap-3">
              <FaLocationDot fontSize={"1.3rem"} /> <p>Jalna, Maharashatra</p>
            </div>
          </div>
        </div>
      </div>

      {/* Faqs  start  */}
      <h1 className="text-3xl font-bold text-center mb-6 text-black mt-12">
        FAQ'S
      </h1>
      <div className="faq relative shadow-xl flex items-start justify-around flex-wrap lg:flex-nowrap min-h-[60vh] gap-2 mt-8 bg-[#ffffff48] backdrop-blur-sm  w-[96%] sm:w-[80%] mx-auto px-8 text-black py-4 rounded-lg">
        <img
          src={temp}
          alt=""
          className="temp1 absolute -right-[66px] z-[-1] hidden sm:block -top-56 size-[400px]"
        />
        <div className="container mx-auto p-4 flex flex-col gap-4">
          {dialogData.map((dialog, index) => (
            <div
              key={index}
              className={`rounded-lg transition-all duration-300 basis-2/5 `}
            >
              {/* Dialog Header */}
              <div
                className="flex justify-between items-center text-black p-4 cursor-pointer"
                onClick={() => toggleDialog(dialog.id)}
              >
                <h3
                  className={` font-semibold ${
                    openDialogIndex == dialog.id
                      ? "text-blue-400 font-semibold drop-shadow-md text-lg"
                      : " text-md "
                  }`}
                >
                  {dialog.title}
                </h3>
                <span className="text-xl">
                  {openDialogIndex === dialog.id ? "-" : "+"}
                </span>
              </div>

              {/* Dialog Content (visible only when open) */}
              {openDialogIndex === dialog.id && (
                <div className="p-4 bg-transparent animation text-black text-sm">
                  <p>{dialog.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="container mx-auto p-4 flex flex-col gap-4">
          {dialogData2.map((dialog, index) => (
            <div
              key={index}
              className={`rounded-lg transition-all duration-300 basis-2/5 `}
            >
              {/* Dialog Header */}
              <div
                className="flex justify-between items-center text-black p-4 cursor-pointer"
                onClick={() => toggleDialog(dialog.id)}
              >
                <h3
                  className={` font-semibold ${
                    openDialogIndex == dialog.id
                      ? "text-blue-400 font-semibold drop-shadow-md text-lg"
                      : " text-md "
                  }`}
                >
                  {dialog.title}
                </h3>
                <span className="text-xl">
                  {openDialogIndex === dialog.id ? "-" : "+"}
                </span>
              </div>

              {/* Dialog Content (visible only when open) */}
              {openDialogIndex === dialog.id && (
                <div className="p-4 bg-transparent text-black text-sm">
                  <p>{dialog.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* terms and cond end  */}
      <Footer />
    </div>
  );
};

export default Faqs;
