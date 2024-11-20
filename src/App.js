import React from "react"
import './App.css';
import Hero from "./components/Hero";
import Tech from "./components/technologies";
import About from "./components/About";
import Projects from "./components/Projects";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";


function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Header />}>
    //     <Route path="hero" element={<Hero />} />
    //     <Route path="projects" element={<Projects />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="technologies" element={<Tech />} />
    //   </Route>
    // </Routes>
    <main>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Tech></Tech>
    </main>

  );
}

export default App;
