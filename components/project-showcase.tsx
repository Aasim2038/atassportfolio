'use client';

import { ProjectCard } from './project-card';

const projects = [
  {
    id: 1,
    title: 'Pureable',
    description: 'An advanced e-commerce platform for clean and pure products.',
    image: '/images/pureable_mockup.png',
    tags: ['Next.js', 'React', 'Prisma', 'Tailwind CSS'],
    link: 'https://pureable.in/',
  },
  {
    id: 2,
    title: 'DocBook',
    description: 'A streamlined doctor appointment booking system.',
    image: '/images/docbook_mockup.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://doc-book-phi.vercel.app/',
  },
  {
    id: 3,
    title: 'Denler UAE',
    description: 'A premium landing page for smart lock solutions.',
    image: '/images/denler_mockup.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://denleruae-website-mockup.vercel.app/',
  },
  {
    id: 4,
    title: 'Dubai Tech Ultra Watch',
    description: 'A high-end gadget landing page.',
    image: '/images/ultra_watch_mockup.png',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    link: 'https://dubai-tech-ultra-watch.vercel.app/',
  },
  {
    id: 5,
    title: 'Gym Dashboard',
    description: 'A modern UI for fitness tracking and management.',
    image: '/images/gym_dashboard_mockup.png',
    tags: ['React', 'Dashboard', 'Tailwind CSS'],
    link: 'https://v0-gym-dashboard-design-zeta.vercel.app/',
  },
  {
    id: 6,
    title: 'Minimalist Clothing Catalog',
    description: 'Clean e-commerce UI for fashion.',
    image: '/images/clothing_mockup.png',
    tags: ['Next.js', 'E-commerce', 'Tailwind CSS'],
    link: 'https://v0-minimalist-clothing-catalog.vercel.app/',
  },
  {
    id: 7,
    title: 'Clinic Website',
    description: 'Healthcare service landing page.',
    image: '/images/clinic_mockup.png',
    tags: ['React', 'Healthcare', 'Tailwind CSS'],
    link: 'https://v0-clinic-website-homepage.vercel.app/',
  },
  {
    id: 8,
    title: 'Fast Food Landing Page',
    description: 'Vibrant UI for food delivery services.',
    image: '/images/fast_food_mockup.png',
    tags: ['Next.js', 'Tailwind CSS', 'Food Tech'],
    link: 'https://v0-fast-food-landing-page-five.vercel.app/',
  },
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my best work across web, mobile, and AI-powered applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
