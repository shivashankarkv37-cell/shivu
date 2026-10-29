import { ArrowDown, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { personalInfo } from "../data/personalInfo.js";

const technologies = ["Java", "Spring Boot", "Spring Security", "REST APIs", "MySQL"];

function BackendIllustration() {
  return (
    <div className="terminal-card" aria-label="Illustration of a backend API request flow">
      <div className="terminal-topbar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>request-flow.java</span>
        <span className="terminal-live"><i /> system map</span>
      </div>
      <div className="terminal-content">
        <div className="code-line"><span className="line-number">01</span><span><b>client</b> <em>→</em> <strong>REST API</strong></span></div>
        <div className="code-line"><span className="line-number">02</span><span><strong>REST API</strong> <em>→</em> <b>Spring Boot</b></span></div>
        <div className="code-line"><span className="line-number">03</span><span><b>Spring Boot</b> <em>→</em> <b>service layer</b></span></div>
        <div className="code-line"><span className="line-number">04</span><span><b>service layer</b> <em>→</em> <strong>MySQL</strong></span></div>
        <div className="terminal-divider" />
        <p className="terminal-comment">// building reliable things, one endpoint at a time</p>
        <div className="terminal-response"><span className="response-dot" /> ready to learn &amp; build<span className="cursor">_</span></div>
      </div>
      <div className="terminal-footer"><span>JAVA</span><span>API DESIGN</span><span>DATA</span></div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="availability"><span /> Open to internship opportunities</p>
          <p className="eyebrow hero-eyebrow">Java backend developer</p>
          <h1>Hi, I&apos;m <span>Shivashankar KV.</span></h1>
          <h2>Building the logic behind useful software.</h2>
          <p className="hero-description">
            I build backend applications using Java, Spring Boot, REST APIs, and MySQL.
            I&apos;m focused on writing clean code, designing reliable APIs, and developing
            practical software projects.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my projects <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-quiet" href="#contact">
              Contact me <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <a className="hero-github-link" href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" /> Explore my code on GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <div className="hero-tech-line" aria-label="Technologies of focus">
            {technologies.map((technology, index) => (
              <span key={technology}>
                {index > 0 && <i aria-hidden="true">·</i>}{technology}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <BackendIllustration />
          <p className="visual-caption"><span /> Learning by building practical projects</p>
        </div>
      </div>
    </section>
  );
}
