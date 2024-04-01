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
    const { data: session } = useSession();
    const [member, setMember] = useState<AccountInfo | null>(null);

    useEffect(() => {
        if (!session?.user) return

        setMember({
            firstName: session.user.name || '',
            email: session.user.email || '',
        })
    }, [session]);
    
    return (
        <>
            <TopNav itemList={NavData} />
            <MMNContainer className="gap-[40px] pb-[40px]">
                <div className="flex flex-col gap-[20px] grow-[2]">
                    <BlogPane />
                    <AccountInfoPane account={member} setMember={setMember} />

                    <div className="line-height-mmn-large font-bold">Add family members</div>
                    <div>
                        <MMNButton title={"+ Add family member"} color="white" className={"border border-color-mmn-purple"} />
                    </div>

                </div>
                <PaymentCard />
            </MMNContainer>
        </>
    );
}