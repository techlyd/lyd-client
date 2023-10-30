"use client";

import Image from "next/image";
import { useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
    ecommerce,
    sistems,
    site,
    mobile_app,
    insta_service,
    face_service,
    google_service,
    whats_service,
} from "@/assets/img/index";

const Consulting = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 pb-14">
            <h1 className="w-1/2 text-2xl font-black text-[#2087e2] text-center uppercase leading-10 pb-10">
                Fornecemos{" "}
                <strong className="bg-[#2087e2] text-white p-1 rounded-sm">
                    consultoria especializada
                </strong>{" "}
                para orientar sua empresa{" "}
                <strong className="bg-[#2087e2] text-white p-1 rounded-sm">
                    rumo ao sucesso.
                </strong>
            </h1>
            <div>
                <div className="w-full flex items-center justify-center gap-20 text-xl font-bold">
                    <div className="w-1/2 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={sistems}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>Instagram</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={site}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>Facebook</p>
                    </div>
                </div>
                <button className="text-[#2087e2] font-medium mt-10 hover:text-transparent hover:font-semibold hover:bg-clip-text hover:bg-gradient-to-r from-[#2087e2] from-40% to-[#ff6a00] to-60% transition-all duration-300">
                    <a
                        href="https://api.whatsapp.com/send?phone=5541988185024&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20consultoria!"
                        target="_blank"
                    >
                        Saiba mais...
                    </a>
                </button>
            </div>
        </div>
    );
};

const SocialMedia = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 pb-14">
            <h1 className="w-1/2 text-2xl font-black text-[#2087e2] text-center uppercase leading-10 pb-10">
                Criamos{" "}
                <strong className="bg-[#2087e2] text-white p-1 rounded-sm">
                    estratégias personalizadas
                </strong>{" "}
                para
                <br />
                mídias sociais que{" "}
                <strong className="bg-[#2087e2] text-white p-1 rounded-sm">
                    cativam audiências
                </strong>
                <br />
                de{" "}
                <strong className="bg-[#2087e2] text-white p-1 rounded-sm">
                    maneira única.
                </strong>
            </h1>
            <div>
                <div className="w-full flex items-center justify-center gap-20 text-xl font-bold">
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={insta_service}
                                alt="instagram"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>Instagram</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={face_service}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>Facebook</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={google_service}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>Google</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={whats_service}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>

                        <p>WhatsApp</p>
                    </div>
                </div>
                <button className="text-[#2087e2] font-medium mt-10 hover:text-transparent hover:font-semibold hover:bg-clip-text hover:bg-gradient-to-r from-[#2087e2] from-40% to-[#ff6a00] to-60% transition-all duration-300">
                    <a
                        href="https://api.whatsapp.com/send?phone=5541988185024&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20social%20media!"
                        target="_blank"
                    >
                        Saiba mais...
                    </a>
                </button>
            </div>
        </div>
    );
};

const WebSistems = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 pb-14">
            <h1 className="w-1/2 text-2xl font-black text-[#2087e2] text-center uppercase leading-10 pb-10">
                Desenvolvemos{" "}
                <strong className="bg-[#2087e2] text-white p-1 rounded-sm">
                    sistemas e sites sob medida
                </strong>
                <br />
                para empresas e indústrias com problemas reais
            </h1>
            <div>
                <div className="w-full flex items-center justify-center gap-20 text-xl font-bold">
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={sistems}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>Softwares e sistemas web</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={site}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>
                            <br />
                            Websites
                        </p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={mobile_app}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>
                            <br />
                            Aplicativos mobile
                        </p>
                    </div>
                    <div className="w-1/4 flex flex-col items-center justify-center gap-5">
                        <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                            <Image
                                src={ecommerce}
                                alt="software-e-sistemas-web"
                                width={175}
                                height={175}
                            />
                        </span>
                        <p>
                            <br />
                            E-commerce
                        </p>
                    </div>
                </div>
                <button className="text-[#2087e2] font-medium mt-10 hover:text-transparent hover:font-semibold hover:bg-clip-text hover:bg-gradient-to-r from-[#2087e2] from-40% to-[#ff6a00] to-60% transition-all duration-300">
                    <a
                        href="https://api.whatsapp.com/send?phone=5541988185024&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento!"
                        target="_blank"
                    >
                        Saiba mais...
                    </a>
                </button>
            </div>
        </div>
    );
};

export const Services = () => {
    const [state, setState] = useState(0);

    return (
        <>
            <div className="w-full h-16 flex items-center justify-center gap-10 mb-10">
                <button
                    className="w-40 h-full relative [&>.borda-l]:hover:bg-[#2087e2] [&>.borda-r]:hover:bg-[#ff6a00] [&>.borda-b]:hover:bg-[#2087e2] [&>.borda-t]:hover:bg-[#ff6a00] [&>.borda-l]:hover:h-full [&>.borda-r]:hover:h-full [&>.borda-b]:hover:h-[1px] [&>.borda-t]:hover:h-[1px] [&>.borda-l]:hover:translate-y-0 [&>.borda-r]:hover:translate-y-0 [&>.borda-b]:hover:translate-x-0 [&>.borda-t]:hover:translate-x-0"
                    onClick={() => setState(0)}
                >
                    <div className="borda-l absolute left-0 bottom-0 w-[1px] h-full bg-none -translate-y-full transition-all duration-300"></div>
                    <div className="borda-r absolute right-0 bottom-0 w-[1px] h-full bg-none translate-y-full transition-all duration-300"></div>
                    <div className="borda-b absolute left-0 bottom-0 w-full h-[1px] bg-none -translate-x-full transition-all duration-300"></div>
                    <div className="borda-t absolute right-0 top-0 w-full h-[1px] bg-none translate-x-full transition-all duration-300"></div>
                    Desenvolvimento
                </button>
                <button
                    className="w-40 h-full relative [&>.borda-l]:hover:bg-[#2087e2] [&>.borda-r]:hover:bg-[#ff6a00] [&>.borda-b]:hover:bg-[#2087e2] [&>.borda-t]:hover:bg-[#ff6a00] [&>.borda-l]:hover:h-full [&>.borda-r]:hover:h-full [&>.borda-b]:hover:h-[1px] [&>.borda-t]:hover:h-[1px] [&>.borda-l]:hover:translate-y-0 [&>.borda-r]:hover:translate-y-0 [&>.borda-b]:hover:translate-x-0 [&>.borda-t]:hover:translate-x-0"
                    onClick={() => setState(1)}
                >
                    <div className="borda-l absolute left-0 bottom-0 w-[1px] h-full bg-none -translate-y-full transition-all duration-300"></div>
                    <div className="borda-r absolute right-0 bottom-0 w-[1px] h-full bg-none translate-y-full transition-all duration-300"></div>
                    <div className="borda-b absolute left-0 bottom-0 w-full h-[1px] bg-none -translate-x-full transition-all duration-300"></div>
                    <div className="borda-t absolute right-0 top-0 w-full h-[1px] bg-none translate-x-full transition-all duration-300"></div>
                    Social Media
                </button>
                <button
                    className="w-40 h-full relative [&>.borda-l]:hover:bg-[#2087e2] [&>.borda-r]:hover:bg-[#ff6a00] [&>.borda-b]:hover:bg-[#2087e2] [&>.borda-t]:hover:bg-[#ff6a00] [&>.borda-l]:hover:h-full [&>.borda-r]:hover:h-full [&>.borda-b]:hover:h-[1px] [&>.borda-t]:hover:h-[1px] [&>.borda-l]:hover:translate-y-0 [&>.borda-r]:hover:translate-y-0 [&>.borda-b]:hover:translate-x-0 [&>.borda-t]:hover:translate-x-0"
                    onClick={() => setState(2)}
                >
                    <div className="borda-l absolute left-0 bottom-0 w-[1px] h-full bg-none -translate-y-full transition-all duration-300"></div>
                    <div className="borda-r absolute right-0 bottom-0 w-[1px] h-full bg-none translate-y-full transition-all duration-300"></div>
                    <div className="borda-b absolute left-0 bottom-0 w-full h-[1px] bg-none -translate-x-full transition-all duration-300"></div>
                    <div className="borda-t absolute right-0 top-0 w-full h-[1px] bg-none translate-x-full transition-all duration-300"></div>
                    Consultoria
                </button>
            </div>
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                useKeyboardArrows={true}
                infiniteLoop={true}
                autoPlay={false}
                interval={10000}
                stopOnHover={true}
                selectedItem={state}
            >
                <WebSistems />
                <SocialMedia />
                <Consulting />
            </Carousel>
        </>
    );
};
