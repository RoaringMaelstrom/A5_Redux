import { use, useState } from "react";

import SelectionGrid from "./Selection/SelectionGrid";
import SelectedStack from "./Selection/SelectedStack";

import type { Technology } from "../types/Technology";
import { toast } from "react-toastify";

interface SelectionSectionProps {
  techDataPromise: Promise<Technology[]>;
}

function SelectionSection({techDataPromise}: SelectionSectionProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const technologies = use(techDataPromise);

  const handleSelect = (id: string) => {
    setSelectedIds((previous) => {
      return [...previous, id];
    });
    toast.success("Added to stack.");
  };

  const handleRemove = (id: string) => {
    setSelectedIds((previous) =>
      previous.filter((selectedId) => selectedId !== id)
    );
    toast("Removed from stack.");
  };

  const handleRemoveAll = () => {
    setSelectedIds([]);

    toast.warning("Stack Cleared !!!");
  };

  const selectedTechnologies = technologies.filter(
    (technology: Technology) => selectedIds.includes(technology.id)
  );

  return (
    <section className="w-full px-32 pb-30">
      <div className="mb-5">
        <h1 className="text-4xl font-bold py-2">
          Explore the <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Technologies</span>
        </h1>

        <p className="mt-1 text-[16px] text-base-content/60">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_270px]">
        <SelectionGrid
          technologies={technologies}
          selectedIds={selectedIds}
          onSelect={handleSelect}
        />

        <SelectedStack
          technologies={selectedTechnologies}
          onRemove={handleRemove}
          allRemove={handleRemoveAll}
        />

      </div>
    </section>
  );
}

export default SelectionSection;