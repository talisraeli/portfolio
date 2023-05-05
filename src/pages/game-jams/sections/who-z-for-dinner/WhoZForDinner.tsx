import style from "./WhoZForDinner.module.sass";
import Figure from "../../../../components/figure/Figure";
import Button from "../../../../components/button/Button";

import avif from "./images/gameplay.avif";
import webP from "./images/gameplay.webp";
import jpg from "./images/gameplay.jpg";

export default function WhoZForDinner() {
  return (
    <section id="who-z-for-dinner" className={style.whoZForDinner}>
      <div className={`wrapper-l ${style.content}`}>
        <header>
          <p>Ludum Dare #42</p>
          <h2>Who Z For Dinner</h2>
        </header>
        <div className="text-section">
          <p data-aos="fade-in">
            The theme of{" "}
            <a
              href="https://ldjam.com/events/ludum-dare/42"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ludum Dare 42
            </a>{" "}
            was "Running out of space". I teamed up with two other game
            developers,{" "}
            <a
              href="https://www.artstation.com/ieida"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leida
            </a>{" "}
            and{" "}
            <a
              href="https://akusan.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akusan
            </a>
            , they both were responsible for the art of the game, and I was for
            the programming.
          </p>
          <p data-aos="fade-in">
            The idea for our game was a survival game against zombies on a
            limited platform made of tiles. Each time a zombie touches you, a
            tile falls. The one and only rule of the game is to stay alive on
            the platform, don't fall down! By staying more time on the platform
            and killing more zombies and bosses, you earn score which in the end
            added to the global leaderboard with your name so everyone can see
            your achievement!
          </p>
          <p data-aos="fade-in">
            I made this game using{" "}
            <a
              href="https://unity.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unity
            </a>{" "}
            game engine,{" "}
            <a
              href="https://www.blender.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blender
            </a>{" "}
            for the 3D models, and{" "}
            <a
              href="https://www.mysql.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MySQL
            </a>{" "}
            for the leaderboard.
          </p>
        </div>
        <Figure caption="The player shoots the zombies to defend itself and to don't fall down">
          <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={jpg}
              type="image/jpg"
              decoding="async"
              loading="lazy"
              alt="The player shoots the zombies to defend itself and to don't fall down"
            />
          </picture>
        </Figure>
        <div className={style.buttons}>
          <Button
            type="primary"
            href="https://ldjam.com/events/ludum-dare/42/whats-for-dinner"
          >
            <>View game page on Ludum Dare</>
          </Button>
          <Button
            type="secondary"
            href="https://talisraeli.itch.io/who-z-for-dinner"
          >
            <>Play game</>
          </Button>
        </div>
      </div>
    </section>
  );
}
