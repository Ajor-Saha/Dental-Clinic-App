import React from "react";
import booking from "../assets/booking.png";

const Card = ({appointment}) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
      <div className="p-6">
        <div className="flex justify-center items-center">
        <img src={booking} alt="logo" className="w-20 rounded-full" />
        </div>
         <div className="text-sm py-1">
            <p>Doctor Name : {appointment.doctorName}</p>
            <p>Address : {appointment.address}</p>
            <p>Time : {appointment.scheldule}</p>
            <p>Diagonse With : {appointment.diagonseWith} </p>
         </div>
      </div>
      <div className="p-6 pt-0">
        <a href="#" className="inline-block">
          <button
            className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Delete
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
