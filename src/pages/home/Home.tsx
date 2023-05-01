import style from "./Home.module.sass";
import Hero from "./sections/hero/Hero";
import LetsWorkTogether from "./sections/lets-work-together/LetsWorkTogether";
import FeaturedProjects from "./sections/featured-projects/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className={style.sections}>
        <LetsWorkTogether />
        <FeaturedProjects />
      </div>
    </>
  );
}
