import style from "./SomeoneToArgueWith.module.sass";
import Hero from "./hero/Hero";

export default function SomeoneToArgueWith() {
  return (
    <>
      <Hero />
      <div className={style.sections}></div>
    </>
  );
}
