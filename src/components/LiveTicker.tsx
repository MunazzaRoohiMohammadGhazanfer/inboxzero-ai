import { TICKER_ITEMS } from '../data/mailmindData';

export default function LiveTicker() {
  const tickerTrack = TICKER_ITEMS.join('  •  ');

  return (
    <div
      aria-label="Live MailMind OS activity"
      className="w-full h-9 bg-slate-900 dark:bg-[#050814] text-slate-100 border-b border-slate-800/80 dark:border-blue-500/20 overflow-hidden flex items-center text-xs font-medium"
    >
      <div className="flex w-max animate-ticker whitespace-nowrap select-none">
        <span className="px-6 tracking-wide">
          {tickerTrack}
          <span className="mx-6 text-slate-500">•</span>
        </span>
        <span className="px-6 tracking-wide" aria-hidden="true">
          {tickerTrack}
          <span className="mx-6 text-slate-500">•</span>
        </span>
        <span className="px-6 tracking-wide" aria-hidden="true">
          {tickerTrack}
          <span className="mx-6 text-slate-500">•</span>
        </span>
      </div>
    </div>
  );
}
