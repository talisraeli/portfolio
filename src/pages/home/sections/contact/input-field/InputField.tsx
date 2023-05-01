import { JSX } from "preact/jsx-runtime";
import style from "./InputField.module.sass"; 

interface InputFieldProps {
  type: "text" | "email" | "textarea";
  name: string;
  nameInCode: string;
  min?: number;
  onInputChange?: (e: JSX.TargetedEvent<HTMLInputElement>) => void;
  onTextareaChange?: (e: JSX.TargetedEvent<HTMLTextAreaElement>) => void;
}

export default function InputField(props: InputFieldProps) {

  const onInputChange = (e: JSX.TargetedEvent<HTMLInputElement>) => {
    props.onInputChange && props.onInputChange(e);
  };

  const onTextareaChange = (e: JSX.TargetedEvent<HTMLTextAreaElement>) => {
    props.onTextareaChange && props.onTextareaChange(e);
  };

  return (
    <div className={style.field}>
      <label htmlFor={props.nameInCode}>{props.name}</label>
      {props.type === "textarea" ? (
        <textarea
          name={props.nameInCode}
          id={props.nameInCode}
          rows={6}
          placeholder=" "
          required
          onChange={onTextareaChange}
          minLength={props.min}
        ></textarea>
      ) : (
        <input
          type={props.type}
          name={props.nameInCode}
          id={props.nameInCode}
          placeholder=" "
          required
          onChange={onInputChange}
          minLength={props.min}
        />
      )}
    </div>
  );
}
