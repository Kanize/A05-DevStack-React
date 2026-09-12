import { FaStar } from "react-icons/fa";
import type { ItechnologiesType } from "../Type/TechnologiesType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface TechnologiesCardProps {
    technology: ItechnologiesType;
    selectedTechnologies: ItechnologiesType[];
    setSelectedTechnologies: Dispatch<SetStateAction<ItechnologiesType[]>>;
}

const TechnologiesCard = ({
    technology, selectedTechnologies, setSelectedTechnologies
}: TechnologiesCardProps) => {

const [isSelected, setIsSelected] = useState(false);

const handleAddToStack = () => {
        setIsSelected(true);
            toast.success('Technology added to stack!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            setSelectedTechnologies([...selectedTechnologies, technology]);
            }



    return (
    // <div className="">
    <div className=" group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top Section */}
        <div className="flex items-start justify-between">

        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center">
            <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
            />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-600">
            {technology.badge}
        </span>

        </div>

      {/* Technology Name */}
        <h3 className="mt-3 text-lg font-semibold text-gray-900">
        {technology.name}
        </h3>

      {/* Description */}
        <p className="mt-1 min-h-[48px] text-xs leading-5 text-gray-500">
        {technology.description}
        </p>

      {/* Category / Difficulty / Rating */}
        <div className="mt-4 flex items-center justify-between text-[10px]">

        {/* Category */}
        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
            {technology.category}
        </span>

        {/* Difficulty */}
        <span className="text-gray-500">
            {technology.difficulty}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 font-medium text-gray-700">
            <FaStar className="text-yellow-400" />
            {technology.rating}
        </span>

        </div>

      {/* Divider */}
        <div className="my-3 border-t border-gray-100"></div>

        {/* Add to Stack Button */}
        <button
        onClick={handleAddToStack}
            className="w-full rounded-lg bg-[#080d1c] py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-linear-to-r from-[#F97316] to-[#EC4899] active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400 cursor-pointer"
            disabled={isSelected}>
            {isSelected ? "Added to stack" : "Add to Stack"}
        </button>

    </div>
    // </div>
    );
};


export default TechnologiesCard;