import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants/index.jsx";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };
    const handelScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
        setIsMobile(false);
    };

    return (
        <nav className=" fixed top-4 z-50 w-full flex flex-col items-center justify-center ">
            <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg ">
                <img src={logo} alt="logo" width={80} height={22} />
                <div className="hidden space-x-6 lg:flex">
                    {LINKS.map((link, index) => {
                        return (
                            <a
                                key={index}
                                href={`#${link.targetId}`}
                                className={`
                                    transition duration-600 ease-in-out  hover:text-black hover:backdrop-blur-3xl
                                    text-sm ${
                                        index !== 0
                                            ? "border-l-2 border-neutral-300 pl-2"
                                            : ""
                                    }
                                    hover:opacity-50`}
                                onClick={(e) => {
                                    handelScroll(e, link.targetId);
                                }}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        {isMobile ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isMobile && (
                <div className="w-full backdrop-blur-lg lg:hidden">
                    {LINKS.map((link, index) => {
                        return (
                            <a
                                key={index}
                                href={`#${link.targetId}`}
                                className=" 
                                transition duration-600 ease-in-out  hover:text-black hover:backdrop-blur-3xl
                                    block p-4 uppercase tracking-tighter "
                                onClick={(e) => {
                                    handelScroll(e, link.targetId);
                                }}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
