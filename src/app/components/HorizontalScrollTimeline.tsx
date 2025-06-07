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
            <div className="pointer-events-auto bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-xl p-8 w-[90%] max-w-xl text-center">
              <h3 className="text-blue-600 text-xl font-bold">{item.year}</h3>
              <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {item.description}
              </p>
              {item.tools && (
                <p className="text-xs mt-2 italic text-gray-400 dark:text-gray-500">
                  Tools: {item.tools}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}