import { JSX } from "preact/jsx-runtime";
import style from "./SkillList.module.sass";

interface SkillListProps {
  title: string | JSX.Element;
  skills: string[];
}

export default function SkillList(props: SkillListProps) {
  return (
    <div className={style.list}>
      <h4>{props.title}</h4>
      <div className={style.line}></div>
      <ul>
        {props.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
