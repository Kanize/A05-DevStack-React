import type { Dispatch, SetStateAction } from "react";
import type { ItechnologiesType } from "../Type/TechnologiesType";
import SelectedTechCard from "./SelectedTechCard";

interface SelectedTechProps {
    selectedTechnologies: ItechnologiesType[];
    setSelectedTechnologies: Dispatch<
    SetStateAction<ItechnologiesType[]>>;
}

const SelectedTech = ({
    selectedTechnologies,
    setSelectedTechnologies,
}: SelectedTechProps) => {
    const removeTechnology = (id: number) => {
    setSelectedTechnologies((technologies) =>
        technologies.filter((technology) => technology.id !== id)
    );
    };

    return (
    <div>
        <h2 className="mb-1 text-xl font-bold">
        Your Stack
        </h2>

        <p className="mb-5 text-sm text-gray-400">
        {selectedTechnologies.length} Technology
        {selectedTechnologies.length !== 1 ? "ies" : "y"} Selected
        </p>

        <div className="space-y-2">
        {selectedTechnologies.length === 0 ? (
            <p className="rounded-lg border border-gray-200 p-3 text-center text-sm text-gray-400">
            Your stack is empty.
            </p>
            ) : (
            selectedTechnologies.map((technology) => (
            <SelectedTechCard
            key={technology.id}
                technology={technology}
                onRemove={removeTechnology}
            />
            ))
        )}
        </div>

      {/* Remove All */}
        {selectedTechnologies.length > 0 && (
        <button
            onClick={() => setSelectedTechnologies([])}
            className="mt-6 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
            Remove All
        </button>
        )}
    </div>
    );
};

export default SelectedTech;