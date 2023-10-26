import { Services } from "./Services";

export const OurWork = () => {
    return (
        <section className="w-full h-full">
            <div className="w-full h-full flex py-20 px-28 gap-10">
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <div className="text-3xl text-center uppercase">
                        <h1 className="text-[#2087e2]">O que fazemos ?</h1>
                        <span className="w-full h-[1.5px] flex bg-[#2087e2] my-2"></span>
                    </div>
                    <div className="w-2/3 flex flex-col gap-6 text-sm text-center">
                        <p>
                            Arquitetamos soluções para empresas por meio de
                            desenvolvimento de sistemas. Atuamos em todas as
                            etapas do processo de criação do produto, desde a
                            consutoria até a entrega final.
                        </p>
                        <p>
                            Nosso time de especialistas está pronto para atender
                            às expectativas de todos os projetos que fazem parte
                            do nosso dia a dia. Projetamos as suas necessidades
                            e transformamos em solução.
                        </p>
                        {/* <div className="w-1/2 flex items-center justify-center">
                    <Image
                        src={lamp}
                        alt="lamp"
                        width={300}
                        height={300}
                        className="rotate-12"
                    />
                </div> */}
                    </div>
                </div>
            </div>
            <Services />
        </section>
    );
};
