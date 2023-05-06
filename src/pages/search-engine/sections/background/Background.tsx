import Figure from "../../../../components/figure/Figure";
import style from "./Background.module.sass";

import avif from "./images/google.avif";
import webP from "./images/google.webp";
import png from "./images/google.png";

export default function Background() {
  return (
    <section id="background" className={style.background}>
      <div className={`wrapper-l ${style.content}`}>
        <h2>Background</h2>
        <div className="text-section">
          <p data-aos="fade-in">
            Inspired by{" "}
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search
            </a>
            , I wanted to understand how it works and replicate it. My
            motivation for making the project was to learn new things, both in
            programming and in general knowledge. I wanted to learn new
            technologies and tools that I hadn't used before in software
            development. I wanted to use the existing knowledge about search
            engines and change things that I consider appropriate. I wanted my
            final system to have potential customers use it. In addition, I
            wanted to build a large system in dimensions that I hadn't built
            before.
          </p>
          <p data-aos="fade-in">
            At the beginning of the project, I started researching with the help
            of the Internet and books about all kinds of project-related topics.
            I researched how search engines work, what types of search engines
            exist, how they differ from each other, what{" "}
            <a
              href="https://en.wikipedia.org/wiki/Web_crawler"
              target="_blank"
              rel="noopener noreferrer"
            >
              "spiders"
            </a>{" "}
            are as we relate to this topic, and similar questions that helped me
            better understand the topic on which I am preparing the project. I
            read several books and articles that helped me understand these
            issues, with an emphasis on "Christopher D. Manning, Prabhakar
            Raghavan and Hinrich Schütze,{" "}
            <a
              href="https://nlp.stanford.edu/IR-book/information-retrieval-book.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to Information Retrieval
            </a>
            , Cambridge University Press. 2008".
          </p>
          <p data-aos="fade-in">
            According to the research I conducted, I understood that today's
            search engines are very complicated and developed at a super high
            level, they have dozens of different technologies that allow them to
            perform a very fast and accurate search. This level of search
            engines is too high a level for a single programmer like me to work
            on an educational program. I wanted to find the right level for me,
            so that I can also learn new things, but in addition I can finish
            developing the system on time and without quitting in the middle due
            to desperation. To that end, I went to research the basics of search
            engines, how they were first built, to ease the process of building
            the software.
          </p>
        </div>
        <Figure caption='"Google Search" was my inspiration for this project'>
          <picture>
            <source srcSet={avif} media="(min-width: 1024px)" type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={png}
              type="image/png"
              decoding="async"
              loading="lazy"
              alt='"Google Search" was my inspiration for this project'
            />
          </picture>
        </Figure>
      </div>
    </section>
  );
}
