import style from "./AboutMe.module.sass";

import locationIcon from "./images/location.svg";
import languageIcon from "./images/language.svg";
import carIcon from "./images/car.svg";
import Button from "../../../../components/button/Button";

import meAvif from "./images/me/me.avif";
import meWebP from "./images/me/me.webp";
import meJpg from "./images/me/me.jpg";

export default function AboutMe() {
  return (
    <section id="about-me" className={style.aboutMe}>
      <h2>About Me</h2>
      <div className={style.grid}>
        <article>
          <div className={style.line}></div>
          <div className="text-section">
            <p data-aos="fade-in">
              Since childhood I've been in love with computers and been playing
              video games. I wanted to create my own video games, so I
              self-taught programing and game design with{" "}
              <a
                href="https://unity.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unity
              </a>{" "}
              game engine via{" "}
              <a
                href="https://www.youtube.com/watch?v=g5QFW12utdU&list=PLPV2KyIb3jR4u6zeBY77WPj0KuFdmv84g"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>{" "}
              tutorials and documentations. Then, I participated in game jams
              and collaborating with people all over the world.
            </p>
            <p data-aos="fade-in">
              Programing attracted me surpassingly, and I was expanding my
              knowledge by self-teaching software, database, network and web
              development. When I got into high-school, I joined computer
              science and physics classes. Additionally, I joined a software
              development program for teenagers at{" "}
              <a
                href="https://www.weizmann.ac.il/pages/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weizmann Institute of Science
              </a>
              . I ended high-school with a 100 grade in computer science and
              software engineering.
            </p>
            <p data-aos="fade-in">
              I was serving in the Combat Intelligence Corps in the IDF as a
              combat intelligence soldier with a specialization in drone
              operation. I was participating in the "Guardian of the Walls" and
              "Breaking Dawn" operations. In the last period of my military
              service, I was accepted to the "Shchakim - AAM" course in Unit
              8200, but I decided to quit the program.
            </p>
            <p data-aos="fade-in">
              Among other things, I love to shoot portraits and street
              photography, watch movies, play video games, and go to
              restaurants.
            </p>
          </div>
        </article>
        <aside>
          <picture>
            <source srcset={meAvif} type="image/avif" />
            <source srcset={meWebP} type="image/webp" />
            <img
              src={meJpg}
              type="image/jpeg"
              decoding="async"
              loading="lazy"
              alt="A photo of Tal Israeli"
            />
          </picture>
          <h3>Tal Israeli</h3>
          <p className={style.smallText}>Full-stack Developer</p>
          <div className={style.info}>
            <p>
              <img src={locationIcon} alt="Location Icon" />
              <span>Giv'at Brenner, Israel</span>
            </p>
            <p>
              <img src={languageIcon} alt="Language Icon" />
              <span>Hebrew, English</span>
            </p>
            <p>
              <img src={carIcon} alt="Car Icon" />
              <span>Remote or hybrid work</span>
            </p>
          </div>
          <div className={style.resumeBtn}>
            <Button type="secondary" href="/Tal_Israeli_Resume.docx" jumping>
              <>Download resume</>
            </Button>
            <small>
              The resume is DOCX file,{" "}
              <a
                href="/Tal_Israeli_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download PDF
              </a>
              .
            </small>
          </div>
        </aside>
      </div>
    </section>
  );
}
