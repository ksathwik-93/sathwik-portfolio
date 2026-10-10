import { User, GraduationCap, MapPin, Code2 } from 'lucide-react';
import { aboutText, personalInfo } from '@/data/portfolio';
import { ScrollReveal, FadeContent, GradientText } from '@/components/animations';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">
              <User size={14} />
              01 — About
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#F1F5F3]">
            About <GradientText text="Me" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Main text */}
          <ScrollReveal className="md:col-span-2" delay={100}>
            <div className="card-base p-6 sm:p-8">
              <div className="space-y-4">
                {aboutText.map((paragraph, i) => (
                  <FadeContent key={i} delay={i * 150}>
                    <p className="text-[#8B9691] leading-relaxed text-base sm:text-lg">
                      {paragraph}
                    </p>
                  </FadeContent>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick info cards */}
          <div className="flex flex-col gap-4">
            <ScrollReveal delay={200}>
              <div className="card-base p-5 flex items-start gap-4 hover:border-emerald/30 transition-colors duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#4a5450] mb-0.5">Status</p>
                  <p className="text-sm text-[#F1F5F3] font-medium">Final-Year CSE Student</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="card-base p-5 flex items-start gap-4 hover:border-emerald/30 transition-colors duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#4a5450] mb-0.5">Location</p>
                  <p className="text-sm text-[#F1F5F3] font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="card-base p-5 flex items-start gap-4 hover:border-emerald/30 transition-colors duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#4a5450] mb-0.5">Focus</p>
                  <p className="text-sm text-[#F1F5F3] font-medium">Full-Stack & ML Development</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
