import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Corrected here

// Pages
import Home from "./pages/home";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";
import MissionVision from "./pages/MissionVision";
import Impact from "./pages/Impact";
import Testimonials from "./pages/Testimonials";
import Donate from "./pages/Donate";
import NewsEvents from "./pages/NewsEvents";
import OurTeam from "./pages/OurTeam";
import Gallery from "./pages/Gallery";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<MissionVision />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events" element={<NewsEvents />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer /> {/* ✅ Correctly placed footer */}
      </div>
    </Router>
  );
}

export default App;