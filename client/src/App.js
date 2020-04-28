import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navigation/NavigationItems/NavigationItems";
import Jumbotron from './components/UI/Jumbotron/Jumbotron';
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </Router>
    );
  }
}

export default App;
