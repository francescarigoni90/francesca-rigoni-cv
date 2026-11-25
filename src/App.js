import React from "react";
import { LanguageContextProvider } from "./context/LanguageContext";
import "./App.css";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import LanguagesInterests from "./components/LanguagesInterests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Navbar />
        <main>
          <Summary />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <LanguagesInterests />
        </main>
        <Footer />
      </LanguageContextProvider>
    </div>
  );
}

export default App;