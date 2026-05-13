'use client';

const technologies = [
  'React',
  'Next.js',
  'Prisma',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Stripe',
  'Redis',
  'Docker',
  'AWS',
  'Vercel',
];

const highlightedTechs = ['React', 'Next.js', 'Prisma', 'Tailwind CSS'];

export function TechStack() {
  return (
    <section id="stack" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build modern, scalable applications.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden rounded-xl glass p-8">
          <div className="flex gap-4 animate-marquee">
            {[...technologies, ...technologies].map((tech, idx) => {
              const isHighlighted = highlightedTechs.includes(tech);
              return (
              <div
                key={idx}
                className={`flex-shrink-0 px-6 py-3 rounded-lg border text-center min-w-fit transition-all duration-300 cursor-default ${
                  isHighlighted
                    ? 'bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border-accent/50 text-accent shadow-[0_0_15px_rgba(59,130,246,0.3)] font-bold scale-105'
                    : 'bg-gradient-to-r from-blue-500/5 to-emerald-500/5 border-white/10 text-foreground hover:border-accent/50 hover:shadow-lg hover:shadow-blue-500/20 font-semibold'
                }`}
              >
                <span className="whitespace-nowrap">
                  {tech}
                </span>
              </div>
            )})}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
