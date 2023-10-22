import Image from "next/image";
import mock from "@/assets/img/mocksite-layout.png";

export const Mock = () => {
    return (
        <div className="w-full h-screen">
            <Image
                src={mock}
                alt="mock"
                width={1000}
                height={1000}
                className="w-full"
            />
        </div>
    );
};
