export type Species = "cat" | "dog";

export type OrganSystemId =
  | "digestive"
  | "respiratory"
  | "cardiovascular"
  | "urinary"
  | "skin"
  | "eyes"
  | "ears";

export type ParasiteGroup =
  | "nematode"
  | "cestode"
  | "trematode"
  | "protozoa"
  | "arthropod";

export interface OrganSystem {
  id: OrganSystemId;
  name: string;
  description: string;
  /** Fill colour of the region on the diagram */
  color: string;
}

export interface Parasite {
  /** URL-safe identifier, used in /parasites/<slug>/ */
  slug: string;
  latinName: string;
  ukrainianName: string;
  group: ParasiteGroup;
  hosts: Species[];
  organSystems: OrganSystemId[];
  /** Where exactly in the body the parasite lives */
  localization: string;
  /** Whether the parasite can infect or attack humans */
  dangerousForHumans: boolean;
  description: string;
}
