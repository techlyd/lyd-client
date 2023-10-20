export const MainBanner = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100 px-28 pt-32 gap-4">
            <div className="w-1/2 flex flex-col justify-center gap-5">
                <p className="text-base font-semibold text-gray-500">
                    Bem-vindo(a) à
                </p>
                <p className="text-5xl font-extrabold flex gap-3">
                    <strong className="font-extrabold text-blue-700">
                        lyd
                    </strong>
                    technology
                </p>
                <p className="text-base font-semibold text-gray-500">
                    Somos uma equipe de profissionais apaixonados por criar
                    soluções digitais que impulsionam o crescimento dos
                    negócios.
                </p>
                <p className="font-bold">
                    Oferecemos uma ampla gama de serviços, incluindo:
                </p>
                <div>
                    <div className="flex">
                        <p>icon</p>
                        <p>Desenvolvimento web</p>
                    </div>
                    <div className="flex">
                        <p>icon</p>
                        <p>Estratégias de tráfego e social media</p>
                    </div>
                    <div className="flex">
                        <p>icon</p>
                        <p>Consultoria especializada.</p>
                    </div>
                </div>
                <p className="text-base text-gray-400 italic">
                    Nossa missão é ajudar sua empresa a se destacar na era
                    digital, combinando criatividade, tecnologia e estratégias
                    eficazes.
                </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">IMAGEM</div>
        </div>
    );
};
