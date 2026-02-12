import React from 'react';

export default function ProjectCard({ title, tech, description, link }) {
  return (
    <a className="card" href={link} target="_blank" rel="noreferrer">
      <h3>{title}</h3>
      <p className = "tech">{tech}</p>
      <p className="description">{description}</p>
    </a>
  );
}