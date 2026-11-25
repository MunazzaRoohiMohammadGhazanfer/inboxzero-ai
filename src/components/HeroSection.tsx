import { useRef, useState, type MouseEvent } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Gauge,
  Lock,
  Newspaper,
  PenLine,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import { HERO_STATS, LINKS } from '../data/mailmindData';

type PreviewTab = 'focus' | 'digest' | 'draft';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('focus');
  const [draftSent, setDraftSent] = useState(false);

  const mockupRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax on hero background gradient mesh
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const handleMockupMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = mockupRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 7;
    const rotateX = (0.5 - y) * 5;

    el.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  const handleMockupMouseLeave = () => {
    const el = mockupRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24"
    >
      {/* Subtle Parallax Animated Purple-Blue-Orange Gradient Mesh */}
      <motion.div
        style={{ y: meshY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="animate-mesh-slow absolute -top-28 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.16),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_55%_75%,rgba(249,115,22,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.28),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(37,99,235,0.28),transparent_55%),radial-gradient(circle_at_55%_75%,rgba(249,115,22,0.16),transparent_55%)] blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Centered Apple/Google Product Launch Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-tight mb-4">
            MailMind OS · The AI Email Operating System
          </p>

          <h1
            className="font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] [text-wrap:balance]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Your Inbox, Reimagined by AI.
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Email was built to deliver messages. I built it to understand them.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={LINKS.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm hover:shadow active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0A0F1E]"
            >
              <span>Try Live Demo</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-xl text-base font-semibold text-slate-900 dark:text-white glass-card border border-slate-200 dark:border-blue-500/30 hover:border-slate-300 dark:hover:border-blue-400/60 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0A0F1E]"
            >
              <span>View on GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-slate-400" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* 3D Tilt Hero Mockup + Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 sm:mt-16"
        >
          {/* Floating Card 1: AI Summarized in 2 sec */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl glass-card border border-slate-200/90 dark:border-purple-500/35 shadow-apple absolute -top-5 -left-4 z-20 pointer-events-none"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                AI Summarized in 2 sec
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">
                40-reply thread distilled
              </p>
            </div>
          </motion.div>

          {/* Floating Card 2: Focus Score 92 */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl glass-card border border-slate-200/90 dark:border-blue-500/35 shadow-apple absolute -bottom-5 -right-4 z-20 pointer-events-none"
          >
            <span className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Gauge className="w-4 h-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap font-mono tabular-nums">
                Focus Score 92
              </p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                +2h 40m reclaimed today
              </p>
            </div>
          </motion.div>

          {/* Mobile Compact Floating Highlights */}
          <div className="flex lg:hidden items-center justify-center gap-3 mb-4 flex-wrap">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-slate-200/90 dark:border-purple-500/35 shadow-xs text-xs font-semibold text-slate-900 dark:text-white"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span>AI Summarized in 2 sec</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-slate-200/90 dark:border-blue-500/35 shadow-xs text-xs font-semibold font-mono tabular-nums text-slate-900 dark:text-white"
            >
              <Gauge className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Focus Score 92</span>
            </motion.div>
          </div>

          {/* 3D Mouse-Tilt Glassmorphic Workspace Mockup */}
          <div
            ref={mockupRef}
            onMouseMove={handleMockupMouseMove}
            onMouseLeave={handleMockupMouseLeave}
            style={{
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform',
            }}
            className="rounded-2xl glass-card border border-slate-200/90 dark:border-blue-500/30 p-2 sm:p-3 shadow-apple"
          >
            <div className="rounded-xl bg-white/95 dark:bg-[#0D1428]/95 border border-slate-200/80 dark:border-slate-800 overflow-hidden">
              {/* Window Chrome & Interactive Mode Switcher */}
              <div className="px-4 sm:px-6 py-3.5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50/80 dark:bg-[#0A0F1E]/80">
                <div className="flex items-center justify-between sm:justify-start gap-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
                    mailmind.os / workspace
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="MailMind OS workspace views"
                  className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800/90 rounded-lg overflow-x-auto no-scrollbar"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'focus'}
                    onClick={() => setActiveTab('focus')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold active:scale-[0.98] transition-all whitespace-nowrap shrink-0 min-h-[34px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      activeTab === 'focus'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Target className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>Focus Mode</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'digest'}
                    onClick={() => setActiveTab('digest')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold active:scale-[0.98] transition-all whitespace-nowrap shrink-0 min-h-[34px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      activeTab === 'digest'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Newspaper className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>30s Digest</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'draft'}
                    onClick={() => setActiveTab('draft')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold active:scale-[0.98] transition-all whitespace-nowrap shrink-0 min-h-[34px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      activeTab === 'draft'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <PenLine className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>AI Draft Reply</span>
                  </button>
                </div>
              </div>

              {/* Interactive Tab Panels */}
              <div className="p-5 sm:p-8">
                {activeTab === 'focus' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          Priority Signal · 3 threads requiring action
                        </span>
                        <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400">
                          137 low-signal hidden
                        </span>
                      </div>

                      <div className="p-4 rounded-xl border border-blue-200/80 dark:border-blue-500/35 bg-blue-50/40 dark:bg-blue-500/10">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            Elena Vance · VP Engineering
                          </span>
                          <span className="text-xs font-mono tabular-nums text-blue-700 dark:text-blue-400 font-medium">
                            Priority 98 · Due Today 4:00 PM
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-slate-800 dark:text-slate-100">
                          Q4 Architecture Sign-off & Inference Latency Targets
                        </p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          Summary: Requests final confirmation on regional failover thresholds before the 4 PM release freeze.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0F1E]/70">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            Marcus Chen · Product Design
                          </span>
                          <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400">
                            Priority 89 · Meeting Request
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-slate-800 dark:text-slate-100">
                          Android Companion App Handoff Review
                        </p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          Summary: Proposed Thursday 10:30 AM PST. Meeting Scheduler Agent confirmed your calendar is open.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0F1E]/70">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            Stripe Billing · Finance Radar
                          </span>
                          <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400">
                            Priority 76 · Invoice #4092
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-slate-800 dark:text-slate-100">
                          Cloud Compute Statement Ready for Approval
                        </p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          Summary: Receipt Agent extracted $412.80 total and tagged under Infrastructure Q4.
                        </p>
                      </div>
                    </div>

                    {/* Right Rail Summary */}
                    <div className="lg:col-span-4 rounded-xl border border-slate-200 dark:border-blue-500/25 bg-slate-50/80 dark:bg-[#0A0F1E]/85 p-5 space-y-5">
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Daily Focus Score
                        </p>
                        <p className="mt-1 text-3xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                          92 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ 100</span>
                        </p>
                      </div>
                      <div className="space-y-2.5 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-sm">
                        <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                            <span>Spam & Noise Blocked</span>
                          </span>
                          <span className="font-mono tabular-nums font-semibold">42</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                            <span>Time Reclaimed Today</span>
                          </span>
                          <span className="font-mono tabular-nums font-semibold">2h 40m</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                            <span>Local Privacy Mode</span>
                          </span>
                          <span className="font-mono font-semibold text-slate-900 dark:text-white">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'digest' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0A0F1E]/70">
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        01 · Urgent Decisions
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                        2 approvals before 4 PM
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Elena needs sign-off on latency thresholds; Finance flagged Cloud Invoice #4092 for monthly close.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0A0F1E]/70">
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        02 · Calendar & Follow-ups
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                        1 open slot matched
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Marcus requested a Thursday 10:30 AM PST design sync. Draft confirmation is queued for your approval.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0A0F1E]/70">
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        03 · Deflected Noise
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                        137 threads bundled
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        28 newsletters archived to Reading Queue, 67 automated alerts collapsed, and 42 cold pitches muted.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'draft' && (
                  <div className="max-w-3xl mx-auto space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          Re: Q4 Architecture Sign-off & Inference Latency Targets
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          To: Elena Vance · Drafted by Smart Reply & Tone Coach Agents
                        </p>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        Tone: Concise Executive
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A0F1E]/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-2">
                      <p>Hi Elena,</p>
                      <p>
                        Confirmed — the regional failover thresholds look solid and stay well inside our p95 latency budget. You have my green light to proceed with the 4:00 PM release freeze.
                      </p>
                      <p>Best, Munazza</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Review and send in one click — nothing leaves without your approval.
                      </span>
                      <button
                        type="button"
                        onClick={() => setDraftSent((prev) => !prev)}
                        className={`inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-lg text-sm font-semibold active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                          draftSent
                            ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/35'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {draftSent ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                            <span>Approved & Queued (Reset Preview)</span>
                          </>
                        ) : (
                          <span>Approve & Send Draft</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full-Width 4-Column Stats Row */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 glass-card border border-slate-200 dark:border-blue-500/25 rounded-2xl divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800 shadow-apple">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`px-6 py-5 sm:py-6 text-center ${
                idx % 2 === 0 ? 'border-r border-slate-200 dark:border-slate-800 lg:border-r-0' : ''
              }`}
            >
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-mono tabular-nums">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
