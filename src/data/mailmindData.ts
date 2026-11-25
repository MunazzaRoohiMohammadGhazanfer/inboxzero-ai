export const LINKS = {
  liveDemo: 'https://ai.studio/apps/0c0dea59-74df-45eb-a645-13ca2080ce04?fullscreenApplet=true',
  github: 'https://github.com/MunazzaRoohiMohammadGhazanfer/mailmind-os',
} as const;

export const TICKER_ITEMS: string[] = [
  'Priya just saved 2 hrs',
  'Rahul connected Gmail',
  '1,204 mails summarized today',
  'Ananya got Focus Score 92',
];

export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: '14', label: 'AI Agents' },
  { value: '30 Sec', label: 'Daily Digest' },
  { value: '4x', label: 'Faster Triage' },
  { value: '100%', label: 'Private' },
];

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  bentoSpan: string;
  featured?: boolean;
  iconName:
    | 'Target'
    | 'Cpu'
    | 'Newspaper'
    | 'FileText'
    | 'PenLine'
    | 'Mic'
    | 'BarChart3'
    | 'Gauge';
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'focus-mode',
    title: 'Focus Mode',
    description:
      'Hides newsletters, cold pitches, and low-priority threads so only high-signal conversations stay on screen during deep work.',
    metric: 'Zero notification clutter · 94% signal ratio',
    bentoSpan: 'sm:col-span-2 lg:col-span-2',
    featured: true,
    iconName: 'Target',
  },
  {
    id: '14-ai-agents',
    title: '14 AI Agents',
    description:
      'Dedicated autonomous agents collaborate in parallel across triage, scheduling, finance, security, and drafting.',
    metric: 'Parallel agent pipeline',
    bentoSpan: 'sm:col-span-1 lg:col-span-1',
    iconName: 'Cpu',
  },
  {
    id: 'daily-digest',
    title: 'Daily Digest',
    description:
      'Synthesizes overnight email activity into a scannable morning briefing you can finish in thirty seconds.',
    metric: '30-second morning brief',
    bentoSpan: 'sm:col-span-1 lg:col-span-1',
    iconName: 'Newspaper',
  },
  {
    id: 'ai-summarize',
    title: 'AI Summarize',
    description:
      'Condenses multi-week, 40-reply threads into key decisions, blockers, and explicit next steps.',
    metric: 'Instant thread clarity',
    bentoSpan: 'sm:col-span-1 lg:col-span-1',
    iconName: 'FileText',
  },
  {
    id: 'ai-draft-reply',
    title: 'AI Draft Reply',
    description:
      'Prepares context-aware responses tuned to your voice and thread history, ready for one-tap review.',
    metric: 'One-tap approval',
    bentoSpan: 'sm:col-span-1 lg:col-span-1',
    iconName: 'PenLine',
  },
  {
    id: 'voice-search',
    title: 'Voice Search',
    description:
      'Ask natural spoken questions like "Find Sarah’s Q4 budget deck" and locate exact threads and attachments immediately.',
    metric: 'Semantic audio lookup · < 200ms',
    bentoSpan: 'sm:col-span-2 lg:col-span-2',
    featured: true,
    iconName: 'Mic',
  },
  {
    id: 'email-analytics',
    title: 'Email Analytics',
    description:
      'Visualizes response latency, peak inflow hours, and sender load so you understand where your attention goes.',
    metric: 'Actionable time telemetry',
    bentoSpan: 'sm:col-span-1 lg:col-span-2',
    iconName: 'BarChart3',
  },
  {
    id: 'focus-score',
    title: 'Focus Score',
    description:
      'Measures daily attention efficiency by tracking deep-work streaks against noise deflected automatically.',
    metric: 'Daily attention index · 0–100',
    bentoSpan: 'sm:col-span-1 lg:col-span-2',
    iconName: 'Gauge',
  },
];

export type AgentCategory = 'all' | 'triage' | 'writing' | 'intelligence';

export interface AgentItem {
  number: string;
  name: string;
  description: string;
  category: Exclude<AgentCategory, 'all'>;
  bentoSpan: string;
  featured?: boolean;
  iconName:
    | 'ArrowUpDown'
    | 'ShieldOff'
    | 'Sun'
    | 'AlignLeft'
    | 'MessageSquareCode'
    | 'CheckSquare'
    | 'CalendarClock'
    | 'Radar'
    | 'Receipt'
    | 'Crown'
    | 'ShieldCheck'
    | 'AudioLines'
    | 'Sparkles'
    | 'Activity';
}

export const AI_AGENTS: AgentItem[] = [
  {
    number: '01',
    name: 'Priority Triage Agent',
    description: 'Ranks incoming mail by deadline urgency, sender authority, and active project context.',
    category: 'triage',
    bentoSpan: 'md:col-span-2',
    featured: true,
    iconName: 'ArrowUpDown',
  },
  {
    number: '02',
    name: 'Focus Shield Agent',
    description: 'Mutes marketing blasts and cold outreach automatically during scheduled deep-work blocks.',
    category: 'triage',
    bentoSpan: 'md:col-span-1',
    iconName: 'ShieldOff',
  },
  {
    number: '03',
    name: 'Daily Digest Agent',
    description: 'Compiles overnight threads into a clean 30-second executive brief every morning.',
    category: 'intelligence',
    bentoSpan: 'md:col-span-1',
    iconName: 'Sun',
  },
  {
    number: '04',
    name: 'Thread Summarizer Agent',
    description: 'Distills 40-message chains into three clear bullet points and owner decisions.',
    category: 'intelligence',
    bentoSpan: 'md:col-span-1',
    iconName: 'AlignLeft',
  },
  {
    number: '05',
    name: 'Smart Reply Agent',
    description: 'Drafts accurate, personalized responses that match your natural writing tone.',
    category: 'writing',
    bentoSpan: 'md:col-span-1',
    iconName: 'MessageSquareCode',
  },
  {
    number: '06',
    name: 'Action Extractor Agent',
    description: 'Captures commitments, due dates, and deliverables directly from unstructured prose.',
    category: 'writing',
    bentoSpan: 'md:col-span-2',
    featured: true,
    iconName: 'CheckSquare',
  },
  {
    number: '07',
    name: 'Meeting Scheduler Agent',
    description: 'Detects calendar requests and proposes conflict-free meeting windows in one click.',
    category: 'writing',
    bentoSpan: 'md:col-span-1',
    iconName: 'CalendarClock',
  },
  {
    number: '08',
    name: 'Follow-Up Radar Agent',
    description: 'Monitors sent messages awaiting replies and surfaces gentle nudges before deadlines pass.',
    category: 'triage',
    bentoSpan: 'md:col-span-1',
    iconName: 'Radar',
  },
  {
    number: '09',
    name: 'Receipt & Finance Agent',
    description: 'Detects invoices, SaaS renewals, and expense receipts for instant accounting export.',
    category: 'intelligence',
    bentoSpan: 'md:col-span-1',
    iconName: 'Receipt',
  },
  {
    number: '10',
    name: 'VIP Concierge Agent',
    description: 'Elevates messages from key clients, managers, and recruiters above general traffic.',
    category: 'triage',
    bentoSpan: 'md:col-span-1',
    iconName: 'Crown',
  },
  {
    number: '11',
    name: 'Phishing & Spam Guard',
    description: 'Inspects sender headers and link intent to quarantine spoofing attempts before you click.',
    category: 'triage',
    bentoSpan: 'md:col-span-2',
    featured: true,
    iconName: 'ShieldCheck',
  },
  {
    number: '12',
    name: 'Voice Query Agent',
    description: 'Converts spoken search prompts into semantic queries across years of archived mail.',
    category: 'intelligence',
    bentoSpan: 'md:col-span-1',
    iconName: 'AudioLines',
  },
  {
    number: '13',
    name: 'Tone & Clarity Coach',
    description: 'Reviews outgoing drafts to eliminate ambiguity and sharpen executive readability.',
    category: 'writing',
    bentoSpan: 'md:col-span-1',
    iconName: 'Sparkles',
  },
  {
    number: '14',
    name: 'Focus Score Agent',
    description: 'Calculates your daily focus ratio based on triage speed and distractions prevented.',
    category: 'intelligence',
    bentoSpan: 'md:col-span-2',
    featured: true,
    iconName: 'Activity',
  },
];

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Connect Inbox',
    description:
      'Authorize your mailbox with zero-retention privacy controls. MailMind OS reads headers and context without storing training copies.',
    detail: 'Read-scoped sync in under 10 seconds',
  },
  {
    step: '02',
    title: 'AI Sorts & Summarizes',
    description:
      'All 14 AI agents classify urgency, isolate spam, summarize multi-reply threads, and pre-draft replies to your open questions.',
    detail: '14 specialized agents run in parallel',
  },
  {
    step: '03',
    title: 'You Focus in 30 Seconds',
    description:
      'Open your Daily Digest, approve drafted responses in a single tap, and return to deep work with a measurable Focus Score.',
    detail: '4x faster path to Inbox Zero',
  },
];

export interface PartnerLogo {
  name: string;
  category: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'Gmail Sync', category: 'Mail' },
  { name: 'Google Calendar', category: 'Scheduling' },
  { name: 'Gemini Engine', category: 'Reasoning' },
  { name: 'Linear', category: 'Actions' },
  { name: 'Notion', category: 'Knowledge' },
  { name: 'Slack', category: 'Handoffs' },
  { name: 'Stripe Billing', category: 'Receipts' },
  { name: 'Vercel Teams', category: 'Alerts' },
];

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  outcome: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'I used to spend my first 90 minutes every morning wading through 160 Slack alerts and threads. MailMind OS gives me the three decisions that actually matter in 30 seconds.',
    name: 'Priya Nair',
    role: 'Staff Product Manager',
    company: 'Northstar Cloud',
    outcome: 'Saved 2.1 hrs daily · Focus Score 94',
  },
  {
    quote:
      'Having 14 specialized agents instead of one noisy chat sidebar changes everything. The Receipt Agent and Thread Summarizer alone replaced three browser extensions.',
    name: 'Rahul Deshmukh',
    role: 'Founding Engineer',
    company: 'Kinetix AI',
    outcome: '4x faster inbox triage across 3 accounts',
  },
  {
    quote:
      'The Smart Reply and Tone Coach agents nail my exact voice for executive updates. I approve drafts in one tap and stay focused on architecture reviews.',
    name: 'Ananya Sharma',
    role: 'VP of Engineering',
    company: 'Veridian Labs',
    outcome: 'Reached Inbox Zero for 28 straight days',
  },
  {
    quote:
      'Voice Search across four years of client correspondence feels instantaneous. Asking for last quarter’s signed SOW pulled the exact thread in under a second.',
    name: 'David Morales',
    role: 'Principal Solutions Architect',
    company: 'Meridian Systems',
    outcome: 'Zero missed client follow-ups in Q4',
  },
];
