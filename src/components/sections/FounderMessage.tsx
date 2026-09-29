import { Quote } from 'lucide-react';
import { founderMessage } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lotus } from '@/components/Lotus';

export function FounderMessage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="founder" className="section-pad relative overflow-hidden bg-cream-100">
      <Lotus className="pointer-events-none absolute -left-16 bottom-0 w-72 opacity-[0.03]" />

      <div className="container-x">
        <div
          ref={ref}
          className={`mx-auto mb-14 max-w-2xl text-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-500">
            From Our Founder
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary-700 sm:text-4xl">
            Founder&rsquo;s Message
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-14">
            {/* Photo */}
            <div
              className={`reveal-left mx-auto ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="relative mx-auto w-64 md:w-full">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent-300/30 to-primary-400/30 blur-md" />
                <div className="relative overflow-hidden rounded-full ring-4 ring-white shadow-2xl shadow-primary-900/20">
                  <img
                    src={founderMessage.image}
                    alt={founderMessage.imageAlt}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Accent ring */}
                <div className="absolute -inset-1 rounded-full border-2 border-dashed border-accent-400/40" />
              </div>
            </div>

            {/* Quote */}
            <div
              className={`reveal-right ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.15s' }}
            >
              <Quote className="mb-4 h-10 w-10 text-accent-400/50" />
              <blockquote className="space-y-4">
                <p className="font-serif text-lg italic leading-relaxed text-charcoal-500 sm:text-xl">
                  {founderMessage.message}
                </p>
              </blockquote>
              <div className="mt-6 border-l-3 border-accent-400 pl-4">
                <p className="font-serif text-lg font-bold text-primary-700">
                  {founderMessage.signature}
                </p>
                <p className="text-sm text-charcoal-400">
                  {founderMessage.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
