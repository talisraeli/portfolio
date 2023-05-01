import style from "./FeaturedProjects.module.sass";
import ProjectCard from "./project-card/ProjectCard";
import Button from "../../../../components/button/Button";

import stawAvif from "./images/someone-to-argue-with/presentation.avif";
import stawWebP from "./images/someone-to-argue-with/presentation.webp";
import stawJpg from "./images/someone-to-argue-with/presentation.jpg";

import seAvif from "./images/search-engine/presentation.avif";
import seWebP from "./images/search-engine/presentation.webp";
import seJpg from "./images/search-engine/presentation.jpg";

import gjAvif from "./images/game-jams/presentation.avif";
import gjWebP from "./images/game-jams/presentation.webp";
import gjJpg from "./images/game-jams/presentation.jpg";

import githubIcon from "./images/github.svg";

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className={style.featuredProjects}>
      <h2>Featured Projects</h2>
      <ProjectCard
        title="Someone to Argue With"
        description='A "Chatroulette" like app, a chat between complete strangers, 
        and gives it a unique twist. First choose the side you belong to 
        and the system will randomly find you someone from the other side to argue with.'
        seconderyButtonName="Visit website"
        image={
          <picture>
            <source srcSet={stawAvif} type="image/avif" />
            <source srcSet={stawWebP} type="image/webp" />
            <img
              src={stawJpg}
              type="image/jpeg"
              decoding="async"
              loading="lazy"
              alt="A presentation of Someone to Argue With project"
            />
          </picture>
        }
        primaryButtonLink="/someone-to-argue-with"
        seconderyButtonLink="https://mishu.im"
      />
      <ProjectCard
        title="Search Engine"
        description="A search engine of the web. Write a phrase which
        defines what you are searching for and receive the
        most relevant webpage results across the internet."
        seconderyButtonName="Live demo"
        image={
          <picture>
            <source srcSet={seAvif} type="image/avif" />
            <source srcSet={seWebP} type="image/webp" />
            <img
              src={seJpg}
              type="image/jpeg"
              decoding="async"
              loading="lazy"
              alt="A presentation of Search Engine project"
            />
          </picture>
        }
        primaryButtonLink="/search-engine"
        seconderyButtonLink="https://search.talisrae.li"
      />
      <ProjectCard
        title="Game Jams"
        description="Explore video games I created during “Ludum Dare” game jams in the Unity game engine
        along cooperative development teams around the world."
        seconderyButtonName="Play my games"
        image={
          <picture>
            <source srcSet={gjAvif} type="image/avif" />
            <source srcSet={gjWebP} type="image/webp" />
            <img
              src={gjJpg}
              type="image/jpeg"
              decoding="async"
              loading="lazy"
              alt="A presentation of Someone to Argue With project"
            />
          </picture>
        }
        primaryButtonLink="/game-jams"
        seconderyButtonLink="https://keshetbehanan.itch.io/"
      />
      <Button type="secondary" href="https://github.com/KeshetBehanan">
        <>
          <img className="filter" src={githubIcon} alt="GitHub Icon" />
          Explore more projects
        </>
      </Button>
    </section>
  );
}
