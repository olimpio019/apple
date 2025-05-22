"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-xl mx-auto my-6">
      <input
        type="text"
        className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Buscar produtos Apple..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  );
} 