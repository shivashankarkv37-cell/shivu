import { ArrowUp, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/personalInfo.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Designed and built by <strong>{personalInfo.name}</strong>.</p>
        <div className="footer-right">
          <span>© {new Date().getFullYear()}</span>
          <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={16} />
          </a>
          <a href={personalInfo.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={16} />
          </a>
          <a className="back-to-top" href="#home"><ArrowUp size={15} aria-hidden="true" /> Back to top</a>
        </div>
      </div>
    </footer>
  );
}
