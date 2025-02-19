import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Visitor from "./pages/Visitor";
import PunchIn from "./pages/PunchIn";
import Employee from "./pages/Employee"; 
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/punchin" element={<PunchIn />} />
                <Route path="/visitor" element={<Visitor />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/login" element={<Login/>}/>  
            </Routes>
        </Router>
    );
}

export default App;
