import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { personalInfo } from "../data/personalInfo.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Education() {
  return (
    <section className="section section-education" id="education">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Building a strong foundation." />
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={22} aria-hidden="true" /></div>
          <div className="education-main">
            <p className="card-kicker">Undergraduate degree</p>
            <h3>{personalInfo.degree}</h3>
            <p className="education-college">{personalInfo.college}</p>
            <p className="education-university">{personalInfo.university}</p>
            <p className="education-location"><MapPin size={14} aria-hidden="true" /> {personalInfo.location}</p>
          </div>
          <div className="education-meta">
            <span className="education-period">Expected {personalInfo.expectedGraduation}</span>
            <span className="education-grade">CGPA <strong>{personalInfo.cgpa}</strong></span>
            <a href="#contact" className="education-link">Let&apos;s connect <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </article>
      </div>
    </section>
  );
}
