import './App.css'import { useState } from "react";
import Nav from './Components/Nav'om "react-router-dom";
import Footer from './Components/Footer'png";
import Home from './Pages/Home'
import About from './Pages/About') {
import Skills from './Pages/Skills'State(false);
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'/Projects'
import Certifications from './Pages/Certifications' fixed w-full top-0 shadow-md z-50">erience from './Pages/Experience'
import Contact from './Pages/Contact'y-between items-center">
import getinfo from './API/GetInfo'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import GetInfo from './API/GetInfo'
import ExpiAdd from './API/ExpiAdd''./API/GetInfo'
import ExpiUpdate from './API/ExpiUpdate'
import ProjectAdd from './API/ProjectAdd' './API/ExpiUpdate'
import ProjectUpdate from './API/ProjectUpdate'
import ProjectTable from './API/ProjectTable'utline-none"te'
import ExpiTable from './API/ExpiTabe'jectTable from './API/ProjectTable'

const basename = import.meta.env.BASE_URL || '/akanksha-portfolio/';          &#9776;
ed from a subpath
export default function AppWrapper() {
  return (Links */}pWrapper() {
    <Router basename={basename}>
      <App />-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ${e basename must be the repository name
    </Router> = '/akanksha-portfolio/';
  ); log
}

function App() { path: "", label: "Home" },
  const location = useLocation(); path: "about", label: "About Me" },
  const hideLayout = location.pathname === "/getinfo";        { path: "skills", label: "Skills" },
           { path: "projects", label: "Projects" },
  return (            { path: "experience", label: "Experience" },
    <>th: "certifications", label: "Certifications" },
      {!hideLayout && <Nav />}bel: "Contact" }ion();
      <Routes>
        <Route path='/' element={<Home />} />            <li key={item.path}>
        <Route path='/about' element={<About />} />    <Link
        <Route path='/skills' element={<Skills />} />          to={item.path}
        <Route path='/projects' element={<Projects />} />ck py-2 px-3 hover:text-gray-500"
        <Route path='/experience' element={<Experience />} />  onClick={() => {
        <Route path='/certifications' element={<Certifications />} />menu on small devices
        <Route path='/contact' element={<Contact />} />page loads from toph='/about' element={<About />} />
        <Route path='/getinfo' element={<GetInfo />} /> />
        <Route path='/exipadd' element={< ExpiAdd />} />
        <Route path='/exiupdate' element={< ExpiUpdate />} /> />} />
        <Route path='/exitable' element={< ExpiTable />} />} />
        <Route path='/projectadd' element={< ProjectAdd />} />} />
        <Route path='/projectupdate' element={< ProjectUpdate />} />
        <Route path='/projecttable' element={< ProjectTable />} />>
/>
      </Routes>/>} />
      {!hideLayout && <Footer />} />
    </>>
  );
}        <Route path='/projecttable' element={< ProjectTable />} />
