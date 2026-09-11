import React from 'react';
import heroImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 container mx-auto">
            <div>
                <h1 className="text-4xl md:text-6xl font-extrabold">Build Your Ideal</h1>
                <h1 className=" text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Development Stack
                    </h1>
                <p className="text-lg md:text-xl text-gray-600 my-4">
                    Explore frontend, backend, database,<br/> and tooling options,
                    compare them side by side, and put together the stack <br/> that fits your next project.</p>
                    <button className="btn btn-secondary gradient bg-linear-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
                    <button className="btn px-10 ml-4 ">Learn More</button>
            </div>
            <div>
                <img src={heroImg} alt="Description of the image" />
            </div>
        </div>
    );
};

export default Banner;