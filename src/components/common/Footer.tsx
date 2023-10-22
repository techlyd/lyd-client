import {
    MdOutlineContacts,
    MdAlternateEmail,
    MdOutlinePhoneInTalk,
    MdWhatsapp,
} from "react-icons/md";

const Contact = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-1/3 h-full flex flex-col items-center justify-center my-14">
                <h1 className="w-full text-center text-3xl font-semibold text-blue-400 uppercase">
                    Vamos falar sobre o seu projeto?
                </h1>
                <span className="w-2/3 h-[1px] rounded-full bg-blue-400 mt-4"></span>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between px-28 py-8 bg-[#2088e3] rounded-t-[100%]">
                <p className="w-1/3 text-base font-medium text-center text-[#0b1232] mb-8">
                    Conte-nos sobre a sua ideia e vamos desenvolver uma solução
                    incrível juntos!
                </p>
                <form className="w-2/5 flex flex-col gap-5 ">
                    <div className="w-full h-12 flex items-center justify-center">
                        <div className="h-full flex items-center justify-center p-3 bg-[#0b1232] rounded-s-sm">
                            <MdOutlineContacts size={20} />
                        </div>
                        <div className="w-[1.5px] h-full flex items-center justify-center bg-[#0b1232]">
                            <span className="w-full h-3/5 bg-[#414c50] rounded-full"></span>
                        </div>
                        <input
                            placeholder="Nome"
                            className="w-full h-full outline-none rounded-e-sm pl-3 bg-[#0b1232]"
                        />
                    </div>
                    <div className="w-full h-12 flex">
                        <div className="flex items-center justify-center p-3 bg-[#0b1232] rounded-s-sm">
                            <MdAlternateEmail size={20} />
                        </div>
                        <div className="w-[1.5px] h-full flex items-center justify-center bg-[#0b1232]">
                            <span className="w-full h-3/5 bg-[#414c50] rounded-full"></span>
                        </div>
                        <input
                            placeholder="Email"
                            className="w-full outline-none rounded-e-sm pl-3 bg-[#0b1232]"
                        />
                    </div>
                    <div className="w-full h-12 flex">
                        <div className="flex items-center justify-center p-3 bg-[#0b1232] rounded-s-sm">
                            <MdOutlinePhoneInTalk size={20} />
                        </div>
                        <div className="w-[1.5px] h-full flex items-center justify-center bg-[#0b1232]">
                            <span className="w-full h-3/5 bg-[#414c50] rounded-full"></span>
                        </div>
                        <input
                            placeholder="Telefone"
                            className="w-full outline-none rounded-e-sm pl-3 bg-[#0b1232]"
                        />
                    </div>
                    <textarea
                        placeholder="Mensagem"
                        className="h-40 resize-none p-2 outline-none rounded-sm bg-[#0b1232]"
                    />
                    <div className="w-full flex items-center justify-center gap-8">
                        <button className="py-1 px-8 font-medium text-[#0b1232] border-2 border-[#0b1232] rounded-md hover:bg-[#0b1232] hover:border-[#2088e3] hover:text-[#2088e3]">
                            Enviar
                        </button>
                        <p className="text-xs text-[#0b1232]">
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
                    className="w-2/5 h-full flex items-center justify-around bg-[#0b1232] rounded-full py-2 px-4 mt-8 cursor-pointer"
                >
                    <MdWhatsapp size={35} color="green" />
                    <div className="text-sm text-center">
                        <p>
                            Se preferir fazer um{" "}
                            <strong className="text-blue-400">
                                contato imediato
                            </strong>
                        </p>
                        <p>Clique aqui e fale com um consultor agora mesmo</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export const Footer = () => {
    return (
        <div>
            <Contact />
            <div className="w-full flex items-center justify-between px-28 py-5 text-xs text-white">
                <div className="flex gap-4">
                    <p>+55 (41) 9 8818-5024</p>
                    <p>contato.techlyd@gmail.com</p>
                </div>
                <div className="flex">
                    <p>Todos os direitos reservados © techlyd 2022</p>
                </div>
            </div>
        </div>
    );
};
