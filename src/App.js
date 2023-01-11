import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/homepage/About";
import Navbar from "./components/nav/Navbar";
import BrunchMenu from "./components/events/BrunchMenu";
import CafeMenu from "./components/menu/CafeMenu";
import Events from "./components/events/Events";
import MobileMenu from "./components/nav/MobileMenu";
import Footer from "./components/homepage/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/menu" element={<CafeMenu />} />
          <Route path="/contact" />
          <Route path="/buffets" element={<BrunchMenu />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
