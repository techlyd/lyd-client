import { OurWork } from "./OurWork";
import { MainBanner } from "./MainBanner";
import { Distinctives } from "./Distinctives";
import { Approach } from "./Approach";
import { Legacy } from "./Legacy";
import { Testimonials } from "./Testimonials";
import { Team } from "./Team";

export const HomePage = () => {
    return (
        <>
            <MainBanner />
            <OurWork />
            <Distinctives />
            <Approach />
            <Legacy />
            <Testimonials />
            <Team />
        </>
    );
};
