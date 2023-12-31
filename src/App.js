import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/about/AboutMe";
import Particle from "./animations/particles/Particle";
import Skills from "./components/skills/Skills";
import Cursor from "./animations/cursor/Cursor";

// Component using location directly within a Route
const ParticleBackground = () => {
  const location = useLocation();
  return location.pathname === "/" || location.pathname === "/about-me" ? (
    <Particle />
  ) : null;
};

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Cursor />
          <Navbar />
          <ParticleBackground />
          <div className="main_page">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about-me">
                <AboutMe />
              </Route>
              <Route exact path="/skills">
                <Skills />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
