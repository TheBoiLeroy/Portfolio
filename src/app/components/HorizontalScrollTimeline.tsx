"use client";

import { useState, useMemo, useEffect, useRef, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "@/app/data/timeline";
import {
  SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql, SiSqlite, SiDocker,
  SiSlack, SiSpotify, SiJira, SiBitbucket, SiTensorflow, SiPytorch, SiNodedotjs, SiMui,
  SiFlutter, SiSupabase
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// --- Configuration ---
const TOOL_ICONS: Record<string, JSX.Element> = {
  Python: <SiPython />, Java: <FaJava />, "C++": <SiCplusplus />, HTML: <SiHtml5 />, CSS: <SiCss3 />,
  JavaScript: <SiJavascript />, TypeScript: <SiTypescript />, React: <SiReact />, "Next.js": <SiNextdotjs />,
  "material-ui": <SiMui />, "Tailwind CSS": <SiTailwindcss />, Django: <SiDjango />, PostgreSQL: <SiPostgresql />, 
  SQLite: <SiSqlite />, Docker: <SiDocker />, "Slack API": <SiSlack />, "Spotify API": <SiSpotify />, 
  Jira: <SiJira />, BitBucket: <SiBitbucket />, TensorFlow: <SiTensorflow />, PyTorch: <SiPytorch />, 
  "Node.js": <SiNodedotjs />, Flutter: <SiFlutter />, Supabase: <SiSupabase />
};

const TOOL_CATEGORIES = {
  Core: ["Flutter", "Next.js", "Python", "TypeScript", "JavaScript"],
  Backend: ["Supabase", "PostgreSQL", "Django", "Node.js", "SQLite", "Docker"],
  Frontend: ["React", "Tailwind CSS", "HTML", "CSS", "material-ui"],
  Systems: ["C++", "Java", "TensorFlow", "PyTorch"],
};

export default function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  // 1. Updated tool unlocker to support nested split cards
  const unlockedTools = useMemo(() => {
    const seen = new Set<string>();
    timelineData.slice(0, activeIndex + 1).forEach((step: any) => {
      // Standard layout
      if (step.tools) step.tools.split(/,\s*/).forEach((t: string) => seen.add(t.trim()));
      // Split card layout
      if (step.events) {
        step.events.forEach((ev: any) => {
          if (ev.tools) ev.tools.split(/,\s*/).forEach((t: string) => seen.add(t.trim()));
        });
      }
    });
    return seen;
  }, [activeIndex]);

  const activeStep: any = timelineData[activeIndex];

  const variants = {
    enter: (direction: number) => ({ y: direction > 0 ? 50 : -50, opacity: 0, scale: 0.95 }),
    center: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", bounce: 0.2 } },
    exit: (direction: number) => ({ y: direction < 0 ? 50 : -50, opacity: 0, scale: 0.95, transition: { duration: 0.3 } })
  };

  return (
    <div className="min-h-[100dvh] bg-[#131313] text-[#c3c5d8] font-sans flex flex-col items-center justify-between p-4 md:p-8 overflow-hidden selection:bg-[#2962ff] selection:text-white">
      
      <header className="w-full max-w-6xl flex justify-between items-center py-4 z-10">
        <div className="font-black text-xl text-white tracking-tighter">Ian Santos</div>
        <div className="text-sm font-bold tracking-widest text-[#2962ff] uppercase">Evolution</div>
      </header>

      <main className="flex-1 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 relative z-10 py-4">
        <div className="hidden md:block w-64 shrink-0">
          <ToolBelt activeTools={unlockedTools} isMobile={false} />
        </div>

        <div className="relative w-full max-w-4xl md:h-[500px] flex items-center justify-center perspective-[1000px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full bg-[#1c1b1b] border border-zinc-800 rounded-2xl p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden"
            >
              {/* Year Background Text */}
              <span className="text-6xl md:text-[10rem] font-black text-white/5 italic leading-none absolute top-4 right-8 md:-top-6 md:-right-6 pointer-events-none select-none z-0">
                {activeStep.year}
              </span>

              {/* 2. Conditionally Render Split View vs Standard View */}
              {activeStep.events ? (
                // --- SPLIT CARD LAYOUT ---
                <div className="flex flex-col md:flex-row gap-8 w-full h-full relative z-10 pt-10 md:pt-0">
                  {activeStep.events.map((ev: any, idx: number) => (
                    <div key={idx} className="flex-1 flex flex-col h-[200px] md:h-full border-b md:border-b-0 md:border-r border-zinc-800/50 pb-6 md:pb-0 md:pr-8 last:border-0 last:pr-0 last:pb-0">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{ev.title}</h3>
                      <p className="text-[#c3c5d8] text-sm md:text-base flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                        {ev.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                        {ev.tools?.split(',').map((t: string) => (
                          <span key={t} className="px-2 py-1 bg-zinc-800/50 text-[9px] font-bold text-[#2962ff] rounded uppercase tracking-widest border border-[#2962ff]/20 whitespace-nowrap">
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // --- STANDARD SINGLE LAYOUT ---
                <div className="flex flex-col h-full relative z-10 pt-10 md:pt-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 w-[80%]">
                    {activeStep.title}
                  </h2>
                  <p className="text-[#c3c5d8] md:text-lg leading-relaxed flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                    {activeStep.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-zinc-800/50">
                    {activeStep.tools?.split(',').map((t: string) => (
                      <span key={t} className="px-3 py-1 bg-zinc-800/50 text-[10px] font-bold text-[#2962ff] rounded uppercase tracking-widest border border-[#2962ff]/20">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="w-full py-2 z-20 flex flex-col items-center justify-center shrink-0">
        <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-2">Select Year</div>
        <YearWheel items={timelineData} activeIndex={activeIndex} onChange={navigate} />
      </footer>

      <div className="md:hidden">
        <ToolBelt activeTools={unlockedTools} isMobile={true} />
      </div>
    </div>
  );
}

// --- iOS Style Wheel Component ---
function YearWheel({ items, activeIndex, onChange }: { items: any[], activeIndex: number, onChange: (idx: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ITEM_HEIGHT = 48; // maps to h-12

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: activeIndex * ITEM_HEIGHT, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const index = Math.round(e.currentTarget.scrollTop / ITEM_HEIGHT);
    if (index !== activeIndex && index >= 0 && index < items.length) {
      onChange(index);
      
      // OPTIONAL: Native Haptic feedback when crossing into a new year
      if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(10); // Tiny physical tick
      }
    }
  };

  return (
    <div className="relative h-[144px] w-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] -webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)">
      <div className="absolute top-1/2 left-0 w-full h-12 -translate-y-1/2 bg-white/5 border-y border-zinc-700/50 rounded-lg pointer-events-none z-10"></div>
      <div ref={containerRef} onScroll={handleScroll} className="h-full overflow-y-auto snap-y snap-mandatory pt-[48px] pb-[48px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-20">
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          const isAdjacent = Math.abs(i - activeIndex) === 1;
          
          return (
            <div
              key={i}
              onClick={() => containerRef.current?.scrollTo({ top: i * ITEM_HEIGHT, behavior: 'smooth' })}
              className={`h-12 flex items-center justify-center snap-center cursor-pointer transition-all duration-300 select-none ${
                isActive ? "text-[#2962ff] text-3xl font-black scale-110" : isAdjacent ? "text-zinc-400 text-xl font-bold" : "text-zinc-600 text-lg font-semibold opacity-50"
              }`}
            >
              {item.year}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Toolbelt Component (Remains unchanged) ---
function ToolBelt({ activeTools, isMobile }: { activeTools: Set<string>, isMobile: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <div className="space-y-6 text-left w-full">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-[#2962ff] font-bold text-xs uppercase tracking-widest">Stack Explorer</h4>
        <span className="text-[10px] bg-[#2962ff]/20 text-[#2962ff] px-2 py-1 rounded font-bold">{activeTools.size} Tools</span>
      </div>
      {Object.entries(TOOL_CATEGORIES).map(([category, tools]) => {
        const visible = tools.filter(t => activeTools.has(t));
        if (visible.length === 0) return null;
        return (
          <div key={category}>
            <p className="text-[10px] text-zinc-500 font-bold uppercase mb-3">{category}</p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {visible.map(tool => (
                <motion.div layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={tool} className="flex items-center gap-3 text-white">
                  <span className="text-xl text-[#2962ff]">{TOOL_ICONS[tool] ?? "🔧"}</span>
                  <span className="text-xs font-semibold">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  if (!isMobile) return <div className="p-6 bg-[#1c1b1b] border border-zinc-800 rounded-2xl h-[500px] overflow-y-auto scrollbar-none">{content}</div>;

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed top-4 right-4 z-50 bg-[#1c1b1b] border border-zinc-800 text-white p-3 rounded-xl shadow-lg">
        <span className="material-symbols-outlined text-[#2962ff]">terminal</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 w-full bg-[#1c1b1b] border-t border-zinc-800 rounded-t-3xl p-8 z-[101] max-h-[80vh] overflow-y-auto">
              <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}