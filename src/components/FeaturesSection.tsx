import { motion } from 'motion/react';
import {
  BarChart3,
  Cpu,
  FileText,
  Gauge,
  Mic,
  Newspaper,
  PenLine,
  Target,
} from 'lucide-react';
import { FEATURES, type FeatureItem } from '../data/mailmindData';
import TiltCard from './TiltCard';

const ICON_MAP: Record<FeatureItem['iconName'], typeof Target> = {
  Target,
  Cpu,
  Newspaper,
  FileText,
  PenLine,
  Mic,
  BarChart3,
  Gauge,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
            Core Capabilities
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Built like an operating system for deep work.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Eight integrated capabilities arranged in an intentional Bento architecture—replacing manual inbox triage with quiet clarity.
          </p>
        </motion.div>

        {/* Bento Grid: Mix of Wide, Featured, and Compact Glass Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.iconName];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.04, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${feature.bentoSpan} flex`}
              >
                <TiltCard
                  maxTilt={feature.featured ? 4 : 5}
                  className={`group w-full rounded-2xl glass-card border p-6 sm:p-7 flex flex-col justify-between shadow-apple hover:shadow-apple-hover ${
                    feature.featured
                      ? 'border-blue-200/90 dark:border-blue-500/35 bg-gradient-to-br from-white/90 via-blue-50/40 to-purple-50/30 dark:from-[#0F172A]/90 dark:via-blue-950/35 dark:to-purple-950/25'
                      : 'border-slate-200/90 dark:border-slate-800/90 hover:border-blue-300/70 dark:hover:border-blue-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      {feature.featured && (
                        <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                          Flagship Module
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-semibold text-slate-900 dark:text-white tracking-tight ${
                        feature.featured ? 'text-xl sm:text-2xl' : 'text-lg'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <p className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800/80 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    {feature.metric}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
