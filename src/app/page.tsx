"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectImageCarousel from "./components/ProjectImageCarousel";
import IntroSection from "./components/IntroComponent";
import { timelineData } from "@/app/data/timeline";
import { toolMetadata } from "@/app/data/toolMetadata";

import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Current Work");

  return (
    <main className="min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white">
      <section className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
        {/* 🖼️ Profile Picture */}
        <div className="w-[300px] border border-gray-300 dark:border-gray-700 shadow-md self-start">
          <Image
            src="/webPP.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* 🧑‍💻 Intro + Timeline + Tabs */}
        <div className="flex-1">
          <IntroSection />
          <div className="my-10 max-w-5xl mx-auto">
            <div className="rounded-lg bg-white dark:bg-neutral-900 shadow border border-gray-200 dark:border-neutral-700 p-6">
              {/* Tab Buttons */}
              <div className="flex gap-3 mb-6">
                {["Current Work", "Skills", "In Progress..."].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                      activeTab === tab
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "Current Work" && (
                <div className="rounded-md overflow-hidden">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {Array.from(
                    new Set(
                      timelineData.flatMap((item) =>
                        typeof item.tools === "string"
                          ? item.tools.split(",").map((t) => t.trim())
                          : item.tools || []
                      )
                    )
                  )
                    .filter((tool) => toolMetadata[tool])
                    .map((tool) => {
                      const { color, icon } = toolMetadata[tool];
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
              <Link href="/minigames/growing_tictactoe">
                <button className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Play Growing Tic-Tac-Toe
                </button>
              </Link>


              {activeTab === "In Progress..." && (
                <p className="text-neutral-600 dark:text-neutral-400">Stay tuned for updates! 🚧</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}