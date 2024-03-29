"use client";

import { GetPageTitle, FavIcon } from "../../constants"
import TopNav from "@/components/TopNav";
import MMNContainer from "@/components/Container";
import BlogPane from "./BlogPane";
import MMNButton from "@/components/Button";
import GoogleButton from "@/components/GoogleButton";
import RenewMemberCard from "./RenewMemberCard";
import { useRouter } from "next/navigation";
const title = GetPageTitle("Membership");

const NavData = [
    { title: "Home", link: "/home" },
    { title: "Membership", link: "#" },
];

export default function MemberShipPage() {
    const router = useRouter();
    const handleManualClick = () => {
        router.push("/signup");
    }

    return (
        <>
            <TopNav itemList={NavData} />
            <MMNContainer className="gap-[40px] pb-[40px]">
                <div className="flex flex-col gap-[20px] grow-[2]">
                    <BlogPane />
                    <div className="flex flex-col gap-[20px] w-1/2 pr-[30px]">
                        <GoogleButton title={"Signup with Google"} className="max-w-full" />
                        <div onClick={handleManualClick} className="">
                            <MMNButton title="Sign up manually" color="purple" className={"w-full"} />
                        </div>
                    </div>
                </div>

                <RenewMemberCard className="max-w-[420px]" />
            </MMNContainer>
        </>
    );
}