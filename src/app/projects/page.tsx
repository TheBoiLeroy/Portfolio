"use client";


import dynamic from "next/dynamic";
import ProjectShowcase from "../components/ProjectShowcase";
import { projects } from "../data/projects";

export default function ProjectsPage() {
    const SolidarityMap = dynamic(() => import("@/app/components/solidarityComps/SolidarityMap"), {
      ssr: false,
    });

  return (
    <main className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      {projects.map((project) => (
        <ProjectShowcase key={project.title} {...project} />
      ))}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">🕊️ Solidarity Map Project</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A real-time map that visualizes ICE activity and peaceful protest reports submitted by the community. Using Agents to update the data base with real time data every 5 minutes, this project aims to provide a transparent view of local activities
        </p>

        <SolidarityMap />
      </section>
      
    </main>
  );
}
