import style from "./AdBlockDoesntWork.module.sass";
import Figure from "../../../../components/figure/Figure";
import Button from "../../../../components/button/Button";

import avif from "./images/gameplay.avif";
import webP from "./images/gameplay.webp";
import jpg from "./images/gameplay.jpg";

export default function AdBlockDoesntWork() {
  return (
    <section id="adblock-doesnt-work" className={style.adblockDoesntWork}>
      <header>
        <p>Ludum Dare #40</p>
        <h2>AdBlock Doesn't Work</h2>
      </header>
      <div className={`wrapper-l ${style.content}`}>
        <div className="text-section">
          <p data-aos="fade-in">
            This was my first time participating in Ludum Dare game jam. The
            theme for{" "}
            <a
              href="https://ldjam.com/events/ludum-dare/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              the event
            </a>{" "}
            was "The more you have, the worse it is". I had an idea of a
            real-life case which your AdBlock addon on your internet browser
            doesn't work while you're trying to watch online videos on YouTube.
            I implemented this idea into the game, and made the player close the
            ads to earn score until the video ends.
          </p>
          <p data-aos="fade-in">
            I developed all the game alone, besides some help of{" "}
            <a
              href="https://ofek.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ofek Ben Shitrit
            </a>{" "}
            with ad designs. The game begins with an intro video describing what
            you need to do in the game, then the videos start playing and ads
            begin popping up for you to close them. I used{" "}
            <a
              href="https://unity.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unity
            </a>{" "}
            game engine, along with{" "}
            <a
              href="https://www.aseprite.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aseprite
            </a>{" "}
            and{" "}
            <a
              href="https://www.adobe.com/products/photoshop.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adobe Photoshop
            </a>{" "}
            for the graphics,{" "}
            <a
              href="https://www.adobe.com/products/premiere.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adobe Premiere Pro
            </a>{" "}
            for the intro video, and{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            for version control.
          </p>
        </div>
        <Figure caption="Ads pop up while you try to watch an online video">
          <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={jpg}
              type="image/jpg"
              decoding="async"
              loading="lazy"
              alt="Ads pop up while you try to watch an online video"
            />
          </picture>
        </Figure>
        <div className={style.buttons}>
          <Button
            type="primary"
            href="https://ldjam.com/events/ludum-dare/40/adblock-doesnt-work"
          >
            <>View game page on Ludum Dare</>
          </Button>
          <Button
            type="secondary"
            href="https://talisraeli.itch.io/adblock-doesnt-work"
          >
            <>Play game</>
          </Button>
        </div>
      </div>
    </section>
  );
}
