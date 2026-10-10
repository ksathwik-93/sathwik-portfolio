import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useActiveSection, GradientText } from '@/components/animations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-base-950/85 backdrop-blur-md border-b border-base-700/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-content px-5 sm:px-8 md:px-12 lg:px-20 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-mono text-lg font-bold tracking-tight"
          >
            <GradientText text="KSK" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${isActive ? 'text-emerald' : ''}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-emerald to-emerald-light" />
                  )}
                </a>
              );
            })}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm px-4 py-2 rounded-lg border border-base-600 bg-base-800/60 text-[#8B9691] hover:text-emerald hover:border-emerald/40 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#8B9691] hover:text-emerald p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-base-950/98 backdrop-blur-lg pt-20 px-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xl py-3 px-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'text-emerald bg-base-800 border border-emerald/30'
                      : 'text-[#8B9691] hover:text-[#F1F5F3] hover:bg-base-850'
                  }`}
                  style={{ animation: `fadeInUp 0.3s ease-out ${i * 50}ms both` }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
