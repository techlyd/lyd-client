import logo from "@/assets/img/lyd-logo.png";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="w-full h-32 flex items-center justify-between fixed top-0 left-0 px-28 bg-white shadow-md">
            <div className="flex items-center justify-center gap-4">
                <Image src={logo} alt="logo" width={100} height={100} />
                <h1 className="text-4xl font-medium">techlyd</h1>
            </div>
            <div>
                <nav>
                    <ul className="flex items-center justify-center gap-8">
                        <li className="hover:text-blue-400 cursor-pointer">
                            O que fazemos
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            Cases
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                            Quem somos
                        </li>
                        <button className="py-2 px-4 text-base font-medium border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:border-white hover:text-white">
                            Fale conosco
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
