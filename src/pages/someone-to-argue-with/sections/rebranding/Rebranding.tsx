import Figure from "../../../../components/figure/Figure";
import style from "./Rebranding.module.sass";

import avif from "./images/homepage.avif";
import webP from "./images/homepage.webp";
import png from "./images/homepage.png";

export default function Rebranding() {
  return (
    <section id="rebranding" className={style.rebranding}>
      <div className={`wrapper-l ${style.content}`}>
        <h2>Rebranding</h2>
        <div className="text-section">
          <p data-aos="fade-in">
            At the beginning of 2023, the site was released in a new and
            expanded version as part of a collaboration between me and{" "}
            <a
              href="https://jonathanrashi.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jonathan Rashi
            </a>
            . The website was expanded to the various topics that can be argued
            and discussed, such as soccer and religion, and underwent a
            rebranding and redesign. Also, each user is given a wider range of
            choices in their self-definition. Today, the user can choose a
            nickname, gender, profile picture and identify himself according to
            a preferred topic group: political, sports or religious.
          </p>
          <p data-aos="fade-in">
            The current version is developed by me (CEO, Research & Development)
            and Jonathan Rashi (Partner, Research & Design).
          </p>
        </div>
        <Figure caption="The current home page of the website">
          <picture>
            <source srcSet={avif} media="(min-width: 1024px)" type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={png}
              type="image/png"
              decoding="async"
              loading="lazy"
              alt="The current home page of the website"
            />
          </picture>
        </Figure>
      </div>
    </section>
  );
}
