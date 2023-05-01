import { render } from "preact";
import NavigationBar from "./navigation-bar/NavigationBar";
import Home from "./pages/home/Home";
import { Router } from "preact-router";
import "./style.sass";

const Main = () => (
  <>
    <NavigationBar />
    <div className="wrapper">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  </>
);

render(<Main />, document.getElementById("app"));
