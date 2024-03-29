"use client";

import TopNav from "@/components/TopNav";
import MMNContainer from "@/components/MMNContainer";
import BlogPane from "@/app/membership/BlogPane";
import PaymentCard from "../PaymentCard";
import AccountInfoPane from '../AccountInfoPane';
import { AccountInfo } from "@/constants/types";

import { useRouter } from "next/navigation";
import MMNButton from "@/components/MMNButton";

const NavData = [
    { title: "Home", link: "/home" },
    { title: "Membership", link: "#" },
];

export default function SignUpManualPage() {
    const router = useRouter();

    const setMember = (member: AccountInfo | null) => {

    }

    return (
        <>
            <TopNav itemList={NavData} />
            <MMNContainer className="gap-[40px] pb-[40px]">
                <div className="flex flex-col gap-[20px] grow-[2]">
                    <BlogPane />
                    <AccountInfoPane account={null} setMember={setMember} />

                    <div className="grid grid-cols-2 gap-[26px]">
                        <div>
                            <div className="pb-[5px]">Type password*</div>
                            <input type="password" className="px-[14px] py-[16px] border-[1px] border-color-mmn-grey rounded-[6px] line-height-mmn-medium w-full"
                                placeholder="Enter Password"
                            />
                        </div>

                        <div>
                            <div className="pb-[5px]">Re-Type password*</div>
                            <input type="password" className="px-[14px] py-[16px] border-[1px] border-color-mmn-grey rounded-[6px] line-height-mmn-medium w-full"
                                placeholder="Re-Enter Password"
                            />
                        </div>
                    </div>

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