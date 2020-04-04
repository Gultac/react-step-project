import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Homepage, Create, SingleNote } from "./pages";
import { Header } from "./commons";

function App() {
  return (

        <Router>
            <Header />
          <Switch>
            <Route exact path ="/" component = {Homepage} />
              <Route path ="/note/:id" component = {SingleNote} />

              <Route path ="/create" component = {Create} />

          </Switch>
        </Router>

  );
}

export default App;
