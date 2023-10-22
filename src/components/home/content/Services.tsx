import Image from "next/image";
import lamp from "@/assets/img/lamp-img.png";
import web from "@/assets/img/software-e-sistemas-web.png";
import site from "@/assets/img/site.png";
import ecommerce from "@/assets/img/ecommerce.png";

export const Services = () => {
    return (
        <div className="w-full h-full">
            <section className="w-full h-full">
                <div className="w-full h-full flex py-10 px-28 gap-10">
                    <div className="w-1/2 flex flex-col justify-center gap-4">
                        <div className="w-3/6 text-3xl uppercase">
                            <h1 className="text-[#2087e2]">O que fazemos ?</h1>
                            <span className="w-full h-[1.5px] flex bg-[#2087e2] my-2"></span>
                        </div>
                        <div className="flex flex-col gap-6 text-sm">
                            <p>
                                Arquitetamos soluções para empresas por meio de
                                desenvolvimento de sistemas. Atuamos em todas as
                                etapas do processo de criação do produto, desde
                                a consutoria até a entrega final.
                            </p>
                            <p>
                                Nosso time de especialistas está pronto para
                                atender às expectativas de todos os projetos que
                                fazem parte do nosso dia a dia. Projetamos as
                                suas necessidades e transformamos em solução.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <Image
                            src={lamp}
                            alt="lamp"
                            width={300}
                            height={300}
                            className="rotate-12"
                        />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-10 pb-14">
                    <h1 className="w-1/2 text-2xl font-black text-[#2087e2] text-center uppercase leading-10">
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
                                    src={web}
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
            </section>
            <section className="w-full h-full flex bg-white text-[#0b1232] py-14">
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
                            Oferecemos uma consultoria de ponta a ponta onde
                            criamos um estudo de viabilidade para cada projeto,
                            entre outros aspectos fundamentais para o
                            desenvolvimento do mesmo. Sempre buscando o melhor
                            resultado de performance, estabilidade e segurança
                            para o seu projeto.
                        </p>
                        <p>
                            Nosso time está pronto para desenvolver o seu
                            produto de forma exclusiva e descomplicada, que
                            funciona para a sua necessidade.
                        </p>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <p>img</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1>Como fazemos</h1>
                    <span></span>
                </div>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <h1>Onde a lyd deixou sua marca</h1>
                        <span></span>
                    </div>
                    <p>
                        Empresas e projetos que ajudamos a consolidar no mercado
                        e que nos deixam cheios de orgulho.
                    </p>
                </div>
                <div></div>
            </section>
            <section>
                <div>
                    <div>
                        <h1>O que dizem sobre a lyd</h1>
                        <span></span>
                    </div>
                    <p>
                        A satisfação de nossos clientes é o que realmente
                        importa. Confira a opinião de quem já confiou em nós.
                    </p>
                </div>
                <div></div>
            </section>
        </div>
    );
};
