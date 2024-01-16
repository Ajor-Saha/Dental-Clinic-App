import React from "react";
import doctor from "../assets/doctor.png";
const CTA = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 px-10">
      <div className="bg-blue-500 text-white flex flex-col w-full md:w-1/4 p-5 h-52 md:h-96 justify-center items-center gap-3">
        <div className="border-2 rounded-lg">
          <img
            src={doctor}
            alt="doc"
            className="object-cover w-16 h-16"
          />
        </div>

        <div>
          <h2 className="text-center font-semibold text-xl">
            Qualitfied Doctors
          </h2>
        </div>
        <div>
          <span className="text-cente text-xl">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </span>
        </div>
      </div>
      <div className="bg-blue-600 text-white flex flex-col w-full md:w-1/4 p-5 h-52 md:h-96 justify-center items-center gap-2">
      <div className="border-2 rounded-lg">
          <img
            src={doctor}
            alt="doc"
            className="object-cover w-16 h-16"
          />
        </div>
        <div>
          <h2 className="text-center font-semibold text-xl">
          Emergency Care
          </h2>
        </div>
        <div>
          <span className="text-cente text-xl">
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          </span>
        </div>
      </div>
      <div className="bg-blue-500 text-white flex flex-col w-full md:w-1/4 p-5 h-52 md:h-96 justify-center items-center gap-2">
      <div className="border-2 rounded-lg">
          <img
            src={doctor}
            alt="doc"
            className="object-cover w-16 h-16"
          />
        </div>
        <div>
          <h2 className="text-center font-semibold text-xl">
          Outdoor Checkup
          </h2>
        </div>
        <div>
          <span className="text-cente text-xl">
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          </span>
        </div>
      </div>
      <div className="bg-blue-600 text-white flex flex-col w-full md:w-1/4 p-5 h-52 md:h-96 justify-center items-center gap-2">
      <div className="border-2 rounded-lg">
          <img
            src={doctor}
            alt="doc"
            className="object-cover w-16 h-16"
          />
        </div>
        <div>
          <h2 className="text-center font-semibold text-xl">
          24 Hours Service
          </h2>
        </div>
        <div>
          <span className="text-cente text-xl">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CTA;
