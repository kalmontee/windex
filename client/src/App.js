import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Search} />
        <Route exact path="/Saved" component={Saved} />
      </div>
    </Router> 
  );
}

export default App;
