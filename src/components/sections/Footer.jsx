import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/content';
import { Lotus } from '@/components/Lotus';

export function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-800 text-cream-100/70">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Lotus className="w-9 h-9 shrink-0" />
              <span className="font-serif text-2xl font-bold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3 font-serif text-base italic text-accent-300">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              A Section 8 non-profit empowering women, educating children, and uplifting communities in Jamshedpur, Jharkhand.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-serif text-base font-bold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-base font-bold text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+${siteConfig.phoneIntl}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-accent-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-accent-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-accent-300"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-accent-400" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h3 className="mb-4 font-serif text-base font-bold text-white">
              Registration
            </h3>
            <p className="text-sm leading-relaxed">
              {siteConfig.regNo}
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Section 8 Non-Profit Organization
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Founded by {siteConfig.founder}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm">
              &copy; 2026 {siteConfig.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-sm">
              Made with <Heart className="h-4 w-4 fill-accent-400 text-accent-400" /> for a better tomorrow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
