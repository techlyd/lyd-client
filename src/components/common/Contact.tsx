import {
    MdOutlineContacts,
    MdAlternateEmail,
    MdOutlinePhoneInTalk,
    MdWhatsapp,
} from "react-icons/md";

export const Contact = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-500">
            <div className="w-1/3 h-full flex flex-col items-center justify-center my-14">
                <h1 className="w-full text-center text-3xl font-semibold text-blue-400 uppercase">
                    Vamos falar sobre o seu projeto?
                </h1>
                <span className="w-2/3 h-[1px] rounded-full bg-blue-400 mt-4"></span>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between px-28 py-8 bg-blue-400 rounded-t-[100%]">
                <p className="w-1/3 text-base font-medium text-center text-white mb-8">
                    Conte-nos sobre a sua ideia e vamos desenvolver uma solução
                    incrível juntos!
                </p>
                <form className="w-2/5 flex flex-col gap-5 ">
                    <div className="w-full h-12 flex items-center justify-center">
                        <div className="h-full flex items-center justify-center p-3 bg-white rounded-s-sm ">
                            <MdOutlineContacts size={20} />
                        </div>
                        <div className="w-[1.5px] h-full flex items-center justify-center bg-white">
                            <span className="w-full h-3/5 bg-gray-200 rounded-full"></span>
                        </div>
                        <input
                            placeholder="Nome"
                            className="w-full h-full outline-none rounded-e-sm pl-3"
                        />
                    </div>
                    <div className="w-full h-12 flex">
                        <div className="flex items-center justify-center p-3 bg-white rounded-s-sm">
                            <MdAlternateEmail size={20} />
                        </div>
                        <div className="w-[1.5px] h-full flex items-center justify-center bg-white">
                            <span className="w-full h-3/5 bg-gray-200 rounded-full"></span>
                        </div>
                        <input
                            placeholder="Email"
                            className="w-full outline-none rounded-e-sm pl-3"
                        />
                    </div>
                    <div className="w-full h-12 flex">
                        <div className="flex items-center justify-center p-3 bg-white rounded-s-sm">
                            <MdOutlinePhoneInTalk size={20} />
                        </div>
                        <div className="w-[1.5px] h-full flex items-center justify-center bg-white">
                            <span className="w-full h-3/5 bg-gray-200 rounded-full"></span>
                        </div>
                        <input
                            placeholder="Telefone"
                            className="w-full outline-none rounded-e-sm pl-3"
                        />
                    </div>
                    <textarea
                        placeholder="Mensagem"
                        className="h-40 resize-none p-2 outline-none rounded-sm"
                    />
                    <div className="w-full flex items-center justify-center gap-8">
                        <button className="py-1 px-8 text-white border-2 border-white rounded-md hover:bg-gray-500 hover:border-blue-400 transition-all">
                            Enviar
                        </button>
                        <p className="text-xs text-white">
                            [x] Ao enviar meus dados declaro que li e concordo
                            com a{" "}
                            <strong className="underline text-xs font-medium">
                                Política de Privacidade.
                            </strong>
                        </p>
                    </div>
                </form>
                <a
                    href="https://wa.me/5541988185024"
                    target="_blank"
                    className="w-2/5 h-full flex items-center justify-around bg-white rounded-full py-2 px-4 mt-8 cursor-pointer"
                >
                    <MdWhatsapp size={35} color="green" />
                    <div className="text-sm text-center">
                        <p>
                            Se preferir fazer um{" "}
                            <strong className="text-blue-400">
                                contato imediato
                            </strong>
                        </p>
                        <p>Clique aqui e fale com um consulktor agora mesmo</p>
                    </div>
                </a>
            </div>
        </div>
    );
};
