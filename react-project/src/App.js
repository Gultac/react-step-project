import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Homepage } from "./pages";
import { Header } from "./commons";

function App() {
  return (

        <Router>
            <Header />
          <Switch>
            <Route exact path ="/" component = {Homepage} />
          </Switch>
        </Router>

  );
}

export default App;
