import Button from "../../../../components/button/Button";
import style from "./Hero.module.sass";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={`wrapper-l ${style.heroContent}`}>
        <h1>
          <span className="colored-hero">Game Jams</span>
        </h1>
        <div className="text-section">
          <p>
            I developed multiple games through{" "}
            <a
              href="https://ldjam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Ludum Dare"
            </a>{" "}
            events. "Ludum Dare" is a game jam competition. In those events, the
            participants of the event have 72 hours to think of a game idea
            which matches the event theme, design the components of it, program
            it, and submit the game. After the submission, the participants rate
            the games of each other. You can participate alone or in a team.
          </p>
          <p>
            I used to participate in those events to have the challenge of using
            multiple skills at once in a little time. Skills I acquired are
            development in teamwork, creative thinking, and learned more
            knowledge about game development.
          </p>
        </div>
        <div className={style.buttons}>
          <Button type="primary" href="#who-z-for-dinner" sameWindow>
            <>Read more</>
          </Button>
          <Button type="secondary" href="https://talisraeli.itch.io">
            <>Play my games</>
          </Button>
        </div>
      </div>
    </section>
  );
}
