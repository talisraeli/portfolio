import style from "./Home.module.sass";
import Hero from "./sections/hero/Hero";
import LetsWorkTogether from "./sections/lets-work-together/LetsWorkTogether";
import FeaturedProjects from "./sections/featured-projects/FeaturedProjects";
import Skills from "./sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div className={style.sections}>
        <LetsWorkTogether />
        <FeaturedProjects />
        <Skills />
      </div>
    </>
  );
}
