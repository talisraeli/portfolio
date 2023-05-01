import { JSX } from "preact/jsx-runtime";
import style from "./Button.module.sass";
import arrowIcon from "./arrow_forward.svg";

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
      <img className={`${style.arrow} filter`} src={arrowIcon} alt=">" />
    </button>
  );
}
