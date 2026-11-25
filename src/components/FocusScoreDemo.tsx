import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
}

const CONFETTI_COLORS = ['#2563EB', '#8B5CF6', '#F97316', '#10B981', '#EC4899'];

export default function FocusScoreDemo() {
  const [emailsCleared, setEmailsCleared] = useState(12);
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const prevScoreRef = useRef(52);

  // Maps 0..50 emails cleared -> 40..98 Focus Score (hits 92 at 43 emails)
  const focusScore = Math.min(98, Math.round(40 + (emailsCleared / 50) * 58));

  useEffect(() => {
    const crossedNinety = prevScoreRef.current < 90 && focusScore >= 90;
    prevScoreRef.current = focusScore;

    if (!crossedNinety) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const pieces: ConfettiPiece[] = Array.from({ length: 24 }, (_, idx) => ({
      id: Date.now() + idx,
      x: (Math.random() - 0.5) * 280,
      y: -(60 + Math.random() * 140),
      rotate: (Math.random() - 0.5) * 360,
      color: CONFETTI_COLORS[idx % CONFETTI_COLORS.length],
    }));
    setConfettiPieces(pieces);

    const timeout = window.setTimeout(() => setConfettiPieces([]), 1200);
    return () => window.clearTimeout(timeout);
  }, [focusScore]);

  const getScoreState = () => {
    if (focusScore >= 90) {
      return {
        label: 'Peak Deep Work State',
        textClass: 'text-emerald-600 dark:text-emerald-400',
        barClass: 'bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500',
        ringClass: 'border-emerald-300/80 dark:border-emerald-500/40',
      };
    }
    if (focusScore >= 70) {
      return {
        label: 'Strong Focus Momentum',
        textClass: 'text-blue-600 dark:text-blue-400',
        barClass: 'bg-gradient-to-r from-blue-600 to-indigo-500',
        ringClass: 'border-blue-300/80 dark:border-blue-500/40',
      };
    }
    return {
      label: 'Inbox Triage Needed',
      textClass: 'text-amber-600 dark:text-amber-400',
      barClass: 'bg-gradient-to-r from-amber-500 to-orange-500',
      ringClass: 'border-amber-300/80 dark:border-amber-500/40',
    };
  };

  const scoreState = getScoreState();
  const minutesSaved = Math.round(emailsCleared * 2.8);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden rounded-3xl glass-card border ${scoreState.ringClass} p-6 sm:p-10 shadow-apple transition-colors duration-300`}
        >
          {/* Confetti Burst on 90+ */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-1/2 flex justify-center z-20"
          >
            {confettiPieces.map((piece) => (
              <motion.span
                key={piece.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0.9, rotate: 0 }}
                animate={{
                  opacity: 0,
                  x: piece.x,
                  y: piece.y,
                  scale: 1,
                  rotate: piece.rotate,
                }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ backgroundColor: piece.color }}
                className="absolute w-2.5 h-2.5 rounded-xs"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Interactive Focus Score Simulator
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
                  Slide to clear threads. Watch your Focus Score climb.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  See how MailMind OS converts cleared clutter into reclaimed deep-work time. Reach 90+ to trigger Peak Focus.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label
                    htmlFor="emails-cleared-slider"
                    className="font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Emails Cleared by Agents
                  </label>
                  <span className="font-mono tabular-nums font-semibold text-slate-900 dark:text-white">
                    {emailsCleared} / 50 threads
                  </span>
                </div>

                <input
                  id="emails-cleared-slider"
                  type="range"
                  min={0}
                  max={50}
                  value={emailsCleared}
                  onChange={(e) => setEmailsCleared(Number(e.target.value))}
                  className="w-full h-2.5 rounded-full appearance-none cursor-pointer bg-slate-200 dark:bg-slate-700 accent-blue-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
                />

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                  <span>0 cleared (40)</span>
                  <span>25 cleared (69)</span>
                  <span>45+ cleared (92+)</span>
                </div>
              </div>
            </div>

            {/* Live Animated Score Readout */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-50/90 dark:bg-[#0A0F1E]/85 border border-slate-200/80 dark:border-blue-500/25 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Live Focus Score
                </span>
                {focusScore >= 90 ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>90+ Unlocked</span>
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Target: 90+
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <motion.span
                  key={focusScore}
                  initial={{ scale: 0.94, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`text-5xl sm:text-6xl font-bold font-mono tabular-nums tracking-tight ${scoreState.textClass}`}
                >
                  {focusScore}
                </motion.span>
                <span className="text-lg font-mono text-slate-400 dark:text-slate-500">/ 100</span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  style={{ width: `${focusScore}%` }}
                  className={`h-full rounded-full transition-all duration-300 ${scoreState.barClass}`}
                />
              </div>

              <div className="pt-2 flex items-center justify-between text-xs sm:text-sm">
                <span className={`font-semibold flex items-center gap-1.5 ${scoreState.textClass}`}>
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span>{scoreState.label}</span>
                </span>
                <span className="font-mono tabular-nums text-slate-600 dark:text-slate-300">
                  +{minutesSaved} min saved
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
