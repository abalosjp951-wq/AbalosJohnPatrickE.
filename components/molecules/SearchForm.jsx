"use client";

import { useState } from "react";

export function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch?.(query.trim());
    document.getElementById("sites")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form className="search" role="search" onSubmit={handleSubmit}>
      <label htmlFor="site-search" className="srOnly">Search heritage sites</label>
      <input
        id="site-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Hundred Islands, Bolinao..."
        aria-label="Search heritage sites"
      />
      <button className="btn" type="submit">Search</button>
    </form>
  );
}
