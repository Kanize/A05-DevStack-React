import { IoClose } from "react-icons/io5";
import type { ItechnologiesType } from "../Type/TechnologiesType";

interface SelectedTechCardProps {
    technology: ItechnologiesType;
    onRemove: (id: number) => void;
    }

const SelectedTechCard = ({
    technology,
    onRemove,
}: SelectedTechCardProps) => {
    return (
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5">
        
        {/* Left side */}
        <div className="flex items-center gap-3">
            <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
            />

            <div>
            <h3 className="text-xs font-semibold text-gray-900">
                {technology.name}
            </h3>

            <p className="text-[9px] text-gray-400">
                {technology.category}
            </p>
            </div>
        </div>

        {/* Remove button */}
        <button
            onClick={() => onRemove(technology.id)}
            className="text-2xl text-gray-400 transition hover:text-gray-700 cursor-pointer"
            title={`Remove ${technology.name}`}
        >
            <IoClose />
        </button>
        </div>
    );
};

export default SelectedTechCard;