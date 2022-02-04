import React from "react";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
       <Nav />
       <AboutMe />
       <Projects />
       <Contact />
    </main>
  );
}

export default App;
