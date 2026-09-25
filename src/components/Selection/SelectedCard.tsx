import type { Technology } from "../../types/Technology";

interface SelectedCardProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

function SelectedCard({
  technology,
  onRemove,
}: SelectedCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-base-300 bg-base-100 p-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-base-200 p-2">
        <img
          src={technology.logo}
          alt={`${technology.name} logo`}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold">
          {technology.name}
        </h3>

        <p className="text-xs text-base-content/50">
          {technology.category}
        </p>
      </div>

      <button
        type="button"
        className="btn btn-ghost btn-sm btn-circle"
        onClick={() => onRemove(technology.id)}
        aria-label={`Remove ${technology.name}`}
      >
        x
      </button>

    </div>
  );
}

export default SelectedCard;