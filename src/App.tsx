import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import People from "./pages/People";

function App() {
  return (
    //bg-gradient-to-b from-[#fffcc9] to-[#ffe8b2]
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-people" element={<People />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
