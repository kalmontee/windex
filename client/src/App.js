import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavigationItems/NavigationItems";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={Search} />
        <Route exact path="/Saved" component={Saved} />
      </>
    </Router> 
  );
}

export default App;
