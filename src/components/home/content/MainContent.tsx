import Image from "next/image";
import lamp from "@/assets/img/lamp-img.png";
import web from "@/assets/img/software-e-sistemas-web.png";
import site from "@/assets/img/site.png";
import ecommerce from "@/assets/img/ecommerce.png";

const Services = () => {
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
    );
};

export const MainContent = () => {
    return (
        <div className="w-full h-full">
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
                                etapas do processo de criação do produto, desde
                                a consutoria até a entrega final.
                            </p>
                            <p>
                                Nosso time de especialistas está pronto para
                                atender às expectativas de todos os projetos que
                                fazem parte do nosso dia a dia. Projetamos as
                                suas necessidades e transformamos em solução.
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
            <section className="py-20">
                <div className="w-full flex flex-col items-center justify-center gap-4 pb-20">
                    <div className="text-3xl text-center uppercase">
                        <h1 className="text-[#2087e2]">Como fazemos ?</h1>
                        <span className="w-full h-[1.5px] flex bg-[#2087e2] my-2"></span>
                    </div>
                    <p className="w-1/2 flex flex-col gap-6 text-sm text-center">
                        Nossa atuação é baseada em etapas que demandam o
                        envolvimento do cliente e permitem um acompanhamento
                        detalhado e completo de cada projeto. Afinal, o trabalho
                        em conjunto está em nosso DNA, e a parceria de cada
                        cliente é o segredo por trás do nosso sucesso.
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-center gap-36">
                    <div className="h-full flex flex-col items-center justify-center gap-24">
                        <div className="w-96 h-full flex relative bg-[#2087e2] rounded-2xl py-6 pr-6">
                            <div className="w-1/6">
                                <span className="w-14 h-14 flex items-center justify-center absolute left-[-25px] bg-[#0b1232] rounded-full text-xl font-bold border-4 border-[#2087e2]">
                                    1
                                </span>
                            </div>
                            <div className="w-5/6">
                                <h2 className="text-base text-gray-700 font-bold mb-1">
                                    O reconhecimento
                                </h2>
                                <h1 className="text-3xl text-white font-black mb-4">
                                    Identificação do problema
                                </h1>
                                <p className="text-sm text-gray-700 font-normal">
                                    A primeira etapa é baseada na necessidade do
                                    cliente de solucionar um problema em seu
                                    negócio.
                                    <br />
                                    <br />
                                    As dores são identificadas pela empresa e
                                    apresentadas a nossa equipe por meio de um
                                    bate-papo introdutório. Neste primeiro
                                    momento, a ideia é conhecer a necessidade do
                                    cliente, seja o desenvolvimento de um site,
                                    um software de gestão, um aplicativo móvel,
                                    uma plataforma, etc.
                                </p>
                            </div>
                        </div>
                        <div className="w-96 h-full flex relative bg-[#2087e2] rounded-2xl py-6 pr-6">
                            <div className="w-1/6">
                                <span className="w-14 h-14 flex items-center justify-center absolute left-[-25px] bg-[#0b1232] rounded-full text-xl font-bold border-4 border-[#2087e2]">
                                    3
                                </span>
                            </div>
                            <div className="w-5/6">
                                <h2 className="text-base text-gray-700 font-bold mb-1">
                                    O plano de ação
                                </h2>
                                <h1 className="text-3xl text-white font-black mb-4">
                                    Documentação do projeto
                                </h1>
                                <p className="text-sm text-gray-700 font-normal">
                                    Desenvolvemos um roteiro completo, que
                                    abrange todas as etapas do projeto, a
                                    descrição das funcionalidades, a
                                    apresentação das tecnologias utilizadas,
                                    entre outras informações fundamentais para
                                    facilitar o entendimento do cliente.
                                    <br />
                                    <br />O escopo e a documentação dos passos
                                    são essenciais para alinhar as demandas e
                                    expectativas da entrega do projeto.
                                </p>
                            </div>
                        </div>
                        <div className="w-96 h-full flex relative rounded-2xl py-6 pr-6"></div>
                    </div>
                    <div className="h-full flex flex-col items-center justify-center gap-24">
                        <div className="w-96 h-full flex relative rounded-2xl py-6 pr-6"></div>
                        <div className="w-96 h-1/3 flex relative bg-[#2087e2] rounded-2xl py-6 pr-6">
                            <div className="w-1/6">
                                <span className="w-14 h-14 flex items-center justify-center absolute left-[-25px] bg-[#0b1232] rounded-full text-xl font-bold border-4 border-[#2087e2]">
                                    2
                                </span>
                            </div>
                            <div className="w-5/6">
                                <h2 className="text-base text-gray-700 font-bold mb-1">
                                    O olhar profissional
                                </h2>
                                <h1 className="text-3xl text-white font-black mb-4">
                                    Análise de viabilidade
                                </h1>
                                <p className="text-sm text-gray-700 font-normal">
                                    Após a apresentação do problema, iniciamos o
                                    processo de análise de viabilidade do
                                    projeto e adequação às necessidades do
                                    cliente.
                                    <br />
                                    <br />
                                    Estudamos o negócio de maneira profunda,
                                    levantando as demandas da empresa e de que
                                    forma o projeto inicial poderia resolver as
                                    dores de maneira completa e eficiente.
                                    <br />
                                    <br />
                                    Esta etapa envolve o mapeamento das
                                    necessidades e processos do negócio e o
                                    estudo de viabilidade de execução do
                                    projeto.
                                </p>
                            </div>
                        </div>
                        <div className="w-96 h-1/3 flex relative bg-[#2087e2] rounded-2xl py-6 pr-6">
                            <div className="w-1/6">
                                <span className="w-14 h-14 flex items-center justify-center absolute left-[-25px] bg-[#0b1232] rounded-full text-xl font-bold border-4 border-[#2087e2]">
                                    4
                                </span>
                            </div>
                            <div className="w-5/6">
                                <h2 className="text-base text-gray-700 font-bold mb-1">
                                    Saindo do papel
                                </h2>
                                <h1 className="text-3xl text-white font-black mb-4">
                                    Construção do protótipo
                                </h1>
                                <p className="text-sm text-gray-700 font-normal">
                                    Após toda a documentação, damos início ao
                                    desenvolvimento do projeto.
                                    <br />
                                    <br />É nesta etapa que ocorre a
                                    prototipagem do sistema/software com base
                                    nas melhores tecnologias e alta expertise de
                                    profissionais capacitados para desenvolver
                                    ferramentas flexíveis e escaláveis para as
                                    necessidades do cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col items-center justify-center gap-4 py-20 bg-[#0B1340]">
                    <div className="w-full flex flex-col items-center justify-center pb-14">
                        <div className="text-3xl text-center uppercase pb-4">
                            <h1 className="text-[#2087e2]">
                                Onde a lyd deixou sua marca
                            </h1>
                            <span className="w-full h-[1.5px] flex bg-[#2087e2] my-2"></span>
                        </div>
                        <p className="w-1/3 flex flex-col gap-6 text-sm text-center">
                            Empresas e projetos que ajudamos a consolidar no
                            mercado e que nos deixam cheios de orgulho.
                        </p>
                    </div>
                    <div>
                        <div>{"cases >>"}</div>
                        <div>{"<< cases"}</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col items-center justify-center gap-4 py-20">
                    <div className="w-full flex flex-col items-center justify-center pb-14">
                        <div className="text-3xl text-center uppercase pb-4">
                            <h1 className="text-[#2087e2]">
                                O que dizem sobre a lyd
                            </h1>
                            <span className="w-full h-[1.5px] flex bg-[#2087e2] my-2"></span>
                        </div>
                        <p className="w-1/3 flex flex-col gap-6 text-sm text-center">
                            A satisfação de nossos clientes é o que realmente
                            importa. Confira a opinião de quem já confiou em
                            nós.
                        </p>
                    </div>
                    <div>TESTEMUNHAS E AVALIAÇÕES</div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col items-center justify-center gap-4 py-20 bg-[#0B1340]">
                    <div className="w-full flex flex-col items-center justify-center pb-14">
                        <div className="text-3xl text-center uppercase pb-4">
                            <h1 className="text-[#2087e2]">Quem somos nós</h1>
                            <span className="w-full h-[1.5px] flex bg-[#2087e2] my-2"></span>
                        </div>
                        <p className="w-1/3 flex flex-col gap-6 text-sm text-center">
                            Conheça os profissionais por trás de todos os
                            processos
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-1/2 flex items-center justify-center">
                            YURI VIADINHO UIUIUI
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            Dorigostoso
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
