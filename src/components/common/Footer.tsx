import { Contact } from "../home/Contact";

export const Footer = () => {
    return (
        <div>
            <Contact />
            <div className="w-full flex items-center justify-between px-28 py-5 text-xs text-white bg-slate-500">
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
