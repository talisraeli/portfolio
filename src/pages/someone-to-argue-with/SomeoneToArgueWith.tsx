import { useEffect } from "preact/hooks";
import style from "./SomeoneToArgueWith.module.sass";
import Hero from "./sections/hero/Hero";

export default function SomeoneToArgueWith() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Someone to Argue With | ${prev}`;
    return () => (document.title = prev);
  }, []);

  return (
    <div className={style.SomeoneToArgueWith}>
      <Hero />
    </div>
  );
}
