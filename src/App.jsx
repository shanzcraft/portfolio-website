import React, { useEffect } from 'react';
import './App.css';

import GithubIcon from './assets/icons/github-fill.svg?react';
import GamepadIcon from './assets/icons/game-2-fill.svg?react';
import LinkedInIcon from './assets/icons/linkedin-box-fill.svg?react';
import EmailIcon from './assets/icons/mail-fill.svg?react';

const icons = {
  github: GithubIcon,
  gamepad: GamepadIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
};

const projects = [
  [
    '2D Maze Generator',
    'A 2D maze generator with options for editing the generated maze and then exporting it as an image. Great for planning dungeons or to use in a collage.',
    'https://shanzcraft.github.io/2D-maze-generator/',
  ],
  [
    'CompanionLink Website',
    'A WordPress website that I worked on for the non-profit organization CompanionLink. I implemented a new layout, managed content, and used plug-ins such as ACF, Gravity Forms, and WPML.',
    'https://companionlink.org/',
  ],
  [
    'SAGE Website',
    'A WordPress website that I created for the non-profit organization SAGE. I designed and implemented the layout, managed content, and orchestrated plug-ins. I designed and implemented a system for chapters of SAGE to generate their own dynamic webpage by filling out a form.',
    'https://sageproject.ca/',
  ],
  [
    'Portfolio Website',
    "This is the website you're on right now! A responsive personal portfolio website built with React that links to some of my public GitHub repositories and other projects.",
    'https://github.com/shanzcraft/portfolio-website',
  ],
  [
    'Jigsaw Puzzle Game',
    'Interactive 2D jigsaw puzzle game implemented with JavaScript, HTML, and CSS. Built to be integrated into a larger Twine project to support narrative storytelling.',
    'https://github.com/shanzcraft/puzzle-game',
  ],
];

export default function App() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const container = document.getElementById('star-container');
    const handleMouseMove = (e) => {
      for (let i = 0; i < 5; i++) {
        const s = document.createElement('div');
        const size = 6 + Math.random() * 6;
        s.className = 'star';
        s.style.width = s.style.height = size + 'px';
        s.style.left = e.clientX + (Math.random() * 14 - 7) + 'px';
        s.style.top = e.clientY + (Math.random() * 14 - 7) + 'px';
        s.style.animationDuration = 0.8 + Math.random() * 0.6 + 's';
        s.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(s);
        setTimeout(() => container.removeChild(s), 1400);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page">
      <div className="hero">
        <div className="cube">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((f) => (
            <div className={`face ${f}`} key={f} />
          ))}
        </div>
        <h1>Shannon Blitchok</h1>
      </div>

      <div className="icons">
        {Object.entries(icons).map(([k, Icon]) => (
  <a
    data-label={
      k === 'github'
        ? 'Github'
        : k === 'gamepad'
        ? 'Play My Games'
        : k === 'linkedin'
        ? 'LinkedIn'
        : 'Email Me'
    }
    href={
      k === 'github'
        ? 'https://github.com/shanzcraft'
        : k === 'gamepad'
        ? 'https://shanzgamestudios.itch.io/'
        : k === 'linkedin'
        ? 'https://www.linkedin.com/in/shannon-blitchok'
        : 'mailto:shannon.blitchok@gmail.com'
    }
    target="_blank"
    rel="noreferrer"
    key={k}
  >
    <Icon width={26} height={26} />
  </a>
))}
      </div>

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
          {projects.map(([t, d, link]) => (
            <a
              className="card"
              href={link}
              key={t}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{t}</h3>
              <p>{d}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">© {year} Shannon Blitchok</footer>

      <div id="star-container"></div>
    </div>
  );
}
