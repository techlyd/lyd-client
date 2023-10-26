import Image from "next/image";
import { sellphone, passguard } from "@/assets/img";

export const Legacy = () => {
    return (
        <section className="w-full h-full flex bg-[#0B1340] text-white py-20">
            <div className="w-full h-full flex items-center justify-center px-28">
                <div className="w-1/2 flex flex-col justify-center gap-4">
                    <div className="w-full text-3xl font-bold uppercase">
                        <h1 className="text-[#2087e2]">
                            Onde a lyd deixou sua marca
                        </h1>
                        <span className="w-5/6 h-[1.5px] flex bg-[#2087e2] my-2"></span>
                    </div>
                    <p>
                        Empresas e projetos que ajudamos a consolidar no mercado
                        e que nos deixam cheios de orgulho.
                    </p>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="w-full h-full flex flex-wrap items-center justify-center gap-10">
                        <div className="w-fit h-fit flex items-center justify-center bg-[#040a5e3a] rounded-3xl p-10 saturate-0 hover:saturate-100 hover:bg-[#4454ff25] duration-500">
                            <Image
                                src={sellphone}
                                alt="logos"
                                width={75}
                                height={75}
                                className="object-cover"
                            />
                        </div>
                        <div className="w-fit h-fit flex items-center justify-center bg-[#040a5e3a] rounded-3xl p-10 saturate-0 hover:saturate-100 hover:bg-[#4454ff25] duration-500">
                            <Image
                                src={passguard}
                                alt="logos"
                                width={75}
                                height={75}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
