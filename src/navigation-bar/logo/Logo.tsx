import { JSX } from "preact/jsx-runtime";
import style from "./Logo.module.sass";

export default function Logo() {
  const scrollToTop = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <a
      href="/"
      alt="Tal Israeli Logo"
      className={style.logo}
      onClick={scrollToTop}
    >
      <span className={style.tal}>TAL</span>
      <span className={style.israe}>ISRAE</span>
      <span className={style.dot}>.</span>
      <span className={style.li}>LI</span>
    </a>
  );
}
