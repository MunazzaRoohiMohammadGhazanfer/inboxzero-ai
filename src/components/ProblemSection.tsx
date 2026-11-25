import { motion } from 'motion/react';
import { Clock, Inbox, ShieldAlert, Check } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-[#0D1428]/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
            Why Email Is Broken
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight [text-wrap:balance]">
            Professionals waste 3+ hours daily on email. Important mails get buried. Spam kills focus.
          </h2>
        </motion.div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before: Legacy Inbox */}
          <TiltCard
            maxTilt={3}
            className="rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-apple hover:shadow-apple-hover"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Legacy Chronological Inbox
              </h3>
              <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400">
                3.1 hrs / day lost
              </span>
            </div>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Endless context switching
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Checking unread counts fragments deep work every 11 minutes, costing hours of recovery time.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Inbox className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Critical threads buried by volume
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Client sign-offs and urgent deadlines sit mixed between automated notifications and CC chains.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Manual sorting &amp; repetitive replies
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Reading 40-reply threads and writing routine confirmations eats up your highest-energy morning hours.
                  </p>
                </div>
              </li>
            </ul>
          </TiltCard>

          {/* After: MailMind OS */}
          <TiltCard
            maxTilt={3}
            className="rounded-2xl glass-card border border-blue-200 dark:border-blue-500/35 p-6 sm:p-8 shadow-apple hover:shadow-apple-hover"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                MailMind OS Workflow
              </h3>
              <span className="text-xs font-mono tabular-nums font-semibold text-blue-600 dark:text-blue-400">
                30 sec / day digest
              </span>
            </div>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Signal separated before you open
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    14 AI agents silently triage, score priority, and hold low-value noise out of your Focus Mode view.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Long threads compressed to decisions
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Every complex chain arrives with an instant summary, extracted tasks, and a pre-written draft reply.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Private by architecture
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Zero ad-profiling and zero third-party model training on your personal or company correspondence.
                  </p>
                </div>
              </li>
            </ul>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
