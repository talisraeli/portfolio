import style from "./NavigationBar.module.sass";
import { Fragment } from "preact";
import Router from "preact-router";
import Logo from "./logo/Logo";
import BackToHomePage from "./back-to-home-page/BackToHomePage";

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
          <Fragment path="/someone-to-argue-with">
            <BackToHomePage />
            <ul className={style.sectionLinks}>
              <li>
                <a href="#background">Background</a>
              </li>
              <li>
                <a href="#rebranding">Rebranding</a>
              </li>
              <li>
                <a href="#development">Development</a>
              </li>
              <li>
                <a href="#featured-articles">Featured Articles</a>
              </li>
            </ul>
          </Fragment>
          <Logo default />
        </Router>
      </nav>
    </div>
  );
}
