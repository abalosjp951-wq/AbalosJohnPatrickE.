"use client";

import { useState } from "react";
import { HeritageCard } from "../molecules/HeritageCard";

const sites = [
  {
    name: "Hundred Islands",
    location: "Alaminos City",
    image: "https://www.ourpangasinan.com/wp-content/uploads/2023/02/hundred-islands-1.jpg",
    description: "A celebrated island cluster known for limestone formations, clear waters, and outdoor adventures.",
    href: "https://www.alaminoscity.gov.ph/I-Choose-Hundred-Islands/hundred-islands-national-park.html"
  },
  {
    name: "Bolinao Lighthouse",
    location: "Bolinao",
    image: "https://rowelgabriel.github.io/Pangasinan/images/cbl1.jpg",
    description: "A historic coastal landmark offering memorable views of the sea and Pangasinan's western landscape.",
    href: "https://elgu-bolinao-pangasinan-news.e.gov.ph/about"
  },
  {
    name: "Balungao Hot Spring",
    location: "Balungao",
    image: "https://seepangasinan.com/wp-content/uploads/2022/08/IMG_7382-scaled-1980x1320.jpg",
    description: "A hot-and-cold spring destination surrounded by greenery and outdoor adventure activities.",
    href: "https://www.balungao.gov.ph/?p=408"
  }
];

export function HeritageGrid() {
  const [query, setQuery] = useState("");
  const filtered = sites.filter((site) =>
    `${site.name} ${site.location}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="filterRow" aria-label="Heritage site filters">
        <button className={`filterBtn ${query === "" ? "active" : ""}`} onClick={() => setQuery("")}>All Sites</button>
        <button className={`filterBtn ${query === "alaminos" ? "active" : ""}`} onClick={() => setQuery("alaminos")}>Alaminos</button>
        <button className={`filterBtn ${query === "bolinao" ? "active" : ""}`} onClick={() => setQuery("bolinao")}>Bolinao</button>
        <button className={`filterBtn ${query === "balungao" ? "active" : ""}`} onClick={() => setQuery("balungao")}>Balungao</button>
      </div>
      <div className="grid">
        {filtered.map((site) => <HeritageCard key={site.name} {...site} />)}
      </div>
      {filtered.length === 0 && <p className="emptyState">No heritage site matched your search.</p>}
    </>
  );
}
