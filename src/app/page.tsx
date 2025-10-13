"use client";

import { useState, useId } from "react";
import Image from "next/image";
import ProjectImageCarousel from "./components/ProjectImageCarousel";
import IntroSection from "./components/IntroComponent";
import { timelineData } from "@/app/data/timeline";
import { toolMetadata } from "@/app/data/toolMetadata";

export default function HomePage() {
  const TABS = ["Current Work", "Skills", "What I'm Working On"] as const;
  type Tab = (typeof TABS)[number];

  const [activeTab, setActiveTab] = useState<Tab>("Current Work");
  const tablistId = useId();

  // Build a unique, filtered list of tools that exist in toolMetadata
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
    <main className="min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white">
      <section className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
        {/* 🖼️ Profile Picture */}
        <div className="w-[300px] border border-gray-300 dark:border-gray-700 shadow-md self-start">
          <Image
            src="/webPP.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            priority
            className="object-contain"
          />
        </div>

        {/* 🧑‍💻 Intro + Timeline + Tabs */}
        <div className="flex-1">
          <IntroSection />

          <div className="my-10 max-w-5xl mx-auto">
            <div className="rounded-lg bg-white dark:bg-neutral-900 shadow border border-gray-200 dark:border-neutral-700 p-6">
              {/* Tabs */}
              <div
                role="tablist"
                aria-label="Profile sections"
                className="flex gap-3 mb-6"
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
                      className={`px-4 py-2 text-sm font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 ${
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

              {/* Tab Panels */}
              {activeTab === "Current Work" && (
                <div
                  id="panel-Current-Work"
                  role="tabpanel"
                  aria-labelledby={tablistId}
                  className="rounded-md overflow-hidden"
                >
                  <ProjectImageCarousel
                    images={[
                      { src: "/images/projectimgs/simLongin.png", alt: "App screen 1" },
                      { src: "/images/projectimgs/simBossDash.png", alt: "App screen 2" },
                      { src: "/images/projectimgs/simContractorView.png", alt: "App screen 3" },
                    ]}
                  />
                </div>
              )}

              {activeTab === "Skills" && (
                <div
                  id="panel-Skills"
                  role="tabpanel"
                  aria-labelledby={tablistId}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                  {tools.map((tool) => {
                    const meta = toolMetadata[tool];
                    if (!meta) return null;
                    const { color, icon } = meta;
                    return (
                      <div
                        key={tool}
                        className="flex items-center gap-2 border rounded-md p-2 text-sm dark:border-neutral-700"
                        style={{ borderColor: color }}
                      >
                        <span className="text-lg" style={{ color }}>
                          {icon}
                        </span>
                        <span className="text-neutral-800 dark:text-neutral-100">{tool}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === "What I'm Working On" && (
                <div
                  id="panel-What-I'm-Working-On"
                  role="tabpanel"
                  aria-labelledby={tablistId}
                  className="space-y-4"
                >
                  <div>
                    <p className="text-neutral-600 dark:text-neutral-400">My homelab</p>
                    <ul className="list-disc pl-5">
                      <li>TrueNAS server setup</li>
                      <li>Repurposed an old Dell 3050</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      OpenMANET (Raspberry Pi Cluster)
                    </p>
                    <ul className="list-disc pl-5">
                      <li>Learning Kubernetes</li>
                      <li>Experimenting with Docker</li>
                      <li>Setting up an OpenMANET cluster</li>
                      <li>Follow my progress in my Projects</li>
                      
                    </ul>
                  </div>
                </div>
              )}
              {/* end panels */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}