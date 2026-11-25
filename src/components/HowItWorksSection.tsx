import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../data/mailmindData';
import TiltCard from './TiltCard';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            From 140 unread emails to clarity in three steps.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Designed to fit effortlessly into your morning workflow without changing how anyone emails you.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex"
            >
              <TiltCard
                maxTilt={4}
                className="w-full rounded-2xl glass-card border border-slate-200/90 dark:border-blue-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-apple hover:shadow-apple-hover"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold font-mono tabular-nums text-blue-600 dark:text-blue-400">
                      {item.step}
                    </span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      Step {idx + 1} of 3
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <p className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {item.detail}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
