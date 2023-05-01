import style from "./NavigationBar.module.sass";
import Logo from "./logo/Logo";

export default function NavigationBar() {
  return (
    <div className={style.navigationBar}>
      <nav className="wrapper">
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
      </nav>
    </div>
  );
}
