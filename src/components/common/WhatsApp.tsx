import { RiWhatsappFill } from "react-icons/ri";

export const WhatsApp = () => {
    return (
        <a
            href="https://wa.me/5541988185024"
            target="_blank"
            className="w-fit h-fit fixed flex items-center justify-center z-10 bottom-4 right-4"
        >
            <div className="w-2/3 h-2/3 bg-white absolute rounded-full"></div>
            <RiWhatsappFill size={55} color="#25D366" className="relative" />
        </a>
    );
};
