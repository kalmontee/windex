import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavigationItems/NavigationItems";
import Jumbotron from './components/UI/Jumbotron/Jumbotron';
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Jumbotron />
        <Route exact path="/" component={Search} />
        <Route exact path="/Saved" component={Saved} />
      </>
    </Router>
  );
}

export default App;
