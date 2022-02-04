import React, { useState } from 'react';
// import About from './About'
// import Projects from './Projects';
// import Contact from './Contact';

export default function Nav() {
// const components = {
//   "About": <About />,
//   "Projects": <Projects />,
//   "Contact": <Contact />

// }

  return (
    <nav className="main-header-menu">
        <div>
          <h1><a href="#">About</a></h1>
        </div>
        <div>
          <h1><a href="#">Projects</a></h1>
        </div>
        <div>
          <h1><a href="#">Contact</a></h1>
        </div>
    </nav>
  );
}
