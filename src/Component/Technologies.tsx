import { use, useState } from 'react';
import type { ItechnologiesType } from '../Type/TechnologiesType';
import TechnologiesCard from './TechnologiesCard';
import SelectedTech from './SelectedTech';

interface TechnologiesProps {
    TechnologiesPromise: Promise<ItechnologiesType[]>;
}

const Technologies = ({TechnologiesPromise}: TechnologiesProps) => {

const technologies = use(TechnologiesPromise);

const [selectedTechnologies, setSelectedTechnologies] = useState<ItechnologiesType[]>([]);

// console.log(technologies);

    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-3xl font-bold mb-4">Explore the <span className="text-gradient bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Technologies</span></h2>
                <p className="text-lg text-gray-600">
                Pick one technology per category to build your ideal stack. </p>
            </div>
            <div className="grid grid-cols-4 gap-6 my-6">
                
                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-5">
                    {technologies.map((technology) => (
                    <TechnologiesCard
                        key={technology.id}
                        technology={technology}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                    ))}
                </div>
                </div>
                <div className="col-span-1 border border-gray-200 rounded-2xl p-4">
                    <SelectedTech selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
                </div>
            </div>
        </div>
    );
};

export default Technologies;