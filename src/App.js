import React from "react"
import './App.css';
import Hero from "./components/Hero";
import Tech from "./components/technologies";
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  return (
    <main>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Tech></Tech>
    </main>

  );
}

export default App;
