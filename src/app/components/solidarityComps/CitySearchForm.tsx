"use client";

import { useState } from "react";

type Props = {
  onLocate: (lat: number, lng: number) => void;
};

export default function CitySearchForm({ onLocate }: Props) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Searching...");

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        onLocate(parseFloat(lat), parseFloat(lon));
        setStatus(null);
      } else {
        setStatus("❌ Location not found.");
      }
    } catch (error) {
      setStatus("⚠️ Error searching location.");
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Enter city or zip"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-3 py-2 border rounded dark:bg-neutral-800 dark:border-neutral-600"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
      {status && <span className="text-sm ml-2">{status}</span>}
    </form>
  );
}