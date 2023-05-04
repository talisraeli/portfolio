import Figure from "../../../../components/figure/Figure";
import style from "./ProjectDesign.module.sass";

import avif from "./images/use-case.avif";
import webP from "./images/use-case.webp";
import png from "./images/use-case.png";

export default function ProjectDesign() {
  return (
    <section id="project-design" className={style.projectDesign}>
      <div className={`wrapper-l ${style.content}`}>
        <h2>Project Design</h2>
        <div className="text-section">
          <p>
            All search engines are divided into three small systems: the first
            of which is the collection of data from webpages using bots called{" "}
            <a
              href="https://en.wikipedia.org/wiki/Web_crawler"
              target="_blank"
              rel="noopener noreferrer"
            >
              "web crawlers"
            </a>
            ; The second is a database used to store and receive information on
            webpages; The third, a website where there's a presentation of the
            search results according to the client's request. Each small system
            is responsible for a different area in the large system, and each
            system has a connection to the other systems, which allows
            cooperation between them. My search engine also uses this structure.
          </p>
          <p>
            The process of building the database begins with the scanning of a
            webpage by a web crawler, from which it extracts information about
            the website (such as title and description), and gives a score to
            each keyword that appears in it according to its dominance on that
            page. In addition, the web crawler extracts from each page
            hyperlinks to other webpages, and adds those pages to a waiting
            queue for scanning. After it finishes scanning the page, it moves to
            the next page and so on. In my system, I did something different and
            unique from other search engines in that I connect webpages waiting
            to be scanned to their domain name, and give priority (manually) in
            the frequency of scanning the pages from that domain to some of the
            domains. Thus large, popular and reliable sites checked by the
            system developer get priority in their content volume in the
            database and get a higher crawl frequency than other sites.
          </p>
          <p>
            When the client enters a query and clicks "Search", it sends{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTTP
            </a>{" "}
            GET request to the server, then the server processes its query and
            calculates the most relevant results on the database, based on the
            ranking of the keywords of the webpages. Finally, the client
            receives the response from the server with the results.
          </p>
        </div>
        <Figure caption="A use-case diagram I designed for the plan of the project">
          <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webP} type="image/webp" />
            <img
              src={png}
              type="image/png"
              decoding="async"
              loading="lazy"
              alt="A use-case diagram I designed for the plan of the project"
            />
          </picture>
        </Figure>
      </div>
    </section>
  );
}
