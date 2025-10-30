
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Certifications from './Pages/Certifications'
import Contact from './Pages/Contact'
import getinfo from './API/GetInfo'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import GetInfo from './API/GetInfo'
import ExpiAdd from './API/ExpiAdd'
import ExpiUpdate from './API/ExpiUpdate'
import ProjectAdd from './API/ProjectAdd'
import ProjectUpdate from './API/ProjectUpdate'
import ProjectTable from './API/ProjectTable'
import ExpiTable from './API/ExpiTabe'

// Wrapper to set the router basename so routes work when served from a subpath
// Vite exposes the base as import.meta.env.BASE_URL (set in vite.config.js)
function AppWrapper() {
  // Use Vite's BASE_URL when available; fall back to the project path so
  // routing still works even if env isn't populated in some environments.
  const basename = import.meta.env.BASE_URL || '/akanksha-portfolio/';
  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/getinfo";

  return (
    <>
      {!hideLayout && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/getinfo' element={<GetInfo />} />
        <Route path='/exipadd' element={< ExpiAdd />} />
        <Route path='/exiupdate' element={< ExpiUpdate />} />
        <Route path='/exitable' element={< ExpiTable />} />
        <Route path='/projectadd' element={< ProjectAdd />} />
        <Route path='/projectupdate' element={< ProjectUpdate/>} />
        <Route path='/projecttable' element={< ProjectTable/>} />

      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default AppWrapper;
