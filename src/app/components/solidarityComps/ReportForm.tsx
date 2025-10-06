"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ReportForm() {
  const [type, setType] = useState("ICE");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);
    if (isNaN(latNum) || isNaN(lngNum)) {
      setStatus("Latitude and Longitude must be numbers.");
      return;
    }

    const { error } = await supabase.from("reports").insert({
      type,
      description,
      lat: latNum,
      lng: lngNum,
    });

    if (error) {
      setStatus("Error submitting report.");
      console.error(error);
    } else {
      setStatus("✅ Report submitted.");
      setType("ICE");
      setDescription("");
      setLat("");
      setLng("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md">
      <h2 className="text-lg font-semibold">📢 Submit a Report</h2>

      <label className="block">
        <span className="text-sm">Type</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded dark:bg-neutral-800 dark:border-neutral-600"
        >
          <option value="ICE">ICE Activity</option>
          <option value="Protest">Peaceful Protest</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm">Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full p-2 border rounded dark:bg-neutral-800 dark:border-neutral-600"
        />
      </label>

      <div className="flex gap-4">
        <label className="flex-1">
          <span className="text-sm">Latitude</span>
          <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="w-full p-2 border rounded dark:bg-neutral-800 dark:border-neutral-600"
          />
        </label>
        <label className="flex-1">
          <span className="text-sm">Longitude</span>
          <input
            type="text"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            className="w-full p-2 border rounded dark:bg-neutral-800 dark:border-neutral-600"
          />
        </label>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Submit Report
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}