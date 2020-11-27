import React from 'react';
import logo from './nic-logo.JPG';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Contact from './Contact.js';
import Projects from './Projects.js';
import About from './About.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />

        <div className="navigation">
          <img src={logo} className="logo" width="33%" alt="Logo" />
          <div className="navigation-sub">

            <Link to="/" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
