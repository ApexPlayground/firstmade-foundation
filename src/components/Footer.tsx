import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-lg font-bold text-orange-600 mb-4">
          Firstmade Foundation
        </h2>

        <div className="flex justify-center flex-wrap gap-6 text-sm text-[#222525] mb-6">
          <Link to="/" className="hover:text-orange-600 transition">
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
            Advisor
          </Link>
          <Link
            to="/our-people"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Our People
          </Link>
          <Link
            to="/register"
            className="text-black hover:text-orange-600 focus:text-orange-600 transition-colors duration-200"
          >
            Register
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Firstmade Foundation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
