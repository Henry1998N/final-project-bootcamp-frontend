import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/ResidentsPage/Residents";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Apartments />} />
        <Route path="/residents/:apartmentName" element={<Residents />} />
        <Route path="/resident/:residentId" element={<ResidentInfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
