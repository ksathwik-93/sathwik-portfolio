import { FileText, Eye, Download } from 'lucide-react';
import { ScrollReveal, GradientText, MagneticButton } from '@/components/animations';
import { personalInfo, RESUME_FILENAME } from '@/data/portfolio';

export default function ResumeCTA() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-base-700 bg-gradient-to-br from-base-800 to-base-900 p-8 sm:p-12 md:p-16 text-center">
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-light/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#F1F5F3]">
                Want to know <GradientText text="more?" />
              </h2>
              <p className="text-[#8B9691] leading-relaxed max-w-xl mx-auto mb-8 text-base sm:text-lg">
                Explore my complete resume for a detailed overview of my education, projects,
                skills, and certifications.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton>
                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    aria-label="View Resume in new tab"
                  >
                    <Eye size={18} />
                    View Resume
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={personalInfo.resume}
                    download={RESUME_FILENAME}
                    className="btn-secondary"
                    aria-label="Download Resume PDF"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </MagneticButton>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#4a5450] font-mono">
                <FileText size={14} />
                <span>PDF · Always up to date</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
