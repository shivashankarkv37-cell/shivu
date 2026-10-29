import { ArrowUpRight, Github, GitBranch } from "lucide-react";
import { personalInfo } from "../data/personalInfo.js";

export default function GitHub() {
  return (
    <section className="github-section" aria-labelledby="github-heading">
      <div className="container github-panel">
        <div className="github-icon"><Github size={23} aria-hidden="true" /></div>
        <div className="github-copy">
          <p className="eyebrow">Open source &amp; learning in public</p>
          <h2 id="github-heading">See what I&apos;m building.</h2>
          <p>Explore my GitHub for project source code, experiments, and the progress behind my work.</p>
        </div>
        <a className="button button-outline github-button" href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
          <GitBranch size={16} aria-hidden="true" /> Visit my GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
