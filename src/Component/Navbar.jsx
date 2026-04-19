import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../context/CartContext"; 

const Navbar = () => {
  const { cartCount, wishlistCount } = useCart(); 

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8 sticky top-0 z-50">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browesbooks">Browse Books</Link></li>
            <li><Link to="/Bestsellers">Bestsellers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary cursor-pointer">
          📚 Book Store
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browesbooks">Browse Books</Link></li>
          <li><Link to="/Bestsellers">Bestsellers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2 md:gap-4">
        
        {/* Wishlist Icon with Badge */}
        <button className="btn btn-ghost btn-circle relative">
          <div className="indicator">
            <CiHeart size={26} className="text-gray-700" />
            {wishlistCount > 0 && (
              <span className="badge badge-sm badge-primary indicator-item">
                {wishlistCount}
              </span>
            )}
          </div>
        </button>

        {/* Cart Icon with Badge */}
       <Link to="/cart">
       
        <button className="btn btn-ghost btn-circle relative">
          <div className="indicator">
            <ShoppingCart size={22} className="text-gray-700" />
            {cartCount > 0 && (
              <span className="badge badge-sm badge-secondary indicator-item">
                {cartCount}
              </span>
            )}
          </div>
        </button>
       </Link>
      
        <button className="btn btn-primary btn-sm md:btn-md rounded-lg px-6 font-bold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;