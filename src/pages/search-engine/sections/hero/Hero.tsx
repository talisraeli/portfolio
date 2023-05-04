import Button from "../../../../components/button/Button";
import Figure from "../../../../components/figure/Figure";
import style from "./Hero.module.sass";

import avif from "./images/presentation.avif";
import webP from "./images/presentation.webp";
import png from "./images/presentation.png";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={`wrapper-l ${style.heroContent}`}>
        <h1>
          <span className="colored-hero">Search Engine</span>
        </h1>
        <Figure>
          <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={png}
              type="image/png"
              decoding="async"
              loading="lazy"
              alt="A presentation of Search Engine project"
            />
          </picture>
        </Figure>
        <p>
          A text-based search engine of the web. I developed this project to
          <a
            href="https://davidson.weizmann.ac.il/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Davidson Institute of Science Education
          </a>
          , the educational arm of the{" "}
          <a
            href="https://www.weizmann.ac.il/pages/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weizmann Institute of Science
          </a>
          , as the final project to my external high-school diploma. I've done
          all the project myself, mentored by Ph.D. Industrial Engineering
          lecturer.
        </p>
        <div className={style.buttons}>
          <Button type="primary" href="#background" sameWindow>
            <>Read more</>
          </Button>
          <Button type="secondary" href="https://talsearchengine.azurewebsites.net/">
            <>Live demo</>
          </Button>
        </div>
      </div>
    </section>
  );
}
