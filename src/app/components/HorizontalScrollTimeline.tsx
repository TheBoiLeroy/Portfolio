"use client";

import { useRef, useState, useMemo, JSX } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { timelineData } from "@/app/data/timeline";
import {
  SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql, SiSqlite, SiDocker,
  SiSlack, SiSpotify, SiJira, SiBitbucket, SiTensorflow, SiPytorch, SiNodedotjs, SiMui
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const toolIcons: Record<string, JSX.Element> = {
  Python: <SiPython />, Java: <FaJava />, "C++": <SiCplusplus />, HTML: <SiHtml5 />, CSS: <SiCss3 />,
  JavaScript: <SiJavascript />, TypeScript: <SiTypescript />, React: <SiReact />, "Next.js": <SiNextdotjs />,
  "material-ui": <SiMui />, "Tailwind CSS": <SiTailwindcss />, Django: <SiDjango />, PostgreSQL: <SiPostgresql />, SQLite: <SiSqlite />, Docker: <SiDocker />,
  "Slack API": <SiSlack />, "Spotify API": <SiSpotify />, Jira: <SiJira />, BitBucket: <SiBitbucket />,
  TensorFlow: <SiTensorflow />, PyTorch: <SiPytorch />, "Node.js": <SiNodedotjs />
};

export default function TimelineSteps() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  scrollYProgress.on("change", (p) => {
    const index = Math.floor(p * timelineData.length);
    setActiveIndex(index >= timelineData.length ? timelineData.length - 1 : index);
  });

  const toolCategories = {
    Languages: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    Frontend: ["HTML", "CSS", "React", "Next.js", "material-ui", "Tailwind CSS"],
    Backend: ["Django", "PostgreSQL", "SQLite", "Docker"],
    DevTools: ["Slack API", "Spotify API", "Jira", "BitBucket"],
    AI_ML: ["TensorFlow", "PyTorch", "NLP", "AI", "ML", "LangGraph", "LangChain"],
    Concepts: ["Full-Stack Dev"],
  };

  const collectedTools: string[] = useMemo(() => {
    const toolsSet = new Set<string>();
    for (let i = 0; i <= activeIndex; i++) {
      if (timelineData[i].tools) {
        timelineData[i].tools!.split(/,\s*/).forEach(tool => toolsSet.add(tool));
      }
    }
    return Array.from(toolsSet);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative">

      {/* 📍 Horizontal Progress Line */}
      <div className="fixed bottom-19 left-0 w-screen h-1 bg-gray-800 dark:bg-gray-600 rounded-full z-0">
        <motion.div
          style={{ scaleX: smoothProgress, originX: 0 }}
          className="h-full bg-blue-500 rounded-full"
        />
      </div>

      {/* 🧰 Toolbelt Column with Categories + Icons */}
      <div className="fixed top-19 right-6 w-72 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-xl shadow-md p-4 text-sm z-10 overflow-auto max-h-[80vh]">
        <h4 className="text-blue-600 font-bold text-base mb-2">My Tool Belt</h4>
        {Object.entries(toolCategories).map(([category, tools]) => {
          const filtered = tools.filter(tool => collectedTools.includes(tool));
          if (filtered.length === 0) return null;
          return (
            <div key={category} className="mb-4">
              <h5 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">{category}</h5>
              <ul className="space-y-1">
                {filtered.map(tool => (
                  <li key={tool} className="flex items-center gap-2">
                    <span className="text-lg">{toolIcons[tool] ?? "🔧"}</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* 🧱 Scrollable Steps */}
      {timelineData.map((item, i) => {
        const start = i / timelineData.length;
        const end = (i + 1) / timelineData.length;

        const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
        const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);

        return (
          <motion.div
            key={i}
            style={{ opacity, scale }}
            className="h-screen sticky top-0 flex items-start justify-center pt-24 pointer-events-none"
          >
            <div className="pointer-events-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 rounded-2xl shadow-lg border border-gray-300 dark:border-neutral-700 w-[90%] max-w-[1200px] px-12 py-14 text-left space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
                    {item.tools && (
                    <span className="text-xs italic text-gray-400 dark:text-gray-500">
                        {item.tools}
                    </span>
                    )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                </p>
                </div>
          </motion.div>
        );
      })}
      <motion.div
        style={{
            opacity: useTransform(scrollYProgress, [0.98, 1], [0, 1]),
            scale: useTransform(scrollYProgress, [0.98, 1], [0.95, 1]),
        }}
        className="h-screen sticky top-0 flex items-center justify-center"
        >
        <div className="pointer-events-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 rounded-2xl shadow-lg border border-gray-300 dark:border-neutral-700 w-[90%] max-w-[900px] px-8 py-12 text-center space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">Thank you for viewing my timeline!</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            I truly appreciate your time and interest in my journey. I hope it gave you a thoughtful glimpse into how I’ve grown and what I care about.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 italic">Let’s keep building something meaningful.</p>
        </div>
        </motion.div>
    </div>
  );
}