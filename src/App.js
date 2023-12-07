import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";
import Projets from "./components/Projets/projets";
import CourseLumiere from "./components/CourseLumiere/course-lumiere";
import Cursor from "./components/Cursor/cursor";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Cursor />
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projets" element={<Projets />}></Route>

            <Route path="/course-lumiere" element={<CourseLumiere />}></Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
