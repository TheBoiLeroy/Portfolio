import TimelineSteps from "@/app/components/HorizontalScrollTimeline";
export default function TimelinePage() {
  return (
    <main className="pt-20 text-gray-800 overflow-x-hidden">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">My Timeline</h1>
        <p className="text-gray-600 mt-2">Scroll down to follow my journey.</p>
      </section>

      <TimelineSteps />
    </main>
  );
}