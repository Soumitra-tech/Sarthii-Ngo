import { collaborations } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Collaborations() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="collaborations" className="section-pad bg-cream-100">
      <div className="container-x">
        <div
          ref={ref}
          className={`mx-auto max-w-3xl text-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-500">
            Together We Rise
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary-700 sm:text-4xl">
            Our Collaborations
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal-500">
            {collaborations.text}
          </p>
        </div>

        {/* Placeholder logo slots */}
        <div
          className={`mt-12 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5 reveal-scale ${
            isVisible ? 'is-visible' : ''
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          {Array.from({ length: collaborations.logoCount }).map((_, i) => (
            <div
              key={i}
              className="flex h-24 items-center justify-center rounded-2xl border-2 border-dashed border-primary-200 bg-cream-50 text-sm font-medium text-charcoal-400 transition-colors hover:border-primary-400 hover:text-primary-600"
            >
              Partner Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
