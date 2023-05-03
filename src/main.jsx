import { render } from "preact";
import GrainFilter from "./grain-filter/GrainFilter";

import NavigationBar from "./navigation-bar/NavigationBar";
import Home from "./pages/home/Home";
import Footer from "./footer/Footer";

import { Router } from "preact-router";
import "./style.sass";

const Main = () => (
  <>
    <GrainFilter />
    <NavigationBar />
    <main className="wrapper">
      <Router>
        <Home path="/" />
      </Router>
    </main>
    <Footer />
  </>
);

render(<Main />, document.getElementById("app"));
