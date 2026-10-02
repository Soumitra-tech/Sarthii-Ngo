import { ArrowRight } from 'lucide-react';
import { ctaBanner } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lotus } from '@/components/Lotus';

export function CTABanner() {
  const { ref, isVisible } = useScrollReveal();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
      {/* Decorative lotus watermarks */}
      <Lotus className="pointer-events-none absolute -left-12 -top-8 w-64 opacity-[0.06]" />
      <Lotus className="pointer-events-none absolute -right-16 bottom-0 w-80 opacity-[0.06]" />

      <div className="container-x relative py-16 md:py-20">
        <div
          ref={ref}
          className={`mx-auto max-w-3xl text-center reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {ctaBanner.heading}
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="btn-primary bg-accent-400 text-primary-900 shadow-accent-400/30 hover:bg-accent-300 hover:shadow-accent-400/40"
            >
              {ctaBanner.primaryBtn}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="btn-secondary"
            >
              {ctaBanner.secondaryBtn}
            </button>
          </div>
          <p className="mt-8 font-serif text-lg italic text-cream-100/80">
            {ctaBanner.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
