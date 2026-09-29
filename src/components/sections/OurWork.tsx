import { useState } from 'react';
import {
  GraduationCap,
  HandHeart,
  Scissors,
  Check,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { ourWork } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lotus } from '@/components/Lotus';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  HandHeart,
  Scissors,
  GraduationCap,
};

export function OurWork() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const active = ourWork[activeTab];
  const ActiveIcon = iconMap[active.icon];

  return (
    <section id="work" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream-200/60 to-cream-100">
      <Lotus className="pointer-events-none absolute -right-20 top-1/3 w-80 opacity-[0.03]" />

      <div className="container-x">
        <div
          ref={ref}
          className={`mx-auto mb-12 max-w-2xl text-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-500">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary-700 sm:text-4xl">
            Our Work So Far
          </h2>
          <p className="mt-4 text-charcoal-500">
            Three pillars of impact driving change across Jamshedpur and beyond.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-2 sm:gap-3">
          {ourWork.map((work, i) => {
            const Icon = iconMap[work.icon];
            return (
              <button
                key={work.title}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                  activeTab === i
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white text-charcoal-500 ring-1 ring-primary-100 hover:text-primary-600 hover:ring-primary-300'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span className="hidden sm:inline">{work.title}</span>
                <span className="sm:hidden">{work.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active content */}
        <div
          key={activeTab}
          className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
          style={{ animation: 'fadeIn 0.5s ease-out' }}
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/15">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              <p className="absolute bottom-4 left-5 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm">
                {active.caption}
              </p>
            </div>
          </div>

          {/* List */}
          <div className="order-1 lg:order-2">
            <div className="mb-5 flex items-center gap-3">
              {ActiveIcon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 ring-1 ring-primary-100">
                  <ActiveIcon className="h-6 w-6 text-primary-600" />
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold text-primary-700">
                {active.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {active.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-x-1"
                  style={{ animation: `fadeRight 0.4s ease-out ${i * 0.08}s both` }}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100">
                    <Check className="h-4 w-4 text-accent-600" />
                  </span>
                  <span className="text-base text-charcoal-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
