import Button from "../../../../components/button/Button";
import style from "./Hero.module.sass";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={`wrapper-l ${style.heroContent}`}>
        <h1>
          <span className="colored-hero">Need a</span>{" "}
          <span className="colored-hero">Next Level</span>
          <br />
          <span className="colored-hero">Full-stack</span>{" "}
          <span className="colored-hero">Developer?</span>
        </h1>
        <p>
          I build and design beautiful software and web applications your
          clients will love. I'm highly motivated with a strong passion to learn
          new modern technologies and eager to apply my skills to real-world
          challenges to drive your business success.
        </p>
        <Button type="hero" jumping href="#featured-projects" sameWindow>
          <>Explore my recent work</>
        </Button>
      </div>
    </section>
  );
}
