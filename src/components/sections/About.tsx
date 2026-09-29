import { aboutContent } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lotus } from '@/components/Lotus';

export function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-cream-100">
      {/* Decorative lotus watermark */}
      <Lotus className="pointer-events-none absolute -right-16 top-10 w-72 opacity-[0.04]" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div
          ref={textRef}
          className={`reveal-left ${textVisible ? 'is-visible' : ''}`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-500">
            About Saarthii
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-primary-700 sm:text-4xl">
            {aboutContent.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {aboutContent.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-charcoal-500 sm:text-lg"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          className={`reveal-right ${imgVisible ? 'is-visible' : ''}`}
        >
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-accent-400/30" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/15">
              <img
                src={aboutContent.image}
                alt={aboutContent.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="font-serif text-lg font-bold text-primary-600">
                Section 8
              </p>
              <p className="text-xs text-charcoal-400">Non-Profit Org.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
