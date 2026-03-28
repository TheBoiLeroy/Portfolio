"use client";

import { useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectImageCarousel from "./components/ProjectImageCarousel";
import IntroSection from "./components/IntroComponent";
import { timelineData } from "@/app/data/timeline";
import { toolMetadata } from "@/app/data/toolMetadata";

export default function HomePage() {
  const TABS = ["Current Work", "Skills", "What I'm Working On"] as const;
  type Tab = (typeof TABS)[number];

  // State for main tabs and image versioning
  const [activeTab, setActiveTab] = useState<Tab>("Current Work");
  const [version, setVersion] = useState<"v1" | "v2">("v1");
  const tablistId = useId();

  // Define image sets for v1 and v2
  const projectImages = {
    v1: [
      { src: "/images/projectimgs/v1/simLongin.png", alt: "V1 Login Screen" },
      { src: "/images/projectimgs/v1/simBossDash.png", alt: "V1 Boss Dashboard" },
      { src: "/images/projectimgs/v1/simContractorView.png", alt: "V1 Contractor View" },
    ],
    v2: [
      { src: "/images/projectimgs/v2/Login.png", alt: "V2 Login Screen" },
      { src: "/images/projectimgs/v2/BossDash.png", alt: "V2 Boss Dashboard" },
      { src: "/images/projectimgs/v2/ClockIn.png", alt: "V2 Contractor View" },
    ],
  };

  // Build a unique, filtered list of tools
  const tools: string[] = Array.from(
    new Set(
      timelineData.flatMap((item) =>
        typeof item.tools === "string"
          ? item.tools.split(",").map((t) => t.trim()).filter(Boolean)
          : item.tools || []
      )
    )
  ).filter((tool) => Boolean(toolMetadata[tool]));

  return (
    <main className="min-h-screen px-4 sm:px-6 py-12 md:py-20 bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 max-w-5xl mx-auto">
        
        {/* 🖼️ Profile Picture - Fixed for mobile scaling & centering */}
        <div className="w-full max-w-[300px] mx-auto md:mx-0 border border-gray-300 dark:border-gray-700 shadow-md shrink-0">
          <Image
            src="/webPP.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            priority
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* 🧑‍💻 Intro + Timeline + Tabs - Added min-w-0 to prevent flex overflow */}
        <div className="flex-1 w-full min-w-0">
          <IntroSection />

          <div className="my-10 w-full">
            <div className="rounded-lg bg-white dark:bg-neutral-900 shadow border border-gray-200 dark:border-neutral-700 p-4 sm:p-6">
              
              {/* Header: Tabs - Added flex-wrap for mobile */}
              <div className="mb-6">
                <div
                  role="tablist"
                  aria-label="Profile sections"
                  className="flex flex-wrap gap-2 sm:gap-3"
                  id={tablistId}
                >
                  {TABS.map((tab) => {
                    const selected = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        role="tab"
                        aria-selected={selected}
                        aria-controls={`panel-${tab.replace(/\s+/g, "-")}`}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 ${
                          selected
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* --- Tab Panels --- */}

              {/* 1. Current Work Panel */}
              {activeTab === "Current Work" && (
                <div
                  id="panel-Current-Work"
                  role="tabpanel"
                  aria-labelledby={tablistId}
                  className="space-y-4"
                >
                  {/* Version Toggle - Stacked on mobile, row on tablet/desktop */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700">
                    
                    <div className="flex items-center justify-between w-full sm:w-auto">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mr-4">
                        Version: <span className="text-blue-500">{version}</span>
                      </span>
                      <div className="flex gap-1 bg-neutral-200 dark:bg-neutral-900 p-1 rounded-md">
                        <button
                          onClick={() => setVersion("v1")}
                          className={`px-3 py-1 text-xs font-semibold rounded transition ${
                            version === "v1" 
                              ? "bg-white dark:bg-neutral-700 shadow-sm text-black dark:text-white" 
                              : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                          }`}
                        >
                          V1
                        </button>
                        <button
                          onClick={() => setVersion("v2")}
                          className={`px-3 py-1 text-xs font-semibold rounded transition ${
                            version === "v2" 
                              ? "bg-white dark:bg-neutral-700 shadow-sm text-black dark:text-white" 
                              : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                          }`}
                        >
                          V2
                        </button>
                      </div>
                    </div>

                    {/* Navigation to /landingpages */}
                    <Link
                      href="/landingpages"
                      className="w-full sm:w-auto flex justify-center items-center gap-2 px-4 py-2 text-sm font-bold text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all active:scale-95"
                    >
                      View Landing Pages
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="rounded-md overflow-hidden border dark:border-neutral-800">
                    <ProjectImageCarousel
                      key={version}
                      images={projectImages[version]}
                    />
                  </div>
                </div>
              )}

              {/* 2. Skills Panel */}
              {activeTab === "Skills" && (
                <div
                  id="panel-Skills"
                  role="tabpanel"
                  aria-labelledby={tablistId}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
                >
                  {tools.map((tool) => {
                    const meta = toolMetadata[tool];
                    if (!meta) return null;
                    const { color, icon } = meta;
                    return (
                      <div
                        key={tool}
                        className="flex items-center gap-2 border rounded-md p-2 text-xs sm:text-sm dark:border-neutral-700 transition hover:bg-neutral-50 dark:hover:bg-neutral-800"
                        style={{ borderColor: color }}
                      >
                        <span className="text-base sm:text-lg" style={{ color }}>
                          {icon}
                        </span>
                        <span className="text-neutral-800 dark:text-neutral-100 truncate">{tool}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 3. What I'm Working On Panel */}
              {activeTab === "What I'm Working On" && (
                <div
                  id="panel-What-I'm-Working-On"
                  role="tabpanel"
                  aria-labelledby={tablistId}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="bg-neutral-50 dark:bg-neutral-800/30 p-4 rounded-lg">
                    <p className="text-neutral-600 dark:text-neutral-300 font-bold mb-2">My Homelab</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>TrueNAS server setup</li>
                      <li>Repurposed an old Dell 3050</li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-800/30 p-4 rounded-lg">
                    <p className="text-neutral-600 dark:text-neutral-300 font-bold mb-2">
                      OpenMANET (Raspberry Pi Cluster)
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Learning Kubernetes</li>
                      <li>Experimenting with Docker</li>
                      <li>Setting up an OpenMANET cluster</li>
                      <li>Follow my progress in my Projects</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}