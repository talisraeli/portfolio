import { JSX } from "preact/jsx-runtime";
import style from "./InputField.module.sass";
import { useState } from "preact/hooks";

interface InputFieldProps {
  type: "text" | "email" | "textarea";
  name: string;
  nameInCode: string;
  min?: number;
  onInputChange?: (e: JSX.TargetedEvent<HTMLInputElement>) => void;
  onTextareaChange?: (e: JSX.TargetedEvent<HTMLTextAreaElement>) => void;
}

export default function InputField(props: InputFieldProps) {
  const [value, setValue] = useState("");

  const onInputChange = (e: JSX.TargetedEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    props.onInputChange && props.onInputChange(e);
  };

  const onTextareaChange = (e: JSX.TargetedEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
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
          value={value}
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
          value={value}
          onChange={onInputChange}
          minLength={props.min}
        />
      )}
    </div>
  );
}
