'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="group glass rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-card">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-foreground px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold border border-white/20"
            >
              View Code <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
