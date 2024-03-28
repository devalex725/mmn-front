import { Metadata } from "next";
import { GetPageTitle, FavIcon } from "../../constants";
import MMNContainer from "@/components/Container";
import MMNTitle1 from "@/components/TItle-1";
import MMNPanel from "@/components/Panel";
import MMNButton from "@/components/Button";
import GoogleButton from "@/components/GoogleButton";
import AboutPane from "./AboutPane";
import VolunteerCard from "./VoluteerCard";
import LoginCard from "./LoginCard";
import MemberCard from "./MemberCard";
import SliderPane from "./SliderPane";

const title = GetPageTitle("Home");

export const metadata = {
    title : title,
    icons: FavIcon
};

export default function MemberShipPage(){
    return (
        <>
            <SliderPane />
            <AboutPane />
            <MMNContainer>
                <div className="xl:grid xl:grid-cols-3 gap-[40px] pb-[40px] flex flex-col">
                    <VolunteerCard />
                    <LoginCard />
                    <MemberCard />
                </div>
            </MMNContainer>
        </>
    );
}