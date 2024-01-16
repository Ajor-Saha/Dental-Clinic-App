import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Importing the Menu icon
import { AiOutlineClose } from "react-icons/ai"; // Importing the Close icon
import "./Navbar.css";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const CloseNav = () => {
    setIsOpen(!isOpen);
  };

  const { currentUser } = useSelector((state)=> state.user);

  return (
    <>
      <div className="card" onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu size={25} />
      </div>
      <div className={isOpen ? "overlay" : "nonoverlay"}></div>
      <div className={isOpen ? "cartItem" : "cardhide"}>
        <div className="tittle flex justify-between">
          <button onClick={CloseNav}>
            <AiOutlineClose className="icon" size={30} />
          </button>
        </div>
        <nav className="mt-10">
          <ul className="flex flex-col space-x-4 justify-center items-center gap-10 text-xl">
            <li className="hover:bg-slate-100 px-10 py-3  text-blue-400 hover:border-2 hover:border-blue-800">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-slate-100 px-10 py-3 text-blue-400 hover:border-2">
              <DropdownMenu/>
            </li>
            <li className="hover:bg-slate-100 px-10 py-3 text-blue-400 hover:border-2 hover:border-blue-800">
              <a href="/#pricing">Pricing</a>
            </li>
            <li className="hover:bg-slate-100 px-10 py-3 text-blue-400 hover:border-2 hover:border-blue-800">
              <a href="/#contact">Contact</a>
            </li>
            <li className="hover:bg-slate-100 px-10 py-3 text-blue-400 hover:border-2 hover:border-blue-800">
            <Link
                to="/profile"
                
              >
                { currentUser ? (
                  <h3 className="">Profile</h3>
                ): (
                  <h3 className="">Sign in</h3>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Navbar;