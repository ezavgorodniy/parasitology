import type { OrganSystem, OrganSystemId, ParasiteGroup, Species } from "./types";

export const organSystems: OrganSystem[] = [
  {
    id: "digestive",
    name: "Травна система",
    description: "Шлунок, кишечник, печінка та жовчні протоки",
    color: "#e9a23b",
  },
  {
    id: "respiratory",
    name: "Дихальна система",
    description: "Трахея, бронхи, легені",
    color: "#5aa9e6",
  },
  {
    id: "cardiovascular",
    name: "Серцево-судинна система та кров",
    description: "Серце, легеневі артерії, клітини крові",
    color: "#d64545",
  },
  {
    id: "urinary",
    name: "Сечовидільна система",
    description: "Нирки, сечовий міхур",
    color: "#9b6ad6",
  },
  {
    id: "skin",
    name: "Шкіра та шерсть",
    description: "Шкіра, підшкірна клітковина, шерстний покрив",
    color: "#c9b79c",
  },
  {
    id: "eyes",
    name: "Органи зору",
    description: "Кон'юнктива, третя повіка",
    color: "#3fb68b",
  },
  {
    id: "ears",
    name: "Вуха",
    description: "Зовнішній слуховий прохід",
    color: "#e07ab5",
  },
];

export function getOrganSystem(systemId: OrganSystemId): OrganSystem {
  const organSystem: OrganSystem | undefined = organSystems.find(
    (candidate: OrganSystem) => candidate.id === systemId,
  );
  if (!organSystem) {
    throw new Error(`Unknown organ system: ${systemId}`);
  }
  return organSystem;
}

export const speciesLabels: Record<Species, string> = {
  cat: "Кіт",
  dog: "Собака",
};

export const parasiteGroupLabels: Record<ParasiteGroup, string> = {
  nematode: "Нематоди (круглі черви)",
  cestode: "Цестоди (стрічкові черви)",
  trematode: "Трематоди (сисуни)",
  protozoa: "Найпростіші",
  arthropod: "Членистоногі (кліщі, блохи)",
};
