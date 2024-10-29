import React, { useState } from "react";
import Logo from "../images/prym_logo.png";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);
  const navigate = useNavigate();
  const verifyLogin = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_API_USER, " <--> ", import.meta.env.VITE_API_PASS ," name " , name)
    if (
      username == import.meta.env.VITE_API_USER &&
      pass == import.meta.env.VITE_API_PASS
    ) {
      toast.success("Login Successfull");
      localStorage.setItem("auth", true);
      navigate("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="loginDiv h-[100vh] mx-auto bg-blue-600">
      <div className="logo text-blue-600 text-2xl">
        <img src={Logo} alt="" className="w-[150px] " />
      </div>
      <div className="heading">
        <h1 className="text-4xl text-center text-blue-600 font-bold my-2">
          S.H.A.K.T.I
        </h1>
        <div className="des text-center text-2xl text-blue-500">
          (SAFETY HIGH-ACCURACY AQERIAL KINEMATIC TR5AKING INTEGRATION)
        </div>
      </div>

      <form
        onSubmit={verifyLogin}
        action="#"
        className="w-fit mx-auto mt-24 flex justify-center items-center flex-col "
      >
        <div className="username flex justify-start items-center w-fit border-[1px] border-black rounded-md">
          <div className="logo border-r border-black p-0.5">
            <FiUser fontSize={"2rem"} />
          </div>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
            className="username border h-[100%] text-blue-500 p-1.5 bg-white outline-none"
          />
        </div>
        <div className="username flex justify-start items-center w-fit border-[1px] border-black my-7 rounded-md">
          <div className="logo border-r border-black p-0.5 ">
            <RiLockPasswordFill fontSize={"2rem"} />
          </div>
          <input
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            required
            className="username border h-[100%] p-1.5 bg-white outline-none "
          />
        </div>

        <button className="p-1.5 px-2 mt-2 w-[100%] shadow-md rounded-md text-white bg-blue-400 hover:opacity-90 transition-all duration-150">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
