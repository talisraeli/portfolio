import style from "./Logo.module.sass";

export default function Logo() {
  return (
    <a href="/" alt="Tal Israeli Logo" className={style.logo}>
      <span className={style.tal}>TAL</span>
      <span className={style.israe}>ISRAE</span>
      <span className={style.dot}>.</span>
      <span className={style.li}>LI</span>
    </a>
  );
}
