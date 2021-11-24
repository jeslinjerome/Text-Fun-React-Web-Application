import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //weather dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "success");
      // document.title = "Dark Mode";
      // setInterval(() => {
      //   document.title = 'Jeslin'
      // }, 2000)       for flash binking
      // setInterval(() => {
      //   document.title = 'Powerfull'
      // }, 1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter for Test Analyse"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
