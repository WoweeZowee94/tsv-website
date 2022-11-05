import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CafeMenu from "./components/CafeMenu";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/events" />
          <Route path="/menu" element={<CafeMenu />}/>
          <Route path="/contact" /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
