import style from "./TowerDeckFurenzy.module.sass";
import Figure from "../../../../components/figure/Figure";
import Button from "../../../../components/button/Button";

import avif from "./images/gameplay.avif";
import webP from "./images/gameplay.webp";
import jpg from "./images/gameplay.jpg";

export default function TowerDeckFurenzy() {
  return (
    <section id="tower-deck-furenzy" className={style.towerDeckFurenzy}>
      <header>
        <p>Ludum Dare #41</p>
        <h2>Tower Deck Furenzy</h2>
      </header>
      <div className={`wrapper-l ${style.content}`}>
        <div className="text-section">
          <p data-aos="fade-in">
            Tower Deck Furenzy is a game which has been developed by three
            programmers (
            <a
              href="https://github.com/Seanharrs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seanharrs
            </a>
            ,{" "}
            <a
              href="https://github.com/sagarpatel2570"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sagar Patel
            </a>{" "}
            and me), two artists (
            <a
              href="https://akusan.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akusan
            </a>{" "}
            and{" "}
            <a
              href="https://ldjam.com/users/zzapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              zZAPp
            </a>
            ) and one audio engineer (
            <a
              href="https://github.com/LeRoiDeTrefle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trefle
            </a>
            ), made for{" "}
            <a
              href="https://ldjam.com/events/ludum-dare/41"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ludum Dare 41
            </a>
            . It was my first time working with more people on a game. The theme
            of this game jam was "Combine 2 Incompatible Genres". We combined
            the two unique themes into one game: tower defense and a card game.
          </p>
          <p data-aos="fade-in">
            In this game you need to use your cards from your hand which are
            given to you at the beginning of each wave, to place towers (in the
            form of animals), upgrade them, and defeat the angry animals trying
            to hurt you (like a tiger).
          </p>
          <p data-aos="fade-in">
            I enjoyed making this game and learned a lot about cooperative
            development with multiple programmers and designers. The whole
            creation of this game we were communicating through Discord, and
            working together with a{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            repository in different branches. Also, I learned about new{" "}
            <a
              href="https://unity.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unity
            </a>{" "}
            features and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Game_design"
              target="_blank"
              rel="noopener noreferrer"
            >
              game design
            </a>{" "}
            knowledge I didn't know before.
          </p>
        </div>
        <Figure caption="The player uses the cards in its hand in order to defeat the angry animals">
          <picture>
            <source srcSet={avif} media="(min-width: 1024px)" type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={jpg}
              type="image/jpg"
              decoding="async"
              loading="lazy"
              alt="The player uses the cards in its hand in order to defeat the angry animals"
            />
          </picture>
        </Figure>
        <div className={style.buttons}>
          <Button
            type="primary"
            href="https://ldjam.com/events/ludum-dare/41/tower-deck-furenzy"
          >
            <>View game page on Ludum Dare</>
          </Button>
          <Button
            type="secondary"
            href="https://talisraeli.itch.io/tower-deck-furenzy"
          >
            <>Play game</>
          </Button>
        </div>
      </div>
    </section>
  );
}
