import style from "./AboutMe.module.sass";
import { useState, useEffect } from "preact/hooks";
import AOS from "aos";

import locationIcon from "./images/location.svg";
import languageIcon from "./images/language.svg";
import carIcon from "./images/car.svg";
import Button from "../../../../components/button/Button";

import meAvif from "./images/me/me.avif";
import meWebP from "./images/me/me.webp";
import meJpg from "./images/me/me.jpg";

export default function AboutMe() {
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [readMore]);

  return (
    <section id="about-me" className={style.aboutMe}>
      <h2>About Me</h2>
      <div className={`wrapper ${style.grid}`}>
        <article className={readMore ? style.readMore : ""}>
          <div className={style.line}></div>
          <div className="text-section">
            <p data-aos="fade-in">
              From a young age, I was captivated by computers and video games.
              My interest in video game development drove me to teach myself
              programming and game design using Unity and participate in game
              jams, where I collaborated with developers from all over the
              world. These experiences helped me develop my programming skills
              and expand my knowledge.
            </p>
            <p data-aos="fade-in">
              As I grew older, I continued to teach myself and explore various
              programming technologies and skills, including software, database,
              network, and web development. I joined computer science and
              physics classes in high school and even attended a software
              development program for teenagers at the Weizmann Institute of
              Science, where I excelled and received a perfect 100 grade in
              computer science and software engineering.
            </p>
            <p data-aos="fade-in">
              In the IDF, I served as a combat intelligence collection soldier
              and operated drones. This allowed me to develop teamwork,
              leadership, and communication skills, as well as the ability to
              operate and maintain advanced military technology. I was part of
              significant military operations such as "Guardian of the Walls"
              and "Breaking Dawn."
            </p>
            <p data-aos="fade-in">
              While serving in the IDF, I was also accepted into Unit 8200's
              prestigious and selective "Shchakim - AAM" course. However, after
              much thought, I decided to pursue my passion for software
              development and left the program.
            </p>
            <p data-aos="fade-in">
              Regarding programming technologies and skills, I am proficient in
              C# / .NET Core, React, SignalR, Entity Framework Core, SQL, HTML,
              CSS / SASS, and JavaScript / TypeScript. I am also familiar with
              cloud computing platforms such as AWS and Azure, as well as
              development tools such as Visual Studio, VS Code, and Git.
            </p>
            <p data-aos="fade-in">
              Over the years, I have honed my analytical and problem-solving
              skills, gained experience in technical evaluations and solution
              design, and developed a proactive and results-driven mindset. My
              attention to detail and passion for programming have allowed me to
              design high-performance applications and solutions to meet
              business needs.
            </p>
            <p data-aos="fade-in">
              I am always eager to expand my knowledge of new programming
              technologies and skills, and I am committed to continuous
              improvement. In my free time, I enjoy shooting portraits and
              street photography, watching movies, playing video games, and
              going to restaurants.
            </p>
            <p data-aos="fade-in">
              In summary, my personal and military experiences have instilled in
              me essential skills and qualities that are valuable in my
              professional life. I am a motivated, dedicated, and
              results-oriented individual who is always striving to learn and
              grow.
            </p>
          </div>
          <a className={style.readMore} onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read less" : "Read more"}
          </a>
        </article>
        <aside>
          <picture>
            <source srcset={meAvif} media="(min-width: 1024px)" type="image/avif" />
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
