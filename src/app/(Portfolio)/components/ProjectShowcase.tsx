"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/app/(Portfolio)/data/projects";
import { toolMetadata } from "@/app/(Portfolio)/data/toolMetadata";
import { MdArrowForward } from "react-icons/md";

type ProjectShowcaseProps = Project;

export default function ProjectShowcase({
  title,
  description,
  images,
  tools,
  linkToProject,
  tdl,
}: ProjectShowcaseProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    // Changed to min-h-[100dvh] and removed snap-always so it scrolls naturally if tall
    <section className="w-full min-h-[100dvh] snap-start flex items-center justify-center py-12 px-4 md:px-8 shrink-0 relative">
      
      {/* Removed strict height limits so the box grows naturally with the content */}
      <div className="w-full max-w-7xl bg-[#1c1b1b] border border-zinc-800/80 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row">
        
        {/* --- LEFT PANE --- */}
        {/* Removed overflow-y-auto and scrollbar-none */}
        <div className="w-full lg:w-[45%] p-8 md:p-12 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800/80 relative">
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2962ff]/5 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-white font-['Manrope'] mb-6 tracking-tight">
              {title}
            </h2>

            {description && (
              <p className="text-[#c3c5d8] md:text-lg leading-relaxed mb-8">
                {description}
              </p>
            )}

            {tools?.length ? (
              <div className="mb-10">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => {
                    const meta = toolMetadata[tool];
                    const color = meta?.color ?? "#2962ff";
                    return (
                      <div
                        key={tool}
                        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 rounded-lg text-xs font-bold uppercase tracking-widest border"
                        style={{ borderColor: `${color}33`, color: color }}
                      >
                        <span className="text-base">{meta?.icon}</span>
                        {tool}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {tdl?.length ? (
              <div className="mb-10">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">
                  Development Roadmap
                </h3>
                <ul className="space-y-3">
                  {tdl.map((raw, i) => {
                    const checked = raw.trim().startsWith("[x]");
                    const text = raw.replace(/^\[(x| )\]\s*/i, "");
                    return (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className={`mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded border transition-colors ${
                          checked ? "bg-[#2962ff] border-[#2962ff] text-white" : "bg-zinc-900 border-zinc-700 text-transparent"
                        }`}>
                          <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                        </div>
                        <span className={`text-sm md:text-base leading-snug transition-colors ${
                          checked ? "text-zinc-500 line-through decoration-zinc-700" : "text-[#c3c5d8]"
                        }`}>
                          {text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>

          {linkToProject && (
            <div className="mt-8 relative z-10 shrink-0">
              <Link
                href={linkToProject}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full px-6 py-4 bg-[#2962ff] text-white font-bold rounded-xl hover:bg-blue-600 transition-all active:scale-[0.98]"
              >
              <MdArrowForward className="text-2xl group-hover:translate-x-1 transition-transform" />
                            </Link>
            </div>
          )}
        </div>

        {/* --- RIGHT PANE --- */}
        {/* Let this pane naturally stretch to match the height of the left pane */}
        <div className="w-full lg:w-[55%] min-h-[400px] lg:min-h-0 bg-[#131313] p-6 md:p-12 flex flex-col items-center justify-center relative">
          
          <div className="relative w-full max-w-[500px] flex-1 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <Image
                  src={images[activeImage].src}
                  alt={images[activeImage].alt}
                  width={800}
                  height={800}
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(41,98,255,0.15)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {images.length > 1 && (
            <div className="shrink-0 flex gap-3 p-2 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 backdrop-blur-sm max-w-full overflow-x-auto scrollbar-none">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    activeImage === index
                      ? "ring-2 ring-[#2962ff] scale-100 opacity-100"
                      : "ring-1 ring-zinc-700 scale-95 opacity-50 hover:opacity-100 hover:scale-100"
                  }`}
                >
                  <Image src={img.src} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                  {activeImage === index && <div className="absolute inset-0 bg-[#2962ff]/10"></div>}
                </button>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}