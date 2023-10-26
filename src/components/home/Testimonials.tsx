import Image from "next/image";
import { ceo_sellphone } from "@/assets/img";

export const Testimonials = () => {
    return (
        <section className="w-full h-full flex text-white py-20">
            <div className="w-full h-full flex items-center justify-center px-28 gap-10">
                <div className="w-1/2 flex flex-col justify-center gap-4">
                    <div className="w-full text-3xl font-bold uppercase">
                        <h1 className="text-[#2087e2]">
                            O que dizem sobre a lyd
                        </h1>
                        <span className="w-4/5 h-[1.5px] flex bg-[#2087e2] my-2"></span>
                    </div>
                    <p className="w-4/5">
                        A satisfação de nossos clientes é o que realmente
                        importa. Confira a opinião de quem já confiou em nós.
                    </p>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        <div className="w-full flex items-center gap-5">
                            <div className="w-fit h-full bg-blue-500 rounded-s-full rounded-tr-full p-1">
                                <Image
                                    src={ceo_sellphone}
                                    alt="logos"
                                    width={75}
                                    height={75}
                                    className="object-cover rounded-s-full rounded-tr-full"
                                />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">
                                    Rafael Lourenzo
                                </p>
                                <p className="text-xl font-medium text-gray-500">
                                    CEO - SellPhone
                                </p>
                            </div>
                        </div>
                        <div className="w-fit h-fit bg-blue-500 rounded-e-3xl rounded-bl-3xl p-4 ml-20">
                            <p className="text-sm font-medium italic">
                                {'"'} Mesmo investindo consideravelmente em
                                recursos no marketing interno, minha empresa
                                enfrentava problemas nas vendas online. Ao
                                contratar diversas agências de marketing, porém,
                                a entrega dos serviços foi inconsistente e os
                                problemas persistiam. Agora, com os serviços da
                                Lyd, obtenho um retorno claro do investimento,
                                excelente trabalho. {'"'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
