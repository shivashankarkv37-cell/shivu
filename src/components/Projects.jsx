import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { projects } from "../data/projects.js";
import SectionHeading from "./SectionHeading.jsx";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-status"><i />{project.status}</span>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      {project.technologies.length > 0 ? (
        <ul className="project-tags" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      ) : (
        <p className="project-stack-note"><Layers3 size={14} aria-hidden="true" /> Technology stack to be confirmed as development progresses.</p>
      )}
      {project.implementedFeatures.length > 0 && (
        <ul className="project-features">
          {project.implementedFeatures.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      )}
      <div className="project-links">
        {project.repositoryUrl ? (
          <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
            <Github size={15} aria-hidden="true" /> Repository <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ) : (
          <span className="project-link project-link-muted"><Github size={15} aria-hidden="true" /> Repository not linked</span>
        )}
        {project.demoUrl && (
          <a className="project-link project-link-demo" href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section section-projects" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Learning by building."
          description="A few backend-focused projects I’m developing to turn concepts into working software."
        />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.name} />)}
        </div>
        <p className="projects-note">Project status and feature lists are kept intentionally honest as work progresses.</p>
      </div>
    </section>
  );
}
