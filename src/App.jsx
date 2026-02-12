import React, { useEffect } from 'react';
import './App.css';

import Hero from './components/Hero';
import SocialIcons from './components/SocialIcons';
import ProjectCard from './components/ProjectCard';
import BackToTop from './components/BackToTop';
import StarEffect from './components/StarEffect';
import { projects } from './data/content';

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      < Hero />

      <SocialIcons />

      <p className="sub">
        Software developer focused on web and game development.
      </p>
      <hr />

      <section className="section about">
        <h2>About</h2>
        <p>
          I have a Computer Science BSc with a specialty in game development and
          a passion for storytelling and art that stays with you.
        </p>
        <br />
        <p>
          I grew up in a small town in Michigan and I now live in Montréal,
          Quebec. I love programming, writing, worldbuilding, drawing, and
          gaming. Michael Crichton’s <i>Timeline</i> and Dan Brown’s{' '}
          <i>Angels & Demons</i> had just as much of an impact on my creative
          interests as the open world of <i>GTA San Andreas</i> and staying up late
          playing <i>Call of Duty Black Ops Zombies</i> with my friends.
        </p>
        <br />
        <p>
          I care about the future of the internet, the shelf full of plants that
          I water when I'm stuck on something, and whatever I am nerding out
          about the most at the moment. I am always expanding my technical
          knowledge and trying out different software, languages, and workflows.
        </p>
        <br />
        <p>
          If I were a videogame character, I'd be the quirky droid that slinks
          away when you approach the level-select terminal in{' '}
          <i>Star Wars Episode I: Racer.</i>
        </p>
      </section>

     <section className="section projects-section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tech={project.tech}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <BackToTop />

      <footer className="footer">© {year} Shannon Blitchok</footer>

      <StarEffect />
    </div>
  );
}
