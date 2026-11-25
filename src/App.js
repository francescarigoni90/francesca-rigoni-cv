import React from "react";
import { LanguageContextProvider } from "./context/LanguageContext";
import "./App.css";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Navbar />
        <main>
          <Summary />
        </main>
        <Footer />
      </LanguageContextProvider>
    </div>
  );
}

export default App;