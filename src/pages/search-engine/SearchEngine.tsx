import { useEffect } from "preact/hooks";
import style from "./SearchEngine.module.sass";
import Hero from "./sections/hero/Hero";
import Background from "./sections/background/Background";
import ProjectDesign from "./sections/project-design/ProjectDesign";
import Development from "./sections/development/Development";
import Button from "../../components/button/Button";

export default function SearchEngine() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Search Engine | ${prev}`;
    return () => (document.title = prev);
  }, []);

  return (
    <div className={style.sections}>
      <Hero />
      <Background />
      <ProjectDesign />
      <Development />
      <section className={style.buttons} data-aos="zoom-in">
        <Button type="primary" href="/" sameWindow>
          <>Back to home page</>
        </Button>
      </section>
    </div>
  );
}
