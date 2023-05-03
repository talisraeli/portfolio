import style from "./Footer.module.sass";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="wrapper">
        <p>Copyright © 2023, Tal Israeli. All rights reserved.</p>
        <p>
          The source code of this website is available on{" "}
          <a
            href="https://github.com/KeshetBehanan/KeshetBehanan.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
