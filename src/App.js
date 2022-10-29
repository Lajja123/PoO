import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import CurrentCertificate from "./components/CurrentCertificate";
import OwnershipCertificate from "./components/OwnershipCertificate";
import SingleCertificate from "./components/SingleCertificate";
import CreationPage from "./components/CreationPage";
import PreviousCertificate from "./components/PreviousCertificate";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="navbar" element={<Navbar/>}></Route>
          <Route path="register" element={<Registration/>}></Route>
          <Route path="currentcertificate" element={<CurrentCertificate/>}></Route>
          <Route path="ownershipcertificate" element={<OwnershipCertificate/>}></Route>
          <Route path="previouscertificate" element={<PreviousCertificate/>}></Route>
          <Route path="singlecertificate" element={<SingleCertificate/>}></Route>
          <Route path="creationpage" element={<CreationPage/>}></Route>
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
