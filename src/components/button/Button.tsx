import { JSX } from "preact/jsx-runtime";
import style from "./Button.module.sass";

interface ButtonProps {
  children?: JSX.Element;
  type: "hero" | "primary" | "secondary";
  jumping?: boolean;
  href?: string;
}

export default function Button(props: ButtonProps) {
  const btnType =
    props.type === "hero"
      ? style.hero
      : props.type === "primary"
      ? style.primary
      : style.secondary;

  const delayTime = Math.floor(Math.random() * 6000);

  const onClick = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    if (props.href) {
      e.preventDefault();
      window.open(props.href, "_blank");
    }
  };

  return (
    <button
      className={`${btnType}${props.jumping ? ` ${style.jumping}` : ""}`}
      onClick={onClick}
      style={{ animationDelay: props.jumping ? `${delayTime}ms` : undefined }}
    >
      <span>{props.children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path
          class={style.arrow}
          d="M282.174 943.826q-16.435-16.435-16.435-39.326 0-22.891 16.435-39.326L571.348 576 281.174 285.826Q265.5 270.152 265.38 247q-.119-23.152 16.555-39.826 16.435-16.435 39.326-16.435 22.891 0 39.326 16.435l336.239 337q6.718 6.717 9.696 14.793Q709.5 567.043 709.5 576t-2.978 17.033q-2.978 8.076-9.696 14.793l-337 337Q344.152 960.5 321.5 960.5t-39.326-16.674Z"
        />
      </svg>
    </button>
  );
}
