import { useEffect } from "preact/hooks";
import style from "./SomeoneToArgueWith.module.sass";
import Hero from "./sections/hero/Hero";
import Background from "./sections/background/Background";
import Rebranding from "./sections/rebranding/Rebranding";
import Development from "./sections/development/Development";
import FeaturedArticles from "./sections/featured-articles/FeaturedArticles";
import Button from "../../components/button/Button";

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
      <FeaturedArticles />
      <section
        className={style.buttons}
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Button type="primary" href="/" sameWindow>
          <>Back to home page</>
        </Button>
        <Button type="secondary" href="https://mishu.im">
          <>Visit website</>
        </Button>
      </section>
    </div>
  );
}
