'use client';

import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="glass px-4 py-2 text-sm text-accent font-semibold">
            👋 Hi, I&apos;m Aasim
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pretty">
          Founder of <span className="gradient-text">ATASS Solutions</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
          A full-stack developer and entrepreneur specializing in crafting modern web applications that turn complex ideas into scalable, profitable digital products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass px-8 py-4 rounded-lg font-semibold text-foreground hover:border-accent/80 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-fade-in-up">
          <div className="flex justify-center">
            <div className="border border-white/20 rounded-full p-3 animate-bounce">
              <div className="w-6 h-10 border-2 border-accent rounded-full p-2 flex justify-center">
                <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
