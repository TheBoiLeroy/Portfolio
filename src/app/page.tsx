import Image from "next/image";
import Link from "next/link";
import ProjectImageCarousel from "./components/ProjectImageCarousel";

export default function HomePage() {
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

        {/* 🧑‍💻 Intro + Timeline + Carousel */}
        <div>
          <h1 className="text-3xl font-bold">Hi,</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
            I’m a recent Computer Science graduate from UC Santa Cruz with a passion for full-stack development, AI, and building tools that solve real-world problems. I’m a motivated, collaborative team player with strong communication skills in both English and Spanish.
            My goal is to create impactful, user-centered solutions—and I’m always eager to learn, grow, and contribute meaningfully to the tech community.
          </p>

          {/* ✨ Timeline Preview */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
            <p>
              🚀 2016 — Started learning Python<br />
              🎓 2025 — Graduated UCSC<br />
              🛠️ 9 years later I'm still coding and looking for opportunities<br />
              always trying to stay on top of the latest tech trends and tools.<br/>
              
            </p>
            <Link
              href="/timeline"
              className="inline-block mt-4 text-blue-600 hover:underline font-medium"
            >
              View full timeline →
            </Link>
          </div>

          {/* 📱 Project Image Carousel */}
          <ProjectImageCarousel
            images={[
              { src: "/images/projectimgs/simLongin.png", alt: "App screen 1" },
              { src: "/images/projectimgs/simBossDash.png", alt: "App screen 2" },
              { src: "/images/projectimgs/simContractorView.png", alt: "App screen 3" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}