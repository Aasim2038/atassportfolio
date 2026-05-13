'use client';

import { Code2, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Building scalable, performant applications using modern tech stacks. From frontend to backend, database to deployment.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Creating beautiful, intuitive interfaces that engage users and drive conversions. Focused on user experience and accessibility.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Optimizing applications for speed and efficiency. Reducing load times, improving SEO, and maximizing user retention.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group glass p-8 rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
