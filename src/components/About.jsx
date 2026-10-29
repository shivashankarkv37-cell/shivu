import { BookOpen, Code2, Compass } from "lucide-react";
import { personalInfo } from "../data/personalInfo.js";
import SectionHeading from "./SectionHeading.jsx";

const highlights = [
  {
    icon: BookOpen,
    title: "Education",
    detail: "BCA · Expected 2027",
    note: "Shree Medha Degree College",
  },
  {
    icon: Code2,
    title: "Primary focus",
    detail: "Java backend development",
    note: "APIs, application logic & data",
  },
  {
    icon: Compass,
    title: "Currently learning",
    detail: "Spring Security & system design",
    note: "Exploring scalable backend architecture",
  },
];

export default function About() {
  return (
    <section className="section section-about" id="about">
      <div className="container">
        <SectionHeading eyebrow="A little about me" title="Curious about what happens behind the UI." />
        <div className="about-layout">
          <div className="about-copy">
            <p>
              I&apos;m a BCA student at {personalInfo.college} with a strong interest in
              Java backend development. I enjoy learning how backend systems work,
              building REST APIs, working with databases, and understanding software
              architecture.
            </p>
            <p>
              I&apos;m developing practical projects to strengthen my programming,
              problem-solving, and backend engineering skills. I&apos;m currently seeking
              Java backend developer internships and entry-level opportunities where I
              can learn from a team and contribute thoughtfully.
            </p>
          </div>
          <div className="about-cards">
            {highlights.map(({ icon: Icon, title, detail, note }) => (
              <article className="about-card" key={title}>
                <span className="icon-tile"><Icon size={18} aria-hidden="true" /></span>
                <div>
                  <p className="card-kicker">{title}</p>
                  <h3>{detail}</h3>
                  <p className="card-note">{note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
