import Button from "../../../components/button/Button";
import Figure from "../../../components/figure/Figure";
import style from "./Hero.module.sass";

import avif from "./images/presentation.avif";
import webP from "./images/presentation.webp";
import png from "./images/presentation.png";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={`wrapper-l ${style.heroContent}`}>
        <h1>
          <span className="colored-hero">Someone to Argue With</span>
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
              alt="A presentation of Someone to Argue With project"
            />
          </picture>
        </Figure>
        <p>
          "Someone to Argue With" takes the idea of{" "}
          <a
            href="https://chatroulette.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Chatroulette"
          </a>
          , a chat between complete strangers, and gives it a unique twist.
          First choose the side you belong to and the system will randomly find
          you someone from the other side to argue with. In a completely
          anonymous conversation you can bridge the great gaps in the society or
          deepen the divide to your pleasure.
        </p>
        <div className={style.buttons}>
          <Button type="primary" href="#background" sameWindow>
            <>Read more</>
          </Button>
          <Button type="secondary" href="https://mishu.im">
            <>Visit website</>
          </Button>
        </div>
      </div>
    </section>
  );
}
