'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2cf38865-d21e-4964-bf57-cc3ea3395110",
          ...data,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="mb-16 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Something <span className="gradient-text">Extraordinary?</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Let's collaborate on your next project. Drop a message below and I&apos;ll get back to you soon.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 glass p-8 rounded-xl border border-white/10">
        {isSuccess && (
          <div className="bg-emerald-500/10 text-emerald-500 p-4 rounded-lg text-center mb-4 border border-emerald-500/20">
            Message sent successfully! I&apos;ll be in touch soon.
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">Name</label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">Email</label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">Message</label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1 text-left">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
