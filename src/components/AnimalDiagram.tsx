"use client";

import type { CSSProperties, JSX, KeyboardEvent, ReactNode } from "react";
import { getOrganSystem, speciesLabels } from "@/data/organSystems";
import type { OrganSystemId, Species } from "@/data/types";

interface AnimalDiagramProps {
  species: Species;
  activeSystemId: OrganSystemId | null;
  onSystemHover: (systemId: OrganSystemId | null) => void;
  onSystemSelect: (systemId: OrganSystemId) => void;
}

/**
 * Placeholder side-view schematic of a cat or a dog built from simple shapes.
 * Each organ system is a separate clickable region; it will be replaced by
 * proper illustrations (one SVG layer per system) later.
 */
export function AnimalDiagram({
  species,
  activeSystemId,
  onSystemHover,
  onSystemSelect,
}: AnimalDiagramProps): JSX.Element {
  // Wraps the shapes of one organ system into an interactive, keyboard-accessible group
  function renderRegion(systemId: OrganSystemId, shapes: ReactNode): JSX.Element {
    const organSystem = getOrganSystem(systemId);
    const isActive: boolean = activeSystemId === systemId;
    const regionStyle = { "--region-color": organSystem.color } as CSSProperties;

    return (
      <g
        className={isActive ? "region region--active" : "region"}
        style={regionStyle}
        role="button"
        tabIndex={0}
        aria-label={organSystem.name}
        aria-pressed={isActive}
        onMouseEnter={() => onSystemHover(systemId)}
        onMouseLeave={() => onSystemHover(null)}
        onFocus={() => onSystemHover(systemId)}
        onBlur={() => onSystemHover(null)}
        onClick={() => onSystemSelect(systemId)}
        onKeyDown={(keyboardEvent: KeyboardEvent<SVGGElement>) => {
          if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
            keyboardEvent.preventDefault();
            onSystemSelect(systemId);
          }
        }}
      >
        <title>{organSystem.name}</title>
        {shapes}
      </g>
    );
  }

  const isCat: boolean = species === "cat";

  return (
    <svg
      className="animal-diagram"
      viewBox="0 0 640 380"
      aria-label={`Схема: ${speciesLabels[species]}`}
    >
      {/* Body silhouette doubles as the "skin" region; organs are drawn on top of it */}
      {renderRegion(
        "skin",
        <>
          {isCat ? (
            <ellipse cx={105} cy={130} rx={14} ry={70} transform="rotate(-25 105 130)" />
          ) : (
            <ellipse cx={115} cy={160} rx={13} ry={45} transform="rotate(-50 115 160)" />
          )}
          <rect x={165} y={240} width={30} height={100} rx={14} />
          <rect x={215} y={240} width={30} height={100} rx={14} />
          <rect x={365} y={240} width={30} height={100} rx={14} />
          <rect x={405} y={240} width={30} height={100} rx={14} />
          <ellipse cx={290} cy={200} rx={160} ry={72} />
          <ellipse cx={430} cy={160} rx={45} ry={58} transform="rotate(30 430 160)" />
          {isCat ? (
            <circle cx={480} cy={115} r={52} />
          ) : (
            <>
              <circle cx={475} cy={110} r={50} />
              <ellipse cx={535} cy={128} rx={42} ry={26} />
            </>
          )}
        </>,
      )}

      {renderRegion(
        "ears",
        isCat ? (
          <>
            <polygon points="440,82 448,22 484,66" />
            <polygon points="490,64 524,24 526,84" />
          </>
        ) : (
          <ellipse cx={452} cy={100} rx={18} ry={40} transform="rotate(20 452 100)" />
        ),
      )}

      {renderRegion(
        "eyes",
        isCat ? <circle cx={505} cy={108} r={10} /> : <circle cx={498} cy={98} r={9} />,
      )}

      {renderRegion("respiratory", <ellipse cx={380} cy={185} rx={48} ry={36} />)}

      {renderRegion("cardiovascular", <circle cx={392} cy={222} r={17} />)}

      {renderRegion("digestive", <ellipse cx={275} cy={205} rx={70} ry={42} />)}

      {renderRegion(
        "urinary",
        <>
          <ellipse cx={190} cy={168} rx={24} ry={14} />
          <circle cx={175} cy={228} r={16} />
        </>,
      )}

      {/* Decorative nose, not interactive */}
      {isCat ? (
        <circle className="decor" cx={530} cy={125} r={5} />
      ) : (
        <circle className="decor" cx={575} cy={120} r={8} />
      )}
    </svg>
  );
}
