import { useState, useEffect } from 'react';
import {
  FolderGit2, Github, X, Target, Lightbulb,
  Wrench, ListChecks, TrendingUp, Calendar, CheckCircle2, ArrowUpRight,
} from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import {
  ScrollReveal, SpotlightCard, GradientText, MagneticButton,
} from '@/components/animations';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const featured = projects.find((p) => p.variant === 'featured')!;
  const others = projects.filter((p) => p.variant !== 'featured');

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="section-label">
              <FolderGit2 size={14} />
              03 — Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#F1F5F3]">
            Featured <GradientText text="Projects" />
          </h2>
        </ScrollReveal>

        {/* Featured project — large card */}
        <ScrollReveal delay={100}>
          <SpotlightCard
            className="p-6 sm:p-8 md:p-10 mb-6"
            glowColor="rgba(0,214,163,0.12)"
          >
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Left: info */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald/10 text-emerald border border-emerald/20">
                    Featured
                  </span>
                  <span className="text-xs text-[#8B9691] font-mono flex items-center gap-1.5">
                    <Calendar size={12} />
                    {featured.date}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F5F3] mb-3">
                  {featured.name}
                </h3>
                <p className="text-[#8B9691] leading-relaxed mb-5">
                  {featured.description}
                </p>

                <div className="mb-5">
                  <p className="text-xs text-[#4a5450] font-mono uppercase tracking-wider mb-2">
                    Key Features
                  </p>
                  <div className="grid sm:grid-cols-2 gap-1.5">
                    {featured.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-[#8B9691]">
                        <CheckCircle2 size={14} className="mt-0.5 text-emerald flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <MagneticButton>
                    <button
                      onClick={() => setSelected(featured)}
                      className="btn-primary text-sm"
                    >
                      View Details
                      <ArrowUpRight size={16} />
                    </button>
                  </MagneticButton>
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Right: result highlight */}
              <div className="lg:col-span-2 flex lg:flex-col gap-4">
                <div className="flex-1 rounded-xl border border-emerald/20 bg-gradient-to-br from-emerald/8 to-emerald-light/5 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-xs text-[#8B9691] font-mono uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <p className="text-4xl sm:text-5xl font-extrabold text-gradient mb-1">
                    ~97%
                  </p>
                  <p className="text-sm text-[#8B9691]">Detection Accuracy</p>
                </div>
                <div className="flex-1 rounded-xl border border-base-600 bg-base-800/50 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-xs text-[#8B9691] font-mono uppercase tracking-wider mb-2">
                    Status
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-emerald">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
                    </span>
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 120 + 200}>
              <SpotlightCard
                className="p-6 sm:p-7 h-full cursor-pointer"
                glowColor="rgba(0,214,163,0.10)"
              >
                <button
                  onClick={() => setSelected(project)}
                  className="text-left w-full"
                  aria-label={`View details for ${project.name}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald/10 text-emerald border border-emerald/20">
                      {project.category ?? 'IoT'}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#4a5450] group-hover:text-emerald transition-colors"
                    />
                  </div>

                  <p className="text-xs text-[#8B9691] font-mono flex items-center gap-1.5 mb-2">
                    <Calendar size={12} />
                    {project.date}
                  </p>
                  <h3 className="text-xl font-bold text-[#F1F5F3] mb-2">{project.name}</h3>
                  <p className="text-sm text-[#8B9691] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-base-700">
                    <span className="text-sm text-emerald hover:text-emerald-light transition-colors">
                      View Details
                    </span>
                    {project.github && (
                      <span className="text-[#4a5450] hover:text-emerald transition-colors">
                        <Github size={16} />
                      </span>
                    )}
                  </div>
                </button>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const sections = [
    { icon: Target, label: 'Problem', content: project.detail.problem },
    { icon: Lightbulb, label: 'Approach', content: project.detail.approach },
    {
      icon: Wrench,
      label: 'Technologies',
      content: project.detail.technologies.join(' • '),
    },
    {
      icon: ListChecks,
      label: 'Implementation',
      content: project.detail.implementation,
    },
    { icon: TrendingUp, label: 'Result', content: project.detail.result },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-base-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-2xl border border-base-600 bg-base-850 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fadeInUp 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-base-850/95 backdrop-blur-md border-b border-base-700 px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#F1F5F3]">{project.name}</h3>
            <p className="text-xs text-[#8B9691] font-mono mt-1">{project.date}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-lg bg-base-800 border border-base-600 text-[#8B9691] hover:text-emerald hover:border-emerald/40 transition-all"
            aria-label="Close"
          >
            <X size={18} className="mx-auto" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-6">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div key={i} style={{ animation: `fadeInUp 0.4s ease-out ${i * 80}ms both` }}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-emerald" />
                  <h4 className="text-sm font-mono uppercase tracking-wider text-emerald/70">
                    {section.label}
                  </h4>
                </div>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#8B9691]">
                        <span className="text-emerald mt-1 flex-shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[#8B9691] leading-relaxed pl-6">
                    {section.content}
                  </p>
                )}
              </div>
            );
          })}

          {/* Links */}
          {project.github && (
            <div className="flex flex-wrap gap-3 pt-4 border-t border-base-700">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
