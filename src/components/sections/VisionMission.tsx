import { Target, Eye, Quote } from 'lucide-react';
import { visionMission } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lotus } from '@/components/Lotus';

export function VisionMission() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="vision" className="section-pad relative overflow-hidden bg-primary-700">
      {/* Decorative watermarks */}
      <Lotus className="pointer-events-none absolute -left-20 top-1/4 w-80 opacity-[0.05]" />
      <Lotus className="pointer-events-none absolute -right-20 bottom-10 w-64 opacity-[0.05]" />

      <div className="container-x relative">
        <div
          ref={ref}
          className={`mx-auto mb-14 max-w-2xl text-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-300">
            Our Purpose
          </p>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Vision, Mission &amp; Motto
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Vision */}
          <div
            className={`reveal-left ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="h-full rounded-3xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-500 hover:bg-white/10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-400/20 ring-1 ring-accent-400/30">
                <Eye className="h-7 w-7 text-accent-300" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-accent-300">
                Our Vision
              </h3>
              <p className="text-base leading-relaxed text-cream-100/90">
                {visionMission.vision}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className={`reveal-right ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="h-full rounded-3xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-500 hover:bg-white/10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-400/20 ring-1 ring-accent-400/30">
                <Target className="h-7 w-7 text-accent-300" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-accent-300">
                Our Mission
              </h3>
              <p className="text-base leading-relaxed text-cream-100/90">
                {visionMission.mission}
              </p>
            </div>
          </div>
        </div>

        {/* Motto — large centered quote */}
        <div
          className={`reveal-scale mx-auto mt-10 max-w-4xl text-center ${
            isVisible ? 'is-visible' : ''
          }`}
          style={{ transitionDelay: '0.35s' }}
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-accent-400/15 to-primary-400/15 px-8 py-12 ring-1 ring-white/10 sm:px-16 sm:py-16">
            <Quote className="mx-auto mb-4 h-10 w-10 text-accent-300/60" />
            <p className="font-serif text-2xl font-bold italic leading-tight text-white sm:text-3xl md:text-4xl">
              {visionMission.motto}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
