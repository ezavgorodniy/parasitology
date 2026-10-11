"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties, JSX } from "react";
import { AnimalDiagram } from "./AnimalDiagram";
import { getOrganSystem, organSystems, speciesLabels } from "@/data/organSystems";
import { getParasitesFor } from "@/data/parasites";
import type { OrganSystem, OrganSystemId, Parasite, Species } from "@/data/types";

const allSpecies: Species[] = ["cat", "dog"];

export function ParasiteExplorer(): JSX.Element {
  const [selectedSpecies, setSelectedSpecies] = useState<Species>("cat");
  const [pinnedSystemId, setPinnedSystemId] = useState<OrganSystemId | null>(null);
  const [hoveredSystemId, setHoveredSystemId] = useState<OrganSystemId | null>(null);

  // Hover previews a system; a click/tap pins it, so the panel also works on touch screens
  const displayedSystemId: OrganSystemId | null = hoveredSystemId ?? pinnedSystemId;
  const displayedSystem: OrganSystem | null = displayedSystemId
    ? getOrganSystem(displayedSystemId)
    : null;
  const displayedParasites: Parasite[] = displayedSystemId
    ? getParasitesFor(selectedSpecies, displayedSystemId)
    : [];

  return (
    <section className="explorer">
      <div className="explorer__diagram">
        <div className="species-switch" role="group" aria-label="Вид тварини">
          {allSpecies.map((species: Species) => (
            <button
              key={species}
              type="button"
              className={species === selectedSpecies ? "chip chip--active" : "chip"}
              aria-pressed={species === selectedSpecies}
              onClick={() => setSelectedSpecies(species)}
            >
              {speciesLabels[species]}
            </button>
          ))}
        </div>

        <AnimalDiagram
          species={selectedSpecies}
          activeSystemId={displayedSystemId}
          onSystemHover={setHoveredSystemId}
          onSystemSelect={setPinnedSystemId}
        />

        {/* Same systems as a plain list: easier to hit on phones and for screen readers */}
        <div className="system-list">
          {organSystems.map((organSystem: OrganSystem) => (
            <button
              key={organSystem.id}
              type="button"
              className={organSystem.id === displayedSystemId ? "chip chip--active" : "chip"}
              style={{ "--region-color": organSystem.color } as CSSProperties}
              onMouseEnter={() => setHoveredSystemId(organSystem.id)}
              onMouseLeave={() => setHoveredSystemId(null)}
              onClick={() => setPinnedSystemId(organSystem.id)}
            >
              <span className="swatch" aria-hidden="true" />
              {organSystem.name}
            </button>
          ))}
        </div>
      </div>

      <aside className="explorer__panel" aria-live="polite">
        {displayedSystem ? (
          <>
            <h2>{displayedSystem.name}</h2>
            <p className="muted">{displayedSystem.description}</p>
            {displayedParasites.length > 0 ? (
              <ul className="parasite-list">
                {displayedParasites.map((parasite: Parasite) => (
                  <li key={parasite.slug}>
                    <Link href={`/parasites/${parasite.slug}/`}>
                      <span className="parasite-list__name">{parasite.ukrainianName}</span>
                      <em className="parasite-list__latin">{parasite.latinName}</em>
                    </Link>
                    {parasite.dangerousForHumans && (
                      <span className="badge badge--warning">Небезпечний для людини</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">У демо-даних поки немає паразитів для цієї системи.</p>
            )}
          </>
        ) : (
          <p className="muted">
            Наведіть курсор або натисніть на систему органів, щоб побачити паразитів, які в ній
            живуть.
          </p>
        )}
      </aside>
    </section>
  );
}
