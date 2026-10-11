import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { JSX } from "react";
import { getOrganSystem, parasiteGroupLabels, speciesLabels } from "@/data/organSystems";
import { getParasiteBySlug, parasites } from "@/data/parasites";
import type { OrganSystemId, Parasite, Species } from "@/data/types";

interface ParasitePageProps {
  params: Promise<{ slug: string }>;
}

// Static export: every parasite page is pre-rendered at build time, unknown slugs 404
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return parasites.map((parasite: Parasite) => ({ slug: parasite.slug }));
}

export async function generateMetadata({ params }: ParasitePageProps): Promise<Metadata> {
  const { slug } = await params;
  const parasite: Parasite | undefined = getParasiteBySlug(slug);
  return { title: parasite ? `${parasite.ukrainianName} (${parasite.latinName})` : "Не знайдено" };
}

export default async function ParasitePage({ params }: ParasitePageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const parasite: Parasite | undefined = getParasiteBySlug(slug);
  if (!parasite) {
    notFound();
  }

  return (
    <article className="parasite-page">
      <Link href="/parasites/" className="muted">
        ← До каталогу
      </Link>
      <h1>{parasite.ukrainianName}</h1>
      <p className="parasite-page__latin">
        <em>{parasite.latinName}</em>
      </p>

      {parasite.dangerousForHumans && (
        <p className="badge badge--warning">Може уражати людину</p>
      )}

      <dl className="facts">
        <dt>Група</dt>
        <dd>{parasiteGroupLabels[parasite.group]}</dd>
        <dt>Хазяї</dt>
        <dd>{parasite.hosts.map((host: Species) => speciesLabels[host]).join(", ")}</dd>
        <dt>Системи органів</dt>
        <dd>
          {parasite.organSystems
            .map((systemId: OrganSystemId) => getOrganSystem(systemId).name)
            .join(", ")}
        </dd>
        <dt>Локалізація</dt>
        <dd>{parasite.localization}</dd>
      </dl>

      <p>{parasite.description}</p>

      <div className="photo-placeholder">Фото буде додано</div>
    </article>
  );
}
