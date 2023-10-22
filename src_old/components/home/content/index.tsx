import { MainBanner } from "./MainBanner";
import { MainContent } from "./MainContent";
import { Other } from "./Other";

export const Content = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <MainBanner />
            <MainContent />
            <Other />
        </div>
    );
};
