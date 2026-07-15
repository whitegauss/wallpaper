import React from 'react';
import { IconType } from 'react-icons';

export interface SocialIconLinkProps {
  icon: IconType;
  href: string;
  label?: string;
  external?: boolean;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({
  icon: Icon,
  href,
  label,
  external = true,
}) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
      aria-label={label || 'Social Link'}
    >
      <div className="p-1 transition-transform duration-200 group-hover:-translate-y-0.5">
        <Icon size={18} />
      </div>
      
      {label && (
        <span className="text-xs font-medium tracking-wide hidden sm:block">
          {label}
        </span>
      )}
    </a>
  );
};
export default SocialIconLink;