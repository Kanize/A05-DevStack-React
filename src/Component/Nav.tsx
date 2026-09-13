import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">

            <div className="flex h-16 items-center justify-between">

            {/* Left Side */}
            <div className="flex items-center gap-3">

                {/* Hamburger - Mobile */}
                <button className="text-2xl text-gray-600 md:hidden">
                <IoMenu />
                </button>

                {/* Logo */}
                <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto cursor-pointer"
                />

            </div>

            {/* Navigation - Desktop */}
            <ul className="hidden items-center gap-6 md:flex">
                <li>
                <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-[#DB2777]"
                >
                    Home
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-[#DB2777]"
                >
                    About
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-[#DB2777]"
                >
                    Technologies
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-[#DB2777]"
                >
                    Projects
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-[#DB2777]"
                >
                    Contact
                </a>
                </li>
            </ul>

            {/* Auth Buttons */}
            <div className="flex items-center gap-1 sm:gap-2">
                <button className="border-none bg-transparent px-2 text-xs text-gray-700 hover:bg-transparent hover:text-[#DB2777] sm:px-3 sm:text-sm cursor-pointer">
                Sign In
                </button>

                <button className="rounded-full bg-[#DB2777] px-3 py-2 text-xs text-white hover:bg-amber-700 sm:px-4 sm:text-sm cursor-pointer">
                Sign Up
                </button>
            </div>

            </div>

        </div>
        </nav>
    );
};

export default Nav;