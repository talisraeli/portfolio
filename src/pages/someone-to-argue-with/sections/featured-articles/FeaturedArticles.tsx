import style from "./FeaturedArticles.module.sass";
import ArticleCard from "./article-card/ArticleCard";

import kipa from "./images/kipa.svg";
import themarker from "./images/themarker.svg";
import mako from "./images/mako.svg";
import abc from "./images/abc.svg";

export default function FeaturedArticles() {
  return (
    <section id="featured-articles" className={style.featuredArticles}>
      <div className={`wrapper-l ${style.content}`}>
        <h2>Featured Articles</h2>
        <div className={style.articles}>
          <ArticleCard
            sourceImage={kipa}
            sourceHref="https://www.kipa.co.il/%D7%98%D7%9B%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94/1144459-0/"
            sourceName="Kipa"
          >
            <p>
              The app for letting off steam about the elections: if you are
              politically active, you have something to say and you don't know
              to whom, we have found the ultimate app for you. A website created
              by a guy named Tal Israeli allows you to start a conversation with
              someone on the other side and have an anonymous conversation. It
              may sound like curiosity, but this is an addictive app.
            </p>
          </ArticleCard>

          <ArticleCard
            sourceImage={themarker}
            sourceHref="https://www.themarker.com/captain-internet/2022-10-31/ty-article/.premium/00000184-2eaf-d8ca-a3ff-bfffffa50000"
            sourceName="TheMarker"
          >
            <p>
              So, a guy named Tal Israeli built a website called "Someone to
              Argue With", that allows you to have a conversation with someone
              on the other side and conduct an anonymous discussion. I think
              this is the most genius thing I've seen lately. I highly recommend
              trying it!
            </p>
          </ArticleCard>

          <ArticleCard
            sourceImage={mako}
            sourceHref="https://www.mako.co.il/nexter-news/Article-841ed8bdb4e2481027.htm"
            sourceName="Mako"
            imageSize="2.75rem"
          >
            <>
              <p>
                Tomorrow we will go to vote for the fifth time in three years,
                and if you have not yet exhausted this matter of debating
                politics - get to know the website that allows you to do it.
              </p>
              <p>
                The website is called "Someone to Argue With, 2022 Elections",
                and it works in a very simple way. You have to choose which side
                you are on - right or left, then a chat will open for you and a
                user from the opposite side will join you. From here - the
                correspondence is in your hands.
              </p>
            </>
          </ArticleCard>

          <ArticleCard
            sourceImage={abc}
            sourceHref="https://www.abc.es/tecnologia/moviles/aplicaciones/mishu-tinder-gente-quiere-discutir-20221101114954-nt.html"
            sourceName="ABC News"
            imageSize="2.5rem"
          >
            <>
              <p>
                The networks have gone crazy when they found out about the
                existence of "Someone to Argue With", an application in which
                conflict is sought directly.
              </p>
              <p>
                Now, thanks to an application that is starting to become
                fashionable, you can find a partner to do what you usually try
                to avoid (sometimes without success) in love: argue. An Israeli
                company has created an app called "Someone to Argue With" in
                which users can search for opponents with whom to confront their
                arguments.
              </p>
            </>
          </ArticleCard>
        </div>
      </div>
    </section>
  );
}
