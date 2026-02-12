import React from 'react';
import GithubIcon from '../assets/icons/github-fill.svg?react';
import GamepadIcon from '../assets/icons/game-2-fill.svg?react';
import LinkedInIcon from '../assets/icons/linkedin-box-fill.svg?react';
import EmailIcon from '../assets/icons/mail-fill.svg?react';
import { socialLinks } from '../data/content';

const iconComponents = {
  github: GithubIcon,
  gamepad: GamepadIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
};

export default function SocialIcons() {
  return (
    <div className="icons">
      {socialLinks.map((link) => {
        const IconComponent = iconComponents[link.icon];
        return (
          <a
            data-label={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            key={link.id}
          >
            <IconComponent width={26} height={26} />
          </a>
        );
      })}
    </div>
  );
}