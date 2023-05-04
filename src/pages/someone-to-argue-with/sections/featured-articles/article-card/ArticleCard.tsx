import { JSX } from "preact/jsx-runtime";
import style from "./ArticleCard.module.sass";

interface ArticleCardProps {
  children?: JSX.Element;
  sourceImage: string;
  sourceName: string;
  sourceHref: string;
  imageSize?: string;
}

export default function ArticleCard(props: ArticleCardProps) {
  return (
    <div className={style.card}>
      <div className={`wrapper-m ${style.content}`}>
        <div className="text-section">{props.children}</div>
        <a href={props.sourceHref} target="_blank" rel="noopener noreferrer">
          <img src={props.sourceImage} alt={props.sourceName} style={{height: props.imageSize}} />
        </a>
      </div>
    </div>
  );
}
