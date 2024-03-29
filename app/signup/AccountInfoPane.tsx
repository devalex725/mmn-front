import { useEffect, useState } from "react"

import DropDown from 'react-dropdown';
import { AccountInfo, Genders, CountryList } from "@/constants/types";

interface Props {
    account: AccountInfo | null, 
    setMember: (member: AccountInfo | null) => void
}

export default function AccountInfoPane(params: Props) {
    const [member, setMember] = useState<AccountInfo|null>(params.account);
    const handleOnChange = (key: keyof AccountInfo, value: any) => {
        setMember(prev => ({ ...prev!, [key]: value }));
        params.setMember(member);
    }

    return (
        <div className="flex flex-col gap-[10px] leading-[28px]">
            <div className="font-bold">{"Primary member information"}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px] ">
                <div>
                    <div className="pb-[5px]">First name*</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                        placeholder="Enter First Name"
                        value={member?.firstName || ''}
                        onChange={e => handleOnChange("firstName", e.target.value)}
                    />
                </div>
                
                <div>
                    <div className="pb-[5px]">Last name*</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                        placeholder="Enter Last Name"
                        value={member?.lastName || ''}
                        onChange={e => handleOnChange("lastName", e.target.value)}
                    />
                </div>

                <div>
                    <div className="pb-[5px]">Birth*</div>
                    <input type="date" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                        placeholder="Enter Birth"
                        value={member?.birth || ''}
                        onChange={e => handleOnChange("birth", e.target.value)}
                    />
                </div>

                <div>
                    <div className="pb-[5px]">Email id*</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                        placeholder="email@email.no"
                        value={member?.email || ''}
                        onChange={e => handleOnChange("email", e.target.value)}
                    />
                </div>
                
                <div>
                    <div className="pb-[5px]">Mobile no *</div>
                    <input type="text" className="px-[14px] py-[16px] border-[1px] border-[#BCBCBC] rounded-[6px] leading-[24px] w-full"
                        placeholder="+123456789"
                    />
                </div>

                <div>
                    <div className="pb-[5px]">Kommune*</div>
                    <DropDown options={CountryList}
                        controlClassName="!rounded-[6px] !pl-[14px] !py-[16px] !leading-[24px]"
                        arrowClassName={"!right-[27px] !top-[27px]"}
                        onChange={(e) => { handleOnChange("country", e.value) }}
                        value={member?.country || ""}
                        placeholder={"Select Kommune"} />
                </div>

                <div>
                    <div className="pb-[5px]">Gender*</div>
                    <DropDown options={Genders}
                        controlClassName="!rounded-[6px] !pl-[14px] !py-[16px] !leading-[24px]"
                        arrowClassName={"!right-[27px] !top-[27px]"}
                        onChange={(e) => { handleOnChange("gender", e.value) }}
                        value={member?.gender || ""}
                        placeholder={"Select your Gender"} />
                </div>
            </div>
        </div>

    )
}