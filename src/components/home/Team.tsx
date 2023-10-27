"use client";

import Image from "next/image";
import { yuri, dorigo, frontend, backend } from "@/assets/img";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

export const Team = () => {
    return (
        <section>
            <div className="w-full flex flex-col items-center justify-center gap-4 py-20 bg-[#0B1340]">
                <div className="w-full flex flex-col items-center justify-center pb-14">
                    <div className="text-3xl text-center uppercase pb-4">
                        <h1 className="text-[#2087e2]">Quem somos nós</h1>
                        <span className="w-full h-[1.5px] flex bg-[#2087e2] my-2"></span>
                    </div>
                    <p className="w-1/3 flex flex-col gap-6 text-sm text-center">
                        Conheça os profissionais por trás de todos os processos
                    </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-20 px-28">
                    <div className="w-full flex items-center gap-10">
                        <div className="w-3/5 h-full flex items-center justify-center">
                            <div className="min-w-fit min-h-fit rounded-full bg-gradient-to-br from-orange-500 via-[#0B1340] to-[#2088e3] p-1">
                                <Image
                                    src={yuri}
                                    alt="equipe"
                                    width={200}
                                    height={200}
                                    className="flex rounded-full opacity-100"
                                />
                            </div>
                            <div className="w-full flex flex-col py-2 pl-5 gap-1">
                                <h2 className="text-sm font-semibold text-gray-500 uppercase">
                                    Co-founder
                                </h2>
                                <h1 className="text-3xl font-bold text-white">
                                    Yuri Lopes
                                </h1>
                                <h2 className="text-lg font-semibold text-[#2087e2] uppercase">
                                    Desenvolvedor BackEnd
                                </h2>
                                <p className="w-full text-sm font-light text-white">
                                    “Textinho divertido... Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industrys
                                    standard dummy text ever since the 1500s.”
                                </p>
                                <div className="flex items-center gap-4 py-2">
                                    <a
                                        href="https://www.linkedin.com/in/yurilopesm/"
                                        target="_blank"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        <BsLinkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/yurilopesmdv"
                                        target="_blank"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        <BsGithub size={20} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/yuri.jlopes/"
                                        target="_blank"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        <BsInstagram size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        Conheça ...
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5 h-full">
                            <Image
                                src={backend}
                                alt="logos"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-10">
                        <div className="w-2/5 h-full">
                            <Image
                                src={frontend}
                                alt="front"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="w-3/5 h-full flex items-center justify-center">
                            <div className="w-full flex flex-col items-end py-2 pr-5 gap-1">
                                <h2 className="text-sm font-semibold text-gray-500 uppercase">
                                    Co-founder
                                </h2>
                                <h1 className="text-3xl font-bold text-white">
                                    Luiz Dorigo
                                </h1>
                                <h2 className="text-lg font-semibold text-[#2087e2] uppercase">
                                    Desenvolvedor FrontEnd
                                </h2>
                                <p className="w-full text-sm font-light text-white text-end">
                                    “Textinho divertido... Lorem Ipsum is simply
                                    dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industrys
                                    standard dummy text ever since the 1500s.”
                                </p>
                                <div className="flex items-center gap-4 py-2">
                                    <a
                                        href="#"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        ... Conheça
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/d3vnano/"
                                        target="_blank"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        <BsLinkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/d3vNano"
                                        target="_blank"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        <BsGithub size={20} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/d3v.nano/"
                                        target="_blank"
                                        className="text-sm font-light italic underline text-[#2088e3]"
                                    >
                                        <BsInstagram size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="min-w-fit min-h-fit rounded-full bg-gradient-to-br from-[#2088e3] via-[#0B1340] to-orange-500 p-1">
                                <Image
                                    src={dorigo}
                                    alt="equipe"
                                    width={200}
                                    height={200}
                                    className="flex rounded-full opacity-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
