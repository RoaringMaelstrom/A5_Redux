import type { Technology } from "../../types/Technology";
import SelectionCard from "./SelectionCard";

interface SelectionGridProps {
  technologies: Technology[];
  selectedIds: string[];
  onSelect: (id: string) => void;
}

function SelectionGrid({
  technologies,
  selectedIds,
  onSelect,
}: SelectionGridProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <SelectionCard
            key={technology.id}
            technology={technology}
            isSelected={selectedIds.includes(technology.id)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectionGrid;