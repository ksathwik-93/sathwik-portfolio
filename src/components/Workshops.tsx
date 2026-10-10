import { ShieldCheck, Wifi, type LucideIcon, GraduationCap } from 'lucide-react';
import { workshops } from '@/data/portfolio';
import { ScrollReveal, FadeContent, GradientText } from '@/components/animations';

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Wifi };

export default function Workshops() {
  return (
    <section className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">
              <GraduationCap size={14} />
              05 — Workshops
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#F1F5F3]">
            Workshops & <GradientText text="Extracurriculars" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {workshops.map((workshop, i) => {
            const Icon = iconMap[workshop.icon] ?? GraduationCap;
            return (
              <ScrollReveal key={workshop.title} delay={i * 120}>
                <div className="card-base p-6 sm:p-7 h-full hover:border-emerald/30 transition-all duration-500 group">
                  <FadeContent delay={i * 150}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/12 to-emerald-light/5 border border-base-600 flex items-center justify-center text-emerald group-hover:scale-110 transition-transform duration-300">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-semibold text-[#F1F5F3] leading-snug pt-1">
                        {workshop.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#8B9691] leading-relaxed mb-4">
                      {workshop.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {workshop.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </FadeContent>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
