import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Views/Home'
import Architecture from './Views/Architecture'
import Contact from './Views/Contact'
import Furniture from './Views/Furniture'
import Projects from './Views/Projects'
import SpecificProject from './Views/SpecificProject'

import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Projects />} path="/projects"/>
          <Route element={<SpecificProject />} path="/projects/:projectId"/>
          <Route element={<Contact />} path="/contact"/>
          <Route element={<Architecture />} path="/architecture"/>
          <Route element={<Furniture />} path="/furniture"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
