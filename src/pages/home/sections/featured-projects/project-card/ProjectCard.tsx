import { JSX } from "preact/jsx-runtime";
import Button from "../../../../../components/button/Button";
import style from "./ProjectCard.module.sass";

interface ProjectCardProps {
  title: string;
  description: string;
  seconderyButtonName: string;
  image: JSX.Element;
  primaryButtonLink: string;
  seconderyButtonLink: string;
  fadeLeft?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={style.projectCard} data-aos={props.fadeLeft ? "fade-left" : "fade-right"}>
      <div className={`wrapper-l ${style.grid}`}>
        <div className={style.image}>{props.image}</div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className={style.buttons}>
            <Button
              type="primary"
              href={props.primaryButtonLink}
              jumping
              sameWindow
            >
              <>Read more</>
            </Button>
            <Button type="secondary" href={props.seconderyButtonLink}>
              <>{props.seconderyButtonName}</>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
