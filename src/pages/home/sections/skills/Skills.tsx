import style from "./Skills.module.sass";
import SkillList from "./skill-list/SkillList";

export default function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <h2>Skills</h2>
      <div className={style.grid}>
        <SkillList
          title="Back-end Development"
          skills={[
            ".NET Core",
            "SQL Server",
            "Entity Framework",
            "SignalR",
            "Node.js",
          ]}
        />
        <SkillList
          title="Front-end Development"
          skills={[
            "HTML & CSS",
            "Sass",
            "JavaScript ES6+",
            "TypeScript",
            "React",
            "Preact",
            "Vite",
            "Figma",
            "Google Analytics",
          ]}
        />
        <SkillList
          title="Adobe Products"
          skills={[
            "Photoshop",
            "Lightroom",
            "Illustrator",
            "After Effects",
            "Premiere Pro",
            "Audition",
          ]}
        />
        <SkillList
          title={
            <>
              Personal
              <br />
              Skills
            </>
          }
          skills={[
            "Leadership",
            "Teamwork",
            "Problem Solving",
            "Time Management",
            "Drone Operation",
            "Photography",
          ]}
        />
        <SkillList
          title="CI/CD"
          skills={["Git", "GitHub", "GitHub Actions", "Dependabot"]}
        />
        <SkillList
          title="IDE & Tools"
          skills={["Visual Studio", "VS Code", "Postman"]}
        />
        <SkillList title="Cloud" skills={["Azure", "AWS", "Networking"]} />
        <SkillList title="Game Development" skills={["Unity", "Blender"]} />
      </div>
    </section>
  );
}
