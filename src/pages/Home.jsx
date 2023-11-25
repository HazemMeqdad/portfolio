/* eslint-disable react/no-unescaped-entities */
import profilePic from "../assets/profile-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore, faCss3, faDocker, faGitSquare, faGithub, faHtml5, faJs, faLinkedin, faLinux, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCertificate, faDatabase, faLanguage, faLightbulb, faMailBulk, faRibbon, faServer } from "@fortawesome/free-solid-svg-icons";
import AboutCard from "../components/AboutCard";
import ExperienceCard from "../components/ExperienceCard";
// import ProjectCard from "../components/ProjectCard";
import resume from '../assets/hazem-resume.pdf';


function Home() {

    return (
      <>
      <nav id="hamburger-nav">
        <div className="logo">Hazem Meqdad</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick="toggleMenu()">About</a></li>
            <li><a href="#experience" onClick="toggleMenu()">Experience</a></li>
            <li><a href="#projects" onClick="toggleMenu()">Projects</a></li>
            <li><a href="#contact" onClick="toggleMenu()">Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img className="profile-pic" src={profilePic} alt="Hazem profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Hazem Meqdad</h1>
          <p className="section__text__p2">Backend Developer & Application Developer</p>
          <div className="btn-container">
            <a href={resume} download>
              <button className="btn btn-color-2">
                Download resume
              </button>
            </a>
            <button className="btn btn-color-1">
              Contact Info
            </button>
          </div>
          <div id="socials-container">
          <a href="https://www.linkedin.com/in/hazemmeqdad/" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
            <a href="https://github.com/hazemmeqdad" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
                <AboutCard icon={faRibbon} title1="Experience" title2="+4 years" title3="Backend Development" />
                <AboutCard icon={faCertificate} title1="Education" title2="Study Bachelors CS" title3="University of the People" />
                <AboutCard icon={faAppStore} title1="Experience" title2="+1 year" title3="Application Development" />
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
                <h2 className="experience-sub-title">Programming Languages</h2>
                <div className="article-container">
                    <ExperienceCard icon={faPython} title="Python" level="Senior" />
                    <ExperienceCard icon={faJs} title="Javascript" level="Intermediate" />
                    <ExperienceCard icon={faDatabase} title="MySQL" level="Intermediate" />
                    <ExperienceCard icon={faPython} title="C++" level="Beginner" />
                    <ExperienceCard icon={faHtml5} title="HTML" level="Senior" />
                    <ExperienceCard icon={faCss3} title="CSS" level="Beginner" />
                </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Skills</h2>
              <div className="article-container">
                <ExperienceCard icon={faLanguage} title="English" level="B1" />
                <ExperienceCard icon={faGitSquare} title="Git" level="Senior" />
                <ExperienceCard icon={faLightbulb} title="Problems" level="Intermediate" />
                <ExperienceCard icon={faLinux} title="Linux" level="Senior" />
                <ExperienceCard icon={faDocker} title="Docker" level="Senior" />
                <ExperienceCard icon={faServer} title="Servers" level="Beginner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <FontAwesomeIcon className="icon contact-icon email-icon" icon={faMailBulk} />
            <p><a href="mailto:contact@hazemmeqdad.com">contact@hazemmeqdad.com</a></p>
          </div>
          <div className="contact-info-container">
            <FontAwesomeIcon className="icon contact-icon" icon={faLinkedin} />
            <p><a href="https://www.linkedin.com/in/hazemmeqdad/">LinkedIn</a></p>
          </div>
        </div>
      </section>
      </>
    )
}

export default Home
  