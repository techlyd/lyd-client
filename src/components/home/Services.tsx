import Image from "next/image";

import { ecommerce, sistems, site } from "@/assets/img/index";

export const Services = () => {
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
            <div className="w-full flex items-center justify-center gap-20 text-xl font-bold">
                <div className="flex flex-col items-center justify-center gap-5">
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
                <div className="flex flex-col items-center justify-center gap-5">
                    <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                        <Image
                            src={site}
                            alt="software-e-sistemas-web"
                            width={175}
                            height={175}
                        />
                    </span>
                    <p>Websites</p>
                </div>
                {/* <div className="flex flex-col items-center justify-center gap-5">
                <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                    img
                </span>
                <p>Aplicativos mobile</p>
            </div> */}
                <div className="flex flex-col items-center justify-center gap-5">
                    <span className="w-52 h-52 flex items-center justify-center bg-[#2087e2] rounded-full">
                        <Image
                            src={ecommerce}
                            alt="software-e-sistemas-web"
                            width={175}
                            height={175}
                        />
                    </span>
                    <p>E-commerce</p>
                </div>
            </div>
        </div>
    );
};
