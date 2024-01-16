import React from "react";
import dentallogo from "../../assets/dentallogo.avif";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import DropdownMenu from "./DropdownMenu";
import AdminMenu from "./AdminMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-white flex justify-between items-center fixed w-full top-0 z-10">
      {/* Logo on the left */}
      <div>
        <a href="#" className="">
          <img src={dentallogo} alt="" height={90} width={90} />
        </a>
      </div>

      {/* Nav items centered */}
      <div className="flex-grow hidden lg:block mt-3">
        <nav>
          <ul className="flex space-x-4 text-xl text-blue-400 justify-center">
            <li>
              <Link
                to="/"
                className="hover:text-red-400 hover:border-b-2 border-blue-500"
              >
                Home
              </Link>
            </li>
            <li className="pl-5 pr-5">
              <DropdownMenu />
            </li>
            <li>
              <a
                href="/#pricing"
                className="hover:text-red-400 hover:border-b-2 border-blue-500"
              >
                Pricing
              </a>
            </li>
            <li>
              <a href="/#contact"
                
                className="hover:text-red-400 hover:border-b-2 border-blue-500"
              >
                Contact
              </a>
            </li>
            <li>
            <Link
                to="/profile"
                
              >
                { currentUser ? (
                  <h3 className="hover:text-red-400 hover:border-b-2 border-blue-500">Profile</h3>
                ): (
                  <h3 className="hover:text-red-400 hover:border-b-2 border-blue-500">Sign in</h3>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* "Call Now" on the right */}
      <div className="hidden lg:block mr-3 mt-4 mb-3">
        <a
          href="/#bookappointment"
          className="text-slate-200 border-2 bg-blue-600 px-4 py-3"
        >
          BOOKING NOW
        </a>
      </div>

      {/* Navbar for small screens */}
      <div className="mr-10 mt-3 flex justify-evenly gap-5">
        <div className="lg:hidden">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
