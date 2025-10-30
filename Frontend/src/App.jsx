import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Certifications from "./Pages/Certifications";
import Contact from "./Pages/Contact";

import GetInfo from "./API/GetInfo";
import ExpiAdd from "./API/ExpiAdd";
import ExpiUpdate from "./API/ExpiUpdate";
import ExpiTable from "./API/ExpiTabe";
import ProjectAdd from "./API/Projectadd";
import ProjectUpdate from "./API/ProjectUpdate";
import ProjectTable from "./API/ProjectTable";

const basename = import.meta.env.BASE_URL || "/akanksha-portfolio/";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/getinfo";

  return (
    <>
      {!hideLayout && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />

        {/* Admin / API pages */}
        <Route path="getinfo" element={<GetInfo />} />
        <Route path="exipadd" element={<ExpiAdd />} />
        <Route path="exiupdate" element={<ExpiUpdate />} />
        <Route path="exitable" element={<ExpiTable />} />
        <Route path="projectadd" element={<ProjectAdd />} />
        <Route path="projectupdate" element={<ProjectUpdate />} />
        <Route path="projecttable" element={<ProjectTable />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
