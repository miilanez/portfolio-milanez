import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <Main />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
