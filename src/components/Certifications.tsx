import {
  Award, Coffee, Cpu, Sparkles, type LucideIcon,
} from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { ScrollReveal, SpotlightCard, GradientText } from '@/components/animations';

const iconMap: Record<string, LucideIcon> = { Coffee, Cpu, Sparkles };

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">
              <Award size={14} />
              04 — Certifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#F1F5F3]">
            <GradientText text="Certifications" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] ?? Award;
            return (
              <ScrollReveal key={cert.title} delay={i * 100}>
                <SpotlightCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/15 to-emerald-light/5 border border-base-600 flex items-center justify-center text-emerald">
                      <Icon size={22} />
                    </div>
                    <Award size={16} className="text-emerald/50" />
                  </div>
                  <h3 className="text-base font-semibold text-[#F1F5F3] mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-emerald/70 font-mono mb-3">{cert.issuer}</p>
                  <p className="text-sm text-[#8B9691] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
