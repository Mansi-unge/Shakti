import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Modal = ({ setCloseDlt, closeDlt }) => {
  return (
    <div className="h-screen  w-full bg-[#0000003a] backdrop-blur-lg flex justify-center items-center absolute z-[60]">
      <div
        className={`delmodal animation max-w-[400px] bg-white p-3 border rounded-md shadow-lg relative  `}
      >
        <div
          className="close absolute z-[61] right-0 top-0 text-gray-400 "
          onClick={() => {
            setCloseDlt(false);
          }}
        >
          
          <IoClose fontSize={"1.7rem"} />
        </div>
        <h1 className="text-lg font-semibold">
          Confirm to Delete Drone Profile ?
        </h1>
        <div className="warnning my-4">
          <span className=" text-yellow-500 drop-shadow-md font-semibold">
            Warning:
          </span>
          <p className="text-xs">
            Deleting this drone profile is irreversible. All associated data,
            including usage details, purchase history, and specifications, will
            be permanently removed from the database. Ensure that you have
            backed up any necessary information before proceeding. Once deleted,
            this action cannot be undone.
          </p>
        </div>
        <button className=" p-1.5 rounded-md bg-red-200 border border-red-200 text-white shadow-md float-end mx-4">
          
          <RiDeleteBin6Line className="text-red-400" fontSize={"1.2rem"} />
        </button>
      </div>
    </div>
  );
};

export default Modal;

