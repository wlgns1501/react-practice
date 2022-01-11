import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Dog from "./pages/Dog";
import Cat from "./pages/Cat";
import Horse from "./pages/Horse";
import Home from "./pages/Home";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <h2>Home</h2>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dog">Dog</Link>
          </li>
          <li>
            <Link to="/cat">Cat</Link>
          </li>
          <li>
            <Link to="/horse">Horse</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dog">
          <Dog />
        </Route>
        <Route path="/cat">
          <Cat />
        </Route>
        <Route path="/horse">
          <Horse />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
