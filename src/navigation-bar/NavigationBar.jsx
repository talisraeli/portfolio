import style from "./NavigationBar.module.sass";
import { Fragment } from "preact";
import Router from "preact-router";
import Logo from "./logo/Logo";

export default function NavigationBar() {
  return (
    <div className={style.navigationBar}>
      <nav className="wrapper">
        <Router>
          <Fragment path="/">
            <Logo />
            <ul className={style.sectionLinks}>
              <li>
                <a href="#featured-projects">Featured Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Fragment>
          <Logo default />
        </Router>
      </nav>
    </div>
  );
}
