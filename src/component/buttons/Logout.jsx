import React from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  
  function logoutNow() {
    console.log("inside the loggout ")
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate("/login");
  }

  return (
    <div
      onClick={logoutNow}
      className="logout cursor-pointer relative backdrop-blur-md shadow-md text-lg text-center p-2 font-semibold w-[150px] text-white drop-shadow-[1px_1px_1px_black]  ease-linear duration-200  hover:bg-[#0000002c] hover:rounded-md"
    >
      Log<span className="text-[crimsn]">out</span>{" "}
    </div>
  );
};

export default Logout;
