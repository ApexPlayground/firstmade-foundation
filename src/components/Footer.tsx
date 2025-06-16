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
          <Link to="/about" className="hover:text-orange-600 transition">
            About
          </Link>
          <Link to="/founder" className="hover:text-orange-600 transition">
            Founder
          </Link>
          <Link to="/advisor" className="hover:text-orange-600 transition">
            Advisor
          </Link>
          <Link to="/our-people" className="hover:text-orange-600 transition">
            Our People
          </Link>
          <Link to="/register" className="hover:text-orange-600 transition">
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
