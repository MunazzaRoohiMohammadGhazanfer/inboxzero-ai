import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Send, X, AlertCircle, Calendar, DollarSign, Briefcase } from 'lucide-react';

interface UrgentCard {
  sender: string;
  subject: string;
  tag: string;
  icon: 'briefcase' | 'calendar' | 'dollar';
}

interface ChatMessage {
  id: string;
  role: 'emma' | 'user';
  text: string;
  urgentCards?: UrgentCard[];
}

const QUICK_CHIPS = [
  'Summarize my inbox',
  'Show urgent mails',
  'My Focus Score?',
  'Draft a reply',
] as const;

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'emma',
  text: "Hi! I'm Emma, your MailMind AI Assistant. I can summarize your inbox, find urgent mails, and boost your Focus Score. What do you want me to do?",
};

const URGENT_MAIL_CARDS: UrgentCard[] = [
  {
    sender: 'Boss',
    subject: 'Project Deadline',
    tag: 'Needs sign-off today',
    icon: 'briefcase',
  },
  {
    sender: 'HR',
    subject: 'Interview',
    tag: 'Schedule confirmation',
    icon: 'calendar',
  },
  {
    sender: 'Client',
    subject: 'Payment',
    tag: 'Invoice #4092 ready',
    icon: 'dollar',
  },
];

function EmmaAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  return (
    <span
      className={`${dims} rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm ring-1 ring-white/30`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <circle cx="16" cy="14" r="7.5" fill="white" fillOpacity="0.95" />
        <circle cx="13.5" cy="13.5" r="1.2" fill="#4C1D95" />
        <circle cx="18.5" cy="13.5" r="1.2" fill="#4C1D95" />
        <path
          d="M13.5 16.5C14.3 17.4 17.7 17.4 18.5 16.5"
          stroke="#4C1D95"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9 26C10.4 22.8 13 21.5 16 21.5C19 21.5 21.6 22.8 23 26"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function getEmmaResponse(input: string): Omit<ChatMessage, 'id' | 'role'> {
  const normalized = input.trim().toLowerCase();

  if (normalized.includes('summar')) {
    return {
      text: 'You have 24 mails. 3 Urgent from Boss, 5 Newsletters, 2 Meetings. I already summarized them. You saved 1.5 hours today!',
    };
  }

  if (normalized.includes('urgent')) {
    return {
      text: 'Here are the 3 urgent emails that need your attention right now:',
      urgentCards: URGENT_MAIL_CARDS,
    };
  }

  if (normalized.includes('focus') || normalized.includes('score')) {
    return {
      text: 'Your Focus Score is 92/100! Amazing. You cleared 18 mails today.',
    };
  }

  if (normalized === 'draft a reply') {
    return {
      text: 'Draft ready for Boss — Project Deadline: "Hi! Confirmed — our Q4 milestones are on track and ready for review by 4:00 PM today." Would you like me to queue it?',
    };
  }

  return {
    text: 'Got it! I checked your inbox and sorted it by priority for you.',
  };
}

export default function AskEmmaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const sendMessage = (rawText: string) => {
    const text = rawText.trim();
    if (!text || isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    timerRef.current = window.setTimeout(() => {
      const reply = getEmmaResponse(text);
      const emmaMessage: ChatMessage = {
        id: `emma-${Date.now()}`,
        role: 'emma',
        ...reply,
      };
      setMessages((prev) => [...prev, emmaMessage]);
      setIsTyping(false);
    }, 550);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <>
      {/* Floating Ask Emma Trigger Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          aria-expanded={isOpen}
          aria-label="Open Ask Emma AI Inbox Assistant"
          className="inline-flex items-center gap-3 min-h-[52px] pl-2.5 pr-4 py-2 rounded-full glass-card border border-purple-200/90 dark:border-purple-500/40 shadow-apple hover:shadow-apple-hover transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
        >
          <EmmaAvatar size="md" />
          <div className="text-left leading-tight">
            <span className="block text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">
              Ask Emma
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Online</span>
            </span>
          </div>
        </motion.button>
      </div>

      {/* ChatGPT-Style Glassmorphic Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            role="dialog"
            aria-label="Emma AI Inbox Assistant"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-5 z-50 sm:w-[400px] sm:h-[580px] sm:max-h-[calc(100vh-120px)] flex flex-col sm:rounded-3xl glass-card border-0 sm:border sm:border-slate-200/90 dark:sm:border-purple-500/30 shadow-apple overflow-hidden bg-white/95 dark:bg-[#0A0F1E]/95"
          >
            {/* Header */}
            <div className="px-4 py-3.5 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 bg-white/80 dark:bg-[#0F172A]/90">
              <div className="flex items-center gap-3 min-w-0">
                <EmmaAvatar size="lg" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Emma - Your AI Inbox Assistant
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>Online • Replies instantly</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Ask Emma chat"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'emma' && <EmmaAvatar size="sm" />}

                  <div
                    className={`max-w-[85%] space-y-2.5 ${
                      msg.role === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-slate-100/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200/70 dark:border-slate-700/70 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* 3 Urgent Mail Cards */}
                    {msg.urgentCards && (
                      <div className="space-y-2">
                        {msg.urgentCards.map((card) => (
                          <div
                            key={`${card.sender}-${card.subject}`}
                            className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-purple-500/30 shadow-xs flex items-center justify-between gap-3"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                                {card.icon === 'briefcase' && (
                                  <Briefcase className="w-4 h-4" aria-hidden="true" />
                                )}
                                {card.icon === 'calendar' && (
                                  <Calendar className="w-4 h-4" aria-hidden="true" />
                                )}
                                {card.icon === 'dollar' && (
                                  <DollarSign className="w-4 h-4" aria-hidden="true" />
                                )}
                              </span>
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                                  {card.sender} - {card.subject}
                                </p>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                                  {card.tag}
                                </p>
                              </div>
                            </div>
                            <AlertCircle
                              className="w-4 h-4 text-rose-500 shrink-0"
                              aria-hidden="true"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2.5">
                  <EmmaAvatar size="sm" />
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 text-xs font-medium text-slate-500 dark:text-slate-300 flex items-center gap-2">
                    <span className="flex gap-1" aria-hidden="true">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.1s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" />
                    </span>
                    <span>...Emma is typing</span>
                  </div>
                </div>
              )}

              <div ref={scrollEndRef} />
            </div>

            {/* Quick Chips + Input Bar */}
            <div className="px-4 pt-2.5 pb-4 border-t border-slate-200/80 dark:border-slate-800 bg-white/85 dark:bg-[#0F172A]/90 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {QUICK_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => sendMessage(chip)}
                    disabled={isTyping}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-500/20 hover:text-purple-700 dark:hover:text-purple-300 border border-slate-200/80 dark:border-slate-700 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Emma about your inbox..."
                  aria-label="Message Emma"
                  className="flex-1 min-h-[44px] px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/15 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message to Emma"
                  className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:opacity-95 active:scale-95 transition-all disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
