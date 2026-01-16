import React, { useEffect } from 'react';

import GithubIcon from './assets/images/github-fill.svg?component';
import GamepadIcon from './assets/images/game-2-fill.svg?component';
import LinkedInIcon from './assets/images/linkedin-box-fill.svg?component';
import EmailIcon from './assets/images/mail-fill.svg?component';

const icons = {
  github: <GithubIcon />,
  gamepad: <GamepadIcon />,
  insta: <LinkedInIcon />,
  email: <EmailIcon />,
};

const projects = [
  [
    'Portfolio Website',
    "This is the website you're on right now! Responsive personal portfolio website built with React that links to my GitHub repositories for other projects.",
    'https://github.com/shanzcraft/',
  ],
  [
    'Jigsaw Puzzle Game',
    'Interactive 2D jigsaw puzzle game implemented with JavaScript, HTML, and CSS. Built to be integrated into a larger Twine project to support narrative storytelling.',
    'https://github.com/shanzcraft',
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
      <div className="schematic-overlay" />
      <div className="hero">
        <div className="cube">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((f) => (
            <div className={`face ${f}`} key={f} />
          ))}
        </div>
        <h1>Shannon Blitchok</h1>
      </div>

      <div className="icons">
        {Object.entries(icons).map(([k, path]) => (
          <a
            data-label={
              k === 'github'
                ? 'Github'
                : k === 'gamepad'
                ? 'Play My Games'
                : k === 'insta'
                ? 'LinkedIn'
                : 'Email Me'
            }
            href={
              k === 'github'
                ? 'https://github.com'
                : k === 'gamepad'
                ? 'https://itch.io'
                : k === 'insta'
                ? 'https://www.linkedin.com'
                : 'mailto:shannon.blitchok@gmail.com'
            }
            target="_blank"
            rel="noreferrer"
            key={k}
          >
            <svg viewBox="0 0 24 24">
              <path d={path} />
            </svg>
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
          interests as the open world of <i>GTA San Andreas</i> and the
          gunfights of <i>Goldeneye</i> on N64.
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
      <style>{css}</style>
    </div>
  );
}

const css = `

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #000;
  overflow-x: hidden;
}

.page {
  box-sizing: border-box;
}

/* Page & Hero */
.page {
  min-height:100vh;
  background:radial-gradient(circle at top,#111,#000);
  color:#fef8e7; 
  font-family:monospace;
  padding:60px 30px;
  text-align:center;
}

/* Hero */
.hero {
  position:relative;
  height:220px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.hero h1 { position:relative; z-index:2; }

/* Schematic background overlay */
.schematic-overlay {
  position: fixed;
  inset: -20%;
  background-image: url("/wiiRemote.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1200px;
  opacity: 0.18;
  transform: rotate(45deg);
  pointer-events: none;
  z-index: 0;
  filter: blur(0.4px);
}

/* Make sure content stays above it */
.page > * {
  position: relative;
  z-index: 1;
}

/* Cube */
.cube {
  position:absolute;
  width:120px;
  height:120px;
  transform-style:preserve-3d;
  animation:spin 20s linear infinite;
}
.face {
  position:absolute;
  width:120px;
  height:120px;
  background:linear-gradient(135deg,#91FF00,#00fff0);
  opacity:.6;
  border:1px solid rgba(255,255,255,.25);
}
.front{transform:translateZ(60px)}
.back{transform:rotateY(180deg) translateZ(60px)}
.right{transform:rotateY(90deg) translateZ(60px)}
.left{transform:rotateY(-90deg) translateZ(60px)}
.top{transform:rotateX(90deg) translateZ(60px)}
.bottom{transform:rotateX(-90deg) translateZ(60px)}
@keyframes spin{from{transform:rotateX(0) rotateY(0)}to{transform:rotateX(360deg) rotateY(360deg)}}

/* Icons */
.icons{display:flex;justify-content:center;gap:20px;margin:20px}
.icons a{position:relative}
.icons a::after{
  content:attr(data-label);
  position:absolute;
  bottom:140%;
  left:50%;
  transform:translateX(-50%);
  font-size:11px;
  padding:4px 8px;
  background:#00fff0;
  color:#000;
  border-radius:6px;
  white-space:nowrap;
  opacity:0;
  pointer-events:none;
  transition:.2s;
}
.icons a:hover::after{opacity:1}

svg{width:26px;height:26px;fill:#fef8e7;opacity:.7;transition:.3s}
a:hover svg{opacity:1;transform:translateY(-4px)}

/* Subheader & hr */
.sub{margin-bottom:40px}
hr{border:none;border-top:1px solid rgba(254,248,231,.2);margin:40px auto;max-width:900px}

/* Sections */
.section{max-width:700px;margin:0 auto 60px;text-align:left}
.about h2{margin-bottom:16px}
.projects-section h2{margin-bottom:24px}
.section p{margin:0;line-height:1.6}

/* Grid & cards */
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:28px;max-width:1100px;margin:auto}
.card{padding:28px;border-radius:20px;background:rgba(254,248,231,.03);border:1px solid rgba(254,248,231,.1);transition:.4s;text-decoration:none;color:#fef8e7}
.card:hover{transform:translateY(-8px) scale(1.02);border-color:#00fff0}
.card p{opacity:.7}

/* Star trail */
#star-container{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none}
.star{
  position:absolute;
  width:12px; height:12px;
  background:#00fff0;
  pointer-events:none;
  clip-path: polygon(
    50% 0%, 62% 38%, 100% 50%, 62% 62%, 
    50% 100%, 38% 62%, 0% 50%, 38% 38%
  );
  box-shadow:0 0 6px #00fff0, 0 0 12px #00fff0;
  animation: starFade 1s forwards, starRotate 0.7s linear infinite;
}
@keyframes starFade{to{transform:translate(-50%,-50%) scale(0) rotate(45deg);opacity:0}}
@keyframes starRotate{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}

/* Footer */
.footer {
  padding:20px 0;
  font-size:12px;
  opacity:0.6;
  text-align:center;
  border-top:1px solid rgba(254,248,231,.15);
}
`;
