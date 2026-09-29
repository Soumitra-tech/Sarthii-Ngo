import { Briefcase, School, Check, Sparkles } from 'lucide-react';
import type { ComponentType } from 'react';
import { upcomingProjects, whyTheseProjects } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lotus } from '@/components/Lotus';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Briefcase,
  School,
};

export function UpcomingProjects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-200/60"
    >
      <Lotus className="pointer-events-none absolute -left-16 top-10 w-72 opacity-[0.03]" />

      <div className="container-x">
        <div
          ref={ref}
          className={`mx-auto mb-14 max-w-2xl text-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-500">
            On the Horizon
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary-700 sm:text-4xl">
            Upcoming Projects
          </h2>
          <p className="mt-4 text-charcoal-500">
            New initiatives designed to deepen our impact in the community.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {upcomingProjects.map((project, i) => {
            const Icon = iconMap[project.icon];
            return (
              <div
                key={project.title}
                className={`reveal-scale ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="card-soft group relative h-full overflow-hidden p-8 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(142,47,107,0.12)]">
                  {/* Badge */}
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-600 ring-1 ring-accent-300/40">
                    <Sparkles className="h-3.5 w-3.5" />
                    {project.badge}
                  </span>

                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 ring-1 ring-primary-100 transition-transform duration-500 group-hover:scale-110">
                    {Icon && <Icon className="h-7 w-7 text-primary-600" />}
                  </div>

                  <h3 className="mb-1 pr-20 font-serif text-xl font-bold text-primary-700">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm font-medium text-charcoal-400">
                    {project.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {project.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5"
                        style={{ animation: `fadeRight 0.4s ease-out ${j * 0.06}s both` }}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50">
                          <Check className="h-3.5 w-3.5 text-primary-600" />
                        </span>
                        <span className="text-sm text-charcoal-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why These Projects strip */}
        <div
          className={`reveal mt-10 rounded-3xl bg-primary-700 px-6 py-8 text-center sm:px-12 ${
            isVisible ? 'is-visible' : ''
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <h3 className="mb-6 font-serif text-xl font-bold text-white sm:text-2xl">
            Why These Projects?
          </h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {whyTheseProjects.map((point, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-400/20 ring-1 ring-accent-400/30">
                  <Sparkles className="h-5 w-5 text-accent-300" />
                </div>
                <p className="text-sm leading-relaxed text-cream-100/90">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
