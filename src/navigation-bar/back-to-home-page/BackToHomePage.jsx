import style from "./BackToHomePage.module.sass";
import { route } from "preact-router";

export default function BackToHomePage() {
  const onClick = () => {
    route("/");
  };

  return (
    <div className={style.link} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.13 40.03">
        <path
          className={style.arrow}
          d="m18.25,39.23L.7,21.68c-.23-.23-.41-.49-.53-.78-.12-.28-.18-.58-.18-.88s.06-.59.18-.88c.12-.28.29-.54.53-.78L18.25.83C18.78.29,19.45.02,20.25,0s1.48.24,2.05.78c.53.57.8,1.25.8,2.05s-.27,1.48-.8,2.05l-15.15,15.15,15.15,15.15c.57.6.84,1.28.83,2.05s-.29,1.42-.83,1.95c-.57.57-1.25.85-2.05.85s-1.47-.27-2-.8Z"
        />
      </svg>
      <a href="/">Back to Home Page</a>
    </div>
  );
}
