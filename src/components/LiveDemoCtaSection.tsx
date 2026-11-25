import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/mailmindData';

export default function LiveDemoCtaSection() {
  return (
    <section id="demo" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-[#0D1428] border border-slate-800 dark:border-blue-500/35 text-white px-6 py-12 sm:px-12 sm:py-16 text-center shadow-apple"
        >
          {/* Subtle Ambient Gradient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3),rgba(139,92,246,0.18),transparent_70%)] blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-sm font-semibold text-blue-400">Interactive Experience</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white [text-wrap:balance] max-w-2xl mx-auto leading-tight">
              See your inbox run on 14 AI agents.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Launch the interactive MailMind OS live demo right in your browser—explore Focus Mode, Daily Digest, and Voice Search firsthand.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <a
                href={LINKS.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[54px] px-8 py-3.5 rounded-xl text-base sm:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span>Launch Live Demo</span>
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[54px] px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span>Inspect Code on GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
