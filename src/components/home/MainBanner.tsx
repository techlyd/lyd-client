import Image from "next/image";
import { full_service } from "@/assets/img";

import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { SiWebpack } from "react-icons/si";
import { TbSocial } from "react-icons/tb";
import { BiConversation } from "react-icons/bi";

export const MainBanner = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center px-28 pt-32 gap-4">
            <div className="w-1/2 flex flex-col justify-center gap-5">
                <p className="text-base font-semibold text-slate-500">
                    Bem-vindo(a) à
                </p>
                <p className="text-5xl font-extrabold flex gap-3">
                    <strong className="font-extrabold text-blue-700">
                        lyd
                    </strong>
                    technology
                </p>
                <p className="text-base font-semibold text-slate-500">
                    Somos uma equipe de profissionais apaixonados por criar
                    soluções digitais que impulsionam o crescimento dos
                    negócios.
                </p>
                <p className="font-bold">
                    Oferecemos uma ampla gama de serviços, incluindo:
                </p>
                <div className="flex flex-col gap-3 text-white">
                    <div className="flex items-center justify-start gap-2">
                        <SiWebpack size={30} color="blue" />
                        <p>Desenvolvimento de sites e sistemas</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <TbSocial size={30} color="blue" />
                        <p>Gestão de Social media</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <BiConversation size={30} color="blue" />
                        <p>Consultoria especializada.</p>
                    </div>
                </div>
                <p className="text-base italic">
                    Nossa missão é ajudar sua empresa a se destacar na era
                    digital, combinando criatividade, tecnologia e estratégias
                    eficazes.
                </p>
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <Image src={full_service} alt="wee" width={550} height={550} />
            </div>
            <button className="w-8 h-10 flex items-center justify-center rounded-md absolute bottom-2 border-2 border-white hover:bg-white hover:text-[#0b1232]">
                <TbArrowBigDownLinesFilled size={20} />
            </button>
        </div>
    );
};
