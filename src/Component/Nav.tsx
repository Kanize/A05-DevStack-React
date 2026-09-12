import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className="border-b border-gray-400 sticky top-0 bg-white z-50">
        <div className="flex justify-between items-center p-4 container mx-auto"> 
            <div>
                <img src={logo} alt="Logo" />
            </div>

            <div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-black hover:text-[#DB2777] active:text-[#DB2777]">Home</a></li>
                    <li><a href="#" className="text-black hover:text-[#DB2777]">About</a></li>
                    <li><a href="#" className="text-black hover:text-[#DB2777]">Technologies</a></li>
                    <li><a href="#" className="text-black hover:text-[#DB2777]">Projects</a></li>
                    <li><a href="#" className="text-black hover:text-[#DB2777]">Contact</a></li>
                </ul>
            </div>

            <div>
                <button className="btn border-none mr-2">Sign In</button>
                <button className="btn btn-active btn-secondary rounded-3xl">Sign Up</button>
            </div>
        </div>
        </div>

        
    );
};

export default Nav;