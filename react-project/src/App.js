import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NoteContextProvider } from "./context/notes";
import { Homepage, Create, SingleNote } from "./pages";
import { Header } from "./commons";

function App() {
  

  return (
    <NoteContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/create" component={Create} />
          <Route path="/:id" component={SingleNote} />
        </Switch>
      </Router>
    </NoteContextProvider>
  );
}

export default App;