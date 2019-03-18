import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../style/Navbar.css';

import Home from '../pages/Home';
import About from '../pages/About';
import MyCharacters from '../pages/MyCharacters';
import CharacterCollection from './CharacterCollection';

const Navbar = () => (
  <Router>
    <div>
      <nav className="Navbar">
        <ul>
          <Link className="navlink" to="/">
            Home
          </Link>

          <Link className="navlink" to="/about">
            About
          </Link>

          <Link className="navlink" to="/myCharacters">
            My Characters
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/myCharacters/" component={MyCharacters} />
        <Route path={`/clones/:characterId`} component={CharacterCollection} />
      </Switch>
    </div>
  </Router>
);


export default Navbar;