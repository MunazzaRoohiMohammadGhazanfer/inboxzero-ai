import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  AlignLeft,
  ArrowUpDown,
  AudioLines,
  CalendarClock,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Crown,
  MessageSquareCode,
  Radar,
  Receipt,
  ShieldCheck,
  ShieldOff,
  Sparkles,
  Sun,
} from 'lucide-react';
import { AI_AGENTS, type AgentCategory, type AgentItem } from '../data/mailmindData';
import TiltCard from './TiltCard';

const AGENT_ICON_MAP: Record<AgentItem['iconName'], typeof ArrowUpDown> = {
  ArrowUpDown,
  ShieldOff,
  Sun,
  AlignLeft,
  MessageSquareCode,
  CheckSquare,
  CalendarClock,
  Radar,
  Receipt,
  Crown,
  ShieldCheck,
  AudioLines,
  Sparkles,
  Activity,
};

const FILTER_OPTIONS: { id: AgentCategory; label: string }[] = [
  { id: 'all', label: 'All 14 Agents' },
  { id: 'triage', label: 'Triage & Shield' },
  { id: 'writing', label: 'Writing & Action' },
  { id: 'intelligence', label: 'Digest & Insights' },
];

export default function AgentsSection() {
  const [selectedCategory, setSelectedCategory] = useState<AgentCategory>('all');
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const visibleAgents =
    selectedCategory === 'all'
      ? AI_AGENTS
      : AI_AGENTS.filter((agent) => agent.category === selectedCategory);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section
      id="agents"
      className="py-16 sm:py-24 bg-slate-50/70 dark:bg-[#0D1428]/60 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Autonomous Architecture
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
              14 Specialized AI Agents. One Unified Inbox.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Instead of a single generic prompt, MailMind OS orchestrates fourteen focused agents—each engineered for a specific inbox responsibility.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter AI agents by capability"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800/90 rounded-xl self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === option.id}
                onClick={() => setSelectedCategory(option.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 min-h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  selectedCategory === option.id
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Controls for Horizontal Swipe Carousel */}
        <div className="mt-8 flex md:hidden items-center justify-between gap-3">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Swipe through {visibleAgents.length} agents
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              aria-label="Scroll agents left"
              className="inline-flex items-center justify-center min-h-[40px] min-w-[40px] rounded-xl glass-card border border-slate-200 dark:border-blue-500/25 text-slate-700 dark:text-slate-200 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              aria-label="Scroll agents right"
              className="inline-flex items-center justify-center min-h-[40px] min-w-[40px] rounded-xl glass-card border border-slate-200 dark:border-blue-500/25 text-slate-700 dark:text-slate-200 active:scale-95 transition-all"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile: Horizontal Swipe Carousel */}
        <div
          ref={mobileCarouselRef}
          className="mt-4 flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 no-scrollbar"
        >
          {visibleAgents.map((agent) => {
            const Icon = AGENT_ICON_MAP[agent.iconName];
            return (
              <article
                key={`mobile-${agent.number}`}
                className="snap-start shrink-0 w-[82vw] max-w-[320px] rounded-2xl glass-card border border-slate-200/90 dark:border-blue-500/25 p-5 shadow-apple flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <span className="text-xs font-mono tabular-nums text-slate-400 dark:text-slate-500">
                    Agent {agent.number}
                  </span>
                  <h3 className="mt-0.5 text-base font-semibold text-slate-900 dark:text-white tracking-tight">
                    {agent.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Desktop: Asymmetric Bento Grid with 3D Hover Tilt */}
        <div className="mt-10 sm:mt-12 hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {visibleAgents.map((agent) => {
            const Icon = AGENT_ICON_MAP[agent.iconName];
            const spanClass = selectedCategory === 'all' ? agent.bentoSpan : 'md:col-span-1';
            const isFeatured = selectedCategory === 'all' && agent.featured;

            return (
              <motion.div
                key={`desktop-${agent.number}`}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className={`${spanClass} flex`}
              >
                <TiltCard
                  maxTilt={4}
                  className={`w-full rounded-2xl glass-card border p-5 sm:p-6 shadow-apple hover:shadow-apple-hover flex items-start gap-4 ${
                    isFeatured
                      ? 'border-blue-200/90 dark:border-blue-500/35 bg-gradient-to-br from-white/90 via-blue-50/35 to-purple-50/25 dark:from-[#0F172A]/90 dark:via-blue-950/30 dark:to-purple-950/20'
                      : 'border-slate-200/90 dark:border-slate-800/90 hover:border-blue-300/70 dark:hover:border-blue-500/40'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-slate-400 dark:text-slate-500">
                      <span>Agent {agent.number}</span>
                    </div>
                    <h3 className="mt-0.5 text-base font-semibold text-slate-900 dark:text-white tracking-tight">
                      {agent.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
