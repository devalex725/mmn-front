import { AccountInfo } from "@/constants/types"
import { useEffect, useState } from "react"

interface Props {
    account: AccountInfo,
    editable: boolean,
    type: "manual" | "google" | "family"
}

export default function MemberInfoPane(params: Props) {
    const [member, setMember] = useState<AccountInfo>();
    const defAccountInfo: AccountInfo = params.account;

    useEffect(() => { setMember(params.account) }, [defAccountInfo]);

    const handleOnChange = (key: keyof AccountInfo, value: any) => {
        setMember(prev => ({ ...prev!, [key]: value }));
    }

    return (
        <div className="flex flex-col gap-[10px]">
            <div className="font-bold leading-[28px]">Member1</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px] leading-[28px]">
                <div>
                    <div>First name*</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                        placeholder="Enter First Name"
                        value={member?.firstName}
                        onChange={e => handleOnChange("firstName", e.target.value)}
                    />
                </div>
                <div>
                    <div>Last name*</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                        placeholder="Enter Last Name"
                        value={member?.lastName}
                        onChange={e => handleOnChange("lastName", e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}