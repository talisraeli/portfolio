import { useEffect } from "preact/hooks";
import style from "./SomeoneToArgueWith.module.sass";
import Hero from "./sections/hero/Hero";
import Background from "./sections/background/Background";
import Rebranding from "./sections/rebranding/Rebranding";
import Development from "./sections/development/Development";

export default function SomeoneToArgueWith() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Someone to Argue With | ${prev}`;
    return () => (document.title = prev);
  }, []);

  return (
    <div className={style.sections}>
      <Hero />
      <Background />
      <Rebranding />
      <Development />
    </div>
  );
}
