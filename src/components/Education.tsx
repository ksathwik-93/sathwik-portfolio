import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { education } from '@/data/portfolio';
import { ScrollReveal, GradientText } from '@/components/animations';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">
              <GraduationCap size={14} />
              06 — Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#F1F5F3]">
            <GradientText text="Education" />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald via-emerald/30 to-transparent" />

            {/* Timeline node */}
            <div className="relative pl-16 sm:pl-20 pb-2">
              <div className="absolute left-3 sm:left-4 top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-base-950 border-2 border-emerald flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald animate-pulse-glow" />
              </div>

              <div className="card-base p-6 sm:p-8 hover:border-emerald/30 transition-all duration-500">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald/15 to-emerald-light/5 border border-base-600 flex items-center justify-center text-emerald">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#F1F5F3] leading-tight">
                        {education.institution}
                      </h3>
                      <p className="text-sm text-emerald/70 mt-0.5">
                        {education.degree}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="flex items-center gap-1.5 text-[#8B9691]">
                    <Calendar size={14} className="text-[#4a5450]" />
                    {education.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#8B9691]">
                    <MapPin size={14} className="text-[#4a5450]" />
                    {education.location}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-base-700">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-emerald" />
                    <span className="text-sm text-[#8B9691]">CGPA</span>
                  </div>
                  <span className="text-2xl font-bold text-gradient">{education.cgpa}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
