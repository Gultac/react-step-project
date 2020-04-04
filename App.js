import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {SingleNote } from "./pages";


function App() {
  // I changed something
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={SingleNote} />
      </Switch>
    </Router>
  );
}

export default App;
