import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-slate-50 text-blue-400 text-xl border-none rounded"
        onClick={toggleDropdown}
      >
        Admin
      </button>
      {isDropdownOpen && (
        <div className="absolute z-10 left-0 mt-2 bg-gray-100 border rounded shadow-lg">
          <Link to="/dashboard">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Dashboard
            </a>
          </Link>
          <Link to="/signIn">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Sign in
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

const AdminMenu = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default AdminMenu;
