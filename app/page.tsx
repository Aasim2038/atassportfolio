import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ProjectShowcase } from '@/components/project-showcase';
import { ServicesSection } from '@/components/services-section';
import { TechStack } from '@/components/tech-stack';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Aasim | ATASS Solutions - Full-Stack Developer & Entrepreneur',
  description:
    'Building digital experiences that drive revenue. Full-stack development, SaaS products, and AI-powered applications by Aasim, Founder of ATASS Solutions.',
  keywords:
    'Aasim, ATASS Solutions, Full-stack developer, web development, React, Next.js, TypeScript, entrepreneurship',
  openGraph: {
    title: 'Aasim | ATASS Solutions - Building Digital Experiences',
    description: 'Full-stack developer specializing in revenue-driving applications',
    url: 'https://atass.dev',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectShowcase />
      <ServicesSection />
      <TechStack />
      <Footer />
    </main>
  );
}
