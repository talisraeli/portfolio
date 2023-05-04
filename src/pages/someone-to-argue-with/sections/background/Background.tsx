import Figure from "../../../../components/figure/Figure";
import style from "./Background.module.sass";

import avif from "./images/chat.avif";
import webP from "./images/chat.webp";
import png from "./images/chat.png";

export default function Background() {
  return (
    <section id="background" className={`wrapper-l ${style.background}`}>
      <h2>Background</h2>
      <div className="text-section">
        <p>
          The website is based on{" "}
          <a
            href="https://www.haaretz.co.il/captain/net/2014-08-11/ty-article/0000017f-e061-d38f-a57f-e6736bb10000"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Someone to Argue With 2014"
          </a>{" "}
          created by Eyal and Asaf Geva after the "Tzuk Eitan" operation. The
          website of the Geva brothers brought together people from both sides
          of the political map and provided them with a platform to pour their
          hearts out, anonymously.
        </p>
        <p>
          In preparation for the Knesset (the parliament of Israel) elections in
          November 2022, the 5th election in about 3.5 years, the website
          relaunched by me in order to help those who are looking for a place to
          vent their anger about another elections, and rage at the other side.
          I renewed the design and user experience to the modern standard of
          2022. In addition, I added new features such as viewing and sharing
          conversations after they was ended.
        </p>
        <p>
          The website went viral days before the elections and in the week
          during the elections, the website was recorded with over 60,000 users
          and 180,000 conversations between rightists and leftists. Articles on
          the major news sites in Israel and abroad were written on the website.
        </p>
      </div>
      <Figure caption="A conversation between two guests on the website before the elections">
          <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={png}
              type="image/png"
              decoding="async"
              loading="lazy"
              alt="A conversation between two guests on the website before the elections"
            />
          </picture>
        </Figure>
    </section>
  );
}
