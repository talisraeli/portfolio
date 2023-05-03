import ScrollText from "../../scroll-text/ScrollText";
import style from "./LetsWorkTogether.module.sass";
import avatarAvif from "./images/avatar.avif";
import avatarWebP from "./images/avatar.webp";
import avatarJpg from "./images/avatar.jpg";
import Button from "../../../../components/button/Button";

export default function LetsWorkTogether() {
  return (
    <section className={`wrapper-m ${style.letsWorkTogether}`}>
      <ScrollText />
      <div className={style.dashedLine}></div>
      <div className={style.cardContainer}>
        <div className={`wrapper-s ${style.card}`}>
          <picture>
            <source srcSet={avatarAvif} type="image/avif" />
            <source srcSet={avatarWebP} type="image/webP" />
            <img
              src={avatarJpg}
              type="image/jpeg"
              decoding="async"
              loading="lazy"
              alt="Tal Israeli's Picture"
            />
          </picture>
          <h3>Let's work together</h3>
          <p>
            I’m looking for a new adventure in a company which helps people make
            their life better and easier.
          </p>
          <Button type="primary" jumping href="#contact" sameWindow>
            <>Make it happen</>
          </Button>
        </div>
      </div>
    </section>
  );
}
