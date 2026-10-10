import { useState } from 'react';
import {
  Mail, Github, Linkedin, MapPin, Send, MessageSquare, User, CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { ScrollReveal, GradientText, MagneticButton } from '@/components/animations';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Opens the user's email client with a pre-filled message
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ksathwik-93',
      href: personalInfo.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/k-sathwik-k',
      href: personalInfo.linkedin,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">
              <Mail size={14} />
              07 — Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#F1F5F3]">
            Let's <GradientText text="Connect" />
          </h2>
          <p className="text-[#8B9691] mb-12 max-w-lg">
            Have an opportunity or just want to say hello? Feel free to reach out.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact info */}
          <ScrollReveal delay={100}>
            <div className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const content = (
                  <div className="card-base p-5 flex items-center gap-4 hover:border-emerald/30 transition-all duration-300 group h-full">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald/12 to-emerald-light/5 border border-base-600 flex items-center justify-center text-emerald group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#4a5450] mb-0.5">{link.label}</p>
                      <p className="text-sm text-[#F1F5F3] truncate">{link.value}</p>
                    </div>
                  </div>
                );
                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={link.label}>{content}</div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={200}>
            <div className="card-base p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald/10 border border-emerald/30 flex items-center justify-center text-emerald mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F1F5F3] mb-2">Message Ready!</h3>
                  <p className="text-sm text-[#8B9691] max-w-xs">
                    Your email client should have opened with a pre-filled message. If not,
                    you can reach me directly at{' '}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-emerald hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', message: '' });
                    }}
                    className="btn-secondary text-sm mt-6"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#8B9691] font-mono uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a5450]" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-base-800/60 border border-base-600 text-[#F1F5F3] text-sm
                          placeholder:text-[#4a5450] focus:border-emerald/40 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#8B9691] font-mono uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a5450]" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-base-800/60 border border-base-600 text-[#F1F5F3] text-sm
                          placeholder:text-[#4a5450] focus:border-emerald/40 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#8B9691] font-mono uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-[#4a5450]" />
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Your message..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-base-800/60 border border-base-600 text-[#F1F5F3] text-sm
                          placeholder:text-[#4a5450] focus:border-emerald/40 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  <MagneticButton className="w-full">
                    <button type="submit" className="btn-primary w-full">
                      <Send size={16} />
                      Send Message
                    </button>
                  </MagneticButton>

                  <p className="text-xs text-[#4a5450] text-center">
                    This opens your email client — no data is stored.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
