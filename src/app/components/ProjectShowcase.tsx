"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/app/data/projects";
import { toolMetadata } from "@/app/data/toolMetadata";

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
    <div className="max-w-4xl mx-auto my-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      {/* Keep overall layout centered */}
      <div className="flex flex-col items-center gap-8">

        {/* TEXT / META SECTION — forced left aligned */}
        <div className="w-full self-start">
          {description && (
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {description}
            </p>
          )}

          {tdl?.length ? (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">To-do</h3>
              <ul className="space-y-2">
                {tdl.map((raw, i) => {
                  const checked = raw.trim().startsWith("[x]");
                  const text = raw.replace(/^\[(x| )\]\s*/i, "");
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        readOnly
                        className="mt-1"
                      />
                      <span>{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {tools?.length ? (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Tools Used:</h3>
              <div className="flex flex-wrap gap-3 justify-start">
                {tools.map((tool) => {
                  const meta = toolMetadata[tool];
                  return (
                    <div
                      key={tool}
                      className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                                 border border-white/10 shadow-sm"
                      style={{
                        backgroundColor: meta?.color ?? "#444",
                        color: meta?.type === "frontend" ? "#111" : "#fff",
                      }}
                    >
                      <span className="text-lg">{meta?.icon}</span>
                      {tool}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {linkToProject && (
            <div className="mt-6">
              <Link
                href={linkToProject}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded
                           hover:bg-blue-700 transition"
              >
                Visit Project →
              </Link>
            </div>
          )}
        </div>

        {/* IMAGE SECTION — stays centered */}
        <div className="flex flex-col items-start">
          {images.length > 1 && (
            <div className="flex gap-6 mb-6">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border ${
                    activeImage === index
                      ? "border-blue-500"
                      : "border-gray-300"
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
              className="rounded-lg shadow-lg w-full h-auto object-contain
                         transform hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}