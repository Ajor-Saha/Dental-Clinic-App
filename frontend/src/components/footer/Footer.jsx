import React from "react";
import logo from "../../assets/SCANNING.webp";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-200 h-auto xl:py-14 py-10 px-3 flex flex-wrap gap-3 justify-evenly" id="contact">
      <div className="text-slate-800 flex flex-col w-80 gap-5">
        <div className="flex flex-row text-blue-400 gap-2">
          <img src={logo} alt="logo" />
          <h1 className="mt-3 text-xl">DENTY</h1>
        </div>
        <div>
          <span>
            Even the tailor's smile, the protein act elefend katen, the lacinia
            sitamet denim. Mauris sagittis kansa sometimes dignissim.
          </span>
        </div>
        <div className="flex items-center">
          <CiLocationOn />
          <address>28 Jackson Street,7788569 USA</address>
        </div>
        <div className="flex items-center gap-1">
          <FaPhoneAlt />
          <p>+84. 2252. 2250. 122</p>
        </div>
        <div className="flex items-center gap-1">
          <MdMarkEmailRead />
          <p>denty@gmail.com</p>
        </div>
      </div>
      <div className="text-slate-800 flex flex-col w-80 gap-5 px-2">
        <h1 className="text-xl">Opening Hours</h1>
        <div>
          <p className="mb-2">Mon-Wed — 8.00-18.00</p>
          <p className="mb-2">Thu-Fri - 8.00-17.00</p>
          <p className="mb-2">Sat - 9.00-17.00</p>
          <p className="mb-2">Sun - 10.00-17.00</p>
          <p>Holiday — Closed</p>
        </div>
      </div>
      <div className="text-slate-800 flex flex-col w-80 gap-5 px-2">
        <h1 className="text-xl">Quick Link</h1>
        <div className="flex flex-col">
          <Link className="mb-2 hover:text-blue-400" to="/">
            Home
          </Link>
          <Link className="mb-2 hover:text-blue-400" to="/">
            About
          </Link>
          <Link className="mb-2 hover:text-blue-400" to="/">
            Services
          </Link>
          <Link className="mb-2 hover:text-blue-400" to="/">
            Pricing
          </Link>
          <Link className="mb-2 hover:text-blue-400" to="/">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-slate-800 flex flex-col w-80 gap-5 px-2">
        <h1 className="text-xl">Newsletter</h1>
        <span>
          We will send out weekly newest article and some great offers
        </span>
        <form>
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <div className="relative flex flex-row justify-between">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiOutlineMail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3"
              placeholder="name@gmail.com"
            />
            <button className="bg-blue-400 px-3 rounded-lg">Send</button>
          </div>
          
        </form>
        <div className="flex space-x-4">
          <a href="#youtube" className="text-red-500 hover:text-red-700">
            <FaYoutube size={30} />
          </a>
          <a href="#facebook" className="text-blue-500 hover:text-blue-700">
            <FaFacebook size={30} />
          </a>
          <a href="#twitter" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={30} />
          </a>
          <a href="#linkedin" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin size={30} />
          </a>
          <a href="#instagram" className="text-pink-500 hover:text-pink-700">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="mt-8 lg:mt-14">
        <span className="block border-t-2 border-blue-400 w-full mb-2"></span>
        <span className="text-gray-500">
          Copyright © 2023 All rights reserved | This app is made with ❤️ by
          Ajor
        </span>
      </div>
    </div>
  );
};

export default Footer;
