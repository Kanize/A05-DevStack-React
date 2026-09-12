import React, { type Dispatch, type SetStateAction } from 'react';
import type { ItechnologiesType } from '../Type/TechnologiesType';
import TechnologiesCard from './TechnologiesCard';

interface TechnologiesCardProps {
    technologies: ItechnologiesType;
    selectedTechnologies: ItechnologiesType[];
    setSelectedTechnologies:Dispatch<SetStateAction<ItechnologiesType[]>>;
}

const SelectedTech = ({ technologies, selectedTechnologies, setSelectedTechnologies }: { technologies: ItechnologiesType[]}) => {
    // console.log(selectedTechnologies, "from techno");
    return (
        <div>
            <h2 className="text-xl font-bold mb-1">Your stack</h2>
            <p className="text-gray-400">No technologies selected yet.</p>

            {selectedTechnologies.map((technology, index) => (
                <div key={index}>
                    <TechnologiesCard
                        technology={technology}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                </div>
            ))}

            <p className="text-gray-400 border border-gray-300 rounded-md p-2 text-center mt-6">
            Your stack is empty.</p>
        </div>
    );
};

export default SelectedTech;