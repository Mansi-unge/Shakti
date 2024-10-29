import React from "react";
import Logo from "../images/prym_logo.png";
import roundImg from "../images/roundImg.svg";
import wShape from "../images/wShape.svg";
import cImg from "../images/cImg.svg";
import { FcCallback } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="TandC_wrapper commonScroll bgDesign min-h-[100vh] overflow-x-hidden relative">
      <img
        src={roundImg}
        className="design absolute mix-blend-luminosity  left-[-9rem] bottom-[36rem] w-[30rem]"
      />
      <img
        src={wShape}
        className="design absolute bottom-[2rem] -right-9 w-[30rem]"
      />
      <img
        src={cImg}
        className="design absolute top-[5rem] left-[18rem] w-[30rem]"
      />

      <div className="nav flex justify-between items-start">
        <div className="logoAndBack">
        <Link to="/">
            <img width={"150px"} src={Logo} alt="" />
          </Link>
          <Link to="/">
            
            <button className=" p-2 bg-white border-t border-b horder-r rounded-e-md  ">
              <IoIosArrowBack />
            </button>
          </Link>
        </div>

        <div className="contactInfo w-[300px] min-h-[200px] border bg-white ">
          <h1 className="text-lg font-semibold m-3">Contact</h1>
          <div className="info space-y-4 p-2">
            <div className="con1 flex justify-start items-center gap-3">
              
              <FcCallback fontSize={"1.3rem"} /> <p>+91 2355554667 </p>
            </div>
            <div className="con2 flex justify-start items-center gap-3">
              
              <MdEmail fontSize={"1.3rem"} /> <p>prymaerospace@31gmail.com</p>
            </div>
            <div className="con3 flex justify-start items-center gap-3">
              
              <FaLocationDot fontSize={"1.3rem"} /> <p>Jalna, Maharashatra</p>
            </div>
          </div>
        </div>
      </div>

      {/* terms and cond start  */}
      <div className="termAndCond mt-8 w-[96%] sm:w-[80%] mx-auto px-8 text-white border-t border-b border-white py-4 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-center mb-6">
          T<span className="text-blue-300 drop-shadow-md">e</span>r<span className="text-blue-300 drop-shadow-md">m</span>s a<span className="text-blue-300 drop-shadow-md">n</span>d C<span className="text-blue-300 drop-shadow-md">o</span>n
          <span className="text-blue-300 drop-shadow-md">d</span>it
          <span className="text-blue-300 drop-shadow-md">i</span>on
          <span className="text-blue-300 drop-shadow-md">s</span>
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="mt-2">
            Welcome to S.H.A.K.T.I. Drone Tracking Software Application. By
            accessing or using this application, you agree to comply with and be
            bound by the following terms and conditions. These terms govern your
            use of our services, including tracking, monitoring, and management
            of drones, as well as the user login functionalities. This
            application is restricted to company employees and authorized
            personnel only. Unauthorized access is strictly prohibited and may
            result in legal action. Please read these terms carefully before
            using our application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">2. Definitions</h2>
          <p className="mt-2">
            “Company” refers to [Company Name], the provider of the Drone
            Tracking Software Application. “User” refers to any authorized
            employee or person accessing or using the application. “Application”
            refers to the Private Drone Tracking Software Application provided
            by [Company Name]. “Drone” refers to any unmanned aerial vehicle
            (UAV) tracked or monitored using our application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">3. User Obligations</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Compliance:</strong> Users must comply with all applicable
              laws and regulations governing the operation and tracking of
              drones.
            </li>
            <li>
              <strong>Account Responsibility:</strong> Users are responsible for
              maintaining the confidentiality of their account credentials.
            </li>
            <li>
              <strong>Accurate Information:</strong> Users must provide accurate
              and complete information when registering for the application.
            </li>
            <li>
              <strong>Usage Restrictions:</strong> Users must not use the
              application for any unlawful purpose, share access credentials, or
              disrupt the application's functionality.
            </li>
          </ul>
        </section>

        {/* More sections follow the same structure */}

        <section className="mb-6">
          <h2 className="text-xl font-semibold">
            4. Application Access and Availability
          </h2>
          <p className="mt-2">
            Access to the application is restricted to company employees and
            authorized persons only. The Company grants these Users a limited,
            non-exclusive, non-transferable right to access and use the
            application for lawful purposes in accordance with these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">5. Drone Data and Privacy</h2>
          <p className="mt-2">
            The application collects and processes data related to drone
            operations, including real-time status, location, and performance
            metrics. By using the application, Users consent to this data
            collection.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">7. Security</h2>
          <div className="mt-2">
            <h3 className="text-xl font-semibold">7.1 Application Security</h3>
            <p className="mt-1">
              The Company implements security measures to protect the
              application and Users' data. However, Users acknowledge that no
              system is completely secure, and the Company cannot guarantee the
              absolute security of the application.
            </p>
            <h3 className="text-xl font-semibold mt-4">
              7.2 User Responsibility
            </h3>
            <p className="mt-1">
              Users are responsible for maintaining the security of their
              account and should use strong passwords, regularly update their
              login credentials, and monitor their account for any suspicious
              activity.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">8. Limitations of Liability</h2>
          <div className="mt-2">
            <h3 className="text-xl font-semibold">8.1 No Warranty</h3>
            <p className="mt-1">
              The application is provided “as is” and “as available,” without
              warranties of any kind, either express or implied. The Company
              does not warrant that the application will be error-free,
              uninterrupted, or free of harmful components.
            </p>
            <h3 className="text-xl font-semibold mt-4">
              8.2 Limitation of Liability
            </h3>
            <p className="mt-1">
              The Company shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              related to the use of the application. In no event shall the
              Company’s total liability exceed the amount paid by the User, if
              any, for accessing the application.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">9. Termination</h2>
          <div className="mt-2">
            <h3 className="text-xl font-semibold">9.1 Termination by User</h3>
            <p className="mt-1">
              Users may terminate their account at any time by notifying the
              Company in writing.
            </p>
            <h3 className="text-xl font-semibold mt-4">
              9.2 Termination by Company
            </h3>
            <p className="mt-1">
              The Company may suspend or terminate a User’s access to the
              application at its discretion, particularly in cases of breach of
              these terms.
            </p>
            <h3 className="text-xl font-semibold mt-4">
              9.3 Effect of Termination
            </h3>
            <p className="mt-1">
              Upon termination, the User’s right to access the application will
              immediately cease, and all data associated with the User may be
              deleted.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">10. Governing Law</h2>
          <p className="mt-2">
            These terms and conditions are governed by and construed in
            accordance with the laws of [Jurisdiction]. Any disputes arising out
            of or in connection with these terms shall be subject to the
            exclusive jurisdiction of the courts of [Jurisdiction].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">11. Changes to Terms</h2>
          <p className="mt-2">
            The Company reserves the right to update or modify these terms at
            any time. Users will be notified of any significant changes, and
            continued use of the application after changes have been made will
            constitute acceptance of the new terms.
          </p>
        </section>

        <footer className="mt-12">
          <p className="text-center text-sm text-yellow-400">
            These terms and conditions are governed by and construed in
            accordance with the laws of [Jurisdiction].
          </p>
        </footer>
      </div>
      {/* terms and cond end  */}
    </div>
  );
};

export default TermsAndConditions;
