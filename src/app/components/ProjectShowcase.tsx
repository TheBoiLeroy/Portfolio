'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toolMetadata } from "@/app/data/toolMetadata"; // Adjust the import path as necessary

type ProjectImages = {
  src: string;
  alt: string;
};

type ProjectShowcaseProps = {
  title: string;
  description?: string;
  images: ProjectImages[];
  tools?: string[];
  linkToProject?: string;
};

export default function ProjectShowcase({
  title,
  description,
  images,
  tools,
  linkToProject,
}: ProjectShowcaseProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="max-w-4xl mx-auto my-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="flex flex-col items-center">
        {/* Textual content */}
        <div>
          {description && (
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          )}

          {tools && tools.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Tools Used:</h3>
              <div className="flex flex-wrap gap-3">
            {tools.map((tool) => {
                const meta = toolMetadata[tool];
                return (
                <div
                    key={tool}
                    className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-md border border-white/10"
                    style={{
                    backgroundColor: meta?.color ?? '#444',
                    color: meta?.type === 'frontend' ? '#111' : '#fff',
                    }}
                >
                    <span className="text-lg">{meta?.icon}</span>
                    {tool}
                </div>
                );
            })}
            </div>
            </div>
          )}

          {linkToProject && (
            <div className="mt-6">
              <Link
                href={linkToProject}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Visit Project →
              </Link>
            </div>
          )}
        </div>

        {/* Image section */}
        <div className="flex flex-col items-start">
          {images.length > 1 && (
            <div className="flex gap-6 mb-6">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border ${
                    activeImage === index ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          )}

          <div
            className={`mx-auto w-full ${
              images.length === 1
                ? "max-w-[480px] sm:max-w-[560px] md:max-w-[640px]"
                : "max-w-[320px] sm:max-w-[360px] md:max-w-[400px]"
            }`}
          >
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              width={360}
              height={640}
              className="rounded-lg shadow-lg w-full h-auto object-contain transform hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}