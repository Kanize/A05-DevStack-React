import logo from "../assets/logo-text.png";


const Footer = () => {
    return (
        <div className="border-t border-gray-200 py-8 mt-20">
            <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 gap-8">
                <div>
                    <img src={logo} alt="Logo" />
                    <p className="text-gray-600 mt-2 text-[12px]">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <ul className="flex space-x-4 py-6">
                        <li><a href="#" className="text-black hover:text-[#DB2777] active:text-[#DB2777]">GitHub</a></li>
                        <li><a href="#" className="text-black hover:text-[#DB2777]">Twitter</a></li>
                        <li><a href="#" className="text-black hover:text-[#DB2777]">LinkedIn</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-medium ">Products</h2>
                    <ul className=" space-y-3 py-4">
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777] active:text-[#DB2777]">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777]">Technologies</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777]">Projects</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-medium ">LEGAL</h2>
                    <ul className=" space-y-3 py-4">
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777] active:text-[#DB2777]">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777]">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-medium ">Products</h2>
                    <ul className=" space-y-3 py-4">
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777] active:text-[#DB2777]">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777]">Technologies</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#DB2777]">Projects</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;