import { BookOpen, HeartHandshake, Scale, Sparkles } from 'lucide-react';
import { coreValues } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap = {
  Sparkles,
  BookOpen,
  Scale,
  HeartHandshake,
};

export function CoreValues() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="values" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-200/60">
      <div className="container-x">
        <div
          ref={ref}
          className={`mx-auto mb-14 max-w-2xl text-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-500">
            What We Stand For
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary-700 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-charcoal-500">
            The principles that guide every action we take and every life we touch.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={value.title}
                className={`reveal-scale delay-${(i + 1) * 100} ${
                  isVisible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="card-soft group h-full p-7 text-center hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(142,47,107,0.12)]">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 ring-1 ring-primary-100 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {Icon && <Icon className="h-8 w-8 text-primary-600" />}
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-primary-700">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-500">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
