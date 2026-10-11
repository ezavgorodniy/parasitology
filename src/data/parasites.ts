import type { OrganSystemId, Parasite, Species } from "./types";

// Demo dataset for the prototype. Must be reviewed by a parasitologist before
// publishing — later this moves into the CMS.
export const parasites: Parasite[] = [
  // ---- Digestive system ----
  {
    slug: "toxocara-canis",
    latinName: "Toxocara canis",
    ukrainianName: "Токсокара собача",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["digestive", "respiratory"],
    localization: "Тонкий кишечник; личинки мігрують через печінку та легені",
    dangerousForHumans: true,
    description:
      "Один з найпоширеніших гельмінтів собак, особливо цуценят. Для людини небезпечні личинки (токсокароз).",
  },
  {
    slug: "toxocara-cati",
    latinName: "Toxocara cati",
    ukrainianName: "Токсокара котяча",
    group: "nematode",
    hosts: ["cat"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: true,
    description:
      "Найпоширеніша аскарида котів. Зараження через яйця з довкілля, гризунів (резервуарних хазяїв), кошенят — з молоком матері.",
  },
  {
    slug: "toxascaris-leonina",
    latinName: "Toxascaris leonina",
    ukrainianName: "Токсаскарида",
    group: "nematode",
    hosts: ["cat", "dog"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: false,
    description:
      "Аскарида без міграції личинок через легені; часто зустрічається разом із токсокарами.",
  },
  {
    slug: "ancylostoma-caninum",
    latinName: "Ancylostoma caninum",
    ukrainianName: "Анкілостома собача",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: true,
    description:
      "Кровосисна нематода; може спричиняти тяжку анемію у цуценят. Личинки здатні проникати крізь шкіру людини.",
  },
  {
    slug: "uncinaria-stenocephala",
    latinName: "Uncinaria stenocephala",
    ukrainianName: "Унцинарія",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: false,
    description: "Анкілостоматида, характерна для помірного клімату; менш патогенна, ніж анкілостома.",
  },
  {
    slug: "trichuris-vulpis",
    latinName: "Trichuris vulpis",
    ukrainianName: "Волосоголовець собачий",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["digestive"],
    localization: "Сліпа та товста кишка",
    dangerousForHumans: false,
    description: "Яйця дуже стійкі в ґрунті, тому повторні зараження часті.",
  },
  {
    slug: "dipylidium-caninum",
    latinName: "Dipylidium caninum",
    ukrainianName: "Дипілідій (огірковий ціп'як)",
    group: "cestode",
    hosts: ["cat", "dog"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: true,
    description:
      "Проміжний хазяїн — блохи. Людина (частіше діти) заражається, випадково проковтнувши заражену блоху.",
  },
  {
    slug: "echinococcus-granulosus",
    latinName: "Echinococcus granulosus",
    ukrainianName: "Ехінокок",
    group: "cestode",
    hosts: ["dog"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: true,
    description:
      "Собака — остаточний хазяїн. Для людини небезпечна личинкова стадія, що утворює кісти у внутрішніх органах (ехінококоз).",
  },
  {
    slug: "hydatigera-taeniaeformis",
    latinName: "Hydatigera taeniaeformis",
    ukrainianName: "Тенія котяча",
    group: "cestode",
    hosts: ["cat"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: false,
    description: "Проміжні хазяї — гризуни; характерна для котів, що полюють.",
  },
  {
    slug: "opisthorchis-felineus",
    latinName: "Opisthorchis felineus",
    ukrainianName: "Опісторх котячий",
    group: "trematode",
    hosts: ["cat", "dog"],
    organSystems: ["digestive"],
    localization: "Жовчні протоки печінки, жовчний міхур, підшлункова залоза",
    dangerousForHumans: true,
    description:
      "Зараження при поїданні сирої або недостатньо обробленої річкової риби родини коропових. Актуальний для басейну Дніпра.",
  },
  {
    slug: "giardia-duodenalis",
    latinName: "Giardia duodenalis",
    ukrainianName: "Лямблія (жиардія)",
    group: "protozoa",
    hosts: ["cat", "dog"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: true,
    description:
      "Найпростіше, що спричиняє діарею, особливо у молодих тварин. Окремі генотипи можуть заражати людину.",
  },
  {
    slug: "cystoisospora",
    latinName: "Cystoisospora spp.",
    ukrainianName: "Цистоізоспори (кокцидії)",
    group: "protozoa",
    hosts: ["cat", "dog"],
    organSystems: ["digestive"],
    localization: "Тонкий кишечник",
    dangerousForHumans: false,
    description: "Часта причина діареї у цуценят і кошенят; видоспецифічні для котів і собак.",
  },
  {
    slug: "toxoplasma-gondii",
    latinName: "Toxoplasma gondii",
    ukrainianName: "Токсоплазма",
    group: "protozoa",
    hosts: ["cat"],
    organSystems: ["digestive"],
    localization: "Кишечник (статева стадія розвитку у котів)",
    dangerousForHumans: true,
    description:
      "Коти — остаточні хазяї, які виділяють ооцисти з фекаліями. Особливо важливий для вагітних жінок.",
  },

  // ---- Respiratory system ----
  {
    slug: "aelurostrongylus-abstrusus",
    latinName: "Aelurostrongylus abstrusus",
    ukrainianName: "Котячий легеневий черв'як",
    group: "nematode",
    hosts: ["cat"],
    organSystems: ["respiratory"],
    localization: "Альвеоли та дрібні бронхіоли",
    dangerousForHumans: false,
    description:
      "Проміжні хазяї — слимаки та равлики. Кіт заражається, поїдаючи їх або гризунів і птахів, що їх з'їли.",
  },
  {
    slug: "eucoleus-aerophilus",
    latinName: "Eucoleus aerophilus",
    ukrainianName: "Капілярія легенева",
    group: "nematode",
    hosts: ["cat", "dog"],
    organSystems: ["respiratory"],
    localization: "Трахея та бронхи",
    dangerousForHumans: true,
    description: "Синонім — Capillaria aerophila. Описані поодинокі випадки зараження людини.",
  },
  {
    slug: "crenosoma-vulpis",
    latinName: "Crenosoma vulpis",
    ukrainianName: "Креносома",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["respiratory"],
    localization: "Бронхи та трахея",
    dangerousForHumans: false,
    description: "Проміжні хазяї — слимаки та равлики; основний резервуар у природі — лисиці.",
  },
  {
    slug: "angiostrongylus-vasorum",
    latinName: "Angiostrongylus vasorum",
    ukrainianName: "Ангіостронгілюс",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["cardiovascular", "respiratory"],
    localization: "Легеневі артерії та праві відділи серця",
    dangerousForHumans: false,
    description:
      "«Французький серцевий черв'як». Спричиняє кашель і порушення згортання крові; собаки заражаються, поїдаючи слимаків.",
  },

  // ---- Cardiovascular system and blood ----
  {
    slug: "dirofilaria-immitis",
    latinName: "Dirofilaria immitis",
    ukrainianName: "Дирофілярія серцева",
    group: "nematode",
    hosts: ["dog", "cat"],
    organSystems: ["cardiovascular"],
    localization: "Легеневі артерії та праві відділи серця",
    dangerousForHumans: true,
    description:
      "Переноситься комарами. У собак спричиняє серцево-легеневу хворобу; у людини — рідко, вузлики в легенях.",
  },
  {
    slug: "babesia-canis",
    latinName: "Babesia canis",
    ukrainianName: "Бабезія собача",
    group: "protozoa",
    hosts: ["dog"],
    organSystems: ["cardiovascular"],
    localization: "Еритроцити",
    dangerousForHumans: false,
    description:
      "Переноситься лучним кліщем Dermacentor reticulatus. Гостра, потенційно смертельна хвороба, поширена в Україні.",
  },

  // ---- Skin ----
  {
    slug: "dirofilaria-repens",
    latinName: "Dirofilaria repens",
    ukrainianName: "Дирофілярія підшкірна",
    group: "nematode",
    hosts: ["dog", "cat"],
    organSystems: ["skin"],
    localization: "Підшкірна клітковина",
    dangerousForHumans: true,
    description:
      "Переноситься комарами. Україна — одна з країн Європи з найбільшою кількістю зареєстрованих випадків у людей.",
  },
  {
    slug: "demodex-canis",
    latinName: "Demodex canis",
    ukrainianName: "Демодекс собачий",
    group: "arthropod",
    hosts: ["dog"],
    organSystems: ["skin"],
    localization: "Волосяні фолікули та сальні залози",
    dangerousForHumans: false,
    description:
      "У невеликій кількості живе на шкірі здорових собак; хворобу (демодекоз) спричиняє при порушенні імунітету.",
  },
  {
    slug: "sarcoptes-scabiei",
    latinName: "Sarcoptes scabiei var. canis",
    ukrainianName: "Коростяний кліщ (саркоптес)",
    group: "arthropod",
    hosts: ["dog"],
    organSystems: ["skin"],
    localization: "Епідерміс",
    dangerousForHumans: true,
    description: "Спричиняє сильний свербіж; може тимчасово уражати шкіру людини.",
  },
  {
    slug: "notoedres-cati",
    latinName: "Notoedres cati",
    ukrainianName: "Нотоедрес",
    group: "arthropod",
    hosts: ["cat"],
    organSystems: ["skin"],
    localization: "Епідерміс, переважно голова та вуха",
    dangerousForHumans: true,
    description: "Котяча короста; дуже заразна між котами, у людини — тимчасове подразнення шкіри.",
  },
  {
    slug: "ctenocephalides-felis",
    latinName: "Ctenocephalides felis",
    ukrainianName: "Котяча блоха",
    group: "arthropod",
    hosts: ["cat", "dog"],
    organSystems: ["skin"],
    localization: "Шерсть і шкіра",
    dangerousForHumans: true,
    description:
      "Найпоширеніша блоха як котів, так і собак. Кусає людей, переносить дипілідій та бактерії роду Bartonella.",
  },
  {
    slug: "ixodes-ricinus",
    latinName: "Ixodes ricinus",
    ukrainianName: "Лісовий кліщ",
    group: "arthropod",
    hosts: ["dog", "cat"],
    organSystems: ["skin"],
    localization: "Шкіра (під час живлення)",
    dangerousForHumans: true,
    description: "Переносник збудників хвороби Лайма (бореліозу) та анаплазмозу.",
  },
  {
    slug: "dermacentor-reticulatus",
    latinName: "Dermacentor reticulatus",
    ukrainianName: "Лучний кліщ",
    group: "arthropod",
    hosts: ["dog"],
    organSystems: ["skin"],
    localization: "Шкіра (під час живлення)",
    dangerousForHumans: true,
    description: "Основний переносник бабезіозу собак в Україні; активний навесні та восени.",
  },

  // ---- Ears ----
  {
    slug: "otodectes-cynotis",
    latinName: "Otodectes cynotis",
    ukrainianName: "Вушний кліщ",
    group: "arthropod",
    hosts: ["cat", "dog"],
    organSystems: ["ears"],
    localization: "Зовнішній слуховий прохід",
    dangerousForHumans: false,
    description: "Спричиняє отодектоз: свербіж і темні виділення з вух. Дуже заразний між тваринами.",
  },

  // ---- Urinary system ----
  {
    slug: "pearsonema-plica",
    latinName: "Pearsonema plica",
    ukrainianName: "Сечова капілярія собача",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["urinary"],
    localization: "Сечовий міхур",
    dangerousForHumans: false,
    description: "Проміжні хазяї — дощові черв'яки. Часто перебігає безсимптомно.",
  },
  {
    slug: "pearsonema-feliscati",
    latinName: "Pearsonema feliscati",
    ukrainianName: "Сечова капілярія котяча",
    group: "nematode",
    hosts: ["cat"],
    organSystems: ["urinary"],
    localization: "Сечовий міхур",
    dangerousForHumans: false,
    description: "Зазвичай випадкова знахідка під час дослідження сечі.",
  },
  {
    slug: "dioctophyme-renale",
    latinName: "Dioctophyme renale",
    ukrainianName: "Велетенський нирковий черв'як",
    group: "nematode",
    hosts: ["dog"],
    organSystems: ["urinary"],
    localization: "Нирки (частіше права)",
    dangerousForHumans: true,
    description:
      "Одна з найбільших паразитичних нематод — до 1 м завдовжки. Зараження через сиру рибу або жаб.",
  },

  // ---- Eyes ----
  {
    slug: "thelazia-callipaeda",
    latinName: "Thelazia callipaeda",
    ukrainianName: "Телязія",
    group: "nematode",
    hosts: ["dog", "cat"],
    organSystems: ["eyes"],
    localization: "Кон'юнктивальний мішок, під третьою повікою",
    dangerousForHumans: true,
    description:
      "Переноситься плодовими мушками, що живляться очними виділеннями. Поширюється в Європі, зокрема в Україні.",
  },
];

export function getParasitesFor(species: Species, systemId: OrganSystemId): Parasite[] {
  return parasites.filter(
    (parasite: Parasite) =>
      parasite.hosts.includes(species) && parasite.organSystems.includes(systemId),
  );
}

export function getParasiteBySlug(slug: string): Parasite | undefined {
  return parasites.find((parasite: Parasite) => parasite.slug === slug);
}
