"use client";

import Image from "next/image";
import { lyd_logo } from "@/assets/img";

import { Link } from "react-scroll";

export const Header = () => {
    return (
        <div className="w-full h-32 flex items-center justify-between fixed top-0 left-0 z-10 px-28 bg-[#0b1232]">
            <div className="flex items-center justify-center gap-4">
                <Image src={lyd_logo} alt="logo" width={75} height={75} />
                <h1 className="text-4xl font-medium">techlyd</h1>
            </div>
            <div>
                <nav>
                    <ul className="flex items-center justify-center gap-8">
                        <div className="flex flex-col gap-2 [&>span]:hover:w-full [&>li]:hover:text-[#2087e2] transition-all">
                            <li className="cursor-pointer">
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Serviços
                                </Link>
                            </li>
                            <span className="w-0 h-[1.5px] flex bg-gradient-to-r from-[#2087e2] from-50% to-[#ff6a00] to-75% duration-300 rounded-full"></span>
                        </div>
                        <div className="flex flex-col gap-2 [&>span]:hover:w-full [&>li]:hover:text-[#2087e2]">
                            <li className="cursor-pointer">
                                <Link
                                    activeClass="active"
                                    to="cases"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Cases
                                </Link>
                            </li>
                            <span className="w-0 h-[1.5px] flex bg-gradient-to-r from-[#2087e2] from-50% to-[#ff6a00] to-75% duration-300 rounded-full"></span>
                        </div>
                        <div className="flex flex-col gap-2 [&>span]:hover:w-full [&>li]:hover:text-[#2087e2]">
                            <li className="cursor-pointer">
                                <Link
                                    activeClass="active"
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Quem somos
                                </Link>
                            </li>
                            <span className="w-0 h-[1.5px] flex bg-gradient-to-r from-[#2087e2] from-50% to-[#ff6a00] to-75% duration-300 rounded-full"></span>
                        </div>
                        <button className="py-2 px-4 text-base font-medium border-2 border-white rounded-full hover:bg-white hover:border-white hover:text-[#0b1232] mb-2">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Fale Conosco
                            </Link>
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
