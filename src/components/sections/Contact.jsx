import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { siteConfig, contactFormPurposes } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/lib/supabaseClient';

const initialState = {
  name: '',
  email: '',
  phone: '',
  purpose: contactFormPurposes[0],
  message: '',
};

export function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!form.message.trim()) errs.message = 'Please enter a message';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    const { error } = await supabase
      .from('contact_submissions')
      .insert([form]);

    if (error) {
      console.error('Supabase error:', error);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.phone,
      href: `tel:+${siteConfig.phoneIntl}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.address,
      href: siteConfig.mapsLink,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: siteConfig.instagramHandle,
      href: siteConfig.instagram,
    },
  ];

  return (
    <section id="contact" className="section-pad bg-cream-100">
      <div className="container-x">
        <div
          ref={ref}
          className={`mx-auto mb-12 max-w-2xl text-center reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-500">
            Get In Touch
          </p>

          <h2 className="font-serif text-3xl font-bold text-primary-700 sm:text-4xl">
            Contact Us
          </h2>

          <p className="mt-4 text-charcoal-500">
            Whether you want to volunteer, partner, or simply learn more — we&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Contact info + map */}
          <div className={`reveal-left ${isVisible ? 'is-visible' : ''}`}>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === Instagram ? '_blank' : undefined}
                    rel={item.icon === Instagram ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-x-1"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-100 transition-colors group-hover:bg-primary-600">
                      <Icon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-white" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">
                        {item.label}
                      </p>

                      <p className="text-base font-medium text-charcoal-700">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Embedded Google Map */}
            <div className="mt-6 overflow-hidden rounded-2xl shadow-md">
              <iframe
                src={siteConfig.mapsEmbed}
                title="Map showing Kadma, Jamshedpur"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`reveal-right ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-6 shadow-lg shadow-primary-900/8 sm:p-8"
            >
              {submitted && (
                <div
                  className="mb-5 flex items-center gap-3 rounded-xl bg-green-50 p-4 ring-1 ring-green-200"
                  style={{ animation: 'fadeDown 0.4s ease-out' }}
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                  <p className="text-sm font-medium text-green-700">
                    Thank you! Your message has been received. We&rsquo;ll get back to you soon.
                  </p>
                </div>
              )}

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal-600">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-charcoal-400/20 focus:border-primary-500'
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-600">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                        errors.email
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-charcoal-400/20 focus:border-primary-500'
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal-600">
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-charcoal-400/20 focus:border-primary-500'
                      }`}
                    />

                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Purpose dropdown */}
                <div>
                  <label htmlFor="purpose" className="mb-1.5 block text-sm font-medium text-charcoal-600">
                    I want to&hellip;
                  </label>

                  <select
                    id="purpose"
                    name="purpose"
                    value={form.purpose}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-charcoal-400/20 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
                  >
                    {contactFormPurposes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-600">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how you'd like to help or what you'd like to know..."
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-charcoal-400/20 focus:border-primary-500'
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
