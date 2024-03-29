"use client";

import TopNav from "@/components/TopNav";
import MMNContainer from "@/components/MMNContainer";
import MMNButton from "@/components/MMNButton";

import BlogPane from "@/app/membership/BlogPane";
import PaymentCard from "../PaymentCard";
import AccountInfoPane from '../AccountInfoPane';
import { AccountInfo } from "@/constants/types";

import { useRouter } from "next/navigation";

import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react";

const NavData = [
    { title: "Home", link: "/home" },
    { title: "Membership", link: "#" },
];

export default function SignUpGooglePage() {
    const router = useRouter();
    const {data: session} = useSession();

    const defMember : AccountInfo = {
        firstName: session?.user?.name as string,
        email: session?.user?.email as string,
    };
    
    const [member, setMember] = useState<AccountInfo | null>(defMember);

    return (
        <>
            <TopNav itemList={NavData} />
            <MMNContainer className="gap-[40px] pb-[40px]">
                <div className="flex flex-col gap-[20px] grow-[2]">
                    <BlogPane />
                    <AccountInfoPane account={defMember} setMember={setMember} />

                    <div className="leading-[28px] font-bold">Add family members</div>
                    <div>
                        <MMNButton title={"+ Add family member"} color="white" className={"border border-[#00205B]"} />
                    </div>

                </div>
                <PaymentCard />
            </MMNContainer>
        </>
    );
}