import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { personalInfo, RESUME_FILENAME } from '@/data/portfolio';
import {
  BlurText,
  SplitText,
  ShinyText,
  MagneticButton,
} from '@/components/animations';

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="max-w-content w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-base-700 bg-base-800/60 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
          </span>
          <ShinyText text="Available for Opportunities" />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-[#F1F5F3]">
          <BlurText text="K Sathwik Karanth" delay={200} />
        </h1>

        {/* Headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#8B9691] mb-3 font-medium">
          <SplitText text={personalInfo.headline} delay={500} />
        </p>

        {/* Focus areas */}
        <p className="text-sm sm:text-base text-[#8B9691] mb-6 font-mono">
          <SplitText
            text={personalInfo.focusAreas}
            delay={800}
            highlightWords={['Full-Stack', 'Software', 'Machine Learning']}
          />
        </p>

        {/* Introduction */}
        <div className="max-w-2xl mx-auto mb-10">
          <SplitText
            text={personalInfo.intro}
            className="text-base sm:text-lg text-[#8B9691] leading-relaxed"
            delay={1100}
          />
        </div>

        {/* Primary buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <MagneticButton>
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects
              <ArrowDown size={18} />
            </button>
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

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="social-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#4a5450]">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-base-600 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
