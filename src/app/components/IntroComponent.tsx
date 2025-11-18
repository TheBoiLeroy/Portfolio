'use client';

import { useEffect, useState } from 'react';

const introText = `I'm a recent Computer Science graduate from UC Santa Cruz with a passion for full-stack development, AI, and building tools that solve real-world problems. I’m a motivated, collaborative team player with strong communication skills in both English and Spanish. My goal is to create impactful, user-centered solutions—and I’m always eager to learn, grow, and contribute meaningfully to the tech community.`;

export default function IntroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < introText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + introText[index]);
        setIndex(index + 1);
      }, 20); // adjust speed here
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Hi,</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl whitespace-pre-wrap font-mono">
        {displayedText}
        <span className="blinking-cursor">▍</span>
      </p>

      {/* Timeline Section */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
        <p>
          🚀 2016 — Started learning to code<br />
          🎓 2025 — Graduated UCSC<br />
          🛠️ 9 years later I&apos;m still coding and looking for opportunities<br />
          always trying to stay on top of the latest tech trends and tools.<br />
        </p>
        <a
          href="/timeline"
          className="inline-block mt-4 text-blue-600 hover:underline font-medium"
        >
          View full timeline →
        </a>
      </div>
    </div>
  );
}
