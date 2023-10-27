import Image from "next/image";

import { whats } from "@/assets/img";

export const WhatsApp = () => {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5541988185024"
            target="_blank"
            className="w-fit h-fit fixed bottom-24 right-5 cursor-pointer"
        >
            <Image src={whats} alt="whatsapp" width={55} height={55} />
        </a>
    );
};
