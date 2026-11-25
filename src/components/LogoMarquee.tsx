import { Calendar, Cpu, FileText, Layers, Mail, MessageSquare, Receipt, Zap } from 'lucide-react';
import { PARTNER_LOGOS, type PartnerLogo } from '../data/mailmindData';

const LOGO_ICON_MAP: Record<string, typeof Mail> = {
  'Gmail Sync': Mail,
  'Google Calendar': Calendar,
  'Gemini Engine': Cpu,
  Linear: Zap,
  Notion: FileText,
  Slack: MessageSquare,
  'Stripe Billing': Receipt,
  'Vercel Teams': Layers,
};

function LogoPill({ item }: { item: PartnerLogo }) {
  const Icon = LOGO_ICON_MAP[item.name] ?? Layers;
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass-card border border-slate-200/80 dark:border-blue-500/20 shadow-xs shrink-0">
      <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
        {item.name}
      </span>
      <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">
        {item.category}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section
      aria-label="Supported ecosystem integrations"
      className="py-10 sm:py-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-[#0A0F1E]/70 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Built to connect seamlessly with your daily stack
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white dark:from-[#0A0F1E] to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white dark:from-[#0A0F1E] to-transparent z-10"
        />

        <div className="flex w-max gap-4 animate-marquee-ltr">
          {PARTNER_LOGOS.map((item) => (
            <LogoPill key={`a-${item.name}`} item={item} />
          ))}
          {PARTNER_LOGOS.map((item) => (
            <LogoPill key={`b-${item.name}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
