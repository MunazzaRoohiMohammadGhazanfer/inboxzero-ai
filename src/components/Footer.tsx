import { Mail, ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/mailmindData';

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-[#0A0F1E]/90 border-t border-slate-200 dark:border-slate-800 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-slate-200/80 dark:border-slate-800">
          <div className="space-y-2.5 max-w-xl">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-base tracking-tight">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <span>MailMind OS</span>
            </div>
            <p className="text-base font-semibold text-slate-900 dark:text-white pt-1">
              Built by Munazza — AI Full Stack Developer
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Open to Opportunities — AI Product / AI Full Stack / Android Roles
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#agents" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              14 Agents
            </a>
            <a href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              How it Works
            </a>
            <a
              href={LINKS.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>
            Disclaimer: Independent portfolio project, inspired by Gmail &amp; Gemini, not affiliated with Google LLC.
          </p>
          <p className="whitespace-nowrap shrink-0">MailMind OS · 2026</p>
        </div>
      </div>
    </footer>
  );
}
