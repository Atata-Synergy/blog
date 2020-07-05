import React from "react";
import "./App.css";
import Blog from "./Blog";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BlogPreview from "./BlogPreview";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/blogpreview/:id" component={BlogPreview} />
        <Route path="*" ><p>Not Found</p></Route>

      </Switch>
    </Router>
  );
}

export default App;
