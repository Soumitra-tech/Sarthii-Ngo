import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroContent } from '@/data/content';

export function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroContent.image}
          alt={heroContent.imageAlt}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark-to-transparent overlay (bottom to top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-charcoal-800/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-800/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="animate-fade-down text-sm font-medium uppercase tracking-wider text-accent-300">
            {heroContent.eyebrow}
          </p>
          <h1
            className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animation: 'fadeUp 0.9s ease-out 0.15s both' }}
          >
            {heroContent.title}
          </h1>
          <p
            className="mt-4 font-serif text-xl italic text-cream-100/90 sm:text-2xl md:text-3xl"
            style={{ animation: 'fadeUp 0.9s ease-out 0.3s both' }}
          >
            {heroContent.subtitle}
          </p>
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animation: 'fadeUp 0.9s ease-out 0.45s both' }}
          >
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="btn-primary"
            >
              {heroContent.primaryBtn}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#work')}
              className="btn-secondary"
            >
              {heroContent.secondaryBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
