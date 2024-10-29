import React, { useState } from "react";
import roundImg from "../images/roundImg.svg";
import roundedImg2 from "../images/roundedImg2.svg";
import Logo from "../images/prym_logo.png";
import cImg from "../images/cImg.svg";
import c2Img from "../images/c2Img.svg";
import wMinImg from "../images/wMinImg.svg";
import wMin2Img from "../images/wMin2Img.svg";
import zigZakImg from "../images/zigZakImg.svg";
import zigZak2Img from "../images/zigZak2Img.svg";
import c2BarImg from "../images/c2BarImg.svg";
import wShape from "../images/wShape.svg";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { toast } from "react-toastify";

const Login1 = () => {
  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);
  const navigate = useNavigate();

  const verifyLogin = (e) => {
    e.preventDefault();

    if (
      username == import.meta.env.VITE_API_USER &&
      pass == import.meta.env.VITE_API_PASS
    ) {
      console.log("inside ")
      toast.success("Login Successfull");
      localStorage.setItem("auth", true);
      navigate("/");
    } else {
      console.log("inside Wrong")
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="loginWrapper bgDesign h-screen w-screen relative flex justify-center items-center overflow-hidden">
        <img
        src={Logo}
        alt=""
        className="cImg w-[100px] h-[100px] m-2 mix-blend-luminosity absolute top-0 left-0 z-20"
      />
        <p className="text-xl drop-shadow-lg font-semibold text-white text-center absolute top-10 left-32 z-20">S.H.A.K.T.I &nbsp; <sub> Safety High Accuracy Aerial Kinamatic Tracking Integration</sub></p>
      <img
        src={cImg}
        alt=""
        className="cImg w-[145] h-[145] absolute top-0 left-[30%] z-10"
      />
      <img
        src={roundImg}
        alt=""
        className="roundImg w-[475px] h-[442px] mix-blend-luminosity absolute -bottom-10 left-0  z-10"
      />
      <img
        src={wShape}
        alt=""
        className="roundImg w-[475px] h-[442px] mix-blend-luminosity absolute -bottom-28 -right-10 z-10"
      />
      {/* login wrapper   */}
      <div className="centerWrapper bgDesign1 w-[80%] h-[80%] rounded-xl relative flex justify-center items-center ">
        {/* Login div start  */}
        <div className="loginDiv loginInsetShadow p-2 w-[410px] h-[557px] bg-[rgba(88,130,193,0.28)]  rounded-3xl relative z-50 backdrop-blur-sm">
          <h1 className="title  text-xl font-bold text-white my-4 text-center">
            <span className="">PRYM</span> A
            <span className="text-blue-300 font-bold drop-shadow-lg  text-xl ">
              E
            </span>
            R
            <span className="text-blue-300 font-bold drop-shadow-lg  text-xl  ">
              O
            </span>
            SP
            <span className="text-blue-300 font-bold drop-shadow-lg  text-xl  ">
              A
            </span>
            C<span className="text-blue-300 font-bold drop-shadow-lg ">E</span>
          </h1>
        

          <form
            onSubmit={verifyLogin}
            action=""
            className="mt-10 w-[80%] mx-auto text-white"
          >
            <h1 className="text-xl font-medium ">Login</h1>

            <div className="email mt-8">
              <label className="text-sm font-normal" htmlFor="">
                Email
              </label>
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="username@gmail.com"
                required
                className="username border border-[#BCBEC0] text-sm pl-4 h-[100%] w-[100%] text-blue-500 p-[0.30rem]  mt-1 rounded-md bg-white outline-none placeholder:text-[11px] placeholder-[#BCBEC0]"
              />
            </div>
            <div className="pass mt-4">
              <label className="text-sm font-normal" htmlFor="mt-7">
                Password
              </label>
              <br />
              <input
                type="password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="password"
                required
                className="username border border-[#BCBEC0] text-sm pl-4 h-[100%] w-[100%] p-[0.30rem] mt-1 rounded-md text-blue-400 bg-white outline-none placeholder:text-[11px] placeholder-[#BCBEC0] "
              />
              <p className="forgot text-xs mt-2">Forgot Password ?</p>
            </div>

            <button className="p-2 w-[100%] mt-12 mx-auto text-md font-semibold text-white bg-[#003465] rounded-lg ">
              
              Log In
            </button>

            {/* other options start  */}
            <div className="other mt-6">
              <p className="title text-xs text-center text-white font-medium my-4">
                Or Continue With
              </p>

              {/* Other methods start  */}
              <div className="othrMethod flex justify-center items-center gap-4 mt-8">
                {/* google  */}
                <div className="google w-[60px] py-1.5 rounded-md bg-white flex justify-center items-center">
                  <FcGoogle fontSize={"1.3rem"} />
                </div>

                {/* gitHub  */}
                <div className="google w-[60px] py-1.5 rounded-md bg-white flex justify-center items-center">
                  <AiFillGithub color="black" fontSize={"1.3rem"} />
                </div>

                {/* Facebook  */}
                <div className="google w-[60px] py-1.5 rounded-md bg-white flex justify-center items-center">
                  <FaFacebook className="text-blue-500" fontSize={"1.3rem"} />
                </div>
              </div>
            </div>
            {/* other option end  */}
          </form>
        </div>
        {/* login Div end  */}

        {/* /all images start  */}
        <img
          src={zigZakImg}
          alt=""
          className="zigzak absolute z-30 mix-blend-luminosity left-[24.3%] top-[26%] "
        />
        <img
          src={zigZak2Img}
          alt=""
          className="zigzak2 absolute z-20 mix-blend-luminosity left-[23%] top-[42%]"
        />

        <img
          src={roundedImg2}
          alt=""
          className="RoundedInside absolute z-20 mix-blend-luminosity right-[19%] top-[8%]"
        />

        <img
          src={c2Img}
          alt=""
          className="C2Img absolute z-20 mix-blend-luminosity bottom-[5%] left-[25%]"
        />
        <img
          src={c2BarImg}
          alt=""
          className="C2barImg absolute z-20 mix-blend-luminosity bottom-[11%] left-[24%]"
        />

        <img
          src={wMinImg}
          alt=""
          className="C2barImg absolute z-20 mix-blend-luminosity bottom-[26%] right-[27%]"
        />
        <img
          src={wMin2Img}
          alt=""
          className="C2Img absolute z-20 mix-blend-luminosity bottom-[21%] right-[24%]"
        />

        {/* all images end  */}
      </div>
      {/* Login wrapper  */}
    </div>
  );
};

export default Login1;
