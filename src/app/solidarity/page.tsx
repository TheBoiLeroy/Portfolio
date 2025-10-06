"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const SolidarityMap = dynamic(() => import("../components/solidarityComps/SolidarityMap"), {
  ssr: false,
});

export default function SolidarityPage() {
  return (
    <main className="min-h-screen p-6 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">🕊️ Solidarity Tracker</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        View and report ICE activity or join a peaceful protest in your area. Data is updated in real time by community members.
      </p>
      <SolidarityMap />
      <Link
        href="/solidarity/report"
        className="inline-block mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Report an ICE Raid
      </Link>
    </main>
  );
}