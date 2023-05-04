import { JSX } from "preact/jsx-runtime";
import style from "./Figure.module.sass";

interface FigureProps {
  caption?: string;
  children?: JSX.Element;
  noRoundedCorners?: boolean;
}

export default function Figure(props: FigureProps) {
  return (
    <div className="wrapper-m">
      <figure
        className={`${style.figure}${
          props.noRoundedCorners ? style.noRoundedCorners : ""
        }`}
      >
        {props.children}
        {props.caption && <figcaption>{props.caption}</figcaption>}
      </figure>
    </div>
  );
}
