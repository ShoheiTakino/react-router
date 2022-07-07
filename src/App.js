import { BrowserRouter, Link, Switch, Router, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page2</Link>
        <br />
        <Link to="/page2">Page1</Link>
      </div>
      <Switch>
        <Route exact parh="/">
          <Home />
        </Route>
        <Route exact parh="/page1">
          <Page1 />
        </Route>
        <Route exact parh="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
