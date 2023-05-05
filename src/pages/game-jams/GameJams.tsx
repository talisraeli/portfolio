import { useEffect } from "preact/hooks";
import style from "./GameJams.module.sass";
import Hero from "./sections/hero/Hero";
import WhoZForDinner from "./sections/who-z-for-dinner/WhoZForDinner";
import TowerDeckFurenzy from "./sections/tower-deck-furenzy/TowerDeckFurenzy";
import AdBlockDoesntWork from "./sections/adblock-doesnt-work/AdBlockDoesntWork";
import Button from "../../components/button/Button";

export default function GameJams() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Game Jams | ${prev}`;
    return () => (document.title = prev);
  }, []);

  return (
    <div className={style.sections}>
      <Hero />
      <WhoZForDinner />
      <TowerDeckFurenzy />
      <AdBlockDoesntWork />
      <section className={style.buttons}>
        <Button type="primary" href="/" sameWindow>
          <>Back to home page</>
        </Button>
        <Button type="secondary" href="https://talisraeli.itch.io">
          <>Play my games</>
        </Button>
      </section>
    </div>
  );
}
