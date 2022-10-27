import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="navbar" element={<Navbar/>}></Route>
          <Route path="register" element={<Registration/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
