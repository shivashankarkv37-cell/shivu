import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data/personalInfo.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    setFormMessage("Your email app should open with a draft. This website does not send or store your message.");
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  }

  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Have an opportunity or an idea?"
          description="I’m open to Java backend internships and entry-level opportunities. I’d be glad to connect."
        />
        <div className="contact-layout">
          <div className="contact-details">
            <a className="contact-detail" href={`mailto:${personalInfo.email}`}>
              <span className="contact-icon"><Mail size={17} aria-hidden="true" /></span>
              <span><small>Email</small><strong>{personalInfo.email}</strong></span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="contact-detail" href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Github size={17} aria-hidden="true" /></span>
              <span><small>GitHub</small><strong>View my source code</strong></span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="contact-detail" href={personalInfo.linkedInUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Linkedin size={17} aria-hidden="true" /></span>
              <span><small>LinkedIn</small><strong>Connect professionally</strong></span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <div className="contact-detail contact-location">
              <span className="contact-icon"><MapPin size={17} aria-hidden="true" /></span>
              <span><small>Location</small><strong>{personalInfo.location}</strong></span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <h3>Send a message</h3>
              <p>Opens a draft in your default email application.</p>
            </div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" required maxLength={100} />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" required maxLength={254} />
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about your opportunity..." required maxLength={3000} />
            <button className="button button-primary form-submit" type="submit">
              Open email draft <Send size={15} aria-hidden="true" />
            </button>
            <p className="form-disclaimer">No backend is connected. Nothing is sent or stored by this site.</p>
            <p className="sr-only" aria-live="polite">{formMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
