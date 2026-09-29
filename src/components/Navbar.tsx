import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Lotus } from './Lotus';
import { navLinks, siteConfig } from '@/data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/95 shadow-[0_2px_20px_rgba(142,47,107,0.1)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        {/* Logo / wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <Lotus className="w-9 h-9 shrink-0" />
          <span
            className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-primary-600' : 'text-white'
            }`}
          >
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-charcoal-600 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
          className="btn-primary hidden lg:inline-flex !px-5 !py-2.5 text-xs"
        >
          Join Hands With Us
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden rounded-full p-2 transition-colors ${
            scrolled ? 'text-primary-600' : 'text-white'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 bg-cream-100/98 pb-6 pt-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block rounded-xl px-4 py-3 text-base font-medium text-charcoal-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="btn-primary w-full"
            >
              Join Hands With Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
