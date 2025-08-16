import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import People from "./pages/People";
import Founder from "./pages/Founder.tsx";
import Advisor from "./pages/Advisor.tsx";
import Advisor1 from "./pages/Advisor1.tsx";
import Advisor2 from "./pages/Advisor2.tsx";
import Advisor3 from "./pages/Advisor3.tsx";

function App() {
  return (
    //bg-gradient-to-b from-[#fffcc9] to-[#ffe8b2]
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <div className="flex-grow py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
            <Route path="/advisor" element={<Advisor />} />
          <Route path="/advisor1" element={<Advisor1 />} />
          <Route path="/advisor2" element={<Advisor2/>} /> 
          <Route path="/advisor3" element={<Advisor3/>} />
          <Route path="/our-people" element={<People />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
