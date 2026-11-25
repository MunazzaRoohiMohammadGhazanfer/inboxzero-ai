import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mailmindData';

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-[#0D1428]/70 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Real Workflow Impact
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
              Trusted by builders who protect their attention.
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl glass-card border border-slate-200 dark:border-blue-500/25 text-slate-700 dark:text-slate-200 hover:border-blue-500/50 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl glass-card border border-slate-200 dark:border-blue-500/25 text-slate-700 dark:text-slate-200 hover:border-blue-500/50 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="relative rounded-3xl glass-card border border-slate-200/90 dark:border-blue-500/25 p-6 sm:p-10 shadow-apple min-h-[250px] flex flex-col justify-between"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <Quote className="w-7 h-7 text-blue-600/80 dark:text-blue-400/80" aria-hidden="true" />

              <blockquote className="text-lg sm:text-2xl font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                “{active.quote}”
              </blockquote>

              <div className="pt-5 border-t border-slate-200/80 dark:border-slate-700/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {active.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {active.role} · {active.company}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-mono tabular-nums font-semibold text-blue-600 dark:text-blue-400">
                  {active.outcome}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonial slides">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                idx === activeIndex
                  ? 'w-8 bg-blue-600 dark:bg-blue-400'
                  : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
