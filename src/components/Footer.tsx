import { Github, Linkedin, Mail, ArrowUp, Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { GradientText } from '@/components/animations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-base-700/50 py-12 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-content">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: identity */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-1">
              <GradientText text="K Sathwik Karanth" />
            </h3>
            <p className="text-sm text-[#8B9691]">
              Final-Year Computer Science & Engineering Student
            </p>
          </div>

          {/* Center: links */}
          <div className="flex items-center gap-3">
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

          {/* Right: back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[#8B9691] hover:text-emerald transition-colors group"
          >
            Back to Top
            <span className="w-8 h-8 rounded-lg border border-base-600 bg-base-800 flex items-center justify-center group-hover:border-emerald/40 transition-colors">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-base-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4a5450]">
            © {new Date().getFullYear()} K Sathwik Karanth. Built with React & Tailwind CSS.
          </p>
          <a
            href="/portfolio.zip"
            download
            className="inline-flex items-center gap-2 text-xs text-[#4a5450] hover:text-emerald transition-colors"
          >
            <Download size={14} />
            Download Source Code (.zip)
          </a>
        </div>
      </div>
    </footer>
  );
}
