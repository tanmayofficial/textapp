
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not!
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleModedark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("blue theme enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light theme enabled", "success ");
    }
  };
  const toggleModeRed = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#B22222";
      showAlert("red theme enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light theme enabled", "success ");
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar title="Harry Potter Web" about="My Name" /> */}
        {/* <Navbar/> */}
        <Navbar
          title="Text App"
          mode={mode}
          toggleModedark={toggleModedark}
          toggleModeRed={toggleModeRed}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} title={<title>"Text App | Online Text Analyzer | About"</title>} />} />
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter your text below"
                mode={mode}
              />}  />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
