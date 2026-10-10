import {
  Code2, Layers, Wrench, Database, Palette, type LucideIcon,
} from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import { ScrollReveal, SpotlightCard, TiltedCard, GradientText } from '@/components/animations';

const iconMap: Record<string, LucideIcon> = {
  Code2, Layers, Wrench, Database, Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">
              <Code2 size={14} />
              02 — Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#F1F5F3]">
            Technical <GradientText text="Arsenal" />
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <ScrollReveal key={group.title} delay={i * 80}>
                <TiltedCard maxTilt={4}>
                  <SpotlightCard className="h-full p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald/15 to-emerald-light/5 border border-base-600 flex items-center justify-center text-emerald">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-[#F1F5F3]">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </TiltedCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
