"use client";

import { Link } from "react-scroll";
import { IoMdArrowDropupCircle } from "react-icons/io";

export const TopButton = () => {
    return (
        <div className="w-fit h-fit fixed bottom-5 right-5 cursor-pointer bg-white rounded-full p-0 m-0">
            <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <IoMdArrowDropupCircle size={50} color="#2087e2" />
            </Link>
        </div>
    );
};
