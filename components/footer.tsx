'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { ContactForm } from './contact-form';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@atass.dev', label: 'Email' },
];

export function Footer() {

  return (
    <footer id="contact" className="border-t border-white/10 py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <ContactForm />

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">ATASS</h3>
            <p className="text-muted-foreground text-sm">
              Building digital experiences that drive revenue through innovative web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-accent transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-accent transition-colors duration-300">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-accent hover:border-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 ATASS Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
