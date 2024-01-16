import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import doctor1 from "../assets/doctor1.jpg"
import doctor2 from "../assets/doctor2.jpg"
import doctor3 from "../assets/doctor3.jpg"

const DoctorSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-2xl font-semibold mb-2">Meet Our Doctors</h1>
        <div className="border-b-2 border-blue-500 w-2/6"></div>
      </div>
      <div className="flex flex-wrap lg:flex-row py-10 px-10 justify-center items-center lg:justify-between gap-5">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl h-80">
            <img
              src={doctor1}
              alt="profile-picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Natalie Paisley
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block text-xl antialiased font-normal leading-relaxed text-blue-600 hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="#twitter"
              className="block text-xl antialiased font-normal leading-relaxed text-light-blue-600 hover:text-light-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#instagram"
              className="block text-xl antialiased font-normal leading-relaxed text-purple-600 hover:text-purple-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl h-80">
            <img
              src={doctor2}
              alt="profile-picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              David Backham
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block text-xl antialiased font-normal leading-relaxed text-blue-600 hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="#twitter"
              className="block text-xl antialiased font-normal leading-relaxed text-light-blue-600 hover:text-light-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#instagram"
              className="block text-xl antialiased font-normal leading-relaxed text-purple-600 hover:text-purple-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl h-80">
            <img
              src={doctor3}
              alt="profile-picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Mikhail Nilov
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block text-xl antialiased font-normal leading-relaxed text-blue-600 hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="#twitter"
              className="block text-xl antialiased font-normal leading-relaxed text-light-blue-600 hover:text-light-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#instagram"
              className="block text-xl antialiased font-normal leading-relaxed text-purple-600 hover:text-purple-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
