"use client";

import { Metadata } from "next";
import { GetPageTitle, FavIcon } from "../../constants"

import TopNav from "@/components/TopNav";
import MMNContainer from "@/components/Container";
import MMNButton from "@/components/Button";
import GoogleButton from "@/components/GoogleButton";

import BlogPane from "../membership/BlogPane";
import RenewMemberCard from "../membership/RenewMemberCard";

import { useRouter } from "next/navigation";

const title = GetPageTitle("Membership");

// export const metadata = {
//     title: title,
//     icons: FavIcon
// };

const NavData = [
    { title: "Home", link: "/home" },
    { title: "Membership", link: "#" },
]; 
export default function MemberShipPage() {
    const router = useRouter();
    const handleManualClick = () => {
        
    }

    return (
        <>
            <TopNav itemList={NavData} />
            <MMNContainer className="gap-[40px] pb-[40px]">
                <div className="flex flex-col gap-[20px] grow-[2]">
                    <BlogPane />

                    
                </div>

            </MMNContainer>
        </>
    );
}