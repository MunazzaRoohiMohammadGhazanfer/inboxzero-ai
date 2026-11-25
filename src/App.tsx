import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import LiveTicker from './components/LiveTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import FocusScoreDemo from './components/FocusScoreDemo';
import AgentsSection from './components/AgentsSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import LiveDemoCtaSection from './components/LiveDemoCtaSection';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import AskEmmaWidget from './components/AskEmmaWidget';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('mailmind-theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('mailmind-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('mailmind-theme', 'light');
    }
  }, [isDark]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white dark:bg-[#0A0F1E] text-slate-900 dark:text-slate-100 flex flex-col overflow-x-hidden transition-colors duration-300">
        {/* Global Animated Gradient Mesh Glow Backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
        >
          <div className="animate-mesh-slow absolute top-[38%] -left-40 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_65%)] blur-3xl" />
          <div className="animate-mesh-slow absolute top-[62%] -right-40 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.08),rgba(59,130,246,0.08),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(249,115,22,0.12),rgba(59,130,246,0.16),transparent_65%)] blur-3xl" />
        </div>

        <CursorGlow />
        <LiveTicker />
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

        <main className="flex-1">
          <HeroSection />
          <LogoMarquee />
          <ProblemSection />
          <FeaturesSection />
          <FocusScoreDemo />
          <AgentsSection />
          <HowItWorksSection />
          <TestimonialsCarousel />
          <LiveDemoCtaSection />
        </main>

        <Footer />
        <AskEmmaWidget />
      </div>
    </MotionConfig>
  );
}
