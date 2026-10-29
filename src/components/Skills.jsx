import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "../data/skills.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section className="section section-skills" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Tools I use and concepts I’m exploring."
          description="A growing toolkit shaped by coursework, practice, and personal projects."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className={`skill-card${index === 1 ? " skill-card-featured" : ""}`} key={group.title}>
              <div className="skill-card-heading">
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                {group.title === "Currently learning" && <ArrowUpRight size={15} aria-hidden="true" />}
              </div>
              <ul className="skill-tags" aria-label={group.title}>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
