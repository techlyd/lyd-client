const Services = () => {
    return (
        <div>
            <h1>
                DESENVOLVEDOS SISTEMAS E SITES SOB MEDIDA PARA EMPRESAS E
                INDÚSTRIAS COM PROBLEMAS REAIS
            </h1>
        </div>
    );
};

const WhatWeDo = () => {
    return (
        <div className="w-full h-full flex justify-center px-28 py-10">
            <div className="w-2/3 h-fit flex flex-col items-center justify-center">
                <div className="w-1/2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl uppercase font-bold text-[#4c4c4e]">
                        O que fazemos?
                    </h1>
                    <span className="w-3/4 h-[1.5px] rounded-full bg-blue-400 m-3"></span>
                </div>
                <div className="w-4/5 text-sm font-medium text-center m-3">
                    <p>
                        Conceituamos soluções empresariais através do
                        desenvolvimento de sistemas personalizados. Engajamos em
                        todas as fases do ciclo de criação do produto, desde a
                        consultoria inicial até a entrega definitiva.
                    </p>
                    <br />
                    <p>
                        Nossa equipe de profissionais altamente qualificados
                        está pronta para superar as demandas de cada projeto que
                        integra nossa rotina diária. Identificamos suas
                        necessidades e as convertemos em soluções sob medida,
                        visando um desempenho superior nos mecanismos de busca
                        do Google.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const MainContent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center bg-white">
            <WhatWeDo />
            <Services />
        </div>
    );
};
