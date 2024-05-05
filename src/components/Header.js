import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { CART } from "../utils/constants";


const Header = () => {
  const onlineStatus = useOnlineStatus();
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="bg-gray-200 text-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LOGO_URL} alt="Logo" className="h-20 w-25 mr-2" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li className="flex items-center px-4">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-600">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-600">Contact Us</Link>
            </li>
            <li className="hover:text-gray-600">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
            <li className="hover:text-gray-600">User:{loggedInUser}</li>
          </ul>

          
        </nav>
      </div>
    </div>
  );
};

export default Header;
