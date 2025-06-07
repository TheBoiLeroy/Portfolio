import Image from "next/image";
import Link from "next/link";
import ProjectImageCarousel from "./components/ProjectImageCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 text-gray-800">
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-5xl font-bold leading-tight">Hi, I'm Ian.</h1>
          <p className="text-lg">
            I build full-stack applications and experiment with AI to create engaging digital experiences.
            I'm always exploring new technologies and turning ideas into reality.
          </p>
          <div className="flex gap-4">
            <Link href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              View Projects
            </Link>
            <Link href="/contact" className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-100 transition">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <Image
            src="/webPP.jpg"
            alt="Profile Picture"
            width={320}
            height={320}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Currently Building</h2>
        <ProjectImageCarousel
          images={[
            { src: "/images/projectimgs/simLongin.png", alt: "App screen 1" },
            { src: "/images/projectimgs/simBossDash.png", alt: "App screen 2" },
            { src: "/images/projectimgs/simContractorView.png", alt: "App screen 3" },
          ]}
        />
      </section>
    </main>
  );
}