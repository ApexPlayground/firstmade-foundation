import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full z-50  ">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Firstmade Foundation
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-black"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          <Link
            to="/"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/founder"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Founder
          </Link>

          <Link
            to="/advisor"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >

            Advisor 1
          </Link>

           <Link
            to="/advisor2"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >

            Advisor 2
          </Link>

           <Link
            to="/advisor3"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >

            Advisor 3
          </Link>

          <Link
            to="/our-people"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Our People
          </Link>
          <Link
            to="/register"
            className="bg-orange-600 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-500 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            to="/founder"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Founder
          </Link>
          <Link
            to="/advisor"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Advisor 1
          </Link>

          <Link
            to="/advisor2"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Advisor 2
          </Link>

          <Link
            to="/advisor3"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Advisor 3
          </Link>
          <Link
            to="/our-people"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Our People
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-orange-600 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-500 transition"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
