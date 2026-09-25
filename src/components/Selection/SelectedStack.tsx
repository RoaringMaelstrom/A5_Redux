import type { Technology } from "../../types/Technology";
import SelectedCard from "./SelectedCard";

interface SelectedStackProps {
  technologies: Technology[];
  onRemove: (id: string) => void;
  allRemove: () => void;
}

function SelectedStack({
  technologies,
  onRemove,
  allRemove,
}: SelectedStackProps) {
  return (
    <aside className="rounded-xl border border-gray-400 bg-base-100 p-4">
      
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          Your Stack
        </h2>

        <p className="text-sm text-gray-500">
          {technologies.length} technologies selected
        </p>
      </div>

      {technologies.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {technologies.map((technology) => (
            <SelectedCard
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
          
          <button className="btn btn-dash btn-error"
            onClick={allRemove}>
            Remove All 
          </button>
        </div>
      )}

    </aside>
  );
}

export default SelectedStack;