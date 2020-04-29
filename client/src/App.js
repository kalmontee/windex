import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navigation/NavigationItems/NavigationItems";
import SearchBooks from "./pages/Search";
import SavedBooks from "./pages/Saved";
import NotFound from "./pages/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
