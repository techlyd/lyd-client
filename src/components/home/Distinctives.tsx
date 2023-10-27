"use client";

import Image from "next/image";
import { dev } from "@/assets/img";

export const Distinctives = () => {
    return (
        <section className="w-full h-full flex bg-[#0B1340] text-white py-14">
            <div className="w-full h-full flex items-center justify-center px-28">
                <div className="w-1/2 flex flex-col justify-center gap-4">
                    <div className="w-full text-3xl font-bold uppercase">
                        <h1 className="text-[#2087e2]">
                            Por que somos diferentes?
                        </h1>
                        <span className="w-4/5 h-[1.5px] flex bg-[#2087e2] my-2"></span>
                    </div>
                    <p>Ajudamos a tirar o seu projeto do papel.</p>
                    <p>
                        Oferecemos uma consultoria de ponta a ponta onde criamos
                        um estudo de viabilidade para cada projeto, entre outros
                        aspectos fundamentais para o desenvolvimento do mesmo.
                        Sempre buscando o melhor resultado de performance,
                        estabilidade e segurança para o seu projeto.
                    </p>
                    <p>
                        Nosso time está pronto para desenvolver o seu produto de
                        forma exclusiva e descomplicada, que funciona para a sua
                        necessidade.
                    </p>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <Image
                        src={dev}
                        alt="logos"
                        width={550}
                        height={550}
                        className="max-w-[50%] absolute"
                    />
                </div>
            </div>
        </section>
    );
};
