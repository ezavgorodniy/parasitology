import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";
import { parasiteGroupLabels, speciesLabels } from "@/data/organSystems";
import { parasites } from "@/data/parasites";
import type { Parasite, ParasiteGroup, Species } from "@/data/types";

export const metadata: Metadata = { title: "Каталог паразитів" };

const groupOrder: ParasiteGroup[] = ["nematode", "cestode", "trematode", "protozoa", "arthropod"];

export default function ParasiteCatalogPage(): JSX.Element {
  return (
    <>
      <h1>Каталог паразитів</h1>
      {groupOrder.map((group: ParasiteGroup) => {
        const groupParasites: Parasite[] = parasites
          .filter((parasite: Parasite) => parasite.group === group)
          .sort((first: Parasite, second: Parasite) =>
            first.ukrainianName.localeCompare(second.ukrainianName, "uk"),
          );
        if (groupParasites.length === 0) {
          return null;
        }

        return (
          <section key={group} className="catalog-group">
            <h2>{parasiteGroupLabels[group]}</h2>
            <ul className="catalog-grid">
              {groupParasites.map((parasite: Parasite) => (
                <li key={parasite.slug} className="card">
                  <Link href={`/parasites/${parasite.slug}/`} className="card__title">
                    {parasite.ukrainianName}
                  </Link>
                  <em className="muted">{parasite.latinName}</em>
                  <div className="card__badges">
                    {parasite.hosts.map((host: Species) => (
                      <span key={host} className="badge">
                        {speciesLabels[host]}
                      </span>
                    ))}
                    {parasite.dangerousForHumans && (
                      <span className="badge badge--warning">Небезпечний для людини</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
